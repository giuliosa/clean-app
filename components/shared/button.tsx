export default function Button({ children }) {
    return (
        <button className="rounded-full bg-blue-200 hover:bg-blue-300 px-6 py-4 font-semibold text-white w-fit">
            {children}
        </button>
    )
}