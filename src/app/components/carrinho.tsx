import { useContext, useState } from "react";
import { CartContext } from "../CardContext";
import { Card } from "../type/interface";
import PopUp from "../components/parteFinal";
import Image from "next/image";


const carrinhoVazio = () => {
    return(
        <div className="flex flex-col justify-center items-center p-3">
            <Image
                src="/assets/images/illustration-empty-cart.svg"
                alt="Empty cart"
                width={300}
                height={300}
            />
            <p className="text-rose-300 text-lg font-semibold">Your added items will appear here</p>
        </div>
    )
}


export default function Carrinho(){
    // utiliza o contexto do carrinho
    const cartContext = useContext(CartContext);
    const [openPop, setOpenPop] = useState(false);

    // se o contexto do carrinho não existir, retorna nulo
    if (!cartContext) {
        return carrinhoVazio();
    }

    // obtém o carrinho do contexto
    const { cart, removeCard } = cartContext;

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    
    const handleRemove = (id: number) => {
        removeCard(id);
    }

    return(
        
        <div className="p-4 bg-rose-50 rounded-xl lg:mb-32 lg:max-w-xs xl:max-w-sm xl:fixed xl:right-10 xl:top-11">
            <h2 className="text-red text-lg font-bold mb-3">Your Card ({totalItems})</h2>
            <div className="max-h-96 overflow-y-scroll">

                {cart.length === 0 ? (
                    carrinhoVazio()
                ) : (
                    
                    cart.map((item: Card) => {
                        if(item.quantity === 0){
                            return null;
                        } else{
                            return(
                                <div key={item.id} className="flex justify-between items-center border-b-2 border-rose-300 p-2">
                                    <ol className="grid grid-cols-4 gap-3">
                                        <li className="col-span-4">
                                            <p className="text-xl">{item.name}</p>
                                        </li>
                                        <li className="col-end-1">
                                            <p className="text-red font-semibold">{item.quantity}x</p>
                                        </li>
                                        <li className="">
                                            <p className="text-lg text-rose-400">$ {item.price.toFixed(2)}</p>
                                        </li>
                                        <li>
                                            <p className="text-lg text-rose-500">$ {(item.price * item.quantity).toFixed(2)}</p>
                                        </li>
                                    </ol>
                                    <button type="button" onClick={() => handleRemove(item.id)}>
                                        <Image
                                            src="/assets/images/icon-remove-item.svg"
                                            alt="Delete"
                                            width={15}
                                            height={15}
                                        />
                                    </button>
                                </div>
                            )

                        }
                    })    
                    
                )}
            </div>
            {cart.length === 0 ? null :(
                <>
                    <div className="flex justify-between items-center py-4 px-2">
                        <p className=" text-xl">Order Total</p>
                        <p className="text-red font-semibold">${total}</p>
                    </div>
                    <div className="p-3 text-center">
                        <span className="bg-rose-100 flex gap-2 p-2 mb-4">
                            <Image
                                src="/assets/images/icon-carbon-neutral.svg"
                                alt="Carbon Neutral"
                                width={20}
                                height={20}
                            />
                            This is a <span className="font-semibold">carbon-neutral</span> delivery
                        </span>
                        <button type="button" className="w-10/12 bg-red text-rose-50 py-2 px-6 rounded-3xl" onClick={() => {setOpenPop(true)}}>Confirm Order</button>
                        <PopUp open={openPop} />
                    </div>
                
                </>

            )}
            
        </div>
    )
}