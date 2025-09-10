
export default function GstBilling() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">GST Billing & Invoicing</h1>
      <p className="mt-4 text-lg text-gray-700">
        Build compliant invoices in minutes. Cylra's billing system automates GST calculations, supports HSN/SAC,
        and exports GSTR-ready reports—so you close books faster.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">Auto GST & HSN</h3>
          <p className="text-sm mt-2 text-gray-700">Accurate tax rules applied per item with place-of-supply logic.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">Inventory & Parties</h3>
          <p className="text-sm mt-2 text-gray-700">SKUs, stock, customers, and suppliers in one flow.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">Reports & Exports</h3>
          <p className="text-sm mt-2 text-gray-700">GSTR-1/3B support and CSV/PDF exports for accountants.</p>
        </div>
      </div>
    </main>
  );
}
