import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import image1 from "../images/carousel/carousel-image1.jpg";
import image2 from "../images/carousel/carousel-image2.jpg";
import image3 from "../images/carousel/carousel-image3.jpg";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image src={image1} alt="First slide" className="carousel-img1" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={image2} alt="Second slide" className="carousel-img2" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={image3} alt="Third slide" className="carousel-img3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
