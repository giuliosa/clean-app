import Button from "../shared/button";
import ContactForm from "./contact-form";

export default function Welcome() {
    return (
        <section id="home" className="bg-welcome-image bg-no-repeat bg-cover max-h-screen contrast-125">
            <div className="container mx-auto">
                <div className="flex flex-row sm:flex-col" >
                    <div className="py-32 w-2/3 pr-14 sm:w-screen sm:px-4">
                        <h1 className="text-7xl text-white font-bold mb-4 drop-shadow-md sm:text-xl">Limpeza de móveis</h1>
                        <p className="text-xl text-white font-medium mb-7 drop-shadow-md sm:text-sm sm:my-9">Renove seu sofá com o nosso serviço de limpeza profissional. Agende agora e sinta a diferença!</p>
                        <Button>Me contrata</Button>
                    </div>
                    <div className="w-1/3 absolute right-0 sm:static">
                        <ContactForm />
                    </div>
                </div>

            </div>
            <img src="images/slider2-bg-bottom1.png" className="" />
        </section>
    ) 
}