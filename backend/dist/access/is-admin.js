"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
var check_role_1 = require("./check-role");
var isAdmin = function (_a) {
    var user = _a.req.user;
    return (0, check_role_1.checkRole)('admin', user);
};
exports.isAdmin = isAdmin;
