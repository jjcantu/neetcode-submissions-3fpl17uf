const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]]

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = new Set();
        let maxArea = 0;
        
        const dfs = (r, c) => {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS) {
                return 0;
            }

            if (grid[r][c] === 0) {
                return 0;
            }

            const posKey = `${r},${c}`
            if (visited.has(posKey)) {
                return 0;
            }

            visited.add(posKey)

            let area = 1

            for (const [dr, dc] of DIRECTIONS) {
                area += dfs(dr + r, dc + c)
            }

            return area
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const posKey = `${r},${c}`

                if (grid[r][c] === 1 && !visited.has(posKey)) {
                    const areaOfIsland = dfs(r, c)
                    maxArea = Math.max(maxArea, areaOfIsland)
                }
            }
        }

        return maxArea;
    }
}
