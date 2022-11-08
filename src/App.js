import { Home } from "./Home";
import Login from "./Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
function App() {
  const [user] = useAuthState(auth);

  return <div className="App">{user ? <Home user={user} /> : <Login />}</div>;
}

export default App;
