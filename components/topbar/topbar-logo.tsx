import Image from "next/image";

export default function TopbarLogo() {
    return (
        <div className="rounded-b-2xl px-9 py-4 absolute top-0 bg-white shadow">
            <Image src="/images/logo-dark-1.png" width={60} height={76}></Image>
        </div>
    )
}