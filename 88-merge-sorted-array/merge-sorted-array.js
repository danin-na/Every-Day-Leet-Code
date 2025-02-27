const merge = function(nums1, m, nums2, n) {
    let i = m - 1;       // Last element in the initial part of nums1
    let j = n - 1;       // Last element in nums2
    let k = m + n - 1;   // Last position in nums1

    // Merge nums2 into nums1 starting from the end
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
