import Image from "@/node_modules/next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        src="https://www.alainfarms.com/storage/2019/11/logo.svg"
        alt=""
        width={100}
        height={100}
      />
      <h1 className="text-2xl text-blue-950 font-bold capitalize mt-10 animate-pulse">
        {" "}
        AAF Staycation Coming Soon...
      </h1>
    </main>
  );
}
