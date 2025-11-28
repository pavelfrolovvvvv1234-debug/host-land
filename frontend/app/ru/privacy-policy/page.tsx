import type { Metadata } from "next";
import { LegalLayout } from "../../../components/LegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика конфиденциальности - Защита данных и соответствие GDPR | Dior Host",
  description:
    "Политика конфиденциальности Dior Host: сбор данных, cookies, телеметрия, логи, хранение данных, соответствие GDPR/EEA, права пользователей, сторонние сервисы. Узнайте, как мы защищаем вашу конфиденциальность и обрабатываем персональные данные.",
  keywords: [
    "политика конфиденциальности",
    "защита данных",
    "соответствие GDPR",
    "политика cookies",
    "хранение данных",
    "права на конфиденциальность",
    "удаление данных",
    "конфиденциальность хостинга"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PrivacyPolicy",
  "name": "Политика конфиденциальности Dior Host",
  "description": "Политика конфиденциальности и практики защиты данных",
  "publisher": {
    "@type": "Organization",
    "name": "Dior Host",
    "url": "https://dior.host"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout
        title="Политика конфиденциальности"
        description="Как мы собираем, используем и защищаем ваши персональные данные"
      >
        <section id="scope" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            1. Область применения
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Настоящая Политика конфиденциальности ("Политика") описывает, как Dior Host ("мы", "нас", "наш") собирает, использует, хранит и защищает персональные данные при использовании вами наших услуг, включая VPS, VDS, выделенные серверы, регистрацию доменов и веб-хостинг.
          </p>
          <p className="text-white/80 leading-relaxed">
            Используя услуги Dior Host, вы соглашаетесь с практиками обработки данных, описанными в этой Политике. Если вы не согласны с этими практиками, вы не должны использовать наши услуги.
          </p>
        </section>

        <section id="data-collection" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            2. Какие данные мы собираем
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.1. Информация об аккаунте</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                При регистрации аккаунта мы собираем:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Адрес электронной почты (необходим для управления аккаунтом и уведомлений)</li>
                <li>Платежную информацию (обрабатывается сторонними платежными процессорами)</li>
                <li>Почтовый адрес (если предоставлен для целей выставления счетов)</li>
                <li>Настройки аккаунта и конфигурации услуг</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.2. Данные об использовании услуг</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Мы автоматически собираем технические данные, связанные с использованием услуг:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>IP-адреса, назначенные вашим услугам</li>
                <li>Использование ресурсов сервера (CPU, RAM, пропускная способность, хранилище)</li>
                <li>Метрики аптайма и доступности услуг</li>
                <li>Логи подключений и метаданные сетевого трафика</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.3. Данные коммуникаций</h3>
              <p className="text-white/80 leading-relaxed">
                Мы сохраняем записи коммуникаций, включая тикеты поддержки, жалобы и переписку по электронной почте, для качества услуг и соответствия требованиям.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.4. Данные об использовании веб-сайта</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                При посещении нашего веб-сайта мы собираем:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Тип и версию браузера</li>
                <li>Информацию об устройстве и разрешении экрана</li>
                <li>Посещенные страницы и время, проведенное на страницах</li>
                <li>URL-адреса рефереров и поисковые запросы</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="cookies-telemetry" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            3. Cookies и телеметрия
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">3.1. Cookies</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Мы используем cookies и аналогичные технологии для:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li><strong>Необходимые cookies:</strong> Управление сессиями, аутентификация и безопасность (необходимы для функциональности услуг)</li>
                <li><strong>Аналитические cookies:</strong> Статистика использования веб-сайта и мониторинг производительности (опционально, могут быть отключены)</li>
                <li><strong>Cookies предпочтений:</strong> Настройки языка и предпочтения пользовательского интерфейса</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                Вы можете управлять настройками cookies через настройки вашего браузера. Отключение необходимых cookies может повлиять на функциональность услуг.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">3.2. Телеметрия</h3>
              <p className="text-white/80 leading-relaxed">
                Мы собираем анонимные телеметрические данные для улучшения услуг, включая частоту ошибок, метрики производительности и использование функций. Эти данные агрегируются и не могут быть использованы для идентификации отдельных пользователей.
              </p>
            </div>
          </div>
        </section>

        <section id="logs-security" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            4. Логи и безопасность
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">4.1. Системные логи</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Мы ведем системные логи для целей безопасности и устранения неполадок, включая:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Попытки аутентификации и события входа</li>
                <li>Административные действия и изменения конфигурации</li>
                <li>Попытки сетевых подключений и события файрвола</li>
                <li>Логи ошибок и системная диагностика</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                Логи хранятся в течение 90 дней, если не требуются для расследований безопасности или соответствия правовым требованиям.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">4.2. Мониторинг безопасности</h3>
              <p className="text-white/80 leading-relaxed">
                Мы отслеживаем сетевой трафик и активность системы для обнаружения и предотвращения угроз безопасности, включая DDoS-атаки, попытки несанкционированного доступа и жалобы. Этот мониторинг автоматизирован и не включает ручной просмотр контента, если не обнаружен инцидент безопасности.
              </p>
            </div>
          </div>
        </section>

        <section id="data-retention" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            5. Хранение данных
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Мы храним персональные данные только в течение времени, необходимого для предоставления услуг и соблюдения правовых обязательств:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 px-4 text-white font-semibold">Тип данных</th>
                    <th className="text-left py-2 px-4 text-white font-semibold">Срок хранения</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Информация об аккаунте</td>
                    <td className="py-2 px-4">До удаления аккаунта + 30 дней</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Логи использования услуг</td>
                    <td className="py-2 px-4">90 дней</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Тикеты поддержки</td>
                    <td className="py-2 px-4">3 года</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Биллинговые записи</td>
                    <td className="py-2 px-4">7 лет (правовое требование)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Жалобы</td>
                    <td className="py-2 px-4">5 лет</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="data-deletion" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            6. Удаление данных
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Вы имеете право запросить удаление ваших персональных данных, с учетом правовых и операционных требований:
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">6.1. Удаление аккаунта</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Вы можете запросить удаление аккаунта в любое время. При удалении:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Все услуги расторгаются, и данные удаляются навсегда</li>
                <li>Информация об аккаунте удаляется из активных систем в течение 30 дней</li>
                <li>Биллинговые записи хранятся в течение 7 лет, как требуется по закону</li>
                <li>Жалобы и логи безопасности могут храниться для целей соответствия</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">6.2. Экспорт данных</h3>
              <p className="text-white/80 leading-relaxed">
                Перед удалением аккаунта вы можете экспортировать свои данные, включая конфигурации услуг, тикеты поддержки и историю биллинга, в машиночитаемых форматах (JSON, CSV).
              </p>
            </div>
          </div>
        </section>

        <section id="third-party-services" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            7. Сторонние сервисы
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Мы используем сторонние сервисы, которые могут обрабатывать ваши данные:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-white mb-1">Cloudflare</h4>
                <p className="text-sm text-white/80">
                  CDN и защита от DDoS. Обрабатывает IP-адреса и метаданные сетевого трафика. См.{" "}
                  <a href="https://www.cloudflare.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white underline">
                    Политику конфиденциальности Cloudflare
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Платежные процессоры</h4>
                <p className="text-sm text-white/80">
                  Платежная информация обрабатывается сторонними платежными процессорами. Мы не храним полные номера кредитных карт или платежные учетные данные.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Регистраторы доменов</h4>
                <p className="text-sm text-white/80">
                  Данные регистрации доменов передаются аккредитованным ICANN регистраторам, как требуется для регистрации доменов.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gdpr-compliance" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            8. Соответствие GDPR/EEA
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Для пользователей в Европейской экономической зоне (EEA) мы соблюдаем Общий регламент по защите данных (GDPR):
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">8.1. Правовая основа</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Мы обрабатываем персональные данные на основе:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li><strong>Выполнение договора:</strong> Для предоставления хостинг-услуг, как согласовано</li>
                <li><strong>Правовое обязательство:</strong> Для соблюдения требований налогов, учета и отчетности о жалобах</li>
                <li><strong>Законные интересы:</strong> Для мониторинга безопасности, предотвращения мошенничества и улучшения услуг</li>
                <li><strong>Согласие:</strong> Для опциональной аналитики и маркетинговых коммуникаций</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">8.2. Передача данных</h3>
              <p className="text-white/80 leading-relaxed">
                Данные обрабатываются в пределах EEA (Нидерланды, Германия, Румыния). Передачи за пределы EEA ограничены сторонними сервисами с адекватными гарантиями (Стандартные договорные условия, адекватность Privacy Shield).
              </p>
            </div>
          </div>
        </section>

        <section id="user-rights" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            9. Права пользователей
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Вы имеете следующие права в отношении ваших персональных данных:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-white mb-1">Право на доступ</h4>
                <p className="text-sm text-white/80">
                  Запросить копию всех персональных данных, которые мы храним о вас.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Право на исправление</h4>
                <p className="text-sm text-white/80">
                  Исправить неточные или неполные персональные данные.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Право на удаление</h4>
                <p className="text-sm text-white/80">
                  Запросить удаление ваших персональных данных (с учетом правовых требований).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Право на ограничение обработки</h4>
                <p className="text-sm text-white/80">
                  Запросить ограничение обработки данных в определенных обстоятельствах.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Право на переносимость данных</h4>
                <p className="text-sm text-white/80">
                  Получить ваши данные в структурированном, машиночитаемом формате.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Право на возражение</h4>
                <p className="text-sm text-white/80">
                  Возразить против обработки на основе законных интересов.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Право на отзыв согласия</h4>
                <p className="text-sm text-white/80">
                  Отозвать согласие на опциональную обработку данных в любое время.
                </p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              Для осуществления этих прав свяжитесь с нами по адресу <a href="mailto:privacy@dior.host" className="text-blue-300 hover:text-white underline">privacy@dior.host</a>. Мы ответим в течение 30 дней.
            </p>
          </div>
        </section>

        <section id="privacy-inquiries" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            10. Контакты для запросов о конфиденциальности
          </h2>
          <div className="bg-black/30 border border-white/10 rounded-lg p-6">
            <p className="text-white/80 leading-relaxed mb-4">
              По вопросам конфиденциальности, запросам на доступ к данным или жалобам обращайтесь:
            </p>
            <div className="space-y-2 text-white/80">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@dior.host" className="text-blue-300 hover:text-white">
                  privacy@dior.host
                </a>
              </p>
              <p>
                <strong>Тема:</strong> Запрос о конфиденциальности / Запрос GDPR
              </p>
              <p className="text-sm text-white/70 mt-4">
                Для пользователей EEA вы также имеете право подать жалобу в местный орган по защите данных.
              </p>
            </div>
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
              href="/ru/sla"
              className="text-blue-300 hover:text-white underline"
            >
              Соглашение об уровне обслуживания
            </Link>
          </div>
        </section>
      </LegalLayout>
    </>
  );
}


