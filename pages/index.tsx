import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.svg";
import Development from "../assets/Development.svg";
import Whatsapp from "../assets/whatsapp.svg";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div className="space-y-10">
      <Head>
        <title>Pixbox Electronics Coming Soon!</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <header className="bg-[#9147fe]">
        <div className="w-full p-2 flex items-center justify-between m-auto max-w-[1000px]">
          <Link href="/">
            <a>
              <Logo className="w-[120px]" />
            </a>
          </Link>
          <ul className="space-y-2">
            <li>
              <Link href="https://wa.link/7jno4q">
                <a className="text-white font-medium flex items-center justify-between gap-2 hover:text-black group underline">
                  <Whatsapp className="w-[20px] fill-white group-hover:fill-black" />
                  +996 501 16 76 24
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://wa.link/ac06lz">
                <a className="text-white font-medium flex items-center justify-between gap-2 hover:text-black group underline">
                  <Whatsapp className="w-[20px] fill-white group-hover:fill-black" />
                  +996 551 63 75 15
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main className="w-full max-w-[900px] m-auto space-y-8">
        <Development className="w-full" />
        <p className="font-bold text-[30px] text-center">
          Скоро откроется наш новый захватывающий веб-сайт. Вернитесь и
          проверьте это.
        </p>
        <div className="flex items-center justify-center gap-20">
          <Link href="/">
            <a>
              <GrInstagram className="w-[50px] h-[50px] hover:fill-[#9147fe] fill-[#ff0062]" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <BsWhatsapp className="w-[50px] h-[50px] hover:fill-[#9147fe] fill-[#00a357]" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <FaTiktok className="w-[50px] h-[50px] hover:fill-[#9147fe] fill-[#000000]" />
            </a>
          </Link>
        </div>
      </main>
      <footer className="flex items-center justify-center flex-col space-y-2">
        <Logo className="w-[100px]" />
        <span className="font-bold text-[13px]">©2022 Pixbox Electronics</span>
      </footer>
    </div>
  );
};

export default Home;
