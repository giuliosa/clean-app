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
                        <p className="mb-6 text-blue-400">Seu sofá é o coração da sua casa - é onde você relaxa, assiste a filmes com a família e recebe amigos. Mas com o tempo, mesmo o sofá mais resistente pode acumular sujeira, manchas e odores desagradáveis. É aí que entramos: nosso serviço de limpeza de sofá de primeira classe garante que seu sofá volte a parecer e cheirar como novo. Deixe-nos cuidar do seu sofá para que você possa desfrutar de sua casa com conforto e confiança.</p>
                        <ul className="list-disc pt-6 pl-6">
                            <li className="mb-3 text-blue-400">Equipe profissional e experiente que utiliza técnicas de limpeza eficazes.</li>
                            <li className="mb-3 text-blue-400">Resultados de limpeza de alta qualidade com uso de produtos seguros e ambientalmente responsáveis.</li>
                        </ul>
                    </div>
                    {/* <Button>Detalhes</Button> */}
                </div>
            </div>
        </section>
    )
}