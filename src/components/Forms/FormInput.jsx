export default function FormInput({
  labelKey,
  formSection,
  index,
  errors,
  register,
  children,
  verif,
  type,
}) {
  return (
    <label className={labelKey}>
      <h3>
        {children} {verif.required === false && "(Optional)"}
      </h3>
      <input
        type={!type ? "text" : type}
        defaultValue={formSection[index] ? formSection[index][labelKey] : ""}
        {...register(`${index}${labelKey}`, verif)}
      />

      {errors[`${index}${labelKey}`] && (
        <>
          {errors[`${index}${labelKey}`].type === "required" && (
            <p className="input-error">Field required </p>
          )}
          {errors && errors[`${index}${labelKey}`].type === "minLength" && (
            <p className="input-error">
              Please enter valid information ({">"} {verif.minLength} chars){" "}
            </p>
          )}
        </>
      )}
    </label>
  );
}
