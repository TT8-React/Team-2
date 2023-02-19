import { Suspense } from "react";
import AuthProvider from "./Context/AuthContext";
import useAuth from "./hooks/useAuth";
import { Authorized, NotAuthorized } from "./Routes";

function App() {
  const { isAuthorized } = useAuth();

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <AuthProvider>
          {isAuthorized ? <Authorized /> : <NotAuthorized />}
        </AuthProvider>
      </Suspense>
    </div>
  );
}

export default App;
