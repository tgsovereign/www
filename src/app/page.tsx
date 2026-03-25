import Image from "next/image";
import {
  MessageSquare,
  Search,
  Send,
  Shield,
  Bot,
  Clock,
  FolderOpen,
  Users,
  Pin,
  Forward,
  Server,
  ArrowRight,
  Zap,
  Terminal,
  Play,
} from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <span className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <Image src="/logo.svg" alt="Sovereign" width={28} height={28} />
          Sovereign
        </span>
        <div className="hidden items-center gap-8 text-sm text-muted sm:flex">
          <a
            href="#features"
            className="transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a href="#tools" className="transition-colors hover:text-foreground">
            Tools
          </a>
          <a
            href="#architecture"
            className="transition-colors hover:text-foreground"
          >
            Architecture
          </a>
        </div>
        <a
          href="https://github.com/tgsovereign/core"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent-light">
          <Zap className="h-3.5 w-3.5" />
          Now with cloud agents & scheduled tasks
        </div>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Your Telegram,{" "}
          <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
            supercharged
          </span>{" "}
          with AI
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Sovereign is a self-hosted agentic Telegram client. It reads your
          chats, searches messages, sends replies, and runs autonomous tasks —
          all through a clean chat interface you control.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://web.tgsovereign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center gap-2 rounded-xl bg-accent px-8 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            Try It Free
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/tgsovereign/core"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center rounded-xl border border-border px-8 text-sm font-medium text-muted transition-colors hover:border-muted hover:text-foreground"
          >
            Host It Yourself
          </a>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-accent/10">
            <Image
              src="/demo.png"
              alt="Sovereign chat interface demo"
              width={1920}
              height={1080}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: MessageSquare,
    title: "Chat Interface",
    description:
      "A familiar chat UI where you talk to an AI agent that has full access to your Telegram account. Ask it anything about your chats.",
  },
  {
    icon: Shield,
    title: "Granular Permissions",
    description:
      "Three permission levels — read-only, read-write, and full autonomy. You decide how much power the agent has, and you can change it anytime.",
  },
  {
    icon: Server,
    title: "Self-Hosted",
    description:
      "Your data never leaves your infrastructure. Run it on your own server with Docker Compose. No third-party access to your messages.",
  },
  {
    icon: Clock,
    title: "Cloud Agents",
    description:
      "Schedule long-running tasks and CRON jobs that execute autonomously in the cloud. Summarize daily chats, monitor channels, auto-reply — hands-free.",
  },
  {
    icon: Bot,
    title: "Agentic Loop",
    description:
      "Powered by GPT-4o with a tool-calling loop. The agent reasons, picks the right tool, executes it, and iterates until your request is fulfilled.",
  },
  {
    icon: Users,
    title: "Multi-Conversation",
    description:
      "Multiple chat threads with full history persistence. Pick up where you left off, or start a new conversation for a different task.",
  },
];

function Features() {
  return (
    <section id="features" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            A complete toolkit for managing your Telegram through AI — from
            reading messages to running autonomous background tasks.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/50 bg-surface/50 p-6 transition-all hover:border-accent/30 hover:bg-surface"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const tools = [
  {
    icon: MessageSquare,
    name: "list_chats",
    description: "List all dialogs with unread counts",
    permission: "Read",
  },
  {
    icon: Search,
    name: "search_messages",
    description: "Global or per-chat message search",
    permission: "Read",
  },
  {
    icon: FolderOpen,
    name: "list_folders",
    description: "List chat folders and filters",
    permission: "Read",
  },
  {
    icon: Users,
    name: "list_contacts",
    description: "Browse your contact list",
    permission: "Read",
  },
  {
    icon: Send,
    name: "send_message",
    description: "Send messages on your behalf",
    permission: "Write",
  },
  {
    icon: Forward,
    name: "forward_message",
    description: "Forward messages between chats",
    permission: "Write",
  },
  {
    icon: Pin,
    name: "pin_message",
    description: "Pin or unpin messages in chats",
    permission: "Write",
  },
  {
    icon: Clock,
    name: "mark_as_read",
    description: "Mark conversations as read",
    permission: "Write",
  },
];

function Tools() {
  return (
    <section id="tools" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            13+ Telegram tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            The agent has a growing set of tools that map to Telegram&apos;s
            API. Each tool is gated by the permission level you choose.
          </p>
        </div>
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-start gap-3 rounded-xl border border-border/50 bg-surface/30 p-4 transition-colors hover:bg-surface/60"
            >
              <tool.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <code className="text-sm font-medium">{tool.name}</code>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      tool.permission === "Read"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-amber-500/10 text-amber-400"
                    }`}
                  >
                    {tool.permission}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          + edit_message, delete_message, create_group, get_chat_info,
          get_user_info, read_messages, and more
        </p>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, powerful architecture
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Three containers. One command. Full control.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-surface/50">
            <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-muted">
                docker-compose.yml
              </span>
            </div>
            <pre className="overflow-x-auto p-6 text-sm leading-relaxed">
              <code className="text-muted">
                <span className="text-accent-light">services</span>
                {`:\n`}
                <span className="text-accent-light">{"  "}postgres</span>
                {`:       `}
                <span className="text-muted/60"># PostgreSQL 17</span>
                {`\n`}
                <span className="text-accent-light">{"  "}backend</span>
                {`:        `}
                <span className="text-muted/60">
                  # FastAPI + Telethon + GPT-4o
                </span>
                {`\n`}
                <span className="text-accent-light">{"  "}frontend</span>
                {`:       `}
                <span className="text-muted/60"># Next.js chat UI</span>
              </code>
            </pre>
          </div>
          <a
            href="https://github.com/tgsovereign/core"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 flex items-center justify-between rounded-xl border border-border/50 bg-surface/50 px-4 py-3 transition-colors hover:border-accent/50"
          >
            <div className="flex items-center gap-3">
              <Terminal className="h-4 w-4 text-accent-light" />
              <code className="text-sm text-muted">
                <span className="text-accent-light">$</span> docker compose
                up --build
              </code>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted transition-colors group-hover:text-accent-light">
              Run
              <Play className="h-3 w-3" />
            </span>
          </a>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Frontend",
                detail: "Next.js 16, React 19, Tailwind, shadcn/ui",
              },
              {
                label: "Backend",
                detail: "FastAPI, Telethon, OpenAI, SQLAlchemy, WebSockets",
              },
              {
                label: "Database",
                detail: "PostgreSQL 17 with Alembic migrations",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border/50 bg-surface/30 p-4 text-center"
              >
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="mt-1 text-xs text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Take control of your Telegram
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Self-host Sovereign in minutes. Open source, extensible, and yours.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/tgsovereign/core"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center gap-2 rounded-xl bg-accent px-8 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            <GitHubIcon className="h-4 w-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-muted">
        <span>Sovereign</span>
        <div className="flex items-center gap-6">
          <a
            href="/terms"
            className="transition-colors hover:text-foreground"
          >
            Terms
          </a>
          <a
            href="/privacy"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="https://github.com/tgsovereign/core/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Open source under MIT
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Tools />
      <Architecture />
      <CTA />
      <Footer />
    </>
  );
}
