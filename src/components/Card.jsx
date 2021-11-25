import { useState, useEffect } from "react";
import previous from "assets/icns/previous.png";
import next from "assets/icns/next.png";

export default function Card({ item }) {
  const [imageId, setImageId] = useState(0);
  // Methods
  function nextImage() {
    setImageId(imageId + 1);
  }
  function previousImage() {
    setImageId(imageId - 1);
  }
  return (
    <li className="card">
      {imageId > 0 && (
        <button onClick={previousImage} className="btn btn-previous">
          <img src={previous} alt="<" />
        </button>
      )}
      {imageId + 1 < item.images.length && (
        <button className="btn btn-next" onClick={nextImage}>
          <img src={next} alt=">" />
        </button>
      )}
      <div className="index">
        {" "}
        <p>{`${imageId + 1}/${item.images.length}`}</p>{" "}
      </div>
      <img className="illustration" src={item.images[imageId].src} alt="" />
      <h3 className="name">Name</h3>
      <h4 className="color">Color</h4>
      <h4 className="price">Price</h4>
      <a className="btn btn-view-more" href="http://www.free.fr">
        {" "}
        <h4>View More ...</h4>{" "}
      </a>
    </li>
  );
}
