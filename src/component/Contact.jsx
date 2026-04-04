import React, { useState } from 'react';
import HCaptcha from "@hcaptcha/react-hcaptcha";

function Contact() {
  const [captchaToken, setCaptchaToken] = useState("");
  const [errors, setErrors] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();

    // Get form values
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validation
    let newErrors = {};
    if (!name) newErrors.name = "Please Enter Name";
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[A-Za-z]{2,}$/;
    if (!email) newErrors.email = "Please Enter Email";
    else if (!emailPattern.test(email)) newErrors.email = "Please Enter Valid Email";
    if (!message) newErrors.message = "Please Enter Message";
    if (!captchaToken) newErrors.captcha = "Please verify captcha";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({}); // Clear old errors

    // Prepare FormData for Web3Forms
    const payload = new FormData();
    payload.append("access_key", "7343ba90-faf0-4bbb-bf11-6c235275c2ff"); // Your Web3Forms key
    payload.append("name", name);
    payload.append("email", email);
    payload.append("message", message);
    payload.append("subject", "Eliana Jade - New form Submission");
    payload.append("h-captcha-response", captchaToken);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      }).then(r => r.json());

      console.log("Web3Forms response:", res); // Debugging

      if (res.success) {
        alert("Message sent successfully ✅");
        event.target.reset();
        setCaptchaToken("");
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error ❌");
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <p className="text-center mb-2 text-lg font-Ovo">connect with me</p>
      <h1 className="text-center font-Ovo text-5xl">Get in Touch</h1>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
              name="name"
            />
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
              name="email"
            />
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          </div>
        </div>

        <textarea
          rows="6"
          placeholder="Enter your message"
          className="w-full py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30 px-4 md:px-10"
          name="message"
        />
        <p className="text-red-500 text-sm mt-1">{errors.message}</p>

        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          onVerify={(token) => setCaptchaToken(token)}
          reCaptchaCompat={false}
        />
        <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>

        <button
          type="submit"
          className="py-2 px-8 mt-10 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover"
        >
          Submit now
          <img src="https://eliana.prebuiltui.com/assets/right-arrow.png" alt="" className="w-4" />
        </button>
      </form>
    </div>
  );
}

export default Contact;