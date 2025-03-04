import camion from '../../assets/Images/camion.jpg';
import './History.scss';

function History() {
  
  return (
    <>
      <div className='history-container'>
        <img className='history-image' src={camion} alt="camion" />
        <p className='history-text'>A lo largo de nuestra trayectoria en el mercado, hemos consolidado un servicio ágil, eficiente y competitivo, respaldado por nuestra experiencia en la colaboración con diversas empresas de transporte urbano, intermunicipal, turismo, recolección, y logística. Esta sólida experiencia nos ha permitido ganar la confianza de reconocidas compañías. Gracias a estas alianzas, reafirmamos nuestro compromiso de ofrecer calidad y soluciones integrales a nuestros clientes.</p>
      </div>
    </>
  )
}

export {History}