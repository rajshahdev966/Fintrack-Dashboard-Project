
import { navProfileUpdate } from "./components/navvbar.js";
import { dashboardTransUpd, initDashboard } from "./pages/dashboard.js";
import { initSettings, themeLogic, themeSwitch } from "./pages/settings.js";
import { allTransUpdate, initTransPage } from "./pages/transcation.js";

console.log("Main Work");


const page = document.body.id;

switch (page) {
  case "dashboard-page":
    initDashboard();
    themeLogic();
    navProfileUpdate();
    // dashboardTransUpd();
    break;
    
    case "transactions-page":
      initTransPage();
      themeLogic();
      // allTransUpdate();
      break;
      
      case "settings-page":
        initSettings();
        themeLogic();
    break;
}
console.log("Main Work!");
