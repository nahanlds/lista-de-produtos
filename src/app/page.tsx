"use client"
import React from "react";
import lista from "../../data.json";
import Botao from "./components/botao";
import { CartProvider } from "./CardContext";
import Carrinho from "./components/carrinho";

export default function Home() {
              

  return (
    <CartProvider>
      <h1 className="text-5xl font-bold m-6 text-rose-900">Desserts</h1>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:max-w-screen-lg gap-4 justify-items-center p-4">

        {lista.map((item) => (
          <div key={item.id} className="p-4 flex flex-col space-y-5 max-w-xs">
            {/* componente de imagem junto com o botão*/}
            <Botao {...item} />

            <div>
              <p className="text-rose-500">{item.category}</p>
              <h3 className="text-xl">{item.name}</h3>
              <span className="text-red text-lg font-semibold">${item.price.toFixed(2)}</span>
            </div>
            
          </div>
        ))}

        {/* componente de do Carrinho*/}
        <Carrinho />
      </main>
    </CartProvider>
  );
}
