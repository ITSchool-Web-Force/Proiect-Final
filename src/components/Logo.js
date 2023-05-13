import React from "react";
import Link from "next/link";
import Image from "next/image";
import JsLogo from "../../public/javascript-logo.svg";

const Logo = () => {
  return (
    <>
      {/* LOGO */}
      <Link href="/">
        <div className="flex gap-2">
          <h1 className="text-xl font-nunito text-white">Js coder</h1>
          <Image src={JsLogo} alt="javascript logo" width={30} height={30} />
        </div>
      </Link>
    </>
  );
};

export default Logo;
