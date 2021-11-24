import formData from "components/Forms/assets/work_history.json";
import FormInput from "components/Forms/FormInput";

export default function WorkFields({ formSection, errors, register, boxId }) {
  const Fields = formData.map((item, index) => (
    <FormInput
      key={index}
      formSection={formSection}
      index={boxId}
      errors={errors}
      register={register}
      labelKey={item.labelKey}
      verif={item.verif}
      type={!item.type ? "text" : item.type}
    >
      {item.label}
    </FormInput>
  ));

  return <>{Fields}</>;
}
