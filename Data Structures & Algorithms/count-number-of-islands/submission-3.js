const DIRECTIONS = [[1,0], [-1, 0], [0, 1], [0, -1]]

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = new Set();
        let numberOfIslands = 0;


        const dfs = (r, c) => {
            const posKey = `${r},${c}`

            if (r < 0 || r >= ROWS || c < 0 || c >= COLS) {
                return;
            }

            if (grid[r][c] === "0") {
                return;
            }

            if (visited.has(posKey)) {
                return;
            }

            visited.add(posKey);

            for (const [dr, dc] of DIRECTIONS) {
                dfs(r + dr, c + dc);
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const posKey = `${r},${c}`

                if (grid[r][c] === "1" && !visited.has(posKey)) {
                    dfs(r, c)
                    numberOfIslands++;
                }
            }
        }

        return numberOfIslands
    }
}
