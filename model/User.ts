import type { TUser } from "../types/apiResponse";
import { mapJsonToCustomer, type Customer } from "./Customer";

export type User = {
  access_token: string;
  token_type: string;
  customer: Customer | null;
};
export function mapJsonToUser(json: TUser): User {
  return {
    access_token: json.access_token,
    token_type: json.token_type,
    customer: json.customers
      ? mapJsonToCustomer(json.customers)
      : null,
  };
}
