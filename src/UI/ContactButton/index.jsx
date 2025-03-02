import './ContactButton.scss';

function ContactButton() {

  const phoneNumber = "573229713519";
  const message = "Hola, estoy interesado en sus productos.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  
  return (
    <>
      <button onClick={handleClick} className="contact-button">
        <div className='contact-button--icon'></div>  
        CONTACTANOS
      </button>      
    </>
  )
}

export {ContactButton}