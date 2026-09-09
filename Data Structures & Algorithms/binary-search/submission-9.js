class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            const middleIdx = Math.floor(( right + left ) / 2)

            if (nums[middleIdx] < target) {
                left = middleIdx + 1;
            } else if (nums[middleIdx] > target) {
                right = middleIdx - 1;
            } else {
                return middleIdx
            }
        }

        return -1;
    }
}
