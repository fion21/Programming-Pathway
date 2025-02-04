import { useState } from "react";
import "./App.css";

export default function MazeGrid() {
  let initialMaze = [
    ["start", "wall", "wall", "wall"],
    ["wall", "wall", "wall", "wall"],
    ["wall", "path", "wall", "wall"],
    ["wall", "wall", "path", "end"],
  ];

  const [maze, setMaze] = useState(initialMaze);

  function generateMaze(height, width) {
    let matrix = [];
    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        row.push("wall");
        
      }
      matrix.push(row);
    }

    const dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    function isCellValid(x, y) {
      return y >= 0 && x >= 0 && x < width && y < height && matrix[y][x] === "wall";
    }

    function carvePath(x, y) {
      matrix[y][x] = "path";

      const directions = dirs.sort(() => Math.random() - 0.5);

      for (let [dx, dy] of directions) {
        const nx = x + dx * 2;
        const ny = y + dy * 2;
        if (isCellValid(nx, ny)) {
          matrix[y + dy][x + dx] = "path";
          carvePath(nx, ny);
        }
      }
    }

    carvePath(1, 1);

    matrix[1][0] = "start";
    matrix[height - 2][width - 1] = "end";
    setMaze(matrix);
  }

  return (
    <div className="maze-grid">
      <button className="maze-button" onClick={() => generateMaze(10, 10)}>
        Refresh Maze
      </button>
      <div className="maze">
        {maze.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <div className={`cell ${cell}`} key={cellIndex}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
