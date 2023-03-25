import Image from "next/image";

export default function TopbarLogo() {
    return (
        <div className="rounded-b-2xl px-9 py-4 absolute top-0 bg-white shadow sm:w-screen sm:rounded-none sm:px-3 sm:left-0 sm:flex sm:items-center">
            <Image src="/images/logo.png" width={60} height={60} alt="logo"></Image>
            <p className="hidden text-blue-500 font-bold ml-2 text-2xl sm:inline-block ">SR Clean Master</p>
        </div>
    )
}