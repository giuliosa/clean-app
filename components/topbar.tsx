export default function Topbar() {
    return(
        <header className="fixed top-0 bg-dark-blue w-screen text-white">
            <div className="container mx-auto py-2">
                <div className="rounded-b w-10 h-16 p-4 absolute top-0 bg-white shadow"></div>
                <div className="ml-14 flex flex-row justify-between">
                    <div className="divide-x divide-dashed">
                        <span className="text-sm px-2">
                            Fone: (81) 9999-9999
                        </span>
                        <span className="text-sm px-2">
                            E-mail: teste@gmail.com
                        </span>
                    </div>
                    <div className="order-last">
                        <span>Icone</span>
                    </div>
                </div>
            </div>
            <div className="bg-blue w-full">
                <nav className="container mx-auto w-full ">
                    <ul className="flex flex-row ml-14">
                        <li>Home</li>
                        <li>Texto 2</li>
                        <li>Texto 3</li>
                    </ul>
                </nav>
            </div>        
        </header>
    )
}