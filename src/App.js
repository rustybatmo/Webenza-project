// import logo from "./logo.svg";
import "./App.css";
import Sidenav from "./components/sidenav/sidenav.component";
import { BrowserRouter, Route } from "react-router-dom";
import Content from "./content/content";
import HomepageContent from "./components/content/HomepageContent";
import DashboardContent from "./components/content/DashboardContent";
import FriendsContent from "./components/content/FriendsContent";
import SettingsContent from "./components/content/SettingsContent";
import InformationContent from "./components/content/informationContent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidenav />
        <Route exact path="/home-page" component={HomepageContent} />
        <Route path="/dashboard" component={DashboardContent} />
        <Route path="/friends" component={FriendsContent} />
        <Route path="/settings" component={SettingsContent} />
        <Route path="/item" component={InformationContent} />
      </div>
    </BrowserRouter>
  );
}

export default App;
