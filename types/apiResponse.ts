export type TUser = {
  access_token: string,
  token_type: string,
  customers: TCustomer | null
}

export type TCustomer = {
  id: number,
  name: string,
  email: string,
  role_id: number,
}