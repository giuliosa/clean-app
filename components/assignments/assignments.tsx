import AssignmentsCard from "./assignments-card";
import serviceIcon3 from "../../public/images/service-icon-3.png"
import serviceIcon5 from "../../public/images/service-icon-5.png"
import serviceIcon6 from "../../public/images/service-icon-6.png"

export default function Assignments() {
    const assignments = [{
        image: serviceIcon3,
        title: "Limpeza de estofados",
        description: "Nós usamos técnicas de limpeza de alta qualidade para remover manchas, sujeira e odores dos seus estofados, deixando-os limpos, frescos e renovados."
    },
    {
        image: serviceIcon5,
        title: "Limpeza de colchões",
        description: "Nós removemos ácaros, sujeira e manchas dos seus colchões com equipamentos de limpeza profissional e produtos seguros para a saúde, melhorando a qualidade do seu sono."
    },   
    {
        image: serviceIcon6,
        title: "Limpeza de tapetes",
        description: "Nós usamos técnicas avançadas para remover manchas, sujeira e odores dos seus tapetes, deixando-os com uma aparência e sensação renovadas, como se fossem novos."
    }   
    ]
    return (
        <section id="assignments" className="bg-assignments-image bg-no-repeat bg-cover max-h-screen sm:max-h-max">
            <div className="container mx-auto py-16 text-center">
                <h3 className="font-sans font-semibold text-lg text-blue-500 mb-4">Serviços</h3>
                <h2 className="font-sans text-4xl text-blue-400 mb-4 sm:text-left sm:px-5">
                    <b className="font-bold">Nós providenciamos os melhores</b> <br /> serviços para ajudá-lo!
                </h2>

                <p className="mb-6 text-blue-400 px-40 sm:px-5 sm:text-left">Oferecemos remoção de manchas difíceis, odores desagradáveis e sujeira profunda para garantir que seus estofados fiquem com uma aparência e sensação de como novos. </p>


                <div className="flex flex-row justify-between mt-24 sm:flex-col">
                {assignments.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <AssignmentsCard assignment={item}/>
                ))}
                </div>

            </div>

        </section>
    )
}