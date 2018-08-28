/*jslint node: true, nomen: true */
"use strict";

exports.createActions = function (options) {
    return {
        'action-stop-song': require('./action-stop-song').createAction(options)
        ,'action-start-song': require('./action-start-song').createAction(options)
        ,'action-change-song': require('./action-change-song').createAction(options)
    };
};
