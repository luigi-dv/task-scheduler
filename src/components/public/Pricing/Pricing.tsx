import { CheckIcon } from "@heroicons/react/24/outline";
import { PRICING_TIERS } from "@/constants/pricing";

export const Pricing = () => {
  return (
    <div className="bg-gray-50 dark:bg-zinc-950">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Pricing
            </h2>
            <p className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              Flexible plans
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find your ideal plan with ease. Our flexible pricing options cater
              to individuals, small businesses, and enterprises alike. Enjoy
              powerful features and reliable support, all at a price that suits
              you.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 dark:bg-zinc-950 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-100 dark:bg-zinc-950" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="px-6 py-8 bg-white dark:bg-zinc-900 sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold text-gray-900 dark:text-white">
                      ${tier.priceMonthly}
                      <span className="ml-1 text-2xl font-medium text-gray-500 dark:text-gray-400">
                        /mo
                      </span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500 dark:text-gray-300">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 dark:bg-zinc-900 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-green-500 dark:text-green-400"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-gray-700 dark:text-gray-200">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
