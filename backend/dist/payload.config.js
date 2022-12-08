"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var path_1 = __importDefault(require("path"));
var users_collection_1 = __importDefault(require("./collections/users.collection"));
var global_settings_1 = __importDefault(require("./globals/global-settings"));
var media_collection_1 = __importDefault(require("./collections/media.collection"));
exports.default = (0, config_1.buildConfig)({
    serverURL: 'http://localhost:3000',
    admin: {
        user: users_collection_1.default.slug,
    },
    globals: [global_settings_1.default],
    collections: [users_collection_1.default, media_collection_1.default],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, 'generated-schema.graphql'),
    },
});
