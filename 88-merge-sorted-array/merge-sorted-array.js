const merge = function(nums1, m, nums2, n) {
    // Copy the first m elements of nums1 to a temporary array.
    const temp = nums1.slice(0, m);
    let i = 0; // Pointer for temp array (original nums1)
    let j = 0; // Pointer for nums2
    let k = 0; // Pointer for nums1 (destination)

    // Merge the two arrays back into nums1.
    while (i < m && j < n) {
        if (temp[i] <= nums2[j]) {
            nums1[k] = temp[i];
            i++;
        } else {
            nums1[k] = nums2[j];
            j++;
        }
        k++;
    }

    // If there are any remaining elements in temp, copy them.
    while (i < m) {
        nums1[k] = temp[i];
        i++;
        k++;
    }

    // If there are any remaining elements in nums2, copy them.
    while (j < n) {
        nums1[k] = nums2[j];
        j++;
        k++;
    }
};
