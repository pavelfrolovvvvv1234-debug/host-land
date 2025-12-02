import type { Metadata } from "next";
import { LegalLayout } from "../../../components/LegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Процесс обработки жалоб - Abuse Flow | Политика обработки жалоб Dior Host",
  description:
    "Процесс обработки жалоб Dior Host: как мы обрабатываем жалобы на злоупотребления, DMCA, спам, фишинг. Рабочий процесс: получение жалобы → внутренняя проверка → проверка юрисдикции → путь действий (игнорировать/уведомить/эскалация клиента) → окончательное решение. Окно медиации 7-14 дней.",
  keywords: [
    "процесс обработки жалоб",
    "abuse flow",
    "политика жалоб",
    "обработка жалоб на злоупотребления",
    "dmca обработка",
    "политика жалоб хостинга",
    "процесс медиации жалоб",
    "обработка жалоб на спам"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Процесс обработки жалоб Dior Host",
  "description": "Процесс обработки жалоб на злоупотребления и DMCA",
  "publisher": {
    "@type": "Organization",
    "name": "Dior Host",
    "url": "https://dior.host"
  }
};

export default function AbuseFlowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout
        title="Процесс обработки жалоб"
        description="Как мы обрабатываем жалобы на злоупотребления, DMCA и другие нарушения"
      >
        <section id="what-is-abuse" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            1. Что такое жалоба на злоупотребление?
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Жалоба на злоупотребление — это уведомление от третьей стороны о том, что услуга, размещенная на нашей инфраструктуре, нарушает применимые законы, нарушает права интеллектуальной собственности или нарушает нашу <Link href="/ru/user-agreement" className="text-blue-300 hover:text-white underline">Политику допустимого использования</Link>.
          </p>
          <p className="text-white/80 leading-relaxed">
            Мы получаем жалобы через email на <a href="mailto:abuse@dior.host" className="text-blue-300 hover:text-white underline">abuse@dior.host</a>, через формы на нашем сайте, через системы тикетов и иногда через юридические каналы (судебные приказы, запросы правоохранительных органов).
          </p>
        </section>

        <section id="types-of-reports" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            2. Типы жалоб
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.1. DMCA / Нарушение авторских прав</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Уведомления о нарушении авторских прав (DMCA, EU Copyright Directive):
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Обрабатываются согласно нашей <Link href="/ru/dmca-policy" className="text-blue-300 hover:text-white underline">Политике DMCA</Link></li>
                <li>Проходят ручную проверку на валидность</li>
                <li>Клиент уведомляется приватно с окном ответа 7-14 дней</li>
                <li>Встречные уведомления принимаются и пересылаются</li>
                <li>По умолчанию мы работаем с политикой игнорирования DMCA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.2. Спам / Нежелательная рассылка</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Жалобы на спам или нежелательную email-рассылку:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Требуют доказательств (полные заголовки email, IP-адреса, временные метки)</li>
                <li>Проверяются на соответствие CAN-SPAM, GDPR и применимым законам</li>
                <li>Клиент уведомляется с требованием прекратить или исправить</li>
                <li>Повторные жалобы могут привести к приостановке</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.3. Фишинг / Мошенничество</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Жалобы на фишинг, мошеннические сайты или кражи учетных данных:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Обрабатываются с нулевой толерантностью</li>
                <li>Приводят к немедленной приостановке без окна медиации</li>
                <li>Требуют доказательств (скриншоты, URL, логи)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.4. Вредоносное ПО / Ботнеты</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Жалобы на распространение вредоносного ПО, ботнеты или C&C серверы:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Обрабатываются с нулевой толерантностью</li>
                <li>Приводят к немедленной приостановке</li>
                <li>Требуют технических доказательств (логи, сетевые трассировки, образцы вредоносного ПО)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.5. Сетевые злоупотребления</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Жалобы на DDoS-атаки, сканирование портов, сетевые флуды:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Требуют доказательств (логи маршрутизаторов, трассировки, временные метки)</li>
                <li>Клиент уведомляется с требованием прекратить</li>
                <li>Повторные жалобы могут привести к приостановке</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.6. Другие нарушения</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Другие типы жалоб (клевета, преследование, незаконный контент):
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Оцениваются в индивидуальном порядке</li>
                <li>Проверяются на соответствие применимым законам</li>
                <li>Клиент уведомляется с окном ответа</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="internal-workflow" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            3. Внутренний рабочий процесс обработки
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3.1. Получение жалобы</h3>
              <ol className="list-decimal list-inside space-y-2 text-white/80 ml-4">
                <li>Жалоба получена через email, форму или систему тикетов</li>
                <li>Жалоба регистрируется в нашей системе отслеживания жалоб</li>
                <li>Автоматическое уведомление отправляется команде NOC</li>
                <li>Жалоба назначается инженеру для первоначальной проверки</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3.2. Внутренняя проверка</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Инженер NOC проверяет:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Валидность жалобы (формат, наличие доказательств, соответствие требованиям)</li>
                <li>Идентификацию затронутой услуги (IP-адрес, домен, аккаунт)</li>
                <li>Историю жалоб для этого клиента или услуги</li>
                <li>Тип нарушения (нулевая толерантность vs. стандартный процесс)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3.3. Проверка юрисдикции</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Мы проверяем:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Юрисдикцию жалобщика</li>
                <li>Юрисдикцию размещения услуги</li>
                <li>Применимые законы и требования соответствия</li>
                <li>Наличие судебных приказов или запросов правоохранительных органов</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3.4. Определение пути действий</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                На основе проверки определяется путь действий:
              </p>
              <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-3">
                <div>
                  <h4 className="font-semibold text-white mb-1">Игнорировать</h4>
                  <p className="text-sm text-white/80">
                    Жалоба недействительна, недостаточно доказательств, или не соответствует нашим политикам. Жалоба архивируется без дальнейших действий.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Уведомить клиента</h4>
                  <p className="text-sm text-white/80">
                    Жалоба валидна, но не требует немедленной приостановки. Клиент уведомляется с окном ответа 7-14 дней для исправления или ответа.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Эскалация клиента</h4>
                  <p className="text-sm text-white/80">
                    Жалоба валидна и требует немедленного внимания. Клиент уведомляется с сокращенным окном ответа (24-48 часов) или немедленной приостановкой для нулевой толерантности.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Немедленная приостановка</h4>
                  <p className="text-sm text-white/80">
                    Для нарушений с нулевой толерантностью (фишинг, вредоносное ПО, материалы о жестоком обращении с детьми) услуга приостанавливается немедленно без окна медиации.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="escalation-levels" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            4. Уровни эскалации
          </h2>
          <div className="bg-black/30 border border-white/10 rounded-lg p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-semibold">Уровень</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Действие</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Окно ответа</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Следующий шаг</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Уровень 1: Уведомление</td>
                  <td className="py-3 px-4">Email клиенту с деталями жалобы</td>
                  <td className="py-3 px-4">7-14 дней</td>
                  <td className="py-3 px-4">Ожидание ответа или исправления</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Уровень 2: Предупреждение</td>
                  <td className="py-3 px-4">Повторное уведомление с предупреждением о приостановке</td>
                  <td className="py-3 px-4">3-7 дней</td>
                  <td className="py-3 px-4">Если не решено → Уровень 3</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Уровень 3: Приостановка</td>
                  <td className="py-3 px-4">Услуга приостанавливается, доступ только для чтения</td>
                  <td className="py-3 px-4">7 дней</td>
                  <td className="py-3 px-4">Если не решено → Уровень 4</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Уровень 4: Расторжение</td>
                  <td className="py-3 px-4">Услуга расторгается, данные удаляются через 30 дней</td>
                  <td className="py-3 px-4">Нет</td>
                  <td className="py-3 px-4">Окончательное решение</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="possible-outcomes" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            5. Возможные исходы
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.1. Игнорировать</h3>
              <p className="text-white/80 leading-relaxed">
                Жалоба недействительна, недостаточно доказательств, или не соответствует нашим политикам. Жалоба архивируется, клиент не уведомляется, услуга продолжает работать нормально.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.2. Решить</h3>
              <p className="text-white/80 leading-relaxed">
                Клиент исправляет проблему в течение окна ответа. Жалоба разрешена, услуга продолжает работать, жалоба архивируется как решенная.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.3. Расследовать</h3>
              <p className="text-white/80 leading-relaxed">
                Жалоба требует дополнительного расследования. Мы запрашиваем дополнительную информацию у жалобщика или клиента, проводим технический анализ, и принимаем решение на основе результатов расследования.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.4. Приостановить</h3>
              <p className="text-white/80 leading-relaxed">
                Услуга приостанавливается из-за нерешенной жалобы или нарушения с нулевой толерантностью. Клиент может запросить восстановление после исправления проблемы.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.5. Расторгнуть</h3>
              <p className="text-white/80 leading-relaxed">
                Услуга расторгается из-за повторных нарушений, нерешенных жалоб или нарушений с нулевой толерантностью. Данные удаляются через 30 дней, возврат не предоставляется.
              </p>
            </div>
          </div>
        </section>

        <section id="customer-responsibilities" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            6. Обязанности клиента
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Когда вы получаете уведомление о жалобе, вы обязаны:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li><strong>Ответить своевременно:</strong> Ответьте в течение указанного окна ответа (обычно 7-14 дней)</li>
              <li><strong>Предоставить информацию:</strong> Предоставьте любую запрошенную информацию или доказательства</li>
              <li><strong>Исправить проблему:</strong> Если жалоба валидна, немедленно исправьте проблему (удалите контент, прекратите деятельность, обновите конфигурацию)</li>
              <li><strong>Предотвратить повторение:</strong> Примите меры для предотвращения повторения проблемы</li>
              <li><strong>Сотрудничать:</strong> Сотрудничайте с нашей командой NOC в процессе медиации</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              Неспособность ответить или исправить проблему в течение окна ответа может привести к приостановке или расторжению услуги.
            </p>
          </div>
        </section>

        <section id="abuse-evidence-format" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            7. Формат доказательств жалобы
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Для эффективной обработки жалоб мы требуем следующую информацию:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-white">Обязательная информация:</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li><strong>URL или IP-адрес:</strong> Точный URL или IP-адрес затронутой услуги</li>
                <li><strong>Временные метки:</strong> Дата и время инцидента (временная зона UTC)</li>
                <li><strong>Тип нарушения:</strong> Четкое описание типа нарушения (DMCA, спам, фишинг и т. д.)</li>
                <li><strong>Доказательства:</strong> Скриншоты, логи, полные заголовки email, сетевые трассировки, образцы вредоносного ПО</li>
                <li><strong>Контактная информация:</strong> Имя, email, телефон жалобщика</li>
              </ul>
            </div>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 mt-4">
              <h3 className="font-semibold mb-3 text-white">Пример формата жалобы:</h3>
              <pre className="text-sm text-white/80 bg-black/50 p-4 rounded overflow-x-auto">
{`От: abuse@example.com
К: abuse@dior.host
Тема: Жалоба на спам - IP 1.2.3.4

Тип нарушения: Спам / Нежелательная рассылка
IP-адрес: 1.2.3.4
Домен: example.com
Дата/время: 2024-01-15 14:30 UTC

Доказательства:
- Полные заголовки email (приложены)
- Логи SMTP сервера (приложены)
- Скриншоты (приложены)

Контактная информация:
Имя: John Doe
Email: abuse@example.com
Телефон: +1-555-123-4567`}
              </pre>
            </div>
          </div>
        </section>

        <section id="dmca-exceptions" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            8. Исключения DMCA
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Для жалоб DMCA мы применяем специальный процесс, описанный в нашей <Link href="/ru/dmca-policy" className="text-blue-300 hover:text-white underline">Политике DMCA</Link>:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
            <li>Все уведомления DMCA проходят ручную проверку на валидность</li>
            <li>Клиент уведомляется приватно с окном ответа 7-14 дней</li>
            <li>Встречные уведомления принимаются и пересылаются жалобщикам</li>
            <li>Мы работаем с политикой игнорирования DMCA по умолчанию</li>
            <li>Мы соблюдаем действительные судебные приказы из наших юрисдикций работы</li>
          </ul>
        </section>

        <section id="flow-chart" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            9. Схема процесса (текстовая)
          </h2>
          <div className="bg-black/30 border border-white/10 rounded-lg p-6">
            <div className="space-y-4 font-mono text-sm text-white/80">
              <div>
                <p className="text-blue-400 font-semibold">1. Жалоба получена</p>
                <p className="ml-4">↓</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold">2. Внутренняя проверка</p>
                <p className="ml-4">↓</p>
                <p className="ml-8">• Валидность жалобы</p>
                <p className="ml-8">• Идентификация услуги</p>
                <p className="ml-8">• Тип нарушения</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold">3. Проверка юрисдикции</p>
                <p className="ml-4">↓</p>
                <p className="ml-8">• Юрисдикция жалобщика</p>
                <p className="ml-8">• Юрисдикция размещения</p>
                <p className="ml-8">• Применимые законы</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold">4. Путь действий</p>
                <p className="ml-4">↓</p>
                <div className="ml-8 space-y-2">
                  <p>• Игнорировать → Архивировать</p>
                  <p>• Уведомить → Email клиенту (7-14 дней)</p>
                  <p>• Эскалация → Email клиенту (24-48 часов)</p>
                  <p>• Немедленная приостановка → Приостановить услугу</p>
                </div>
              </div>
              <div>
                <p className="text-blue-400 font-semibold">5. Ожидание ответа клиента</p>
                <p className="ml-4">↓</p>
                <div className="ml-8 space-y-2">
                  <p>• Проблема решена → Разрешить жалобу</p>
                  <p>• Проблема не решена → Эскалировать (приостановка)</p>
                  <p>• Нет ответа → Эскалировать (приостановка)</p>
                </div>
              </div>
              <div>
                <p className="text-blue-400 font-semibold">6. Окончательное решение</p>
                <p className="ml-4">↓</p>
                <div className="ml-8 space-y-2">
                  <p>• Игнорировать → Архивировать</p>
                  <p>• Решить → Разрешить жалобу</p>
                  <p>• Приостановить → Приостановить услугу</p>
                  <p>• Расторгнуть → Расторгнуть услугу</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reporting-abuse" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            10. Сообщение о жалобе
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Чтобы сообщить о жалобе, отправьте email на <a href="mailto:abuse@dior.host" className="text-blue-300 hover:text-white underline">abuse@dior.host</a> с:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
            <li>Точным URL или IP-адресом затронутой услуги</li>
            <li>Датой и временем инцидента</li>
            <li>Типом нарушения</li>
            <li>Доказательствами (скриншоты, логи, заголовки email)</li>
            <li>Вашей контактной информацией</li>
          </ul>
          <p className="text-white/80 leading-relaxed mt-4">
            Мы обрабатываем жалобы в течение 24-48 часов в рабочие дни. Критические жалобы (фишинг, вредоносное ПО) обрабатываются в течение 1-4 часов.
          </p>
        </section>

        <section id="related-pages" className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Связанные документы</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/ru/user-agreement"
              className="text-blue-300 hover:text-white underline"
            >
              Пользовательское соглашение
            </Link>
            <Link
              href="/ru/dmca-policy"
              className="text-blue-300 hover:text-white underline"
            >
              Политика DMCA
            </Link>
            <Link
              href="/ru/public-offer"
              className="text-blue-300 hover:text-white underline"
            >
              Публичная оферта
            </Link>
          </div>
        </section>
      </LegalLayout>
    </>
  );
}


