import data from "../../components/data";
import Image from "next/image";
import sale from "../../images/sale-banner.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

function CurrentStock() {
  const router = useRouter();
  return (
    <Layout>
      <div className="page-wrapper">
        <Image
          src={sale}
          width={2000}
          height={350}
          alt="sale-banner"
          className="sale-img"
        />
        <div className="card-layout">
          {data.map((car) => (
            <div key={car.id} className="card-structure">
              <Link href={`/current-stock/${car.id}`}>
                <Image
                  className="car-image"
                  src={car.photo}
                  alt={car.name}
                  width={1280}
                  height={960}
                />
              </Link>
              <div className="card-info">
                <div className="title-space">
                  <h3 className="product-title">{car.name}</h3>
                </div>
                <div className="spec-group">
                  <p className="spec-key">Year:</p>
                  <p>{car.year}</p>
                </div>
                <div className="spec-group">
                  <p className="spec-key">Colour:</p>
                  <p>{car.colour}</p>
                </div>
                <div className="spec-group">
                  <p className="spec-key">Mileage:</p>
                  <p>{car.mileage}</p>
                </div>
                <p className="price">{car.price}</p>
                <button
                  onClick={() => router.push(`/current-stock/${car.id}`)}
                  className="details-button"
                >
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default CurrentStock;
