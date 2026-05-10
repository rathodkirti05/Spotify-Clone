import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {

  return (

    <div
      style={{
        background:"#0b0f1a",
        color:"white",
        minHeight:"100vh"
      }}
    >

      <Header />

      {/* HERO */}

      <div
        style={{
          padding:"140px 20px 100px",
          textAlign:"center",

          background:
          "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f')",

          backgroundSize:"cover",
          backgroundPosition:"center"
        }}
      >

        <div
          style={{
            maxWidth:"1000px",
            margin:"auto",

            background:"rgba(17,24,39,0.75)",

            backdropFilter:"blur(15px)",

            borderRadius:"30px",

            padding:"60px 30px",

            border:
            "1px solid rgba(255,255,255,0.08)"
          }}
        >

          <h1
            style={{
              fontSize:"clamp(45px,8vw,80px)",
              marginBottom:"25px",

              background:
              "linear-gradient(to right,#ff4ecd,#38bdf8)",

              WebkitBackgroundClip:"text",

              WebkitTextFillColor:"transparent"
            }}
          >
            About SpotifyX 🎵
          </h1>

          <p
            style={{
              maxWidth:"850px",
              margin:"auto",
              fontSize:"22px",
              lineHeight:"1.9",
              color:"#d1d5db"
            }}
          >
            SpotifyX is a premium music
            streaming platform inspired by
            Spotify. Enjoy trending songs,
            playlists, modern UI,
            interactive music experience,
            and immersive sound vibes.
          </p>

        </div>

      </div>

      {/* CONTENT */}

      <div
        style={{
          maxWidth:"1200px",
          margin:"auto",
          padding:"80px 20px"
        }}
      >

        {/* MISSION */}

        <div
          style={{
            textAlign:"center",
            marginBottom:"90px"
          }}
        >

          <h2
            style={{
              fontSize:"50px",
              marginBottom:"25px",

              background:
              "linear-gradient(to right,#ff4ecd,#38bdf8)",

              WebkitBackgroundClip:"text",

              WebkitTextFillColor:"transparent"
            }}
          >
            Our Mission 🚀
          </h2>

          <p
            style={{
              color:"#cbd5e1",
              fontSize:"20px",
              lineHeight:"2",
              maxWidth:"900px",
              margin:"auto"
            }}
          >
            Our mission is to create a
            clean, modern and beautiful
            music streaming experience
            where users can enjoy
            unlimited songs with smooth
            animations, premium design,
            and powerful performance.
          </p>

        </div>

        {/* FEATURES */}

        <h2
          style={{
            textAlign:"center",

            marginBottom:"50px",

            fontSize:"50px",

            background:
            "linear-gradient(to right,#ff4ecd,#38bdf8)",

            WebkitBackgroundClip:"text",

            WebkitTextFillColor:"transparent"
          }}
        >
          Features ✨
        </h2>

        <div
          style={{
            display:"grid",

            gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",

            gap:"30px"
          }}
        >

          <div style={cardStyle}>
            <h3>🔐 Authentication</h3>

            <p>
              Firebase secure login &
              signup system with
              protected routes.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>🎶 Music Player</h3>

            <p>
              Interactive audio player
              with play, pause and
              premium controls.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>🔥 Trending Songs</h3>

            <p>
              Explore trending songs
              dynamically using APIs
              and playlists.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>📱 Responsive Design</h3>

            <p>
              Fully responsive modern UI
              for mobile, tablet & desktop.
            </p>
          </div>

        </div>

        {/* TECH STACK */}

        <div
          style={{
            marginTop:"100px",
            textAlign:"center"
          }}
        >

          <h2
            style={{
              fontSize:"50px",
              marginBottom:"25px",

              background:
              "linear-gradient(to right,#ff4ecd,#38bdf8)",

              WebkitBackgroundClip:"text",

              WebkitTextFillColor:"transparent"
            }}
          >
            Tech Stack 💻
          </h2>

          <p
            style={{
              color:"#cbd5e1",
              fontSize:"22px",
              lineHeight:"2"
            }}
          >
            React JS • Firebase •
            React Router • REST APIs •
            CSS3 • JavaScript • Vercel
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
}

const cardStyle = {

  background:"#1e293b",

  padding:"40px 30px",

  borderRadius:"25px",

  textAlign:"center",

  border:
  "1px solid rgba(255,255,255,0.08)",

  transition:"0.3s",

  boxShadow:
  "0 0 20px rgba(0,0,0,0.3)"
};

export default About;