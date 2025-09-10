import { motion } from 'framer-motion'
export default function Work(){
  const items = [
    ['Astra','DTC brand relaunch with 92+ Lighthouse score.'],
    ['Helix','B2B site with 3.1x ROAS through creative testing.'],
    ['Volt','App landing that hit #1 Product Hunt with 40k signups.'],
  ]
  return (
    <div className="py-16">
      <h1 className="text-4xl font-extrabold mb-6">Case Studies</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(([name, desc],i)=>(
          <motion.div whileHover={{y:-2, scale:1.01}} key={i} className="card">
            <div className="text-sm text-gray-500">Client</div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-700 dark:text-gray-300">{desc}</p>
            <a className="btn btn-ghost mt-3" href="/contact">Request full case study</a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
