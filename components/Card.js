import Image from "next/image";

export default function Card({image, name}){
    return(
        <>
            <div>
                <Image src={image} height={100} width={100}></Image>
                <button className="rounded bg-pink-300 text-[#000000] py-2 px-4 ">{name}</button>
            </div>
        </>
    );
}