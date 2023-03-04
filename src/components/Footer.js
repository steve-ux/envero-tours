import LogoMinisterio from "../assets/isologo_ministerio.png"

function Footer() {
    return (
    <div className="footer">
        <div data-aos="fade-left" className="div1">
            <h4>Envero Tours</h4>
            <h4 className="viajesTurismo">Viajes y Turismo</h4>
            <p>Mendoza - Argentina</p>
        </div>
        <div data-aos="fade-down" className="div2">
        <h4>Nicolás Romero Bilen</h4>
        <p>Permiso precario número: PV-2022-136383912</p>
        <p>Mail: <a href="mailto:info@thisismendoza.com">info@thisismendoza.com</a></p>
        <p>Cel: <a href="tel:+54 9 261 341 3569">+54 9 261 341 3569</a></p>
        </div>
        <div data-aos="fade-right" className="div3">
        <img src={LogoMinisterio} alt="Logo Ministerio de Turismo y Deportes" width="100"/>
        <h4>Certificado permiso precario, <a href="www.google.com" target="_blank" rel="nonreferrer">aquí.</a></h4>
        <p>Para denunciar una agencia, <a href="https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes" target="_blank" rel="noreferrer">hacé clic acá.</a></p>
        </div>  
    </div>
    );
  }
  
  export default Footer;