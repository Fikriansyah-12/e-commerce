// import type { TCustomer } from "~/types/Apiresponse";

import type { TCustomer } from "../types/apiResponse";

export type Customer = {
  id: number;
  name: string;
  email: string;
  role_id: number;
};
export function mapJsonToCustomer(json: TCustomer): Customer {
  return {
    id: json.id,
    name: json.name,
    email: json.email,
    role_id: json.role_id
  };
}