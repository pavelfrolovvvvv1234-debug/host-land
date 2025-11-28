import Link from "next/link";

type Prop = {
  name: string;
  value: string;
};

type Tarif = {
  title: string;
  cpu: number;
  ssd: number;
  ram: number;
  props: Prop[];
  price: number;
  url: string;
};

const tarifs: Tarif[] = [
  {
    title: "1X E5 2673 V3",
    cpu: 12,
    ssd: 1000,
    ram: 64,
    props: [
      { name: "IP", value: "1 IPv4 - Расширяемо" },
      { name: "ОС", value: "Linux, Windows" },
      { name: "Пропускная способность", value: "БЕЗЛИМИТ" },
      { name: "Скорость сети", value: "1 гбит/с" }
    ],
    price: 1935,
    url:
      "https://my.diorhost.com?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D286%26period%3D1%26project%3D2"
  },
  {
    title: "2X E5 2673 V3",
    cpu: 24,
    ssd: 1000,
    ram: 64,
    props: [
      { name: "IP", value: "1 IPv4 - Расширяемо" },
      { name: "ОС", value: "Linux, Windows" },
      { name: "Пропускная способность", value: "БЕЗЛИМИТ" },
      { name: "Скорость сети", value: "1 гбит/с" }
    ],
    price: 2275,
    url:
      "https://my.diorhost.com?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D288%26period%3D1%26project%3D2"
  },
  {
    title: "2X E5 2673 V3",
    cpu: 24,
    ssd: 2000,
    ram: 128,
    props: [
      { name: "IP", value: "1 IPv4 - Расширяемо" },
      { name: "ОС", value: "Linux, Windows" },
      { name: "Пропускная способность", value: "БЕЗЛИМИТ" },
      { name: "Скорость сети", value: "1 гбит/с" }
    ],
    price: 3189,
    url:
      "https://my.diorhost.com?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D290%26period%3D1%26project%3D2"
  },
  {
    title: "2X E5 2673 V3",
    cpu: 24,
    ssd: 1000,
    ram: 64,
    props: [
      { name: "IP", value: "1 IPv4 - Расширяемо" },
      { name: "ОС", value: "Linux, Windows" },
      { name: "Пропускная способность", value: "500ТБ" },
      { name: "Скорость сети", value: "10 гбит/с" }
    ],
    price: 4785,
    url:
      "https://my.diorhost.com?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D292%26period%3D1%26project%3D2"
  },
  {
    title: "2X E5 2673 V3",
    cpu: 24,
    ssd: 1000,
    ram: 128,
    props: [
      { name: "IP", value: "1 IPv4 - Расширяемо" },
      { name: "ОС", value: "Linux, Windows" },
      { name: "Пропускная способность", value: "500ТБ" },
      { name: "Скорость сети", value: "10 гбит/с" }
    ],
    price: 7745,
    url:
      "https://my.diorhost.com?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D296%26period%3D1%26project%3D2"
  }
];

export default function IPHMPageRu() {
  return (
    <div className="mt-4">
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)]">
        <h1 className="text-3xl font-bold">Выделенные Серверы IPHM</h1>
        <p className="mt-2 text-white/70">
          Сервера с IPHM предоставляют возможность скрывать настоящий IP-адрес пользователя, маскируя его под другой. Это может быть полезно для защиты приватности, обхода географических блокировок или проведения тестирования безопасности сети. Канал до 10гб/сек
        </p>
      </section>

      <div className="flex flex-wrap gap-4 p-2 bg-[#09131c] sm:justify-center shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)] rounded-lg mt-6">
        {tarifs.map((tarif, index) => (
          <div
            key={tarif.title + tarif.ram + index}
            className="p-2 rounded-lg border flex-grow sm:min-w-[250px] sm:max-w-[287px] border-[#ffffff49] select-none"
          >
            <div className="content">
              <div className="flex flex-col gap-2 !items-start !justify-start m-[20px]">
                <div className="flex flex-wrap gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="41"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
                    <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
                    <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
                  </svg>
                  <h2 className="font-bold text-xl">{tarif.title}</h2>
                </div>
                <div className="mt-auto text-xs w-full">
                  <ul className="flex flex-col gap-2">
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">CPU</span> {tarif.cpu} ядер
                    </li>
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">RAM</span> {tarif.ram} гб
                    </li>
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">SSD / NVME</span> {tarif.ssd} гб
                    </li>
                  </ul>
                  <ul className="mt-4 flex flex-col gap-2">
                    {tarif.props.map((prop) => (
                      <li key={prop.name} className="text-white/40 flex gap-2">
                        <span className="rounded-lg text-center flex justify-center items-center bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1">
                          {prop.name}
                        </span>{" "}
                        {prop.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tarif.url}
                  className="p-2 bg-black/20 w-full rounded-lg border-[#ffffff44] mt-4 border hover:border-[#6e84e4] text-center block"
                >
                  {tarif.price}$ / месяц
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


