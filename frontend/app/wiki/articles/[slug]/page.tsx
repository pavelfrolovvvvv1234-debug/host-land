import { readFileSync, existsSync } from "fs";
import { join } from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import Link from "next/link";
import { toPrimaryUrl, getHreflangAlternates } from "../../../lib/canonical";

interface PageProps {
  params: {
    slug: string;
  };
}

// Map of all valid article slugs
const articleSlugs = [
  "bulletproof-dedicated-server",
  "bulletproof-domains",
  "bulletproof-vds",
  "dedicated-servers-with-iphm",
  "dedicated-servers",
  "fastpanel-on-server",
  "ispmanager-on-the-server",
  "problem-with-session-lockout-on-windows-after-multiple-failed-login-attempts-to-server",
  "site-on-the-server",
  "the-error-fatal-glibc-error-cpu-does-not-support-on-centos-9",
  "turbonet-virtual-servers",
  "virtual-servers"
];

export async function generateStaticParams() {
  return articleSlugs.map((slug) => ({
    slug
  }));
}

function extractJsonLd(content: string): string | null {
  const jsonLdMatch = content.match(
    /<script type="application\/ld\+json">\s*\{`([\s\S]*?)`\}\s*<\/script>/
  );
  if (jsonLdMatch) {
    try {
      // Clean up the JSON string (remove backticks and fix escaping)
      const jsonStr = jsonLdMatch[1]
        .replace(/`/g, "")
        .replace(/\{`/g, "{")
        .replace(/`\}/g, "}")
        .trim();
      return JSON.parse(jsonStr);
    } catch (e) {
      if (process.env.NODE_ENV === 'development') {
        console.error("Failed to parse JSON-LD:", e);
      }
      return null;
    }
  }
  return null;
}

function removeJsonLdScript(content: string): string {
  return content.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
    ""
  );
}

function getWikiArticlePath(slug: string): string {
  // Try multiple possible paths where wiki articles might be located
  const cwd = process.cwd();
  const possiblePaths = [
    join(cwd, "wiki", "articles", `${slug}.mdx`), // If cwd is frontend/
    join(cwd, "frontend", "wiki", "articles", `${slug}.mdx`), // If cwd is project root
  ];

  // Find the first path that exists
  for (const path of possiblePaths) {
    if (existsSync(path)) {
      return path;
    }
  }

  // Return the first path as default (will trigger notFound if doesn't exist)
  return possiblePaths[0];
}

export default function WikiArticlePage({ params }: PageProps) {
  const { slug } = params;

  if (!articleSlugs.includes(slug)) {
    notFound();
  }

  const filePath = getWikiArticlePath(slug);

  if (!existsSync(filePath)) {
    // Article not found - return 404
    if (process.env.NODE_ENV === 'development') {
      console.error(`Wiki article not found: ${slug}`);
      console.error(`Searched at: ${filePath}`);
    }
    notFound();
  }

  const fileContent = readFileSync(filePath, "utf-8");

  // Extract JSON-LD if present
  const jsonLd = extractJsonLd(fileContent);

  // Remove JSON-LD script from markdown content
  let markdownContent = removeJsonLdScript(fileContent);

  // Remove frontmatter if present (lines starting with ---)
  if (markdownContent.startsWith("---")) {
    const frontmatterEnd = markdownContent.indexOf("---", 3);
    if (frontmatterEnd !== -1) {
      markdownContent = markdownContent.substring(frontmatterEnd + 3).trim();
    }
  }

  // Extract title from first H1
  const titleMatch = markdownContent.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : slug;

  // Custom components for ReactMarkdown to use Next.js Link for internal links
  const components = {
    a: ({ href, children, ...props }: any) => {
      // Check if it's an internal wiki link
      if (href && href.startsWith("/wiki/articles/")) {
        // Remove trailing slash if present
        const cleanHref = href.replace(/\/$/, "");
        return (
          <Link href={cleanHref} className="text-blue-300 hover:text-white transition">
            {children}
          </Link>
        );
      }
      // External links
      const isExternal = href && (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//'));
      return (
        <a 
          href={href} 
          className="text-blue-300 hover:text-white transition" 
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...props}
        >
          {children}
        </a>
      );
    }
  };

  return (
    <article className="wiki-article prose prose-invert max-w-none">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdownContent}
      </ReactMarkdown>
    </article>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  if (!articleSlugs.includes(slug)) {
    return {
      title: "Article Not Found"
    };
  }

  const filePath = getWikiArticlePath(slug);

  if (!existsSync(filePath)) {
    return {
      title: "Article Not Found"
    };
  }

  const fileContent = readFileSync(filePath, "utf-8");

  // Extract title from first H1
  const titleMatch = fileContent.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : slug;

  // Extract description (first 2-3 lines after title)
  const lines = fileContent.split("\n");
  let description = "";
  let foundTitle = false;
  for (const line of lines) {
    if (line.startsWith("# ")) {
      foundTitle = true;
      continue;
    }
    if (foundTitle && line.trim() && !line.startsWith("#")) {
      description = line.trim();
      break;
    }
  }

  const pathname = `/wiki/articles/${slug}`;
  return {
    title: `${title} | Wiki | Dior Host`,
    description: description || `Wiki article: ${title}`,
    alternates: {
      canonical: toPrimaryUrl(pathname),
      languages: getHreflangAlternates(pathname),
    },
    openGraph: {
      url: toPrimaryUrl(pathname),
    },
  };
}

