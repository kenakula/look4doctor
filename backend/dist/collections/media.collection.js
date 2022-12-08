"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var access_1 = require("../access");
var MediaCollection = {
    slug: 'media',
    access: {
        read: function () { return true; },
        create: function () { return true; },
        update: access_1.isAdminOrCurrentUser,
        delete: access_1.isAdminOrCurrentUser,
    },
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
            {
                name: 'tablet',
                width: 1024,
                height: undefined,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [],
};
exports.default = MediaCollection;
