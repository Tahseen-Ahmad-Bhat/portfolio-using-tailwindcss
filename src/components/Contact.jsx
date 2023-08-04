import React from "react";
import LineGradient from "./shared/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className=" py-32">
      {/* Heading */}
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-semibold text-4xl ">
            <span className="text-yellow ">CONTACT ME</span> TO GET STARTED
          </p>
          <div
            className="flex md:justify-end
           my-5"
          >
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>
      {/* Form and Image */}
      <div className="md:flex md:justify-between mt-10 gap-16">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/4ab0fcf07eb3b51c6ef9738dc49eaa0e"
            method="post"
          >
            <input
              type="text"
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
                minLength: 3,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required!"}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
                {errors.name.type === "minLength" && "Min length is 3 char."}
              </p>
            )}

            <input
              type="text"
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: emailRegEx,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required!"}
                {errors.email.type === "pattern" && "Invalid email!"}
              </p>
            )}

            <textarea
              type="text"
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required!"}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
