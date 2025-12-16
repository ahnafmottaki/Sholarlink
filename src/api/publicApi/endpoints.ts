import type { Country } from "@/types/country";
import type { Builder } from ".";

interface CountryRes {
  success: true;
  message: string;
  data: Country[];
}
const endpoints = (builder: Builder<"publicApi">) => ({
  getCountries: builder.query<CountryRes, void>({
    query: () => ({ url: "/country" }),
  }),
});

export { endpoints };
