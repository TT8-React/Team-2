import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Report from "./Pages/Report";




function App() {
  return (
    <div className="App">
      <SideBar/>
      <Main>
        <Report/> 
      </Main>
      <Navbar />
    </div>
  );
}

export default App;
