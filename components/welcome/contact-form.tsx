import Button from "../shared/button";

export default function ContactForm() {
    const sendMessageToWhatsapp = event => {
        event.preventDefault()
        const name = event.target.name.value
        const phoneNumber = event.target.telephone.value
        const email = event.target.email.value
        const message = event.target.message.value
        const textMessage = window.encodeURIComponent(`${name} \n ${phoneNumber} \n ${email} \n ${message}`)

        const whatsappLink = `https://api.whatsapp.com/send?phone=5581993704029&text=${textMessage}`
        window.open(whatsappLink, "_blank")

    }
    return (
        <div className="bg-dark-blue bg-pattern py-24 px-8 w-96 relative top-0 rounded-b-xl shadow z-10 sm:py-16 sm:m-0 sm:w-screen sm:rounded-none">
            <span className="font-bold text-white text-2xl mb-6 block">Mande-nos uma mensagem</span>
            <form className="grid gap-y-6" onSubmit={sendMessageToWhatsapp}>
                <input id="name" autoComplete="name" placeholder="Seu nome" className="bg-blue-400 border-2 border-blue-400 hover:border-blue-200 hover:border-2 px-5 py-2 text-white" type="text" />
                <input id="telephone" autoComplete="telephone" type="tel" placeholder="Telefone" className="bg-blue-400 border-2 border-blue-400 hover:border-blue-200 hover:border-2 px-5 py-2 text-white" />
                <input id="email" autoComplete="email" type="mail" placeholder="Email" className="bg-blue-400 border-2 border-blue-400 hover:border-blue-200 hover:border-2 px-5 py-2 text-white" />
                <textarea  placeholder="Escreva aqui sua mensagem" className="h-28 bg-blue-400 border-2 border-blue-400 hover:border-blue-200 hover:border-2 px-5 py-2 text-white" name="message" id="message"></textarea>
                <Button>Enviar</Button>
            </form>
        </div>
    )
}