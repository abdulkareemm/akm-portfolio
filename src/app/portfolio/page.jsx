"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Gym Landing Page",
    desc: "The gym landing page created with React offers a dynamic and user-friendly interface for visitors interested in fitness and wellness. The page incorporates modern design elements and smooth navigation to provide an engaging experience",
    img: "/pro1.png",
    demo: "https://abdulkareemm.github.io/gym-website/",
    code: "https://github.com/abdulkareemm/gym-website",
  },
];

export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-88%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[1000vh] w-[calc(screen-6rem)] relative" ref={ref}>
        <div className="w-[calc(screen-6rem)] h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-[calc(screen-6rem)] flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8  h-[97vh]  lg:min-w-[900px] p-4">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl text-slate-100">
                    {item.title}
                  </h1>
                  <div className="relative rounded-md overflow-hidden w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[750px] xl:h-[480px]">
                    <Image src={item.img} alt="" fill className="w-full" />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] text-black/70">
                    {item.desc}
                  </p>
                  <div className="flex flex-row gap-8 items-center w-full  p-0">
                    {item.code ? (
                      <Link href={item.code} target="_blank" className="">
                        <button
                          className="p-2 text-sm md:text-md lg:p-4 lg:text-lg shadow-md shadow-stone-600
                      bg-white text-slate-700 font-semibold  rounded hover:scale-105 cursor-pointer"
                        >
                          Code
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="p-2 text-sm md:text-md lg:p-4 lg:text-lg shadow-md shadow-stone-600
                      bg-white/20 text-slate-700 font-semibold  rounded cursor-not-allowed"
                        disabled={true}
                      >
                        Code
                      </button>
                    )}
                    {item.demo ? (
                      <Link href={item.demo} target="_blank" className="">
                        <button
                          className="p-2 text-sm md:text-md lg:p-4 lg:text-lg shadow-md shadow-stone-600
                      bg-white text-slate-700 font-semibold  rounded hover:scale-105 cursor-pointer"
                        >
                          Demo
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="p-2 text-sm md:text-md lg:p-4 lg:text-lg shadow-md shadow-stone-600
                      bg-white/20 text-slate-700 font-semibold  rounded cursor-not-allowed"
                        disabled={true}
                      >
                        Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
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
    </motion.div>
  );
}
