//@ts-nocheck
//NPM Packages
import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

//Local imports
import fields from "./assets/fields-signup.json";
import InputField from "../shared/InputField";
import { createAccount } from "scripts/auth";
import { useAuth } from "state/AuthProvider";
import { createDocumentWithId } from "scripts/fireStore";

export default function Signup() {
  //Local states
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { setLoggedIn, setUser } = useAuth();

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const account = await createAccount(form.email, form.password);
    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const newUser = {
      username: form.username,
      role: "client",
    };
    await createDocumentWithId("users", uid, newUser);
    setLoggedIn(true);
    setUser({ ...newUser, id: uid });

    history.push("/");
  }

  function onFailure(code) {
    setMessage(code);
  }

  //Components
  const Fields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));
  const imgBg =
    "https://cdn.dribbble.com/users/257123/screenshots/12096701/media/216ccbb7cbfeccb53e443bafba787550.png?compress=1&resize=1600x1200";

  const imgIllustration =
    "https://cdn.dribbble.com/users/1355613/screenshots/15392110/media/f53244c89ed7ee88b5249bce3374462c.jpg?compress=1&resize=1400x900";

  return (
    <>
      <main className="page-login">
        <img src={imgBg} alt="" className="bg" />
        <div className="bloc">
          <div className="img-side">
            <img src={imgIllustration} alt="" />
          </div>
          <form onSubmit={onSubmit}>
            <h1 className="title">Sign Up</h1>
            <h2>Just a few more steps and you're finished!</h2>
            {Fields}
            <button className="btn btn-blue">Sign Up</button>
            <p>{message}</p>
            <p className="optional-action">
              Already member ?&nbsp;
              <Link to="/">
                <strong>Sign In.</strong>
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
