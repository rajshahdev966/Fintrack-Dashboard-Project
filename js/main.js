import { localStorTrans } from "./core/storage.js";
import { initDashboard } from "./pages/dashboard.js";
import { initTransPage } from "./pages/transcation.js";

console.log("Main Work!");
localStorTrans();

const page = document.body.id;

switch (page) {
    case "dashboard-page":
        initDashboard();
        break;

    case "transactions-page":
        initTransPage();
        break;

    case "settings-page":
        initSettings();
        break;
}
