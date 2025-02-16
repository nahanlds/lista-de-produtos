import Image from "next/image";
import { Card } from "../type/interface";

export default function Lista(props : Card){
    
    return(
        <div className="flex items-center gap-3 md:gap-4 my-4">
            <Image
                src={props.image.thumbnail}
                alt={props.name}
                width={90}
                height={90}
            />
            <ol className="w-2/4">
                <li className="">
                    <p className="text-xl text-nowrap truncate">{props.name}</p>
                </li>
                <li className=" flex gap-3">
                    <p className="text-red font-semibold">{props.quantity}x</p>
                    <p className="text-lg text-rose-400">$ {props.price.toFixed(2)}</p>
                </li>
            </ol>
            <p className="text-nowrap text-xl font-semibold text-rose-500">$ {(props.price * props.quantity).toFixed(2)}</p>
        </div>
    )
}