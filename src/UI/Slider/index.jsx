import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Lines } from '../Lines';
import './Slider.scss';
import velocimetro1 from '../../assets/Images/Slider/velocimetro1.svg';
import velocimetro2 from '../../assets/Images/Slider/velocimetro2.svg';
import piston from '../../assets/Images/Slider/piston.png';
import caja from '../../assets/Images/Slider/caja.png';
import suspension from '../../assets/Images/Slider/suspension.png';

function Slider() {
  const [position, setPosition] = useState(1);
  const numberSliders = 4;
  const navigate = useNavigate();

  const handleNavigate = (slug) => {
    navigate(`/products/${slug}`);
  }

  const calculatePosition = (index) => {
    if (position === index) {
      return 0;
    } else if ((position == 1 ? 4 : position - 1) === index) {
      return -100;
    } else {
      return 100;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => prev >= numberSliders ? prev = 1 : prev + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [position]);
  
  return (
    <div className='slider-container'>
      <button onClick={() => setPosition(prev => prev <= 1 ? prev = numberSliders : prev - 1)} className='slider-button button-left'></button>
      <button onClick={() => setPosition(prev => prev >= numberSliders ? prev = 1 : prev + 1)} className='slider-button button-right'></button>

      <div className='slider-card' style={{transform: `translateX(${calculatePosition(1)}%)`, opacity: position === 1 ? 1 : 0}}>
        <div className='slider-image'>
          <img className='image speedometer' src={velocimetro1} alt='velocimetro'/>
          <img className='image speedometer needle' src={velocimetro2} alt='velocimetro'/>
        </div>
        <div className='slider-text'>
          <h1 className='tittle text-right'>SERVICIO Y CALIDAD EN UN SOLO LUGAR</h1>
          <p className='text text-right'>Ofrecemos nuestros servicios como proveedores de repuestos Diesel nuevos para su flota de vehículos</p>
          <div className='line-glow'><div className='glow'></div></div>
        </div>
      </div>

      <div className='slider-card motor' style={{transform: `translateX(${calculatePosition(2)}%)`, opacity: position === 2 ? 1 : 0}}>
        <div className='slider-text'>
          <h1 className='tittle'>MOTOR</h1>
          <Lines/>
          <p className='text'></p>
          <button onClick={() => handleNavigate('motor')} className='button'><div className='glow'></div>VER MÁS</button>
        </div>
        <div className='slider-image'>
          <img className='image' src={piston} alt='piston'/>
          <div className='shadow'></div>
        </div>
      </div>

      <div className='slider-card' style={{transform: `translateX(${calculatePosition(3)}%)`, opacity: position === 3 ? 1 : 0}}>
        <div className='slider-image'>
          <img className='image' src={caja} alt='caja'/>
          <div className='shadow'></div>
        </div>
        <div className='slider-text'>
          <h1 className='tittle'>CAJA Y TRANSMISIÓN</h1>
          <p className='text'>Su vehículo merece lo mejor: Más de 30 marcas líderes en repuestos, calidad y confianza al alcance de su mano.</p>
          <button onClick={() => handleNavigate('caja')} className='button'> <div className='glow'></div>VER MÁS</button>
        </div>
      </div>

      <div className='slider-card' style={{transform: `translateX(${calculatePosition(4)}%)`, opacity: position === 4 ? 1 : 0}}>
        <div className='slider-text'>
          <h1 className='tittle'>SUSPENSIÓN</h1>
          <p className='text'>Visítenos en nuestra sede principal, ubicada en la zona comercial de mayor cobertura, Estanzuel, Los Martires, Bogota.</p>
          <button onClick={() => handleNavigate('suspension')} className='button'> <div className='glow'></div>VER MÁS</button>
        </div>
        <div className='slider-image'>
          <img className='image' src={suspension} alt='suspension'/>
          <div className='shadow'></div>
        </div>
      </div>
    </div>
  )
}

export {Slider}