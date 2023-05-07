import Head from "next/head";
import Modal from "@/components/Modal";
import ProfilePic from "../../public/assets/profile-pic.jpg";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScrollToTop from "react-scroll-to-top";

//react icons
import { GiMoonBats } from "react-icons/gi";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillCodeSandboxCircle,
} from "react-icons/ai";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

import React, { useState } from "react";

//to include an img in next you have to import the next/image component
import Image from "next/image";

import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  //dark theme
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Octavian Busuioc Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between px-32">
            <div className="flex gap-2"></div>
            <ul className="flex items-center">
              <li>
                <GiMoonBats
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-[#a467b3] to-[#5a82ba] text-white px-4 py-2 rounded-md ml-4"
                  href="#"
                  onClick={() => setOpenModal(true)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <Modal open={openModal} onClose={() => setOpenModal(false)}></Modal>
          <div id="about">
            <div className="text-center p-4">
              <h2 className="text-5xl py-2 font-semibold dark:text-white">
                Hi<span>👋</span>, my name is{" "}
                <span className="text-violet-700">Octavian Busuioc</span>
              </h2>
              <h3 className="text-2xl pt-2 dark:text-white">
                I'm a Developer and Web Editor
              </h3>
              <p className="text-md py-3 leading-7 text-gray-600 dark:text-white">
                I build websites. Also seeking new job opportunities | HTML /
                CSS / SASS , Javascript , PHP , MySQL, React, Next.Js | quick
                learner
              </p>
            </div>
            <p className="uppercase text-sm tracking-widest text-gray-600 text-center dark:text-white">
              you can reach me hear:
            </p>
            <div className="text-5xl flex justify-center py-3  gap-16 dark:text-white">
              <a href="https://github.com/Octavian-Busuioc" target="_blank">
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/octavian-busuioc-6883b5216/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://codesandbox.io/u/Octavian-Busuioc"
                target="_blank"
              >
                <AiFillCodeSandboxCircle />
              </a>
              <a
                href="https://www.freecodecamp.org/OctavianBusuioc"
                target="_blank"
              >
                <FaFreeCodeCamp />
              </a>
            </div>
            <div className="py-3">
              <Image
                src={ProfilePic}
                alt="profile picture"
                priority
                className="w-[18rem] h-[15rem] object-cover rounded-tl-extraLarge rounded-br-extraLarge mx-auto"
              />
            </div>
          </div>
        </section>
      </main>
      <div className="dark:bg-gray-900">
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
      <ScrollToTop smooth component={<FaArrowUp className="mx-3" />} />
    </div>
  );
}
