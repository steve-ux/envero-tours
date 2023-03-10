import Navigator from "../components/Navigator/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="home">
        <Navigator/>
        <Header/>
        <Footer/>
        <br/>
        <footer>
          Copyright ©{" "}
          <span id="get-current-year">{new Date().getFullYear()}</span> - Envero
          Tours - Viajes y Turismo | Mendoza | Argentina{" "}
          <p className="text-footer2">
            Web creada por{" "}
            <span>
              <a
                href="https://linktr.ee/steve.ok"
                target="_blank"
                rel="noreferrer"
                className="firma"
              >
                PixelPeak.
              </a>
            </span>
          </p>
        </footer>
      </div>
    </>
  );
}

export default Home;
