//@ts-nocheck
//NPM Packages
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//Local imports
import fields from "./assets/fields-login.json";
import InputField from "components/shared/InputField";
import { signIn } from "scripts/auth";
import { getDocument } from "scripts/fireStore";
import { useAuth } from "state/AuthProvider";

export default function Login() {
  // Global states
  const { setLoggedIn, setUser } = useAuth();
  const history = useHistory();

  //Local states
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const account = await signIn(form.email, form.password);
    account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const document = await getDocument("users", uid);
    setUser(document);
    setLoggedIn(true);
    if (remember) localStorage.setItem("uid", uid);
    history.push("/");
  }

  function onFailure(code) {
    setMessage(code);
  }

  //Components
  const Fields = fields.map((item, index) => (
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
            <h1 className="title">Sign In</h1>
            {Fields}

            <div className="remember-recover">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <p>Remember me</p>
              </label>
              <Link to="/recover" className="help">
                Lost your password ?
              </Link>
            </div>

            <button className="btn btn-blue">Sign In</button>
            <p className="error-firebase">{message}</p>

            <p className="optional-action">
              Not yet a member ?&nbsp;
              <Link to="/signup">
                <strong>Sign up now.</strong>
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
