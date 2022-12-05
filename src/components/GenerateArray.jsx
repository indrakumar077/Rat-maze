import React from "react";
import { useState } from "react";
import { useRef } from "react";

function makeArray(d1, d2) {
  var arr = new Array(d1),
    i,
    l;
  for (i = 0, l = d2; i < l; i++) {
    arr[i] = new Array(d1);
  }
  return arr;
}


const GenerateArray = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const [arr, setArr] = useState();

  function fun(randome) {
    setArr(makeArray(+ref1.current.value, +ref2.current.value));
    console.log(arr, "indra");
    randome();
  }
  function randome() {
    let k = Math.floor(Math.random() * 2);
    
    arr.map((item)=>{    
        item.map((items)=>{   
            items = k;
        })
  
    })
  
    setArr(arr);
  }
  return (
    <div>
      <input type="text" ref={ref1} />
      <input type="text" ref={ref2} />
      <button
        onClick={() => {
          fun(randome);
        }}
      >
        submit
      </button>
    </div>
  );
};

export default GenerateArray;
