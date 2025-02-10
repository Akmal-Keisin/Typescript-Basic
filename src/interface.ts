export interface Seller {
   id: number,
   name: string,
   address?: string,
   readonly nib?: string,
   readonly npwp?: string
}

export interface Transportation {
   id: string,
   name: string,
   transportationNumber: number,
   engineStart: boolean
}

export interface GroundTransportation extends Transportation {
   tiresTotal: number
}