import { Suspense, useState } from "react";
import { Authorized, NotAuthorized } from "./Routes";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(true);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {isAuthorized ? <Authorized /> : <NotAuthorized />}
      </Suspense>
    </div>
  );
}

export default App;
