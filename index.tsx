import React from "react";

// ─── Container ────────────────────────────────────────────────────────────────
interface ContainerProps {
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

export function Container({ as: Tag = "div", children, className = "" }: ContainerProps) {
  return (
    <Tag className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}

// ─── Button ───────────────────────────────────────────────────────────────────
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  as: Tag = "button",
  href,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-[var(--color-accent)] text-white font-semibold rounded-md btn-glow transition-all duration-200 hover:brightness-110 active:brightness-95",
    outline:
      "border border-[var(--color-accent)] text-[var(--color-accent)] font-semibold rounded-md transition-all duration-200 hover:bg-[var(--color-accent)] hover:text-white",
    ghost:
      "text-[var(--color-muted)] font-medium rounded-md transition-colors duration-200 hover:text-white hover:bg-white/5",
  };

  const classes = `inline-flex items-center gap-2 font-[var(--font-sans)] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (Tag === "a") {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

// ─── Accordion ────────────────────────────────────────────────────────────────
interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: readonly AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="divide-y divide-white/8">
      {items.map((item, i) => (
        <div key={i} className="py-1">
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between gap-4 py-4 text-left group"
            aria-expanded={openIndex === i}
          >
            <span
              className="font-semibold text-white/90 group-hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {item.question}
            </span>
            <span
              className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded border border-white/10 text-[var(--color-accent)] text-lg font-light transition-transform duration-300"
              style={{
                transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          <div className={`accordion-content ${openIndex === i ? "open" : ""}`}>
            <div>
              <p
                className="pb-4 text-[var(--color-muted)] leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── AppStoreButton ───────────────────────────────────────────────────────────
interface AppStoreButtonProps {
  variant: "ios" | "android";
}

export function AppStoreButton({ variant }: AppStoreButtonProps) {
  const config = {
    ios: {
      icon: "🍎",
      store: "App Store",
      sub: "Scarica su",
      href: "#",
    },
    android: {
      icon: "▶",
      store: "Google Play",
      sub: "Disponibile su",
      href: "#",
    },
  };

  const c = config[variant];

  return (
    <a
      href={c.href}
      className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg border border-white/10 bg-white/4 hover:bg-white/8 hover:border-[var(--color-accent)]/40 transition-all duration-200"
    >
      <span className="text-xl">{c.icon}</span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] text-[var(--color-muted)] uppercase tracking-widest">
          {c.sub}
        </span>
        <span className="text-sm font-semibold text-white">{c.store}</span>
      </span>
    </a>
  );
}
