import { faMobileAndroid, faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TopbarNav from "./topbar-nav";
import TopbarLogo from "./topbar-logo";

export default function Topbar() {
    return(
        <header className="bg-dark-blue w-screen text-white sticky top-0 z-20 sm:w-full">
            <div className="container mx-auto py-2">
                <TopbarLogo />
                <div className="ml-28 flex flex-row justify-between sm:hidden">
                    <div className="divide-x divide-dashed flex flex-row">
                        {/* TODO: Transformar em component */}
                        <span className="text-sm px-8 flex flex-row">
                            <FontAwesomeIcon icon={faMobileAndroid} color="#007CFB" className="fill-blue w-3"/>
                            <span className="font-sans font-bold pl-1">Fone:</span> 
                            <a className="font-sans pl-1 text-gray-light hover:text-white transition-colors" href="tel:8199999999">(81) 9999-9999</a>                            
                        </span>
                        <span className="text-sm px-8 flex flex-row">
                            <FontAwesomeIcon icon={faEnvelopesBulk} color="#007CFB" className="fill-blue w-4"/>
                            <span className="font-sans font-bold pl-1">E-mail:</span> 
                            <a className="font-sans pl-1 text-gray-light hover:text-white transition-colors" href="mailto:teste@gmail.com">teste@gmail.com</a>
                        </span>
                    </div>
                    <div className="order-last">
                        <span>Icone</span>
                    </div>
                </div>
            </div>
            <TopbarNav />
        </header>
    )
}