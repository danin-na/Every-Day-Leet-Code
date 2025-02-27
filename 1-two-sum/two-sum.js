var twoSum = function(nums, target) {

    // o(n)

    let tracker = Object.create(null);

    
    for (let i = 0; i < nums.length; i++) 
    {
        let complement = target - nums[i];

        if (tracker[complement] !== undefined) 
        {
            return [tracker[complement], i];
        }
        
        tracker[nums[i]] = i;
    }
};
