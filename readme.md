## IntersectionObserver

[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) is new HTML5 feature to provides a way to asynchronously observe changes on Dom elements.

There is small utility, where you can observe changes, by giving element and provide callback. In native API you have to handle observe, and changes separately.

```javascript
        import {io} from './src/IO'
        
        const container = document.querySelector('ul')
        const list = Array.from(document.querySelectorAll('li'));
            
        const observer = io(container, {threshold: [0, 0.25, 0.5, 0.75, 1]});

        list.forEach(el => observer.observe(el, ({intersectionRatio}) => {
            el.innerHTML = Math.floor(intersectionRatio * 100) + '%';
        }));

```

```javascript
    const listener = observer.observe(el, callback) //return observe remove function

    listener.remove(); // observer stop listening changes
    
    observer.destroy(); // Killing full observer 

```

