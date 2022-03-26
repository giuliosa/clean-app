import Button from "../shared/button";

export default function About() {
    return (
        <section id="about" className="container mx-auto">
            <div className="flex flex-row py-16">
                <div className="bg-blue-200 w-1/2 h-144 rounded-lg"></div>
                <div className="w-1/2 pl-10 pr-14" >
                    <h3 className="font-sans font-semibold text-lg text-blue-500 mb-4">Sobre SR CleanMaster</h3>
                    <h2 className="font-sans text-4xl text-blue-400 mb-4">
                        <b className="font-bold">Porque você deve escolher</b> <br/> nossos serviços?
                    </h2>
                    <div className="divide-y divide-solid divide-gray-light mb-6">
                        <p className="mb-6 text-blue-400">Bixol is a design studio founded in London. Nowadays, we’ve grown and expanded our services, and have become a multinational firm, offering a variety of services and solutions Worldwide.</p>
                        <ul className="list-disc pt-6 pl-6">
                            <li className="mb-3 text-blue-400">The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</li>
                            <li className="mb-3 text-blue-400">We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</li>
                        </ul>
                    </div>
                    <Button>Detalhes</Button>
                </div>
            </div>
        </section>
    )
}