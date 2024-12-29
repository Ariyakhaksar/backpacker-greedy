"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function backPackerGreedy(weights, values, capacity) {
    // محاسبه نسبت ارزش به وزن برای هر کالا
    const n = weights.length;
    const ratios = [];
    for (let i = 0; i < n; i++) {
        const ratio = values[i] / weights[i];
        ratios.push({ ratio, value: values[i], weight: weights[i] });
    }
    // مرتب‌سازی کالاها بر اساس نسبت ارزش به وزن از بیشترین به کمترین
    ratios.sort((a, b) => b.ratio - a.ratio);
    let totalValue = 0; // مقدار کل
    let remainingCapacity = capacity; // ظرفیت باقی‌مانده کوله‌پشتی
    for (let i = 0; i < n; i++) {
        const { value, weight, ratio } = ratios[i];
        if (weight <= remainingCapacity) {
            // اگر کالا را به‌طور کامل می‌توان انتخاب کرد
            totalValue += value;
            remainingCapacity -= weight;
        }
        else {
            // اگر تنها قسمتی از کالا را می‌توان انتخاب کرد
            totalValue += value * (remainingCapacity / weight);
            break; // دیگر چیزی برای انتخاب نداریم
        }
    }
    return totalValue;
}
exports.default = backPackerGreedy;
