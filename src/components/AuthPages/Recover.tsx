//@ts-nocheck
//NPM Packages
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

//Local imports
import fields from "./assets/fields-recover.json";
import InputField from "../shared/InputField";
import { recover } from "scripts/auth";

export default function Recover() {
  //Local states
  const [form, setForm] = useState({ email: "" });
  const [message, setMessage] = useState("");
  const history = useHistory();

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const account = await recover(form.email);
    account.isReset ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(message) {
    setMessage(message);
    history.push("/");
  }

  function onFailure(errorMessage) {
    setMessage(errorMessage);
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
    "https://cdn.dribbble.com/users/427368/screenshots/14239844/media/e12e66ddc8ac84da351f7c917b07d60a.jpg?compress=1&resize=800x600";

  return (
    <main className="page-login">
      <img src={imgBg} alt="" className="bg" />

      <div className="bloc">
        <div className="img-side">
          <img src={imgIllustration} alt="" />
        </div>
        <form onSubmit={onSubmit}>
          <h1 className="title">Password lost ?</h1>
          <h2>Don't worry we got your back, Just enter your email.</h2>
          {Fields}
          <p>{message}</p>
          <button className="btn btn-blue">Recover Password</button>

          <p className="optional-action">
            Not yet a member ?&nbsp;
            <Link to="/signup">
              <strong>Sign up now.</strong>
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
