import Image from "next/image";
import testPicture from "../../public/images/limpeza-de-estofados.jpg"

export default function PortfolioGallery() {
    return (
        <div className="grid grid-rows-2 grid-cols-3 gap-4 mt-4">
            <div className="row-span-2 bg-blue-200">
                <Image src={testPicture} alt="Limpeza de estofados"/>
            </div>
            <div className="bg-blue-300">
                <Image src={testPicture} alt="Limpeza de estofados"/>
            </div>
            <div className="bg-blue-400"><Image src={testPicture} alt="Limpeza de estofados"/></div>
            <div className=" bg-blue-400"><Image src={testPicture} alt="Limpeza de estofados"/></div>
            <div className="bg-blue-400"><Image src={testPicture} alt="Limpeza de estofados"/></div>
            
        </div>
    ) 
}