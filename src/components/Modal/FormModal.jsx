import { useForm } from "react-hook-form";

export default function FormModal({ formOpts }) {
  const { element, register, form, setForm, itemIndex } = formOpts;

  const { handleSubmit } = useForm();

  function onSubmit(data) {
    setForm({ ...form, education: data });
  }

  function handleDelete(e) {
    e.preventDefault();
    alert("Ask confirmation? ");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="formModal">
      <label>
        <h3>Edit element selected </h3>
        <textarea
          rows="12"
          cols="100"
          defaultValue={element}
          {...register(`${itemIndex}`, {})}
        />
      </label>
      <input type="submit" className="hidden" id="submit-form" />
      <div className="buttons">
        <label htmlFor="submit-form" className="btn btn-blue save">
          Save
        </label>
        <button
          type="button"
          className="btn btn-red delete"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </form>
  );
}
