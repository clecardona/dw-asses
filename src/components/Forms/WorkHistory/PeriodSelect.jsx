export default function PeriodSelect({ index, label, defaultValue, register }) {
  const years = Array.from(Array(new Date().getFullYear() - 1979), (_, i) =>
    (i + 1980).toString()
  );
  const currentYear = new Date().getFullYear();
  return (
    <select
      defaultValue={defaultValue ? defaultValue : currentYear}
      {...register(`${index}${label}`)}
    >
      {years.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
