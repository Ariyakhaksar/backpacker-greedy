import backPackerGreedy from "./components/backPackerGreedy";

const weights = [100, 150, 200];
const values = [60, 40, 100];
const capacity = 50;

console.log(backPackerGreedy(weights, values, capacity));
