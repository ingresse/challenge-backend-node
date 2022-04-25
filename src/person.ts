export interface Person {
  id: string;
  name: string;
  document: string;
}

export const people: Person[] = [];

// ID e document não podem ser iguais
export function addPerson(obj: Person) {
  // TODO: Implement method
}

export function removePersonById(id: string) {
  // TODO: Implement method
}

export function getPersonById(id: string) {
  // TODO: Implement method
}

// Verificar se já existe documento no array, não deixar o id ser alterado
export function updatePerson(id: string, obj: Person) {
  // TODO: Implement method
}
