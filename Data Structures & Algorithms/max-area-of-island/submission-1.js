class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if (!grid || !grid.length) return 0;
        const directions = [[0, -1], [0, 1], [1, 0], [-1, 0]]
        const visited = new Set()
        const rows = grid.length;
        const cols = grid[0].length;

        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= rows || c >= cols) return 0
            const key = `${r},${c}`
            if (grid[r][c] === 0 || visited.has(key)) return 0
            visited.add(key)

            let area = 1
            for (const [dr, dc] of directions) {
                area += dfs(r + dr, c + dc)
            }

            return area;
        }

        let maxArea = 0
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1 && !visited.has(`${r},${c}`)) {
                    const area = dfs(r, c)
                    maxArea = Math.max(maxArea, area)
                }
            }
        }

        return maxArea;
    }
}
