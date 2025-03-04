import './Objectives.scss';

function Objectives() {
  
  return (
    <>
      <div className='objectives-container'>
        <div className='line-glow'><div className='glow'></div></div>
        <div className='objectives'>
          <h2 className='objectives-title'>MISIÓN</h2>
          <p className='objectives-text first'>Cumplir satisfactoriamente las necesidades de las empresas del sistema urbano, carga, turismo e intermunicipal en el mantenimiento y reparación de sus vehículos. Fortaleciendo además las ventas al detal prestando un servicio ágil y eficiente.</p>
        </div>
        <div className='objectives'>
          <h2 className='objectives-title'>VISIÓN</h2>
          <p className='objectives-text second'>Ser la comercializadora e importadora de repuestos diésel nuevos y usados, líder en precios, servicio y calidad. Estableciéndonos como proveedores número uno de repuestos en empresas de turismo, carga, transporte urbano e intermunicipal.</p>
        </div>
      </div>
      
    </>
  )
}

export {Objectives}