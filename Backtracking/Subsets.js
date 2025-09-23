/**
 * Given an integer array nums of unique elements, return all possible subsets that can be made 
 * from the elements in nums. The solution set must not contain duplicate subsets, and the subsets can be returned in any order.
 */
function subsets(nums) {
    const result = [];
    const backtrack = (start, path) => {
        result.push(path);
        for (let i = start; i < nums.length; i++) {
            backtrack(i + 1, path.concat(nums[i]));
        }
    };
    backtrack(0, []);
    return result;
}

// Example usage:
console.log(subsets([1, 2, 3])); // Output: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
