"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
const validateForm = ({ user_message, user_email }) => {
  if (user_message.length < 5)
    return {
      ok: false,
      msg: "Please enter a message with a minimum of 5 characters.",
    };
  if (isEmailValid(user_email)) {
    return { ok: true, msg: "" };
  }
  return { ok: false, msg: "Invalid email format." };
};

const ContactPage = () => {
  const [inputValue, setInputValue] = useState({
    user_message: "",
    user_email: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const text = "Say Hello";

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const {ok,msg}  = validateForm({...inputValue});
    if(ok){
      setError(false);
      setSuccess(false);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          () => {
            setSuccess(true);
            form.current.reset();
          },
          () => {
            setError("Something went wrong!");
          }
        );
    }
    else{
      setError(msg)
    }

  };

  return (
    <motion.div
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-[568px] h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 z-50">
        {/* TEXT CONTAINER */}
        <div className="min-h-[300px] lg:h-full lg:w-1/2 flex items-center justify-center text-3xl md:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className=" lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-sm md:text-xl flex flex-col gap-8 justify-center p-4 md:p-24"
        >
          <span>Dear AKM Dev,</span>
          <textarea
          rows={3}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            value={inputValue.user_message}
            onChange={handelInputChange}
            placeholder="say hello"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            value={inputValue.user_email}
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
            onChange={handelInputChange}
            placeholder="jhon@example.com"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && <span className="text-red-600 font-semibold">{error}</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
