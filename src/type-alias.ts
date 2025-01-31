export type ID = string | number;

export type Department = {
   id: ID,
   name: string,
   isValidated: true
}

export type Person = {
   id: ID,
   name: string,
   age: number,
   address?: string,
   department: Department
}