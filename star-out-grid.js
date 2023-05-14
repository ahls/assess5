function starOutGrid(grid) {
    //look for the stars
    starsX = new Set()
    starsY = new Set()
    for(let y = 0; y<grid.length;y++)
    {
        let row = grid[y];
        for(let x = 0; x < row.length;x++)
        {
            if(row[x] == '*')
            {
                starsX.add(x)
                starsY.add(y)
            }
        }
    }

    for(let y = 0; y<grid.length;y++)
    {
        let row = grid[y];
        let isStarY = starsY.has(y);
        for(let x = 0; x < row.length;x++)
        {
            if(isStarY || starsX.has(x))
            {
                row[x]= '*';
            }
        }
    }
    return grid;
}
