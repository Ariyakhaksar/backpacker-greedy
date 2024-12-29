"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const backPackerGreedy_1 = __importDefault(require("./components/backPackerGreedy"));
const weights = [100, 150, 200];
const values = [60, 40, 100];
const capacity = 50;
console.log((0, backPackerGreedy_1.default)(weights, values, capacity));
