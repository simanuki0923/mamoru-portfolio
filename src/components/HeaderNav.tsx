"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects/",
  },
  {
    label: "Skills",
    href: "/skills/",
  },
];

export default function HeaderNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(
      href.replace(/\/$/, ""),
    );
  };

  return (
    <nav className="flex items-center gap-1 sm:gap-2">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
            isActive(item.href)
              ? "bg-blue-50 text-blue-600"
              : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
          }`}
        >
          {item.label}
        </Link>
      ))}

      <Link
        href="/#contact"
        className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
      >
        Contact
      </Link>
    </nav>
  );
}