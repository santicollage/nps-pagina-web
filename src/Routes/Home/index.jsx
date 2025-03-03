import './Home.scss';
import { Slider } from '../../UI/Slider';
import { Benefits } from '../../UI/Benefits';
import { MapNps } from '../../UI/MapNps';

function Home() {
  
  return (
    <>
      <section>
        <Slider/>
      </section>
      <section>
        <Benefits/>
      </section>
      <section>
        <MapNps/>
      </section>
      
    </>
  )
}

export {Home}