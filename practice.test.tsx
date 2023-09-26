import { describe, expect, it, test } from "vitest";
import { getStringLength } from "../practice";
import { isPalindrome } from "../practice";
import { sortArray } from "../practice";
import { sqrt } from "../practice";
import { sumArray } from "../practice";
// import { fetchUserData } from "../practice";
import { fibonacci } from "../practice";

test("should return the expected length", () => {
  // Arrange
  const string = "Hello World";
  //   Act
  const result = getStringLength(string);
  //   Assert
  expect(result).toBe(11);
});

test("should return true for palindromes", () => {
  // Arrange
  const string1 = "אביאלחישמךלמהמלךמשיחלאיבא";
  const string2 = "hello";
  //   Act
  const result1 = isPalindrome(string1);
  const result2 = isPalindrome(string2);
  expect(result1).toBe(true);
  expect(result2).toBe(false);
});

test("should return an array sorted in ascending order", () => {
  // Arrange
  const arr = [5, 4, 3, 1, 2];
  //   Act
  const result = sortArray(arr);
  //   Assert
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

describe(sqrt, () => {
  it("should return the correct value for any number", () => {
    // Arrange
    const number = 25;
    //   Act
    const result = sqrt(number);
    //   Assert
    expect(result).toBe(5);
  });
  it("should throw an error for a negative number", () => {
    // Arrange
    const number = -25;

    //   Act
    const result = () => sqrt(number);

    //   Assert
    expect(result).toThrow(
      /Cannot compute the square root of a negative number/
    );
  });
});

describe(sumArray, () => {
  it("should return the correct sum", () => {
    // Arrange
    const arr = [4, 3, 2];
    //   Act
    const result = sumArray(arr);
    //   Assert
    expect(result).toBe(9);
  });
  it("should return a sum greater than 4", () => {
    // Arrange
    const arr = [4, 3, 2];

    //   Act
    const result = sumArray(arr);

    //   Assert
    expect(result).toBeGreaterThan(4);
  });
});

describe("fibonacci", () => {
  it("should return the next fibonacci number", () => {
    // Arrange
    const arr = [1, 1, 2, 3, 5, 8, 13];
    //   Act
    const result = fibonacci(arr);
    //   Assert
    expect(result).toBe(21);
  });
  it("should throw an error if the array is not a fibonacci sequence", () => {
    const arr = [1, 2, 3, 4, 5];

    try {
      fibonacci(arr);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("The array must contain at least two numbers");
    }
  });
});
