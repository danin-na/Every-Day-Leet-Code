const merge = function(nums1, m, nums2, n) {
    let i = m - 1;          // Pointer for nums1's elements
    let j = n - 1;          // Pointer for nums2's elements
    let k = m + n - 1;      // Pointer for the last position in nums1

    // Iterate until all elements from nums2 are placed in nums1
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};
