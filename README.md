# js_events_utils
import module to subscribe to multiple events on an element, KeyboardEvent, MouseEvent for now


Usage:

<script type="module">
    /* Imports declaration of every function in the file */
    import * as eventUtils from "utils.js";

    /* Events can be alternatively defined comma separated in an array */
    const eventTypes = ['click', 'mouseover', 'keydown'];

    /* Sends output to the console for debugging purposes */
    function myFunction(e) {
        console.log(e);
    }

    /* Example usage of every function in the collection */
    //eventUtils.subscribirEventosById("buttonId", myFunction, ...eventTypes);
    //eventUtils.subscribirEventosByClass("buttonClass", myFunction, ...eventTypes);
    //eventUtils.subscribirEventosBySelector("input", myFunction, 'click', 'mouseover', 'keydown');
    eventUtils.subscribirEventosBySelectorAll("input", myFunction, ...eventTypes);
</script>

