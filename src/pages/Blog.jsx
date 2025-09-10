export default function Blog(){
  const posts = [
    ['/blog/conversion-first-design','Why Agencies Need Conversion‑First Design','Go beyond pretty. Design for outcomes.'],
    ['/blog/digital-menus','How Digital Menus Are Reshaping Restaurants','QR menus → better data, faster updates.'],
    ['/blog/smart-billing','Boosting Retail Revenue with Smart Billing','Automation turns checkout into growth.'],
  ]
  return (
    <div className="py-16">
      <h1 className="text-4xl font-extrabold mb-6">Insights</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(([href,title,desc],i)=>(
          <a key={i} href={href} className="card block hover:shadow-md transition">
            <div className="badge mb-3">Article</div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{desc}</p>
            <div className="mt-3 text-sm text-brand-700">Read more →</div>
          </a>
        ))}
      </div>
    </div>
  )
}
