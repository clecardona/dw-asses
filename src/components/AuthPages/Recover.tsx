//@ts-nocheck
//NPM Packages
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

//Local imports
import fields from "./assets/fields-recover.json";
import InputField from "../shared/InputField";
import { recover } from "scripts/auth";
import fletnixBg from "assets/img/fletnixBg.jpeg";

export default function Recover() {
  //Local states
  const [form, setForm] = useState({ email: "" });
  const [message, setMessage] = useState("");

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }
  console.log(message);
  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const account = await recover(form.email);
    account.isReset ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(message) {
    setMessage(message);
  }

  function onFailure(errorMessage) {
    setMessage(errorMessage);
  }

  function setStyle() {
    document.getElementById("footer").style.background = "";
    document.getElementById("footer").style.borderTop = "";
    document.getElementById("header").style.background = "";
  }

  useEffect(() => {
    setStyle();
  }, []);
  //Components
  const Fields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));
  return (
    <main className="page-login recover">
      <img src={fletnixBg} alt="bg" className="bg" />
      <div className="logo">Fletnix</div>
      <div className="bloc">
        <form onSubmit={onSubmit}>
          {Fields}
          <p>{message}</p>
          <button className="btn-signin">
            <h4>Recover Password</h4>
          </button>
        </form>
        <p className="optional-action">
          New to Fletnix ?&nbsp;
          <Link to="/signup">
            <strong>Sign up now.</strong>
          </Link>
        </p>
      </div>
    </main>
  );
}
