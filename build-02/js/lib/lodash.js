/*!
 * Lo-Dash v0.2.2 <http://lodash.com>
 * Copyright 2012 John-David Dalton <http://allyoucanleet.com/>
 * Based on Underscore.js 1.3.3, copyright 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
 * <http://documentcloud.github.com/underscore>
 * Available under MIT license <http://lodash.com/license>
 */

(function(a,b){function I(a){return new J(a)}function J(a){if(a&&a._wrapped)return a;this._wrapped=a}function R(){var a,b,c,d=-1,f=arguments.length,h={bottom:"",exit:"",init:"",top:"",arrayBranch:{beforeLoop:"",loopExp:"++index < length"},objectBranch:{beforeLoop:""}};while(++d<f){a=arguments[d];for(b in a)c=(c=a[b])==null?"":c,/beforeLoop|loopExp|inLoop/.test(b)?(typeof c=="string"&&(c={array:c,object:c}),h.arrayBranch[b]=c.array,h.objectBranch[b]=c.object):h[b]=c}var i=h.args,j=h.arrayBranch,k=h.objectBranch,m=/^[^,]+/.exec(i)[0],n=k.loopExp,p=/\S+$/.exec(n||m)[0];h.firstArg=m,h.hasDontEnumBug=e,h.hasExp="hasOwnProperty.call("+p+", index)",h.iteratedObject=p,h.shadowed=l,h.useHas=h.useHas!==!1,h.exit||(h.exit="if (!"+m+") return result");if(m=="object"||!j.inLoop)h.arrayBranch=null;n||(k.loopExp="index in "+p);var q=Function("arrayClass, bind, funcClass, hasOwnProperty, identity, objectTypes, stringClass, toString, undefined"," return function("+i+") {\n"+K(h)+"\n}");return q(o,Gb,r,y,pc,g,u,B)}function S(a,b){return n[b]}function T(a){return"\\"+d[a]}function U(){}function V(a,b){var c=n.length;return n[c]="'+\n((__t = ("+b+")) == null ? '' : _.escape(__t)) +\n'",m+c}function W(a,b){var c=n.length;return n[c]="'+\n((__t = ("+b+")) == null ? '' : __t) +\n'",m+c}function X(a,b){var c=n.length;return n[c]="';\n"+b+";\n__p += '",m+c}function eb(a,b,c,d){if(!a)return c;var e=a.length,f=arguments.length<3;d&&(b=Gb(b,d));if(e===+e){e&&f&&(c=a[--e]);while(e--)c=b(c,a[e],e,a);return c}var g,h=kc(a);e=h.length,e&&f&&(c=a[h[--e]]);while(e--)g=h[e],c=b(c,a[g],g,a);return c}function hb(a){if(!a)return[];if(B.call(a.toArray)==r)return a.toArray();var b=a.length;return b===+b?A.call(a):ib(a)}function jb(a){var b=-1,c=a.length,d=[];while(++b<c)a[b]&&d.push(a[b]);return d}function kb(a){var b=-1,c=a.length,d=[],e=x.apply(d,A.call(arguments,1));while(++b<c)pb(e,a[b])<0&&d.push(a[b]);return d}function lb(a,c,d){return c==b||d?a[0]:A.call(a,0,c)}function mb(a,b){var c,d=-1,e=a.length,f=[];while(++d<e)c=a[d],Xb(c)?z.apply(f,b?c:mb(c)):f.push(c);return f}function nb(a,b,c){var d,e,f=-1,g=B.call(b)==r,h=a.length,i={};g&&c&&(b=Gb(b,c));while(++f<h)e=a[f],d=g?b(e,f,a):e[b],(y.call(i,d)?i[d]:i[d]=[]).push(e);return i}function ob(a,c,d){if(B.call(c)!=r){var e=c;c=function(a){return a[e]}}else d&&(c=Gb(c,d));return cb(bb(a,function(b,d){return{criteria:c(b,d,a),value:b}}).sort(function(a,c){var d=a.criteria,e=c.criteria;return d===b?1:e===b?-1:d<e?-1:d>e?1:0}),"value")}function pb(a,b,c){var d,e;if(!a)return-1;if(c)return d=Ab(a,b),a[d]===b?d:-1;for(d=0,e=a.length;d<e;d++)if(a[d]===b)return d;return-1}function qb(a,c,d){return A.call(a,0,-(c==b||d?1:c))}function rb(a){var b,c=-1,d=a.length,e=A.call(arguments,1),f=[];while(++c<d)b=a[c],pb(f,b)<0&&Z(e,function(a){return pb(a,b)>-1})&&f.push(b);return f}function sb(a,b){var c=A.call(arguments,2),d=-1,e=a.length,f=B.call(b)==r,g=[];while(++d<e)g[d]=(f?b:a[d][b]).apply(a[d],c);return g}function tb(a,c,d){var e=a.length;return c==b||d?a[e-1]:A.call(a,-c||e)}function ub(a,b){if(!a)return-1;var c=a.length;while(c--)if(a[c]===b)return c;return-1}function vb(a,b,c){var d,e=-Infinity,f=-1,g=a.length,h=e;if(!b){while(++f<g)a[f]>h&&(h=a[f]);return h}c&&(b=Gb(b,c));while(++f<g)d=b(a[f],f,a),d>e&&(e=d,h=a[f]);return h}function wb(a,b,c){var d,e=Infinity,f=-1,g=a.length,h=e;if(!b){while(++f<g)a[f]<h&&(h=a[f]);return h}c&&(b=Gb(b,c));while(++f<g)d=b(a[f],f,a),d<e&&(e=d,h=a[f]);return h}function xb(a,b,c){c||(c=1),arguments.length<2&&(b=a||0,a=0);var d=-1,e=Math.max(Math.ceil((b-a)/c),0),f=Array(e);while(++d<e)f[d]=a,a+=c;return f}function yb(a,c,d){return A.call(a,c==b||d?1:c)}function zb(a){var b,c=-1,d=a.length,e=Array(d);while(++c<d)b=Math.floor(Math.random()*(c+1)),e[c]=e[b],e[b]=a[c];return e}function Ab(a,b,c){var d,e=0,f=a.length;c&&(b=c(b));while(e<f)d=e+f>>1,(c?c(a[d]):a[d])<b?e=d+1:f=d;return e}function Bb(){var a=-1,b=[],c=x.apply(b,arguments),d=c.length;while(++a<d)pb(b,c[a])<0&&b.push(c[a]);return b}function Cb(a,b,c){var d,e=-1,f=a.length,g=[],h=[];while(++e<f){d=c?c(a[e]):a[e];if(b?!e||h[h.length-1]!==d:pb(h,d)<0)h.push(d),g.push(a[e])}return g}function Db(a){var b=A.call(arguments,1),c=-1,d=a.length,e=[];while(++c<d)pb(b,a[c])<0&&e.push(a[c]);return e}function Eb(){var a=-1,b=vb(cb(arguments,"length")),c=Array(b);while(++a<b)c[a]=cb(arguments,a);return c}function Fb(a,b){return a<1?b():function(){if(--a<1)return b.apply(this,arguments)}}function Gb(a,b){function f(){var h=arguments,i=b;d||(a=b[c]),e.length&&(h=h.length?x.apply(e,h):e);if(this instanceof f){U.prototype=a.prototype,i=new U;var j=a.apply(i,h);return g[typeof j]&&j!==null?j:i}return a.apply(i,h)}var c,d=B.call(a)==r;if(!d)c=b,b=a;else if(C)return C.call.apply(C,arguments);var e=A.call(arguments,2);return f}function Hb(a){var b=arguments,c=1;b.length==1&&(c=0,b=Ub(a));for(var d=b.length;c<d;c++)a[b[c]]=Gb(a[b[c]],a);return a}function Ib(){var a=arguments;return function(){var b=arguments,c=a.length;while(c--)b=[a[c].apply(this,b)];return b[0]}}function Jb(a,c,d){function i(){h=b,d||a.apply(g,e)}var e,f,g,h;return function(){var b=d&&!h;return e=arguments,g=this,G(h),h=H(i,c),b&&(f=a.apply(g,e)),f}}function Kb(a,c){var d=A.call(arguments,2);return H(function(){return a.apply(b,d)},c)}function Lb(a){var c=A.call(arguments,1);return H(function(){return a.apply(b,c)},1)}function Mb(a,b){var c={};return function(){var d=b?b.apply(this,arguments):arguments[0];return y.call(c,d)?c[d]:c[d]=a.apply(this,arguments)}}function Nb(a){var b,c=!1;return function(){return c?b:(c=!0,b=a.apply(this,arguments),b)}}function Ob(a){var b=A.call(arguments,1),c=b.length;return function(){var d,e=arguments;return e.length&&(b.length=c,z.apply(b,e)),d=b.length==1?a.call(this,b[0]):a.apply(this,b),b.length=c,d}}function Pb(a,c){function i(){h=new Date,g=b,a.apply(f,d)}var d,e,f,g,h=0;return function(){var b=new Date,j=c-(b-h);return d=arguments,f=this,j<=0?(h=b,e=a.apply(f,d)):g||(g=H(i,j)),e}}function Qb(a,b){return function(){var c=[a];return arguments.length&&z.apply(c,arguments),b.apply(this,c)}}function Rb(a){return g[typeof a]&&a!==null?Xb(a)?a.slice():Tb({},a):a}function Vb(a,b){return y.call(a,b)}function Yb(a){return a===!0||a===!1||B.call(a)==p}function Zb(a){return B.call(a)==q}function $b(a){return!!a&&a.nodeType==1}function ac(a,c,d){d||(d=[]);if(a===c)return a!==0||1/a==1/c;if(a==b||c==b)return a===c;a._chain&&(a=a._wrapped),c._chain&&(c=c._wrapped);if(a.isEqual&&B.call(a.isEqual)==r)return a.isEqual(c);if(c.isEqual&&B.call(c.isEqual)==r)return c.isEqual(a);var f=B.call(a);if(f!=B.call(c))return!1;switch(f){case u:return a==String(c);case s:return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case p:case q:return+a==+c;case t:return a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return!1;var g=d.length;while(g--)if(d[g]==a)return!0;var h=-1,i=!0,j=0;d.push(a);if(f==o){j=a.length,i=j==c.length;if(i)while(j--)if(!(i=ac(a[j],c[j],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var k in a)if(y.call(a,k)){j++;if(!(i=y.call(c,k)&&ac(a[k],c[k],d)))break}if(i){for(k in c)if(y.call(c,k)&&!(j--))break;i=!j}if(i&&e)while(++h<7){k=l[h];if(y.call(a,k)&&!(i=y.call(c,k)&&ac(a[k],c[k],d)))break}}return d.pop(),i}function bc(a){return E(a)&&B.call(a)==s}function cc(a){return B.call(a)==r}function dc(a){return g[typeof a]&&a!==null}function ec(a){return B.call(a)==s&&a!=+a}function fc(a){return a===null}function gc(a){return B.call(a)==s}function hc(a){return B.call(a)==t}function ic(a){return B.call(a)==u}function jc(a){return a===b}function lc(a){var b,c=0,d=x.apply(v,arguments),e=d.length,f={};while(++c<e)b=d[c],b in a&&(f[b]=a[b]);return f}function mc(a){var b=B.call(a);return b==o||b==u?a.length:kc(a).length}function nc(a,b){return b(a),a}function oc(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function pc(a){return a}function qc(a){ab(Ub(a),function(b){var c=I[b]=a[b];J.prototype[b]=function(){var a=[this._wrapped];arguments.length&&z.apply(a,arguments);var b=a.length==1?c.call(I,a[0]):c.apply(I,a);return this._chain&&(b=new J(b),b._chain=!0),b}})}function rc(){return a._=h,this}function sc(a,b){if(!a)return null;var c=a[b];return B.call(c)==r?a[b]():c}function tc(a,b,c){c||(c={});var d,e=I.templateSettings,f=c.escape,g=c.evaluate,h=c.interpolate,i=c.variable;return f==null&&(f=e.escape),g==null&&(g=e.evaluate),h==null&&(h=e.interpolate),f&&(a=a.replace(f,V)),h&&(a=a.replace(h,W)),g&&(a=a.replace(g,X)),a="__p='"+a.replace(k,T).replace(j,S)+"';\n",n.length=0,i||(i=e.variable,a="with ("+i+" || {}) {\n"+a+"\n}\n"),a="function("+i+") {\n"+"var __p, __t, __j = Array.prototype.join;\n"+"function print() { __p += __j.call(arguments, '') }\n"+a+"return __p\n}",d=Function("_","return "+a)(I),b?d(b):(d.source=a,d)}function uc(a,b,c){c&&(b=Gb(b,c));for(var d=0;d<a;d++)b(d)}function vc(a){var b=f++;return a?a+b:b}function wc(a){return a=new J(a),a._chain=!0,a}function xc(){return this._chain=!0,this}function yc(){return this._wrapped}var c=typeof exports=="object"&&exports&&(typeof global=="object"&&global&&global==global.global&&(a=global),exports),d={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},e=!{valueOf:0}.propertyIsEnumerable("valueOf"),f=0,g={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,"undefined":!1},h=a._,i=RegExp("^"+({}.valueOf+"").replace(/[.*+?^=!:${}()|[\]\/\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),j=/__token__(\d+)/g,k=/['\n\r\t\u2028\u2029\\]/g,l=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],m="__token__",n=[],o="[object Array]",p="[object Boolean]",q="[object Date]",r="[object Function]",s="[object Number]",t="[object RegExp]",u="[object String]",v=Array.prototype,w=Object.prototype,x=v.concat,y=w.hasOwnProperty,z=v.push,A=v.slice,B=w.toString,C=i.test(C=A.bind)&&/\n|Opera/.test(C+B.call(a.opera))&&C,D=i.test(D=Array.isArray)&&D,E=a.isFinite,F=i.test(F=Object.keys)&&F,G=a.clearTimeout,H=a.setTimeout;I.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,variable:"obj"};var K=tc("var index, result<% if (init) { %> = <%= init %><% } %>;\n<%= exit %>;\n<%= top %>;\n<% if (arrayBranch) { %>var length = <%= firstArg %>.length; index = -1;  <% if (objectBranch) { %>\nif (length === +length) {<% } %>\n  <%= arrayBranch.beforeLoop %>;\n  while (<%= arrayBranch.loopExp %>) {\n    <%= arrayBranch.inLoop %>;\n  }  <% if (objectBranch) { %>\n}\n<% }}if (objectBranch) {  if (arrayBranch) { %>else {\n<% }  if (!hasDontEnumBug) { %>  var skipProto = typeof <%= iteratedObject %> == 'function';\n<% } %>  <%= objectBranch.beforeLoop %>;\n  for (<%= objectBranch.loopExp %>) {  \n<%  if (hasDontEnumBug) {    if (useHas) { %>    if (<%= hasExp %>) {\n  <% } %>    <%= objectBranch.inLoop %>;<%    if (useHas) { %>\n    }<% }  }  else {  %>    if (!(skipProto && index == 'prototype')<% if (useHas) { %> && <%= hasExp %><% } %>) {\n      <%= objectBranch.inLoop %>;\n    }  <% } %>\n  }  <% if (hasDontEnumBug) { %>\n  var ctor = <%= iteratedObject %>.constructor;\n  <% for (var k = 0; k < 7; k++) { %>\n  index = '<%= shadowed[k] %>';\n  if (<%      if (shadowed[k] == 'constructor') {        %>!(ctor && ctor.prototype === <%= iteratedObject %>) && <%      } %><%= hasExp %>) {\n    <%= objectBranch.inLoop %>;\n  }<%     }   }   if (arrayBranch) { %>\n}<% }} %>\n<%= bottom %>;\nreturn result"),L={args:"collection, callback, thisArg",init:"collection",top:"if (!callback) {\n  callback = identity\n}\nelse if (thisArg) {\n  callback = bind(callback, thisArg)\n}",inLoop:"callback(collection[index], index, collection)"},M={init:"true",inLoop:"if (!callback(collection[index], index, collection)) return !result"},N={args:"object",init:"object",top:"for (var source, sourceIndex = 1, length = arguments.length; sourceIndex < length; sourceIndex++) {\n  source = arguments[sourceIndex];\n"+(e?"  if (source) {":""),loopExp:"index in source",useHas:!1,inLoop:"object[index] = source[index]",bottom:(e?"  }\n":"")+"}"},O={init:"[]",inLoop:"callback(collection[index], index, collection) && result.push(collection[index])"},P={top:"if (thisArg) callback = bind(callback, thisArg)"},Q={init:"",exit:"if (!collection) return []",beforeLoop:{array:"result = Array(length)",object:"result = []"},inLoop:{array:"result[index] = callback(collection[index], index, collection)",object:"result.push(callback(collection[index], index, collection))"}},Y=R({args:"collection, target",init:"false",inLoop:"if (collection[index] === target) return true"}),Z=R(L,M),$=R(L,O),_=R(L,P,{init:"",inLoop:"if (callback(collection[index], index, collection)) return collection[index]"}),ab=R(L,P),bb=R(L,Q),cb=R(Q,{args:"collection, property",inLoop:{array:"result[index] = collection[index][property]",object:"result.push(collection[index][property])"}}),db=R({args:"collection, callback, accumulator, thisArg",init:"accumulator",top:"var noaccum = arguments.length < 3;\nif (thisArg) callback = bind(callback, thisArg)",beforeLoop:{array:"if (noaccum) result = collection[++index]"},inLoop:{array:"result = callback(result, collection[index], index, collection)",object:"result = noaccum\n  ? (noaccum = false, collection[index])\n  : callback(result, collection[index], index, collection)"}}),fb=R(L,O,{inLoop:"!"+O.inLoop}),gb=R(L,M,{init:"false",inLoop:M.inLoop.replace("!","")}),ib=R(Q,{args:"collection",inLoop:{array:"result[index] = collection[index]",object:"result.push(collection[index])"}}),Sb=R(N,{inLoop:"if (object[index] == undefined)"+N.inLoop}),Tb=R(N),Ub=R({args:"object",init:"[]",useHas:!1,inLoop:"if (toString.call(object[index]) == funcClass) result.push(index)",bottom:"result.sort()"}),Wb=function(a){return B.call(a)=="[object Arguments]"};Wb(arguments)||(Wb=function(a){return!!a&&!!y.call(a,"callee")});var Xb=D||function(a){return B.call(a)==o},_b=R({args:"value",init:"true",top:"var className = toString.call(value);\nif (className == arrayClass || className == stringClass) return !value.length",inLoop:{object:"return false"}}),kc=F||R({args:"object",exit:"if (!objectTypes[typeof object] || object === null) throw TypeError()",init:"[]",inLoop:"result.push(index)"});I.VERSION="0.2.2",I.after=Fb,I.bind=Gb,I.bindAll=Hb,I.chain=wc,I.clone=Rb,I.compact=jb,I.compose=Ib,I.contains=Y,I.debounce=Jb,I.defaults=Sb,I.defer=Lb,I.delay=Kb,I.difference=kb,I.escape=oc,I.every=Z,I.extend=Tb,I.filter=$,I.find=_,I.first=lb,I.flatten=mb,I.forEach=ab,I.functions=Ub,I.groupBy=nb,I.has=Vb,I.identity=pc,I.indexOf=pb,I.initial=qb,I.intersection=rb,I.invoke=sb,I.isArguments=Wb,I.isArray=Xb,I.isBoolean=Yb,I.isDate=Zb,I.isElement=$b,I.isEmpty=_b,I.isEqual=ac,I.isFinite=bc,I.isFunction=cc,I.isNaN=ec,I.isNull=fc,I.isNumber=gc,I.isObject=dc,I.isRegExp=hc,I.isString=ic,I.isUndefined=jc,I.keys=kc,I.last=tb,I.lastIndexOf=ub,I.map=bb,I.max=vb,I.memoize=Mb,I.min=wb,I.mixin=qc,I.noConflict=rc,I.once=Nb,I.partial=Ob,I.pick=lc,I.pluck=cb,I.range=xb,I.reduce=db,I.reduceRight=eb,I.reject=fb,I.rest=yb,I.result=sc,I.shuffle=zb,I.size=mc,I.some=gb,I.sortBy=ob,I.sortedIndex=Ab,I.tap=nc,I.template=tc,I.throttle=Pb,I.times=uc,I.toArray=hb,I.union=Bb,I.uniq=Cb,I.uniqueId=vc,I.values=ib,I.without=Db,I.wrap=Qb,I.zip=Eb,I.all=Z,I.any=gb,I.collect=bb,I.detect=_,I.each=ab,I.foldl=db,I.foldr=eb,I.head=lb,I.include=Y,I.inject=db,I.methods=Ub,I.select=$,I.tail=yb,I.take=lb,I.unique=Cb,I._createIterator=R,I._iteratorTemplate=K,J.prototype=I.prototype,qc(I),J.prototype.chain=xc,J.prototype.value=yc,ab(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=v[a];J.prototype[a]=function(){var a=this._wrapped;return arguments.length?b.apply(a,arguments):b.call(a),a.length===0&&delete a[0],this._chain&&(a=new J(a),a._chain=!0),a}}),ab(["concat","join","slice"],function(a){var b=v[a];J.prototype[a]=function(){var a=this._wrapped,c=arguments.length?b.apply(a,arguments):b.call(a);return this._chain&&(c=new J(c),c._chain=!0),c}}),typeof define=="function"&&typeof define.amd=="object"&&define.amd?(a._=I,define([],function(){return I})):c?typeof module=="object"&&module&&module.exports==c?(module.exports=I)._=I:c._=I:a._=I})(this)