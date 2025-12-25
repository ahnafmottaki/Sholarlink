import type { Country } from "@/types/country";
import type { Builder } from "../baseApi";

interface CountryRes {
  success: true;
  message: string;
  data: Country[];
}
const publicApiEndpoints = (builder: Builder<"publicApi">) => ({
  getCountries: builder.query<CountryRes, void>({
    query: () => ({ url: "/country" }),
  }),
});

export { publicApiEndpoints };
