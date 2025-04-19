export interface merge {
  merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[],
  ): number[];
}

// O(N) algorithm!
// Merges arr1 (ascending) and arr2 (descending), then with arr3 (ascending)
export const mergeArrays: merge['merge'] = (arr1, arr2, arr3) => {
  // A simpler approach would be to just reverse arr2, but that would cost another O(n) time to reverse
  const tmp = mergeAscendingDescending(arr1, arr2);
  return mergeTwoSorted(tmp, arr3);
};

// Helper function to merge an ascending array with a descending array into an ascending array
const mergeAscendingDescending = (arr1: number[], arr2: number[]): number[] => {
  let i = 0;
  let j = arr2.length - 1;
  const merged: number[] = [];

  while (i < arr1.length && j >= 0) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i++]);
    } else {
      merged.push(arr2[j--]);
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    merged.push(arr1[i++]);
  }

  // Add remaining elements from arr2 (traversed from j down to 0, which is ascending)
  while (j >= 0) {
    merged.push(arr2[j--]);
  }

  return merged;
};

// Helper function to merge two ascending sorted arrays
const mergeTwoSorted = (arr1: number[], arr2: number[]): number[] => {
  let i = 0,
    j = 0;
  const merged: number[] = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i++]);
    } else {
      merged.push(arr2[j++]);
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    merged.push(arr1[i++]);
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    merged.push(arr2[j++]);
  }

  return merged;
};
