export enum CustomerType {
   REGULAR = "Regular",
   GOLD = "Gold",
   PLATINUM = "Platinum"
}

export type Customer = {
   id: number,
   name: string,
   type: CustomerType

}