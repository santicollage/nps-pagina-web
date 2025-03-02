import './Benefits.scss';
import compass from '../../assets/Icons/Icons-UI/compass.png';
import bitmap from '../../assets/Icons/Icons-UI/bitmap.png';
import rocket from '../../assets/Icons/Icons-UI/rocket.png';
import people from '../../assets/Icons/Icons-UI/people.png';

function Benefits() {

  const benefits = [
    {
      id: 1,
      text: 'Trayectoria y confianza: Amplia experiencia en la distribución de repuestos originales y homologados de alta calidad, respaldada por alianzas con empresas de transporte público a nivel urbano y nacional.',
      icon: compass,
    },
    {
      id: 2,
      text: 'Variedad y calidad: Extenso catálogo de repuestos que se adaptan a diferentes necesidades y presupuestos, siempre garantizando estándares de excelencia.',
      icon: bitmap,
    },
    {
      id: 3,
      text: 'Cobertura nacional: Ofrecemos envíos rápidos y seguros a nivel urbano y nacional, garantizando que los productos lleguen en el menor tiempo posible.',
      icon: rocket,
    },
    {
      id: 4,
      text: 'Servicio profesional: Un equipo altamente calificado que brinda soluciones rápidas y eficaces a las necesidades de nuestros clientes.',
      icon: people,
    }
  ]
  
  return (
    <>
      <div className='line-glow'><div className='glow'></div></div>
      <div className='benefits-container'>
        {
          benefits.map(benefit => (
            <div key={benefit.id} className='benefit'>
              <p className='benefit-text'>{benefit.text}</p>
              <img className='benefit-icon' src={benefit.icon} alt='icon'/>
            </div>
          ))
        }
      </div>
    </>
  )
}

export {Benefits}