import Link from "next/link";

type Tarif = {
  title: string;
  cpu: number;
  threads: number;
  port: number;
  ram: number;
  ssd: number;
  networkSpeed: number;
  dNet: number;
  bandwidth: string;
  os: string;
  price: number;
  url: string;
  pps: string;
};

const tarifs: Tarif[] = [
  {
    title: "TurboNet L",
    cpu: 4,
    threads: 0,
    port: 20,
    ram: 8,
    ssd: 50,
    networkSpeed: 10,
    dNet: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 99,
    url:
      "https://my.diorhost.com?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D301%26period%3D1%26project%3D2",
    pps: "~1.5 million"
  },
  {
    title: "TurboNet M",
    cpu: 8,
    threads: 0,
    port: 20,
    ram: 16,
    ssd: 100,
    networkSpeed: 10,
    dNet: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 159,
    url:
      "https://my.diorhost.com?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D307%26period%3D1%26project%3D2",
    pps: "~10 million"
  },
  {
    title: "TurboNet S",
    cpu: 16,
    threads: 0,
    port: 20,
    ram: 32,
    ssd: 150,
    networkSpeed: 10,
    dNet: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 199,
    url:
      "https://my.diorhost.com?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D313%26period%3D1%26project%3D2",
    pps: "~30 million"
  }
];

export default function TurboVDSPageRu() {
  return (
    <div className="mt-4">
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)]">
        <h1 className="text-3xl font-bold">TurboVDS</h1>
        <p className="mt-2 text-white/70">
          Серверы для парсинга, mass-check, SEO, анализа безопасности и других задач с высокой сетевой активностью. Скорость до 10 Гбит/сек обеспечивает молниеносную работу без потерь в стабильности. Подходят для порт-сканирования, проверки доступности хостов, автоматизации и API-запросов. Лучше стандартных абузоустойчивых VDS за счёт высокой пропускной способности.
        </p>
      </section>

      <div className="flex flex-wrap gap-4 p-2 bg-[#09131c] sm:justify-center shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)] rounded-lg mt-6">
        {tarifs.map((tarif) => (
          <div
            key={tarif.title}
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
                    stroke="#FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
                    <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
                    <path d="M6 6h.01" />
                    <path d="M6 18h.01" />
                    <path d="m13 6-4 6h6l-4 6" />
                  </svg>
                  <h2 className="font-bold text-xl">{tarif.title}</h2>
                </div>
                <div className="mt-auto text-xs w-full">
                  <ul className="flex flex-col gap-2">
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">CPU</span> {tarif.cpu} ядер
                      {tarif.threads !== null && tarif.threads !== 0 && (
                        <>
                          <span className="text-white/40"> / </span>
                          {tarif.threads} потоков
                        </>
                      )}
                    </li>
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">RAM (DDR5)</span> {tarif.ram} гб
                    </li>
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">NVME</span> {tarif.ssd} гб
                    </li>
                  </ul>
                  <ul className="mt-4 flex flex-col gap-2">
                    <li className="text-white/40 flex gap-2">
                      <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                        Скорость сети
                      </span>{" "}
                      {tarif.networkSpeed} гб/с
                    </li>
                    <li className="text-white/40 flex gap-2">
                      <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                        Пропускная способность
                      </span>{" "}
                      {tarif.bandwidth}
                    </li>
                    <li className="text-white/40 flex gap-2">
                      <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                        Порт
                      </span>{" "}
                      {tarif.port} гбит
                    </li>
                    <li className="text-white/40 flex gap-2">
                      <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                        Выделенная сеть
                      </span>{" "}
                      {tarif.dNet} гбит
                    </li>
                    <li className="text-white/40 flex gap-2">
                      <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                        ОС
                      </span>{" "}
                      {tarif.os}
                    </li>
                    <li className="text-white/40 flex gap-2">
                      <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                        PPS
                      </span>{" "}
                      {tarif.pps}
                    </li>
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


