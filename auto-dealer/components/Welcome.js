import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import welcomeimage from "../images/showroom-welcome.jpg";
import welcomeimagesm from "../images/showroom-welcome-l.jpg";
import Link from "next/link";

function Welcome() {
  return (
    <div className="welcome-wrapper">
      <div className="welcome-section">
        <h3>WELCOME TO CG INTERNATIONAL</h3>
        <p className="welcome-text">
          Established in 1987, CG International is one of the pioneers and
          leading car dealerships for brand new and used luxury and sports cars
          in London, England. With over 300 vehicles in stock across 4 different
          branches in London, CG International can provide you with the most
          suitable vehicle that is tailored for your needs. Browse through our
          extensive range of new and used cars from top renowned brands
          including Rolls Royce, Bentley, Lamborghini, Ferrari, and many more.
          Each car is thoroughly inspected, evaluated, and then included in our
          listings to provide our valued customers with a hassle-free
          experience. This inspection process is just one of many services
          carried out by our teams in CG Car Clinic and CG Cars Garage. CG
          International also facilitates car trade-in. Choose from our existing
          fleet of luxury cars for sale in London and replace your vehicle in an
          easy way. You can sell your used car to us or request one that isn't
          included in our inventory. At CG International, we are committed to
          offering the best experience to our customers, and our quality of
          services reflects just that. In the span of over 35 years, we have
          evolved into the largest and most client-preferred distributor of
          luxury vehicles in the United Kingdom.
        </p>
        <div>
          <Link href="/about">
            <Button
              className="welcome-button"
              style={{ borderRadius: 0 }}
              variant="secondary"
              size="m"
            >
              MORE ABOUT US
            </Button>
          </Link>
        </div>
      </div>
      <Image
        src={welcomeimage}
        alt="showroom image"
        width={960}
        height={700}
        className="showroom-image"
      />
      <Image
        src={welcomeimagesm}
        alt="showroom image"
        width={3840}
        height={1080}
        className="showroom-image-sm"
      />
    </div>
  );
}

export default Welcome;
