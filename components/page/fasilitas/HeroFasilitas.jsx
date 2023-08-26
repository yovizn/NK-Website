import Image from "next/image";
import Link from "next/link";
import Foto from "@public/images/Fasilitas/LapanganRT10.png";

export default function HeroFasilitas() {
  return (
    <div className="min-h-screen p-8 flex flex-col relative lg:mb-10">
      <Image
        src={Foto}
        alt="Lapangan RT 10"
        fill
        sizes="100vh"
        priority
        placeholder="blur"
        blurDataURL="/images/Fasilitas/LapanganRT10.png"
        className="object-cover object-top brightness-[0.7]"
      />
      <div className="z-10 bg-gradient-to-b from-transparent to-background absolute top-0 left-0 right-0 h-screen" />
      <div
        data-scroll
        data-scroll-speed="1.8"
        className="flex-1 flex-col flex justify-center gap-10 lg:max-w-6xl lg:mx-auto z-20 "
      >
        <div className="max-w-3xl flex flex-col gap-10">
          <h1 className="text-2xl md:text-6xl font-medium">
            Apa saja Fasilitas yang ada di lingkungan{" "}
            <span className="text-primary block font-thin">
              Nakula Kresna ?
            </span>
          </h1>
          <p className="lg:text-xl text-justify">
            Fasilitas yang ada di lingkungan Nakula Kresna cukup lengkap.
            Fasilitas yang ada di lingkungan Nakula Kresna antara lain;
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-x-20 gap-y-5 text-center">
          <Link
            scroll={true}
            className="bg-accent font-semibold px-3 py-1 rounded-full"
            href="#keagamaan"
          >
            Keagamaan
          </Link>
          <Link
            scroll={true}
            className="bg-accent font-semibold px-3 py-1 rounded-full"
            href="#keamanan"
          >
            Keamanan
          </Link>
          <Link
            scroll={true}
            className="bg-accent font-semibold px-3 py-1 rounded-full"
            href="#lingkungan"
          >
            Lingkungan Hidup
          </Link>
          <Link
            scroll={true}
            className="bg-accent font-semibold px-3 py-1 rounded-full"
            href="#seni-olahraga"
          >
            Seni & Olahraga
          </Link>
          <Link
            scroll={true}
            className="bg-accent font-semibold px-3 py-1 rounded-full"
            href="#perekonomian"
          >
            UMKM
          </Link>
        </div>
      </div>
    </div>
  );
}
