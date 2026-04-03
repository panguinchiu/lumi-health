import Link from 'next/link';

const footerLinks = {
  服務: [
    { href: '/booking', label: '預約門診' },
    { href: '/shop', label: '保健食品' },
    { href: '/blog', label: '健康知識' },
  ],
  關於: [
    { href: '/about', label: '關於我們' },
    { href: '/contact', label: '聯絡我們' },
    { href: '/privacy', label: '隱私政策' },
  ],
  合作: [
    { href: '/partners', label: '診所合作' },
    { href: '/careers', label: '加入團隊' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-lg font-semibold text-text">Lumi Health</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              AI 驅動的預防醫學平台，<br />
              讓每一次健康管理更精準、更高效。
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-text mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary">
            &copy; 2026 Lumi Health. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary">Powered by AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
