import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";

const ProductCaroselComponent = () => {
	const cursorP = {
		cursor: "pointer"
	}
  return (
	 <Carousel> 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Купуй у Apple-Store</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/carousel/carousel-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Купуй у Apple-Store</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/carousel/carousel-3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Купуй у Apple-Store</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCaroselComponent;
