import knapsackGreedy from "../components/backPackerGreedy"; // فرض بر این است که تابع در فایل دیگری به همین نام قرار دارد.

describe("Knapsack Greedy Algorithm", () => {
  it("should calculate the maximum value correctly for given weights and values", () => {
    const weights = [10, 40, 20, 30];
    const values = [60, 40, 100, 120];
    const capacity = 50;

    const result = knapsackGreedy(weights, values, capacity);

    expect(result).toBe(240); // انتظار داریم که بالاترین مقدار 240 باشد (مجموع کالاهای 3 و 4)
  });

  it("should handle an empty list of items", () => {
    const weights: number[] = [];
    const values: number[] = [];
    const capacity = 50;

    const result = knapsackGreedy(weights, values, capacity);

    expect(result).toBe(0); // وقتی هیچ کالایی وجود نداشته باشد، نتیجه باید صفر باشد
  });
});
