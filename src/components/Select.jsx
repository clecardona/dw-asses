export default function Select({ setQuantity }) {
  return (
    <label className="select">
      <h3>Items to display :</h3>
      <select
        name="qty"
        defaultValue={5}
        onChange={(e) => setQuantity(e.target.value)}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={"all"}>show all</option>
      </select>
    </label>
  );
}
