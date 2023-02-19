import { Suspense } from "react";
import AuthProvider from "./Context/AuthContext";
import { router as routes } from "./Routes/index";
import { useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routes);
  return (
    <div className="App">
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          {router}
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
