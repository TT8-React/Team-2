import { Suspense } from "react";
//  context
import AuthProvider from "./Context/AuthContext";
import Spinner from "./Components/Spinner";

import { router as routes } from "./Routes/index";
import { useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routes);
  return (
    <div className="App">
      <AuthProvider>
        <Suspense fallback={<Spinner />}>{router}</Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
