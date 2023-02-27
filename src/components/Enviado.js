import Navigator from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Enviado() {
    return (
      <>
    <div className="enviado">
      <Navigator/>
      <br/>
      <div>
        <h3 className="titleEnviado">
          ¡Tu mensaje fue enviado! A la brevedad vas a ser contactado. Muchas gracias.
        </h3>
        <div className="contenedorBtn">
          <Link to="/">
            <button className="btnEnviado">Volver a Inicio</button>
          </Link>
         </div>
        </div>
      </div>
      <Footer/>
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
                MendoWebx.
              </a>
            </span>
          </p>
        </footer>
  
    </>
    );
  }
  
  export default Enviado;