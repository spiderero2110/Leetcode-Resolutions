/**
 * Auctor: Luu Thien Vi
 */

const twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if (map.has(difference)) return [map.get(difference), i];
        map.set(nums[i], i);
    }

    return [];
};
