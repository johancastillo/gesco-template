"use strict";
// Add a object of attributes to the element
var addAttribute = function (element, attrObject) {
    for (var attr in attrObject) {
        if (attrObject.hasOwnProperty(attr))
            element.setAttribute(attr, attrObject[attr]);
    }
};
// Create Elements with attributes and childs
var createCustomElement = function (element, attributes, children) {
    var customElement = document.createElement(element);
    if (children !== undefined)
        children.forEach(function (child) {
            if (child.nodeType) {
                if (child.nodeType === 1 || child.nodeType === 11) {
                    customElement.appendChild(child);
                }
                else {
                    customElement.innerHTML += child;
                }
            }
        });
    addAttribute(customElement, attributes);
    return customElement;
};
// Creating new element
var el = createCustomElement('btn', { class: 'btn btn-primary' }, ['Ir a EDteam']);
console.log(el);
