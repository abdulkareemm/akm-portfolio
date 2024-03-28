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
      <div>
        <div className="relative z-50 overflow-y-scroll h-[calc(100vh-6rem)]">
          <h1 className="text-2xl md:text-6xl text-center mt-4 md:mt-12 font-bold">
            My Works
          </h1>
          <div className="relative h-full flex items-center justify-center md:justify-between px-0 md:px-[50px] lg:px-[150px] flex-wrap gap-8 mt-[100px]">
            {items.map((item) => {
              console.log(item.color)
              return (
                <div className="h-[400px]" key={item.id}>
                  <div
                    className={`card relative flex justify-center items-start min-w-[370px]  h-[300px] 
                   bg-white rounded-md hover:h-[400px] duration-500`}
                  >
                    <div className="imgBx absolute top-5 rounded-md duration-500 min-w-[350px] h-[220px] bg-[#333] overflow-hidden">
                      <Image src={item.img} fill alt="project" />
                    </div>
                    <div className="content">
                      <h2 className={`text-2xl font-semibold text-[#03a9f4]`}>
                        {item.title}
                      </h2>
                      <p className="text-sm mt-1 h-[155px]">{item.desc}</p>
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
        </div>
      </div>
    </motion.div>
  );
}
