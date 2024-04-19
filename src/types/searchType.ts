export enum PropertyType {
  RESIDENTIAL = "RESIDENTIAL",
  CONDO = "CONDO"
}

export default interface SearchType {
  location: string;
  propertyType: PropertyType;
  minPrice: string;
  maxPrice: string
}