import { mergeArrays } from '../src/merge';

describe('MergeArrays', () => {
  const case1 = {
    input: {
      collection1: [1, 4, 9],
      collection2: [10, 5, 2], // descending
      collection3: [3, 6, 8],
    },
    expected: [1, 2, 3, 4, 5, 6, 8, 9, 10],
  };

  const emptyCase = {
    input: {
      collection1: [],
      collection2: [],
      collection3: [],
    },
    expected: [],
  };

  const oneArrayOnly = {
    input: {
      collection1: [],
      collection2: [3, 2, 1],
      collection3: [],
    },
    expected: [1, 2, 3],
  };

  const sortedInput = {
    input: {
      collection1: [1, 2],
      collection2: [3, 2],
      collection3: [4, 5],
    },
    expected: [1, 2, 2, 3, 4, 5],
  };

  const duplicates = {
    input: {
      collection1: [1, 2, 2],
      collection2: [2, 2, 1],
      collection3: [1, 2],
    },
    expected: [1, 1, 1, 2, 2, 2, 2, 2],
  };

  it('should merge and sort typical input', () => {
    const { collection1, collection2, collection3 } = case1.input;
    expect(mergeArrays(collection1, collection2, collection3)).toEqual(case1.expected);
  });

  it('should return empty array if all inputs are empty', () => {
    const { collection1, collection2, collection3 } = emptyCase.input;
    expect(mergeArrays(collection1, collection2, collection3)).toEqual(emptyCase.expected);
  });

  it('should handle one non-empty array', () => {
    const { collection1, collection2, collection3 } = oneArrayOnly.input;
    expect(mergeArrays(collection1, collection2, collection3)).toEqual(oneArrayOnly.expected);
  });

  it('should handle sorted input correctly', () => {
    const { collection1, collection2, collection3 } = sortedInput.input;
    expect(mergeArrays(collection1, collection2, collection3)).toEqual(sortedInput.expected);
  });

  it('should handle duplicate values', () => {
    const { collection1, collection2, collection3 } = duplicates.input;
    expect(mergeArrays(collection1, collection2, collection3)).toEqual(duplicates.expected);
  });
});
