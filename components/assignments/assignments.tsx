import AssignmentsCard from "./assignments-card";

export default function Assignments() {
    return (
        <section id="assignments" className="bg-assignments-image bg-no-repeat bg-cover max-h-screen">
            <div className="container mx-auto py-16 text-center">
                <h3 className="font-sans font-semibold text-lg text-blue-500 mb-4">Serviços</h3>
                <h2 className="font-sans text-4xl text-blue-400 mb-4">
                    <b className="font-bold">Nós providenciamos os melhores</b> <br /> serviços para ajudá-lo?
                </h2>

                <p className="mb-6 text-blue-400 px-40">Bixol is a design studio founded in London. Nowadays, we’ve grown and expanded our services, and have become a multinational firm, offering a variety of services and solutions Worldwide.</p>


                <div className="flex flex-row justify-between mt-24">
                    <AssignmentsCard />
                    <AssignmentsCard />
                    <AssignmentsCard />
                </div>

            </div>

        </section>
    )
}