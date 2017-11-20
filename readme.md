## IntersectionObserver

The [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) is a new HTML5 feature. (as per 2017) It provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

This tiny utility will help you to observer the changes by passing an element and providing with the callback. In native API you have to handle observe and changes separately.


```javascript
    import {io} from './src/IO'
    
    const container = document.querySelector('ul');
    const list = Array.from(document.querySelectorAll('li'));
        
    const observer = io(container, {threshold: [0, 0.25, 0.5, 0.75, 1]});

    list.forEach(el => observer.observe(el, ({intersectionRatio}) => {
        el.innerHTML = Math.floor(intersectionRatio * 100) + '%';
    }));

```

```javascript
    const listener = observer.observe(el, callback) //return observe with remove and destroy methods

    listener.remove(); // observer stop listening changes for particular element
    
    observer.destroy(); // Destroying all observer

```

