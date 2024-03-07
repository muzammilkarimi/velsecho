import Image from "next/image";
import { SparklesCore } from "../../components/ui/sparkles";
import { BsRobot } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[47rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex justify-center items-center gap-2 bg-white p-2 rounded-md absolute top-8 left-10">
        <BsRobot className="text-2xl text-black" />
        <p className="font-bold text-black">VelsEcho</p>
      </div>
      <div className="absolute top-8 right-10 ">
        <Image
          src="/velslogo.png"
          alt="VelsEcho"
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl text-white">Introducing</h2>
        <h1 className="md:text-7xl text-6xl lg:text-9xl font-bold text-center text-white relative z-20">
          VelsEcho
        </h1>
        <p className="text-center text-l text-white">AI Assistent with power packed by GPT-4</p>
      </div>
      <button className="flex flex-col justify-center items-center bg-white rounded-full w-20 h-20 p-2 absolute bottom-12 mb-8 duration-500 hover:bg-gray-400">
        <BsRobot className="text-6xl text-black" />
        <p className="text-center text-black font-bold">chat</p>
      </button>
      
      <div className="absolute bottom-3 right-10 text-white"> 
        <p>Made with 🤍 by <strong><Link href="https://muzammilkarimi.github.io/ " target="_blank">MAK</Link></strong></p>
      </div>
    </div>
  );
}
