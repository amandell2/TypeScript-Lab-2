import {Greeter} from './Greeter';
let greet1 = new Greeter("Hello");
console.log(greet1.greet("Amanda"));

import {HtmlGreeter} from './HtmlGreeter';
let greet2 = new HtmlGreeter("Hello");
let greet5 = new HtmlGreeter("Hello", "h3");
console.log(greet2.greet("Amanda"));
console.log(greet5.greet("Amanda"));

import {JavaScriptGreeter} from './JavaScriptGreeter';
let greet3 = new JavaScriptGreeter("Hello");
console.log(greet3.greet("Amanda"));

import {LoudGreeter} from './LoudGreeter';
let greet4 = new LoudGreeter("Hello");
greet4.addVolume();
console.log(greet4.greet("Amanda"));