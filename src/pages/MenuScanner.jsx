
export default function MenuScanner() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">QR Menu Scanner</h1>
      <p className="mt-4 text-lg text-gray-700">
        Cylra's Menu Scanner converts printed or image-based menus into an interactive digital experience.
        Scan via QR, auto-detect sections, translate languages, and surface allergen info in seconds.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">Smart OCR</h3>
          <p className="text-sm mt-2 text-gray-700">High-accuracy text extraction for cluttered photos and low light.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">Instant Translation</h3>
          <p className="text-sm mt-2 text-gray-700">Multi-language translation with cuisine-aware phrasing.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">Allergen & Tags</h3>
          <p className="text-sm mt-2 text-gray-700">Highlights allergens, veg/non-veg, spicy, and chef’s picks.</p>
        </div>
      </div>
    </main>
  );
}
