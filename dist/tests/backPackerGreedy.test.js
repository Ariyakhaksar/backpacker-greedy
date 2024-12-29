"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const backPackerGreedy_1 = __importDefault(require("../components/backPackerGreedy")); // فرض بر این است که تابع در فایل دیگری به همین نام قرار دارد.
describe("Knapsack Greedy Algorithm", () => {
    it("should calculate the maximum value correctly for given weights and values", () => {
        const weights = [10, 40, 20, 30];
        const values = [60, 40, 100, 120];
        const capacity = 50;
        const result = (0, backPackerGreedy_1.default)(weights, values, capacity);
        expect(result).toBe(240); // انتظار داریم که بالاترین مقدار 240 باشد (مجموع کالاهای 3 و 4)
    });
    it("should handle an empty list of items", () => {
        const weights = [];
        const values = [];
        const capacity = 50;
        const result = (0, backPackerGreedy_1.default)(weights, values, capacity);
        expect(result).toBe(0); // وقتی هیچ کالایی وجود نداشته باشد، نتیجه باید صفر باشد
    });
});
