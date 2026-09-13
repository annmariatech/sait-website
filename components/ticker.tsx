import Link from "next/link";

type TickerItem = {
  label: string;
  text: string;
  href?: string;
};

const items: TickerItem[] = [
  {
    label: "ANNOUNCEMENT",
    text: "SAIT activities, events and opportunities — all in one place.",
    href: "/notifications",
  },
  {
    label: "EVENT",
    text: "Stay updated with upcoming workshops, competitions and department events.",
    href: "/events",
  },
  {
    label: "STUDENT LIFE",
    text: "Explore activities, achievements and opportunities across the IT department.",
    href: "/activities",
  },
];

export function Ticker() {
  const tickerItems = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-ink/15 bg-paper">
      <div className="flex min-w-max animate-[ticker_28s_linear_infinite]">
        {tickerItems.map((item, index) => (
          <Link
            key={`${item.label}-${index}`}
            href={item.href ?? "#"}
            className="group flex items-center gap-4 border-r border-ink/15 px-6 py-3 transition-colors hover:bg-navy hover:text-paper"
          >
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-navy group-hover:text-paper">
              {item.label}
            </span>

            <span className="text-sm font-medium">
              {item.text}
            </span>

            <span aria-hidden="true" className="text-navy group-hover:text-paper">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}