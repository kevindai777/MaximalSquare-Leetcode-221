//Objective is to find the biggest area of a square of 1's in the 2-D array.

let grid = 
[[1,0,1,0,0],
 [1,0,1,1,1],
 [1,1,1,1,1],
 [1,0,0,1,0]]


//O(nm) solution that uses dynamic programming to find the largest square.

let max = 0
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == 1) {
            if (i > 0 && j > 0) {
                grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1], grid[i - 1][j - 1]) + 1
            }
            max = Math.max(max, grid[i][j])
        }
    }
}

return max ** 2