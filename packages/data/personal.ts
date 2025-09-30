import { Address, Basics } from "./schema";

export const personalAddress: Address = {
  street: "Welfenstraße 5",
  city: "Meckenbeuren",
  zip: "88074",
  country: "DE",
  state: "Baden-Württemberg",
};

export const personalBasics: Basics = {
  name: "Joseph William Dewdney",
  email: "joseph.dewdney@gmail.com",
  phone: "+49 170 2877898",
  address: personalAddress,
};
