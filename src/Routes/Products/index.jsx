import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import productsList from '../../data/productsList';
import './Products.scss';

function Products() {
  const location = useLocation();
  const slug = location.pathname.split("/").pop();
  
  const [inputValue, setInputValue] = useState((slug && slug != "products") ? slug : "");

  useEffect(() => {
    setInputValue((slug && slug != "products") ? slug : "");
  }, [slug]);
  
  let productsFilter = productsList
  .filter(product => product.name.toLowerCase().includes(inputValue.toLowerCase()) 
  || product.category.toLowerCase().includes(inputValue.toLowerCase()) 
  || product.reference.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <> 
      <div className='search-bar-container'>
        <input className='search-bar' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} maxLength={20} size={20} placeholder='BUSCAR' />
        <div className='icon-search'></div> 
        <div className='line-glow'><div className='glow'></div></div>
      </div>

      
      <div className='products-container'>

        {
          (productsFilter.length === 0) ? 
          <h1 className='no-products'>No se encontraron productos</h1> 
          : productsFilter.map((product) => (
            <div className='product-card' key={product.id}>
              <div className='product-image'>
                <img src={product.image} alt="product" />
              </div>
              <div className='product-info'>
                <h3 className='product-name'>{product.name}</h3>
                <p className='product-text'>Categoria: {product.category}</p>
                <p className='product-text'>Referencia: {product.reference}</p>
              </div>
            </div>
            ))
        }

      </div>
    </>
  )
}

export {Products}