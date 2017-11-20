(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.IO = {})));
}(this, (function (exports) { 'use strict';

const {assign} = Object;
const {IntersectionObserver} = window;


const callback = (entries, {cb, el}) => {
    const entry = entries.find(entry => entry.target === el);
    return entry ? cb(entry) : false;
};

const _io = Symbol('_io');
const _handlers = Symbol('_handlers');

class IO {
    constructor(el, options) {
        const defaults = {
            root:       el,
            rootMargin: "0px",
            threshold:  [0, 0.25, 0.5, 0.75, 1]
        };
        this[_handlers] = new Set();
        this[_io] = new IntersectionObserver(entries => this[_handlers].forEach(handler => callback(entries, handler)), assign(defaults, options));
    }

    observe(el, cb) {
        const {[_io]: io, [_handlers]: handlers} = this;
        const handler = {el, cb};
        handlers.add(handler);
        io.observe(el);
        return {
            remove() {
                handlers.delete(handler);
                io.unobserve(el);
            }
        }
    }

    destroy() {
        this[_handlers].clear();
        this[_io].disconnect();
    }
}

const io = (...args) => new IO(...args);

exports.IO = IO;
exports.io = io;

Object.defineProperty(exports, '__esModule', { value: true });

})));
