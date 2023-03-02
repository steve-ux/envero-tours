import Navigator from "../components/Navigator/Navbar";
import Footer from "../components/Footer";

function Nosotros() {
    return (
    <div className="nosotros">
    <Navigator/>
    <div className="somos">
    <h2 className="titleSomos" data-aos="fade-down"><div> Envero Tours | Quienes somos</div></h2>  
      <div className="text">
      <p className="descripcion">Somos amigos y sommeliers con más de 10 años de trayectoria en el mundo del vino. Disfrutamos
      comunicar de manera sencilla y amigable nuestros conocimientos durante tu estadía en Mendoza.
      </p>
      <p className="descripcion">
      En "This is Mendoza" trabajamos para ofrecerte experiencias personalizadas para que tu única tarea sea la de disfrutar.
      </p>
      <hr></hr>
      <p className="info"><span>Razon social:</span> This is Mendoza SA</p>
      <p className="info"><span>Bajo denominación comercial:</span> Envero Tours</p>
      <p className="info"><span>Permiso Precario N°:</span> PV-2022-136383912</p>
      <p className="info"><span>Responsable:</span> Nicolás Romero Bilen</p>
      <p className="info"><span>Celular: </span><a href="tel:+54 9 261 341 3569">+54 9 261 341 3569</a></p>
      <hr></hr>
      <p className="epigrafe">Para denunciar una agencia, <a href="https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes" target="_blank" rel="noreferrer" className="link">hacé clic acá.</a></p>
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
    </div>
    );
  }
  
  export default Nosotros;