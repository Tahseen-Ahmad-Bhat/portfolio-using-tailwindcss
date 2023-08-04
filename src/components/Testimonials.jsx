import React from "react";
import { motion } from "framer-motion";
import LineGradient from "./shared/LineGradient";

const Testimonials = () => {
  const testimonialStyles =
    "mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-16 ";

  return (
    <section id="testimonials" className="pt-32 pb-16 mb-2">
      {/* Heading */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-semibold text-4xl mb-5 text-red">TESTIMONIALS</p>
        <LineGradient width="w-2/4 mx-auto md:mx-0" />
        <p className="mt-10">
          Here is what people are saying about my work. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Libero nemo quos, nostrum sint
          assumenda magni.
        </p>
      </motion.div>

      {/* Testimonials */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-blue ${testimonialStyles} `}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="absolute -top-10 left-0 w-full flex justify-center">
            <img
              className=" w-[150px] h-[150px]"
              src="./assets/person-1.png"
              alt="person1"
            />
          </div>
          <div className="relative">
            <p className="text-5xl font-serif absolute -top-4 -left-4 z-50">
              “
            </p>
            <p className="text-center text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              corrupti.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={`bg-red ${testimonialStyles} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="absolute -top-10 left-0 w-full flex justify-center">
            <img
              className=" w-[150px] h-[150px]"
              src="./assets/person-2.png"
              alt="person1"
            />
          </div>
          <div className="relative">
            <p className="text-5xl font-serif absolute -top-4 -left-4 z-50">
              “
            </p>
            <p className="text-center text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              corrupti.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={`bg-yellow ${testimonialStyles}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="absolute -top-10 left-0 w-full flex justify-center">
            <img
              className=" w-[150px] h-[150px]"
              src="./assets/person-3.png"
              alt="person1"
            />
          </div>
          <div className="relative">
            <p className="text-5xl font-serif absolute -top-4 -left-4 z-50">
              “
            </p>
            <p className="text-center text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              corrupti.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
