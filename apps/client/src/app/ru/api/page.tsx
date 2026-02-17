const apiBaseUrl = "https://api.dior.host/v1";

const endpoints = [
  { method: "POST", path: "/vps/create", description: "Создать новый экземпляр VPS" },
  { method: "GET", path: "/vps/list", description: "Список всех экземпляров VPS" },
  { method: "POST", path: "/vps/{id}/snapshot", description: "Создать снимок VPS" },
  { method: "GET", path: "/domains/list", description: "Список зарегистрированных доменов" },
  { method: "POST", path: "/domains/register", description: "Зарегистрировать новый домен" },
  { method: "GET", path: "/abuse/tickets", description: "Список тикетов жалоб" },
  { method: "GET", path: "/vps/{id}/status", description: "Получить статус и метрики VPS" },
  { method: "POST", path: "/vps/{id}/reboot", description: "Перезагрузить экземпляр VPS" },
  { method: "GET", path: "/network/status", description: "Получить статус сети и информацию о пиринге" }
];

const rateLimit = "1000 запросов в час";
const responseFormat = "JSON";

const faqs = [
  {
    question: "Как получить API ключ?",
    answer:
      "Войдите в панель управления на @diorhost_bot в Telegram, перейдите в настройки API и создайте новый API ключ. Храните его в безопасности и никогда не публикуйте публично."
  },
  {
    question: "Какой лимит запросов API?",
    answer:
      "Мы разрешаем 1000 запросов в час на один API ключ. Если вам нужны более высокие лимиты, свяжитесь с поддержкой для получения корпоративного доступа к API."
  },
  {
    question: "В каком формате ответы API?",
    answer:
      "Все ответы API в формате JSON со стандартными HTTP кодами статуса (200 для успеха, 400 для неверного запроса, 401 для неавторизованного и т.д.)."
  },
  {
    question: "Могу ли я автоматизировать развёртывание VPS?",
    answer:
      "Да, используйте конечную точку POST /vps/create с параметрами плана, местоположения и ОС. Экземпляры VPS развёртываются мгновенно."
  },
  {
    question: "Как отслеживать инфраструктуру через API?",
    answer:
      "Используйте GET /vps/{id}/status для метрик отдельных VPS и GET /network/status для общего состояния сети и информации о пиринге."
  }
];

export default function ApiPage() {
  return (
    <div>
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)]">
        <h1 className="text-3xl font-bold">Документация API Dior Host</h1>
        <p className="mt-2 text-white/70">
          Программный доступ к bulletproof инфраструктуре
        </p>
      </section>

      <section className="mt-8 bg-black/40 border border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Базовый URL</h2>
        <code className="bg-black/50 px-4 py-2 rounded text-blue-400 text-sm">
          {apiBaseUrl}
        </code>
      </section>

      <section className="mt-8 bg-black/40 border border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Аутентификация</h2>
        <p className="text-white/80 mb-4">
          Все запросы требуют API ключ в заголовке:
        </p>
        <code className="bg-black/50 px-4 py-2 rounded text-sm block">
          Authorization: Bearer YOUR_API_KEY
        </code>
        <p className="text-white/70 text-sm mt-4">
          Получите ваш API ключ из панели управления: @diorhost_bot в Telegram
        </p>
        <div className="bg-black/30 p-4 rounded-lg mt-4">
          <h3 className="font-semibold mb-2">Лимит запросов</h3>
          <p className="text-white/80 text-sm">{rateLimit}</p>
        </div>
        <div className="bg-black/30 p-4 rounded-lg mt-4">
          <h3 className="font-semibold mb-2">Формат ответа</h3>
          <p className="text-white/80 text-sm">{responseFormat}</p>
        </div>
      </section>

      <section className="mt-8 bg-black/40 border border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Конечные точки</h2>
        <div className="space-y-4">
          {endpoints.map((endpoint) => (
            <div key={endpoint.method + endpoint.path} className="bg-black/30 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`px-3 py-1 rounded text-xs font-bold ${
                    endpoint.method === "POST"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {endpoint.method}
                </span>
                <code className="text-blue-400 text-sm">{endpoint.path}</code>
              </div>
              <p className="text-white/80 text-sm">{endpoint.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-black/40 border border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Пример запроса</h2>
        <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto">
          <code>
            {`curl -X POST ${apiBaseUrl}/vps/create \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "plan": "lite-1",
    "location": "nl",
    "os": "ubuntu-22.04"
  }'`}
          </code>
        </pre>
      </section>

      <section className="mt-8 bg-black/40 border border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Коды ответов</h2>
        <div className="space-y-2 text-sm">
          <div className="flex gap-4">
            <code className="text-green-400 w-20">200</code>
            <span className="text-white/80">Успех</span>
          </div>
          <div className="flex gap-4">
            <code className="text-yellow-400 w-20">400</code>
            <span className="text-white/80">Неверный запрос</span>
          </div>
          <div className="flex gap-4">
            <code className="text-red-400 w-20">401</code>
            <span className="text-white/80">Неавторизован</span>
          </div>
          <div className="flex gap-4">
            <code className="text-red-400 w-20">404</code>
            <span className="text-white/80">Не найдено</span>
          </div>
          <div className="flex gap-4">
            <code className="text-red-400 w-20">429</code>
            <span className="text-white/80">Слишком много запросов</span>
          </div>
          <div className="flex gap-4">
            <code className="text-red-400 w-20">500</code>
            <span className="text-white/80">Ошибка сервера</span>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="mt-8 bg-black/40 border border-white/10 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-white/10 rounded-lg p-4 bg-black/30"
              >
                <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="faq-arrow ml-2">▶</span>
                </summary>
                <div className="accordion-content">
                  <p className="mt-2 text-sm text-white/70">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="mt-8 bg-black/40 border border-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Связанные страницы</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="/ru/about"
            className="text-blue-300 hover:text-white underline"
          >
            О нас
          </a>
          <a
            href="/ru/sla"
            className="text-blue-300 hover:text-white underline"
          >
            Соглашение об уровне обслуживания
          </a>
        </div>
      </section>
    </div>
  );
}


