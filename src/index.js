import {run} from "./app/app";
import "./main.css";
import {AlertService} from "./app/alert.service";
import {ComponentService} from "./app/component.service";

const alertService = new AlertService();
const componentService = new ComponentService();

console.log("hi hello jkhds");

run(alertService, componentService);