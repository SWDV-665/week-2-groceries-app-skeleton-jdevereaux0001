class Grocery {
  name: string;
  quantity: integer;
  dept: string;
  item: string;
}
const arr: { item: string; quantity: number }[] = [
  { name: 'Milk', quantity: 10 },
  { name: 'Bread', quantity: 20 },
  { name: 'Eggs', quantity: 30 } ]

const obj = { name: 'Butter', quantity: 40 };
arr.push(obj);
console.log(arr)
