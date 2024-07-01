import React, { useState, useEffect, ChangeEvent } from "react";
import countriesData from "./countries.json";
import { Country } from "@/types/Country";

interface CountrySelectProps {
  language: keyof Omit<Country, "id" | "alpha2" | "alpha3">;
  countryValue: string;
  setCountryValue: (value: string) => void;
}

export const CountrySelect = (props: CountrySelectProps) => {
  const { language, countryValue, setCountryValue } = props;

  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountryValue(e.target.value);
  };

  return (
    <select
      onChange={handleCountryChange}
      name="country"
      value={countryValue}
      className="input-standard"
    >
      {countries.map((country) => (
        <option key={country.alpha2} value={country.alpha2}>
          {country[language] || country["en"]}
        </option>
      ))}
    </select>
  );
};
