import { useContext } from "react";

import NavToast from "./components/NavToast/NavToast";
import PhoneContainer from "./components/Phone/PhoneContainer";
import DataContext from "./DataContext";

import NavBar from "./components/NavBar";
import ActiveTitle from "./ActiveTitle";
import NavigatePageBar from "./components/Home/NavigatePageBar";
import { Outlet } from "react-router-dom";
function App() {
  const { theme } = useContext(DataContext);
  console.log(theme);
  return (
    <div className="App" data-theme={theme}>
      <>
        <div className="mainContainer">
          <NavBar />
          <ActiveTitle />
          <Outlet />
          <NavigatePageBar />
        </div>
        <PhoneContainer />
        <NavToast />
      </>
    </div>
  );
}

export default App;
