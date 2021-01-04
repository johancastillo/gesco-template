// Añadir un objeto de atributos a un elemento
const addAttributes = (element:any, attrObj:any) => {
    for (let attr in attrObj) {
      if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr])
    }
  };

// Crear elementos con atributos e hijo
const createCustomElement = (element:string,attributes:object,children:any[]) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });

    addAttributes(customElement,attributes);
    return customElement;
  };


// Print modal
const printModal = (content:string) => {
    // Create container child
    const modalContent = createCustomElement('div', {
        id: 'modal-content',
        class: 'modal-content'
    }, [content]);
    
    // Create container father
    const modalConatiner = createCustomElement('div', {
        id: 'modal-conatiner', 
        class: 'modal-container'}, [modalContent]);

    // print modal
    document.body.appendChild(modalConatiner);
}

printModal(`<h1>Hello World`);

