interface IAssignmentsCard {
    title: string
    description: string
}
interface AssignmentsCardProps {
    assignment: IAssignmentsCard
}

export default function AssignmentsCard({assignment}: AssignmentsCardProps) {
    return (
        <div className="group rounded-md bg-white shadow-sm p-4 mx-5 content-center flex flex-col items-center transition-all hover:bg-blue-500 hover:text-white hover:scale-110">
            <div className="rounded-full border-2 p-4 border-dashed border-blue-300 mb-6 group-hover:border-solid group-hover:bg-blue-300 group-hover:animate-bounce">
                <img className="w-12" src="/images/service-icon-6.png" alt="Icon" />
            </div>
            <h4 className="font-sans font-bold text-blue-400 group-hover:text-white text-xl ">{assignment.title}</h4>
            <div className="w-6 h-1 bg-blue-200 my-4"></div>

            <p>{assignment.description}</p>

        </div>
    )
}