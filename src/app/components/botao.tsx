"use client"
import Image from "next/image";
import { Card } from "../type/interface";
import { useContext, useState } from "react";
import { CartContext, CartContextType } from "../CardContext";

export default function Botao(props: Card) {
  const cartContext = useContext<CartContextType | undefined>(CartContext);

  
  const [ativo, setAtivo] = useState(false);
  const [contador, setContador] = useState(0);

  if (!cartContext) {
    return null; // ou algum fallback apropriado
  }
  const { addToCart, removeQuantity } = cartContext;
  

  function handleClick() {
    if(ativo){
      setAtivo(false);
    } else {
      setAtivo(true);
      handleIncrement();
    }
  }

  function handleIncrement() {
    setContador(contador + 1);
    addToCart({...props, quantity: contador});
  }

  function handleDeclement() {
    if(contador === 0){
      setAtivo(false);
    } else {
      setContador(contador - 1);
      removeQuantity({...props, quantity: contador});
    }
  }
  
  
  return (
    <div className="flex flex-col justify-center items-center">
      <Image 
        src={props.image.mobile} 
        alt={props.name}
        width={310}
        height={370}
        style={{ objectFit: "cover" }} // Garante que a imagem cubra o contêiner
        className={ativo ? 'border-2 border-red rounded-xl' : 'border-0 rounded-xl'} 
      />
    <div className={`border-[0.1rem] border-red p-1 w-3/5 rounded-3xl flex gap-1 justify-center items-center  ${ativo ? 'bg-red text-rose-50 justify-around': 'hover:text-red'}`}>
        {!ativo ?  
          <Image 
            src="/assets/images/icon-add-to-cart.svg" 
            alt="Add to cart"
            width={20}
            height={20}
          /> : 
          <div className="border-2 p-1 border-rose-50 rounded-xl flex gap-3 justify-center items-center">
            <button type="button" onClick={handleIncrement} >
              <Image 
                src="/assets/images/icon-increment-quantity.svg" 
                alt="Increment quantity"
                width={10}
                height={10}
              />
            </button>

          </div>
        }
        
        {ativo ? 
          contador :  
          <button type="button" onClick={handleClick} >add to Card</button> 
        }

        {!ativo ?  
          '' : 
          <div className="border-2 p-1 py-2 border-rose-50 rounded-xl flex gap-3 justify-center items-center">
            <button type="button" onClick={handleDeclement} >
              <Image 
                src="/assets/images/icon-decrement-quantity.svg" 
                alt="decrement quantity"
                width={10}
                height={10}
              />
            </button>
          </div>
        }
        
      </div>
    </div>
  );


}