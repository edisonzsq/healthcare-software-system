const express = require("express");
const app = express();
app.use(express.json());

//example of defining routes:
//Tianhao
//*******************routes import**********************
//const protectedRouters = require("./protected.routes");
//const generalRoutes = require("./general.routes");
//*******************routes use**********************
//app.use(protectedRouters);
//app.use(generalRoutes);
//---------------------------------------------------------------------------------------------------------

//Jeffery
//*******************routes import**********************
//***place here****
//*******************routes use**********************
//***place here****

//Regina
//*******************routes import**********************
const createCurrentVisit = require("../Routes/Regina/clinicCurrentVisit.route");
//*******************routes use**********************
app.use(createCurrentVisit);

//Sarah
//*******************routes import**********************
const createMC = require("../Routes/Sarah/mc.route");
//*******************routes use**********************
app.use(createMC);

//Shaun
//*******************routes import**********************
const employeeWorking = require("../Routes/Shaun/isEmployeeAtWork.route");
//*******************routes use**********************
app.use(employeeWorking);

//Tianhao
//*******************routes import**********************
const supervisorViewMC = require("./Tianhao/supervisor.viewmc.routes");
//*******************routes use**********************
app.use(supervisorViewMC);

module.exports = app;
