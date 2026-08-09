import { userName } from "../core/storage.js";

export const navProfileUpdate = ()=>{
    const profileIcon = document.querySelector("#profile-icon");
    profileIcon.innerHTML = `${(userName.split(" ")[0] ?? "").charAt(0)}${(userName.split(" ")[1] ?? "").charAt(0) ?? ""}`



}