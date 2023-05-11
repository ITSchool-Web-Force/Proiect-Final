import Image from "next/image";
import Link from "next/link";
import Logo from "../public/gc-logo-white.png";
import facebook from "../images/social-media/icons8-facebook.svg";
import instagram from "../images/social-media/icons8-instagram.svg";
import linkedin from "../images/social-media/icons8-linkedin.svg";
import pinterest from "../images/social-media/icons8-pinterest.svg";
import twitter from "../images/social-media/icons8-twitter.svg";

function Footer() {
  return (
    <div className="footer">
      <Image
        src={Logo}
        width={50}
        height={50}
        alt="logo"
        className="logo"
        priority={true}
      />
      <div className="social-media">
        <Link href="https://www.instagram.com">
          <Image className="media-icon" src={instagram} alt="instagram" />
        </Link>
        <Link href="https://www.facebook.com">
          <Image className="media-icon" src={facebook} alt="facebook" />
        </Link>
        <Link href="https://www.twitter.com">
          <Image className="media-icon" src={twitter} alt="twitter" />
        </Link>
        <Link href="https://www.pinterest.com">
          <Image className="media-icon" src={pinterest} alt="pinterest" />
        </Link>
        <Link href="https://linkedin.com">
          <Image className="media-icon" src={linkedin} alt="linkedin" />
        </Link>
      </div>
      <p className="footer-address">
        18-20 Bruton St | London W1J 6QD, United Kingdom
      </p>
      <p className="copyright">© 2023 CG International. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
