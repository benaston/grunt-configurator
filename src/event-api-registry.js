;(function (eventApi) {
  'use strict';

  /**
   * A hash of the currently loaded APIs. Used to enable connect
   * command to be lazy and enable reference to api objects only
   * when they are loaded.
   */
  var EventApiRegistry = {

  };

  eventApi.EventApiRegistry = EventApiRegistry;
}(eventApi));