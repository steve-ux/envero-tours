import LogoMinisterio from "../assets/isologo_ministerio.png"

function Footer() {
    return (
    <div className="footer">
        <div data-aos="fade-left" className="div1">
            <h4>Envero Tours</h4>
            <h4 className="viajesTurismo">Viajes y Turismo</h4>
            <p>Mendoza - Argentina</p>
            <p>Oficina virtual, <a href="https://raw.githubusercontent.com/steve-ux/envero-tours/6a47e6205b61b2ee1131ca320ae28dfffaa38c71/src/assets/Oficina_virtual.pdf" target="_blank" rel="noreferrer">aquí.</a></p>
        </div>
        <div data-aos="fade-down" className="div2">
        <h4>This Is Mendoza S.A.</h4>
        <p>Permiso precario número: PV-2022-136383912</p>
        <p>Mail: <a href="mailto:nicolasromero88@gmail.com">nicolasromero88@gmail.com</a></p>
        <p>Cel: <a href="tel:+54 9 261 341 3569">+54 9 261 341 3569</a></p>
        </div>
        <div data-aos="fade-right" className="div3">
        <img src={LogoMinisterio} alt="Logo Ministerio de Turismo y Deportes" width="100"/>
        <h4>Certificado permiso precario, <a href="https://raw.githubusercontent.com/steve-ux/envero-tours/e2d516d18fee2ebe8d12b1166e708e38dcf4083f/src/assets/PV-2022-136383912-APN-DRAV%2523MTYD.pdf" target="_blank" rel="noreferrer">aquí.</a></h4>
        <p>Para denunciar una agencia, <a href="https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes" target="_blank" rel="noreferrer">hacé clic acá.</a></p>
        </div>  
    </div>
    );
  }
  
  export default Footer;