import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  // useEffect(() => {
  //   const className = "dark";
  //   const bodyClass = window.document.body.classList;

  //   true ? bodyClass.add(className) : bodyClass.remove(className);
  // }, []);
  return (
    <div className="flex">
      <Sidebar />
    </div>
  );
}

export default App;
