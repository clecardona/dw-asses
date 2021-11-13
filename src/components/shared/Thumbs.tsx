//NPM Packages
import { FC } from "react";

//Local Files
import ThumbsItem from "components/Home/ThumbsItem";
import iTitle from "types/iTitle";
import ThumbsMeta from "./ThumbsMeta";

interface IProps {
  data: iTitle[];
  children: string;
}
const Thumbs: FC<IProps> = ({ data, children }) => {
  const Thumbnails = data.map((item, index) => (
    <ThumbsItem key={index} item={item} />
  ));

  return (
    <>
      <section className="home-thumbs">
        <h2 className="title"> {children}</h2>
        <ul className="track">{Thumbnails}</ul>
      </section>
    </>
  );
};
export default Thumbs;