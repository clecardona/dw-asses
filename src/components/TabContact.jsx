//NPM Packages

//Local imports
import agenda from "assets/icns/agenda.png";
import fields from "components/forms/contact.json";
import TipsBox from "./TipsBox";
import InputField from "./shared/InputField";

export default function TabContact({ form, onChange }) {
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
      <TipsBox tab="contact" />
      <h1>Contact</h1>
      <img src={agenda} alt="" className="logo" />
      <section>
        <div className="box box-contact"> {Fields} </div>
      </section>
    </>
  );
}
