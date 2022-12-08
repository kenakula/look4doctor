"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminOrCurrentUser = void 0;
var check_role_1 = require("./check-role");
var isAdminOrCurrentUser = function (_a) {
    var user = _a.req.user;
    if ((0, check_role_1.checkRole)('admin', user)) {
        return true;
    }
    if (user) {
        return {
            email: user.email,
        };
    }
    return false;
};
exports.isAdminOrCurrentUser = isAdminOrCurrentUser;
