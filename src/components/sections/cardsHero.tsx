import Image from "next/image";

export default function CardHero() {
    return (
        <div className="max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8 text-center text-black ">
            <h2 className="text-3xl lg:text-[50px] leading-tight lg:leading-[58px] font-semibold mb-4">
                We thought of everything<br className="hidden lg:block" /><div className="md:hidden"> </div>so you don&apos;t have to
            </h2>
            <p className="mb-4 text-sm lg:text-base">
                Every guardrail your AI Agent needs, built right into the infrastructure
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
                <div className="p-4 lg:p-6">
                    <Image src="https://www.paymanai.com/assets/images/fund-source.png" width={500} height={300} className="w-auto" alt="Fund Source" />
                    <h3 className="text-lg lg:text-xl font-semibold mt-4 mb-2 lg:mb-4">AI-First Design</h3>
                    <p className="text-sm lg:text-base text-gray-600">
                        Powerful features designed specifically for your AI Agents. Payman
                        facilitates fund flow so that AI never touches your main accounts.
                    </p>
                </div>
                <div className="p-4 lg:p-6">
                    <Image src="https://www.paymanai.com/assets/images/req-pay.png" width={500} height={300} className="w-auto" alt="Fund Source" />
                    <h3 className="text-lg lg:text-xl font-semibold mt-4 mb-2 lg:mb-4">Human Collaboration</h3>
                    <p className="text-sm lg:text-base text-gray-600">
                        Because even humans need oversight for payments. Customize limits
                        and alerts for your AI Agent spend.
                    </p>
                </div>
                <div className="p-4 lg:p-6">
                    <Image src="https://www.paymanai.com/assets/images/ent-pay.png" width={500} height={300} className="w-auto" alt="Fund Source" />
                    <h3 className="text-lg lg:text-xl font-semibold mt-4 mb-2 lg:mb-4">Built-in Compliance</h3>
                    <p className="text-sm lg:text-base text-gray-600">
                        Enterprise-grade compliance, transaction monitoring, and fraud
                        prevention built into every payment.
                    </p>
                </div>
            </div>
        </div>
    );
}