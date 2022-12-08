"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var payload_1 = __importDefault(require("payload"));
require('dotenv').config();
var app = (0, express_1.default)();
// Redirect root to Admin panel
app.get('/', function (_, res) {
    res.redirect('/admin');
});
// Initialize Payload
payload_1.default.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: function () {
        payload_1.default.logger.info("Payload Admin URL: ".concat(payload_1.default.getAdminURL()));
    },
});
// Add your own express routes here
app.listen(3000);
