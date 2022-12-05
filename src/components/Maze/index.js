import React from "react";
import "./maze.css";

const Maze = ({ arr, sol, problem }) => {
  console.log(arr);
  return (
    <div>
      <div>
        {arr?.map((item, index) => {
          return (
            <div className="row">
              {item?.map((block, number) => {
                return (
                  <div
                    className="block"
                    style={{
                      backgroundColor:
                        block === 1 && sol
                          ? "green"
                          : block === 1 && problem
                          ? "white"
                          : block === 0 && problem
                          ? "red"
                          : "white",
                    }}
                  >
                    {block}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Maze;
