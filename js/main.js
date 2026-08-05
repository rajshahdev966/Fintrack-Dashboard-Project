import { dashboardTransUpd, initDashboard } from "./pages/dashboard.js";
import { allTransUpdate, initTransPage } from "./pages/transcation.js";

console.log("Main Work!");

const page = document.body.id;

switch (page) {
    case "dashboard-page":
        initDashboard();
        dashboardTransUpd();
        allTransUpdate();
        break;

    case "transactions-page":
        initTransPage();
        break;

    case "settings-page":
        initSettings();
        break;
}
