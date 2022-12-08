"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = void 0;
var checkRole = function (checkFor, user) {
    if (user) {
        return user.role === checkFor;
    }
    return false;
};
exports.checkRole = checkRole;
