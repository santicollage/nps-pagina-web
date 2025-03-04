import { Objectives } from '../../UI/Objectives';
import { MapNps } from '../../UI/MapNps';
import './Us.scss';
import { History } from '../../UI/History';

function Us() {
  
  return (
    <>
      <h1 className="us-title">NOSOTROS</h1> 
      
      <section>
        <Objectives />
      </section>
      <section>
        <History />
      </section>
      <section>
        <MapNps />
      </section>
    </>
  )
}

export {Us}