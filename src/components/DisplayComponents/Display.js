import React from "react";
  let np = [];
const Display = function(props) {
for(let i =0;i<1;i++){
  np.push(props.display);
  console.log(np)
}
    return ( <div className="display">{np}</div>
);
};

export default Display;
