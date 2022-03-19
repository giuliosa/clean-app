import AssignmentsCard from "./assignments-card";

export default function Assignments() {
    return (
        <section id="assignments" className="bg-assignments-image bg-no-repeat bg-cover max-h-screen">
            <div className="container mx-auto py-16 text-center">
                <h3>Serviços</h3>
                <h2>O que podemos fazer para ajudar você!</h2>
                <p>Texto</p>

                <div className="flex flex-row justify-between">
                    <AssignmentsCard />
                    <AssignmentsCard />
                    <AssignmentsCard />
                </div>

            </div>
            
        </section>
    )
}