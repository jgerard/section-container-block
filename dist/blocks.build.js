!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t(1)},function(e,n,t){"use strict";var o=t(2),r=(t.n(o),t(3)),c=(t.n(r),t(4)),l=(t.n(c),wp.i18n.__);(0,wp.blocks.registerBlockType)("cgb/block-section-container-block",{title:l("section-container-block - CGB Block"),icon:"shield",category:"common",keywords:[l("section-container-block \u2014 CGB Block"),l("CGB Example"),l("create-guten-block")],edit:function(e){return wp.element.createElement("div",{className:e.className},wp.element.createElement(c.InnerBlocks,null))},save:function(e){return wp.element.createElement("div",null,wp.element.createElement(c.InnerBlocks.Content,null))}})},function(e,n){},function(e,n){},function(e,n){e.exports=wp.editor}]);