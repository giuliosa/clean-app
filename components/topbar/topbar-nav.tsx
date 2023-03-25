export default function TopbarNav() {
    return (
        <div className="bg-blue-200 w-full sm:hidden">
                <nav className="container mx-auto w-full ">
                    <ul className="flex flex-row ml-36">
                        <li className="py-4 px-7 hover:bg-blue-300 cursor-pointer font-semibold transition-all">
                            <a href="#home">Home</a>
                        </li>
                        <li className="py-4 px-7 hover:bg-blue-300 cursor-pointer font-semibold transition-all">
                            <a href="#about">Sobre</a>
                        </li>
                        <li className="py-4 px-7 hover:bg-blue-300 cursor-pointer font-semibold transition-all">
                            <a href="#assignments">Serviços</a>
                        </li>
                        <li className="py-4 px-7 hover:bg-blue-300 cursor-pointer font-semibold transition-all">
                            <a href="#portfolio">Portifólio</a>
                        </li>
                    </ul>
                </nav>
            </div>     
    )
}