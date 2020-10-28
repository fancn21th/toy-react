const createElement = (tagName, attributes, ...children) => {
  const el = document.createElement(tagName);
  for (let attr in attributes) {
    el.setAttribute(attr, attributes[attr]);
  }
  for (let child of children) {
    if (typeof child === "string") {
      child = document.createTextNode(child);
    }
    el.appendChild(child);
  }
  return el;
};

document.body.appendChild(
  <div id="foo" class="bar">
    hello world!
    <div>Lorem ipsum dolor sit amet.</div>
    <div>Lorem ipsum dolor sit amet consectetur.</div>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
    <p>
      <h2>Lorem ipsum dolor sit.</h2>
      <b>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        neque officia deserunt?
      </b>
    </p>
  </div>
);
