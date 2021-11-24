//NPM Packages
import { useForm } from "react-hook-form";

// Local Files
import agenda from "assets/icns/agenda.png";
import camera from "assets/icns/camera.png";
import Progress from "components/Progress";
import ButtonPlus from "components/shared/ButtonPlus";
import TipsBox from "components/TipsBox";
import FormInput from "components/Forms/FormInput";
import formData from "components/Forms/assets/contact.json";

//Local imports
export default function Contact({ form, setForm, setDisplay }) {
  const formSection = form.contact;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setForm({ ...form, contact: data });
  }

  //Components
  const Fields = formData.map((item, index) => (
    <FormInput
      formSection={formSection}
      index={0}
      errors={errors}
      register={register}
      labelKey={item.labelKey}
      verif={item.verif}
      type={!item.type ? "text" : item.type}
    >
      {item.label}
    </FormInput>
  ));

  return (
    <>
      <TipsBox tab="contact" />
      <h1>Contact</h1>
      <img src={agenda} alt="" className="logo" />
      <section className="education">
        <form onSubmit={handleSubmit(onSubmit)} id="formContact">
          <div className="box">{Fields}</div>
          <div className="box">
            <div className="upload">
              <img src={camera} alt="" />
              <p>
                Would you like to upload a profile photo?
                <br />
                <strong>It’s completely optional!</strong>{" "}
              </p>
            </div>
            <ButtonPlus>Upload</ButtonPlus>
          </div>

          <input type="submit" className="hidden" id="submit-form" />
        </form>
      </section>
      <Progress progress={10} />
      <div className="buttons">
        <button
          onClick={() => setDisplay("photo")}
          className="btn btn-gray back"
        >
          Back
        </button>
        <label htmlFor="submit-form" className="btn btn-gray save">
          Save
        </label>
        <button
          onClick={() => setDisplay("education")}
          className="btn btn-blue next"
        >
          Next
        </button>
      </div>
    </>
  );
}
