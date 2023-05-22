
const heading = React.createElement('h1', {}, "Hello React 🚀!!!");
const child = React.createElement('div', {id:'child'}, heading);
const parent = React.createElement('div', {id:'parent'}, child);


const element = React.createElement("h1", {}, "Hello from React");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root.render(parent));