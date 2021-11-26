import { FC } from "react";

interface iProps {
  hook: iHook;
}
interface iHook {
  quantity: number;
  setQuantity(arg: any): void;
}

const Select: FC<iProps> = ({ hook }) => {
  const { quantity, setQuantity } = hook;
  return (
    <label className="select">
      <h3>Items to display :</h3>
      <select
        name="qty"
        defaultValue={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={"all"}>show all</option>
      </select>
    </label>
  );
};
export default Select;
