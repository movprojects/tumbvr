!function t(e,r,a){function i(o,s){if(!r[o]){if(!e[o]){var u="function"==typeof require&&require;if(!s&&u)return u(o,!0);if(n)return n(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var m=r[o]={exports:{}};e[o][0].call(m.exports,function(t){var r=e[o][1][t];return i(r?r:t)},m,m.exports,t,e,r,a)}return r[o].exports}for(var n="function"==typeof require&&require,o=0;o<a.length;o++)i(a[o]);return i}({1:[function(){!function(){"use strict";function t(){for(var t=1;e+1>t;++t){var a=document.createElement("a-image");r.appendChild(a),a.setAttribute("src","#img"+(t-1));var n=new THREE.Vector3(0,.4,0),o=new THREE.Vector3(0,0,0);7>t?(n.x=t%3===1?-2.25:t%3===2?0:2.25,n.z=4>t?-3.95:3.95,o.y=4>t?0:180):(n.x=10>t?-3.95:3.95,n.z=t%3===1?-2.4:t%3===2?0:2.4,o.y=10>t?90:-90),a.setAttribute("position",n),a.setAttribute("rotation",o);var s=Math.min(2,i[t-1]<1?1.5/i[t-1]:1.5),u=Math.min(2,i[t-1]<1?1.5:1.5*i[t-1]);a.setAttribute("width",s),a.setAttribute("height",u)}}var e=Math.min(tumbDatas.posts.length,12),r=document.querySelector("a-scene"),a=document.createElement("a-assets");r.appendChild(a);var i=[];document.querySelector("[camera]").addEventListener("componentchanged",function(t){if("position"===t.detail.name){var e=document.querySelector("[camera]").getAttribute("position").y;document.querySelector("[camera]").getAttribute("position").y=Math.min(1.5,e)}});for(var n=0;e>n;++n){var o=document.createElement("img");o.setAttribute("id","img"+n),o.setAttribute("src","https://nameless-eyrie-45995.herokuapp.com/"+tumbDatas.posts[n].photos[0].alt_sizes[2].url),o.setAttribute("crossorigin","anonymous"),a.appendChild(o),i.push(tumbDatas.posts[n].photos[0].original_size.height/tumbDatas.posts[n].photos[0].original_size.width)}var s=document.createElement("a-asset-item");s.setAttribute("id","gallery-obj"),s.setAttribute("src","assets/cavanagh.obj"),a.appendChild(s);var u=document.createElement("a-asset-item");u.setAttribute("id","gallery-mtl"),u.setAttribute("src","assets/cavanagh.mtl"),a.appendChild(u),a.addEventListener("loaded",t);var c=document.createElement("a-entity");c.setAttribute("obj-model","obj: #gallery-obj; mtl: #gallery-mtl"),c.setAttribute("position",new THREE.Vector3(0,0,0)),r.appendChild(c)}()},{}]},{},[1]);