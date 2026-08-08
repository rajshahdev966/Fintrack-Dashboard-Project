
import { dashboardTransUpd, initDashboard } from "./pages/dashboard.js";
import { initSettings, themeSwitch } from "./pages/settings.js";
import { allTransUpdate, initTransPage } from "./pages/transcation.js";

console.log("Main Work");


const page = document.body.id;

switch (page) {
  case "dashboard-page":
    initDashboard();
    themeSwitch();
    // dashboardTransUpd();
    break;

  case "transactions-page":
    initTransPage();
    themeSwitch();
    // allTransUpdate();
    break;

  case "settings-page":
    initSettings();
    themeSwitch();
    break;
}

console.log("Main Work!");
