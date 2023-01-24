import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./operateDB";

function App() {
  const [keyword, setKeyword] = useState(0);

  return (
    <div className="App">
      <div>
        <input
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </div>
      <button>添加</button>
      <button>删除</button>
    </div>
  );
}

export default App;
