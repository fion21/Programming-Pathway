import "./App.css";

export default function MazeGrid() {

  let maze = [["start", "wall", "wall", "wall"],  
            ["wall", "wall", "wall", "wall"],
            ["wall", "path", "wall", "wall"],
            ["wall", "wall", "path ", "end"],
          ];

  return (
    <div className="maze-grid">
      <button className="maze-button">Refresh Maze</button>
    <div className={"maze"}>
      {maze.map((row, rowIndex) => (
          <div className="row">
            {row.map((cell, cellIndex) => (      
                <div className={`cell ${cell}`}></div>
              ))}
          </div>
            ))}
          </div>
          </div>
          )
        };
