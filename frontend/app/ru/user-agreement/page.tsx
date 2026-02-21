import type { Metadata } from "next";
import { LegalLayout } from "../../../components/LegalLayout";
import Link from "next/link";
import { PRIMARY_ORIGIN } from "../../../lib/canonical";

export const metadata: Metadata = {
  title: "Пользовательское соглашение - Условия использования и Политика допустимого использования | Dior Host",
  description:
    "Пользовательское соглашение Dior Host: политика допустимого использования, запрещенная деятельность, правила жалоб, обработка DMCA, платежи, возвраты, безопасность аккаунта, расторжение, ответственность, применимое право для bulletproof хостинг-услуг.",
  keywords: [
    "пользовательское соглашение",
    "условия использования",
    "политика допустимого использования",
    "запрещенная деятельность",
    "условия хостинга",
    "политика жалоб",
    "безопасность аккаунта",
    "расторжение услуги"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Пользовательское соглашение Dior Host",
  "description": "Условия использования и политика допустимого использования",
  "publisher": {
    "@type": "Organization",
    "name": "Dior Host",
    "url": PRIMARY_ORIGIN
  }
};

export default function UserAgreementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout
        title="Пользовательское соглашение"
        description="Условия использования и политика допустимого использования для услуг Dior Host"
      >
        <section id="acceptance" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            1. Принятие условий
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Получая доступ, регистрируясь или используя любую услугу, предоставляемую Dior Host, вы ("Пользователь", "вы", "ваш") соглашаетесь быть связанными этим Пользовательским соглашением ("Соглашение") и всеми применимыми законами и правилами.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            Если вы не согласны с какой-либо частью этого Соглашения, вы должны немедленно прекратить использование наших услуг и расторгнуть свой аккаунт.
          </p>
          <p className="text-white/80 leading-relaxed">
            Это Соглашение дополняет нашу <Link href="/ru/public-offer" className="text-blue-300 hover:text-white underline">Публичную оферту</Link> и <Link href="/ru/privacy-policy" className="text-blue-300 hover:text-white underline">Политику конфиденциальности</Link>. В случае конфликта это Соглашение имеет приоритет в вопросах допустимого использования.
          </p>
        </section>

        <section id="allowed-activities" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            2. Разрешенная деятельность
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Вы можете использовать услуги Dior Host для законных деловых и личных целей, включая:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
            <li>Веб-хостинг и доставка контента</li>
            <li>Хостинг приложений и API-сервисы</li>
            <li>Среды разработки и тестирования</li>
            <li>Исследования безопасности и тестирование на проникновение (с надлежащей авторизацией)</li>
            <li>Маркетинговые кампании и email-маркетинг (соответствующие CAN-SPAM, GDPR и применимым законам)</li>
            <li>Майнинг криптовалют (с учетом лимитов ресурсов и политики справедливого использования)</li>
            <li>Любая другая законная деятельность, которая не нарушает это Соглашение</li>
          </ul>
        </section>

        <section id="prohibited-activities" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            3. Запрещенная деятельность
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3.1. Контент с нулевой толерантностью</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Следующие виды деятельности строго запрещены и приведут к немедленному расторжению услуги без уведомления или возврата:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Материалы о жестоком обращении с детьми или контент эксплуатации</li>
                <li>Контент или деятельность, связанная с терроризмом</li>
                <li>Распространение вредоносного ПО, ботнеты или серверы управления и контроля</li>
                <li>Фишинговые веб-сайты или кража учетных данных</li>
                <li>Мошеннические финансовые схемы (Понци, пирамиды)</li>
                <li>Торговля людьми или незаконная торговля</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3.2. Сетевые злоупотребления</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Запрещенная сетевая деятельность включает:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>DDoS-атаки или сетевые флуды</li>
                <li>Сканирование портов или попытки несанкционированного доступа</li>
                <li>Спам или нежелательная массовая рассылка (если не соответствует CAN-SPAM и согласию получателя)</li>
                <li>IP-спуфинг или злоупотребление сетевыми протоколами</li>
                <li>Атаки на исчерпание ресурсов</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3.3. Нарушения контента</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Запрещенный контент включает:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Нарушение авторских прав (согласно <Link href="/ru/dmca-policy" className="text-blue-300 hover:text-white underline">Политике DMCA</Link>)</li>
                <li>Клевета, преследование или разжигание ненависти</li>
                <li>Незаконные азартные игры или нелицензированные финансовые услуги</li>
                <li>Контрафактные товары или нарушение товарных знаков</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3.4. Системные злоупотребления</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Запрещенная системная деятельность:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Попытки получить несанкционированный доступ к системам или аккаунтам</li>
                <li>Эксплуатация уязвимостей безопасности</li>
                <li>Вмешательство в услуги других пользователей</li>
                <li>Обход ограничений услуг или мер безопасности</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="abuse-rules" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            4. Правила жалоб
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Все жалобы обрабатываются в соответствии с нашим <Link href="/ru/abuse-flow" className="text-blue-300 hover:text-white underline">Процессом обработки жалоб</Link>:
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">4.1. Процесс уведомления о жалобах</h3>
              <ol className="list-decimal list-inside space-y-2 text-white/80 ml-4">
                <li>Жалоба получена и рассмотрена нашей командой NOC</li>
                <li>Вы уведомляетесь приватно с деталями и вариантами исправления</li>
                <li>У вас есть 7-14 дней для решения проблемы (окно медиации)</li>
                <li>Если не решено, услуга может быть приостановлена или расторгнута</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">4.2. Применение нулевой толерантности</h3>
              <p className="text-white/80 leading-relaxed">
                Контент с нулевой толерантностью (Раздел 3.1) приводит к немедленному расторжению без окна медиации. Все другие нарушения следуют стандартному процессу жалоб с уведомлением и периодом исправления.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">4.3. Сообщение о жалобах</h3>
              <p className="text-white/80 leading-relaxed">
                Для сообщения о жалобах отправьте email на <a href="mailto:abuse@dior.host" className="text-blue-300 hover:text-white underline">abuse@dior.host</a> с подробной информацией, URL, временными метками и доказательствами.
              </p>
            </div>
          </div>
        </section>

        <section id="dmca-handling" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            5. Обработка DMCA
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Претензии о нарушении авторских прав обрабатываются согласно нашей <Link href="/ru/dmca-policy" className="text-blue-300 hover:text-white underline">Политике DMCA</Link>:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
            <li>Мы работаем с политикой игнорирования DMCA по умолчанию</li>
            <li>Все уведомления DMCA проходят ручную проверку</li>
            <li>Вы получаете приватное уведомление с окном ответа 7-14 дней</li>
            <li>Встречные уведомления принимаются и пересылаются жалобщикам</li>
            <li>Мы соблюдаем действительные судебные приказы из наших юрисдикций работы</li>
          </ul>
        </section>

        <section id="payments-refunds" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            6. Платежи и возвраты
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">6.1. Условия оплаты</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Все услуги оплачиваются заранее за выбранный биллинговый цикл</li>
                <li>Автоматическое продление включено по умолчанию</li>
                <li>Вы несете ответственность за поддержание актуальной платежной информации</li>
                <li>Неудачные платежи приводят к приостановке услуги через 7 дней</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">6.2. Политика возврата</h3>
              <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 px-4 text-white font-semibold">Тип услуги</th>
                      <th className="text-left py-2 px-4 text-white font-semibold">Политика возврата</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/5">
                      <td className="py-2 px-4">VPS/VDS</td>
                      <td className="py-2 px-4">Гарантия возврата денег 7 дней (только неиспользованные услуги)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 px-4">Выделенные серверы</td>
                      <td className="py-2 px-4">Возврат не производится после активации услуги</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 px-4">Регистрация доменов</td>
                      <td className="py-2 px-4">Возврат не производится (домены регистрируются немедленно)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 px-4">Веб-хостинг</td>
                      <td className="py-2 px-4">Гарантия возврата денег 7 дней</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Расторжение, связанное с жалобами</td>
                      <td className="py-2 px-4">Возврат не производится</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">6.3. Чарджбеки</h3>
              <p className="text-white/80 leading-relaxed">
                Чарджбеки или споры по платежам приводят к немедленной приостановке аккаунта. Свяжитесь с поддержкой для решения платежных проблем перед инициированием чарджбеков.
              </p>
            </div>
          </div>
        </section>

        <section id="account-security" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            7. Безопасность аккаунта
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">7.1. Ваши обязанности</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Вы несете единоличную ответственность за:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Поддержание конфиденциальности учетных данных вашего аккаунта</li>
                <li>Использование надежных, уникальных паролей и включение двухфакторной аутентификации (2FA)</li>
                <li>Мониторинг вашего аккаунта на предмет несанкционированного доступа</li>
                <li>Немедленное уведомление нас о нарушениях безопасности или подозрительной активности</li>
                <li>Поддержание актуальности вашей контактной информации</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">7.2. Несанкционированный доступ</h3>
              <p className="text-white/80 leading-relaxed">
                Вы несете ответственность за всю деятельность, происходящую под вашим аккаунтом, независимо от того, авторизовали ли вы ее. Мы не несем ответственности за убытки, возникшие в результате скомпрометированных учетных данных аккаунта.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">7.3. Меры безопасности</h3>
              <p className="text-white/80 leading-relaxed">
                Мы применяем отраслевые стандартные меры безопасности, но вы также должны принимать разумные меры предосторожности для защиты вашего аккаунта и услуг.
              </p>
            </div>
          </div>
        </section>

        <section id="termination" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            8. Расторжение
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">8.1. Расторжение Пользователем</h3>
              <p className="text-white/80 leading-relaxed">
                Вы можете расторгнуть свой аккаунт в любое время, отменив автоматическое продление или подав запрос на расторжение. Услуги остаются активными до конца текущего биллингового периода.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">8.2. Расторжение Провайдером</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Мы можем немедленно расторгнуть ваш аккаунт за:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Нарушение запрещенной деятельности (Раздел 3)</li>
                <li>Неуплату, превышающую 7 дней</li>
                <li>Нарушение этого Соглашения или применимых законов</li>
                <li>Судебные приказы, требующие расторжения</li>
                <li>Мошенническую деятельность или чарджбеки</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">8.3. Последствия расторжения</h3>
              <p className="text-white/80 leading-relaxed">
                При расторжении все услуги немедленно приостанавливаются, и данные удаляются через 30 дней. Вы несете ответственность за экспорт ваших данных до расторжения. Возврат не предоставляется для расторгнутых аккаунтов.
              </p>
            </div>
          </div>
        </section>

        <section id="liability" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            9. Ответственность
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Наша ответственность ограничена следующим образом:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li><strong>Максимальная ответственность:</strong> Ограничена суммой, уплаченной за затронутую услугу в течение биллингового периода</li>
              <li><strong>Нет косвенного ущерба:</strong> Мы не несем ответственности за упущенную выгоду, потерю данных или последующий ущерб</li>
              <li><strong>Доступность услуг:</strong> Мы предоставляем услуги "как есть" с гарантиями аптайма, указанными в нашем <Link href="/ru/sla" className="text-blue-300 hover:text-white underline">SLA</Link></li>
              <li><strong>Сторонние сервисы:</strong> Мы не несем ответственности за проблемы со сторонними сервисами (Cloudflare, платежные процессоры, регистраторы доменов)</li>
              <li><strong>Контент клиента:</strong> Вы несете единоличную ответственность за ваш контент и данные</li>
            </ul>
          </div>
        </section>

        <section id="governing-law" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            10. Применимое право
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Это Соглашение регулируется законами Нидерландов, с юрисдикцией в судах Амстердама. Однако мы поддерживаем юридические лица в нескольких юрисдикциях:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <ul className="space-y-2 text-white/80">
                <li><strong>Нидерланды:</strong> Основная юрисдикция для споров и правовых вопросов</li>
                <li><strong>Германия:</strong> Альтернативная юрисдикция для вопросов соответствия ЕС</li>
                <li><strong>Румыния:</strong> Дополнительная юрисдикция для офшорной защиты</li>
              </ul>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              Для споров стороны соглашаются сначала попытаться разрешить через медиацию. Если медиация не удалась, споры должны быть разрешены в судах Амстердама, Нидерланды.
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
              href="/ru/privacy-policy"
              className="text-blue-300 hover:text-white underline"
            >
              Политика конфиденциальности
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


