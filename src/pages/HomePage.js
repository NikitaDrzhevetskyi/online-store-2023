import ProductCaruselComponent from "../components/user/ProductCaruselComponent";
import CategoryCartComponent from "../components/user/CategoryCartComponent";
import './../index.css'
import { LinkContainer } from "react-router-bootstrap";

const HomePage = () => {
  /*
	const categories = [
    "Apple",
    "Macboook",
    "Apple Watch",
    "Ipad",
    "Airpods",
    "Гаджети",
    "Аксессуари",
    "Техніка Б/У",
  ];
*/
  return (
    <>
      <ProductCaruselComponent />;
      <CategoryCartComponent
        text={[
          "Apple",
          "Macboook",
          "Apple Watch",
          "Ipad",
          "Airpods",
          "Гаджети",
          "Аксессуари",
          "Техніка Б/У",
        ]}
        images={[
          "./images/carts/iphone5.png",
          "./images/carts/mac5.png",
          "./images/carts/watch2.png",
          "./images/carts/ipad3.png",
          "./images/carts/airpods2.png",
          "./images/carts/gadgets2.png",
          "./images/carts/acoustics2.png",
          "./images/carts/used2.png",
        ]}
      />
    </>
  );
};

export default HomePage;
