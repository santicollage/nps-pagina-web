import './Footer.scss';
import phone from '../../assets/Icons/Icons-UI/phone.png';
import email from '../../assets/Icons/Icons-UI/email.png';
import location from '../../assets/Icons/Icons-UI/location.png';

function Footer() {
  
  return (
    <>
      <footer>
        <h3 className='footer-title'>CONTACTENOS</h3>

        <div className='footer-contact-container'>
          <div className='footer-contact'>
            <div className='footer-icon' style={{backgroundImage: `url(${phone})`}}></div>
            <p className='footer-text'>3227064921 <br/>
            3229713519</p>
          </div>

          <div className='footer-contact'>
            <div className='footer-icon' style={{backgroundImage: `url(${email})`}}></div>
            <p className='footer-text'>npsdieselsas@hotmail.com <br/>
            npsdieselsas@gmail.com</p>
          </div>

          <div className='footer-contact'>
            <div className='footer-icon' style={{backgroundImage: `url(${location})`}}></div>
            <p className='footer-text'>Calle 7#16-60, Bogotá, Colombia <br/>
            Lunes a Viernes 8:00 am a 5:00 pm <br/>
            Sábados de 8:00 am a 2:00 pm</p>
          </div>
        </div>

        <p className='footer-terms'>Términos y condiciones de garantías: <br/>
        La empresa NPS DIESEL S.A.S garantiza que es comercializador de marcas originales y alternas en equipo original, cumpliendo con altos estándares de calidad. <br/>
        NPS DIESEL S.A.S manifiesta que todo repuesto despachado por la empresa tiene garantía por defectos de fábrica. <br/>
        Nuestra garantía incluye la reparación, reposición o cambio del producto o alguno de sus componentes sin cargos adicionales, teniendo en cuenta los procesos de verificación y la evaluación técnica de los productos en caso de presentarse alguna anomalía. <br/>
        La garantía es nula en caso que el daño del producto se deba al desgaste normal, a una mala manipulación o bien a un mantenimiento inadecuado, así como por cualquier otra falla que sea atribuible al consumidor. Se otorgará garantía contados 30 días después de la instalación del producto, cada artículo debe estar debidamente marcado por NPS DIESEL SAS y debe encontrarse con todas sus partes para la efectiva revisión y diagnóstico técnico que pueda indicar la falla. El tiempo de respuesta de la misma por parte de NPS DIESEL SAS no debe superar las 72 horas después de ser informada la situación atípica presentada, en dado caso que La garantía aplique bajo los parámetros de fábrica se seguirán los tiempos de la misma y este será informado a nuestro cliente
        </p>
      </footer>
      
    </>
  )
}

export {Footer}