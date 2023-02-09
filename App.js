import React, { useState } from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";
import MainSection from "./MainSection";


export default function App() {

  const [active, setActive] = useState("")
  return (
    <div>
      <Header />
      <div>
        <Sidenav  change={setActive}/>
      </div>
      <div>
        <MainSection  active = {active}/>
      </div>
    </div>
  );
}
