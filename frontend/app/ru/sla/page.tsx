import type { Metadata } from "next";
import { LegalLayout } from "../../../components/LegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SLA - Соглашение об уровне обслуживания | Гарантия 99.9% аптайма | Dior Host",
  description:
    "SLA Dior Host: гарантия 99.9% аптайма серверов, 99.95% доступности сети, поддержка NOC 24/7 с временем ответа <1 часа. Кредиты на услуги: 10-50% за простои. Дата-центры Tier III, резервное питание, сетевые пути.",
  keywords: [
    "sla",
    "соглашение об уровне обслуживания",
    "гарантия аптайма",
    "sla хостинга",
    "99.9% аптайм",
    "гарантия аптайма серверов",
    "sla доступности сети",
    "кредиты на услуги хостинга",
    "компенсация за простои"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Соглашение об уровне обслуживания Dior Host",
  "description": "Соглашение об уровне обслуживания с гарантиями аптайма и кредитами на услуги",
  "provider": {
    "@type": "Organization",
    "name": "Dior Host",
    "url": "https://dior.host"
  },
  "serviceType": "Hosting Services",
  "areaServed": ["Netherlands", "Germany", "Romania", "Moldova"]
};

export default function SLAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout
        title="Соглашение об уровне обслуживания (SLA)"
        description="Гарантии аптайма и обязательства по обслуживанию"
      >
        <section id="uptime-commitment" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            1. Гарантия 99.9% аптайма
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Dior Host гарантирует 99.9% аптайм серверов и 99.95% доступность сети для всех услуг, измеряемые ежемесячно. Фактическая производительность постоянно превышает эти гарантии, с 99.99% аптаймом во всех дата-центрах.
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Аптайм серверов</h3>
                  <p className="text-4xl font-bold text-green-400 mb-2">99.9%</p>
                  <p className="text-sm text-white/70">Гарантированный ежемесячный аптайм</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Доступность сети</h3>
                  <p className="text-4xl font-bold text-blue-400 mb-2">99.95%</p>
                  <p className="text-sm text-white/70">Доступность сетевых путей</p>
                </div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              Аптайм рассчитывается как: (Всего минут - Минуты простоя) / Всего минут × 100%. Плановое обслуживание с уведомлением за 48 часов исключается из расчетов аптайма.
            </p>
          </div>
        </section>

        <section id="network-availability" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            2. Доступность сети
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Мы гарантируем 99.95% доступность сети, измеряемую на граничных маршрутизаторах дата-центра. Доступность сети включает:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Резервные сетевые пути к нескольким вышестоящим провайдерам</li>
              <li>Маршрутизация BGP с автоматическим переключением</li>
              <li>Защита от DDoS и фильтрация (до наших лимитов мощности)</li>
              <li>Пиринг на NL-IX</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              Простой сети измеряется как неспособность маршрутизировать трафик к/от вашей услуги из-за сбоев инфраструктуры, исключая DDoS-атаки, превышающие нашу способность фильтрации.
            </p>
          </div>
        </section>

        <section id="recovery-time" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            3. Предположительное время восстановления
          </h2>
          <div className="bg-black/30 border border-white/10 rounded-lg p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-semibold">Сервис / Компонент</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Предположительное время восстановления</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Примечания</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Главный сайт, биллинг и панели управления</td>
                  <td className="py-3 px-4">1-2 часа</td>
                  <td className="py-3 px-4">Восстанавливаются при сбое панели, ОС или сервера</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Выдача виртуального сервера</td>
                  <td className="py-3 px-4">3-6 минут</td>
                  <td className="py-3 px-4">Биллинг даёт команду на создание ВМ и автоматически устанавливает ОС</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Регистрация домена</td>
                  <td className="py-3 px-4">16 часов – 3 дня</td>
                  <td className="py-3 px-4">Много юридической возни, поэтому срок регистрации увеличен</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Выдача физического сервера</td>
                  <td className="py-3 px-4">4 часа – 3 дня</td>
                  <td className="py-3 px-4">Иногда сервер нужно привезти на объект или вызвать сотрудника для установки комплектующих</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Смена ОС на физическом сервере</td>
                  <td className="py-3 px-4">1-6 часов</td>
                  <td className="py-3 px-4">Сотрудник дата-центра самостоятельно ставит ОС</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Время ответа от поддержки</td>
                  <td className="py-3 px-4">1-30 минут</td>
                  <td className="py-3 px-4">Иногда сотрудники в одно и то же время спят</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Дополнительно</td>
                  <td className="py-3 px-4">по ситуации</td>
                  <td className="py-3 px-4">Уведомление клиентов через тикеты или Telegram</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="support-response" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            4. Время ответа поддержки
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Наш NOC (Центр сетевых операций) 24/7 предоставляет поддержку со следующими гарантиями времени ответа:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white font-semibold">Приоритет тикета</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Время ответа</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Описание</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4"><span className="text-red-400 font-semibold">Критический</span></td>
                    <td className="py-3 px-4">≤ 1 час</td>
                    <td className="py-3 px-4">Услуга полностью недоступна, потеря данных, нарушение безопасности</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4"><span className="text-orange-400 font-semibold">Высокий</span></td>
                    <td className="py-3 px-4">≤ 4 часа</td>
                    <td className="py-3 px-4">Значительная деградация производительности, частичный сбой услуги</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4"><span className="text-yellow-400 font-semibold">Средний</span></td>
                    <td className="py-3 px-4">≤ 24 часа</td>
                    <td className="py-3 px-4">Незначительные проблемы, вопросы по конфигурации, общие запросы</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><span className="text-blue-400 font-semibold">Низкий</span></td>
                    <td className="py-3 px-4">≤ 48 часов</td>
                    <td className="py-3 px-4">Запросы функций, вопросы по биллингу, не срочные вопросы</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              Время ответа измеряется с момента подачи тикета до первого ответа человека. Время ответа применяется в рабочие часы (24/7 для критических проблем, рабочие дни для низкого/среднего приоритета).
            </p>
          </div>
        </section>

        <section id="credits-compensation" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            5. Кредиты на услуги и компенсация
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Если аптайм падает ниже наших гарантий, кредиты на услуги автоматически применяются к вашему аккаунту:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white font-semibold">Ежемесячный аптайм</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Кредит на услуги</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Расчет</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">99.0% - 99.9%</td>
                    <td className="py-3 px-4"><span className="text-green-400 font-semibold">10%</span></td>
                    <td className="py-3 px-4">10% от ежемесячной платы за услугу</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">98.0% - 99.0%</td>
                    <td className="py-3 px-4"><span className="text-yellow-400 font-semibold">25%</span></td>
                    <td className="py-3 px-4">25% от ежемесячной платы за услугу</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">{"<"} 98.0%</td>
                    <td className="py-3 px-4"><span className="text-red-400 font-semibold">50%</span></td>
                    <td className="py-3 px-4">50% от ежемесячной платы за услугу</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-black/20 border border-white/5 rounded-lg p-4 mt-4">
              <h3 className="font-semibold mb-2 text-white">Применение кредитов</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80 text-sm ml-4">
                <li>Кредиты автоматически рассчитываются и применяются в конце каждого биллингового месяца</li>
                <li>Кредиты применяются к следующему биллинговому циклу</li>
                <li>Кредиты не могут быть обменены на денежные возвраты</li>
                <li>Максимальный кредит в месяц: 50% от ежемесячной платы за услугу</li>
                <li>Кредиты рассчитываются только на основе затронутой услуги</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="ticket-escalation" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            6. Лестница эскалации тикетов
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Если ваша проблема не решена в течение гарантированного времени ответа, тикеты автоматически эскалируются:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-white mb-1">Уровень 1: Первоначальный ответ</h4>
                <p className="text-sm text-white/80">Инженер NOC отвечает в течение гарантированного времени</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Уровень 2: Эскалация (если не решено)</h4>
                <p className="text-sm text-white/80">Проверка старшим инженером в течение 2 часов после ответа Уровня 1</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Уровень 3: Эскалация руководства</h4>
                <p className="text-sm text-white/80">Проверка техническим руководством в течение 4 часов после Уровня 2</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Уровень 4: Исполнительная эскалация</h4>
                <p className="text-sm text-white/80">Проверка исполнительной командой для критических нерешенных проблем</p>
              </div>
            </div>
          </div>
        </section>

        <section id="monitoring-incidents" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            7. Мониторинг и инциденты
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">7.1. Мониторинг</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Мы непрерывно отслеживаем:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Аптайм и доступность серверов (ping, HTTP проверки)</li>
                <li>Сетевая связность и задержка</li>
                <li>Использование ресурсов (CPU, RAM, диск, пропускная способность)</li>
                <li>Здоровье оборудования (статус SMART, температура, питание)</li>
                <li>События безопасности и попытки вторжения</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">7.2. Реагирование на инциденты</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Когда инциденты обнаружены:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-white/80 ml-4">
                <li>Автоматические оповещения немедленно уведомляют инженеров NOC</li>
                <li>Инженеры расследуют и диагностируют проблему</li>
                <li>Затронутые клиенты уведомляются по одной из ветвей оповещения: email, через систему тикетов и Telegram-канал</li>
                <li>Решение реализуется и проверяется</li>
                <li>Отчет после инцидента генерируется для крупных инцидентов</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">7.3. Коммуникация об инцидентах</h3>
              <p className="text-white/80 leading-relaxed">
                Для инцидентов, затрагивающих нескольких клиентов или продолжающихся более 15 минут, мы предоставляем обновления статуса через Telegram-канал, биллинговую систему и службу поддержки. Обновления публикуются при начале инцидента, примерно каждые 30 минут в ходе его устранения и после полного разрешения.
              </p>
            </div>
          </div>
        </section>

        <section id="exclusions" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            8. Исключения из SLA
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Следующие события исключаются из расчетов SLA и не дают права на кредиты на услуги:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
            <li><strong>Плановое обслуживание:</strong> Обслуживание с предварительным уведомлением за 48 часов (обычно &lt; 4 часа в месяц)</li>
            <li><strong>Действия клиента:</strong> Перебои в обслуживании, вызванные конфигурацией клиента, программным обеспечением или действиями</li>
            <li><strong>Сторонние сервисы:</strong> Проблемы с Cloudflare, платежными процессорами или другими сторонними сервисами</li>
            <li><strong>DDoS-атаки:</strong> Атаки, превышающие нашу способность фильтрации DDoS (мы фильтруем до наших лимитов мощности)</li>
            <li><strong>Форс-мажор:</strong> Стихийные бедствия, война, действия правительства или другие форс-мажорные события</li>
            <li><strong>Приостановки, связанные с жалобами:</strong> Приостановки услуг из-за нарушений жалоб или запрещенной деятельности</li>
            <li><strong>Неуплата:</strong> Приостановки услуг из-за неудачных платежей или закрытия аккаунта</li>
          </ul>
        </section>

        <section id="claiming-credits" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            9. Запрос кредитов на услуги
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              Кредиты на услуги автоматически рассчитываются и применяются. Ручной запрос не требуется. Кредиты появляются в вашем аккаунте в течение 5 рабочих дней после окончания биллингового месяца.
            </p>
            <p className="text-white/80 leading-relaxed">
              Если вы считаете, что имеете право на кредиты, которые не были автоматически применены, свяжитесь с поддержкой с:
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
              <li>ID услуги и затронутым периодом времени</li>
              <li>Доказательствами простоя (логи, скриншоты, данные мониторинга)</li>
              <li>Описанием инцидента</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              Мы рассматриваем запросы на кредиты в течение 7 рабочих дней и применяем кредиты, если они подтверждены.
            </p>
          </div>
        </section>

        <section id="related-pages" className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Связанные документы</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/ru/public-offer"
              className="text-blue-300 hover:text-white underline"
            >
              Публичная оферта
            </Link>
            <Link
              href="/ru/user-agreement"
              className="text-blue-300 hover:text-white underline"
            >
              Пользовательское соглашение
            </Link>
            <Link
              href="/ru/about"
              className="text-blue-300 hover:text-white underline"
            >
              О нас
            </Link>
          </div>
        </section>
      </LegalLayout>
    </>
  );
}


