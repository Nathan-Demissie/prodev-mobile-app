import { PropertyListingProps } from "@/interfaces";

export const FILTERS: string[] = [
  "Mansion",
  "Apartment",
  "Villa",
  "Studio",
  "Cottage",
  "Penthouse",
];

export const SAMPLE_DATA: PropertyListingProps[] = [
  {
    propertyName: "Luxury Beachfront Villa",
    rate: 4.8,
    currency: "USD",
    amount: 350,
    location: {
      street: "Ocean Drive",
      city: "Miami",
      country: "USA",
    },
    favorite: true,
    image: "@/assets/images/mansion.png",
  },
  {
    propertyName: "Modern City Apartment",
    rate: 4.5,
    currency: "USD",
    amount: 120,
    location: {
      street: "5th Avenue",
      city: "New York",
      country: "USA",
    },
    favorite: false,
    image: "@/assets/images/apartment.png",
  },
  {
    propertyName: "Cozy Countryside Cottage",
    rate: 4.2,
    currency: "USD",
    amount: 80,
    location: {
      street: "Greenfield Lane",
      city: "Oxford",
      country: "UK",
    },
    favorite: false,
    image: "@/assets/images/cottage.png",
  },
];
