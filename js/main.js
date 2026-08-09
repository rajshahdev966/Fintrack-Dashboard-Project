
import { openNavOnMobile } from "./components/navbar.js";
import { dashboardTransUpd, initDashboard } from "./pages/dashboard.js";
import { initSettings, themeLogic, themeSwitch } from "./pages/settings.js";
import { allTransUpdate, initTransPage } from "./pages/transcation.js";

const page = document.body.id;

switch (page) {
  case "dashboard-page":
    initDashboard();
    themeLogic();
    openNavOnMobile();
    // dashboardTransUpd();
    break;
    
    case "transactions-page":
      initTransPage();
      themeLogic();
      openNavOnMobile();
      // allTransUpdate();
      break;
      
      case "settings-page":
        initSettings();
        themeLogic();
        openNavOnMobile();
    break;
}
