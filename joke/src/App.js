import { LeftComponent } from "./components/leftComponent";
import { RightAside } from "./components/rightComponent";
import React, { useEffect, useState } from "react";
function App() {
  const [page, setPage] = useState(1)

  const handleCount = (number)=>{
    setPage(number)
  }
  return (
    <div className="App">
      <LeftComponent onClick ={handleCount} count ={page}/>
      <RightAside page={page}/>
    </div>
  );
}

export default App;
