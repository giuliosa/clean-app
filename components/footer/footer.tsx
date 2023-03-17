export default function Footer() {
    return (
        <footer className="bg-blue-500 p-14 text-white">
            <div className="container mx-auto">
                <div className="flex flex-row justify-between sm:flex-col">
                    <div className="pr-8">
                        <h4 className="font-bold text-xl mb-2">
                            Nós somos <b className="text-blue-200">SR CleanMaster</b>
                        </h4>
                        <p className="text-sm text-gray-light">
                        Fornecemos serviços de limpeza de estofados de alta qualidade, com foco na satisfação do cliente, excelência na técnica e uso de produtos seguros e ambientalmente responsáveis.
                        </p>

                    </div>

                    <div className="pr-8">
                        <h4 className="font-bold text-xl mb-2">
                            Newsletter
                        </h4>
                        <p className="text-sm text-gray-light mb-5">
                            Subscribe our newsletter to get our latest update & news
                        </p>
                        <form className="group flex flex-row" action="">
                            <input className="bg-blue-400 px-5 py-2 text-white text-sm" type="text" placeholder="Seu endereço de email" />
                            <div className="bg-blue-200 px-5 py-2">9</div>
                        </form>
                        icone

                    </div>

                    <div className="pr-8">
                        <h4 className="font-bold text-xl mb-2">
                            Official Info
                        </h4>
                        <ul>
                            <li className="text-sm text-gray-light mb-5">
                                Tel: 81 - 99999-9999
                            </li>
                            <li className="text-sm text-gray-light mb-5">
                                Email: email@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div className="pr-8">
                        <h4 className="font-bold text-xl mb-2">
                            Instagram
                        </h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}