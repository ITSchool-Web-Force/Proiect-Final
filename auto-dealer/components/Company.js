import Image from "next/image";
import aboutbanner from "../images/about-banner.jpg";
import aboutbanner2 from "../images/about-banner2.jpg";
import team from "../images/team.jpg";
import founder from "../images/founder.jpg";
import manager from "../images/general-manager.jpg";
import salesexec from "../images/sales-executive.jpg";

function Company() {
  return (
    <div className="page-wrapper">
      <div>
        <Image
          src={aboutbanner}
          width={2000}
          height={500}
          alt="about-banner"
          className="about-image"
        />
        <div className="intro">
          <p className="about-text">
            Established in 1987, we offer a complete range of services covering
            both luxury vehicles and supercars.
          </p>
        </div>
        <Image
          src={aboutbanner2}
          width={1920}
          height={700}
          alt="about-banner"
          className="about-image"
        />
        <div className="intro">
          <p>
            The business was born from a long heritage of dealing in Supercars,
            stemming from the Cellini family&apos;s personal ownership of
            numerous contemporary Lamborghini models over 30 years ago. This
            passion for collecting Supercars inevitably led to more active
            buying and selling of the cars, which in turn led to the
            establishment of CG International as a separate trading entity. The
            success of the business over many years trading, has led to its
            position as a globally recognised centre of excellence for Supercar
            sales, with thousands of satisfied customers all over the world.
          </p>
        </div>
        <Image
          src={team}
          width={2000}
          height={700}
          alt="team-img"
          className="team-image"
        />
        <div className="intro">
          <p className="about-text">MEET THE TEAM</p>
        </div>
        <div className="team-layout">
          <div className="person-group">
            <Image
              src={founder}
              width={600}
              height={900}
              alt="founder"
              className="personal-image"
            />
            <div className="personal-text">
              <p className="name">James Cellini</p>
              <p>Founder</p>
            </div>
          </div>
          <div className="person-group">
            <Image
              src={manager}
              width={600}
              height={900}
              alt="general-manager"
              className="personal-image"
            />
            <div className="personal-text">
              <p className="name">Oliver Smith</p>
              <p>General Manager</p>
            </div>
          </div>
          <div className="person-group">
            <Image
              src={salesexec}
              width={600}
              height={900}
              alt="sales-executive"
              className="personal-image"
            />
            <div className="personal-text">
              <p className="name">Henry Turnbull</p>
              <p>Sales Executive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
