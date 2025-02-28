/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    const n = nums.length

    if (n == 0)
    {
        return 0
    }

    let insertIndex =  1
    let i = 1

    for (i ; i < n; i++)
    {
        if(nums[i-1] != nums[i])
        {
            nums[insertIndex] = nums[i]
            insertIndex++
        }
    }

    return insertIndex

    
    
};