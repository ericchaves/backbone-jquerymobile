(function(a,b){function I(a){return new J(a)}function J(a){if(a&&a._wrapped)return a;this._wrapped=a}function R(){var a,b,c,d=-1,f=arguments.length,h={bottom:"",exit:"",init:"",top:"",arrayBranch:{beforeLoop:"",loopExp:"++index < length"},objectBranch:{beforeLoop:""}};while(++d<f){a=arguments[d];for(b in a)c=(c=a[b])==null?"":c,/beforeLoop|loopExp|inLoop/.test(b)?(typeof c=="string"&&(c={array:c,object:c}),h.arrayBranch[b]=c.array,h.objectBranch[b]=c.object):h[b]=c}var i=h.args,j=h.arrayBranch,k=h.objectBranch,m=/^[^,]+/.exec(i)[0],n=k.loopExp,p=/\S+$/.exec(n||m)[0];h.firstArg=m,h.hasDontEnumBug=e,h.hasExp="hasOwnProperty.call("+p+", index)",h.iteratedObject=p,h.shadowed=l,h.useHas=h.useHas!==!1,h.exit||(h.exit="if (!"+m+") return result");if(m=="object"||!j.inLoop)h.arrayBranch=null;n||(k.loopExp="index in "+p);var q=Function("arrayClass, bind, funcClass, hasOwnProperty, identity, objectTypes, stringClass, toString, undefined"," return function("+i+") {\n"+K(h)+"\n}");return q(o,Gb,r,y,pc,g,u,B)}function S(a,b){return n[b]}function T(a){return"\\"+d[a]}function U(){}function V(a,b){var c=n.length;return n[c]="'+\n((__t = ("+b+")) == null ? '' : _.escape(__t)) +\n'",m+c}function W(a,b){var c=n.length;return n[c]="'+\n((__t = ("+b+")) == null ? '' : __t) +\n'",m+c}function X(a,b){var c=n.length;return n[c]="';\n"+b+";\n__p += '",m+c}function eb(a,b,c,d){if(!a)return c;var e=a.length,f=arguments.length<3;d&&(b=Gb(b,d));if(e===+e){e&&f&&(c=a[--e]);while(e--)c=b(c,a[e],e,a);return c}var g,h=kc(a);e=h.length,e&&f&&(c=a[h[--e]]);while(e--)g=h[e],c=b(c,a[g],g,a);return c}function hb(a){if(!a)return[];if(B.call(a.toArray)==r)return a.toArray();var b=a.length;return b===+b?A.call(a):ib(a)}function jb(a){var b=-1,c=a.length,d=[];while(++b<c)a[b]&&d.push(a[b]);return d}function kb(a){var b=-1,c=a.length,d=[],e=x.apply(d,A.call(arguments,1));while(++b<c)pb(e,a[b])<0&&d.push(a[b]);return d}function lb(a,c,d){return c==b||d?a[0]:A.call(a,0,c)}function mb(a,b){var c,d=-1,e=a.length,f=[];while(++d<e)c=a[d],Xb(c)?z.apply(f,b?c:mb(c)):f.push(c);return f}function nb(a,b,c){var d,e,f=-1,g=B.call(b)==r,h=a.length,i={};g&&c&&(b=Gb(b,c));while(++f<h)e=a[f],d=g?b(e,f,a):e[b],(y.call(i,d)?i[d]:i[d]=[]).push(e);return i}function ob(a,c,d){if(B.call(c)!=r){var e=c;c=function(a){return a[e]}}else d&&(c=Gb(c,d));return cb(bb(a,function(b,d){return{criteria:c(b,d,a),value:b}}).sort(function(a,c){var d=a.criteria,e=c.criteria;return d===b?1:e===b?-1:d<e?-1:d>e?1:0}),"value")}function pb(a,b,c){var d,e;if(!a)return-1;if(c)return d=Ab(a,b),a[d]===b?d:-1;for(d=0,e=a.length;d<e;d++)if(a[d]===b)return d;return-1}function qb(a,c,d){return A.call(a,0,-(c==b||d?1:c))}function rb(a){var b,c=-1,d=a.length,e=A.call(arguments,1),f=[];while(++c<d)b=a[c],pb(f,b)<0&&Z(e,function(a){return pb(a,b)>-1})&&f.push(b);return f}function sb(a,b){var c=A.call(arguments,2),d=-1,e=a.length,f=B.call(b)==r,g=[];while(++d<e)g[d]=(f?b:a[d][b]).apply(a[d],c);return g}function tb(a,c,d){var e=a.length;return c==b||d?a[e-1]:A.call(a,-c||e)}function ub(a,b){if(!a)return-1;var c=a.length;while(c--)if(a[c]===b)return c;return-1}function vb(a,b,c){var d,e=-Infinity,f=-1,g=a.length,h=e;if(!b){while(++f<g)a[f]>h&&(h=a[f]);return h}c&&(b=Gb(b,c));while(++f<g)d=b(a[f],f,a),d>e&&(e=d,h=a[f]);return h}function wb(a,b,c){var d,e=Infinity,f=-1,g=a.length,h=e;if(!b){while(++f<g)a[f]<h&&(h=a[f]);return h}c&&(b=Gb(b,c));while(++f<g)d=b(a[f],f,a),d<e&&(e=d,h=a[f]);return h}function xb(a,b,c){c||(c=1),arguments.length<2&&(b=a||0,a=0);var d=-1,e=Math.max(Math.ceil((b-a)/c),0),f=Array(e);while(++d<e)f[d]=a,a+=c;return f}function yb(a,c,d){return A.call(a,c==b||d?1:c)}function zb(a){var b,c=-1,d=a.length,e=Array(d);while(++c<d)b=Math.floor(Math.random()*(c+1)),e[c]=e[b],e[b]=a[c];return e}function Ab(a,b,c){var d,e=0,f=a.length;c&&(b=c(b));while(e<f)d=e+f>>1,(c?c(a[d]):a[d])<b?e=d+1:f=d;return e}function Bb(){var a=-1,b=[],c=x.apply(b,arguments),d=c.length;while(++a<d)pb(b,c[a])<0&&b.push(c[a]);return b}function Cb(a,b,c){var d,e=-1,f=a.length,g=[],h=[];while(++e<f){d=c?c(a[e]):a[e];if(b?!e||h[h.length-1]!==d:pb(h,d)<0)h.push(d),g.push(a[e])}return g}function Db(a){var b=A.call(arguments,1),c=-1,d=a.length,e=[];while(++c<d)pb(b,a[c])<0&&e.push(a[c]);return e}function Eb(){var a=-1,b=vb(cb(arguments,"length")),c=Array(b);while(++a<b)c[a]=cb(arguments,a);return c}function Fb(a,b){return a<1?b():function(){if(--a<1)return b.apply(this,arguments)}}function Gb(a,b){function f(){var h=arguments,i=b;d||(a=b[c]),e.length&&(h=h.length?x.apply(e,h):e);if(this instanceof f){U.prototype=a.prototype,i=new U;var j=a.apply(i,h);return g[typeof j]&&j!==null?j:i}return a.apply(i,h)}var c,d=B.call(a)==r;if(!d)c=b,b=a;else if(C)return C.call.apply(C,arguments);var e=A.call(arguments,2);return f}function Hb(a){var b=arguments,c=1;b.length==1&&(c=0,b=Ub(a));for(var d=b.length;c<d;c++)a[b[c]]=Gb(a[b[c]],a);return a}function Ib(){var a=arguments;return function(){var b=arguments,c=a.length;while(c--)b=[a[c].apply(this,b)];return b[0]}}function Jb(a,c,d){function i(){h=b,d||a.apply(g,e)}var e,f,g,h;return function(){var b=d&&!h;return e=arguments,g=this,G(h),h=H(i,c),b&&(f=a.apply(g,e)),f}}function Kb(a,c){var d=A.call(arguments,2);return H(function(){return a.apply(b,d)},c)}function Lb(a){var c=A.call(arguments,1);return H(function(){return a.apply(b,c)},1)}function Mb(a,b){var c={};return function(){var d=b?b.apply(this,arguments):arguments[0];return y.call(c,d)?c[d]:c[d]=a.apply(this,arguments)}}function Nb(a){var b,c=!1;return function(){return c?b:(c=!0,b=a.apply(this,arguments),b)}}function Ob(a){var b=A.call(arguments,1),c=b.length;return function(){var d,e=arguments;return e.length&&(b.length=c,z.apply(b,e)),d=b.length==1?a.call(this,b[0]):a.apply(this,b),b.length=c,d}}function Pb(a,c){function i(){h=new Date,g=b,a.apply(f,d)}var d,e,f,g,h=0;return function(){var b=new Date,j=c-(b-h);return d=arguments,f=this,j<=0?(h=b,e=a.apply(f,d)):g||(g=H(i,j)),e}}function Qb(a,b){return function(){var c=[a];return arguments.length&&z.apply(c,arguments),b.apply(this,c)}}function Rb(a){return g[typeof a]&&a!==null?Xb(a)?a.slice():Tb({},a):a}function Vb(a,b){return y.call(a,b)}function Yb(a){return a===!0||a===!1||B.call(a)==p}function Zb(a){return B.call(a)==q}function $b(a){return!!a&&a.nodeType==1}function ac(a,c,d){d||(d=[]);if(a===c)return a!==0||1/a==1/c;if(a==b||c==b)return a===c;a._chain&&(a=a._wrapped),c._chain&&(c=c._wrapped);if(a.isEqual&&B.call(a.isEqual)==r)return a.isEqual(c);if(c.isEqual&&B.call(c.isEqual)==r)return c.isEqual(a);var f=B.call(a);if(f!=B.call(c))return!1;switch(f){case u:return a==String(c);case s:return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case p:case q:return+a==+c;case t:return a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return!1;var g=d.length;while(g--)if(d[g]==a)return!0;var h=-1,i=!0,j=0;d.push(a);if(f==o){j=a.length,i=j==c.length;if(i)while(j--)if(!(i=ac(a[j],c[j],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var k in a)if(y.call(a,k)){j++;if(!(i=y.call(c,k)&&ac(a[k],c[k],d)))break}if(i){for(k in c)if(y.call(c,k)&&!(j--))break;i=!j}if(i&&e)while(++h<7){k=l[h];if(y.call(a,k)&&!(i=y.call(c,k)&&ac(a[k],c[k],d)))break}}return d.pop(),i}function bc(a){return E(a)&&B.call(a)==s}function cc(a){return B.call(a)==r}function dc(a){return g[typeof a]&&a!==null}function ec(a){return B.call(a)==s&&a!=+a}function fc(a){return a===null}function gc(a){return B.call(a)==s}function hc(a){return B.call(a)==t}function ic(a){return B.call(a)==u}function jc(a){return a===b}function lc(a){var b,c=0,d=x.apply(v,arguments),e=d.length,f={};while(++c<e)b=d[c],b in a&&(f[b]=a[b]);return f}function mc(a){var b=B.call(a);return b==o||b==u?a.length:kc(a).length}function nc(a,b){return b(a),a}function oc(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function pc(a){return a}function qc(a){ab(Ub(a),function(b){var c=I[b]=a[b];J.prototype[b]=function(){var a=[this._wrapped];arguments.length&&z.apply(a,arguments);var b=a.length==1?c.call(I,a[0]):c.apply(I,a);return this._chain&&(b=new J(b),b._chain=!0),b}})}function rc(){return a._=h,this}function sc(a,b){if(!a)return null;var c=a[b];return B.call(c)==r?a[b]():c}function tc(a,b,c){c||(c={});var d,e=I.templateSettings,f=c.escape,g=c.evaluate,h=c.interpolate,i=c.variable;return f==null&&(f=e.escape),g==null&&(g=e.evaluate),h==null&&(h=e.interpolate),f&&(a=a.replace(f,V)),h&&(a=a.replace(h,W)),g&&(a=a.replace(g,X)),a="__p='"+a.replace(k,T).replace(j,S)+"';\n",n.length=0,i||(i=e.variable,a="with ("+i+" || {}) {\n"+a+"\n}\n"),a="function("+i+") {\n"+"var __p, __t, __j = Array.prototype.join;\n"+"function print() { __p += __j.call(arguments, '') }\n"+a+"return __p\n}",d=Function("_","return "+a)(I),b?d(b):(d.source=a,d)}function uc(a,b,c){c&&(b=Gb(b,c));for(var d=0;d<a;d++)b(d)}function vc(a){var b=f++;return a?a+b:b}function wc(a){return a=new J(a),a._chain=!0,a}function xc(){return this._chain=!0,this}function yc(){return this._wrapped}var c=typeof exports=="object"&&exports&&(typeof global=="object"&&global&&global==global.global&&(a=global),exports),d={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},e=!{valueOf:0}.propertyIsEnumerable("valueOf"),f=0,g={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,"undefined":!1},h=a._,i=RegExp("^"+({}.valueOf+"").replace(/[.*+?^=!:${}()|[\]\/\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),j=/__token__(\d+)/g,k=/['\n\r\t\u2028\u2029\\]/g,l=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],m="__token__",n=[],o="[object Array]",p="[object Boolean]",q="[object Date]",r="[object Function]",s="[object Number]",t="[object RegExp]",u="[object String]",v=Array.prototype,w=Object.prototype,x=v.concat,y=w.hasOwnProperty,z=v.push,A=v.slice,B=w.toString,C=i.test(C=A.bind)&&/\n|Opera/.test(C+B.call(a.opera))&&C,D=i.test(D=Array.isArray)&&D,E=a.isFinite,F=i.test(F=Object.keys)&&F,G=a.clearTimeout,H=a.setTimeout;I.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,variable:"obj"};var K=tc("var index, result<% if (init) { %> = <%= init %><% } %>;\n<%= exit %>;\n<%= top %>;\n<% if (arrayBranch) { %>var length = <%= firstArg %>.length; index = -1;  <% if (objectBranch) { %>\nif (length === +length) {<% } %>\n  <%= arrayBranch.beforeLoop %>;\n  while (<%= arrayBranch.loopExp %>) {\n    <%= arrayBranch.inLoop %>;\n  }  <% if (objectBranch) { %>\n}\n<% }}if (objectBranch) {  if (arrayBranch) { %>else {\n<% }  if (!hasDontEnumBug) { %>  var skipProto = typeof <%= iteratedObject %> == 'function';\n<% } %>  <%= objectBranch.beforeLoop %>;\n  for (<%= objectBranch.loopExp %>) {  \n<%  if (hasDontEnumBug) {    if (useHas) { %>    if (<%= hasExp %>) {\n  <% } %>    <%= objectBranch.inLoop %>;<%    if (useHas) { %>\n    }<% }  }  else {  %>    if (!(skipProto && index == 'prototype')<% if (useHas) { %> && <%= hasExp %><% } %>) {\n      <%= objectBranch.inLoop %>;\n    }  <% } %>\n  }  <% if (hasDontEnumBug) { %>\n  var ctor = <%= iteratedObject %>.constructor;\n  <% for (var k = 0; k < 7; k++) { %>\n  index = '<%= shadowed[k] %>';\n  if (<%      if (shadowed[k] == 'constructor') {        %>!(ctor && ctor.prototype === <%= iteratedObject %>) && <%      } %><%= hasExp %>) {\n    <%= objectBranch.inLoop %>;\n  }<%     }   }   if (arrayBranch) { %>\n}<% }} %>\n<%= bottom %>;\nreturn result"),L={args:"collection, callback, thisArg",init:"collection",top:"if (!callback) {\n  callback = identity\n}\nelse if (thisArg) {\n  callback = bind(callback, thisArg)\n}",inLoop:"callback(collection[index], index, collection)"},M={init:"true",inLoop:"if (!callback(collection[index], index, collection)) return !result"},N={args:"object",init:"object",top:"for (var source, sourceIndex = 1, length = arguments.length; sourceIndex < length; sourceIndex++) {\n  source = arguments[sourceIndex];\n"+(e?"  if (source) {":""),loopExp:"index in source",useHas:!1,inLoop:"object[index] = source[index]",bottom:(e?"  }\n":"")+"}"},O={init:"[]",inLoop:"callback(collection[index], index, collection) && result.push(collection[index])"},P={top:"if (thisArg) callback = bind(callback, thisArg)"},Q={init:"",exit:"if (!collection) return []",beforeLoop:{array:"result = Array(length)",object:"result = []"},inLoop:{array:"result[index] = callback(collection[index], index, collection)",object:"result.push(callback(collection[index], index, collection))"}},Y=R({args:"collection, target",init:"false",inLoop:"if (collection[index] === target) return true"}),Z=R(L,M),$=R(L,O),_=R(L,P,{init:"",inLoop:"if (callback(collection[index], index, collection)) return collection[index]"}),ab=R(L,P),bb=R(L,Q),cb=R(Q,{args:"collection, property",inLoop:{array:"result[index] = collection[index][property]",object:"result.push(collection[index][property])"}}),db=R({args:"collection, callback, accumulator, thisArg",init:"accumulator",top:"var noaccum = arguments.length < 3;\nif (thisArg) callback = bind(callback, thisArg)",beforeLoop:{array:"if (noaccum) result = collection[++index]"},inLoop:{array:"result = callback(result, collection[index], index, collection)",object:"result = noaccum\n  ? (noaccum = false, collection[index])\n  : callback(result, collection[index], index, collection)"}}),fb=R(L,O,{inLoop:"!"+O.inLoop}),gb=R(L,M,{init:"false",inLoop:M.inLoop.replace("!","")}),ib=R(Q,{args:"collection",inLoop:{array:"result[index] = collection[index]",object:"result.push(collection[index])"}}),Sb=R(N,{inLoop:"if (object[index] == undefined)"+N.inLoop}),Tb=R(N),Ub=R({args:"object",init:"[]",useHas:!1,inLoop:"if (toString.call(object[index]) == funcClass) result.push(index)",bottom:"result.sort()"}),Wb=function(a){return B.call(a)=="[object Arguments]"};Wb(arguments)||(Wb=function(a){return!!a&&!!y.call(a,"callee")});var Xb=D||function(a){return B.call(a)==o},_b=R({args:"value",init:"true",top:"var className = toString.call(value);\nif (className == arrayClass || className == stringClass) return !value.length",inLoop:{object:"return false"}}),kc=F||R({args:"object",exit:"if (!objectTypes[typeof object] || object === null) throw TypeError()",init:"[]",inLoop:"result.push(index)"});I.VERSION="0.2.2",I.after=Fb,I.bind=Gb,I.bindAll=Hb,I.chain=wc,I.clone=Rb,I.compact=jb,I.compose=Ib,I.contains=Y,I.debounce=Jb,I.defaults=Sb,I.defer=Lb,I.delay=Kb,I.difference=kb,I.escape=oc,I.every=Z,I.extend=Tb,I.filter=$,I.find=_,I.first=lb,I.flatten=mb,I.forEach=ab,I.functions=Ub,I.groupBy=nb,I.has=Vb,I.identity=pc,I.indexOf=pb,I.initial=qb,I.intersection=rb,I.invoke=sb,I.isArguments=Wb,I.isArray=Xb,I.isBoolean=Yb,I.isDate=Zb,I.isElement=$b,I.isEmpty=_b,I.isEqual=ac,I.isFinite=bc,I.isFunction=cc,I.isNaN=ec,I.isNull=fc,I.isNumber=gc,I.isObject=dc,I.isRegExp=hc,I.isString=ic,I.isUndefined=jc,I.keys=kc,I.last=tb,I.lastIndexOf=ub,I.map=bb,I.max=vb,I.memoize=Mb,I.min=wb,I.mixin=qc,I.noConflict=rc,I.once=Nb,I.partial=Ob,I.pick=lc,I.pluck=cb,I.range=xb,I.reduce=db,I.reduceRight=eb,I.reject=fb,I.rest=yb,I.result=sc,I.shuffle=zb,I.size=mc,I.some=gb,I.sortBy=ob,I.sortedIndex=Ab,I.tap=nc,I.template=tc,I.throttle=Pb,I.times=uc,I.toArray=hb,I.union=Bb,I.uniq=Cb,I.uniqueId=vc,I.values=ib,I.without=Db,I.wrap=Qb,I.zip=Eb,I.all=Z,I.any=gb,I.collect=bb,I.detect=_,I.each=ab,I.foldl=db,I.foldr=eb,I.head=lb,I.include=Y,I.inject=db,I.methods=Ub,I.select=$,I.tail=yb,I.take=lb,I.unique=Cb,I._createIterator=R,I._iteratorTemplate=K,J.prototype=I.prototype,qc(I),J.prototype.chain=xc,J.prototype.value=yc,ab(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=v[a];J.prototype[a]=function(){var a=this._wrapped;return arguments.length?b.apply(a,arguments):b.call(a),a.length===0&&delete a[0],this._chain&&(a=new J(a),a._chain=!0),a}}),ab(["concat","join","slice"],function(a){var b=v[a];J.prototype[a]=function(){var a=this._wrapped,c=arguments.length?b.apply(a,arguments):b.call(a);return this._chain&&(c=new J(c),c._chain=!0),c}}),typeof define=="function"&&typeof define.amd=="object"&&define.amd?(a._=I,define("underscore",[],function(){return I})):c?typeof module=="object"&&module&&module.exports==c?(module.exports=I)._=I:c._=I:a._=I})(this),function(a,b){typeof exports!="undefined"?b(a,exports,require("underscore")):typeof define=="function"&&define.amd?define("backbone",["underscore","jquery","exports"],function(c,d,e){a.Backbone=b(a,e,c,d)}):a.Backbone=b(a,{},a._,a.jQuery||a.Zepto||a.ender)}(this,function(a,b,c,d){var e=a.Backbone,f=Array.prototype.slice,g=Array.prototype.splice;b.VERSION="0.9.2",b.setDomLibrary=function(a){d=a},b.noConflict=function(){return a.Backbone=e,b},b.emulateHTTP=!1,b.emulateJSON=!1;var h=/\s+/,i=b.Events={on:function(a,b,c){var d,e,f,g,i;if(!b)return this;a=a.split(h),d=this._callbacks||(this._callbacks={});while(e=a.shift())i=d[e],f=i?i.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:i?i.next:f};return this},off:function(a,b,d){var e,f,g,i,j,k;if(!(f=this._callbacks))return;if(!(a||b||d))return delete this._callbacks,this;a=a?a.split(h):c.keys(f);while(e=a.shift()){g=f[e],delete f[e];if(!g||!b&&!d)continue;i=g.tail;while((g=g.next)!==i)j=g.callback,k=g.context,(b&&j!==b||d&&k!==d)&&this.on(e,j,k)}return this},trigger:function(a){var b,c,d,e,g,i,j;if(!(d=this._callbacks))return this;i=d.all,a=a.split(h),j=f.call(arguments,1);while(b=a.shift()){if(c=d[b]){e=c.tail;while((c=c.next)!==e)c.callback.apply(c.context||this,j)}if(c=i){e=c.tail,g=[b].concat(j);while((c=c.next)!==e)c.callback.apply(c.context||this,g)}}return this}};i.bind=i.on,i.unbind=i.off;var j=b.Model=function(a,b){var d;a||(a={}),b&&b.parse&&(a=this.parse(a));if(d=A(this,"defaults"))a=c.extend({},d,a);b&&b.collection&&(this.collection=b.collection),this.attributes={},this._escapedAttributes={},this.cid=c.uniqueId("c"),this.changed={},this._silent={},this._pending={},this.set(a,{silent:!0}),this.changed={},this._silent={},this._pending={},this._previousAttributes=c.clone(this.attributes),this.initialize.apply(this,arguments)};c.extend(j.prototype,i,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(a){return c.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;var d=this.get(a);return this._escapedAttributes[a]=c.escape(d==null?"":""+d)},has:function(a){return this.get(a)!=null},set:function(a,b,d){var e,f,g;c.isObject(a)||a==null?(e=a,d=b):(e={},e[a]=b),d||(d={});if(!e)return this;e instanceof j&&(e=e.attributes);if(d.unset)for(f in e)e[f]=void 0;if(!this._validate(e,d))return!1;this.idAttribute in e&&(this.id=e[this.idAttribute]);var h=d.changes={},i=this.attributes,k=this._escapedAttributes,l=this._previousAttributes||{};for(f in e){g=e[f];if(!c.isEqual(i[f],g)||d.unset&&c.has(i,f))delete k[f],(d.silent?this._silent:h)[f]=!0;d.unset?delete i[f]:i[f]=g,!c.isEqual(l[f],g)||c.has(i,f)!=c.has(l,f)?(this.changed[f]=g,d.silent||(this._pending[f]=!0)):(delete this.changed[f],delete this._pending[f])}return d.silent||this.change(d),this},unset:function(a,b){return(b||(b={})).unset=!0,this.set(a,null,b)},clear:function(a){return(a||(a={})).unset=!0,this.set(c.clone(this.attributes),a)},fetch:function(a){a=a?c.clone(a):{};var d=this,e=a.success;return a.success=function(b,c,f){if(!d.set(d.parse(b,f),a))return!1;e&&e(d,b)},a.error=b.wrapError(a.error,d,a),(this.sync||b.sync).call(this,"read",this,a)},save:function(a,d,e){var f,g;c.isObject(a)||a==null?(f=a,e=d):(f={},f[a]=d),e=e?c.clone(e):{};if(e.wait){if(!this._validate(f,e))return!1;g=c.clone(this.attributes)}var h=c.extend({},e,{silent:!0});if(f&&!this.set(f,e.wait?h:e))return!1;var i=this,j=e.success;e.success=function(a,b,d){var g=i.parse(a,d);e.wait&&(delete e.wait,g=c.extend(f||{},g));if(!i.set(g,e))return!1;j?j(i,a):i.trigger("sync",i,a,e)},e.error=b.wrapError(e.error,i,e);var k=this.isNew()?"create":"update",l=(this.sync||b.sync).call(this,k,this,e);return e.wait&&this.set(g,h),l},destroy:function(a){a=a?c.clone(a):{};var d=this,e=a.success,f=function(){d.trigger("destroy",d,d.collection,a)};if(this.isNew())return f(),!1;a.success=function(b){a.wait&&f(),e?e(d,b):d.trigger("sync",d,b,a)},a.error=b.wrapError(a.error,d,a);var g=(this.sync||b.sync).call(this,"delete",this,a);return a.wait||f(),g},url:function(){var a=A(this,"urlRoot")||A(this.collection,"url")||B();return this.isNew()?a:a+(a.charAt(a.length-1)=="/"?"":"/")+encodeURIComponent(this.id)},parse:function(a,b){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var d in this._silent)this._pending[d]=!0;var e=c.extend({},a.changes,this._silent);this._silent={};for(var d in e)this.trigger("change:"+d,this,this.get(d),a);if(b)return this;while(!c.isEmpty(this._pending)){this._pending={},this.trigger("change",this,a);for(var d in this.changed){if(this._pending[d]||this._silent[d])continue;delete this.changed[d]}this._previousAttributes=c.clone(this.attributes)}return this._changing=!1,this},hasChanged:function(a){return arguments.length?c.has(this.changed,a):!c.isEmpty(this.changed)},changedAttributes:function(a){if(!a)return this.hasChanged()?c.clone(this.changed):!1;var b,d=!1,e=this._previousAttributes;for(var f in a){if(c.isEqual(e[f],b=a[f]))continue;(d||(d={}))[f]=b}return d},previous:function(a){return!arguments.length||!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return c.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;a=c.extend({},this.attributes,a);var d=this.validate(a,b);return d?(b&&b.error?b.error(this,d,b):this.trigger("error",this,d,b),!1):!0}});var k=b.Collection=function(a,b){b||(b={}),b.model&&(this.model=b.model),b.comparator&&(this.comparator=b.comparator),this._reset(),this.initialize.apply(this,arguments),a&&this.reset(a,{silent:!0,parse:b.parse})};c.extend(k.prototype,i,{model:j,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var d,e,f,h,i,j,k={},l={},m=[];b||(b={}),a=c.isArray(a)?a.slice():[a];for(d=0,f=a.length;d<f;d++){if(!(h=a[d]=this._prepareModel(a[d],b)))throw new Error("Can't add an invalid model to a collection");i=h.cid,j=h.id;if(k[i]||this._byCid[i]||j!=null&&(l[j]||this._byId[j])){m.push(d);continue}k[i]=l[j]=h}d=m.length;while(d--)a.splice(m[d],1);for(d=0,f=a.length;d<f;d++)(h=a[d]).on("all",this._onModelEvent,this),this._byCid[h.cid]=h,h.id!=null&&(this._byId[h.id]=h);this.length+=f,e=b.at!=null?b.at:this.models.length,g.apply(this.models,[e,0].concat(a)),this.comparator&&this.sort({silent:!0});if(b.silent)return this;for(d=0,f=this.models.length;d<f;d++){if(!k[(h=this.models[d]).cid])continue;b.index=d,h.trigger("add",h,this,b)}return this},remove:function(a,b){var d,e,f,g;b||(b={}),a=c.isArray(a)?a.slice():[a];for(d=0,e=a.length;d<e;d++){g=this.getByCid(a[d])||this.get(a[d]);if(!g)continue;delete this._byId[g.id],delete this._byCid[g.cid],f=this.indexOf(g),this.models.splice(f,1),this.length--,b.silent||(b.index=f,g.trigger("remove",g,this,b)),this._removeReference(g)}return this},push:function(a,b){return a=this._prepareModel(a,b),this.add(a,b),a},pop:function(a){var b=this.at(this.length-1);return this.remove(b,a),b},unshift:function(a,b){return a=this._prepareModel(a,b),this.add(a,c.extend({at:0},b)),a},shift:function(a){var b=this.at(0);return this.remove(b,a),b},get:function(a){return a==null?void 0:this._byId[a.id!=null?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return c.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw new Error("Cannot sort a set without a comparator");var b=c.bind(this.comparator,this);return this.comparator.length==1?this.models=this.sortBy(b):this.models.sort(b),a.silent||this.trigger("reset",this,a),this},pluck:function(a){return c.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]),b||(b={});for(var d=0,e=this.models.length;d<e;d++)this._removeReference(this.models[d]);return this._reset(),this.add(a,c.extend({silent:!0},b)),b.silent||this.trigger("reset",this,b),this},fetch:function(a){a=a?c.clone(a):{},a.parse===undefined&&(a.parse=!0);var d=this,e=a.success;return a.success=function(b,c,f){d[a.add?"add":"reset"](d.parse(b,f),a),e&&e(d,b)},a.error=b.wrapError(a.error,d,a),(this.sync||b.sync).call(this,"read",this,a)},create:function(a,b){var d=this;b=b?c.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||d.add(a,b);var e=b.success;return b.success=function(c,f,g){b.wait&&d.add(c,b),e?e(c,f):c.trigger("sync",a,f,b)},a.save(null,b),a},parse:function(a,b){return a},chain:function(){return c(this.models).chain()},_reset:function(a){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(a,b){b||(b={});if(a instanceof j)a.collection||(a.collection=this);else{var c=a;b.collection=this,a=new this.model(c,b),a._validate(a.attributes,b)||(a=!1)}return a},_removeReference:function(a){this==a.collection&&delete a.collection,a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){if((a=="add"||a=="remove")&&c!=this)return;a=="destroy"&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,arguments)}});var l=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];c.each(l,function(a){k.prototype[a]=function(){return c[a].apply(c,[this.models].concat(c.toArray(arguments)))}});var m=b.Router=function(a){a||(a={}),a.routes&&(this.routes=a.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},n=/:\w+/g,o=/\*\w+/g,p=/[-[\]{}()+?.,\\^$|#\s]/g;c.extend(m.prototype,i,{initialize:function(){},route:function(a,d,e){return b.history||(b.history=new q),c.isRegExp(a)||(a=this._routeToRegExp(a)),e||(e=this[d]),b.history.route(a,c.bind(function(c){var f=this._extractParameters(a,c);e&&e.apply(this,f),this.trigger.apply(this,["route:"+d].concat(f)),b.history.trigger("route",this,d,f)},this)),this},navigate:function(a,c){b.history.navigate(a,c)},_bindRoutes:function(){if(!this.routes)return;var a=[];for(var b in this.routes)a.unshift([b,this.routes[b]]);for(var c=0,d=a.length;c<d;c++)this.route(a[c][0],a[c][1],this[a[c][1]])},_routeToRegExp:function(a){return a=a.replace(p,"\\$&").replace(n,"([^/]+)").replace(o,"(.*?)"),new RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var q=b.History=function(){this.handlers=[],c.bindAll(this,"checkUrl")},r=/^[#\/]/,s=/msie [\w.]+/;q.started=!1,c.extend(q.prototype,i,{interval:50,getHash:function(a){var b=a?a.location:window.location,c=b.href.match(/#(.*)$/);return c?c[1]:""},getFragment:function(a,b){if(a==null)if(this._hasPushState||b){a=window.location.pathname;var c=window.location.search;c&&(a+=c)}else a=this.getHash();return a.indexOf(this.options.root)||(a=a.substr(this.options.root.length)),a.replace(r,"")},start:function(a){if(q.started)throw new Error("Backbone.history has already been started");q.started=!0,this.options=c.extend({},{root:"/"},this.options,a),this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var b=this.getFragment(),e=document.documentMode,f=s.exec(navigator.userAgent.toLowerCase())&&(!e||e<=7);f&&(this.iframe=d('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(b)),this._hasPushState?d(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!f?d(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=b;var g=window.location,h=g.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!h)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&h&&g.hash&&(this.fragment=this.getHash().replace(r,""),window.history.replaceState({},document.title,g.protocol+"//"+g.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},stop:function(){d(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),q.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(a){var b=this.getFragment();b==this.fragment&&this.iframe&&(b=this.getFragment(this.getHash(this.iframe)));if(b==this.fragment)return!1;this.iframe&&this.navigate(b),this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a),d=c.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0});return d},navigate:function(a,b){if(!q.started)return!1;if(!b||b===!0)b={trigger:b};var c=(a||"").replace(r,"");if(this.fragment==c)return;this._hasPushState?(c.indexOf(this.options.root)!=0&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a)},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var t=b.View=function(a){this.cid=c.uniqueId("view"),this._configure(a||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},u=/^(\S+)\s*(.*)$/,v=["model","collection","el","id","attributes","className","tagName"];c.extend(t.prototype,i,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(a,b,c){var e=document.createElement(a);return b&&d(e).attr(b),c!=null&&d(e).html(c),e},setElement:function(a,b){return this.$el&&this.undelegateEvents(),this.$el=a instanceof d?a:d(a),this.el=this.$el[0],b!==!1&&this.delegateEvents(),this},delegateEvents:function(a){if(!a&&!(a=A(this,"events")))return;this.undelegateEvents();for(var b in a){var d=a[b];c.isFunction(d)||(d=this[a[b]]);if(!d)throw new Error('Method "'+a[b]+'" does not exist');var e=b.match(u),f=e[1],g=e[2];d=c.bind(d,this),f+=".delegateEvents"+this.cid,g===""?this.$el.bind(f,d):this.$el.delegate(g,f,d)}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=c.extend({},this.options,a));for(var b=0,d=v.length;b<d;b++){var e=v[b];a[e]&&(this[e]=a[e])}this.options=a},_ensureElement:function(){if(!this.el){var a=A(this,"attributes")||{};this.id&&(a.id=this.id),this.className&&(a["class"]=this.className),this.setElement(this.make(this.tagName,a),!1)}else this.setElement(this.el,!1)}});var w=function(a,b){var c=z(this,a,b);return c.extend=this.extend,c};j.extend=k.extend=m.extend=t.extend=w;var x={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};b.sync=function(a,e,f){var g=x[a];f||(f={});var h={type:g,dataType:"json"};return f.url||(h.url=A(e,"url")||B()),!f.data&&e&&(a=="create"||a=="update")&&(h.contentType="application/json",h.data=JSON.stringify(e.toJSON())),b.emulateJSON&&(h.contentType="application/x-www-form-urlencoded",h.data=h.data?{model:h.data}:{}),b.emulateHTTP&&(g==="PUT"||g==="DELETE")&&(b.emulateJSON&&(h.data._method=g),h.type="POST",h.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",g)}),h.type!=="GET"&&!b.emulateJSON&&(h.processData=!1),d.ajax(c.extend(h,f))},b.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d,a?a(b,e,c):b.trigger("error",b,e,c)}};var y=function(){},z=function(a,b,d){var e;return b&&b.hasOwnProperty("constructor")?e=b.constructor:e=function(){a.apply(this,arguments)},c.extend(e,a),y.prototype=a.prototype,e.prototype=new y,b&&c.extend(e.prototype,b),d&&c.extend(e,d),e.prototype.constructor=e,e.__super__=a.prototype,e},A=function(a,b){return!a||!a[b]?null:c.isFunction(a[b])?a[b]():a[b]},B=function(){throw new Error('A "url" property or function must be specified')};return b}),require.config({paths:{backbone:"lib/backbone-amd",underscore:"lib/lodash",jquerymobile:"lib/jquery.mobile-1.1.0",Handlebars:"lib/require/handlebars-1.0.0.beta.6",hbs:"lib/require/hbs",MyApp:"app"},locale:"pt_br",hbs:{helperDirectory:"templates/helpers/",i18nDirectory:"templates/i18n/"}}),require(["require","backbone","jquery","underscore"],function(a,b,c,d){c(document).bind("mobileinit",function(){c.mobile.ajaxEnabled=!1,c.mobile.linkBindingEnabled=!1,c.mobile.hashListeningEnabled=!1,c.mobile.pushStateEnabled=!1,c('div[data-role="page"]').live("pagehide",function(a,b){c(a.currentTarget).remove()})}),a(["require","jquerymobile","MyApp"],function(a,b,c){c.start()})}),define("main",function(){})