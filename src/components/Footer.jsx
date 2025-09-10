import SubscribeForm from "./SubscribeForm";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* ✨ Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900 opacity-50 pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 grid place-content-center text-white font-black shadow-lg shadow-accent-600/30">
              C
            </div>
            <span className="text-xl font-extrabold">Clyra</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            A next-gen agency crafting brands, blazing-fast websites, and growth
            systems that compound.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            {["About", "Case Studies", "Careers", "Blog"].map((item, i) => (
              <li key={i}>
                <a
                  href={`/${item.toLowerCase().replace(" ", "")}`}
                  className="relative transition-colors hover:text-accent-500
                             before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-brand-500 before:to-accent-500 before:opacity-0 hover:before:opacity-20 before:transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            {[
              "Brand Identity",
              "Web Design & Dev",
              "Performance Marketing",
              "AI Automation",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="/services"
                  className="relative transition-colors hover:text-accent-500
                             before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-brand-500 before:to-accent-500 before:opacity-0 hover:before:opacity-20 before:transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Get monthly insights on design, growth, and AI.
          </p>

          {/* ✅ Subscribe form */}
          <SubscribeForm />

          <div className="flex gap-3 mt-4 text-sm text-gray-600 dark:text-gray-400">
            {["LinkedIn", "Instagram", "Twitter"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-accent-500 transition-colors"
                aria-label={item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative py-6 text-center text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
        © {new Date().getFullYear()} Cylra. All rights reserved by Umesh-Jonwal
      </div>
    </footer>
  );
}
