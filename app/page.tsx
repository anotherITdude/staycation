import Image from "@/node_modules/next/image";
import Logo from '../public/logo.svg'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image src={Logo} alt="" width={100} height={100} />
      <h1 className="text-2xl text-blue-950 font-bold capitalize mt-10 animate-pulse">
        {" "}
        AAF Staycation Campaign Coming Soon...
      </h1>
    </main>
  );
}
