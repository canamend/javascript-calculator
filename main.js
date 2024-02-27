
const container = document.querySelector('#container');
const helloWorld = document.createElement('h1');
const text = document.createTextNode('¡Hola mundo!');
helloWorld.appendChild(text);
helloWorld.classList.add('red-text');
container.appendChild(helloWorld);