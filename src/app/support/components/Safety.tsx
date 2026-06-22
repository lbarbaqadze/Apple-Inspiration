import Link from "next/link";

export default function Safety() {
    return (
        <section className="md:py-0  bg-neutral-50">
            <div className="max-w-7xl mx-auto px-6 space-y-6">

                <div className="bg-white p-12 md:p-16 rounded-3xl shadow-sm border border-neutral-100">
                    <h2 className="text-2xl font-semibold mb-6">Designing for longevity</h2>
                    <p className="text-neutral-600 leading-relaxed max-w-3xl mb-4">
                        At Apple, we are always working to create the best experience for our customers, which is why we design products that last. Designing for
                        longevity is a company-wide effort, informing our earliest decisions long before the first prototype is built and guided by historical
                        customer-use data and predictions on future usage. It requires striking a balance between durability and repairability while not compromising
                        on safety, security, and privacy.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 bg-white p-12 rounded-3xl shadow-sm border border-neutral-100">
                        <h2 className="text-2xl font-semibold mb-6">Beware of counterfeit parts</h2>
                        <p className="text-neutral-600 leading-relaxed">
                            Some counterfeit and third party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you
                            receive a genuine Apple battery during a battery replacement, we recommend visiting an Apple Store or Apple Authorized Service Provider.
                            If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.
                            Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs
                            are performed by trusted experts who use genuine Apple parts.
                        </p>
                    </div>

                    <div className="bg-white p-12 rounded-3xl shadow-sm border border-neutral-100 flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 mb-4 text-neutral-800">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M12 8V4m0 0l2 2m-2-2L10 6" /></svg>
                            </div>
                            <h2 className="text-xl font-semibold mb-3">Be aware of gift card scams</h2>
                            <p className="text-neutral-600 text-sm leading-relaxed mb-4">Be aware of scams involving Apple Gift Cards, App Store & iTunes Gift Cards, and Apple Store Gift Cards.</p>
                        </div>
                        <Link href={"/support/gift-card"} className="text-blue-500 hover:text-blue-600 text-sm font-medium">Learn more →</Link>
                    </div>
                </div>

            </div>
        </section>
    );
}