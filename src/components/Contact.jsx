// import React from 'react'
// import { CONTACT } from '../constants'
// import {motion} from 'framer-motion'
// import { FaGithub, FaLinkedin } from 'react-icons/fa'
// // framer preset


// // real code
// const Contact = () => {
//   return (
//     <div className='border-t border-stone-900 pb-20'>
//       <motion.h2 
//       whileInView={{opacity:1,y:0}}
//       initial={{opacity:1,y:-100}}
//       transition={{duration:0.5}}
//       className='my-10 text-center text-4xl'>Get In Touch</motion.h2>
//       <div className='text-center tracking-tighter'>
//         <motion.p
//         whileInView={{opacity:1,x:0}}
//         initial={{opacity:0,x:-100}}
//         transition={{duration:1}}
//         className='my-4'>
//             {CONTACT.phoneNo}
//         </motion.p>
//         <a 
        
//         href="#" className='border-b'>
//             {CONTACT.email}
//         </a>
//       </div>
//       <div className='m-8 flex items-center justify-center gap-4 text-2xl'>

//      <a href="https://www.linkedin.com/in/saksham-kanojia-7895b7217/"
//      target='_blank' rel='noopener noreferrer'
//      aria-label="LinkedIn">
//         <FaLinkedin/>
//      </a>

//      <a href="https://github.com/sakshamkanojia19"
//      target='_blank' rel='noopener noreferrer'
//      aria-label="GitHub">
//         <FaGithub/>
//      </a>

//   </div>
//     </div>
//   )
// }

// export default Contact




// contact form

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  // Update the state of the form data as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_7aanxef", // Replace with your EmailJS service ID
          "template_yjkw4xd", // Replace with your EmailJS template ID
          formData,
          "bVCiV2X-6Gl5uXiWE" // Replace with your EmailJS user ID
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Please try again!");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Connect with Me / Hire Me
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.name && (
            <p className="text-sm text-pink-700">{errors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.email && (
            <p className="text-sm text-blue-700">{errors.email}</p>
          )}
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
            rows="4"
          />
          {errors.message && (
            <p className="text-sm text-blue-700">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`mb-8 w-full rounded bg-blue-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-purple-400 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
