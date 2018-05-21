/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){'use strict';var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function g(b){var a=aa.has(b);b=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);return!a&&b}function l(b){var a=b.isConnected;if(void 0!==a)return a;for(;b&&!(b.__CE_isImportDocument||b instanceof Document);)b=b.parentNode||(window.ShadowRoot&&b instanceof ShadowRoot?b.host:void 0);return!(!b||!(b.__CE_isImportDocument||b instanceof Document))}
function n(b,a){for(;a&&a!==b&&!a.nextSibling;)a=a.parentNode;return a&&a!==b?a.nextSibling:null}
function p(b,a,d){d=void 0===d?new Set:d;for(var c=b;c;){if(c.nodeType===Node.ELEMENT_NODE){var e=c;a(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){c=e.import;if(c instanceof Node&&!d.has(c))for(d.add(c),c=c.firstChild;c;c=c.nextSibling)p(c,a,d);c=n(b,e);continue}else if("template"===f){c=n(b,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)p(e,a,d)}c=c.firstChild?c.firstChild:n(b,c)}}function r(b,a,d){b[a]=d};function u(){this.a=new Map;this.s=new Map;this.f=[];this.b=!1}function ba(b,a,d){b.a.set(a,d);b.s.set(d.constructor,d)}function v(b,a){b.b=!0;b.f.push(a)}function w(b,a){b.b&&p(a,function(a){return x(b,a)})}function x(b,a){if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var d=0;d<b.f.length;d++)b.f[d](a)}}function y(b,a){var d=[];p(a,function(b){return d.push(b)});for(a=0;a<d.length;a++){var c=d[a];1===c.__CE_state?b.connectedCallback(c):z(b,c)}}
function A(b,a){var d=[];p(a,function(b){return d.push(b)});for(a=0;a<d.length;a++){var c=d[a];1===c.__CE_state&&b.disconnectedCallback(c)}}
function B(b,a,d){d=void 0===d?{}:d;var c=d.v||new Set,e=d.i||function(a){return z(b,a)},f=[];p(a,function(a){if("link"===a.localName&&"import"===a.getAttribute("rel")){var d=a.import;d instanceof Node&&(d.__CE_isImportDocument=!0,d.__CE_hasRegistry=!0);d&&"complete"===d.readyState?d.__CE_documentLoadHandled=!0:a.addEventListener("load",function(){var d=a.import;if(!d.__CE_documentLoadHandled){d.__CE_documentLoadHandled=!0;var f=new Set(c);f.delete(d);B(b,d,{v:f,i:e})}})}else f.push(a)},c);if(b.b)for(a=
0;a<f.length;a++)x(b,f[a]);for(a=0;a<f.length;a++)e(f[a])}
function z(b,a){if(void 0===a.__CE_state){var d=a.ownerDocument;if(d.defaultView||d.__CE_isImportDocument&&d.__CE_hasRegistry)if(d=b.a.get(a.localName)){d.constructionStack.push(a);var c=d.constructor;try{try{if(new c!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{d.constructionStack.pop()}}catch(t){throw a.__CE_state=2,t;}a.__CE_state=1;a.__CE_definition=d;if(d.attributeChangedCallback)for(d=d.observedAttributes,c=0;c<d.length;c++){var e=d[c],
f=a.getAttribute(e);null!==f&&b.attributeChangedCallback(a,e,null,f,null)}l(a)&&b.connectedCallback(a)}}}u.prototype.connectedCallback=function(b){var a=b.__CE_definition;a.connectedCallback&&a.connectedCallback.call(b)};u.prototype.disconnectedCallback=function(b){var a=b.__CE_definition;a.disconnectedCallback&&a.disconnectedCallback.call(b)};
u.prototype.attributeChangedCallback=function(b,a,d,c,e){var f=b.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(a)&&f.attributeChangedCallback.call(b,a,d,c,e)};function C(b){var a=document;this.c=b;this.a=a;this.b=void 0;B(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function D(b){b.b&&b.b.disconnect()}C.prototype.f=function(b){var a=this.a.readyState;"interactive"!==a&&"complete"!==a||D(this);for(a=0;a<b.length;a++)for(var d=b[a].addedNodes,c=0;c<d.length;c++)B(this.c,d[c])};function ca(){var b=this;this.b=this.a=void 0;this.f=new Promise(function(a){b.b=a;b.a&&a(b.a)})}function E(b){if(b.a)throw Error("Already resolved.");b.a=void 0;b.b&&b.b(void 0)};function F(b){this.j=!1;this.c=b;this.o=new Map;this.l=function(b){return b()};this.g=!1;this.m=[];this.u=new C(b)}
F.prototype.a=function(b,a){var d=this;if(!(a instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!g(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(this.c.a.get(b))throw Error("A custom element with name '"+b+"' has already been defined.");if(this.j)throw Error("A custom element is already being defined.");this.j=!0;try{var c=function(b){var a=e[b];if(void 0!==a&&!(a instanceof Function))throw Error("The '"+b+"' callback must be a function.");
return a},e=a.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=c("connectedCallback");var t=c("disconnectedCallback");var k=c("adoptedCallback");var h=c("attributeChangedCallback");var m=a.observedAttributes||[]}catch(q){return}finally{this.j=!1}a={localName:b,constructor:a,connectedCallback:f,disconnectedCallback:t,adoptedCallback:k,attributeChangedCallback:h,observedAttributes:m,constructionStack:[]};ba(this.c,b,a);this.m.push(a);
this.g||(this.g=!0,this.l(function(){return da(d)}))};F.prototype.i=function(b){B(this.c,b)};function da(b){if(!1!==b.g){b.g=!1;for(var a=b.m,d=[],c=new Map,e=0;e<a.length;e++)c.set(a[e].localName,[]);B(b.c,document,{i:function(a){if(void 0===a.__CE_state){var e=a.localName,f=c.get(e);f?f.push(a):b.c.a.get(e)&&d.push(a)}}});for(e=0;e<d.length;e++)z(b.c,d[e]);for(;0<a.length;){var f=a.shift();e=f.localName;f=c.get(f.localName);for(var t=0;t<f.length;t++)z(b.c,f[t]);(e=b.o.get(e))&&E(e)}}}
F.prototype.get=function(b){if(b=this.c.a.get(b))return b.constructor};F.prototype.b=function(b){if(!g(b))return Promise.reject(new SyntaxError("'"+b+"' is not a valid custom element name."));var a=this.o.get(b);if(a)return a.f;a=new ca;this.o.set(b,a);this.c.a.get(b)&&!this.m.some(function(a){return a.localName===b})&&E(a);return a.f};F.prototype.f=function(b){D(this.u);var a=this.l;this.l=function(d){return b(function(){return a(d)})}};window.CustomElementRegistry=F;F.prototype.define=F.prototype.a;
F.prototype.upgrade=F.prototype.i;F.prototype.get=F.prototype.get;F.prototype.whenDefined=F.prototype.b;F.prototype.polyfillWrapFlushCallback=F.prototype.f;var G=window.Document.prototype.createElement,ea=window.Document.prototype.createElementNS,fa=window.Document.prototype.importNode,ha=window.Document.prototype.prepend,ia=window.Document.prototype.append,ja=window.DocumentFragment.prototype.prepend,ka=window.DocumentFragment.prototype.append,H=window.Node.prototype.cloneNode,I=window.Node.prototype.appendChild,J=window.Node.prototype.insertBefore,K=window.Node.prototype.removeChild,L=window.Node.prototype.replaceChild,M=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),N=window.Element.prototype.attachShadow,O=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),P=window.Element.prototype.getAttribute,Q=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,S=window.Element.prototype.getAttributeNS,T=window.Element.prototype.setAttributeNS,la=window.Element.prototype.removeAttributeNS,ma=window.Element.prototype.insertAdjacentElement,na=window.Element.prototype.insertAdjacentHTML,oa=window.Element.prototype.prepend,
pa=window.Element.prototype.append,U=window.Element.prototype.before,qa=window.Element.prototype.after,ra=window.Element.prototype.replaceWith,sa=window.Element.prototype.remove,ta=window.HTMLElement,V=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),ua=window.HTMLElement.prototype.insertAdjacentElement,va=window.HTMLElement.prototype.insertAdjacentHTML;var wa=new function(){};function xa(){var b=W;window.HTMLElement=function(){function a(){var a=this.constructor,c=b.s.get(a);if(!c)throw Error("The custom element being constructed was not registered with `customElements`.");var e=c.constructionStack;if(0===e.length)return e=G.call(document,c.localName),Object.setPrototypeOf(e,a.prototype),e.__CE_state=1,e.__CE_definition=c,x(b,e),e;c=e.length-1;var f=e[c];if(f===wa)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[c]=wa;Object.setPrototypeOf(f,a.prototype);x(b,f);return f}a.prototype=ta.prototype;return a}()};function X(b,a,d){function c(a){return function(d){for(var e=[],c=0;c<arguments.length;++c)e[c-0]=arguments[c];c=[];for(var f=[],m=0;m<e.length;m++){var q=e[m];q instanceof Element&&l(q)&&f.push(q);if(q instanceof DocumentFragment)for(q=q.firstChild;q;q=q.nextSibling)c.push(q);else c.push(q)}a.apply(this,e);for(e=0;e<f.length;e++)A(b,f[e]);if(l(this))for(e=0;e<c.length;e++)f=c[e],f instanceof Element&&y(b,f)}}void 0!==d.h&&(a.prepend=c(d.h));void 0!==d.append&&(a.append=c(d.append))};function ya(){var b=W;r(Document.prototype,"createElement",function(a){if(this.__CE_hasRegistry){var d=b.a.get(a);if(d)return new d.constructor}a=G.call(this,a);x(b,a);return a});r(Document.prototype,"importNode",function(a,d){a=fa.call(this,a,d);this.__CE_hasRegistry?B(b,a):w(b,a);return a});r(Document.prototype,"createElementNS",function(a,d){if(this.__CE_hasRegistry&&(null===a||"http://www.w3.org/1999/xhtml"===a)){var c=b.a.get(d);if(c)return new c.constructor}a=ea.call(this,a,d);x(b,a);return a});
X(b,Document.prototype,{h:ha,append:ia})};function za(){var b=W;function a(a,c){Object.defineProperty(a,"textContent",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)c.set.call(this,a);else{var e=void 0;if(this.firstChild){var d=this.childNodes,k=d.length;if(0<k&&l(this)){e=Array(k);for(var h=0;h<k;h++)e[h]=d[h]}}c.set.call(this,a);if(e)for(a=0;a<e.length;a++)A(b,e[a])}}})}r(Node.prototype,"insertBefore",function(a,c){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);
a=J.call(this,a,c);if(l(this))for(c=0;c<e.length;c++)y(b,e[c]);return a}e=l(a);c=J.call(this,a,c);e&&A(b,a);l(this)&&y(b,a);return c});r(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=I.call(this,a);if(l(this))for(var e=0;e<c.length;e++)y(b,c[e]);return a}c=l(a);e=I.call(this,a);c&&A(b,a);l(this)&&y(b,a);return e});r(Node.prototype,"cloneNode",function(a){a=H.call(this,a);this.ownerDocument.__CE_hasRegistry?B(b,a):w(b,a);
return a});r(Node.prototype,"removeChild",function(a){var c=l(a),e=K.call(this,a);c&&A(b,a);return e});r(Node.prototype,"replaceChild",function(a,c){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);a=L.call(this,a,c);if(l(this))for(A(b,c),c=0;c<e.length;c++)y(b,e[c]);return a}e=l(a);var f=L.call(this,a,c),d=l(this);d&&A(b,c);e&&A(b,a);d&&y(b,a);return f});M&&M.get?a(Node.prototype,M):v(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=[],b=
0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)K.call(this,this.firstChild);I.call(this,document.createTextNode(a))}})})};function Aa(b){var a=Element.prototype;function d(a){return function(e){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=[];for(var k=[],h=0;h<c.length;h++){var m=c[h];m instanceof Element&&l(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)d.push(m);else d.push(m)}a.apply(this,c);for(c=0;c<k.length;c++)A(b,k[c]);if(l(this))for(c=0;c<d.length;c++)k=d[c],k instanceof Element&&y(b,k)}}void 0!==U&&(a.before=d(U));void 0!==U&&(a.after=d(qa));void 0!==ra&&
r(a,"replaceWith",function(a){for(var e=[],c=0;c<arguments.length;++c)e[c-0]=arguments[c];c=[];for(var d=[],k=0;k<e.length;k++){var h=e[k];h instanceof Element&&l(h)&&d.push(h);if(h instanceof DocumentFragment)for(h=h.firstChild;h;h=h.nextSibling)c.push(h);else c.push(h)}k=l(this);ra.apply(this,e);for(e=0;e<d.length;e++)A(b,d[e]);if(k)for(A(b,this),e=0;e<c.length;e++)d=c[e],d instanceof Element&&y(b,d)});void 0!==sa&&r(a,"remove",function(){var a=l(this);sa.call(this);a&&A(b,this)})};function Ba(){var b=W;function a(a,c){Object.defineProperty(a,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){var e=this,d=void 0;l(this)&&(d=[],p(this,function(a){a!==e&&d.push(a)}));c.set.call(this,a);if(d)for(var f=0;f<d.length;f++){var t=d[f];1===t.__CE_state&&b.disconnectedCallback(t)}this.ownerDocument.__CE_hasRegistry?B(b,this):w(b,this);return a}})}function d(a,c){r(a,"insertAdjacentElement",function(a,e){var d=l(e);a=c.call(this,a,e);d&&A(b,e);l(a)&&y(b,e);
return a})}function c(a,c){function e(a,e){for(var c=[];a!==e;a=a.nextSibling)c.push(a);for(e=0;e<c.length;e++)B(b,c[e])}r(a,"insertAdjacentHTML",function(a,b){a=a.toLowerCase();if("beforebegin"===a){var d=this.previousSibling;c.call(this,a,b);e(d||this.parentNode.firstChild,this)}else if("afterbegin"===a)d=this.firstChild,c.call(this,a,b),e(this.firstChild,d);else if("beforeend"===a)d=this.lastChild,c.call(this,a,b),e(d||this.firstChild,null);else if("afterend"===a)d=this.nextSibling,c.call(this,
a,b),e(this.nextSibling,d);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}N&&r(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=N.call(this,a)});O&&O.get?a(Element.prototype,O):V&&V.get?a(HTMLElement.prototype,V):v(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return H.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,
e=G.call(document,this.localName);for(e.innerHTML=a;0<c.childNodes.length;)K.call(c,c.childNodes[0]);for(a=b?e.content:e;0<a.childNodes.length;)I.call(c,a.childNodes[0])}})});r(Element.prototype,"setAttribute",function(a,c){if(1!==this.__CE_state)return Q.call(this,a,c);var e=P.call(this,a);Q.call(this,a,c);c=P.call(this,a);b.attributeChangedCallback(this,a,e,c,null)});r(Element.prototype,"setAttributeNS",function(a,c,d){if(1!==this.__CE_state)return T.call(this,a,c,d);var e=S.call(this,a,c);T.call(this,
a,c,d);d=S.call(this,a,c);b.attributeChangedCallback(this,c,e,d,a)});r(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return R.call(this,a);var c=P.call(this,a);R.call(this,a);null!==c&&b.attributeChangedCallback(this,a,c,null,null)});r(Element.prototype,"removeAttributeNS",function(a,c){if(1!==this.__CE_state)return la.call(this,a,c);var d=S.call(this,a,c);la.call(this,a,c);var e=S.call(this,a,c);d!==e&&b.attributeChangedCallback(this,c,d,e,a)});ua?d(HTMLElement.prototype,
ua):ma?d(Element.prototype,ma):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");va?c(HTMLElement.prototype,va):na?c(Element.prototype,na):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");X(b,Element.prototype,{h:oa,append:pa});Aa(b)};/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Y=window.customElements;if(!Y||Y.forcePolyfill||"function"!=typeof Y.define||"function"!=typeof Y.get){var W=new u;xa();ya();X(W,DocumentFragment.prototype,{h:ja,append:ka});za();Ba();document.__CE_hasRegistry=!0;var customElements=new F(W);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Z=window.document;window.WebComponents=window.WebComponents||{};function Ca(){window.WebComponents.ready=!0;window.document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}function Da(){Ca();Z.removeEventListener("readystatechange",Da)}"loading"!==Z.readyState?Ca():Z.addEventListener("readystatechange",Da);}).call(this);

//# sourceMappingURL=webcomponents-ce.js.map
