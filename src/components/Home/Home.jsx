import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tSharts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart =tshart=>{

        const exists = cart.find(ts=>ts._id===tshart._id);
        if(exists){
      toast('You have this t-shirt')
          }else{
            const newCart = [...cart, tshart];
    setCart(newCart);
          }
   
    }


   const  handleRemoveFromCart=id=>{
const remaining = cart.filter(ts=>ts._id!==id);
setCart(remaining);
   }
    return (
        <div className='home-container'>
        <div className='t-sharts-container'>
          {
          tSharts.map(tshart=> <TShirt
          key={tshart._id}
          tshart={tshart}
          handleAddToCart={handleAddToCart}
          ></TShirt>)  
          }
        </div>
        <div className='cart-container'>
<Cart
handleRemoveFromCart={handleRemoveFromCart}
cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Home;