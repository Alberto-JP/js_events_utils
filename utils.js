/**
 * Subscribe los eventos indicados en el elemento by id.
 * @constructor
 * @param {string} obj - id="" del elemento
 * @param {string} ...args - eventos a los que se desea subscribir "click", "mousemove" "keypress" ..
 */
export function subscribirEventosById(obj, func, ...args) {
    const object = document.getElementById(obj);
    console.log("Subscribiendo por Id");
    args.forEach((event) => {
        object.addEventListener(event, func);
        console.log('ID: "' + object.id + '" subscrito a: "' + event + '"');
    });
}

export function subscribirEventosByClass(obj, func, ...args) {
    const object = document.getElementsByClassName(obj);
    console.log("Subscribiendo por ClassName");
    args.forEach((event) => {
        object.addEventListener(event, func);
        console.log('ID: "' + object.className + '" subscrito a: "' + event + '"');
    });
}

export function subscribirEventosBySelector(obj, func, ...args) {
    const object = document.querySelector(obj);
    console.log("Subscribiendo por Selector");
    args.forEach((event) => {
        object.addEventListener(event, func);
        console.log('ID: "' + object.nodeName + '" subscrito a: "' + event + '"');
    });
}

export function subscribirEventosBySelectorAll(obj, func, ...args) {
    const objects = document.querySelectorAll(obj);
    console.log("Subscribiendo por Selector múltiple");
    args.forEach((event) => {
        objects.forEach((object) => {
            object.addEventListener(event, func);
            console.log('ID: "' + object.nodeName + '" subscrito a: "' + event + '"');
        });
    });
}