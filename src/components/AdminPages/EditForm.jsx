//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports
import fields from "./assets/fields-edit.json";
import InputField from "components/shared/InputField";
import { updateDocument } from "scripts/fireStore";
import { getCategory } from "scripts/methods";
import InputEpisode from "./forms/InputEpisode";

export default function EditForm({ data }) {
  //Local states
  const [form, setForm] = useState(data);

  const [item, setItem] = useState({ category: "" });
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const items = getCategory(data, item.category);

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }
  async function onSubmit(e) {
    if (window.confirm("Do you confirm the changes ?")) {
      e.preventDefault();
      setErrorMessage("");
      //await updateDocument("courses", data.id, { ...data, ...form });
      //alert("Title successfully edited");
      // history.push("/admin");
    }
  }

  function handleClick(item) {
    setForm(item);
    setShowForm(true);
  }
  //Components

  const Items = items.map((item, index) => (
    <li key={index} /* className="list-item" */>
      <button
        key={index}
        className="btn-select"
        type="button"
        onClick={() => handleClick(item)}
      >
        {item.title}
      </button>
    </li>
  ));

  const Fields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return (
    <form onSubmit={onSubmit} className="form-admin">
      <div className="selector">
        <h2>Selection : </h2>
        <label>
          Select a category :
          <select
            onChange={(e) => {
              setItem({ ...item, category: e.target.value });
              setShowForm(false);
            }}
          >
            <option value="none">-</option>
            <option value="serie">Serie</option>
            <option value="film">Film</option>
            <option value="documentary">Documentary</option>
            <option value="all">Show All</option>
          </select>
        </label>
        {item.category !== "none" && (
          <>
            <h3>
              Titles from category <strong>{item.category}</strong>:
            </h3>
            <ul>{Items}</ul>
          </>
        )}
      </div>

      {showForm && (
        <>
          <div className="general">
            <h2>General informations : </h2>
            <div className="main-bloc">{Fields}</div>
            <p>{errorMessage}</p>
          </div>
          {form.category !== "film" && (
            <>
              <InputEpisode state={form} setForm={setForm} />
            </>
          )}
          <button className="btn btn-submit btn-orange">
            <h4>Submit</h4>
          </button>{" "}
        </>
      )}
      {/* */}
    </form>
  );
}
