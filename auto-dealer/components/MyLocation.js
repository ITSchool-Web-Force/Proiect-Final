import Image from "next/image";
import locationImg from "../images/cg-location.jpg";
import logoBlack from "../images/gc-logo-black.png";

function MyLocation() {
  return (
    <div
      className="location-layout"
      style={{
        backgroundImage: `url('${locationImg.src}')`,
        height: "43.75rem",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Image
        src={logoBlack}
        alt="logo"
        width={200}
        height={200}
        className="logo-black"
      />
      <p className="location-subtitle">CENTRAL LONDON SHOWROOM</p>
      <div className="location-group-text">
        <div className="small-group">
          <p className="category-title">Address:</p>
          <p>18-20 Bruton St, London, W1J 6QD</p>
        </div>
        <div className="small-group">
          <p className="category-title">Phone:</p>
          <p>+44 (0)20 7300 3787</p>
        </div>
        <div className="small-group">
          <p className="category-title">Email:</p>
          <p> sales@cginternational.com</p>
        </div>
        <p className="category-title">Showroom Opening Times</p>
        <p>Monday-Friday: 9am-7pm</p>
        <p>Saturday: 9am-6pm</p>
        <p>Sunday: 10am-5pm</p>
      </div>
    </div>
  );
}

export default MyLocation;
