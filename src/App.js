import { useState } from "react";
import { Authorized, NotAuthorized } from "./Routes";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(true);

  return (
    <div className="App">
      {isAuthorized ? <Authorized /> : <NotAuthorized />}
    </div>
  );
}

export default App;
