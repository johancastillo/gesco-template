// Add a object of attributes to the element
const addAttribute = (element:any, attrObject:any):any =>{
    for(let attr in attrObject){
        if(attrObject.hasOwnProperty(attr)) element.setAttribute(attr, attrObject[attr])
    }
}

// Create Elements with attributes and childs
const createCustomElement = (element:string, attributes:object, children:string[]) => {
    let customElement = document.createElement(element);

    if(children !== undefined) children.forEach( (child:any) => {
        if(child.nodeType){
            if(child.nodeType === 1 || child.nodeType === 11){
                customElement.appendChild(child);
            }else{
                customElement.innerHTML += child;
            }
        }
    });

    addAttribute(customElement, attributes);

    return customElement;
}


// Creating new element
const el = createCustomElement('btn',{class: 'btn btn-primary'}, ['Ir a EDteam']);

console.log(el)

