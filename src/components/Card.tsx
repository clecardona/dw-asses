//NPM Packages
import { useState, FC } from "react";

//Local Files
import previous from "assets/icns/previous.png";
import next from "assets/icns/next.png";

interface iProps {
  item: iItem;
}
interface iItem {
  name: string;
  color: any;
  price: any;
  images: any[];
}

const Card: FC<iProps> = ({ item }) => {
  const [imageId, setImageId] = useState(0);
  const { name, color, price, images } = item;

  return (
    <li className="card">
      {imageId > 0 && (
        <button
          onClick={() => setImageId(imageId - 1)}
          className="btn btn-previous"
        >
          <img src={previous} alt="<" />
        </button>
      )}
      {imageId + 1 < images.length && (
        <button
          className="btn btn-next"
          onClick={() => setImageId(imageId + 1)}
        >
          <img src={next} alt=">" />
        </button>
      )}
      <div className="index">
        <p>{`${imageId + 1}/${images.length}`}</p>
      </div>
      <img className="illustration" src={images[imageId].src} alt="" />
      <h3 className="name">{name}</h3>
      <h4 className="color">{color.id}</h4>
      <h4 className="price">
        {price.symbol}
        {Number.parseInt(price.amount).toFixed(price.fractionDigits)}
      </h4>
      <a
        className="btn btn-view-more"
        href="https://www.danielwellington.com/"
        target="_blank"
        rel="noreferrer"
      >
        <h4>View More ...</h4>
      </a>
    </li>
  );
};
export default Card;
