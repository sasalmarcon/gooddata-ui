import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";

const insight = "aaD9iRNYMZe1";
const showTitle = "Jobs Completed on Time";
const style = { height: 400 };

function App() {
  return (
    <div style={style}>
      <InsightView insight={insight} showTitle={showTitle} />
    </div>
  );
}

export default App;
