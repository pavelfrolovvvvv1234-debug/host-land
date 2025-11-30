import { readFileSync, existsSync } from "fs";
import { join } from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: {
    slug: string;
  };
}

// Map of all valid article slugs (both .md and .mdx files)
const articleSlugs = [
  // New blog articles (MDX)
  "bulletproof-vds-blog",
  "bulletproof-domains-blog",
  "vds-vs-vps-vs-dedicated-blog",
  "bulletproof-dedicated-servers-blog",
  "dedicated-servers-blog",
  "turbovds-blog",
  "iphm-dedicated-servers-blog",
  "offshore-hosting-blog",
  "abuse-resistant-hosting-stack-blog",
  "dmca-ignored-hosting-blog",
  // New SEO articles (MDX)
  "cdn-complete-guide",
  "vpn-infrastructure-guide",
  "minecraft-hosting-architecture",
  "abuse-resistant-vps-complete-guide",
  // Existing articles (MD)
  "bulletproof-domains-guide",
  "bulletproof-security-controls",
  "bulletproof-vps-for-marketers",
  "dmca-ignored-hosting-checklist",
  "dmca-ignored-hosting-escalation-guide",
  "iphm-dedicated-servers-guide",
  "llm-ready-hosting-faq",
  "migrating-to-bulletproof-hosting-zero-downtime",
  "offshore-abuse-resistant-vps-2025",
  "offshore-compliance-guide",
  "privacy-first-billing",
  "turbovds-vs-regular-vds",
  "bulletproof-dedicated-vs-vds"
];

export async function generateStaticParams() {
  return articleSlugs.map((slug) => ({
    slug
  }));
}

function extractJsonLd(content: string): any | null {
  // Try to extract JSON-LD from MDX format
  const jsonLdMatch = content.match(
    /<script type="application\/ld\+json">\s*\{`([\s\S]*?)`\}\s*<\/script>/
  );
  if (jsonLdMatch) {
    try {
      const jsonStr = jsonLdMatch[1]
        .replace(/`/g, "")
        .replace(/\{`/g, "{")
        .replace(/`\}/g, "}")
        .trim();
      return JSON.parse(jsonStr);
    } catch (e) {
      console.error("Failed to parse JSON-LD:", e);
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

export default function BlogArticlePage({ params }: PageProps) {
  const { slug } = params;

  if (!articleSlugs.includes(slug)) {
    notFound();
  }

  // Try .mdx first, then .md
  let filePath = join(process.cwd(), "blog", "articles", `${slug}.mdx`);
  let fileContent: string | null = null;

  if (existsSync(filePath)) {
    fileContent = readFileSync(filePath, "utf-8");
  } else {
    filePath = join(process.cwd(), "blog", "articles", `${slug}.md`);
    if (existsSync(filePath)) {
      fileContent = readFileSync(filePath, "utf-8");
    } else {
      notFound();
    }
  }

  if (!fileContent) {
    notFound();
  }

  // Extract JSON-LD if present
  const jsonLd = extractJsonLd(fileContent);

  // Remove JSON-LD script from markdown content
  let markdownContent = removeJsonLdScript(fileContent);

  // Remove frontmatter if present (lines starting with ---)
  if (markdownContent.startsWith("---")) {
    const frontmatterEnd = markdownContent.indexOf("---", 3);
    if (frontmatterEnd !== -1) {
      const frontmatter = markdownContent.substring(3, frontmatterEnd);
      
      // Find content field using simpler, more reliable approach
      // Look for "content: |-" pattern anywhere in frontmatter
      const contentMatch = frontmatter.match(/(?:^|\n)\s*content:\s*\|\s*-\s*\n([\s\S]*)/);
      
      if (contentMatch && contentMatch[1]) {
        let extractedContent = contentMatch[1];
        
        // Find where content ends (next top-level key or end of frontmatter)
        // Top-level keys start at beginning of line (0-2 spaces) followed by letter
        const contentEndMatch = extractedContent.match(/\n\s{0,2}[a-z][a-z0-9_-]*:\s/);
        if (contentEndMatch) {
          extractedContent = extractedContent.substring(0, contentEndMatch.index);
        }
        
        // Detect indentation level from first non-empty line
        const lines = extractedContent.split('\n');
        let indentLevel = 0;
        for (const line of lines) {
          if (line.trim()) {
            // Count leading spaces
            const leadingSpaces = line.match(/^(\s*)/)?.[1]?.length || 0;
            if (leadingSpaces >= 4) {
              indentLevel = 4;
            } else if (leadingSpaces >= 2) {
              indentLevel = 2;
            } else {
              indentLevel = 0;
            }
            break;
          }
        }
        
        // Remove leading indentation
        markdownContent = extractedContent
          .split('\n')
          .map(line => {
            if (indentLevel > 0 && line.startsWith(' '.repeat(indentLevel))) {
              return line.substring(indentLevel);
            }
            return line;
          })
          .join('\n')
          .trim();
      } else {
        // Fallback: remove frontmatter normally
        markdownContent = markdownContent.substring(frontmatterEnd + 3).trim();
      }
    }
  }

  // Extract title from first H1
  const titleMatch = markdownContent.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : slug;

  // Custom components for ReactMarkdown to use Next.js Link for internal links
  const components = {
    a: ({ href, children, ...props }: any) => {
      // Check if it's an internal blog link
      if (href && href.startsWith("/blog/articles/")) {
        const cleanHref = href.replace(/\/$/, "");
        return (
          <Link href={cleanHref} className="text-blue-300 hover:text-white transition">
            {children}
          </Link>
        );
      }
      // Check if it's an internal wiki link
      if (href && href.startsWith("/wiki/articles/")) {
        const cleanHref = href.replace(/\/$/, "");
        return (
          <Link href={cleanHref} className="text-blue-300 hover:text-white transition">
            {children}
          </Link>
        );
      }
      // External links
      return (
        <a href={href} className="text-blue-300 hover:text-white transition" {...props}>
          {children}
        </a>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="blog-article prose prose-invert prose-lg max-w-none">
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            ...components,
            h1: ({ children }: any) => (
              <h1 className="text-4xl font-bold mb-6 mt-8 text-white">{children}</h1>
            ),
            h2: ({ children }: any) => (
              <h2 className="text-3xl font-semibold mb-4 mt-8 text-white border-b border-white/10 pb-2">
                {children}
              </h2>
            ),
            h3: ({ children }: any) => (
              <h3 className="text-2xl font-semibold mb-3 mt-6 text-white">{children}</h3>
            ),
            h4: ({ children }: any) => (
              <h4 className="text-xl font-semibold mb-2 mt-4 text-white">{children}</h4>
            ),
            p: ({ children }: any) => (
              <p className="mb-4 text-white/90 leading-relaxed">{children}</p>
            ),
            ul: ({ children }: any) => (
              <ul className="list-disc list-inside mb-4 space-y-2 text-white/90 ml-4">
                {children}
              </ul>
            ),
            ol: ({ children }: any) => (
              <ol className="list-decimal list-inside mb-4 space-y-2 text-white/90 ml-4">
                {children}
              </ol>
            ),
            li: ({ children }: any) => (
              <li className="mb-1 text-white/90">{children}</li>
            ),
            code: ({ children, className }: any) => {
              const isInline = !className;
              if (isInline) {
                return (
                  <code className="bg-black/50 text-blue-300 px-1.5 py-0.5 rounded text-sm font-mono">
                    {children}
                  </code>
                );
              }
              return (
                <code className="block bg-black/70 text-white/90 p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm border border-white/10">
                  {children}
                </code>
              );
            },
            pre: ({ children }: any) => (
              <pre className="bg-black/70 p-4 rounded-lg overflow-x-auto mb-4 border border-white/10">
                {children}
              </pre>
            ),
            blockquote: ({ children }: any) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-white/80 bg-black/30 py-2 rounded-r">
                {children}
              </blockquote>
            ),
            table: ({ children }: any) => (
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse border border-white/10 rounded-lg">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }: any) => (
              <thead className="bg-black/50">{children}</thead>
            ),
            tbody: ({ children }: any) => (
              <tbody className="bg-black/30">{children}</tbody>
            ),
            tr: ({ children }: any) => (
              <tr className="border-b border-white/10">{children}</tr>
            ),
            th: ({ children }: any) => (
              <th className="border border-white/10 px-4 py-2 text-left font-semibold text-white">
                {children}
              </th>
            ),
            td: ({ children }: any) => (
              <td className="border border-white/10 px-4 py-2 text-white/90">
                {children}
              </td>
            ),
            hr: () => <hr className="my-8 border-white/10" />,
            details: ({ children }: any) => (
              <details className="mb-4 border border-white/10 rounded-lg bg-black/30 overflow-hidden">
                {children}
              </details>
            ),
            summary: ({ children }: any) => (
              <summary className="cursor-pointer font-semibold text-lg p-4 text-white hover:bg-black/50 transition">
                {children}
              </summary>
            )
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </article>
    </div>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  if (!articleSlugs.includes(slug)) {
    return {
      title: "Article Not Found"
    };
  }

  // Try .mdx first, then .md
  let filePath = join(process.cwd(), "blog", "articles", `${slug}.mdx`);
  let fileContent: string | null = null;

  if (existsSync(filePath)) {
    fileContent = readFileSync(filePath, "utf-8");
  } else {
    filePath = join(process.cwd(), "blog", "articles", `${slug}.md`);
    if (existsSync(filePath)) {
      fileContent = readFileSync(filePath, "utf-8");
    } else {
      return {
        title: "Article Not Found"
      };
    }
  }

  if (!fileContent) {
    return {
      title: "Article Not Found"
    };
  }

  // Extract title from first H1
  const titleMatch = fileContent.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : slug;

  // Extract description (first 2-3 lines after title, or from frontmatter)
  let description = "";
  
  // Try to extract from frontmatter first
  if (fileContent.startsWith("---")) {
    const frontmatterEnd = fileContent.indexOf("---", 3);
    if (frontmatterEnd !== -1) {
      const frontmatter = fileContent.substring(3, frontmatterEnd);
      const descMatch = frontmatter.match(/description:\s*(.+)/i);
      if (descMatch) {
        description = descMatch[1].trim().replace(/^["']|["']$/g, "");
      }
    }
  }

  // If no description from frontmatter, get from content
  if (!description) {
    const lines = fileContent.split("\n");
    let foundTitle = false;
    for (const line of lines) {
      if (line.startsWith("# ")) {
        foundTitle = true;
        continue;
      }
      if (foundTitle && line.trim() && !line.startsWith("#") && !line.startsWith("---")) {
        description = line.trim();
        break;
      }
    }
  }

  return {
    title: `${title} | Blog | Dior Host`,
    description: description || `Blog article: ${title}`
  };
}

