import { mergeArrays } from '../src/merge';

describe('mergeArrays', () => {
  it('should merge and sort typical input', () => {
    const input = {
      collection1: [1, 4, 9],
      collection2: [10, 5, 2], // descending
      collection3: [3, 6, 8],
    };
    const expected = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    const { collection1, collection2, collection3 } = input;
    expect(mergeArrays(collection1, collection2, collection3)).toEqual(
      expected,
    );
  });

  it('should return empty array if all inputs are empty', () => {
    const input = {
      collection1: [],
      collection2: [],
      collection3: [],
    };
    const expected: number[] = [];
    const { collection1, collection2, collection3 } = input;
    expect(mergeArrays(collection1, collection2, collection3)).toEqual(
      expected,
    );
  });

  it('should handle one non-empty array', () => {
    const input = {
      collection1: [],
      collection2: [3, 2, 1],
      collection3: [],
    };
    const expected = [1, 2, 3];
    const { collection1, collection2, collection3 } = input;
    expect(mergeArrays(collection1, collection2, collection3)).toEqual(
      expected,
    );
  });

  it('should handle sorted input correctly', () => {
    const input = {
      collection1: [1, 2],
      collection2: [3, 2],
      collection3: [4, 5],
    };
    const expected = [1, 2, 2, 3, 4, 5];
    const { collection1, collection2, collection3 } = input;
    expect(mergeArrays(collection1, collection2, collection3)).toEqual(
      expected,
    );
  });

  it('should handle duplicate values', () => {
    const input = {
      collection1: [1, 2, 2],
      collection2: [2, 2, 1],
      collection3: [1, 2],
    };
    const expected = [1, 1, 1, 2, 2, 2, 2, 2];
    const { collection1, collection2, collection3 } = input;
    expect(mergeArrays(collection1, collection2, collection3)).toEqual(
      expected,
    );
  });

  it('should correctly merge and sort three sorted arrays of size 50', () => {
    // Generate and sort the collections according to their specified order
    const collection1 = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 1000),
    ).sort((a, b) => a - b); // Ascending
    const collection2 = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 1000),
    ).sort((a, b) => b - a); // Descending
    const collection3 = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 1000),
    ).sort((a, b) => a - b); // Ascending

    //Combine and sorted
    const expected = collection1.concat(collection2, collection3);
    expected.sort((a, b) => a - b);

    expect(mergeArrays(collection1, collection2, collection3)).toEqual(
      expected,
    );
  });
});
