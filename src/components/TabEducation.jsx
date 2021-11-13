//NPM Packages

//Local imports
import education from "assets/icns/education.png";
import fields from "components/forms/education.json";
import TipsBox from "./TipsBox";
import InputField from "./shared/InputField";

export default function TabEducation({ form, onChange }) {
  //Components
  const Fields = fields.map((item, index) => (
    <div className="form-item" key={item.key}>
      <InputField
        key={item.key}
        options={item}
        state={form[item.key]}
        onChange={onChange}
      />
    </div>
  ));
  return (
    <>
      <TipsBox tab="education" />
      <h1>Education</h1>
      <img src={education} alt="" className="logo" />
      <section>
        <div className="box box-education">{Fields}</div>
        <button type="button" className="btn btn-orange">
          + Add more
        </button>
      </section>
    </>
  );
}
