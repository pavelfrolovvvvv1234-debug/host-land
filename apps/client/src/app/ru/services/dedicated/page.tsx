import Link from "next/link";

type Tarif = {
  title: string;
  cpu: number;
  threads: number;
  ram: number;
  ssd: number;
  networkSpeed: number;
  bandwidth: string;
  os: string;
  price: number;
  url: string;
};

const tarifs: Tarif[] = [
  {
    title: "Intel Xeon E3-1240v2",
    cpu: 4,
    threads: 8,
    ram: 16,
    ssd: 250,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 119,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "Intel Xeon E3-1240v2",
    cpu: 4,
    threads: 8,
    ram: 32,
    ssd: 250,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 145,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "2x Intel Xeon X5670",
    cpu: 12,
    threads: 24,
    ram: 64,
    ssd: 250,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 165,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "2x Intel Xeon X5670",
    cpu: 12,
    threads: 24,
    ram: 144,
    ssd: 500,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 195,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "2x Intel Xeon 2699v4",
    cpu: 44,
    threads: 88,
    ram: 256,
    ssd: 1000,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 365,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "2x Intel Xeon 2699v4",
    cpu: 44,
    threads: 88,
    ram: 512,
    ssd: 2000,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 450,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "2x Intel Xeon 2699v4",
    cpu: 44,
    threads: 88,
    ram: 768,
    ssd: 4000,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 550,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "2x Intel Gold 6138",
    cpu: 32,
    threads: 64,
    ram: 128,
    ssd: 500,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 265,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "2x Intel Gold 6138",
    cpu: 32,
    threads: 64,
    ram: 256,
    ssd: 500,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 349,
    url:
      "https://t.me/diorhost_bot"
  }
];

export default function DedicatedServersPageRu() {
  return (
    <div className="mt-4">
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)]">
        <h1 className="text-3xl font-bold">Выделенные сервера</h1>
        <p className="mt-2 text-white/70">
          Выделенные серверы для «белой» или «серой» работы. Жалобы не остаются без внимания! Возможность установки любой ОС.
        </p>
      </section>

      <div className="flex flex-wrap gap-4 p-2 bg-[#09131c] sm:justify-center shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)] rounded-lg mt-6">
        {tarifs.map((tarif) => (
          <div
            key={tarif.title + tarif.ram}
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
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                    <line x1="6" x2="6.01" y1="6" y2="6" />
                    <line x1="6" x2="6.01" y1="18" y2="18" />
                  </svg>
                  <h2 className="font-bold text-xl">{tarif.title}</h2>
                </div>
                <div className="mt-auto text-xs w-full">
                  <ul className="flex flex-col gap-2">
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">CPU</span> {tarif.cpu} ядер {tarif.threads} потоков
                    </li>
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">RAM</span> {tarif.ram} гб
                    </li>
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">SSD / NVME</span> {tarif.ssd} гб
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
                        ОС
                      </span>{" "}
                      {tarif.os}
                    </li>
                  </ul>
                </div>
                <a
                  href={tarif.url}
                  className="p-2 bg-black/20 w-full rounded-lg border-[#ffffff44] mt-4 border hover:border-[#6e84e4] text-center block"
                >
                  {tarif.price} $ / месяц
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


