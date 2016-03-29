var controllers = require("./controllers");
var mid = require("./middleware/index.js");

var router = function(app) {
	app.get("/login", mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
	app.post("/login", mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
	app.get("/signup", mid.requiresSecure, mid.requiresLogout, controllers.Account.signupPage);
	app.post("/signup", mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
	app.get("/logout", mid.requiresLogin, controllers.Account.logout);
	app.get("/maker", mid.requiresLogin, controllers.Domo.makerPage);
	app.post("/maker", mid.requiresLogin, controllers.Domo.make);
	app.get("/", mid.requresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;