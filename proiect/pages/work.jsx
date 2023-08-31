import React from "react";
import Navbar from "@/components/Navbar";
import MyWork from "@/components/MyWork";
import WorkImage from "@/components/WorkImages";

function Work() {
  return (
    <div className="bg-gradient-to-r from-white to-slate-200 h-full">
      <Navbar />
      <MyWork />
      <WorkImage />
    </div>
  );
}
export default Work;
