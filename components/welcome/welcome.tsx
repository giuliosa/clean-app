import Button from "../shared/button";
import ContactForm from "./contact-form";

export default function Welcome() {
    return (
        <section id="home" className="bg-welcome-image bg-no-repeat bg-cover max-h-screen">
            <div className="container mx-auto">
                <div className="flex flex-row">
                    <div className="py-32 w-2/3 pr-14">
                        <h1 className="text-7xl text-white font-bold mb-4">Limpeza de móveis</h1>
                        <p className="text-xl text-white font-medium mb-7">Lorem ipsum dolor sit amet. Texto para encher linguiça enquanto eu não tenho o que colocar realmente aqui</p>
                        <Button>Me contrata</Button>
                    </div>
                    <div className="w-1/3 absolute right-0">
                        <ContactForm />
                    </div>
                </div>

            </div>
            <img src="images/slider2-bg-bottom1.png" className="" />
        </section>
    ) 
}