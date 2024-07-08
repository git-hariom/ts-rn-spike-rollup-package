import React from "react";
import "./App.css";
import ButtonV1 from "./library/components/Button";
import ButtonV2 from "./library/v2/components/Button";
import ButtonV3 from "./library/v3/components/Button";

function App() {
  return (
    <div className="App">
      <ButtonV1>Button V1 test</ButtonV1>
      <ButtonV2>Button V2 test</ButtonV2>
      <ButtonV3>Button V3 test</ButtonV3>
    </div>
  );
}

export default App;
