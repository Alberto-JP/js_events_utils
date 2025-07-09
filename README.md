# js_events_utils
import module to subscribe to multiple events on an element, KeyboardEvent, MouseEvent for now


Usage:

    <script type="module">
      import * as eventUtils from "utils.js";
    
      const eventTypes = ['click', 'mouseover', 'keydown'];

      function myFunction(e) {
        console.log(e);
      }

  //eventUtils.subscribirEventosById("buttonId", myFunction, ...eventTypes);
  //eventUtils.subscribirEventosByClass("buttonClass", myFunction, ...eventTypes);
  eventUtils.subscribirEventosBySelector("input", myFunction, 'click', 'mouseover', 'keydown');
  eventUtils.subscribirEventosBySelectorAll("input", myFunction, ...eventTypes);

