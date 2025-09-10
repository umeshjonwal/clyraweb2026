import ResponsiveTable from '../components/ResponsiveTable.jsx'
import { motion } from 'framer-motion'

export default function Services(){
  const columns = ['Plan','Includes','Timeline','Best for']
  const rows = [
    ['Sprint', 'Landing page, copy, basic brand kit', '2–3 weeks', 'Launches, campaigns'],
    ['Site', 'Multi-page site, CMS, analytics, SEO', '4–6 weeks', 'B2B, DTC, apps'],
    ['Scale', 'Site + SEO + Paid + CRO + Automation', '3 months+', 'Aggressive growth'],
  ]
  return (
    <div className="py-16 space-y-8">
      <h1 className="text-4xl font-extrabold">Services</h1>
      <p className="max-w-3xl text-gray-700 dark:text-gray-300">End-to-end brand, web, and growth. Every engagement has a clear owner, weekly demos, and shared dashboards — so you always know what’s shipped and what’s next.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          ['Brand', ['Research','Identity','Design systems','Guidelines']],
          ['Web', ['UX/UI','Frontend','Headless CMS','Accessibility']],
          ['Growth', ['SEO','Paid','Analytics','Email & CRM']],
          ['AI', ['Automation','Content ops','Assistants','Dashboards']],
        ].map(([title, items], i)=> (
          <motion.div whileHover={{y:-2, scale:1.01}} key={i} className="card">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              {items.map((it,idx)=><li key={idx}>{it}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="card">
        <h2 className="text-2xl font-semibold mb-3">Plans</h2>
        <ResponsiveTable columns={columns} rows={rows} />
      </div>
    </div>
  )
}
