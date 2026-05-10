import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {

  // STATES

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [message, setMessage] =
    useState("");

  // PROTECTED PAGE

  useEffect(() => {

    const user =
      sessionStorage.getItem("user");

    if (!user) {

      window.location.href = "/";
    }

  }, []);

  // SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    // VALIDATION

    if (!name || !email || !message) {

      alert("Please Fill All Fields");

      return;
    }

    const data = {
      name,
      email,
      message
    };

    try {

      // MOCKAPI URL

      const response =
        await fetch(
          "https://6a0041582b7ab34960302c69.mockapi.io/messages",
          {
            method:"POST",

            headers:{
              "Content-Type":
              "application/json"
            },

            body:JSON.stringify(data)
          }
        );

      if (response.ok) {

        alert("Message Sent ✅");

        setName("");
        setEmail("");
        setMessage("");

      } else {

        alert("Failed To Send ❌");
      }

    } catch (error) {

      console.log(error);

      alert("Server Error ❌");
    }
  };

  return (

    <div>

      <Header />

      <div className="contact-page">

        <div className="contact-box">

          <h1>
            Contact Us 📩
          </h1>

          <p>
            Send your feedback and queries
          </p>

          <form
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e)=>
                setName(e.target.value)
              }
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e)=>
                setEmail(e.target.value)
              }
            />

            <textarea
              placeholder="Enter Message"
              value={message}
              onChange={(e)=>
                setMessage(e.target.value)
              }
            ></textarea>

            <button type="submit">
              Send Message 🚀
            </button>

          </form>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Contact;