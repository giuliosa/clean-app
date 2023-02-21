import Image from "next/image";

export default function TopbarLogo() {
    return (
        <div className="rounded-b-2xl px-9 py-4 absolute top-0 bg-white shadow sm:w-screen sm:rounded-none sm:px-3 sm:left-0">
            <Image src="/images/logo.png" width={60} height={60}></Image>
        </div>
    )
}