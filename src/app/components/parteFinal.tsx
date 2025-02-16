import { useContext } from "react";
import { CartContext } from "../CardContext";
import Image from "next/image";
import Lista from "./Lista";
import { Card } from "../type/interface";


export interface popUpProps {
    open: boolean;
}
export default function PopUp(pop : popUpProps){

    const cartContext = useContext(CartContext);
    if(!cartContext) {
        return null;
    }

    const { cart } = cartContext;
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    
    if(!pop.open){
        return null;
    }

    return(
    
        <div className="fixed top-0 left-0 w-full h-full bg-rose-400/30 z-50 flex justify-center items-center">
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl bg-rose-50 w-11/12 md:w-2/4 xl:w-4/12">
                <Image 
                    src="/assets/images/icon-order-confirmed.svg"
                    alt="confirmed"
                    width={35}
                    height={35}
                />
                <h2 className="text-rose-900 text-3xl font-bold text-start">Order confirmed</h2>
                <p className="text-rose-900 text-start">we hope you enjoy your food!</p>
                <div className="max-h-96 overflow-y-scroll text-start my-4 bg-rose-100 p-4 rounded-lg">
                    {cart.map((item: Card) => {
                        return (
                            
                            <div key={item.id} className="">
                                <Lista {...item} />
                            </div>
                        )
                    })}
                    <div className="flex justify-between p-3">
                        <p className="text-lg">Order Total:</p>
                        <p className="font-bold text-lg">$ {total}</p>
                    </div>
                </div>
                    <button type="button" className="mx-auto w-2/4 bg-red text-rose-50 py-2 px-6 rounded-3xl" onClick={() => {window.location.reload()}}>Start new Order</button>
            </div>
            
        </div>
        
    )
}