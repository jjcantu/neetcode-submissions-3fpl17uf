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
    diameterOfBinaryTree(root) {
        let result = [0];
        this.dfs(root, result)

        return result[0]
    }

    dfs (root, res) {
        if (!root) return 0;

        const leftPath = this.dfs(root.left, res)
        const rightPath = this.dfs(root.right, res);
        res[0] = Math.max(res, leftPath + rightPath)

        return 1 + Math.max(leftPath, rightPath);
    }
}
