import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faEnvelopesBulk, faMobileAndroid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="bg-blue-500 p-14 text-white">
            <div className="container mx-auto">
                <div className="flex flex-row justify-between sm:flex-col">
                    <div className="pr-8 w-1/3 sm:w-auto">
                        <h4 className="font-bold text-xl mb-2">
                            Nós somos <b className="text-blue-200">SR CleanMaster</b>
                        </h4>
                        <p className="text-sm text-gray-light pr-24">
                            Fornecemos serviços de limpeza de estofados de alta qualidade, com foco na satisfação do cliente, excelência na técnica e uso de produtos seguros e ambientalmente responsáveis.
                        </p>

                    </div>

                    <div className="pr-8">
                        <h4 className="font-bold text-xl mb-2 sm:mt-8">
                            Newsletter
                        </h4>
                        <p className="text-sm text-gray-light mb-5">
                            Inscreva-se em nossa newsletter
                        </p>
                        <form className="group flex flex-row" action="">
                            <input className="bg-blue-400 px-5 py-2 text-white text-sm" type="text" placeholder="Seu endereço de email" />
                            <div className="bg-blue-200 px-5 py-2">
                                <FontAwesomeIcon icon={faPaperPlane} color="#fff" className="fill-white w-5"/>
                            </div>
                        </form>
                        <div className="flex flex-row mt-4 gap-4">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} color="#fff" className="fill-white w-5"/>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} color="#fff" className="fill-white w-5"/>
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTiktok} color="#fff" className="fill-white w-5"/>
                            </a>
                        </div>

                    </div>

                    <div className="pr-8 sm:mt-8">
                        <h4 className="font-bold text-xl mb-2">
                            Informações
                        </h4>
                        <ul>
                            <li className="text-sm text-gray-light mb-5 flex flex-row items-center">
                                <FontAwesomeIcon icon={faMobileAndroid} color="#007CFB" className="fill-blue w-3 pr-1"/>
                                Tel: (81) 99370-4029
                            </li>
                            <li className="text-sm text-gray-light mb-5 flex flex-row items-center">
                                <FontAwesomeIcon icon={faEnvelopesBulk} color="#007CFB" className="fill-blue w-4 pr-1"/>
                                Email: email@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div className="pr-8 sm:mt-8">
                        <h4 className="font-bold text-xl mb-2">
                            Instagram
                        </h4>
                        {/* TODO Instagram grid */}
                    </div>
                </div>
            </div>
        </footer>
    )
}