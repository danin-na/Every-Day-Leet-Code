/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = function(nums1, m, nums2, n) {

    let sort = new Array(m+n).fill(0);
    let sort_index = 0
    let i = 0, j = 0;
    
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            sort[sort_index] = nums1[i];
            i++;
        } else {
            sort[sort_index] = nums2[j];
            j++;
        }
        sort_index++;
    }

    // Append any remaining elements from nums1
    while (i < m) {
        sort[sort_index] = nums1[i];
        i++;
        sort_index++;
    }

    // Append any remaining elements from nums2
    while (j < n) {
        sort[sort_index] = nums2[j];
        j++;
        sort_index++;
    }

    console.log(sort)

    // Copy sorted array back into nums1 in-place
    for (let k = 0; k < m + n; k++) {
        nums1[k] = sort[k];
    }
};