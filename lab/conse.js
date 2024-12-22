function transformSqrt(x) {
    if (x < 0) {
        return { original: x, squareRoot: 'NaN' }; // Return NaN for negative numbers
    } else {
        return { original: x, squareRoot: Math.sqrt(x) };
    }
}

// Example usage:
console.log(transformSqrt(9));  // Output: { original: 9, squareRoot: 3 }
console.log(transformSqrt(25)); // Output: { original: 25, squareRoot: 5 }
console.log(transformSqrt(-4)); // Output: { original: -4, squareRoot: 'NaN' }
