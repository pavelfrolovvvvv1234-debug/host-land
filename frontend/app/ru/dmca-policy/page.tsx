import type { Metadata } from "next";
import { LegalLayout } from "../../../components/LegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMCA Policy - Политика обработки DMCA и игнорирования DMCA | Dior Host",
  description:
    "Политика DMCA Dior Host: как мы обрабатываем уведомления о нарушении авторских прав. Политика игнорирования DMCA по умолчанию, ручная проверка всех уведомлений, окно ответа 7-14 дней, встречные уведомления, соблюдение судебных приказов. Юрисдикции: Нидерланды, Германия, Румыния, Молдова.",
  keywords: [
    "dmca policy",
    "политика dmca",
    "dmca ignored hosting",
    "игнорирование dmca",
    "обработка dmca",
    "уведомления о нарушении авторских прав",
    "встречные уведомления dmca",
    "политика авторских прав хостинга"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Политика DMCA Dior Host",
  "description": "Политика обработки уведомлений о нарушении авторских прав (DMCA)",
  "publisher": {
    "@type": "Organization",
    "name": "Dior Host",
    "url": "https://dior.host"
  }
};

export default function DMCAPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout
        title="Политика DMCA"
        description="Как мы обрабатываем уведомления о нарушении авторских прав (DMCA)"
      >
        <section id="what-is-dmca" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            1. Что такое DMCA?
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            DMCA (Digital Millennium Copyright Act) — это закон США, который предоставляет владельцам авторских прав механизм для удаления контента, нарушающего авторские права, с веб-сайтов и хостинг-провайдеров.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            Аналогичные законы существуют в других юрисдикциях:
          </p>
          <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
            <li><strong>ЕС:</strong> EU Copyright Directive (Директива об авторском праве ЕС)</li>
            <li><strong>Великобритания:</strong> Copyright, Designs and Patents Act</li>
            <li><strong>Канада:</strong> Copyright Modernization Act</li>
            <li><strong>Другие:</strong> Многие страны имеют аналогичные законы об авторском праве</li>
          </ul>
          <p className="text-white/80 leading-relaxed mt-4">
            Dior Host работает с политикой игнорирования DMCA по умолчанию, что означает, что мы не автоматически удаляем контент на основе уведомлений DMCA. Вместо этого мы проводим ручную проверку и предоставляем клиентам окно ответа.
          </p>
        </section>

        <section id="what-we-ignore" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            2. Что мы игнорируем (политика игнорирования DMCA)
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Dior Host работает с политикой игнорирования DMCA по умолчанию. Это означает:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li><strong>Мы не автоматически удаляем контент</strong> на основе уведомлений DMCA</li>
              <li><strong>Все уведомления проходят ручную проверку</strong> нашей командой NOC</li>
              <li><strong>Клиенты уведомляются приватно</strong> с окном ответа 7-14 дней</li>
              <li><strong>Встречные уведомления принимаются</strong> и пересылаются жалобщикам</li>
              <li><strong>Мы соблюдаем действительные судебные приказы</strong> из наших юрисдикций работы</li>
            </ul>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 mt-4">
              <h3 className="font-semibold mb-2 text-white">Почему мы используем политику игнорирования DMCA?</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                Многие уведомления DMCA являются ложными, злонамеренными или недействительными. Автоматическое удаление контента может привести к цензуре и нарушению свободы слова. Наш подход, ориентированный на медиацию, гарантирует, что легитимные проекты остаются онлайн во время споров, в то время как мы все еще соблюдаем действительные судебные приказы.
              </p>
            </div>
          </div>
        </section>

        <section id="jurisdiction-list" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            3. Список юрисдикций
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Dior Host размещает услуги в следующих юрисдикциях:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white font-semibold">Страна</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Город</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Применимые законы</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Соблюдение DMCA</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Нидерланды</td>
                    <td className="py-3 px-4">Амстердам</td>
                    <td className="py-3 px-4">EU Copyright Directive, Нидерландское право</td>
                    <td className="py-3 px-4">Ручная проверка, соблюдение судебных приказов</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Германия</td>
                    <td className="py-3 px-4">Франкфурт</td>
                    <td className="py-3 px-4">EU Copyright Directive, Немецкое право</td>
                    <td className="py-3 px-4">Ручная проверка, соблюдение судебных приказов</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Румыния</td>
                    <td className="py-3 px-4">Бухарест</td>
                    <td className="py-3 px-4">EU Copyright Directive, Румынское право</td>
                    <td className="py-3 px-4">Ручная проверка, соблюдение судебных приказов</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Молдова</td>
                    <td className="py-3 px-4">Кишинёв</td>
                    <td className="py-3 px-4">Молдавское право</td>
                    <td className="py-3 px-4">Ручная проверка, соблюдение судебных приказов</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              Мы соблюдаем действительные судебные приказы из этих юрисдикций. Уведомления DMCA из других юрисдикций (например, США) обрабатываются, но не обязательно приводят к удалению контента, если они не подкреплены судебными приказами из наших юрисдикций работы.
            </p>
          </div>
        </section>

        <section id="how-to-submit" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            4. Как подать жалобу DMCA
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Чтобы подать уведомление о нарушении авторских прав, отправьте email на <a href="mailto:abuse@dior.host" className="text-blue-300 hover:text-white underline">abuse@dior.host</a> с следующей информацией:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-white">Обязательная информация:</h3>
              <ol className="list-decimal list-inside space-y-2 text-white/80 ml-4">
                <li><strong>Идентификация защищенного произведения:</strong> Опишите произведение, защищенное авторским правом, которое, по вашему мнению, было нарушено</li>
                <li><strong>Идентификация нарушающего контента:</strong> Укажите точный URL или IP-адрес, где находится нарушающий контент</li>
                <li><strong>Контактная информация:</strong> Ваше имя, адрес, телефон, email</li>
                <li><strong>Заявление о добросовестности:</strong> Заявление о том, что вы добросовестно полагаете, что использование контента не разрешено владельцем авторских прав</li>
                <li><strong>Заявление о точности:</strong> Заявление о том, что информация в уведомлении точна</li>
                <li><strong>Электронная подпись:</strong> Физическая или электронная подпись лица, уполномоченного действовать от имени владельца авторских прав</li>
              </ol>
            </div>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 mt-4">
              <h3 className="font-semibold mb-3 text-white">Пример формата уведомления DMCA:</h3>
              <pre className="text-sm text-white/80 bg-black/50 p-4 rounded overflow-x-auto">
{`От: copyright@example.com
К: abuse@dior.host
Тема: Уведомление DMCA - Нарушение авторских прав

1. Идентификация защищенного произведения:
   Название: "Example Book"
   Автор: John Doe
   ISBN: 123-456-789

2. Идентификация нарушающего контента:
   URL: https://example.com/pirated-book.pdf
   IP-адрес: 1.2.3.4

3. Контактная информация:
   Имя: Jane Smith
   Адрес: 123 Main St, City, State, ZIP
   Телефон: +1-555-123-4567
   Email: copyright@example.com

4. Заявление о добросовестности:
   Я добросовестно полагаю, что использование
   описанного материала не разрешено владельцем
   авторских прав, его агентом или законом.

5. Заявление о точности:
   Информация в этом уведомлении точна, и под
   страхом наказания за лжесвидетельство я
   уполномочен действовать от имени владельца
   авторских прав.

6. Электронная подпись:
   [Электронная подпись]

Дата: 2024-01-15`}
              </pre>
            </div>
          </div>
        </section>

        <section id="how-we-evaluate" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            5. Как мы оцениваем уведомления
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Все уведомления DMCA проходят ручную проверку нашей командой NOC:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-white">Процесс проверки:</h3>
              <ol className="list-decimal list-inside space-y-2 text-white/80 ml-4">
                <li><strong>Проверка формата:</strong> Уведомление содержит всю обязательную информацию?</li>
                <li><strong>Проверка валидности:</strong> Уведомление подписано уполномоченным лицом?</li>
                <li><strong>Проверка контента:</strong> Контент действительно нарушает авторские права?</li>
                <li><strong>Проверка юрисдикции:</strong> Есть ли судебный приказ из наших юрисдикций работы?</li>
                <li><strong>Проверка истории:</strong> Есть ли история ложных или злонамеренных уведомлений от этого жалобщика?</li>
              </ol>
            </div>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 mt-4">
              <h3 className="font-semibold mb-3 text-white">Возможные исходы:</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li><strong>Игнорировать:</strong> Уведомление недействительно, недостаточно доказательств, или не соответствует нашим политикам</li>
                <li><strong>Уведомить клиента:</strong> Уведомление валидно, клиент уведомляется с окном ответа 7-14 дней</li>
                <li><strong>Соблюдать судебный приказ:</strong> Есть действительный судебный приказ из наших юрисдикций работы</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="customer-notification" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            6. Как клиенты уведомляются
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Когда мы получаем валидное уведомление DMCA, мы уведомляем затронутого клиента:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li><strong>Приватное уведомление:</strong> Email отправляется на адрес, связанный с аккаунтом</li>
              <li><strong>Детали жалобы:</strong> Клиент получает копию уведомления DMCA (с удаленной контактной информацией жалобщика для защиты конфиденциальности)</li>
              <li><strong>Окно ответа:</strong> Клиент имеет 7-14 дней для ответа или исправления проблемы</li>
              <li><strong>Варианты действий:</strong> Клиент может удалить контент, подать встречное уведомление, или оспорить жалобу</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              Мы не публикуем информацию о жалобах публично и не раскрываем контактную информацию жалобщика клиенту без согласия жалобщика.
            </p>
          </div>
        </section>

        <section id="counter-notifications" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            7. Встречные уведомления
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Если вы получили уведомление DMCA и считаете, что контент не нарушает авторские права, вы можете подать встречное уведомление:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-white">Требования к встречному уведомлению:</h3>
              <ol className="list-decimal list-inside space-y-2 text-white/80 ml-4">
                <li><strong>Идентификация контента:</strong> Укажите точный URL или IP-адрес контента</li>
                <li><strong>Заявление о добросовестности:</strong> Заявление о том, что вы добросовестно полагаете, что контент был удален по ошибке или неправильной идентификации</li>
                <li><strong>Согласие на юрисдикцию:</strong> Согласие на юрисдикцию федерального суда</li>
                <li><strong>Контактная информация:</strong> Ваше имя, адрес, телефон, email</li>
                <li><strong>Электронная подпись:</strong> Физическая или электронная подпись</li>
              </ol>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              Мы пересылаем встречные уведомления жалобщику. Если жалобщик не подает судебный иск в течение 10-14 дней, мы можем восстановить контент. Если жалобщик подает судебный иск, мы соблюдаем судебный приказ.
            </p>
          </div>
        </section>

        <section id="exceptions" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            8. Исключения (криминальная деятельность, фишинг, вредоносное ПО)
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Политика игнорирования DMCA не применяется к следующим типам нарушений:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-white">Нулевая толерантность:</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li><strong>Криминальная деятельность:</strong> Контент, связанный с терроризмом, торговлей людьми, или другими серьезными преступлениями</li>
                <li><strong>Фишинг:</strong> Веб-сайты, имитирующие законные сервисы для кражи учетных данных</li>
                <li><strong>Вредоносное ПО:</strong> Распространение вирусов, троянов, ботнетов или другого вредоносного ПО</li>
                <li><strong>Материалы о жестоком обращении с детьми:</strong> Любой контент, связанный с эксплуатацией детей</li>
              </ul>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              Эти нарушения обрабатываются согласно нашему <Link href="/ru/abuse-flow" className="text-blue-300 hover:text-white underline">Процессу обработки жалоб</Link> с нулевой толерантностью и приводят к немедленной приостановке без окна медиации.
            </p>
          </div>
        </section>

        <section id="repeat-infringers" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            9. Повторные нарушители
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Если клиент получает множественные валидные уведомления DMCA в течение короткого периода времени, мы можем:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Сократить окно ответа с 7-14 дней до 24-48 часов</li>
              <li>Требовать удаления контента перед восстановлением услуги</li>
              <li>Приостановить услугу до разрешения всех жалоб</li>
              <li>Расторгнуть услугу при повторных нарушениях</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              Мы оцениваем каждую ситуацию индивидуально и принимаем решения на основе истории жалоб, типа контента и сотрудничества клиента.
            </p>
          </div>
        </section>

        <section id="related-pages" className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Связанные документы</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/ru/abuse-flow"
              className="text-blue-300 hover:text-white underline"
            >
              Процесс обработки жалоб
            </Link>
            <Link
              href="/ru/user-agreement"
              className="text-blue-300 hover:text-white underline"
            >
              Пользовательское соглашение
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


