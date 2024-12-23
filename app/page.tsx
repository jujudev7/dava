import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="heading flex h-screen flex-col bg-slate-950 text-white">
        <h1 className="-mt-6 ml-6 text-[47vh] font-bold">DAVA</h1>
        <h2 className="-mt-20 mb-10 ml-12 text-7xl font-thin">
          Divertissement Ad Vitam Æternam
        </h2>
        <Image
          src="/parental-advisory.png"
          className="absolute right-5 top-5 border border-slate-700"
          width="160"
          height="100"
          alt="Parental Advisory logo"
        />
        <h3 className="absolute bottom-0 right-0 mb-5 mr-5 flex justify-end font-mono italic text-slate-400">
          Dans l&apos;inconscient collectif des Français (hors Corse et DOM-TOM)
          depuis 2014.
        </h3>
      </div>
      <div className="duo relative mt-20 overflow-hidden px-8">
        <Image
          src="/dava-tybalt.png"
          alt="Le duo DAVA et Tybalt, le chat."
          width={423}
          height={900}
          className="float-right ml-4 w-1/4"
        />

        <h2 className="mb-4 text-6xl font-bold">
          Sacha Béhar <span className="font-thin">&</span> Augustin
          Shackelpopoulos
          <span className="font-thin">,</span>
        </h2>

        <p className="text-4xl font-thin leading-relaxed">
          ces noms ne vous disent peut-être rien, pourtant il s&apos;agit
          d&apos;un des duos les plus iconiques du XXIe siècle. Deux hommes
          brillants qui ont uni leur sagacité au nom de l&apos;humour.{" "}
        </p>
        <br />
        <p className="text-4xl font-thin leading-relaxed">
          Tantôt espiègles, tantôt piquants, Sacha et Augustin trempent leur
          plume dans l&apos;acide pour nous faire rire. Poils à gratter de notre
          société, ils n&apos;hésitent pas à aborder les sujets qui fâchent,
          comme le nazisme, la pédophilie ou les chaussettes qui boulochent...
        </p>
        <br />

        <p className="text-4xl font-thin leading-relaxed">
          DAVA est un binôme éveillé, à la fois satirique et potache, aux
          frontières de l&apos;absurde et de l&apos;humour noir. C&apos;est bon
          ça !
        </p>

        <div className="tybalt absolute bottom-12 right-1/3 flex flex-col items-end">
          <p className="pb-2 font-kalam text-5xl text-pink-500">
            Ça, c&apos;est Tybalt
          </p>
          <Image src="/arrow.png" alt="" width={80} height={30} />
        </div>
      </div>

      {/* <div className="sacha">
        <p className="pb-20 text-4xl font-thin leading-relaxed">
          l&apos;Italie, le Stade Rennais, le cinéma. Il a un chat qui s&apos;appelle Tybalt.
        </p>
      </div>
      <div className="augustin">
        <p className="text-4xl font-thin leading-relaxed">Hétéro à 2000%, Zidane, Bob Dylan</p>
      </div> */}
      <div className="grid-container flex h-screen flex-col">
        <div className="item group flex-1 bg-[#368524] text-white transition-[flex] duration-300 hover:flex-[2]">
          <h2 className="p-4 text-5xl font-bold">DAVAVAD</h2>
          <h3 className="mb-6 pl-5 text-2xl font-thin">VIDÉOS À LA DEMANDE</h3>
          <Link href="https://davavad.fr/">
            <Image
              src="/tybalt-davavad.png"
              alt="Tybalt, vidéo à la demande"
              width={3767}
              height={840}
              className="w-full brightness-75 hover:brightness-100"
            />
          </Link>
          <p className="p-12 text-center text-xl">
            {" "}
            Retrouvez les vidéos à la demande de l&apos;irrésistible duo sur{" "}
            <Link
              href="https://davavad.fr/"
              className="px-1 text-2xl font-bold hover:rounded-xl hover:bg-white hover:pb-1 hover:text-[#368524]"
            >
              davavad.fr
            </Link>
          </p>
        </div>
        <div className="item group flex-1 bg-[#f00632] p-4 text-5xl font-bold text-white transition-[flex] duration-300 hover:flex-[2]">
          YOUTUBE
          <div className="video mt-8 hidden group-hover:block">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-Fv-GOSezIY?si=Oug2dJQf-joEO43q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="item group flex-1 bg-[#ffa500] p-4 text-5xl font-bold text-white transition-[flex] duration-300 hover:flex-[2]">
          INSTAGRAM
          <div className="video mt-8 hidden group-hover:block">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-Fv-GOSezIY?si=Oug2dJQf-joEO43q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="item group flex-1 bg-[#000000] p-4 text-5xl font-bold text-white transition-[flex] duration-300 hover:flex-[2]">
          X / TWITTER
          <div className="video mt-8 hidden group-hover:block">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-Fv-GOSezIY?si=Oug2dJQf-joEO43q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="item group flex-1 bg-[#266efd] p-4 text-5xl font-bold text-white transition-[flex] duration-300 hover:flex-[2]">
          FACEBOOK
          <div className="video mt-8 hidden group-hover:block">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-Fv-GOSezIY?si=Oug2dJQf-joEO43q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="item group flex-1 bg-[#ca4858] p-4 text-5xl font-bold text-white transition-[flex] duration-300 hover:flex-[2]">
          TIPEE
          <div className="video mt-8 hidden group-hover:block">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-Fv-GOSezIY?si=Oug2dJQf-joEO43q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="item group flex-1 bg-[#000000] p-4 text-5xl font-bold text-white transition-[flex] duration-300 hover:flex-[2]">
          TIKTOK
          <div className="video mt-8 hidden group-hover:block">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-Fv-GOSezIY?si=Oug2dJQf-joEO43q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="item group flex-1 bg-[#8a53fd] p-4 text-5xl font-bold text-white transition-[flex] duration-300 hover:flex-[2]">
          TWITCH
          <div className="video mt-8 hidden group-hover:block">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-Fv-GOSezIY?si=Oug2dJQf-joEO43q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
