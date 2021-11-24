import Tip from "./Tip";

export default function FormInput({
  labelKey,
  formSection,
  index,
  errors,
  register,
  children,
  verif,
  type,
  tip,
}) {
  return (
    <label className={labelKey}>
      <h3>
        {children} {verif.required === false && "(Optional)"}
      </h3>
      {tip && <Tip data={tip} />}
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
