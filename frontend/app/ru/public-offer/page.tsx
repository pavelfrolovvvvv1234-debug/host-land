import type { Metadata } from "next";
import { LegalLayout } from "../../../components/LegalLayout";
import Link from "next/link";
import { PRIMARY_ORIGIN } from "../../../lib/canonical";

export const metadata: Metadata = {
  title: "Публичная оферта - Условия обслуживания | Dior Host",
  description:
    "Публичная оферта Dior Host: условия обслуживания для bulletproof VPS, VDS, выделенных серверов, IPHM и доменов. Офшорные хостинг-услуги, цены, условия оплаты, ограничения ответственности и соглашения об обслуживании.",
  keywords: [
    "публичная оферта",
    "условия обслуживания",
    "условия bulletproof хостинга",
    "офшорное хостинг-соглашение",
    "условия VPS",
    "соглашение VDS",
    "условия выделенных серверов",
    "хостинг-контракт"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Публичная оферта Dior Host",
  "description": "Условия обслуживания для bulletproof хостинг-услуг",
  "provider": {
    "@type": "Organization",
    "name": "Dior Host",
    "url": PRIMARY_ORIGIN
  },
  "areaServed": ["Netherlands", "Germany", "Romania", "Moldova"],
  "serviceType": "Hosting Services"
};

export default function PublicOfferPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout
        title="Публичная оферта"
        description="Условия обслуживания для bulletproof хостинг-услуг"
      >
        <section id="general-provisions" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            1. Общие положения
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Публичная оферта (далее — «Соглашение») является официальным и юридически обязывающим договором между Dior Host (далее — «Провайдер», «мы», «нас») и любым физическим или юридическим лицом (далее — «Клиент», «вы», «заказчик»), принимающим условия данного Соглашения посредством использования наших услуг.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            Получая доступ к услугам, регистрируясь или иным образом используя любые сервисы Dior Host, вы подтверждаете, что ознакомлены с условиями Соглашения, понимаете их и соглашаетесь соблюдать. В случае несогласия с условиями, вы не имеете права использовать услуги Провайдера.
          </p>
          <p className="text-white/80 leading-relaxed">
            Соглашение вступает в силу с момента его принятия и действует до момента расторжения любой из сторон в порядке, предусмотренном настоящим документом.
          </p>
        </section>

        <section id="definitions" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            2. Термины и определения
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.1. Услуга</h3>
              <p className="text-white/80 leading-relaxed">
                Любая хостинговая, инфраструктурная или связанная услуга, предоставляемая Dior Host, включая, но не ограничиваясь: VPS, VDS, выделенные серверы, услуги IPHM, регистрация доменов, веб-хостинг, VPN и CDN.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.2. Клиент</h3>
              <p className="text-white/80 leading-relaxed">
                Любое физическое или юридическое лицо, которое зарегистрировало аккаунт и использует услуги Dior Host.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.3. Аккаунт</h3>
              <p className="text-white/80 leading-relaxed">
                Зарегистрированный пользовательский аккаунт в биллинговой системе Dior Host, связанный с уникальным адресом электронной почты и способом оплаты.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.4. Жалоба</h3>
              <p className="text-white/80 leading-relaxed">
                Любая деятельность, нарушающая применимые законы, это Соглашение или политику жалоб Dior Host, включая, но не ограничиваясь: спам, распространение вредоносного ПО, фишинг и нарушение авторских прав.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.5. Аптайм</h3>
              <p className="text-white/80 leading-relaxed">
                Процент времени в течение расчетного периода, в течение которого услуга доступна и работает, исключая плановое обслуживание и форс-мажорные события.
              </p>
            </div>
          </div>
        </section>

        <section id="subject" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            3. Предмет соглашения
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Dior Host предоставляет услуги инфраструктурного хостинга на условиях "как есть". Провайдер обязуется предоставлять услуги в соответствии со спецификациями, выбранными Клиентом, и условиями, изложенными в этом Соглашении.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            Клиент обязуется использовать услуги в соответствии со всеми применимыми законами, этим Соглашением и политикой Dior Host, включая, но не ограничиваясь нашим <Link href="/ru/abuse-flow" className="text-blue-300 hover:text-white underline">Процессом обработки жалоб</Link> и <Link href="/ru/dmca-policy" className="text-blue-300 hover:text-white underline">Политикой DMCA</Link>.
          </p>
        </section>

        <section id="services" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            4. Услуги
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">4.1. Виртуальные частные серверы (VPS/VDS)</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Dior Host предоставляет виртуализированные серверные экземпляры с выделенными CPU, RAM, хранилищем и сетевыми ресурсами. Услуги включают:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Bulletproof VDS с политикой устойчивости к жалобам</li>
                <li>TurboNet виртуальные серверы с улучшенной производительностью сети</li>
                <li>Стандартные виртуальные серверы со стандартным SLA</li>
                <li>Мгновенное развёртывание и автоматизированные резервные копии</li>
                <li>Полный root-доступ и выбор ОС</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">4.2. Выделенные серверы</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Физическое серверное оборудование, выделенное одному клиенту, включая:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Bulletproof выделенные серверы с обработкой, устойчивой к жалобам</li>
                <li>Выделенные серверы с IPHM (Управление историей IP)</li>
                <li>Стандартные выделенные серверы</li>
                <li>Замена оборудования в рамках временных рамок SLA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">4.3. Регистрация доменов</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Услуги регистрации и управления доменными именами для различных TLD, включая bulletproof домены с политикой устойчивости к жалобам.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">4.4. Офшорный веб-хостинг</h3>
              <p className="text-white/80 leading-relaxed">
                Общие и управляемые хостинг-услуги с гибкой политикой обработки жалоб, подходящие для высокорисковых рабочих нагрузок. Услуга находится в процессе разработки.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            5. Ценообразование и условия оплаты
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.1. Плата за услуги</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Плата за услуги отображается на нашем веб-сайте и может быть обновлена в любое время. Цены указаны в USD, если не указано иное.
              </p>
              <p className="text-white/80 leading-relaxed">
                Клиент обязуется оплачивать все сборы, связанные с выбранными услугами, заранее за каждый расчетный период (ежемесячно, ежеквартально или ежегодно).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.2. Способы оплаты</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Dior Host принимает следующие способы оплаты:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Криптовалюта (Bitcoin, Ethereum, USDT)</li>
                <li>Кредитные и дебетовые карты</li>
                <li>Банковские переводы</li>
                <li>Другие способы оплаты, указанные на нашем веб-сайте</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.3. Биллинговый цикл</h3>
              <p className="text-white/80 leading-relaxed">
                Услуги оплачиваются на регулярной основе в соответствии с выбранным биллинговым циклом. Клиент несет ответственность за обеспечение достаточных средств для автоматического продления.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.4. Возвраты</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Политика возврата варьируется в зависимости от типа услуги:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>VPS/VDS: Возврат доступен в течение 7 дней с момента первоначальной покупки, если услуга не использовалась</li>
                <li>Выделенные серверы: Возврат не производится после активации услуги</li>
                <li>Регистрация доменов: Возврат не производится (домены регистрируются немедленно)</li>
                <li>Расторжения, связанные с жалобами: Возврат не производится</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="rights-obligations" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            6. Права и обязанности сторон
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">6.1. Права Провайдера</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Приостанавливать или расторгать услуги в случае жалоб, неуплаты или нарушения этого Соглашения</li>
                <li>Изменять спецификации услуг, цены или условия с уведомлением за 30 дней</li>
                <li>Выполнять плановое обслуживание с предварительным уведомлением за 48 часов</li>
                <li>Проверять и расследовать жалобы в соответствии с нашим <Link href="/ru/abuse-flow" className="text-blue-300 hover:text-white underline">Процессом обработки жалоб</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">6.2. Обязанности Провайдера</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Предоставлять услуги в соответствии с выбранными спецификациями и <Link href="/ru/sla" className="text-blue-300 hover:text-white underline">обязательствами SLA</Link></li>
                <li>Поддерживать 99.9% аптайм серверов и 99.95% доступность сети (согласно SLA)</li>
                <li>Предоставлять поддержку NOC 24/7 с временем ответа, указанным в SLA</li>
                <li>Защищать данные клиента в соответствии с нашей <Link href="/ru/privacy-policy" className="text-blue-300 hover:text-white underline">Политикой конфиденциальности</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">6.3. Права Клиента</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Использовать услуги в соответствии с этим Соглашением и применимыми законами</li>
                <li>Получать кредиты на услуги, указанные в SLA, за простои, превышающие гарантии</li>
                <li>Запрашивать расторжение аккаунта и экспорт данных (с учетом политики хранения данных)</li>
                <li>Обжаловать решения по жалобам через нашу систему тикетов</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">6.4. Обязанности Клиента</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Своевременно оплачивать все сборы и поддерживать актуальную платежную информацию</li>
                <li>Соблюдать все применимые законы и правила</li>
                <li>Не заниматься запрещенной деятельностью, изложенной в нашем <Link href="/ru/user-agreement" className="text-blue-300 hover:text-white underline">Пользовательском соглашении</Link></li>
                <li>Поддерживать безопасность аккаунта и немедленно уведомлять нас о несанкционированном доступе</li>
                <li>Отвечать на уведомления о жалобах в указанные сроки</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="liability" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            7. Ограничение ответственности
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              Ответственность Dior Host ограничена суммой, уплаченной Клиентом за затронутую услугу в течение расчетного периода, в котором произошел инцидент.
            </p>
            <p className="text-white/80 leading-relaxed">
              Провайдер не несет ответственности за:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Потерю данных в результате действий клиента, стороннего программного обеспечения или форс-мажорных событий</li>
              <li>Перебои в обслуживании из-за DDoS-атак, превышающих нашу способность фильтрации</li>
              <li>Убытки в результате приостановок или расторжений, связанных с жалобами</li>
              <li>Косвенный, последующий или случайный ущерб</li>
              <li>Убытки в результате планового обслуживания с надлежащим уведомлением</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              Клиент несет единоличную ответственность за резервное копирование своих данных и поддержание адекватных мер безопасности.
            </p>
          </div>
        </section>

        <section id="force-majeure" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            8. Форс-мажор
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Ни одна из сторон не несет ответственности за невыполнение обязательств по этому Соглашению из-за форс-мажорных событий, включая, но не ограничиваясь:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
            <li>Стихийные бедствия, землетрясения, наводнения, пожары</li>
            <li>Война, терроризм, гражданские беспорядки</li>
            <li>Действия правительства, изменения в регулировании или судебные приказы</li>
            <li>Сбои интернет-инфраструктуры или крупные отключения ISP</li>
            <li>Кибератаки, превышающие разумные возможности смягчения</li>
          </ul>
          <p className="text-white/80 leading-relaxed">
            Затронутая сторона должна уведомить другую сторону в течение 48 часов после форс-мажорного события и приложить разумные усилия для возобновления выполнения.
          </p>
        </section>

        <section id="contract-formation" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            9. Заключение договора
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Это Соглашение заключается, когда Клиент:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-white/80 ml-4 mb-4">
            <li>Регистрирует аккаунт на веб-сайте Dior Host</li>
            <li>Выбирает и заказывает услугу</li>
            <li>Завершает оплату выбранной услуги</li>
            <li>Получает подтверждение активации услуги</li>
          </ol>
          <p className="text-white/80 leading-relaxed">
            Выполняя эти шаги, Клиент принимает все условия и положения этой Публичной оферты без оговорок.
          </p>
        </section>

        <section id="termination" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            10. Расторжение
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">10.1. Расторжение по инициативе Клиента</h3>
              <p className="text-white/80 leading-relaxed">
                Клиент может расторгнуть услуги в любое время, отменив автоматическое продление в своем аккаунте или подав запрос на расторжение. Услуги остаются активными до конца текущего расчетного периода.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">10.2. Расторжение по инициативе Провайдера</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Dior Host может немедленно расторгнуть услуги в случае:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Неуплаты, превышающей 7 дней после срока платежа</li>
                <li>Нарушения политики жалоб или запрещенной деятельности</li>
                <li>Нарушения этого Соглашения или применимых законов</li>
                <li>Судебных приказов, требующих расторжения услуги</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">10.3. Хранение данных</h3>
              <p className="text-white/80 leading-relaxed">
                После расторжения данные клиента хранятся в течение 30 дней. Клиент несет ответственность за экспорт своих данных до расторжения. Через 30 дней все данные удаляются навсегда.
              </p>
            </div>
          </div>
        </section>

        <section id="contacts" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            11. Контактная информация
          </h2>
          <div className="bg-black/30 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Dior Host</h3>
            <div className="space-y-2 text-white/80">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@dior.host" className="text-blue-300 hover:text-white">
                  support@dior.host
                </a>
              </p>
              <p>
                <strong>Жалобы:</strong>{" "}
                <a href="mailto:abuse@dior.host" className="text-blue-300 hover:text-white">
                  abuse@dior.host
                </a>
              </p>
              <p>
                <strong>Уведомления DMCA:</strong>{" "}
                <a href="mailto:support@dior.host" className="text-blue-300 hover:text-white">
                  support@dior.host
                </a>
              </p>
              <p>
                <strong>Веб-сайт:</strong>{" "}
                <a href="https://dior.host" className="text-blue-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                  https://dior.host
                </a>
              </p>
            </div>
          </div>
        </section>

        <section id="related-pages" className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Связанные документы</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/ru/privacy-policy"
              className="text-blue-300 hover:text-white underline"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/ru/user-agreement"
              className="text-blue-300 hover:text-white underline"
            >
              Пользовательское соглашение
            </Link>
            <Link
              href="/ru/sla"
              className="text-blue-300 hover:text-white underline"
            >
              Соглашение об уровне обслуживания (SLA)
            </Link>
            <Link
              href="/ru/abuse-flow"
              className="text-blue-300 hover:text-white underline"
            >
              Процесс обработки жалоб
            </Link>
            <Link
              href="/ru/dmca-policy"
              className="text-blue-300 hover:text-white underline"
            >
              Политика DMCA
            </Link>
          </div>
        </section>
      </LegalLayout>
    </>
  );
}


