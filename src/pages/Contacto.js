import Navigator from "../components/Navigator/Navbar";
import Footer from "../components/Footer";

function Contacto() {
    return (
    <div className="contacto">
    <Navigator/>
    <div className="contactUs">
    <h2 className="titleSomos" data-aos="fade-down"><div> Envero Tours | Contacto</div></h2> 
      <div className="formulario">
    <h3>Envianos tu consulta, dejanos tus datos y te responderemos a la brevedad.</h3> 

      <form action="https://formsubmit.co/info@thisismendoza.com" method="post">
        
      <label for="nombre">Nombre y Apellido:</label>
      <input type="text" id="full_name" name="Nombre" required className="datos"/><br/>

      <label for="telefono">Teléfono:</label>
      <input type="tel" id="tel" name="Teléfono" required className="datos" pattern="[0-9]{10}" title="Máximo 10 dígitos sin caracteres: ejemplo 2613413569"/><br/>

     <label for="correo">Correo electrónico:</label>
     <input type="email" id="email" name="Correo" required className="datos"/><br/>

    <label for="consulta">Tu consulta:</label>
    <textarea id="message" name="Consulta" rows="5" cols="30" required></textarea><br/>

    <button className="btnEnviar">Enviar</button>
    <input type="hidden" name="_next" value="https://enverotours.tur.ar/Enviado"/>
    <input type="hidden" name="_subject" value="Nueva consulta desde la web!"/>
    <input type="hidden" name="_captcha" value="false" />
    </form>
      
      
      <hr></hr>
      <p>Para denunciar una agencia, <a href="https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes" target="_blank" rel="noreferrer">hacé clic acá.</a></p>
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
  
  export default Contacto;