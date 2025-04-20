// components/Footer.tsx
import robinhood from "/robinhood.svg"
const Footer = () => {
    return (
        <footer className="bg-primary h-full">
            <div className="bg-primary text-black px-6 py-10 flex gap-18">

                <div className="max-w-1/2 grid grid-cols-1 md:grid-cols-3 text-sm p-2">
                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-base mb-3">Product</h3>
                        <ul className="space-y-3 text-base font-light">
                            {[
                                "Invest", "Strategies", "Trading", "Retirement", "Gold", "Crypto",
                                "Legend", "Options", "Futures", "Banking", "Credit Card", "Learn", "Snacks"
                            ].map((item) => (
                                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-base mb-3">Company</h3>
                        <ul className="space-y-3 text-base font-light">
                            {[
                                "About us", "Blog", "Partner With Us", "Affiliates", "Press", "Careers",
                                "Commitments", "Investor Relations", "Support", "ESG", "Podcast",
                                "Investor Index", "Robinhood Merch"
                            ].map((item) => (
                                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Regulatory */}
                    <div>
                        <h3 className="font-semibold text-base mb-3">Legal & Regulatory</h3>
                        <ul className="space-y-3 font-light text-base mt-2">
                            {[
                                "Terms & Conditions",
                                "Disclosures",
                                "Robinhood Financial Entities US Online Privacy Statement",
                                "Robinhood Markets US Online Privacy Statement",
                                "Law Enforcement Requests"
                            ].map((item) => (
                                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
                            ))}
                            <li key="Your Privacy Choices">
                                <a href="#" className="hover:underline inline-flex items-center gap-2">
                                    Your Privacy Choices
                                    <img
                                        src="https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/privacyoptions__86f2eb97cc1f3909c12e4512de9e267215d94ac5aaee9393d0f007f18c34e8ba.svg"
                                        alt="Privacy Options"
                                        className="h-3.5"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Legal Text Block */}
                <div className="max-w-1/2 space-y-6 text-xs p-2">
                    <p className="font-semibold text-base">All investing involves risk.</p>
                    <p className="text-base font-light"><strong className="font-semibold">Brokerage services</strong> are offered through Robinhood Financial LLC, (“RHF”) a registered broker dealer (member <a href="#" className="underline">SIPC</a>), and clearing services through Robinhood Securities, LLC, (“RHS”) a registered broker dealer (member <a href="#" className="underline">SIPC</a>)</p>
                    <p className="text-base font-light"><strong className="font-semibold">Portfolio Management</strong> offered through Robinhood Asset Management (“Robinhood Strategies” or “RAM”), an SEC-registered investment advisor. For additional information about Robinhood Strategies, including about services, fees, risks, and conflicts of interest, please see our firm’s brochure.</p>
                    <p className="text-base font-light"><strong className="font-semibold">Futures and cleared swaps trading</strong> is offered by Robinhood Derivatives, LLC, (“RHD”) a registered futures commission merchant with the Commodity Futures Trading Commission (CFTC) and a Member of the National Futures Association (NFA). RHD is not FDIC insured or SIPC protected.</p>
                    <p className="text-base font-light"><strong className="font-semibold">Cryptocurrency services</strong> are offered through an account with Robinhood Crypto, LLC (“RHC”) (NMLS ID: 1702840). Robinhood Crypto is licensed to engage in virtual currency business activity by the New York State Department of Financial Services. Review a list of RHC's licenses for more information. Cryptocurrency held through Robinhood Crypto is not FDIC insured or SIPC protected.</p>
                    <p className="text-base font-light"><strong className="font-semibold">The Robinhood spending account</strong> is offered through Robinhood Money, LLC (“RHY”) (NMLS ID: 1990968), a licensed money transmitter. Review a list of our licenses for more information.</p>
                    <p className="text-base font-light"><strong className="font-semibold">The Robinhood Cash Card</strong> is a prepaid card issued by Sutton Bank, Member FDIC, pursuant to a license from Mastercard® International Incorporated. Mastercard and the circles design are registered trademarks of Mastercard International Incorporated.</p>
                    <p className="text-base font-light"><strong className="font-semibold">Robinhood Gold Card</strong>  is subject to credit approval and underwriting. Robinhood Gold Card is offered by Robinhood Credit, Inc., and is issued by Coastal Community Bank, pursuant to a license from Visa U.S.A. Inc. Robinhood Credit, Inc. (“RCT”), is a financial technology company, not a bank.</p>
                    <p className="text-base font-light"><strong className="font-semibold">Robinhood Gold</strong> is a subscription-based membership program of premium services offered through Robinhood Gold, LLC (“RHG”).</p>
                    <p className="text-base font-light">RHY is not a member of FINRA, and products are not subject to SIPC protection, but funds held in the Robinhood spending account and Robinhood Cash Card account may be eligible for FDIC pass-through insurance (review the Robinhood Cash Card Agreement and the Robinhood Spending Account Agreement).</p>
                    <p className="text-base font-light">Options trading entails significant risk and is not appropriate for all customers. Customers must read and understand the Characteristics and Risks of Standardized Options before engaging in any options trading strategies. Options transactions are often complex and may involve the potential of losing the entire investment in a relatively short period of time. Certain complex options strategies carry additional risk, including the potential for losses that may exceed the original investment amount.</p>
                    <p className="text-base font-light">RO 4340406</p>
                    <p className="text-base font-light">Robinhood, 85 Willow Road, Menlo Park, CA 94025. © 2025 Robinhood. All rights reserved.</p>
                </div>
            </div>
            <img src={robinhood} alt="Robinhood Logo" />
        </footer>
    );
};

export default Footer;
