
export default function ScamProtectionPage() {
  return (
      <main className="pt-15 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
            Protect yourself from gift card scams.
          </h1>

          <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
            Apple Gift Cards can be used only to purchase goods and services from Apple.
            If you are asked to use a gift card for payment elsewhere, it is a scam.
          </p>

          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-semibold mb-4">How to identify a scam</h3>
              <ul className="list-disc pl-5 space-y-3 text-neutral-600">
                <li>Apple Gift Cards are for Apple products only.</li>
                <li>Never share your card code with anyone you don't know.</li>
                <li>Scammers often use fear or urgency to make you pay quickly.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">What to do if you've been scammed</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                If you have already shared your gift card code with a scammer,
                contact your local law enforcement immediately and keep all records
                of the conversation.
              </p>
            </section>
          </div>

          <div className="mt-5 pt-8 border-t border-neutral-100">
            <a
              href="#"
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition"
            >
              Report a concern
            </a>
          </div>
        </div>
      </main>
  );
}