import './Home.scss';
import { Slider } from '../../UI/Slider';
import { Benefits } from '../../UI/Benefits';
import { Map } from '../../UI/Map';

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
        <Map/>
      </section>
      
    </>
  )
}

export {Home}