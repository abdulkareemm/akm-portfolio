"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const items = [
  {
    id: 1,
    color: "#009688",
    title: "Nike Store",
    desc: "Nike's e-commerce site, with intuitive navigation and a sleek design, allows customers to easily browse the latest collections, customize their shoes and make purchases with confidence. The site provides detailed product descriptions, sizing information and reviews.",
    img: "/Nike-store.png",
    demo: "https://abdulkareemm.github.io/nike-store/",
    code: "https://github.com/abdulkareemm/nike-store",
  },
  {
    id: 2,
    color: "#ff3e7f",
    title: "Gym Landing Page",
    desc: "The gym landing page created with React offers a dynamic and user-friendly interface for visitors interested in fitness and wellness. The page incorporates modern design elements and smooth navigation to provide an engaging experience",
    img: "/pro.png",
    demo: "https://abdulkareemm.github.io/gym-website/",
    code: "https://github.com/abdulkareemm/gym-website",
  },
  {
    id: 3,
    color: "#03a9f4",
    title: "Data Warehouse",
    desc: "The Data Warehouse website is a streamlined platform designed to display the application's status, features, and testimonials. Utilizing Framer Motion, it incorporates captivating animations and slides to present testimonials, enhancing user engagement and experience.",
    img: "/data-warehouse.png",
    demo: "https://abdulkareemm.github.io/data-warehouse/",
    code: "https://github.com/abdulkareemm/data-warehouse",
  },
  {
    id: 4,
    color: "#ff3e7f",
    title: "AKM Teach",
    desc: "AKM-Teach is an innovative online learning platform offering a diverse array of expert-led courses to enhance your skills and knowledge. With engaging content and flexible learning options.",
    img: "/akm-teach.png",
    demo: "https://abdulkareemm.github.io/akm-teach/",
    code: "https://github.com/abdulkareemm/akm-teach",
  },
];

export default function Portfolio() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2 }}
    >
      <div className="relative flex flex-col space-y-40 ">
        <h1 className="text-2xl md:text-6xl text-center font-bold">My Works</h1>
        <div className="bg-gradient-to-b from-blue-100 to-red-100 h-full flex items-center justify-center lg:justify-between  xl:px-[50px]  flex-wrap gap-8 ">
          {items.map((item) => {
            return (
              <div className="h-[400px]" key={item.id}>
                <div
                  className={`card relative flex justify-center items-start min-w-[370px] md:w-[500px]  h-[300px] 
                   bg-white rounded-md hover:h-[400px] duration-500`}
                >
                  <div className="imgBx absolute top-5 rounded-md duration-500 min-w-[350px] md:w-[450px] h-[220px] bg-[#333] overflow-hidden">
                    <Image src={item.img} fill alt="project" />
                  </div>
                  <div className="content">
                    <h2
                      className={`text-2xl md:text-3xl font-semibold text-[#03a9f4]`}
                    >
                      {item.title}
                    </h2>
                    <p className="text-sm md:text-base mt-1 h-[155px]">
                      {item.desc}
                    </p>
                    <div className="flex justify-between items-center px-[50px] py-3">
                      {item.code ? (
                        <Link href={item.demo} target="_blank" className="">
                          <button
                            className="py-2 px-4  text-sm md:text-md  lg:text-lg 
                      bg-blue-400 text-white font-semibold  rounded hover:scale-105 cursor-pointer"
                          >
                            Code
                          </button>
                        </Link>
                      ) : (
                        <button
                          className="py-2 px-4 text-sm md:text-md  lg:text-lg 
                      bg-blue-400/20 text-slate-700 font-semibold  rounded cursor-not-allowed"
                          disabled={true}
                        >
                          Code
                        </button>
                      )}
                      {item.demo ? (
                        <Link href={item.demo} target="_blank" className="">
                          <button
                            className="py-2 px-4  text-sm md:text-md  lg:text-lg 
                      bg-purple-400 text-white font-semibold  rounded hover:scale-105 cursor-pointer"
                          >
                            Demo
                          </button>
                        </Link>
                      ) : (
                        <button
                          className="py-2 px-4  text-sm md:text-md lg:text-lg 
                      bg-purple-400/20 text-slate-700 font-semibold  rounded cursor-not-allowed"
                          disabled={true}
                        >
                          Demo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col  mt-1 gap-16 h-[400px]  bg-white items-center justify-center text-center">
          <h1 className="text-xl md:text-2xl lg:text-6xl xl:text-8xl mt-4">
            Do you have a project?
          </h1>
          <div className="relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px] "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Front-end and Back-end Developer
                </textPath>
              </text>
            </motion.svg>
            <Link
              href="/contact"
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
