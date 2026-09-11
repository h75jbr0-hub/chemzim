import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Platform: [
      { label: "Features", href: "#features" },
      { label: "Curriculum", href: "#curriculum" },
      { label: "Pricing", href: "#" },
      { label: "FAQ", href: "#" },
    ],
    Resources: [
      { label: "Past Papers", href: "#" },
      { label: "Periodic Table", href: "#" },
      { label: "Calculator", href: "#" },
      { label: "Study Guide", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-border" id="site-footer">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-gold-500 to-teal-500 opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 3L9 8L6 14L8 14L10 18L14 18L16 14L18 14L15 8L15 3"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                <span className="text-white">Chem</span>
                <span className="text-gradient-gold">Zim</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-6">
              The ultimate chemistry learning platform for international chemistry
              students. Master your chemistry with interactive practice and
              gamified learning.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {["twitter", "github", "discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-navy-700 border border-border flex items-center justify-center text-muted hover:text-white transition-all duration-300"
                  id={`social-${social}`}
                >
                  <span className="text-xs uppercase font-medium">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {currentYear} ChemZim. All rights reserved.
          </p>
          <p className="text-xs text-muted/60">
            Built with ⚗️ for chemistry students worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
