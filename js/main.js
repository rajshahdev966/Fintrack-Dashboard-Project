import { dashboardTransUpd, initDashboard } from "./pages/dashboard.js";
// import { initSettings } from "./pages/settings.js";
import { allTransUpdate, initTransPage } from "./pages/transcation.js";

const page = document.body.id;

switch (page) {
  case "dashboard-page":
    initDashboard();
    // dashboardTransUpd();
    break;

  case "transactions-page":
    initTransPage();
    // allTransUpdate();
    break;

  case "settings-page":
    initSettings();
    break;
}

console.log("Main Work!");
