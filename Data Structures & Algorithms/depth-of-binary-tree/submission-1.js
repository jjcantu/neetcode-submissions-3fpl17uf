/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;

        const leftPath = this.maxDepth(root.left);
        const rightPath = this.maxDepth(root.right);
        const deepestPath = Math.max(leftPath, rightPath);

        return deepestPath + 1;
    }
}
