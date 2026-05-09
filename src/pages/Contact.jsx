import Header from "../components/Header"
import Footer from "../components/Footer"

function Contact() {

  return (

    <div>

      {/* HEADER */}

      <Header />

      {/* CONTACT PAGE */}

      <div className="contact-page">

        <div className="contact-box">

          <h1>
            Contact Us 📩
          </h1>

          <p>
            Have any questions? Feel free to contact us.
          </p>

          {/* FORM */}

          <form>

            <input
              type="text"
              placeholder="Enter Your Name"
            />

            <input
              type="email"
              placeholder="Enter Your Email"
            />

            <textarea
              placeholder="Enter Your Message"
            ></textarea>

            <button type="submit">
              Send Message 🚀
            </button>

          </form>

        </div>

      </div>

      {/* FOOTER */}

      <Footer />

    </div>
  )
}

export default Contact