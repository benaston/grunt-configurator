;(function (root) {
  'use strict';

  var eventApi = {};

@@event-api-registry

@@event-api

@@event-api-connection-coordinator

  if ((typeof exports === 'object') && module) {
    module.exports = eventApi; // CommonJS
  } else if ((typeof define === 'function') && define.amd) {
    define(function() { return eventApi; }); // AMD
  } else {
    root.eventApi = eventApi; // Browser
  }

}(window || global));

