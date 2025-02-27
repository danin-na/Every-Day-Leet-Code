const merge = function(nums1, m, nums2, n) {
  let i = m - 1;          // Pointer for the end of the valid part of nums1
  let j = n - 1;          // Pointer for the end of nums2
  let k = m + n - 1;      // Pointer for the end of nums1 (full array)

  // While both arrays have elements to compare
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If there are any remaining elements in nums2, copy them over.
  // (No need to do this for nums1 because they are already in place.)
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};
