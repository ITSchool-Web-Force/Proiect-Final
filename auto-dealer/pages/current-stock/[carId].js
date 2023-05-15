import Layout from "../../components/Layout";
import React, { useState } from "react";
import { useRouter } from "next/router";
import data from "../../components/data";
import specs from "@/components/specs";
import Image from "next/image";
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
      <Layout>
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
              {specs.map((spec) => {
                return (
                  <div key={spec.key} className="spec-group">
                    <p className="spec-key">{spec.label}:</p>
                    <p>{car[spec.key]}</p>
                  </div>
                );
              })}
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
      </Layout>
    </div>
  );
}

export default CarDetails;
