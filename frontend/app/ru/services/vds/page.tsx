"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Tarif = {
  title: string;
  cpu: number;
  ram: number;
  ssd: number;
  networkSpeed: number;
  bandwidth: string;
  os: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Виртуальные серверы (VDS)",
  subheading: "Надежный VDS хостинг для белых и серых проектов",
  summary:
    'Обычные виртуальные серверы для «белой» или «серой» эксплуатации. Применяются стандартные политики обработки жалоб - жалобы обрабатываются согласно правилам дата-центра. Идеально для низкорисковых проектов, которые не ожидают жалоб или DMCA-уведомлений.'
};

const tarifs: Tarif[] = [
  // Lite Plans
  {
    title: "Lite 1",
    cpu: 1,
    ram: 1,
    ssd: 20,
    networkSpeed: 0.15,
    bandwidth: "Безлимитный",
    os: "Linux, Windows",
    price: 3.69,
    url: "https://t.me/diorhost_bot"
  },
  {
    title: "Lite 2",
    cpu: 2,
    ram: 2,
    ssd: 40,
    networkSpeed: 0.15,
    bandwidth: "Безлимитный",
    os: "Linux, Windows",
    price: 5.99,
    url: "https://t.me/diorhost_bot"
  },
  {
    title: "Lite 3",
    cpu: 2,
    ram: 4,
    ssd: 40,
    networkSpeed: 0.15,
    bandwidth: "Безлимитный",
    os: "Linux, Windows",
    price: 7.49,
    url: "https://t.me/diorhost_bot"
  },
  {
    title: "Lite 4",
    cpu: 2,
    ram: 6,
    ssd: 50,
    networkSpeed: 0.15,
    bandwidth: "Безлимитный",
    os: "Linux, Windows",
    price: 9.49,
    url: "https://t.me/diorhost_bot"
  },
  // Elite Plans
  {
    title: "Elite 1",
    cpu: 4,
    ram: 8,
    ssd: 80,
    networkSpeed: 0.15,
    bandwidth: "Безлимитный",
    os: "Linux, Windows",
    price: 16.66,
    url: "https://t.me/diorhost_bot"
  },
  {
    title: "Elite 2",
    cpu: 4,
    ram: 10,
    ssd: 100,
    networkSpeed: 0.15,
    bandwidth: "Безлимитный",
    os: "Linux, Windows",
    price: 23.79,
    url: "https://t.me/diorhost_bot"
  },
  {
    title: "Elite 3",
    cpu: 8,
    ram: 12,
    ssd: 150,
    networkSpeed: 0.15,
    bandwidth: "Безлимитный",
    os: "Linux, Windows",
    price: 37.79,
    url: "https://t.me/diorhost_bot"
  },
  {
    title: "Elite 4",
    cpu: 8,
    ram: 16,
    ssd: 200,
    networkSpeed: 0.15,
    bandwidth: "Безлимитный",
    os: "Linux, Windows",
    price: 42.29,
    url: "https://t.me/diorhost_bot"
  },
  // Mega Plans
  {
    title: "Mega 1",
    cpu: 12,
    ram: 24,
    ssd: 300,
    networkSpeed: 0.15,
    bandwidth: "Безлимитный",
    os: "Linux, Windows",
    price: 69.29,
    url: "https://t.me/diorhost_bot"
  },
  {
    title: "Mega 2",
    cpu: 12,
    ram: 32,
    ssd: 320,
    networkSpeed: 0.15,
    bandwidth: "Безлимитный",
    os: "Linux, Windows",
    price: 87.29,
    url: "https://t.me/diorhost_bot"
  },
  {
    title: "Mega 3",
    cpu: 16,
    ram: 48,
    ssd: 320,
    networkSpeed: 0.15,
    bandwidth: "Безлимитный",
    os: "Linux, Windows",
    price: 119.29,
    url: "https://t.me/diorhost_bot"
  },
  {
    title: "Mega 4",
    cpu: 16,
    ram: 64,
    ssd: 1000,
    networkSpeed: 0.15,
    bandwidth: "Безлимитный",
    os: "Linux, Windows",
    price: 195.29,
    url: "https://t.me/diorhost_bot"
  }
];

const comparisonData = [
  {
    label: "Политика жалоб",
    regular: "Применяются стандартные политики дата-центра",
    bulletproof: "DMCA игнорируется, ручная проверка"
  },
  {
    label: "Обработка жалоб",
    regular: "Возможна автоматическая блокировка",
    bulletproof: "Нет автоматических отключений"
  },
  {
    label: "Защита сети",
    regular: "Стандартная DDoS защита",
    bulletproof: "150+ Гбит/с с расширенной фильтрацией"
  },
  {
    label: "Юрисдикция",
    regular: "Стандартные дата-центры",
    bulletproof: "Оффшорные локации"
  },
  {
    label: "Приватность",
    regular: "Стандартные требования KYC",
    bulletproof: "Крипто-платежи, опциональный KYC"
  },
  {
    label: "Подходит для",
    regular: "Низкорисковые белые/серые проекты",
    bulletproof: "Высокорисковый контент, DMCA-heavy"
  }
];

export default function VirtualServersPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"vds" | "comparison">("vds");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              {hero.heading}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {hero.subheading}
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              {hero.summary}
            </p>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  Внимание: НЕ абузоустойчивый!
                </h3>
                <p className="text-gray-300 mb-3">
                  Это обычные VDS серверы. <strong>Жалобы и DMCA-уведомления обрабатываются согласно стандартным политикам дата-центра.</strong> Ваш сервер может быть заблокирован при получении жалоб на злоупотребления.
                </p>
                <p className="text-gray-300">
                  Нужен абузоустойчивый хостинг? Ознакомьтесь с нашими{" "}
                  <a href="/ru/bulletproof/vds" className="text-purple-400 hover:text-purple-300 underline">
                    Абузоустойчивыми VDS
                  </a>{" "}
                  с политикой игнорирования DMCA.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("vds")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "vds"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              Тарифы VDS
            </button>
            <button
              onClick={() => setActiveTab("comparison")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "comparison"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              Обычный vs Абузоустойчивый
            </button>
          </div>

          {/* VDS Plans */}
          {activeTab === "vds" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {tarifs.map((tarif, index) => (
                <motion.div
                  key={tarif.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">
                    {tarif.title}
                  </h3>
                  <div className="space-y-3 mb-6 text-gray-300">
                    <div className="flex justify-between">
                      <span>CPU:</span>
                      <span className="font-semibold">{tarif.cpu} ядер</span>
                    </div>
                    <div className="flex justify-between">
                      <span>RAM:</span>
                      <span className="font-semibold">{tarif.ram} ГБ</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SSD:</span>
                      <span className="font-semibold">{tarif.ssd} ГБ</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Сеть:</span>
                      <span className="font-semibold">{tarif.networkSpeed * 1000} Мбит/с</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Трафик:</span>
                      <span className="font-semibold">{tarif.bandwidth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ОС:</span>
                      <span className="font-semibold text-sm">{tarif.os}</span>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-white">${tarif.price}</span>
                    <span className="text-gray-400">/месяц</span>
                  </div>
                  <a
                    href={tarif.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-center transition-colors"
                  >
                    Заказать
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Comparison Table */}
          {activeTab === "comparison" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-6 bg-gray-800/50 border-b border-gray-700">
                  <div className="text-xl font-bold text-purple-400">Характеристика</div>
                  <div className="text-xl font-bold text-blue-400">Обычный VDS</div>
                  <div className="text-xl font-bold text-green-400">Абузоустойчивый VDS</div>
                </div>
                {comparisonData.map((row, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 gap-4 p-6 ${
                      index % 2 === 0 ? "bg-gray-900/30" : ""
                    }`}
                  >
                    <div className="font-semibold text-gray-300">{row.label}</div>
                    <div className="text-gray-400">{row.regular}</div>
                    <div className="text-gray-400">{row.bulletproof}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/ru/bulletproof/vds"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all"
                >
                  Посмотреть тарифы Абузоустойчивых VDS →
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Когда выбрать обычный VDS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                Белые проекты
              </h3>
              <p className="text-gray-300">
                Корпоративные сайты, блоги, e-commerce, SaaS-платформы и другие легитимные бизнес-проекты, которые не привлекают жалобы.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
            >
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                Разработка и тестирование
              </h3>
              <p className="text-gray-300">
                Среды разработки, staging-серверы, тестовые платформы и другие непродакшн нагрузки.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                Экономично
              </h3>
              <p className="text-gray-300">
                Экономичное решение для проектов, которым не нужны абузоустойчивые политики или оффшорная защита.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30"
          >
            <h2 className="text-3xl font-bold mb-4">
              Нужна помощь с выбором?
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Не уверены, какой тип VDS вам подходит - обычный или абузоустойчивый? Свяжитесь с нашей командой для персональных рекомендаций.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/diorhost_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors"
              >
                Связаться в Telegram
              </a>
              <a
                href="/ru/bulletproof/vds"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors"
              >
                Абузоустойчивые VDS
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
