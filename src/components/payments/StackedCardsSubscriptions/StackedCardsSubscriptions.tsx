"use client";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

import { User } from "next-auth";
import { Stripe } from "stripe";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const StackedCardsSubscriptions = (props: {
  user: User;
  products: Stripe.Product[];
}) => {
  const { user, products } = props;

  const [selected, setSelected] = useState(products[0]);
  return (
    <>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Subscription</RadioGroup.Label>
        <div className="space-y-4">
          {products.map((product) => (
            <RadioGroup.Option
              key={product.name}
              value={product}
              className={({ checked, active }) =>
                classNames(
                  checked ? "border-transparent" : "border-gray-300",
                  active ? "ring-2 ring-emerald-500" : "",
                  "relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none",
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <RadioGroup.Label
                        as="p"
                        className="font-medium text-gray-900"
                      >
                        {product.name}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="div"
                        className="text-gray-500"
                      >
                        <p className="sm:inline">{product.description}</p>
                      </RadioGroup.Description>
                    </div>
                  </div>
                  <RadioGroup.Description
                    as="div"
                    className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
                  >
                    <div className="font-medium text-gray-900">
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: product.default_price
                          ? // @ts-ignore
                            product.default_price.currency
                          : "USD",
                      }).format(
                        // @ts-ignore
                        (product.default_price?.unit_amount ?? 0) / 100,
                      )}
                    </div>
                    <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
                  </RadioGroup.Description>
                  <div
                    className={classNames(
                      active ? "border" : "border-2",
                      checked ? "border-emerald-500" : "border-transparent",
                      "absolute -inset-px rounded-lg pointer-events-none",
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      <input
        type="hidden"
        name="lookup_key"
        value={
          // @ts-ignore
          selected.default_price?.lookup_key
        }
      />
    </>
  );
};
