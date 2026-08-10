
import { openNavOnMobile } from "./components/navbar.js";
import { dashboardTransUpd, initDashboard } from "./pages/dashboard.js";
import { initSettings, themeLogic, themeSwitch } from "./pages/settings.js";
import { allTransUpdate, delTrans, editTrans, initTransPage, updateAfterTranscation } from "./pages/transcation.js";

const page = document.body.id;

switch (page) {
  case "dashboard-page":
    initDashboard();
    break;
    
    case "transactions-page":
      initTransPage();
      openNavOnMobile();
      // allTransUpdate();
      break;
      
      case "settings-page":
        initSettings();
        openNavOnMobile();
    break;
}


window.delTrans = delTrans;
window.editTrans = editTrans;
window.updateAfterTranscation = updateAfterTranscation;
