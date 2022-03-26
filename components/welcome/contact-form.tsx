import Button from "../shared/button";

export default function ContactForm() {
    return (
        <div className="bg-dark-blue bg-pattern py-24 px-8 w-96 relative top-0 rounded-b-xl shadow z-10">
            <span className="font-bold text-white text-2xl mb-6 block">Mande-nos uma mensagem</span>
            <form className="grid gap-y-6" action="">
                <input placeholder="Seu nome" className="bg-blue-400 border-2 border-blue-400 hover:border-blue-200 hover:border-2 px-5 py-2 text-white" type="text" />
                <input type="tel" placeholder="Telefone" className="bg-blue-400 border-2 border-blue-400 hover:border-blue-200 hover:border-2 px-5 py-2 text-white" />
                <input type="mail" placeholder="Email" className="bg-blue-400 border-2 border-blue-400 hover:border-blue-200 hover:border-2 px-5 py-2 text-white" />
                <textarea  placeholder="Escreva aqui sua mensagem" className="h-28 bg-blue-400 border-2 border-blue-400 hover:border-blue-200 hover:border-2 px-5 py-2 text-white" name="message" id="message"></textarea>
                <Button>Envie uma mensagem</Button>
            </form>
        </div>
    )
}