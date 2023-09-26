import axios from "axios";

export function getStringLength(str: string): number {
  return str.length;
}

export function isPalindrome(str: string): boolean {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

export function sortArray(arr: number[]): number[] {
  return arr.sort();
}

export function sqrt(n: number): number {
  if (n < 0) {
    throw new Error("Cannot compute the square root of a negative number");
  }

  return Math.sqrt(n);
}

export function sumArray(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}

export function fibonacci(arr: number[]): number {
  if (arr.length < 2) {
    throw new Error("The array must contain at least two numbers");
  }

  return arr[arr.length - 1] + arr[arr.length - 2];
}
