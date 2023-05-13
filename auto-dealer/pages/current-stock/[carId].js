import React, { useState } from "react";
import { useRouter } from "next/router";
import data from "../../components/data";
import Image from "next/image";
import MyNavbar from "../../components/MyNavbar";
import Footer from "../../components/Footer";
import EnquiryModal from "../../components/EnquiryModal";
import Button from "react-bootstrap/Button";

function CarDetails() {
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();
  const { carId } = router.query;
  const car = data.find((car) => car.id === carId);

  if (!car) {
    return <h1>Car not found</h1>;
  }

  return (
    <div className="page-wrapper">
      <MyNavbar />
      <div className="car-page-layout">
        <h2 className="product-title">{car.name}</h2>
        <div className="upper-group">
          <Image
            className="top-image"
            src={car.photo}
            alt={car.name}
            width={1280}
            height={960}
          />

          <div className="spec-section">
            <p className="section-title">SPECIFICATION</p>
            <div className="spec-group">
              <p className="spec-key">Colour:</p>
              <p>{car.colour}</p>
            </div>
            <div className="spec-group">
              <p className="spec-key">Interior:</p>
              <p>{car.interior}</p>
            </div>
            <div className="spec-group">
              <p className="spec-key">Year:</p>
              <p>{car.year}</p>
            </div>
            <div className="spec-group">
              <p className="spec-key">Mileage:</p>
              <p>{car.mileage}</p>
            </div>
            <div className="spec-group">
              <p className="spec-key">Engine:</p>
              <p>{car.engine}</p>
            </div>
            <div className="spec-group">
              <p className="spec-key">Power:</p>
              <p>{car.power}</p>
            </div>
            <div className="spec-group">
              <p className="spec-key">Transmision:</p>
              <p>{car.transmission}</p>
            </div>
            <div className="spec-group">
              <p className="spec-key">Body Style:</p>
              <p>{car.bodyStyle}</p>
            </div>
            <div className="spec-group">
              <p className="spec-key">Fuel:</p>
              <p>{car.fuel}</p>
            </div>
          </div>
        </div>
        <p className="section-title">DESCRIPTION</p>
        <p>{car.description}</p>
        <p className="price">{car.price}</p>
        <Button
          style={{ borderRadius: 0 }}
          variant="dark"
          onClick={() => setModalShow(true)}
          className="enquire-button"
        >
          ENQUIRE NOW VIA EMAIL
        </Button>
        <div>
          <div className="images-section">
            <Image
              className="car-image"
              src={car.photo2}
              alt={car.name}
              width={1280}
              height={960}
            />
            <Image
              className="car-image"
              src={car.photo3}
              alt={car.name}
              width={1280}
              height={960}
            />
            <Image
              className="car-image"
              src={car.photo4}
              alt={car.name}
              width={1280}
              height={960}
            />
          </div>
          <div className="images-section">
            <Image
              className="car-image"
              src={car.photo5}
              alt={car.name}
              width={1280}
              height={960}
            />
            <Image
              className="car-image"
              src={car.photo6}
              alt={car.name}
              width={1280}
              height={960}
            />
            <Image
              className="car-image"
              src={car.photo7}
              alt={car.name}
              width={1280}
              height={960}
            />
          </div>
        </div>
        <EnquiryModal
          carname={car.name}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      <Footer />
    </div>
  );
}

export default CarDetails;
