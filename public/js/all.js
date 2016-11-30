/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=2915087f5dde70867fcf)
 * Config saved to config.json and https://gist.github.com/2915087f5dde70867fcf
 */
if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.2
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.2'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.2
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.2'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.2
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.2'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.2
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.2'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--                        // up
    if (e.which == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.2
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.2'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.2
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.2'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (self && self.$tip && self.$tip.is(':visible')) {
      self.hoverState = 'in'
      return
    }

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
        var containerDim = this.getPosition($container)

        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.2
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.2'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.2
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.2'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.2
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.2'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = $(document.body).height()

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.2
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.2'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.2
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.2'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.2
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

function copyCode() {
    $("#codesnippet").select();
    try {
        var successful = document.execCommand('copy');
        if (successful) {
            $('#copyButton').removeClass('btn-default');
            $('#copyButton').addClass('btn-success');
        } else {
            $('#copyButton').removeClass('btn-default');
            $('#copyButton').addClass('btn-danger');
        }
    } catch (err) {
        $('#copyButton').removeClass('btn-default');
        $('#copyButton').addClass('btn-danger');
    }
}
window.onload = function() {
    $('#copyButton').bind('click', copyCode);
};
$(document).ready(function() {
    $(".hint").tooltip();
    $(".language-text-area").each(function() {
        auto_grow(this);
    });
    $(".language-text-area").keyup(function() {
        auto_grow(this);
    });
});

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight + 10) + "px";
}
//based on https://github.com/encrypt-to/secure.contactform.php
/* The MIT License (MIT)
Copyright (c) 2013 Jan Wiegelmann

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/
function encrypt() {
    if (window.crypto && window.crypto.getRandomValues) {
        var message = document.getElementById("message");
        if (message.value.indexOf("-----BEGIN PGP MESSAGE-----") !== -1 && message.value.indexOf("-----END PGP MESSAGE-----") !== -1) {
            // encryption done
        } else {
            var pub_key = openpgp.key.readArmored(document.getElementById("pubkey").innerHTML).keys[0];
            var plaintext = message.value;
            var ciphertext = openpgp.encryptMessage([pub_key], plaintext);
            message.value = ciphertext;
            return true;
        }
    } else {
        if (isEnglish()) {
            window.alert("Error: Your browser is not supported. Please install an up to date browser like Mozilla Firefox.");
        } else {
            window.alert("Fehler: Ihr Browser wird nicht unterstützt. Bitte installieren Sie einen aktuellen Broweser wie z.B. Mozilla Firefox.");
        }
        return false;
    }
}
$(document).ready(function() {
    if (isEnglish()) {
        $(".encrypt-btn").html("encrypt and send");
    } else {
        $(".encrypt-btn").html("Verschlüsseln und senden");
    }
    $(".contact").submit(function() {
        return encrypt(this);
    });
});

function isEnglish() {
    if (window.location.href.indexOf('/en/') == -1) {
        return false;
    } else {
        return true;
    }
}
(function ($, undefined) {
    'use strict';
    var defaults = {
        item: 3,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 10,
        addClass: '',
        mode: 'slide',
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',
        easing: 'linear', //'for jquery animation',//
        speed: 400, //ms'
        auto: false,
        pauseOnHover: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
        rtl: false,
        adaptiveHeight: false,
        vertical: false,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,
        responsive: [],
        /* jshint ignore:start */
        onBeforeStart: function ($el) {},
        onSliderLoad: function ($el) {},
        onBeforeSlide: function ($el, scene) {},
        onAfterSlide: function ($el, scene) {},
        onBeforeNextSlide: function ($el, scene) {},
        onBeforePrevSlide: function ($el, scene) {}
        /* jshint ignore:end */
    };
    $.fn.lightSlider = function (options) {
        if (this.length === 0) {
            return this;
        }

        if (this.length > 1) {
            this.each(function () {
                $(this).lightSlider(options);
            });
            return this;
        }

        var plugin = {},
            settings = $.extend(true, {}, defaults, options),
            settingsTemp = {},
            $el = this;
        plugin.$el = this;

        if (settings.mode === 'fade') {
            settings.vertical = false;
        }
        var $children = $el.children(),
            windowW = $(window).width(),
            breakpoint = null,
            resposiveObj = null,
            length = 0,
            w = 0,
            on = false,
            elSize = 0,
            $slide = '',
            scene = 0,
            property = (settings.vertical === true) ? 'height' : 'width',
            gutter = (settings.vertical === true) ? 'margin-bottom' : 'margin-right',
            slideValue = 0,
            pagerWidth = 0,
            slideWidth = 0,
            thumbWidth = 0,
            interval = null,
            isTouch = ('ontouchstart' in document.documentElement);
        var refresh = {};

        refresh.chbreakpoint = function () {
            windowW = $(window).width();
            if (settings.responsive.length) {
                var item;
                if (settings.autoWidth === false) {
                    item = settings.item;
                }
                if (windowW < settings.responsive[0].breakpoint) {
                    for (var i = 0; i < settings.responsive.length; i++) {
                        if (windowW < settings.responsive[i].breakpoint) {
                            breakpoint = settings.responsive[i].breakpoint;
                            resposiveObj = settings.responsive[i];
                        }
                    }
                }
                if (typeof resposiveObj !== 'undefined' && resposiveObj !== null) {
                    for (var j in resposiveObj.settings) {
                        if (resposiveObj.settings.hasOwnProperty(j)) {
                            if (typeof settingsTemp[j] === 'undefined' || settingsTemp[j] === null) {
                                settingsTemp[j] = settings[j];
                            }
                            settings[j] = resposiveObj.settings[j];
                        }
                    }
                }
                if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint) {
                    for (var k in settingsTemp) {
                        if (settingsTemp.hasOwnProperty(k)) {
                            settings[k] = settingsTemp[k];
                        }
                    }
                }
                if (settings.autoWidth === false) {
                    if (slideValue > 0 && slideWidth > 0) {
                        if (item !== settings.item) {
                            scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove));
                        }
                    }
                }
            }
        };

        refresh.calSW = function () {
            if (settings.autoWidth === false) {
                slideWidth = (elSize - ((settings.item * (settings.slideMargin)) - settings.slideMargin)) / settings.item;
            }
        };

        refresh.calWidth = function (cln) {
            var ln = cln === true ? $slide.find('.lslide').length : $children.length;
            if (settings.autoWidth === false) {
                w = ln * (slideWidth + settings.slideMargin);
            } else {
                w = 0;
                for (var i = 0; i < ln; i++) {
                    w += (parseInt($children.eq(i).width()) + settings.slideMargin);
                }
            }
            return w;
        };
        plugin = {
            doCss: function () {
                var support = function () {
                    var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
                    var root = document.documentElement;
                    for (var i = 0; i < transition.length; i++) {
                        if (transition[i] in root.style) {
                            return true;
                        }
                    }
                };
                if (settings.useCSS && support()) {
                    return true;
                }
                return false;
            },
            keyPress: function () {
                if (settings.keyPress) {
                    $(document).on('keyup.lightslider', function (e) {
                        if (!$(':focus').is('input, textarea')) {
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            if (e.keyCode === 37) {
                                $el.goToPrevSlide();
                            } else if (e.keyCode === 39) {
                                $el.goToNextSlide();
                            }
                        }
                    });
                }
            },
            controls: function () {
                if (settings.controls) {
                    $el.after('<div class="lSAction"><a class="lSPrev">' + settings.prevHtml + '</a><a class="lSNext">' + settings.nextHtml + '</a></div>');
                    if (!settings.autoWidth) {
                        if (length <= settings.item) {
                            $slide.find('.lSAction').hide();
                        }
                    } else {
                        if (refresh.calWidth(false) < elSize) {
                            $slide.find('.lSAction').hide();
                        }
                    }
                    $slide.find('.lSAction a').on('click', function (e) {
                        if (e.preventDefault) {
                            e.preventDefault();
                        } else {
                            e.returnValue = false;
                        }
                        if ($(this).attr('class') === 'lSPrev') {
                            $el.goToPrevSlide();
                        } else {
                            $el.goToNextSlide();
                        }
                        return false;
                    });
                }
            },
            initialStyle: function () {
                var $this = this;
                if (settings.mode === 'fade') {
                    settings.autoWidth = false;
                    settings.slideEndAnimation = false;
                }
                if (settings.auto) {
                    settings.slideEndAnimation = false;
                }
                if (settings.autoWidth) {
                    settings.slideMove = 1;
                    settings.item = 1;
                }
                if (settings.loop) {
                    settings.slideMove = 1;
                    settings.freeMove = false;
                }
                settings.onBeforeStart.call(this, $el);
                refresh.chbreakpoint();
                $el.addClass('lightSlider').wrap('<div class="lSSlideOuter ' + settings.addClass + '"><div class="lSSlideWrapper"></div></div>');
                $slide = $el.parent('.lSSlideWrapper');
                if (settings.rtl === true) {
                    $slide.parent().addClass('lSrtl');
                }
                if (settings.vertical) {
                    $slide.parent().addClass('vertical');
                    elSize = settings.verticalHeight;
                    $slide.css('height', elSize + 'px');
                } else {
                    elSize = $el.outerWidth();
                }
                $children.addClass('lslide');
                if (settings.loop === true && settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.clone = function () {
                        if (refresh.calWidth(true) > elSize) {
                            /**/
                            var tWr = 0,
                                tI = 0;
                            for (var k = 0; k < $children.length; k++) {
                                tWr += (parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin);
                                tI++;
                                if (tWr >= (elSize + settings.slideMargin)) {
                                    break;
                                }
                            }
                            var tItem = settings.autoWidth === true ? tI : settings.item;

                            /**/
                            if (tItem < $el.find('.clone.left').length) {
                                for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) {
                                    $children.eq(i).remove();
                                }
                            }
                            if (tItem < $el.find('.clone.right').length) {
                                for (var j = $children.length - 1; j > ($children.length - 1 - $el.find('.clone.right').length); j--) {
                                    scene--;
                                    $children.eq(j).remove();
                                }
                            }
                            /**/
                            for (var n = $el.find('.clone.right').length; n < tItem; n++) {
                                $el.find('.lslide').eq(n).clone().removeClass('lslide').addClass('clone right').appendTo($el);
                                scene++;
                            }
                            for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > ($el.find('.lslide').length - tItem); m--) {
                                $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el);
                            }
                            $children = $el.children();
                        } else {
                            if ($children.hasClass('clone')) {
                                $el.find('.clone').remove();
                                $this.move($el, 0);
                            }
                        }
                    };
                    refresh.clone();
                }
                refresh.sSW = function () {
                    length = $children.length;
                    if (settings.rtl === true && settings.vertical === false) {
                        gutter = 'margin-left';
                    }
                    if (settings.autoWidth === false) {
                        $children.css(property, slideWidth + 'px');
                    }
                    $children.css(gutter, settings.slideMargin + 'px');
                    w = refresh.calWidth(false);
                    $el.css(property, w + 'px');
                    if (settings.loop === true && settings.mode === 'slide') {
                        if (on === false) {
                            scene = $el.find('.clone.left').length;
                        }
                    }
                };
                refresh.calL = function () {
                    $children = $el.children();
                    length = $children.length;
                };
                if (this.doCss()) {
                    $slide.addClass('usingCss');
                }
                refresh.calL();
                if (settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.sSW();
                    if (settings.loop === true) {
                        slideValue = $this.slideValue();
                        this.move($el, slideValue);
                    }
                    if (settings.vertical === false) {
                        this.setHeight($el, false);
                    }

                } else {
                    this.setHeight($el, true);
                    $el.addClass('lSFade');
                    if (!this.doCss()) {
                        $children.fadeOut(0);
                        $children.eq(scene).fadeIn(0);
                    }
                }
                if (settings.loop === true && settings.mode === 'slide') {
                    $children.eq(scene).addClass('active');
                } else {
                    $children.first().addClass('active');
                }
            },
            pager: function () {
                var $this = this;
                refresh.createPager = function () {
                    thumbWidth = (elSize - ((settings.thumbItem * (settings.thumbMargin)) - settings.thumbMargin)) / settings.thumbItem;
                    var $children = $slide.find('.lslide');
                    var length = $slide.find('.lslide').length;
                    var i = 0,
                        pagers = '',
                        v = 0;
                    for (i = 0; i < length; i++) {
                        if (settings.mode === 'slide') {
                            // calculate scene * slide value
                            if (!settings.autoWidth) {
                                v = i * ((slideWidth + settings.slideMargin) * settings.slideMove);
                            } else {
                                v += ((parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove);
                            }
                        }
                        var thumb = $children.eq(i * settings.slideMove).attr('data-thumb');
                        if (settings.gallery === true) {
                            pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>';
                        } else {
                            pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                        }
                        if (settings.mode === 'slide') {
                            if ((v) >= w - elSize - settings.slideMargin) {
                                i = i + 1;
                                var minPgr = 2;
                                if (settings.autoWidth) {
                                    pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                                    minPgr = 1;
                                }
                                if (i < minPgr) {
                                    pagers = null;
                                    $slide.parent().addClass('noPager');
                                } else {
                                    $slide.parent().removeClass('noPager');
                                }
                                break;
                            }
                        }
                    }
                    var $cSouter = $slide.parent();
                    $cSouter.find('.lSPager').html(pagers); 
                    if (settings.gallery === true) {
                        if (settings.vertical === true) {
                            // set Gallery thumbnail width
                            $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px');
                        }
                        pagerWidth = (i * (settings.thumbMargin + thumbWidth)) + 0.5;
                        $cSouter.find('.lSPager').css({
                            property: pagerWidth + 'px',
                            'transition-duration': settings.speed + 'ms'
                        });
                        if (settings.vertical === true) {
                            $slide.parent().css('padding-right', (settings.vThumbWidth + settings.galleryMargin) + 'px');
                        }
                        $cSouter.find('.lSPager').css(property, pagerWidth + 'px');
                    }
                    var $pager = $cSouter.find('.lSPager').find('li');
                    $pager.first().addClass('active');
                    $pager.on('click', function () {
                        if (settings.loop === true && settings.mode === 'slide') {
                            scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.active').index());
                        } else {
                            scene = $pager.index(this);
                        }
                        $el.mode(false);
                        if (settings.gallery === true) {
                            $this.slideThumb();
                        }
                        return false;
                    });
                };
                if (settings.pager) {
                    var cl = 'lSpg';
                    if (settings.gallery) {
                        cl = 'lSGallery';
                    }
                    $slide.after('<ul class="lSPager ' + cl + '"></ul>');
                    var gMargin = (settings.vertical) ? 'margin-left' : 'margin-top';
                    $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
                    refresh.createPager();
                }

                setTimeout(function () {
                    refresh.init();
                }, 0);
            },
            setHeight: function (ob, fade) {
                var obj = null,
                    $this = this;
                if (settings.loop) {
                    obj = ob.children('.lslide ').first();
                } else {
                    obj = ob.children().first();
                }
                var setCss = function () {
                    var tH = obj.outerHeight(),
                        tP = 0,
                        tHT = tH;
                    if (fade) {
                        tH = 0;
                        tP = ((tHT) * 100) / elSize;
                    }
                    ob.css({
                        'height': tH + 'px',
                        'padding-bottom': tP + '%'
                    });
                };
                setCss();
                if (obj.find('img').length) {
                    if ( obj.find('img')[0].complete) {
                        setCss();
                        if (!interval) {
                            $this.auto();
                        }   
                    }else{
                        obj.find('img').load(function () {
                            setTimeout(function () {
                                setCss();
                                if (!interval) {
                                    $this.auto();
                                }
                            }, 100);
                        });
                    }
                }else{
                    if (!interval) {
                        $this.auto();
                    }
                }
            },
            active: function (ob, t) {
                if (this.doCss() && settings.mode === 'fade') {
                    $slide.addClass('on');
                }
                var sc = 0;
                if (scene * settings.slideMove < length) {
                    ob.removeClass('active');
                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.fadeOut(settings.speed);
                    }
                    if (t === true) {
                        sc = scene;
                    } else {
                        sc = scene * settings.slideMove;
                    }
                    //t === true ? sc = scene : sc = scene * settings.slideMove;
                    var l, nl;
                    if (t === true) {
                        l = ob.length;
                        nl = l - 1;
                        if (sc + 1 >= l) {
                            sc = nl;
                        }
                    }
                    if (settings.loop === true && settings.mode === 'slide') {
                        //t === true ? sc = scene - $el.find('.clone.left').length : sc = scene * settings.slideMove;
                        if (t === true) {
                            sc = scene - $el.find('.clone.left').length;
                        } else {
                            sc = scene * settings.slideMove;
                        }
                        if (t === true) {
                            l = ob.length;
                            nl = l - 1;
                            if (sc + 1 === l) {
                                sc = nl;
                            } else if (sc + 1 > l) {
                                sc = 0;
                            }
                        }
                    }

                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.eq(sc).fadeIn(settings.speed);
                    }
                    ob.eq(sc).addClass('active');
                } else {
                    ob.removeClass('active');
                    ob.eq(ob.length - 1).addClass('active');
                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
                        ob.fadeOut(settings.speed);
                        ob.eq(sc).fadeIn(settings.speed);
                    }
                }
            },
            move: function (ob, v) {
                if (settings.rtl === true) {
                    v = -v;
                }
                if (this.doCss()) {
                    if (settings.vertical === true) {
                        ob.css({
                            'transform': 'translate3d(0px, ' + (-v) + 'px, 0px)',
                            '-webkit-transform': 'translate3d(0px, ' + (-v) + 'px, 0px)'
                        });
                    } else {
                        ob.css({
                            'transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                            '-webkit-transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                        });
                    }
                } else {
                    if (settings.vertical === true) {
                        ob.css('position', 'relative').animate({
                            top: -v + 'px'
                        }, settings.speed, settings.easing);
                    } else {
                        ob.css('position', 'relative').animate({
                            left: -v + 'px'
                        }, settings.speed, settings.easing);
                    }
                }
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true);
            },
            fade: function () {
                this.active($children, false);
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true);
            },
            slide: function () {
                var $this = this;
                refresh.calSlide = function () {
                    if (w > elSize) {
                        slideValue = $this.slideValue();
                        $this.active($children, false);
                        if ((slideValue) > w - elSize - settings.slideMargin) {
                            slideValue = w - elSize - settings.slideMargin;
                        } else if (slideValue < 0) {
                            slideValue = 0;
                        }
                        $this.move($el, slideValue);
                        if (settings.loop === true && settings.mode === 'slide') {
                            if (scene >= (length - ($el.find('.clone.left').length / settings.slideMove))) {
                                $this.resetSlide($el.find('.clone.left').length);
                            }
                            if (scene === 0) {
                                $this.resetSlide($slide.find('.lslide').length);
                            }
                        }
                    }
                };
                refresh.calSlide();
            },
            resetSlide: function (s) {
                var $this = this;
                $slide.find('.lSAction a').addClass('disabled');
                setTimeout(function () {
                    scene = s;
                    $slide.css('transition-duration', '0ms');
                    slideValue = $this.slideValue();
                    $this.active($children, false);
                    plugin.move($el, slideValue);
                    setTimeout(function () {
                        $slide.css('transition-duration', settings.speed + 'ms');
                        $slide.find('.lSAction a').removeClass('disabled');
                    }, 50);
                }, settings.speed + 100);
            },
            slideValue: function () {
                var _sV = 0;
                if (settings.autoWidth === false) {
                    _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove);
                } else {
                    _sV = 0;
                    for (var i = 0; i < scene; i++) {
                        _sV += (parseInt($children.eq(i).width()) + settings.slideMargin);
                    }
                }
                return _sV;
            },
            slideThumb: function () {
                var position;
                switch (settings.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = (elSize / 2) - (thumbWidth / 2);
                    break;
                case 'right':
                    position = elSize - thumbWidth;
                }
                var sc = scene - $el.find('.clone.left').length;
                var $pager = $slide.parent().find('.lSPager');
                if (settings.mode === 'slide' && settings.loop === true) {
                    if (sc >= $pager.children().length) {
                        sc = 0;
                    } else if (sc < 0) {
                        sc = $pager.children().length;
                    }
                }
                var thumbSlide = sc * ((thumbWidth + settings.thumbMargin)) - (position);
                if ((thumbSlide + elSize) > pagerWidth) {
                    thumbSlide = pagerWidth - elSize - settings.thumbMargin;
                }
                if (thumbSlide < 0) {
                    thumbSlide = 0;
                }
                this.move($pager, thumbSlide);
            },
            auto: function () {
                if (settings.auto) {
                    clearInterval(interval);
                    interval = setInterval(function () {
                        $el.goToNextSlide();
                    }, settings.pause);
                }
            },
            pauseOnHover: function(){
                var $this = this;
                if (settings.auto && settings.pauseOnHover) {
                    $slide.on('mouseenter', function(){
                        $(this).addClass('ls-hover');
                        $el.pause();
                        settings.auto = true;
                    });
                    $slide.on('mouseleave',function(){
                        $(this).removeClass('ls-hover');
                        if (!$slide.find('.lightSlider').hasClass('lsGrabbing')) {
                            $this.auto();
                        }
                    });
                }
            },
            touchMove: function (endCoords, startCoords) {
                $slide.css('transition-duration', '0ms');
                if (settings.mode === 'slide') {
                    var distance = endCoords - startCoords;
                    var swipeVal = slideValue - distance;
                    if ((swipeVal) >= w - elSize - settings.slideMargin) {
                        if (settings.freeMove === false) {
                            swipeVal = w - elSize - settings.slideMargin;
                        } else {
                            var swipeValT = w - elSize - settings.slideMargin;
                            swipeVal = swipeValT + ((swipeVal - swipeValT) / 5);

                        }
                    } else if (swipeVal < 0) {
                        if (settings.freeMove === false) {
                            swipeVal = 0;
                        } else {
                            swipeVal = swipeVal / 5;
                        }
                    }
                    this.move($el, swipeVal);
                }
            },

            touchEnd: function (distance) {
                $slide.css('transition-duration', settings.speed + 'ms');
                if (settings.mode === 'slide') {
                    var mxVal = false;
                    var _next = true;
                    slideValue = slideValue - distance;
                    if ((slideValue) > w - elSize - settings.slideMargin) {
                        slideValue = w - elSize - settings.slideMargin;
                        if (settings.autoWidth === false) {
                            mxVal = true;
                        }
                    } else if (slideValue < 0) {
                        slideValue = 0;
                    }
                    var gC = function (next) {
                        var ad = 0;
                        if (!mxVal) {
                            if (next) {
                                ad = 1;
                            }
                        }
                        if (!settings.autoWidth) {
                            var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
                            scene = parseInt(num) + ad;
                            if (slideValue >= (w - elSize - settings.slideMargin)) {
                                if (num % 1 !== 0) {
                                    scene++;
                                }
                            }
                        } else {
                            var tW = 0;
                            for (var i = 0; i < $children.length; i++) {
                                tW += (parseInt($children.eq(i).width()) + settings.slideMargin);
                                scene = i + ad;
                                if (tW >= slideValue) {
                                    break;
                                }
                            }
                        }
                    };
                    if (distance >= settings.swipeThreshold) {
                        gC(false);
                        _next = false;
                    } else if (distance <= -settings.swipeThreshold) {
                        gC(true);
                        _next = false;
                    }
                    $el.mode(_next);
                    this.slideThumb();
                } else {
                    if (distance >= settings.swipeThreshold) {
                        $el.goToPrevSlide();
                    } else if (distance <= -settings.swipeThreshold) {
                        $el.goToNextSlide();
                    }
                }
            },



            enableDrag: function () {
                var $this = this;
                if (!isTouch) {
                    var startCoords = 0,
                        endCoords = 0,
                        isDraging = false;
                    $slide.find('.lightSlider').addClass('lsGrab');
                    $slide.on('mousedown', function (e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        if ($(e.target).attr('class') !== ('lSPrev') && $(e.target).attr('class') !== ('lSNext')) {
                            startCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            isDraging = true;
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }
                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                            $slide.scrollLeft += 1;
                            $slide.scrollLeft -= 1;
                            // *
                            $slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
                            clearInterval(interval);
                        }
                    });
                    $(window).on('mousemove', function (e) {
                        if (isDraging) {
                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            $this.touchMove(endCoords, startCoords);
                        }
                    });
                    $(window).on('mouseup', function (e) {
                        if (isDraging) {
                            $slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
                            isDraging = false;
                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            var distance = endCoords - startCoords;
                            if (Math.abs(distance) >= settings.swipeThreshold) {
                                $(window).on('click.ls', function (e) {
                                    if (e.preventDefault) {
                                        e.preventDefault();
                                    } else {
                                        e.returnValue = false;
                                    }
                                    e.stopImmediatePropagation();
                                    e.stopPropagation();
                                    $(window).off('click.ls');
                                });
                            }

                            $this.touchEnd(distance);

                        }
                    });
                }
            },




            enableTouch: function () {
                var $this = this;
                if (isTouch) {
                    var startCoords = {},
                        endCoords = {};
                    $slide.on('touchstart', function (e) {
                        endCoords = e.originalEvent.targetTouches[0];
                        startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
                        startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
                        clearInterval(interval);
                    });
                    $slide.on('touchmove', function (e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        var orig = e.originalEvent;
                        endCoords = orig.targetTouches[0];
                        var xMovement = Math.abs(endCoords.pageX - startCoords.pageX);
                        var yMovement = Math.abs(endCoords.pageY - startCoords.pageY);
                        if (settings.vertical === true) {
                            if ((yMovement * 3) > xMovement) {
                                e.preventDefault();
                            }
                            $this.touchMove(endCoords.pageY, startCoords.pageY);
                        } else {
                            if ((xMovement * 3) > yMovement) {
                                e.preventDefault();
                            }
                            $this.touchMove(endCoords.pageX, startCoords.pageX);
                        }

                    });
                    $slide.on('touchend', function () {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        var distance;
                        if (settings.vertical === true) {
                            distance = endCoords.pageY - startCoords.pageY;
                        } else {
                            distance = endCoords.pageX - startCoords.pageX;
                        }
                        $this.touchEnd(distance);
                    });
                }
            },
            build: function () {
                var $this = this;
                $this.initialStyle();
                if (this.doCss()) {

                    if (settings.enableTouch === true) {
                        $this.enableTouch();
                    }
                    if (settings.enableDrag === true) {
                        $this.enableDrag();
                    }
                }

                $(window).on('focus', function(){
                    $this.auto();
                });
                
                $(window).on('blur', function(){
                    clearInterval(interval);
                });

                $this.pager();
                $this.pauseOnHover();
                $this.controls();
                $this.keyPress();
            }
        };
        plugin.build();
        refresh.init = function () {
            refresh.chbreakpoint();
            if (settings.vertical === true) {
                if (settings.item > 1) {
                    elSize = settings.verticalHeight;
                } else {
                    elSize = $children.outerHeight();
                }
                $slide.css('height', elSize + 'px');
            } else {
                elSize = $slide.outerWidth();
            }
            if (settings.loop === true && settings.mode === 'slide') {
                refresh.clone();
            }
            refresh.calL();
            if (settings.mode === 'slide') {
                $el.removeClass('lSSlide');
            }
            if (settings.mode === 'slide') {
                refresh.calSW();
                refresh.sSW();
            }
            setTimeout(function () {
                if (settings.mode === 'slide') {
                    $el.addClass('lSSlide');
                }
            }, 1000);
            if (settings.pager) {
                refresh.createPager();
            }
            if (settings.adaptiveHeight === true && settings.vertical === false) {
                $el.css('height', $children.eq(scene).outerHeight(true));
            }
            if (settings.adaptiveHeight === false) {
                if (settings.mode === 'slide') {
                    if (settings.vertical === false) {
                        plugin.setHeight($el, false);
                    }else{
                        plugin.auto();
                    }
                } else {
                    plugin.setHeight($el, true);
                }
            }
            if (settings.gallery === true) {
                plugin.slideThumb();
            }
            if (settings.mode === 'slide') {
                plugin.slide();
            }
            if (settings.autoWidth === false) {
                if ($children.length <= settings.item) {
                    $slide.find('.lSAction').hide();
                } else {
                    $slide.find('.lSAction').show();
                }
            } else {
                if ((refresh.calWidth(false) < elSize) && (w !== 0)) {
                    $slide.find('.lSAction').hide();
                } else {
                    $slide.find('.lSAction').show();
                }
            }
        };
        $el.goToPrevSlide = function () {
            if (scene > 0) {
                settings.onBeforePrevSlide.call(this, $el, scene);
                scene--;
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            } else {
                if (settings.loop === true) {
                    settings.onBeforePrevSlide.call(this, $el, scene);
                    if (settings.mode === 'fade') {
                        var l = (length - 1);
                        scene = parseInt(l / settings.slideMove);
                    }
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else if (settings.slideEndAnimation === true) {
                    $el.addClass('leftEnd');
                    setTimeout(function () {
                        $el.removeClass('leftEnd');
                    }, 400);
                }
            }
        };
        $el.goToNextSlide = function () {
            var nextI = true;
            if (settings.mode === 'slide') {
                var _slideValue = plugin.slideValue();
                nextI = _slideValue < w - elSize - settings.slideMargin;
            }
            if (((scene * settings.slideMove) < length - settings.slideMove) && nextI) {
                settings.onBeforeNextSlide.call(this, $el, scene);
                scene++;
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            } else {
                if (settings.loop === true) {
                    settings.onBeforeNextSlide.call(this, $el, scene);
                    scene = 0;
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else if (settings.slideEndAnimation === true) {
                    $el.addClass('rightEnd');
                    setTimeout(function () {
                        $el.removeClass('rightEnd');
                    }, 400);
                }
            }
        };
        $el.mode = function (_touch) {
            if (settings.adaptiveHeight === true && settings.vertical === false) {
                $el.css('height', $children.eq(scene).outerHeight(true));
            }
            if (on === false) {
                if (settings.mode === 'slide') {
                    if (plugin.doCss()) {
                        $el.addClass('lSSlide');
                        if (settings.speed !== '') {
                            $slide.css('transition-duration', settings.speed + 'ms');
                        }
                        if (settings.cssEasing !== '') {
                            $slide.css('transition-timing-function', settings.cssEasing);
                        }
                    }
                } else {
                    if (plugin.doCss()) {
                        if (settings.speed !== '') {
                            $el.css('transition-duration', settings.speed + 'ms');
                        }
                        if (settings.cssEasing !== '') {
                            $el.css('transition-timing-function', settings.cssEasing);
                        }
                    }
                }
            }
            if (!_touch) {
                settings.onBeforeSlide.call(this, $el, scene);
            }
            if (settings.mode === 'slide') {
                plugin.slide();
            } else {
                plugin.fade();
            }
            if (!$slide.hasClass('ls-hover')) {
                plugin.auto();
            }
            setTimeout(function () {
                if (!_touch) {
                    settings.onAfterSlide.call(this, $el, scene);
                }
            }, settings.speed);
            on = true;
        };
        $el.play = function () {
            $el.goToNextSlide();
            settings.auto = true;
            plugin.auto();
        };
        $el.pause = function () {
            settings.auto = false;
            clearInterval(interval);
        };
        $el.refresh = function () {
            refresh.init();
        };
        $el.getCurrentSlideCount = function () {
            var sc = scene;
            if (settings.loop) {
                var ln = $slide.find('.lslide').length,
                    cl = $el.find('.clone.left').length;
                if (scene <= cl - 1) {
                    sc = ln + (scene - cl);
                } else if (scene >= (ln + cl)) {
                    sc = scene - ln - cl;
                } else {
                    sc = scene - cl;
                }
            }
            return sc + 1;
        }; 
        $el.getTotalSlideCount = function () {
            return $slide.find('.lslide').length;
        };
        $el.goToSlide = function (s) {
            if (settings.loop) {
                scene = (s + $el.find('.clone.left').length - 1);
            } else {
                scene = s;
            }
            $el.mode(false);
            if (settings.gallery === true) {
                plugin.slideThumb();
            }
        };
        $el.destroy = function () {
            if ($el.lightSlider) {
                $el.goToPrevSlide = function(){};
                $el.goToNextSlide = function(){};
                $el.mode = function(){};
                $el.play = function(){};
                $el.pause = function(){};
                $el.refresh = function(){};
                $el.getCurrentSlideCount = function(){};
                $el.getTotalSlideCount = function(){};
                $el.goToSlide = function(){}; 
                $el.lightSlider = null;
                refresh = {
                    init : function(){}
                };
                $el.parent().parent().find('.lSAction, .lSPager').remove();
                $el.removeClass('lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right').removeAttr('style').unwrap().unwrap();
                $el.children().removeAttr('style');
                $children.removeClass('lslide active');
                $el.find('.clone').remove();
                $children = null;
                interval = null;
                on = false;
                scene = 0;
            }

        };
        setTimeout(function () {
            settings.onSliderLoad.call(this, $el);
        }, 10);
        $(window).on('resize orientationchange', function (e) {
            setTimeout(function () {
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
                refresh.init();
            }, 200);
        });
        return this;
    };
}(jQuery));
/*!
 * Masonry PACKAGED v3.3.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){}function d(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function e(c){function e(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||f("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=c("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var g=document.body||document.documentElement;g.appendChild(e);var h=j(e);l=200===b(h.width),g.removeChild(e)}}}function h(a){if(e(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var c=j(a);if("none"===c.display)return d();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var h=f.isBorderBox=!(!k||!c[k]||"border-box"!==c[k]),m=0,n=g.length;n>m;m++){var o=g[m],p=c[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=h&&l,y=b(c.width);y!==!1&&(f.width=y+(x?0:r+v));var z=b(c.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return h}var f="undefined"==typeof console?c:function(a){console.error(a)},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],e):"object"==typeof exports?module.exports=e(require("desandro-get-style-property")):a.getSize=e(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}var h=a.getComputedStyle,i=h?function(a){return h(a,null)}:function(a){return a.currentStyle},j=d("transition"),k=d("transform"),l=j&&k,m=!!d("perspective"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[j],o=["transform","transition","transitionDuration","transitionProperty"],p=function(){for(var a={},b=0,c=o.length;c>b;b++){var e=o[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=p[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=i(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=parseInt(a[c?"left":"right"],10),f=parseInt(a[d?"top":"bottom"],10);e=isNaN(e)?0:e,f=isNaN(f)?0:f;var g=this.layout.size;e-=c?g.paddingLeft:g.paddingRight,f-=d?g.paddingTop:g.paddingBottom,this.position.x=e,this.position.y=f},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];g=b.percentPosition&&!b.isHorizontal?g/a.width*100+"%":g+"px",c[e]=g,c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];k=b.percentPosition&&b.isHorizontal?k/a.height*100+"%":k+"px",c[i]=k,c[j]="",this.css(c),this.emitEvent("layout",[this])};var q=m?function(a,b){return"translate3d("+a+"px, "+b+"px, 0)"}:function(a,b){return"translate("+a+"px, "+b+"px)"};g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={},k=this.layout.options;h=k.isOriginLeft?h:-h,i=k.isOriginTop?i:-i,j.transform=q(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=l?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r=k&&e.toDashed(k)+",opacity";g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(n,this,!1))},g.prototype.transition=g.prototype[j?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(n,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!j||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.emitEvent(a+"Complete",[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d});
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
/*! OpenPGPjs.org  this is LGPL licensed code, see LICENSE/our website for more information.- v0.6.0 - 2014-05-09 */!function(a){"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define(a):"undefined"!=typeof window?window.openpgp=a():"undefined"!=typeof global?global.openpgp=a():"undefined"!=typeof self&&(self.openpgp=a())}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a,b){return this instanceof d?(this.text=a.replace(/\r/g,"").replace(/[\t ]+\n/g,"\n").replace(/\n/g,"\r\n"),void(this.packets=b||new h.List)):new d(a,b)}function e(a){var b=j.decode(a);if(b.type!==i.armor.signed)throw new Error("No cleartext signed message.");var c=new h.List;c.read(b.data),f(b.headers,c);var e=new d(b.text,c);return e}function f(a,b){for(var c=function(a){for(var c=0;c<b.length;c++)if(b[c].tag===i.packet.signature&&!a.some(function(a){return b[c].hashAlgorithm===a}))return!1;return!0},d=null,e=[],f=0;f<a.length;f++){if(d=a[f].match(/Hash: (.+)/),!d)throw new Error('Only "Hash" header allowed in cleartext signed message');d=d[1].replace(/\s/g,""),d=d.split(","),d=d.map(function(a){a=a.toLowerCase();try{return i.write(i.hash,a)}catch(b){throw new Error("Unknown hash algorithm in armor header: "+a)}}),e=e.concat(d)}if(!e.length&&!c([i.hash.md5]))throw new Error('If no "Hash" header in cleartext signed message, then only MD5 signatures allowed');if(!c(e))throw new Error("Hash algorithm mismatch in armor header and signature")}var g=a("./config"),h=a("./packet"),i=a("./enums.js"),j=a("./encoding/armor.js");d.prototype.getSigningKeyIds=function(){var a=[],b=this.packets.filterByTag(i.packet.signature);return b.forEach(function(b){a.push(b.issuerKeyId)}),a},d.prototype.sign=function(a){var b=new h.List,c=new h.Literal;c.setText(this.text);for(var d=0;d<a.length;d++){var e=new h.Signature;e.signatureType=i.signature.text,e.hashAlgorithm=g.prefer_hash_algorithm;var f=a[d].getSigningKeyPacket();if(e.publicKeyAlgorithm=f.algorithm,!f.isDecrypted)throw new Error("Private key is not decrypted.");e.sign(f,c),b.push(e)}this.packets=b},d.prototype.verify=function(a){var b=[],c=this.packets.filterByTag(i.packet.signature),d=new h.Literal;return d.setText(this.text),a.forEach(function(a){for(var e=0;e<c.length;e++){var f=a.getPublicKeyPacket([c[e].issuerKeyId]);if(f){var g={};g.keyid=c[e].issuerKeyId,g.valid=c[e].verify(f,d),b.push(g);break}}}),b},d.prototype.getText=function(){return this.text.replace(/\r\n/g,"\n")},d.prototype.armor=function(){var a={hash:i.read(i.hash,g.prefer_hash_algorithm).toUpperCase(),text:this.text,data:this.packets.write()};return j.encode(i.armor.signed,a)},c.CleartextMessage=d,c.readArmored=e},{"./config":4,"./encoding/armor.js":28,"./enums.js":30,"./packet":40}],2:[function(a,b){JXG={exists:function(a){return function(b){return!(b===a||null===b)}}()},JXG.decompress=function(a){return unescape(new JXG.Util.Unzip(JXG.Util.Base64.decodeAsArray(a)).unzip()[0][0])},JXG.Util={},JXG.Util.Unzip=function(a){function b(){return J+=8,H<G.length?G[H++]:-1}function c(){I=1}function d(){var a;return J++,a=1&I,I>>=1,0===I&&(I=b(),a=1&I,I=I>>1|128),a}function e(a){for(var b=0,c=a;c--;)b=b<<1|d();return a&&(b=A[b]>>8-a),b}function f(){y=0}function g(a){r++,x[y++]=a,t.push(String.fromCharCode(a)),32768==y&&(y=0)}function h(){this.b0=0,this.b1=0,this.jump=null,this.jumppos=-1}function i(){for(;;){if(S[R]>=U)return-1;if(T[S[R]]==R)return S[R]++;S[R]++}}function j(){var a,b=Q[P];if(u&&document.write("<br>len:"+R+" treepos:"+P),17==R)return-1;if(P++,R++,a=i(),u&&document.write("<br>IsPat "+a),a>=0)b.b0=a,u&&document.write("<br>b0 "+b.b0);else if(b.b0=32768,u&&document.write("<br>b0 "+b.b0),j())return-1;if(a=i(),a>=0)b.b1=a,u&&document.write("<br>b1 "+b.b1),b.jump=null;else if(b.b1=32768,u&&document.write("<br>b1 "+b.b1),b.jump=Q[P],b.jumppos=P,j())return-1;return R--,0}function k(a,b,c,d){var e;for(u&&document.write("currentTree "+a+" numval "+b+" lengths "+c+" show "+d),Q=a,P=0,T=c,U=b,e=0;17>e;e++)S[e]=0;if(R=0,j())return u&&alert("invalid huffman tree\n"),-1;if(u){document.write("<br>Tree: "+Q.length);for(var f=0;32>f;f++)document.write("Places["+f+"].b0="+Q[f].b0+"<br>"),document.write("Places["+f+"].b1="+Q[f].b1+"<br>")}return 0}function l(a){for(var b,c,e,f=0,g=a[f];;)if(e=d(),u&&document.write("b="+e),e){if(!(32768&g.b1))return u&&document.write("ret1"),g.b1;for(g=g.jump,b=a.length,c=0;b>c;c++)if(a[c]===g){f=c;break}}else{if(!(32768&g.b0))return u&&document.write("ret2"),g.b0;f++,g=a[f]}}function m(){var a,i,j,m,n,o,p;do{switch(a=d(),j=e(2)){case 0:u&&alert("Stored\n");break;case 1:u&&alert("Fixed Huffman codes\n");break;case 2:u&&alert("Dynamic Huffman codes\n");break;case 3:u&&alert("Reserved block type!!\n");break;default:u&&alert("Unexpected value %d!\n",j)}if(0===j){var q,r;for(c(),q=b(),q|=b()<<8,r=b(),r|=b()<<8,65535&(q^~r)&&document.write("BlockLen checksum mismatch\n");q--;)i=b(),g(i)}else if(1==j)for(;;)if(n=A[e(7)]>>1,n>23?(n=n<<1|d(),n>199?(n-=128,n=n<<1|d()):(n-=48,n>143&&(n+=136))):n+=256,256>n)g(n);else{if(256==n)break;for(n-=257,o=e(C[n])+B[n],n=A[e(5)]>>3,E[n]>8?(p=e(8),p|=e(E[n]-8)<<8):p=e(E[n]),p+=D[n],n=0;o>n;n++)i=x[y-p&32767],g(i)}else if(2==j){var s,t,v,w,z=new Array(320);for(t=257+e(5),v=1+e(5),w=4+e(4),n=0;19>n;n++)z[n]=0;for(n=0;w>n;n++)z[F[n]]=e(3);for(o=O.length,m=0;o>m;m++)O[m]=new h;if(k(O,19,z,0))return f(),1;if(u){document.write("<br>distanceTree");for(var G=0;G<O.length;G++)document.write("<br>"+O[G].b0+" "+O[G].b1+" "+O[G].jump+" "+O[G].jumppos)}s=t+v,m=0;var H=-1;for(u&&document.write("<br>n="+s+" bits: "+J+"<br>");s>m;)if(H++,n=l(O),u&&document.write("<br>"+H+" i:"+m+" decode: "+n+"    bits "+J+"<br>"),16>n)z[m++]=n;else if(16==n){var I;if(n=3+e(2),m+n>s)return f(),1;for(I=m?z[m-1]:0;n--;)z[m++]=I}else{if(n=17==n?3+e(3):11+e(7),m+n>s)return f(),1;for(;n--;)z[m++]=0}for(o=N.length,m=0;o>m;m++)N[m]=new h;if(k(N,t,z,0))return f(),1;for(o=N.length,m=0;o>m;m++)O[m]=new h;var K=[];for(m=t;m<z.length;m++)K[m-t]=z[m];if(k(O,v,K,0))return f(),1;u&&document.write("<br>literalTree");a:for(;;)if(n=l(N),n>=256){if(n-=256,0===n)break;for(n--,o=e(C[n])+B[n],n=l(O),E[n]>8?(p=e(8),p|=e(E[n]-8)<<8):p=e(E[n]),p+=D[n];o--;){if(0>y-p)break a;i=x[y-p&32767],g(i)}}else g(n)}}while(!a);return f(),c(),0}function n(){u&&alert("NEXTFILE"),t=[];var a=[];if(z=!1,a[0]=b(),a[1]=b(),u&&alert("type: "+a[0]+" "+a[1]),a[0]==parseInt("78",16)&&a[1]==parseInt("da",16)&&(u&&alert("GEONExT-GZIP"),m(),u&&alert(t.join("")),w[v]=new Array(2),w[v][0]=t.join(""),w[v][1]="geonext.gxt",v++),a[0]==parseInt("78",16)&&a[1]==parseInt("9c",16)&&(u&&alert("ZLIB"),m(),u&&alert(t.join("")),w[v]=new Array(2),w[v][0]=t.join(""),w[v][1]="ZLIB",v++),a[0]==parseInt("1f",16)&&a[1]==parseInt("8b",16)&&(u&&alert("GZIP"),o(),u&&alert(t.join("")),w[v]=new Array(2),w[v][0]=t.join(""),w[v][1]="file",v++),a[0]==parseInt("50",16)&&a[1]==parseInt("4b",16)&&(z=!0,a[2]=b(),a[3]=b(),a[2]==parseInt("3",16)&&a[3]==parseInt("4",16))){a[0]=b(),a[1]=b(),u&&alert("ZIP-Version: "+a[1]+" "+a[0]/10+"."+a[0]%10),p=b(),p|=b()<<8,u&&alert("gpflags: "+p);var c=b();c|=b()<<8,u&&alert("method: "+c),b(),b(),b(),b();var d=b();d|=b()<<8,d|=b()<<16,d|=b()<<24;var e=b();e|=b()<<8,e|=b()<<16,e|=b()<<24;var f=b();f|=b()<<8,f|=b()<<16,f|=b()<<24,u&&alert("local CRC: "+d+"\nlocal Size: "+f+"\nlocal CompSize: "+e);var g=b();g|=b()<<8;var h=b();h|=b()<<8,u&&alert("filelen "+g),j=0,L=[];for(var i;g--;)i=b(),"/"==i|":"==i?j=0:K-1>j&&(L[j++]=String.fromCharCode(i));u&&alert("nameBuf: "+L),s||(s=L);for(var j=0;h>j;)i=b(),j++;q=4294967295,r=0,0===f&&"/"==fileOut.charAt(s.length-1)&&u&&alert("skipdir"),8==c&&(m(),u&&alert(t.join("")),w[v]=new Array(2),w[v][0]=t.join(""),w[v][1]=L.join(""),v++),o()}}function o(){var a,c,d,e,f,g,h=[];if(8&p&&(h[0]=b(),h[1]=b(),h[2]=b(),h[3]=b(),h[0]==parseInt("50",16)&&h[1]==parseInt("4b",16)&&h[2]==parseInt("07",16)&&h[3]==parseInt("08",16)?(a=b(),a|=b()<<8,a|=b()<<16,a|=b()<<24):a=h[0]|h[1]<<8|h[2]<<16|h[3]<<24,c=b(),c|=b()<<8,c|=b()<<16,c|=b()<<24,d=b(),d|=b()<<8,d|=b()<<16,d|=b()<<24,u&&alert("CRC:")),z&&n(),h[0]=b(),8!=h[0])return u&&alert("Unknown compression method!"),0;if(p=b(),u&&p&~parseInt("1f",16)&&alert("Unknown flags set!"),b(),b(),b(),b(),b(),e=b(),4&p)for(h[0]=b(),h[2]=b(),R=h[0]+256*h[1],u&&alert("Extra field size: "+R),f=0;R>f;f++)b();if(8&p){for(f=0,L=[];g=b();)("7"==g||":"==g)&&(f=0),K-1>f&&(L[f++]=g);u&&alert("original file name: "+L)}if(16&p)for(;g=b(););2&p&&(b(),b()),m(),a=b(),a|=b()<<8,a|=b()<<16,a|=b()<<24,d=b(),d|=b()<<8,d|=b()<<16,d|=b()<<24,z&&n()}var p,q,r,s,t=[],u=!1,v=0,w=[],x=new Array(32768),y=0,z=!1,A=[0,128,64,192,32,160,96,224,16,144,80,208,48,176,112,240,8,136,72,200,40,168,104,232,24,152,88,216,56,184,120,248,4,132,68,196,36,164,100,228,20,148,84,212,52,180,116,244,12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,3,131,67,195,35,163,99,227,19,147,83,211,51,179,115,243,11,139,75,203,43,171,107,235,27,155,91,219,59,187,123,251,7,135,71,199,39,167,103,231,23,151,87,215,55,183,119,247,15,143,79,207,47,175,111,239,31,159,95,223,63,191,127,255],B=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],C=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99],D=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],E=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],F=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],G=a,H=0,I=1,J=0,K=256,L=[],M=288,N=new Array(M),O=new Array(32),P=0,Q=null,R=(new Array(64),new Array(64),0),S=new Array(17);S[0]=0;var T,U;JXG.Util.Unzip.prototype.unzipFile=function(a){var b;for(this.unzip(),b=0;b<w.length;b++)if(w[b][1]==a)return w[b][0]},JXG.Util.Unzip.prototype.deflate=function(){t=[];return z=!1,m(),u&&alert(t.join("")),w[v]=new Array(2),w[v][0]=t.join(""),w[v][1]="DEFLATE",v++,w},JXG.Util.Unzip.prototype.unzip=function(){return u&&alert(G),n(),w}},JXG.Util.Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var b,c,d,e,f,g,h,i=[],j=0;for(a=JXG.Util.Base64._utf8_encode(a);j<a.length;)b=a.charCodeAt(j++),c=a.charCodeAt(j++),d=a.charCodeAt(j++),e=b>>2,f=(3&b)<<4|c>>4,g=(15&c)<<2|d>>6,h=63&d,isNaN(c)?g=h=64:isNaN(d)&&(h=64),i.push([this._keyStr.charAt(e),this._keyStr.charAt(f),this._keyStr.charAt(g),this._keyStr.charAt(h)].join(""));return i.join("")},decode:function(a,b){var c,d,e,f,g,h,i,j=[],k=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");k<a.length;)f=this._keyStr.indexOf(a.charAt(k++)),g=this._keyStr.indexOf(a.charAt(k++)),h=this._keyStr.indexOf(a.charAt(k++)),i=this._keyStr.indexOf(a.charAt(k++)),c=f<<2|g>>4,d=(15&g)<<4|h>>2,e=(3&h)<<6|i,j.push(String.fromCharCode(c)),64!=h&&j.push(String.fromCharCode(d)),64!=i&&j.push(String.fromCharCode(e));return j=j.join(""),b&&(j=JXG.Util.Base64._utf8_decode(j)),j},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b},_utf8_decode:function(a){for(var b=[],c=0,d=0,e=0,f=0;c<a.length;)d=a.charCodeAt(c),128>d?(b.push(String.fromCharCode(d)),c++):d>191&&224>d?(e=a.charCodeAt(c+1),b.push(String.fromCharCode((31&d)<<6|63&e)),c+=2):(e=a.charCodeAt(c+1),f=a.charCodeAt(c+2),b.push(String.fromCharCode((15&d)<<12|(63&e)<<6|63&f)),c+=3);return b.join("")},_destrip:function(a,b){var c,d,e=[],f=[];for(null===b&&(b=76),a.replace(/ /g,""),c=a.length/b,d=0;c>d;d++)e[d]=a.substr(d*b,b);for(c!=a.length/b&&(e[e.length]=a.substr(c*b,a.length-c*b)),d=0;d<e.length;d++)f.push(e[d]);return f.join("\n")},decodeAsArray:function(a){var b,c=this.decode(a),d=[];for(b=0;b<c.length;b++)d[b]=c.charCodeAt(b);return d},decodeGEONExT:function(a){return decodeAsArray(destrip(a),!1)}},JXG.Util.asciiCharCodeAt=function(a,b){var c=a.charCodeAt(b);if(c>255)switch(c){case 8364:c=128;break;case 8218:c=130;break;case 402:c=131;break;case 8222:c=132;break;case 8230:c=133;break;case 8224:c=134;break;case 8225:c=135;break;case 710:c=136;break;case 8240:c=137;break;case 352:c=138;break;case 8249:c=139;break;case 338:c=140;break;case 381:c=142;break;case 8216:c=145;break;case 8217:c=146;break;case 8220:c=147;break;case 8221:c=148;break;case 8226:c=149;break;case 8211:c=150;break;case 8212:c=151;break;case 732:c=152;break;case 8482:c=153;break;case 353:c=154;break;case 8250:c=155;break;case 339:c=156;break;case 382:c=158;break;case 376:c=159}return c},JXG.Util.utf8Decode=function(a){var b,c=[],d=0,e=0,f=0;if(!JXG.exists(a))return"";for(;d<a.length;)e=a.charCodeAt(d),128>e?(c.push(String.fromCharCode(e)),d++):e>191&&224>e?(f=a.charCodeAt(d+1),c.push(String.fromCharCode((31&e)<<6|63&f)),d+=2):(f=a.charCodeAt(d+1),b=a.charCodeAt(d+2),c.push(String.fromCharCode((15&e)<<12|(63&f)<<6|63&b)),d+=3);return c.join("")},JXG.Util.genUUID=function(){for(var a,b="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),c=new Array(36),d=0,e=0;36>e;e++)8==e||13==e||18==e||23==e?c[e]="-":14==e?c[e]="4":(2>=d&&(d=33554432+16777216*Math.random()|0),a=15&d,d>>=4,c[e]=b[19==e?3&a|8:a]);return c.join("")},b.exports=JXG},{}],3:[function(a,b){var c=a("../enums.js");b.exports={prefer_hash_algorithm:c.hash.sha256,encryption_cipher:c.symmetric.aes256,compression:c.compression.zip,integrity_protect:!0,rsa_blinding:!0,show_version:!0,show_comment:!0,versionstring:"OpenPGP.js v0.6.0",commentstring:"http://openpgpjs.org",keyserver:"keyserver.linux.it",node_store:"./openpgp.store",debug:!1}},{"../enums.js":30}],4:[function(a,b){b.exports=a("./config.js")},{"./config.js":3}],5:[function(a,b){"use strict";var c=a("../util.js"),d=a("./cipher");b.exports={encrypt:function(a,b,e,f,g){b=new d[b](f);var h=b.blockSize,i=new Uint8Array(h),j=new Uint8Array(h);a=a+a.charAt(h-2)+a.charAt(h-1);var k,l,m,n=new Uint8Array(e.length+2+2*h),o=g?0:2;for(k=0;h>k;k++)i[k]=0;for(j=b.encrypt(i),k=0;h>k;k++)n[k]=j[k]^a.charCodeAt(k);for(i.set(n.subarray(0,h)),j=b.encrypt(i),n[h]=j[0]^a.charCodeAt(h),n[h+1]=j[1]^a.charCodeAt(h+1),i.set(g?n.subarray(2,h+2):n.subarray(0,h)),j=b.encrypt(i),k=0;h>k;k++)n[h+2+k]=j[k+o]^e.charCodeAt(k);for(l=h;l<e.length+o;l+=h)for(m=l+2-o,i.set(n.subarray(m,m+h)),j=b.encrypt(i),k=0;h>k;k++)n[h+m+k]=j[k]^e.charCodeAt(l+k-o);return n=n.subarray(0,e.length+2+h),c.Uint8Array2str(n)},mdc:function(a,b,e){a=new d[a](b);var f,g=a.blockSize,h=new Uint8Array(g),i=new Uint8Array(g);for(f=0;g>f;f++)h[f]=0;for(h=a.encrypt(h),f=0;g>f;f++)i[f]=e.charCodeAt(f),h[f]^=i[f];return i=a.encrypt(i),c.bin2str(h)+String.fromCharCode(i[0]^e.charCodeAt(g))+String.fromCharCode(i[1]^e.charCodeAt(g+1))},decrypt:function(a,b,c,e){a=new d[a](b);var f,g=a.blockSize,h=new Uint8Array(g),i=new Uint8Array(g),j="",k="";for(f=0;g>f;f++)h[f]=0;for(h=a.encrypt(h),f=0;g>f;f++)i[f]=c.charCodeAt(f),h[f]^=i[f];if(i=a.encrypt(i),h[g-2]!=(i[0]^c.charCodeAt(g))||h[g-1]!=(i[1]^c.charCodeAt(g+1)))throw new Error("CFB decrypt: invalid key");if(e){for(f=0;g>f;f++)h[f]=c.charCodeAt(f+2);for(j=g+2;j<c.length;j+=g)for(i=a.encrypt(h),f=0;g>f&&f+j<c.length;f++)h[f]=c.charCodeAt(j+f),k+=String.fromCharCode(i[f]^h[f])}else{for(f=0;g>f;f++)h[f]=c.charCodeAt(f);for(j=g;j<c.length;j+=g)for(i=a.encrypt(h),f=0;g>f&&f+j<c.length;f++)h[f]=c.charCodeAt(j+f),k+=String.fromCharCode(i[f]^h[f])}return j=e?0:2,k=k.substring(j,c.length-g-2+j)},normalEncrypt:function(a,b,e,f){a=new d[a](b);var g=a.blockSize,h="",i="",j=0,k="",l="";for(i=f.substring(0,g);e.length>g*j;){var m=a.encrypt(c.str2bin(i));h=e.substring(j*g,j*g+g);for(var n=0;n<h.length;n++)l+=String.fromCharCode(h.charCodeAt(n)^m[n]);i=l,l="",k+=i,j++}return k},normalDecrypt:function(a,b,e,f){a=new d[a](b);var g,h=a.blockSize,i="",j=0,k="",l=0;if(null===f)for(g=0;h>g;g++)i+=String.fromCharCode(0);else i=f.substring(0,h);for(;e.length>h*j;){var m=a.encrypt(c.str2bin(i));for(i=e.substring(j*h+l,j*h+h+l),g=0;g<i.length;g++)k+=String.fromCharCode(i.charCodeAt(g)^m[g]);j++}return k}}},{"../util.js":61,"./cipher":10}],6:[function(a,b){"use strict";function c(a){return 255&a}function d(a){return a>>8&255}function e(a){return a>>16&255}function f(a){return a>>24&255}function g(a,b,c,e){return d(o[255&a])|d(o[b>>8&255])<<8|d(o[c>>16&255])<<16|d(o[e>>>24])<<24}function h(a){var b,c,d=a.length,e=new Array(d/4);if(a&&!(d%4)){for(b=0,c=0;d>c;c+=4)e[b++]=a[c]|a[c+1]<<8|a[c+2]<<16|a[c+3]<<24;return e}}function i(a){var b,g=0,h=a.length,i=new Array(4*h);for(b=0;h>b;b++)i[g++]=c(a[b]),i[g++]=d(a[b]),i[g++]=e(a[b]),i[g++]=f(a[b]);return i}function j(a){var b,g,h,i,j,k,l=new Array(t+1),o=a.length,p=new Array(s),q=new Array(s),r=0;if(16==o)k=10,b=4;else if(24==o)k=12,b=6;else{if(32!=o)throw new Error("Invalid key-length for AES key:"+o);k=14,b=8}for(g=0;t+1>g;g++)l[g]=new Uint32Array(4);for(g=0,h=0;o>h;h++,g+=4)p[h]=a.charCodeAt(g)|a.charCodeAt(g+1)<<8|a.charCodeAt(g+2)<<16|a.charCodeAt(g+3)<<24;for(h=b-1;h>=0;h--)q[h]=p[h];for(i=0,j=0,h=0;b>h&&k+1>i;){for(;b>h&&4>j;h++,j++)l[i][j]=q[h];4==j&&(i++,j=0)}for(;k+1>i;){var u=q[b-1];if(q[0]^=n[d(u)]|n[e(u)]<<8|n[f(u)]<<16|n[c(u)]<<24,q[0]^=m[r++],8!=b)for(h=1;b>h;h++)q[h]^=q[h-1];else{for(h=1;b/2>h;h++)q[h]^=q[h-1];for(u=q[b/2-1],q[b/2]^=n[c(u)]|n[d(u)]<<8|n[e(u)]<<16|n[f(u)]<<24,h=b/2+1;b>h;h++)q[h]^=q[h-1]}for(h=0;b>h&&k+1>i;){for(;b>h&&4>j;h++,j++)l[i][j]=q[h];4==j&&(i++,j=0)}}return{rounds:k,rk:l}}function k(a,b,c){var d,e,f;for(f=h(a),e=b.rounds,d=0;e-1>d;d++)c[0]=f[0]^b.rk[d][0],c[1]=f[1]^b.rk[d][1],c[2]=f[2]^b.rk[d][2],c[3]=f[3]^b.rk[d][3],f[0]=o[255&c[0]]^p[c[1]>>8&255]^q[c[2]>>16&255]^r[c[3]>>>24],f[1]=o[255&c[1]]^p[c[2]>>8&255]^q[c[3]>>16&255]^r[c[0]>>>24],f[2]=o[255&c[2]]^p[c[3]>>8&255]^q[c[0]>>16&255]^r[c[1]>>>24],f[3]=o[255&c[3]]^p[c[0]>>8&255]^q[c[1]>>16&255]^r[c[2]>>>24];return d=e-1,c[0]=f[0]^b.rk[d][0],c[1]=f[1]^b.rk[d][1],c[2]=f[2]^b.rk[d][2],c[3]=f[3]^b.rk[d][3],f[0]=g(c[0],c[1],c[2],c[3])^b.rk[e][0],f[1]=g(c[1],c[2],c[3],c[0])^b.rk[e][1],f[2]=g(c[2],c[3],c[0],c[1])^b.rk[e][2],f[3]=g(c[3],c[0],c[1],c[2])^b.rk[e][3],i(f)}function l(a){var b=function(a){this.key=j(a),this._temp=new Uint32Array(this.blockSize/4),this.encrypt=function(a){return k(a,this.key,this._temp)}};return b.blockSize=b.prototype.blockSize=16,b.keySize=b.prototype.keySize=a/8,b}var m=(a("../../util.js"),new Uint8Array([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145])),n=new Uint8Array([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22]),o=new Uint32Array([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996]),p=new Uint32Array([1667483301,2088564868,2004348569,2071721613,4076011277,1802229437,1869602481,3318059348,808476752,16843267,1734856361,724260477,4278118169,3621238114,2880130534,1987505306,3402272581,2189565853,3385428288,2105408135,4210749205,1499050731,1195871945,4042324747,2913812972,3570709351,2728550397,2947499498,2627478463,2762232823,1920132246,3233848155,3082253762,4261273884,2475900334,640044138,909536346,1061125697,4160222466,3435955023,875849820,2779075060,3857043764,4059166984,1903288979,3638078323,825320019,353708607,67373068,3351745874,589514341,3284376926,404238376,2526427041,84216335,2593796021,117902857,303178806,2155879323,3806519101,3958099238,656887401,2998042573,1970662047,151589403,2206408094,741103732,437924910,454768173,1852759218,1515893998,2694863867,1381147894,993752653,3604395873,3014884814,690573947,3823361342,791633521,2223248279,1397991157,3520182632,0,3991781676,538984544,4244431647,2981198280,1532737261,1785386174,3419114822,3200149465,960066123,1246401758,1280088276,1482207464,3486483786,3503340395,4025468202,2863288293,4227591446,1128498885,1296931543,859006549,2240090516,1162185423,4193904912,33686534,2139094657,1347461360,1010595908,2678007226,2829601763,1364304627,2745392638,1077969088,2408514954,2459058093,2644320700,943222856,4126535940,3166462943,3065411521,3671764853,555827811,269492272,4294960410,4092853518,3537026925,3452797260,202119188,320022069,3974939439,1600110305,2543269282,1145342156,387395129,3301217111,2812761586,2122251394,1027439175,1684326572,1566423783,421081643,1936975509,1616953504,2172721560,1330618065,3705447295,572671078,707417214,2425371563,2290617219,1179028682,4008625961,3099093971,336865340,3739133817,1583267042,185275933,3688607094,3772832571,842163286,976909390,168432670,1229558491,101059594,606357612,1549580516,3267534685,3553869166,2896970735,1650640038,2442213800,2509582756,3840201527,2038035083,3890730290,3368586051,926379609,1835915959,2374828428,3587551588,1313774802,2846444e3,1819072692,1448520954,4109693703,3941256997,1701169839,2054878350,2930657257,134746136,3132780501,2021191816,623200879,774790258,471611428,2795919345,3031724999,3334903633,3907570467,3722289532,1953818780,522141217,1263245021,3183305180,2341145990,2324303749,1886445712,1044282434,3048567236,1718013098,1212715224,50529797,4143380225,235805714,1633796771,892693087,1465364217,3115936208,2256934801,3250690392,488454695,2661164985,3789674808,4177062675,2560109491,286335539,1768542907,3654920560,2391672713,2492740519,2610638262,505297954,2273777042,3924412704,3469641545,1431677695,673730680,3755976058,2357986191,2711706104,2307459456,218962455,3216991706,3873888049,1111655622,1751699640,1094812355,2576951728,757946999,252648977,2964356043,1414834428,3149622742,370551866]),q=new Uint32Array([1673962851,2096661628,2012125559,2079755643,4076801522,1809235307,1876865391,3314635973,811618352,16909057,1741597031,727088427,4276558334,3618988759,2874009259,1995217526,3398387146,2183110018,3381215433,2113570685,4209972730,1504897881,1200539975,4042984432,2906778797,3568527316,2724199842,2940594863,2619588508,2756966308,1927583346,3231407040,3077948087,4259388669,2470293139,642542118,913070646,1065238847,4160029431,3431157708,879254580,2773611685,3855693029,4059629809,1910674289,3635114968,828527409,355090197,67636228,3348452039,591815971,3281870531,405809176,2520228246,84545285,2586817946,118360327,304363026,2149292928,3806281186,3956090603,659450151,2994720178,1978310517,152181513,2199756419,743994412,439627290,456535323,1859957358,1521806938,2690382752,1386542674,997608763,3602342358,3011366579,693271337,3822927587,794718511,2215876484,1403450707,3518589137,0,3988860141,541089824,4242743292,2977548465,1538714971,1792327274,3415033547,3194476990,963791673,1251270218,1285084236,1487988824,3481619151,3501943760,4022676207,2857362858,4226619131,1132905795,1301993293,862344499,2232521861,1166724933,4192801017,33818114,2147385727,1352724560,1014514748,2670049951,2823545768,1369633617,2740846243,1082179648,2399505039,2453646738,2636233885,946882616,4126213365,3160661948,3061301686,3668932058,557998881,270544912,4293204735,4093447923,3535760850,3447803085,202904588,321271059,3972214764,1606345055,2536874647,1149815876,388905239,3297990596,2807427751,2130477694,1031423805,1690872932,1572530013,422718233,1944491379,1623236704,2165938305,1335808335,3701702620,574907938,710180394,2419829648,2282455944,1183631942,4006029806,3094074296,338181140,3735517662,1589437022,185998603,3685578459,3772464096,845436466,980700730,169090570,1234361161,101452294,608726052,1555620956,3265224130,3552407251,2890133420,1657054818,2436475025,2503058581,3839047652,2045938553,3889509095,3364570056,929978679,1843050349,2365688973,3585172693,1318900302,2840191145,1826141292,1454176854,4109567988,3939444202,1707781989,2062847610,2923948462,135272456,3127891386,2029029496,625635109,777810478,473441308,2790781350,3027486644,3331805638,3905627112,3718347997,1961401460,524165407,1268178251,3177307325,2332919435,2316273034,1893765232,1048330814,3044132021,1724688998,1217452104,50726147,4143383030,236720654,1640145761,896163637,1471084887,3110719673,2249691526,3248052417,490350365,2653403550,3789109473,4176155640,2553000856,287453969,1775418217,3651760345,2382858638,2486413204,2603464347,507257374,2266337927,3922272489,3464972750,1437269845,676362280,3752164063,2349043596,2707028129,2299101321,219813645,3211123391,3872862694,1115997762,1758509160,1099088705,2569646233,760903469,253628687,2960903088,1420360788,3144537787,371997206]),r=new Uint32Array([3332727651,4169432188,4003034999,4136467323,4279104242,3602738027,3736170351,2438251973,1615867952,33751297,3467208551,1451043627,3877240574,3043153879,1306962859,3969545846,2403715786,530416258,2302724553,4203183485,4011195130,3001768281,2395555655,4211863792,1106029997,3009926356,1610457762,1173008303,599760028,1408738468,3835064946,2606481600,1975695287,3776773629,1034851219,1282024998,1817851446,2118205247,4110612471,2203045068,1750873140,1374987685,3509904869,4178113009,3801313649,2876496088,1649619249,708777237,135005188,2505230279,1181033251,2640233411,807933976,933336726,168756485,800430746,235472647,607523346,463175808,3745374946,3441880043,1315514151,2144187058,3936318837,303761673,496927619,1484008492,875436570,908925723,3702681198,3035519578,1543217312,2767606354,1984772923,3076642518,2110698419,1383803177,3711886307,1584475951,328696964,2801095507,3110654417,0,3240947181,1080041504,3810524412,2043195825,3069008731,3569248874,2370227147,1742323390,1917532473,2497595978,2564049996,2968016984,2236272591,3144405200,3307925487,1340451498,3977706491,2261074755,2597801293,1716859699,294946181,2328839493,3910203897,67502594,4269899647,2700103760,2017737788,632987551,1273211048,2733855057,1576969123,2160083008,92966799,1068339858,566009245,1883781176,4043634165,1675607228,2009183926,2943736538,1113792801,540020752,3843751935,4245615603,3211645650,2169294285,403966988,641012499,3274697964,3202441055,899848087,2295088196,775493399,2472002756,1441965991,4236410494,2051489085,3366741092,3135724893,841685273,3868554099,3231735904,429425025,2664517455,2743065820,1147544098,1417554474,1001099408,193169544,2362066502,3341414126,1809037496,675025940,2809781982,3168951902,371002123,2910247899,3678134496,1683370546,1951283770,337512970,2463844681,201983494,1215046692,3101973596,2673722050,3178157011,1139780780,3299238498,967348625,832869781,3543655652,4069226873,3576883175,2336475336,1851340599,3669454189,25988493,2976175573,2631028302,1239460265,3635702892,2902087254,4077384948,3475368682,3400492389,4102978170,1206496942,270010376,1876277946,4035475576,1248797989,1550986798,941890588,1475454630,1942467764,2538718918,3408128232,2709315037,3902567540,1042358047,2531085131,1641856445,226921355,260409994,3767562352,2084716094,1908716981,3433719398,2430093384,100991747,4144101110,470945294,3265487201,1784624437,2935576407,1775286713,395413126,2572730817,975641885,666476190,3644383713,3943954680,733190296,573772049,3535497577,2842745305,126455438,866620564,766942107,1008868894,361924487,3374377449,2269761230,2868860245,1350051880,2776293343,59739276,1509466529,159418761,437718285,1708834751,3610371814,2227585602,3501746280,2193834305,699439513,1517759789,504434447,2076946608,2835108948,1842789307,742004246]),s=8,t=14;b.exports={};var u=[128,192,256];for(var v in u)b.exports[u[v]]=l(u[v])},{"../../util.js":61}],7:[function(a,b){function c(){}function d(a){this.bf=new c,this.bf.init(e.str2bin(a)),this.encrypt=function(a){return this.bf.encrypt_block(a)}}c.prototype.BLOCKSIZE=8,c.prototype.SBOXES=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]],c.prototype.PARRAY=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],c.prototype.NN=16,c.prototype._clean=function(a){if(0>a){var b=2147483647&a;
a=b+2147483648}return a},c.prototype._F=function(a){var b,c,d,e,f;return e=255&a,a>>>=8,d=255&a,a>>>=8,c=255&a,a>>>=8,b=255&a,f=this.sboxes[0][b]+this.sboxes[1][c],f^=this.sboxes[2][d],f+=this.sboxes[3][e]},c.prototype._encrypt_block=function(a){var b,c=a[0],d=a[1];for(b=0;b<this.NN;++b){c^=this.parray[b],d=this._F(c)^d;var e=c;c=d,d=e}c^=this.parray[this.NN+0],d^=this.parray[this.NN+1],a[0]=this._clean(d),a[1]=this._clean(c)},c.prototype.encrypt_block=function(a){var b,c=[0,0],d=this.BLOCKSIZE/2;for(b=0;b<this.BLOCKSIZE/2;++b)c[0]=c[0]<<8|255&a[b+0],c[1]=c[1]<<8|255&a[b+d];this._encrypt_block(c);var e=[];for(b=0;b<this.BLOCKSIZE/2;++b)e[b+0]=c[0]>>>24-8*b&255,e[b+d]=c[1]>>>24-8*b&255;return e},c.prototype._decrypt_block=function(a){var b,c=a[0],d=a[1];for(b=this.NN+1;b>1;--b){c^=this.parray[b],d=this._F(c)^d;var e=c;c=d,d=e}c^=this.parray[1],d^=this.parray[0],a[0]=this._clean(d),a[1]=this._clean(c)},c.prototype.init=function(a){var b,c=0;for(this.parray=[],b=0;b<this.NN+2;++b){var d,e=0;for(d=0;4>d;++d)e=e<<8|255&a[c],++c>=a.length&&(c=0);this.parray[b]=this.PARRAY[b]^e}for(this.sboxes=[],b=0;4>b;++b)for(this.sboxes[b]=[],c=0;256>c;++c)this.sboxes[b][c]=this.SBOXES[b][c];var f=[0,0];for(b=0;b<this.NN+2;b+=2)this._encrypt_block(f),this.parray[b+0]=f[0],this.parray[b+1]=f[1];for(b=0;4>b;++b)for(c=0;256>c;c+=2)this._encrypt_block(f),this.sboxes[b][c+0]=f[0],this.sboxes[b][c+1]=f[1]};var e=a("../../util.js");b.exports=d,b.exports.keySize=d.prototype.keySize=16,b.exports.blockSize=d.prototype.blockSize=16},{"../../util.js":61}],8:[function(a,b){function c(){function a(a,b,c){var d=b+a,e=d<<c|d>>>32-c;return(f[0][e>>>24]^f[1][e>>>16&255])-f[2][e>>>8&255]+f[3][255&e]}function b(a,b,c){var d=b^a,e=d<<c|d>>>32-c;return f[0][e>>>24]-f[1][e>>>16&255]+f[2][e>>>8&255]^f[3][255&e]}function c(a,b,c){var d=b-a,e=d<<c|d>>>32-c;return(f[0][e>>>24]+f[1][e>>>16&255]^f[2][e>>>8&255])-f[3][255&e]}this.BlockSize=8,this.KeySize=16,this.setKey=function(a){if(this.masking=new Array(16),this.rotate=new Array(16),this.reset(),a.length!=this.KeySize)throw new Error("CAST-128: keys must be 16 bytes");return this.keySchedule(a),!0},this.reset=function(){for(var a=0;16>a;a++)this.masking[a]=0,this.rotate[a]=0},this.getBlockSize=function(){return BlockSize},this.encrypt=function(d){for(var e=new Array(d.length),f=0;f<d.length;f+=8){var g,h=d[f]<<24|d[f+1]<<16|d[f+2]<<8|d[f+3],i=d[f+4]<<24|d[f+5]<<16|d[f+6]<<8|d[f+7];g=i,i=h^a(i,this.masking[0],this.rotate[0]),h=g,g=i,i=h^b(i,this.masking[1],this.rotate[1]),h=g,g=i,i=h^c(i,this.masking[2],this.rotate[2]),h=g,g=i,i=h^a(i,this.masking[3],this.rotate[3]),h=g,g=i,i=h^b(i,this.masking[4],this.rotate[4]),h=g,g=i,i=h^c(i,this.masking[5],this.rotate[5]),h=g,g=i,i=h^a(i,this.masking[6],this.rotate[6]),h=g,g=i,i=h^b(i,this.masking[7],this.rotate[7]),h=g,g=i,i=h^c(i,this.masking[8],this.rotate[8]),h=g,g=i,i=h^a(i,this.masking[9],this.rotate[9]),h=g,g=i,i=h^b(i,this.masking[10],this.rotate[10]),h=g,g=i,i=h^c(i,this.masking[11],this.rotate[11]),h=g,g=i,i=h^a(i,this.masking[12],this.rotate[12]),h=g,g=i,i=h^b(i,this.masking[13],this.rotate[13]),h=g,g=i,i=h^c(i,this.masking[14],this.rotate[14]),h=g,g=i,i=h^a(i,this.masking[15],this.rotate[15]),h=g,e[f]=i>>>24&255,e[f+1]=i>>>16&255,e[f+2]=i>>>8&255,e[f+3]=255&i,e[f+4]=h>>>24&255,e[f+5]=h>>>16&255,e[f+6]=h>>>8&255,e[f+7]=255&h}return e},this.decrypt=function(d){for(var e=new Array(d.length),f=0;f<d.length;f+=8){var g,h=d[f]<<24|d[f+1]<<16|d[f+2]<<8|d[f+3],i=d[f+4]<<24|d[f+5]<<16|d[f+6]<<8|d[f+7];g=i,i=h^a(i,this.masking[15],this.rotate[15]),h=g,g=i,i=h^c(i,this.masking[14],this.rotate[14]),h=g,g=i,i=h^b(i,this.masking[13],this.rotate[13]),h=g,g=i,i=h^a(i,this.masking[12],this.rotate[12]),h=g,g=i,i=h^c(i,this.masking[11],this.rotate[11]),h=g,g=i,i=h^b(i,this.masking[10],this.rotate[10]),h=g,g=i,i=h^a(i,this.masking[9],this.rotate[9]),h=g,g=i,i=h^c(i,this.masking[8],this.rotate[8]),h=g,g=i,i=h^b(i,this.masking[7],this.rotate[7]),h=g,g=i,i=h^a(i,this.masking[6],this.rotate[6]),h=g,g=i,i=h^c(i,this.masking[5],this.rotate[5]),h=g,g=i,i=h^b(i,this.masking[4],this.rotate[4]),h=g,g=i,i=h^a(i,this.masking[3],this.rotate[3]),h=g,g=i,i=h^c(i,this.masking[2],this.rotate[2]),h=g,g=i,i=h^b(i,this.masking[1],this.rotate[1]),h=g,g=i,i=h^a(i,this.masking[0],this.rotate[0]),h=g,e[f]=i>>>24&255,e[f+1]=i>>>16&255,e[f+2]=i>>>8&255,e[f+3]=255&i,e[f+4]=h>>>24&255,e[f+5]=h>>16&255,e[f+6]=h>>8&255,e[f+7]=255&h}return e};var d=new Array(4);d[0]=new Array(4),d[0][0]=new Array(4,0,13,15,12,14,8),d[0][1]=new Array(5,2,16,18,17,19,10),d[0][2]=new Array(6,3,23,22,21,20,9),d[0][3]=new Array(7,1,26,25,27,24,11),d[1]=new Array(4),d[1][0]=new Array(0,6,21,23,20,22,16),d[1][1]=new Array(1,4,0,2,1,3,18),d[1][2]=new Array(2,5,7,6,5,4,17),d[1][3]=new Array(3,7,10,9,11,8,19),d[2]=new Array(4),d[2][0]=new Array(4,0,13,15,12,14,8),d[2][1]=new Array(5,2,16,18,17,19,10),d[2][2]=new Array(6,3,23,22,21,20,9),d[2][3]=new Array(7,1,26,25,27,24,11),d[3]=new Array(4),d[3][0]=new Array(0,6,21,23,20,22,16),d[3][1]=new Array(1,4,0,2,1,3,18),d[3][2]=new Array(2,5,7,6,5,4,17),d[3][3]=new Array(3,7,10,9,11,8,19);var e=new Array(4);e[0]=new Array(4),e[0][0]=new Array(24,25,23,22,18),e[0][1]=new Array(26,27,21,20,22),e[0][2]=new Array(28,29,19,18,25),e[0][3]=new Array(30,31,17,16,28),e[1]=new Array(4),e[1][0]=new Array(3,2,12,13,8),e[1][1]=new Array(1,0,14,15,13),e[1][2]=new Array(7,6,8,9,3),e[1][3]=new Array(5,4,10,11,7),e[2]=new Array(4),e[2][0]=new Array(19,18,28,29,25),e[2][1]=new Array(17,16,30,31,28),e[2][2]=new Array(23,22,24,25,18),e[2][3]=new Array(21,20,26,27,22),e[3]=new Array(4),e[3][0]=new Array(8,9,7,6,3),e[3][1]=new Array(10,11,5,4,7),e[3][2]=new Array(12,13,3,2,8),e[3][3]=new Array(14,15,1,0,13),this.keySchedule=function(a){var b,c,g=new Array(8),h=new Array(32);for(b=0;4>b;b++)c=4*b,g[b]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(var i,j=[6,7,4,5],k=0,l=0;2>l;l++)for(var m=0;4>m;m++){for(c=0;4>c;c++){var n=d[m][c];i=g[n[1]],i^=f[4][g[n[2]>>>2]>>>24-8*(3&n[2])&255],i^=f[5][g[n[3]>>>2]>>>24-8*(3&n[3])&255],i^=f[6][g[n[4]>>>2]>>>24-8*(3&n[4])&255],i^=f[7][g[n[5]>>>2]>>>24-8*(3&n[5])&255],i^=f[j[c]][g[n[6]>>>2]>>>24-8*(3&n[6])&255],g[n[0]]=i}for(c=0;4>c;c++){var o=e[m][c];i=f[4][g[o[0]>>>2]>>>24-8*(3&o[0])&255],i^=f[5][g[o[1]>>>2]>>>24-8*(3&o[1])&255],i^=f[6][g[o[2]>>>2]>>>24-8*(3&o[2])&255],i^=f[7][g[o[3]>>>2]>>>24-8*(3&o[3])&255],i^=f[4+c][g[o[4]>>>2]>>>24-8*(3&o[4])&255],h[k]=i,k++}}for(b=0;16>b;b++)this.masking[b]=h[b],this.rotate[b]=31&h[16+b]};var f=new Array(8);f[0]=new Array(821772500,2678128395,1810681135,1059425402,505495343,2617265619,1610868032,3483355465,3218386727,2294005173,3791863952,2563806837,1852023008,365126098,3269944861,584384398,677919599,3229601881,4280515016,2002735330,1136869587,3744433750,2289869850,2731719981,2714362070,879511577,1639411079,575934255,717107937,2857637483,576097850,2731753936,1725645e3,2810460463,5111599,767152862,2543075244,1251459544,1383482551,3052681127,3089939183,3612463449,1878520045,1510570527,2189125840,2431448366,582008916,3163445557,1265446783,1354458274,3529918736,3202711853,3073581712,3912963487,3029263377,1275016285,4249207360,2905708351,3304509486,1442611557,3585198765,2712415662,2731849581,3248163920,2283946226,208555832,2766454743,1331405426,1447828783,3315356441,3108627284,2957404670,2981538698,3339933917,1669711173,286233437,1465092821,1782121619,3862771680,710211251,980974943,1651941557,430374111,2051154026,704238805,4128970897,3144820574,2857402727,948965521,3333752299,2227686284,718756367,2269778983,2731643755,718440111,2857816721,3616097120,1113355533,2478022182,410092745,1811985197,1944238868,2696854588,1415722873,1682284203,1060277122,1998114690,1503841958,82706478,2315155686,1068173648,845149890,2167947013,1768146376,1993038550,3566826697,3390574031,940016341,3355073782,2328040721,904371731,1205506512,4094660742,2816623006,825647681,85914773,2857843460,1249926541,1417871568,3287612,3211054559,3126306446,1975924523,1353700161,2814456437,2438597621,1800716203,722146342,2873936343,1151126914,4160483941,2877670899,458611604,2866078500,3483680063,770352098,2652916994,3367839148,3940505011,3585973912,3809620402,718646636,2504206814,2914927912,3631288169,2857486607,2860018678,575749918,2857478043,718488780,2069512688,3548183469,453416197,1106044049,3032691430,52586708,3378514636,3459808877,3211506028,1785789304,218356169,3571399134,3759170522,1194783844,1523787992,3007827094,1975193539,2555452411,1341901877,3045838698,3776907964,3217423946,2802510864,2889438986,1057244207,1636348243,3761863214,1462225785,2632663439,481089165,718503062,24497053,3332243209,3344655856,3655024856,3960371065,1195698900,2971415156,3710176158,2115785917,4027663609,3525578417,2524296189,2745972565,3564906415,1372086093,1452307862,2780501478,1476592880,3389271281,18495466,2378148571,901398090,891748256,3279637769,3157290713,2560960102,1447622437,4284372637,216884176,2086908623,1879786977,3588903153,2242455666,2938092967,3559082096,2810645491,758861177,1121993112,215018983,642190776,4169236812,1196255959,2081185372,3508738393,941322904,4124243163,2877523539,1848581667,2205260958,3180453958,2589345134,3694731276,550028657,2519456284,3789985535,2973870856,2093648313,443148163,46942275,2734146937,1117713533,1115362972,1523183689,3717140224,1551984063),f[1]=new Array(522195092,4010518363,1776537470,960447360,4267822970,4005896314,1435016340,1929119313,2913464185,1310552629,3579470798,3724818106,2579771631,1594623892,417127293,2715217907,2696228731,1508390405,3994398868,3925858569,3695444102,4019471449,3129199795,3770928635,3520741761,990456497,4187484609,2783367035,21106139,3840405339,631373633,3783325702,532942976,396095098,3548038825,4267192484,2564721535,2011709262,2039648873,620404603,3776170075,2898526339,3612357925,4159332703,1645490516,223693667,1567101217,3362177881,1029951347,3470931136,3570957959,1550265121,119497089,972513919,907948164,3840628539,1613718692,3594177948,465323573,2659255085,654439692,2575596212,2699288441,3127702412,277098644,624404830,4100943870,2717858591,546110314,2403699828,3655377447,1321679412,4236791657,1045293279,4010672264,895050893,2319792268,494945126,1914543101,2777056443,3894764339,2219737618,311263384,4275257268,3458730721,669096869,3584475730,3835122877,3319158237,3949359204,2005142349,2713102337,2228954793,3769984788,569394103,3855636576,1425027204,108000370,2736431443,3671869269,3043122623,1750473702,2211081108,762237499,3972989403,2798899386,3061857628,2943854345,867476300,964413654,1591880597,1594774276,2179821409,552026980,3026064248,3726140315,2283577634,3110545105,2152310760,582474363,1582640421,1383256631,2043843868,3322775884,1217180674,463797851,2763038571,480777679,2718707717,2289164131,3118346187,214354409,200212307,3810608407,3025414197,2674075964,3997296425,1847405948,1342460550,510035443,4080271814,815934613,833030224,1620250387,1945732119,2703661145,3966000196,1388869545,3456054182,2687178561,2092620194,562037615,1356438536,3409922145,3261847397,1688467115,2150901366,631725691,3840332284,549916902,3455104640,394546491,837744717,2114462948,751520235,2221554606,2415360136,3999097078,2063029875,803036379,2702586305,821456707,3019566164,360699898,4018502092,3511869016,3677355358,2402471449,812317050,49299192,2570164949,3259169295,2816732080,3331213574,3101303564,2156015656,3705598920,3546263921,143268808,3200304480,1638124008,3165189453,3341807610,578956953,2193977524,3638120073,2333881532,807278310,658237817,2969561766,1641658566,11683945,3086995007,148645947,1138423386,4158756760,1981396783,2401016740,3699783584,380097457,2680394679,2803068651,3334260286,441530178,4016580796,1375954390,761952171,891809099,2183123478,157052462,3683840763,1592404427,341349109,2438483839,1417898363,644327628,2233032776,2353769706,2201510100,220455161,1815641738,182899273,2995019788,3627381533,3702638151,2890684138,1052606899,588164016,1681439879,4038439418,2405343923,4229449282,167996282,1336969661,1688053129,2739224926,1543734051,1046297529,1138201970,2121126012,115334942,1819067631,1902159161,1941945968,2206692869,1159982321),f[2]=new Array(2381300288,637164959,3952098751,3893414151,1197506559,916448331,2350892612,2932787856,3199334847,4009478890,3905886544,1373570990,2450425862,4037870920,3778841987,2456817877,286293407,124026297,3001279700,1028597854,3115296800,4208886496,2691114635,2188540206,1430237888,1218109995,3572471700,308166588,570424558,2187009021,2455094765,307733056,1310360322,3135275007,1384269543,2388071438,863238079,2359263624,2801553128,3380786597,2831162807,1470087780,1728663345,4072488799,1090516929,532123132,2389430977,1132193179,2578464191,3051079243,1670234342,1434557849,2711078940,1241591150,3314043432,3435360113,3091448339,1812415473,2198440252,267246943,796911696,3619716990,38830015,1526438404,2806502096,374413614,2943401790,1489179520,1603809326,1920779204,168801282,260042626,2358705581,1563175598,2397674057,1356499128,2217211040,514611088,2037363785,2186468373,4022173083,2792511869,2913485016,1173701892,4200428547,3896427269,1334932762,2455136706,602925377,2835607854,1613172210,41346230,2499634548,2457437618,2188827595,41386358,4172255629,1313404830,2405527007,3801973774,2217704835,873260488,2528884354,2478092616,4012915883,2555359016,2006953883,2463913485,575479328,2218240648,2099895446,660001756,2341502190,3038761536,3888151779,3848713377,3286851934,1022894237,1620365795,3449594689,1551255054,15374395,3570825345,4249311020,4151111129,3181912732,310226346,1133119310,530038928,136043402,2476768958,3107506709,2544909567,1036173560,2367337196,1681395281,1758231547,3641649032,306774401,1575354324,3716085866,1990386196,3114533736,2455606671,1262092282,3124342505,2768229131,4210529083,1833535011,423410938,660763973,2187129978,1639812e3,3508421329,3467445492,310289298,272797111,2188552562,2456863912,310240523,677093832,1013118031,901835429,3892695601,1116285435,3036471170,1337354835,243122523,520626091,277223598,4244441197,4194248841,1766575121,594173102,316590669,742362309,3536858622,4176435350,3838792410,2501204839,1229605004,3115755532,1552908988,2312334149,979407927,3959474601,1148277331,176638793,3614686272,2083809052,40992502,1340822838,2731552767,3535757508,3560899520,1354035053,122129617,7215240,2732932949,3118912700,2718203926,2539075635,3609230695,3725561661,1928887091,2882293555,1988674909,2063640240,2491088897,1459647954,4189817080,2302804382,1113892351,2237858528,1927010603,4002880361,1856122846,1594404395,2944033133,3855189863,3474975698,1643104450,4054590833,3431086530,1730235576,2984608721,3084664418,2131803598,4178205752,267404349,1617849798,1616132681,1462223176,736725533,2327058232,551665188,2945899023,1749386277,2575514597,1611482493,674206544,2201269090,3642560800,728599968,1680547377,2620414464,1388111496,453204106,4156223445,1094905244,2754698257,2201108165,3757000246,2704524545,3922940700,3996465027),f[3]=new Array(2645754912,532081118,2814278639,3530793624,1246723035,1689095255,2236679235,4194438865,2116582143,3859789411,157234593,2045505824,4245003587,1687664561,4083425123,605965023,672431967,1336064205,3376611392,214114848,4258466608,3232053071,489488601,605322005,3998028058,264917351,1912574028,756637694,436560991,202637054,135989450,85393697,2152923392,3896401662,2895836408,2145855233,3535335007,115294817,3147733898,1922296357,3464822751,4117858305,1037454084,2725193275,2127856640,1417604070,1148013728,1827919605,642362335,2929772533,909348033,1346338451,3547799649,297154785,1917849091,4161712827,2883604526,3968694238,1469521537,3780077382,3375584256,1763717519,136166297,4290970789,1295325189,2134727907,2798151366,1566297257,3672928234,2677174161,2672173615,965822077,2780786062,289653839,1133871874,3491843819,35685304,1068898316,418943774,672553190,642281022,2346158704,1954014401,3037126780,4079815205,2030668546,3840588673,672283427,1776201016,359975446,3750173538,555499703,2769985273,1324923,69110472,152125443,3176785106,3822147285,1340634837,798073664,1434183902,15393959,216384236,1303690150,3881221631,3711134124,3960975413,106373927,2578434224,1455997841,1801814300,1578393881,1854262133,3188178946,3258078583,2302670060,1539295533,3505142565,3078625975,2372746020,549938159,3278284284,2620926080,181285381,2865321098,3970029511,68876850,488006234,1728155692,2608167508,836007927,2435231793,919367643,3339422534,3655756360,1457871481,40520939,1380155135,797931188,234455205,2255801827,3990488299,397000196,739833055,3077865373,2871719860,4022553888,772369276,390177364,3853951029,557662966,740064294,1640166671,1699928825,3535942136,622006121,3625353122,68743880,1742502,219489963,1664179233,1577743084,1236991741,410585305,2366487942,823226535,1050371084,3426619607,3586839478,212779912,4147118561,1819446015,1911218849,530248558,3486241071,3252585495,2886188651,3410272728,2342195030,20547779,2982490058,3032363469,3631753222,312714466,1870521650,1493008054,3491686656,615382978,4103671749,2534517445,1932181,2196105170,278426614,6369430,3274544417,2913018367,697336853,2143000447,2946413531,701099306,1558357093,2805003052,3500818408,2321334417,3567135975,216290473,3591032198,23009561,1996984579,3735042806,2024298078,3739440863,569400510,2339758983,3016033873,3097871343,3639523026,3844324983,3256173865,795471839,2951117563,4101031090,4091603803,3603732598,971261452,534414648,428311343,3389027175,2844869880,694888862,1227866773,2456207019,3043454569,2614353370,3749578031,3676663836,459166190,4132644070,1794958188,51825668,2252611902,3084671440,2036672799,3436641603,1099053433,2469121526,3059204941,1323291266,2061838604,1018778475,2233344254,2553501054,334295216,3556750194,1065731521,183467730),f[4]=new Array(2127105028,745436345,2601412319,2788391185,3093987327,500390133,1155374404,389092991,150729210,3891597772,3523549952,1935325696,716645080,946045387,2901812282,1774124410,3869435775,4039581901,3293136918,3438657920,948246080,363898952,3867875531,1286266623,1598556673,68334250,630723836,1104211938,1312863373,613332731,2377784574,1101634306,441780740,3129959883,1917973735,2510624549,3238456535,2544211978,3308894634,1299840618,4076074851,1756332096,3977027158,297047435,3790297736,2265573040,3621810518,1311375015,1667687725,47300608,3299642885,2474112369,201668394,1468347890,576830978,3594690761,3742605952,1958042578,1747032512,3558991340,1408974056,3366841779,682131401,1033214337,1545599232,4265137049,206503691,103024618,2855227313,1337551222,2428998917,2963842932,4015366655,3852247746,2796956967,3865723491,3747938335,247794022,3755824572,702416469,2434691994,397379957,851939612,2314769512,218229120,1380406772,62274761,214451378,3170103466,2276210409,3845813286,28563499,446592073,1693330814,3453727194,29968656,3093872512,220656637,2470637031,77972100,1667708854,1358280214,4064765667,2395616961,325977563,4277240721,4220025399,3605526484,3355147721,811859167,3069544926,3962126810,652502677,3075892249,4132761541,3498924215,1217549313,3250244479,3858715919,3053989961,1538642152,2279026266,2875879137,574252750,3324769229,2651358713,1758150215,141295887,2719868960,3515574750,4093007735,4194485238,1082055363,3417560400,395511885,2966884026,179534037,3646028556,3738688086,1092926436,2496269142,257381841,3772900718,1636087230,1477059743,2499234752,3811018894,2675660129,3285975680,90732309,1684827095,1150307763,1723134115,3237045386,1769919919,1240018934,815675215,750138730,2239792499,1234303040,1995484674,138143821,675421338,1145607174,1936608440,3238603024,2345230278,2105974004,323969391,779555213,3004902369,2861610098,1017501463,2098600890,2628620304,2940611490,2682542546,1171473753,3656571411,3687208071,4091869518,393037935,159126506,1662887367,1147106178,391545844,3452332695,1891500680,3016609650,1851642611,546529401,1167818917,3194020571,2848076033,3953471836,575554290,475796850,4134673196,450035699,2351251534,844027695,1080539133,86184846,1554234488,3692025454,1972511363,2018339607,1491841390,1141460869,1061690759,4244549243,2008416118,2351104703,2868147542,1598468138,722020353,1027143159,212344630,1387219594,1725294528,3745187956,2500153616,458938280,4129215917,1828119673,544571780,3503225445,2297937496,1241802790,267843827,2694610800,1397140384,1558801448,3782667683,1806446719,929573330,2234912681,400817706,616011623,4121520928,3603768725,1761550015,1968522284,4053731006,4192232858,4005120285,872482584,3140537016,3894607381,2287405443,1963876937,3663887957,1584857e3,2975024454,1833426440,4025083860),f[5]=new Array(4143615901,749497569,1285769319,3795025788,2514159847,23610292,3974978748,844452780,3214870880,3751928557,2213566365,1676510905,448177848,3730751033,4086298418,2307502392,871450977,3222878141,4110862042,3831651966,2735270553,1310974780,2043402188,1218528103,2736035353,4274605013,2702448458,3936360550,2693061421,162023535,2827510090,687910808,23484817,3784910947,3371371616,779677500,3503626546,3473927188,4157212626,3500679282,4248902014,2466621104,3899384794,1958663117,925738300,1283408968,3669349440,1840910019,137959847,2679828185,1239142320,1315376211,1547541505,1690155329,739140458,3128809933,3933172616,3876308834,905091803,1548541325,4040461708,3095483362,144808038,451078856,676114313,2861728291,2469707347,993665471,373509091,2599041286,4025009006,4170239449,2149739950,3275793571,3749616649,2794760199,1534877388,572371878,2590613551,1753320020,3467782511,1405125690,4270405205,633333386,3026356924,3475123903,632057672,2846462855,1404951397,3882875879,3915906424,195638627,2385783745,3902872553,1233155085,3355999740,2380578713,2702246304,2144565621,3663341248,3894384975,2502479241,4248018925,3094885567,1594115437,572884632,3385116731,767645374,1331858858,1475698373,3793881790,3532746431,1321687957,619889600,1121017241,3440213920,2070816767,2833025776,1933951238,4095615791,890643334,3874130214,859025556,360630002,925594799,1764062180,3920222280,4078305929,979562269,2810700344,4087740022,1949714515,546639971,1165388173,3069891591,1495988560,922170659,1291546247,2107952832,1813327274,3406010024,3306028637,4241950635,153207855,2313154747,1608695416,1150242611,1967526857,721801357,1220138373,3691287617,3356069787,2112743302,3281662835,1111556101,1778980689,250857638,2298507990,673216130,2846488510,3207751581,3562756981,3008625920,3417367384,2198807050,529510932,3547516680,3426503187,2364944742,102533054,2294910856,1617093527,1204784762,3066581635,1019391227,1069574518,1317995090,1691889997,3661132003,510022745,3238594800,1362108837,1817929911,2184153760,805817662,1953603311,3699844737,120799444,2118332377,207536705,2282301548,4120041617,145305846,2508124933,3086745533,3261524335,1877257368,2977164480,3160454186,2503252186,4221677074,759945014,254147243,2767453419,3801518371,629083197,2471014217,907280572,3900796746,940896768,2751021123,2625262786,3161476951,3661752313,3260732218,1425318020,2977912069,1496677566,3988592072,2140652971,3126511541,3069632175,977771578,1392695845,1698528874,1411812681,1369733098,1343739227,3620887944,1142123638,67414216,3102056737,3088749194,1626167401,2546293654,3941374235,697522451,33404913,143560186,2595682037,994885535,1247667115,3859094837,2699155541,3547024625,4114935275,2968073508,3199963069,2732024527,1237921620,951448369,1898488916,1211705605,2790989240,2233243581,3598044975),f[6]=new Array(2246066201,858518887,1714274303,3485882003,713916271,2879113490,3730835617,539548191,36158695,1298409750,419087104,1358007170,749914897,2989680476,1261868530,2995193822,2690628854,3443622377,3780124940,3796824509,2976433025,4259637129,1551479e3,512490819,1296650241,951993153,2436689437,2460458047,144139966,3136204276,310820559,3068840729,643875328,1969602020,1680088954,2185813161,3283332454,672358534,198762408,896343282,276269502,3014846926,84060815,197145886,376173866,3943890818,3813173521,3545068822,1316698879,1598252827,2633424951,1233235075,859989710,2358460855,3503838400,3409603720,1203513385,1193654839,2792018475,2060853022,207403770,1144516871,3068631394,1121114134,177607304,3785736302,326409831,1929119770,2983279095,4183308101,3474579288,3200513878,3228482096,119610148,1170376745,3378393471,3163473169,951863017,3337026068,3135789130,2907618374,1183797387,2015970143,4045674555,2182986399,2952138740,3928772205,384012900,2454997643,10178499,2879818989,2596892536,111523738,2995089006,451689641,3196290696,235406569,1441906262,3890558523,3013735005,4158569349,1644036924,376726067,1006849064,3664579700,2041234796,1021632941,1374734338,2566452058,371631263,4007144233,490221539,206551450,3140638584,1053219195,1853335209,3412429660,3562156231,735133835,1623211703,3104214392,2738312436,4096837757,3366392578,3110964274,3956598718,3196820781,2038037254,3877786376,2339753847,300912036,3766732888,2372630639,1516443558,4200396704,1574567987,4069441456,4122592016,2699739776,146372218,2748961456,2043888151,35287437,2596680554,655490400,1132482787,110692520,1031794116,2188192751,1324057718,1217253157,919197030,686247489,3261139658,1028237775,3135486431,3059715558,2460921700,986174950,2661811465,4062904701,2752986992,3709736643,367056889,1353824391,731860949,1650113154,1778481506,784341916,357075625,3608602432,1074092588,2480052770,3811426202,92751289,877911070,3600361838,1231880047,480201094,3756190983,3094495953,434011822,87971354,363687820,1717726236,1901380172,3926403882,2481662265,400339184,1490350766,2661455099,1389319756,2558787174,784598401,1983468483,30828846,3550527752,2716276238,3841122214,1765724805,1955612312,1277890269,1333098070,1564029816,2704417615,1026694237,3287671188,1260819201,3349086767,1016692350,1582273796,1073413053,1995943182,694588404,1025494639,3323872702,3551898420,4146854327,453260480,1316140391,1435673405,3038941953,3486689407,1622062951,403978347,817677117,950059133,4246079218,3278066075,1486738320,1417279718,481875527,2549965225,3933690356,760697757,1452955855,3897451437,1177426808,1702951038,4085348628,2447005172,1084371187,3516436277,3068336338,1073369276,1027665953,3284188590,1230553676,1368340146,2226246512,267243139,2274220762,4070734279,2497715176,2423353163,2504755875),f[7]=new Array(3793104909,3151888380,2817252029,895778965,2005530807,3871412763,237245952,86829237,296341424,3851759377,3974600970,2475086196,709006108,1994621201,2972577594,937287164,3734691505,168608556,3189338153,2225080640,3139713551,3033610191,3025041904,77524477,185966941,1208824168,2344345178,1721625922,3354191921,1066374631,1927223579,1971335949,2483503697,1551748602,2881383779,2856329572,3003241482,48746954,1398218158,2050065058,313056748,4255789917,393167848,1912293076,940740642,3465845460,3091687853,2522601570,2197016661,1727764327,364383054,492521376,1291706479,3264136376,1474851438,1685747964,2575719748,1619776915,1814040067,970743798,1561002147,2925768690,2123093554,1880132620,3151188041,697884420,2550985770,2607674513,2659114323,110200136,1489731079,997519150,1378877361,3527870668,478029773,2766872923,1022481122,431258168,1112503832,897933369,2635587303,669726182,3383752315,918222264,163866573,3246985393,3776823163,114105080,1903216136,761148244,3571337562,1690750982,3166750252,1037045171,1888456500,2010454850,642736655,616092351,365016990,1185228132,4174898510,1043824992,2023083429,2241598885,3863320456,3279669087,3674716684,108438443,2132974366,830746235,606445527,4173263986,2204105912,1844756978,2532684181,4245352700,2969441100,3796921661,1335562986,4061524517,2720232303,2679424040,634407289,885462008,3294724487,3933892248,2094100220,339117932,4048830727,3202280980,1458155303,2689246273,1022871705,2464987878,3714515309,353796843,2822958815,4256850100,4052777845,551748367,618185374,3778635579,4020649912,1904685140,3069366075,2670879810,3407193292,2954511620,4058283405,2219449317,3135758300,1120655984,3447565834,1474845562,3577699062,550456716,3466908712,2043752612,881257467,869518812,2005220179,938474677,3305539448,3850417126,1315485940,3318264702,226533026,965733244,321539988,1136104718,804158748,573969341,3708209826,937399083,3290727049,2901666755,1461057207,4013193437,4066861423,3242773476,2421326174,1581322155,3028952165,786071460,3900391652,3918438532,1485433313,4023619836,3708277595,3678951060,953673138,1467089153,1930354364,1533292819,2492563023,1346121658,1685000834,1965281866,3765933717,4190206607,2052792609,3515332758,690371149,3125873887,2180283551,2903598061,3933952357,436236910,289419410,14314871,1242357089,2904507907,1616633776,2666382180,585885352,3471299210,2699507360,1432659641,277164553,3354103607,770115018,2303809295,3741942315,3177781868,2853364978,2269453327,3774259834,987383833,1290892879,225909803,1741533526,890078084,1496906255,1111072499,916028167,243534141,1252605537,2204162171,531204876,290011180,3916834213,102027703,237315147,209093447,1486785922,220223953,2758195998,4175039106,82940208,3127791296,2569425252,518464269,1353887104,3941492737,2377294467,3935040926)}function d(a){this.cast5=new c,this.cast5.setKey(e.str2bin(a)),this.encrypt=function(a){return this.cast5.encrypt(a)}}var e=a("../../util.js");b.exports=d,b.exports.blockSize=d.prototype.blockSize=8,b.exports.keySize=d.prototype.keySize=16},{"../../util.js":61}],9:[function(a,b){function c(a,b,c,d,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w=new Array(16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756),x=new Array(-2146402272,-2147450880,32768,1081376,1048576,32,-2146435040,-2147450848,-2147483616,-2146402272,-2146402304,-2147483648,-2147450880,1048576,32,-2146435040,1081344,1048608,-2147450848,0,-2147483648,32768,1081376,-2146435072,1048608,-2147483616,0,1081344,32800,-2146402304,-2146435072,32800,0,1081376,-2146435040,1048576,-2147450848,-2146435072,-2146402304,32768,-2146435072,-2147450880,32,-2146402272,1081376,32,32768,-2147483648,32800,-2146402304,1048576,-2147483616,1048608,-2147450848,-2147483616,1048608,1081344,0,-2147450880,32800,-2147483648,-2146435040,-2146402272,1081344),y=new Array(520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584),z=new Array(8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928),A=new Array(256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080),B=new Array(536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312),C=new Array(2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154),D=new Array(268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696),E=0,F=b.length,G=0,H=32==a.length?3:9;
for(p=3==H?c?new Array(0,32,2):new Array(30,-2,-2):c?new Array(0,32,2,62,30,-2,64,96,2):new Array(94,62,-2,32,64,2,30,-2,-2),c&&(b=e(b,h),F=b.length),result="",tempresult="",1==d&&(q=g.charCodeAt(E++)<<24|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<8|g.charCodeAt(E++),s=g.charCodeAt(E++)<<24|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<8|g.charCodeAt(E++),E=0);F>E;){for(n=b.charCodeAt(E++)<<24|b.charCodeAt(E++)<<16|b.charCodeAt(E++)<<8|b.charCodeAt(E++),o=b.charCodeAt(E++)<<24|b.charCodeAt(E++)<<16|b.charCodeAt(E++)<<8|b.charCodeAt(E++),1==d&&(c?(n^=q,o^=s):(r=q,t=s,q=n,s=o)),k=252645135&(n>>>4^o),o^=k,n^=k<<4,k=65535&(n>>>16^o),o^=k,n^=k<<16,k=858993459&(o>>>2^n),n^=k,o^=k<<2,k=16711935&(o>>>8^n),n^=k,o^=k<<8,k=1431655765&(n>>>1^o),o^=k,n^=k<<1,n=n<<1|n>>>31,o=o<<1|o>>>31,j=0;H>j;j+=3){for(u=p[j+1],v=p[j+2],i=p[j];i!=u;i+=v)l=o^a[i],m=(o>>>4|o<<28)^a[i+1],k=n,n=o,o=k^(x[l>>>24&63]|z[l>>>16&63]|B[l>>>8&63]|D[63&l]|w[m>>>24&63]|y[m>>>16&63]|A[m>>>8&63]|C[63&m]);k=n,n=o,o=k}n=n>>>1|n<<31,o=o>>>1|o<<31,k=1431655765&(n>>>1^o),o^=k,n^=k<<1,k=16711935&(o>>>8^n),n^=k,o^=k<<8,k=858993459&(o>>>2^n),n^=k,o^=k<<2,k=65535&(n>>>16^o),o^=k,n^=k<<16,k=252645135&(n>>>4^o),o^=k,n^=k<<4,1==d&&(c?(q=n,s=o):(n^=r,o^=t)),tempresult+=String.fromCharCode(n>>>24,n>>>16&255,n>>>8&255,255&n,o>>>24,o>>>16&255,o>>>8&255,255&o),G+=8,512==G&&(result+=tempresult,tempresult="",G=0)}return result+=tempresult,c||(result=f(result,h)),result}function d(a){pc2bytes0=new Array(0,4,536870912,536870916,65536,65540,536936448,536936452,512,516,536871424,536871428,66048,66052,536936960,536936964),pc2bytes1=new Array(0,1,1048576,1048577,67108864,67108865,68157440,68157441,256,257,1048832,1048833,67109120,67109121,68157696,68157697),pc2bytes2=new Array(0,8,2048,2056,16777216,16777224,16779264,16779272,0,8,2048,2056,16777216,16777224,16779264,16779272),pc2bytes3=new Array(0,2097152,134217728,136314880,8192,2105344,134225920,136323072,131072,2228224,134348800,136445952,139264,2236416,134356992,136454144),pc2bytes4=new Array(0,262144,16,262160,0,262144,16,262160,4096,266240,4112,266256,4096,266240,4112,266256),pc2bytes5=new Array(0,1024,32,1056,0,1024,32,1056,33554432,33555456,33554464,33555488,33554432,33555456,33554464,33555488),pc2bytes6=new Array(0,268435456,524288,268959744,2,268435458,524290,268959746,0,268435456,524288,268959744,2,268435458,524290,268959746),pc2bytes7=new Array(0,65536,2048,67584,536870912,536936448,536872960,536938496,131072,196608,133120,198656,537001984,537067520,537004032,537069568),pc2bytes8=new Array(0,262144,0,262144,2,262146,2,262146,33554432,33816576,33554432,33816576,33554434,33816578,33554434,33816578),pc2bytes9=new Array(0,268435456,8,268435464,0,268435456,8,268435464,1024,268436480,1032,268436488,1024,268436480,1032,268436488),pc2bytes10=new Array(0,32,0,32,1048576,1048608,1048576,1048608,8192,8224,8192,8224,1056768,1056800,1056768,1056800),pc2bytes11=new Array(0,16777216,512,16777728,2097152,18874368,2097664,18874880,67108864,83886080,67109376,83886592,69206016,85983232,69206528,85983744),pc2bytes12=new Array(0,4096,134217728,134221824,524288,528384,134742016,134746112,16,4112,134217744,134221840,524304,528400,134742032,134746128),pc2bytes13=new Array(0,4,256,260,0,4,256,260,1,5,257,261,1,5,257,261);for(var b,c,d,e=a.length>8?3:1,f=new Array(32*e),g=new Array(0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0),h=0,j=0,k=0;e>k;k++)for(left=a.charCodeAt(h++)<<24|a.charCodeAt(h++)<<16|a.charCodeAt(h++)<<8|a.charCodeAt(h++),right=a.charCodeAt(h++)<<24|a.charCodeAt(h++)<<16|a.charCodeAt(h++)<<8|a.charCodeAt(h++),d=252645135&(left>>>4^right),right^=d,left^=d<<4,d=65535&(right>>>-16^left),left^=d,right^=d<<-16,d=858993459&(left>>>2^right),right^=d,left^=d<<2,d=65535&(right>>>-16^left),left^=d,right^=d<<-16,d=1431655765&(left>>>1^right),right^=d,left^=d<<1,d=16711935&(right>>>8^left),left^=d,right^=d<<8,d=1431655765&(left>>>1^right),right^=d,left^=d<<1,d=left<<8|right>>>20&240,left=right<<24|right<<8&16711680|right>>>8&65280|right>>>24&240,right=d,i=0;i<g.length;i++)g[i]?(left=left<<2|left>>>26,right=right<<2|right>>>26):(left=left<<1|left>>>27,right=right<<1|right>>>27),left&=-15,right&=-15,b=pc2bytes0[left>>>28]|pc2bytes1[left>>>24&15]|pc2bytes2[left>>>20&15]|pc2bytes3[left>>>16&15]|pc2bytes4[left>>>12&15]|pc2bytes5[left>>>8&15]|pc2bytes6[left>>>4&15],c=pc2bytes7[right>>>28]|pc2bytes8[right>>>24&15]|pc2bytes9[right>>>20&15]|pc2bytes10[right>>>16&15]|pc2bytes11[right>>>12&15]|pc2bytes12[right>>>8&15]|pc2bytes13[right>>>4&15],d=65535&(c>>>16^b),f[j++]=b^d,f[j++]=c^d<<16;return f}function e(a,b){var c=8-a.length%8;return 2==b&&8>c?a+="        ".substr(0,c):1==b?a+=String.fromCharCode(c,c,c,c,c,c,c,c).substr(0,c):!b&&8>c&&(a+="\x00\x00\x00\x00\x00\x00\x00\x00".substr(0,c)),a}function f(a,b){if(2==b)a=a.replace(/ *$/g,"");else if(1==b){var c=a.charCodeAt(a.length-1);a=a.substr(0,a.length-c)}else b||(a=a.replace(/\0*$/g,""));return a}function g(a){this.key=[];for(var b=0;3>b;b++)this.key.push(a.substr(8*b,8));this.encrypt=function(a){return j.str2bin(c(d(this.key[2]),c(d(this.key[1]),c(d(this.key[0]),j.bin2str(a),!0,0,null,null),!1,0,null,null),!0,0,null,null))}}function h(a){this.key=a,this.encrypt=function(a,b){var e=d(this.key);return j.str2bin(c(e,j.bin2str(a),!0,0,null,b))},this.decrypt=function(a,b){var e=d(this.key);return j.str2bin(c(e,j.bin2str(a),!1,0,null,b))}}var j=a("../../util.js");g.keySize=g.prototype.keySize=24,g.blockSize=g.prototype.blockSize=8,b.exports={des:g,originalDes:h}},{"../../util.js":61}],10:[function(a,b){var c=a("./des.js");b.exports={des:c.originalDes,tripledes:c.des,cast5:a("./cast5.js"),twofish:a("./twofish.js"),blowfish:a("./blowfish.js"),idea:function(){throw new Error("IDEA symmetric-key algorithm not implemented")}};var d=a("./aes.js");for(var e in d)b.exports["aes"+e]=d[e]},{"./aes.js":6,"./blowfish.js":7,"./cast5.js":8,"./des.js":9,"./twofish.js":11}],11:[function(a,b){function c(a,b){return(a<<b|a>>>32-b)&j}function d(a,b){return a[b]|a[b+1]<<8|a[b+2]<<16|a[b+3]<<24}function e(a,b,c){a.splice(b,4,255&c,c>>>8&255,c>>>16&255,c>>>24&255)}function f(a,b){return a>>>8*b&255}function g(){function a(a){function b(a){return a^a>>2^[0,90,180,238][3&a]}function e(a){return a^a>>1^a>>2^[0,238,180,90][3&a]}function g(a,b){var c,d,e;for(c=0;8>c;c++)d=b>>>24,b=b<<8&j|a>>>24,a=a<<8&j,e=d<<1,128&d&&(e^=333),b^=d^e<<16,e^=d>>>1,1&d&&(e^=166),b^=e<<24|e<<8;return b}function h(a,b){var c,d,e,f;return c=b>>4,d=15&b,e=A[a][c^d],f=B[a][E[d]^F[c]],D[a][E[f]^F[e]]<<4|C[a][e^f]}function i(a,b){var c=f(a,0),d=f(a,1),e=f(a,2),g=f(a,3);switch(q){case 4:c=G[1][c]^f(b[3],0),d=G[0][d]^f(b[3],1),e=G[0][e]^f(b[3],2),g=G[1][g]^f(b[3],3);case 3:c=G[1][c]^f(b[2],0),d=G[1][d]^f(b[2],1),e=G[0][e]^f(b[2],2),g=G[0][g]^f(b[2],3);case 2:c=G[0][G[0][c]^f(b[1],0)]^f(b[0],0),d=G[0][G[1][d]^f(b[1],1)]^f(b[0],1),e=G[1][G[0][e]^f(b[1],2)]^f(b[0],2),g=G[1][G[1][g]^f(b[1],3)]^f(b[0],3)}return H[0][c]^H[1][d]^H[2][e]^H[3][g]}o=a;var k,l,m,n,p,q,r,u,v,w=[],x=[],y=[],z=[],A=[[8,1,7,13,6,15,3,2,0,11,5,9,14,12,10,4],[2,8,11,13,15,7,6,14,3,1,9,4,0,10,12,5]],B=[[14,12,11,8,1,2,3,5,15,4,10,6,7,0,9,13],[1,14,2,11,4,12,3,7,6,13,10,5,15,9,0,8]],C=[[11,10,5,14,6,13,9,0,12,8,15,3,2,4,7,1],[4,12,7,5,1,6,9,10,0,14,13,8,2,11,3,15]],D=[[13,7,15,4,1,2,6,14,9,11,3,0,8,5,12,10],[11,9,5,1,12,3,13,14,6,4,7,15,2,0,8,10]],E=[0,8,1,9,2,10,3,11,4,12,5,13,6,14,7,15],F=[0,9,2,11,4,13,6,15,8,1,10,3,12,5,14,7],G=[[],[]],H=[[],[],[],[]];for(o=o.slice(0,32),k=o.length;16!=k&&24!=k&&32!=k;)o[k++]=0;for(k=0;k<o.length;k+=4)y[k>>2]=d(o,k);for(k=0;256>k;k++)G[0][k]=h(0,k),G[1][k]=h(1,k);for(k=0;256>k;k++)r=G[1][k],u=b(r),v=e(r),H[0][k]=r+(u<<8)+(v<<16)+(v<<24),H[2][k]=u+(v<<8)+(r<<16)+(v<<24),r=G[0][k],u=b(r),v=e(r),H[1][k]=v+(v<<8)+(u<<16)+(r<<24),H[3][k]=u+(r<<8)+(v<<16)+(u<<24);for(q=y.length/2,k=0;q>k;k++)l=y[k+k],w[k]=l,m=y[k+k+1],x[k]=m,z[q-k-1]=g(l,m);for(k=0;40>k;k+=2)l=16843009*k,m=l+16843009,l=i(l,w),m=c(i(m,x),8),s[k]=l+m&j,s[k+1]=c(l+2*m,9);for(k=0;256>k;k++)switch(l=m=n=p=k,q){case 4:l=G[1][l]^f(z[3],0),m=G[0][m]^f(z[3],1),n=G[0][n]^f(z[3],2),p=G[1][p]^f(z[3],3);case 3:l=G[1][l]^f(z[2],0),m=G[1][m]^f(z[2],1),n=G[0][n]^f(z[2],2),p=G[0][p]^f(z[2],3);case 2:t[0][k]=H[0][G[0][G[0][l]^f(z[1],0)]^f(z[0],0)],t[1][k]=H[1][G[0][G[1][m]^f(z[1],1)]^f(z[0],1)],t[2][k]=H[2][G[1][G[0][n]^f(z[1],2)]^f(z[0],2)],t[3][k]=H[3][G[1][G[1][p]^f(z[1],3)]^f(z[0],3)]}}function b(a){return t[0][f(a,0)]^t[1][f(a,1)]^t[2][f(a,2)]^t[3][f(a,3)]}function g(a){return t[0][f(a,3)]^t[1][f(a,0)]^t[2][f(a,1)]^t[3][f(a,2)]}function h(a,d){var e=b(d[0]),f=g(d[1]);d[2]=c(d[2]^e+f+s[4*a+8]&j,31),d[3]=c(d[3],1)^e+2*f+s[4*a+9]&j,e=b(d[2]),f=g(d[3]),d[0]=c(d[0]^e+f+s[4*a+10]&j,31),d[1]=c(d[1],1)^e+2*f+s[4*a+11]&j}function i(a,d){var e=b(d[0]),f=g(d[1]);d[2]=c(d[2],1)^e+f+s[4*a+10]&j,d[3]=c(d[3]^e+2*f+s[4*a+11]&j,31),e=b(d[2]),f=g(d[3]),d[0]=c(d[0],1)^e+f+s[4*a+8]&j,d[1]=c(d[1]^e+2*f+s[4*a+9]&j,31)}function k(){s=[],t=[[],[],[],[]]}function l(a,b){p=a,q=b;for(var c=[d(p,q)^s[0],d(p,q+4)^s[1],d(p,q+8)^s[2],d(p,q+12)^s[3]],f=0;8>f;f++)h(f,c);return e(p,q,c[2]^s[4]),e(p,q+4,c[3]^s[5]),e(p,q+8,c[0]^s[6]),e(p,q+12,c[1]^s[7]),q+=16,p}function m(a,b){p=a,q=b;for(var c=[d(p,q)^s[4],d(p,q+4)^s[5],d(p,q+8)^s[6],d(p,q+12)^s[7]],f=7;f>=0;f--)i(f,c);e(p,q,c[2]^s[0]),e(p,q+4,c[3]^s[1]),e(p,q+8,c[0]^s[2]),e(p,q+12,c[1]^s[3]),q+=16}function n(){return p}var o=null,p=null,q=-1,r=null;r="twofish";var s=[],t=[[],[],[],[]];return{name:"twofish",blocksize:16,open:a,close:k,encrypt:l,decrypt:m,finalize:n}}function h(a){this.tf=g(),this.tf.open(k.str2bin(a),0),this.encrypt=function(a){return this.tf.encrypt(i(a),0)}}function i(a){for(var b=[],c=0;c<a.length;c++)b[c]=a[c];return b}var j=4294967295,k=a("../../util.js");b.exports=h,b.exports.keySize=h.prototype.keySize=32,b.exports.blockSize=h.prototype.blockSize=16},{"../../util.js":61}],12:[function(a,b){var c=a("./random.js"),d=a("./cipher"),e=a("./public_key"),f=a("../type/mpi.js");b.exports={publicKeyEncrypt:function(a,b,c){var d=function(){var d;switch(a){case"rsa_encrypt":case"rsa_encrypt_sign":var f=new e.rsa,g=b[0].toBigInteger(),h=b[1].toBigInteger();return d=c.toBigInteger(),[f.encrypt(d,h,g)];case"elgamal":var i=new e.elgamal,j=b[0].toBigInteger(),k=b[1].toBigInteger(),l=b[2].toBigInteger();return d=c.toBigInteger(),i.encrypt(d,k,j,l);default:return[]}}();return d.map(function(a){var b=new f;return b.fromBigInteger(a),b})},publicKeyDecrypt:function(a,b,c){var d,g=function(){switch(a){case"rsa_encrypt_sign":case"rsa_encrypt":var f=new e.rsa,g=b[0].toBigInteger(),h=b[1].toBigInteger(),i=b[2].toBigInteger();d=b[3].toBigInteger();var j=b[4].toBigInteger(),k=b[5].toBigInteger(),l=c[0].toBigInteger();return f.decrypt(l,g,h,i,d,j,k);case"elgamal":var m=new e.elgamal,n=b[3].toBigInteger(),o=c[0].toBigInteger(),p=c[1].toBigInteger();return d=b[0].toBigInteger(),m.decrypt(o,p,d,n);default:return null}}(),h=new f;return h.fromBigInteger(g),h},getPrivateMpiCount:function(a){switch(a){case"rsa_encrypt":case"rsa_encrypt_sign":case"rsa_sign":return 4;case"elgamal":return 1;case"dsa":return 1;default:throw new Error("Unknown algorithm")}},getPublicMpiCount:function(a){switch(a){case"rsa_encrypt":case"rsa_encrypt_sign":case"rsa_sign":return 2;case"elgamal":return 3;case"dsa":return 4;default:throw new Error("Unknown algorithm.")}},generateMpi:function(a,b){var c=function(){switch(a){case"rsa_encrypt":case"rsa_encrypt_sign":case"rsa_sign":var c=new e.rsa,d=c.generate(b,"10001"),f=[];return f.push(d.n),f.push(d.ee),f.push(d.d),f.push(d.p),f.push(d.q),f.push(d.u),f;default:throw new Error("Unsupported algorithm for key generation.")}}();return c.map(function(a){var b=new f;return b.fromBigInteger(a),b})},getPrefixRandom:function(a){return c.getRandomBytes(d[a].blockSize)},generateSessionKey:function(a){return c.getRandomBytes(d[a].keySize)}}},{"../type/mpi.js":59,"./cipher":10,"./public_key":23,"./random.js":26}],13:[function(a,b){var c=b.exports={},d=a("./forge_util.js"),e=null,f=!1,g=null,h=function(){e=String.fromCharCode(128),e+=d.fillString(String.fromCharCode(0),64),g=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],f=!0},i=function(a,b,c){for(var d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t=c.length();t>=64;){for(k=0;16>k;++k)b[k]=c.getInt32();for(;64>k;++k)d=b[k-2],d=(d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10,e=b[k-15],e=(e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3,b[k]=d+b[k-7]+e+b[k-16]&4294967295;for(l=a.h0,m=a.h1,n=a.h2,o=a.h3,p=a.h4,q=a.h5,r=a.h6,s=a.h7,k=0;64>k;++k)h=(p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7),i=r^p&(q^r),f=(l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),j=l&m|n&(l^m),d=s+h+i+g[k]+b[k],e=f+j,s=r,r=q,q=p,p=o+d&4294967295,o=n,n=m,m=l,l=d+e&4294967295;a.h0=a.h0+l&4294967295,a.h1=a.h1+m&4294967295,a.h2=a.h2+n&4294967295,a.h3=a.h3+o&4294967295,a.h4=a.h4+p&4294967295,a.h5=a.h5+q&4294967295,a.h6=a.h6+r&4294967295,a.h7=a.h7+s&4294967295,t-=64}};c.create=function(){f||h();var a=null,b=d.createBuffer(),c=new Array(64),g={algorithm:"sha256",blockLength:64,digestLength:32,messageLength:0};return g.start=function(){return g.messageLength=0,b=d.createBuffer(),a={h0:1779033703,h1:3144134277,h2:1013904242,h3:2773480762,h4:1359893119,h5:2600822924,h6:528734635,h7:1541459225},g},g.start(),g.update=function(e,f){return"utf8"===f&&(e=d.encodeUtf8(e)),g.messageLength+=e.length,b.putBytes(e),i(a,c,b),(b.read>2048||0===b.length())&&b.compact(),g},g.digest=function(){var f=g.messageLength,h=d.createBuffer();h.putBytes(b.bytes()),h.putBytes(e.substr(0,64-(f+8)%64)),h.putInt32(f>>>29&255),h.putInt32(f<<3&4294967295);var j={h0:a.h0,h1:a.h1,h2:a.h2,h3:a.h3,h4:a.h4,h5:a.h5,h6:a.h6,h7:a.h7};i(j,c,h);var k=d.createBuffer();return k.putInt32(j.h0),k.putInt32(j.h1),k.putInt32(j.h2),k.putInt32(j.h3),k.putInt32(j.h4),k.putInt32(j.h5),k.putInt32(j.h6),k.putInt32(j.h7),k},g}},{"./forge_util.js":14}],14:[function(a,b){var c=b.exports={};c.isArray=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},c.isArrayBuffer=function(a){return"undefined"!=typeof ArrayBuffer&&a instanceof ArrayBuffer};var d=[];"undefined"!=typeof Int8Array&&d.push(Int8Array),"undefined"!=typeof Uint8Array&&d.push(Uint8Array),"undefined"!=typeof Uint8ClampedArray&&d.push(Uint8ClampedArray),"undefined"!=typeof Int16Array&&d.push(Int16Array),"undefined"!=typeof Uint16Array&&d.push(Uint16Array),"undefined"!=typeof Int32Array&&d.push(Int32Array),"undefined"!=typeof Uint32Array&&d.push(Uint32Array),"undefined"!=typeof Float32Array&&d.push(Float32Array),"undefined"!=typeof Float64Array&&d.push(Float64Array),c.isArrayBufferView=function(a){for(var b=0;b<d.length;++b)if(a instanceof d[b])return!0;return!1},c.ByteBuffer=function(a){if(this.data="",this.read=0,"string"==typeof a)this.data=a;else if(c.isArrayBuffer(a)||c.isArrayBufferView(a)){var b=new Uint8Array(a);try{this.data=String.fromCharCode.apply(null,b)}catch(d){for(var e=0;e<b.length;++e)this.putByte(b[e])}}},c.ByteBuffer.prototype.length=function(){return this.data.length-this.read},c.ByteBuffer.prototype.isEmpty=function(){return this.length()<=0},c.ByteBuffer.prototype.putByte=function(a){return this.data+=String.fromCharCode(a),this},c.ByteBuffer.prototype.fillWithByte=function(a,b){a=String.fromCharCode(a);for(var c=this.data;b>0;)1&b&&(c+=a),b>>>=1,b>0&&(a+=a);return this.data=c,this},c.ByteBuffer.prototype.putBytes=function(a){return this.data+=a,this},c.ByteBuffer.prototype.putString=function(a){return this.data+=c.encodeUtf8(a),this},c.ByteBuffer.prototype.putInt16=function(a){return this.data+=String.fromCharCode(a>>8&255)+String.fromCharCode(255&a),this},c.ByteBuffer.prototype.putInt24=function(a){return this.data+=String.fromCharCode(a>>16&255)+String.fromCharCode(a>>8&255)+String.fromCharCode(255&a),this},c.ByteBuffer.prototype.putInt32=function(a){return this.data+=String.fromCharCode(a>>24&255)+String.fromCharCode(a>>16&255)+String.fromCharCode(a>>8&255)+String.fromCharCode(255&a),this},c.ByteBuffer.prototype.putInt16Le=function(a){return this.data+=String.fromCharCode(255&a)+String.fromCharCode(a>>8&255),this},c.ByteBuffer.prototype.putInt24Le=function(a){return this.data+=String.fromCharCode(255&a)+String.fromCharCode(a>>8&255)+String.fromCharCode(a>>16&255),this},c.ByteBuffer.prototype.putInt32Le=function(a){return this.data+=String.fromCharCode(255&a)+String.fromCharCode(a>>8&255)+String.fromCharCode(a>>16&255)+String.fromCharCode(a>>24&255),this},c.ByteBuffer.prototype.putInt=function(a,b){do b-=8,this.data+=String.fromCharCode(a>>b&255);while(b>0);return this},c.ByteBuffer.prototype.putSignedInt=function(a,b){return 0>a&&(a+=2<<b-1),this.putInt(a,b)},c.ByteBuffer.prototype.putBuffer=function(a){return this.data+=a.getBytes(),this},c.ByteBuffer.prototype.getByte=function(){return this.data.charCodeAt(this.read++)},c.ByteBuffer.prototype.getInt16=function(){var a=this.data.charCodeAt(this.read)<<8^this.data.charCodeAt(this.read+1);return this.read+=2,a},c.ByteBuffer.prototype.getInt24=function(){var a=this.data.charCodeAt(this.read)<<16^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2);return this.read+=3,a},c.ByteBuffer.prototype.getInt32=function(){var a=this.data.charCodeAt(this.read)<<24^this.data.charCodeAt(this.read+1)<<16^this.data.charCodeAt(this.read+2)<<8^this.data.charCodeAt(this.read+3);return this.read+=4,a},c.ByteBuffer.prototype.getInt16Le=function(){var a=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8;return this.read+=2,a},c.ByteBuffer.prototype.getInt24Le=function(){var a=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16;return this.read+=3,a},c.ByteBuffer.prototype.getInt32Le=function(){var a=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16^this.data.charCodeAt(this.read+3)<<24;return this.read+=4,a},c.ByteBuffer.prototype.getInt=function(a){var b=0;do b=(b<<8)+this.data.charCodeAt(this.read++),a-=8;while(a>0);return b},c.ByteBuffer.prototype.getSignedInt=function(a){var b=this.getInt(a),c=2<<a-2;return b>=c&&(b-=c<<1),b},c.ByteBuffer.prototype.getBytes=function(a){var b;return a?(a=Math.min(this.length(),a),b=this.data.slice(this.read,this.read+a),this.read+=a):0===a?b="":(b=0===this.read?this.data:this.data.slice(this.read),this.clear()),b},c.ByteBuffer.prototype.bytes=function(a){return"undefined"==typeof a?this.data.slice(this.read):this.data.slice(this.read,this.read+a)},c.ByteBuffer.prototype.at=function(a){return this.data.charCodeAt(this.read+a)},c.ByteBuffer.prototype.setAt=function(a,b){return this.data=this.data.substr(0,this.read+a)+String.fromCharCode(b)+this.data.substr(this.read+a+1),this},c.ByteBuffer.prototype.last=function(){return this.data.charCodeAt(this.data.length-1)},c.ByteBuffer.prototype.copy=function(){var a=c.createBuffer(this.data);return a.read=this.read,a},c.ByteBuffer.prototype.compact=function(){return this.read>0&&(this.data=this.data.slice(this.read),this.read=0),this},c.ByteBuffer.prototype.clear=function(){return this.data="",this.read=0,this},c.ByteBuffer.prototype.truncate=function(a){var b=Math.max(0,this.length()-a);return this.data=this.data.substr(this.read,b),this.read=0,this},c.ByteBuffer.prototype.toHex=function(){for(var a="",b=this.read;b<this.data.length;++b){var c=this.data.charCodeAt(b);16>c&&(a+="0"),a+=c.toString(16)}return a},c.ByteBuffer.prototype.toString=function(){return c.decodeUtf8(this.bytes())},c.createBuffer=function(a,b){return b=b||"raw",void 0!==a&&"utf8"===b&&(a=c.encodeUtf8(a)),new c.ByteBuffer(a)},c.fillString=function(a,b){for(var c="";b>0;)1&b&&(c+=a),b>>>=1,b>0&&(a+=a);return c},c.xorBytes=function(a,b,c){for(var d="",e="",f="",g=0,h=0;c>0;--c,++g)e=a.charCodeAt(g)^b.charCodeAt(g),h>=10&&(d+=f,f="",h=0),f+=String.fromCharCode(e),++h;return d+=f},c.hexToBytes=function(a){var b="",c=0;for(a.length&!0&&(c=1,b+=String.fromCharCode(parseInt(a[0],16)));c<a.length;c+=2)b+=String.fromCharCode(parseInt(a.substr(c,2),16));return b},c.bytesToHex=function(a){return c.createBuffer(a).toHex()},c.int32ToBytes=function(a){return String.fromCharCode(a>>24&255)+String.fromCharCode(a>>16&255)+String.fromCharCode(a>>8&255)+String.fromCharCode(255&a)};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=[62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,64,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];c.encode64=function(a,b){for(var c,d,f,g="",h="",i=0;i<a.length;)c=a.charCodeAt(i++),d=a.charCodeAt(i++),f=a.charCodeAt(i++),g+=e.charAt(c>>2),g+=e.charAt((3&c)<<4|d>>4),isNaN(d)?g+="==":(g+=e.charAt((15&d)<<2|f>>6),g+=isNaN(f)?"=":e.charAt(63&f)),b&&g.length>b&&(h+=g.substr(0,b)+"\r\n",g=g.substr(b));return h+=g},c.decode64=function(a){a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var b,c,d,e,g="",h=0;h<a.length;)b=f[a.charCodeAt(h++)-43],c=f[a.charCodeAt(h++)-43],d=f[a.charCodeAt(h++)-43],e=f[a.charCodeAt(h++)-43],g+=String.fromCharCode(b<<2|c>>4),64!==d&&(g+=String.fromCharCode((15&c)<<4|d>>2),64!==e&&(g+=String.fromCharCode((3&d)<<6|e)));return g},c.encodeUtf8=function(a){return unescape(encodeURIComponent(a))},c.decodeUtf8=function(a){return decodeURIComponent(escape(a))}},{}],15:[function(a,b){var c=a("./sha.js"),d=a("./forge_sha256.js");b.exports={md5:a("./md5.js"),sha1:c.sha1,sha224:c.sha224,sha256:c.sha256,sha384:c.sha384,sha512:c.sha512,ripemd:a("./ripe-md.js"),digest:function(a,b){switch(a){case 1:return this.md5(b);case 2:return this.sha1(b);case 3:return this.ripemd(b);case 8:var c=d.create();return c.update(b),c.digest().getBytes();case 9:return this.sha384(b);case 10:return this.sha512(b);case 11:return this.sha224(b);default:throw new Error("Invalid hash function.")}},getHashByteLength:function(a){switch(a){case 1:return 16;case 2:case 3:return 20;case 8:return 32;case 9:return 48;case 10:return 64;case 11:return 28;default:throw new Error("Invalid hash algorithm.")}}}},{"./forge_sha256.js":13,"./md5.js":16,"./ripe-md.js":17,"./sha.js":18}],16:[function(a,b){function c(a,b){var c=a[0],d=a[1],i=a[2],j=a[3];c=e(c,d,i,j,b[0],7,-680876936),j=e(j,c,d,i,b[1],12,-389564586),i=e(i,j,c,d,b[2],17,606105819),d=e(d,i,j,c,b[3],22,-1044525330),c=e(c,d,i,j,b[4],7,-176418897),j=e(j,c,d,i,b[5],12,1200080426),i=e(i,j,c,d,b[6],17,-1473231341),d=e(d,i,j,c,b[7],22,-45705983),c=e(c,d,i,j,b[8],7,1770035416),j=e(j,c,d,i,b[9],12,-1958414417),i=e(i,j,c,d,b[10],17,-42063),d=e(d,i,j,c,b[11],22,-1990404162),c=e(c,d,i,j,b[12],7,1804603682),j=e(j,c,d,i,b[13],12,-40341101),i=e(i,j,c,d,b[14],17,-1502002290),d=e(d,i,j,c,b[15],22,1236535329),c=f(c,d,i,j,b[1],5,-165796510),j=f(j,c,d,i,b[6],9,-1069501632),i=f(i,j,c,d,b[11],14,643717713),d=f(d,i,j,c,b[0],20,-373897302),c=f(c,d,i,j,b[5],5,-701558691),j=f(j,c,d,i,b[10],9,38016083),i=f(i,j,c,d,b[15],14,-660478335),d=f(d,i,j,c,b[4],20,-405537848),c=f(c,d,i,j,b[9],5,568446438),j=f(j,c,d,i,b[14],9,-1019803690),i=f(i,j,c,d,b[3],14,-187363961),d=f(d,i,j,c,b[8],20,1163531501),c=f(c,d,i,j,b[13],5,-1444681467),j=f(j,c,d,i,b[2],9,-51403784),i=f(i,j,c,d,b[7],14,1735328473),d=f(d,i,j,c,b[12],20,-1926607734),c=g(c,d,i,j,b[5],4,-378558),j=g(j,c,d,i,b[8],11,-2022574463),i=g(i,j,c,d,b[11],16,1839030562),d=g(d,i,j,c,b[14],23,-35309556),c=g(c,d,i,j,b[1],4,-1530992060),j=g(j,c,d,i,b[4],11,1272893353),i=g(i,j,c,d,b[7],16,-155497632),d=g(d,i,j,c,b[10],23,-1094730640),c=g(c,d,i,j,b[13],4,681279174),j=g(j,c,d,i,b[0],11,-358537222),i=g(i,j,c,d,b[3],16,-722521979),d=g(d,i,j,c,b[6],23,76029189),c=g(c,d,i,j,b[9],4,-640364487),j=g(j,c,d,i,b[12],11,-421815835),i=g(i,j,c,d,b[15],16,530742520),d=g(d,i,j,c,b[2],23,-995338651),c=h(c,d,i,j,b[0],6,-198630844),j=h(j,c,d,i,b[7],10,1126891415),i=h(i,j,c,d,b[14],15,-1416354905),d=h(d,i,j,c,b[5],21,-57434055),c=h(c,d,i,j,b[12],6,1700485571),j=h(j,c,d,i,b[3],10,-1894986606),i=h(i,j,c,d,b[10],15,-1051523),d=h(d,i,j,c,b[1],21,-2054922799),c=h(c,d,i,j,b[8],6,1873313359),j=h(j,c,d,i,b[15],10,-30611744),i=h(i,j,c,d,b[6],15,-1560198380),d=h(d,i,j,c,b[13],21,1309151649),c=h(c,d,i,j,b[4],6,-145523070),j=h(j,c,d,i,b[11],10,-1120210379),i=h(i,j,c,d,b[2],15,718787259),d=h(d,i,j,c,b[9],21,-343485551),a[0]=n(c,a[0]),a[1]=n(d,a[1]),a[2]=n(i,a[2]),a[3]=n(j,a[3])}function d(a,b,c,d,e,f){return b=n(n(b,a),n(d,f)),n(b<<e|b>>>32-e,c)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a){txt="";var b,d=a.length,e=[1732584193,-271733879,-1732584194,271733878];for(b=64;b<=a.length;b+=64)c(e,j(a.substring(b-64,b)));a=a.substring(b-64);var f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(b=0;b<a.length;b++)f[b>>2]|=a.charCodeAt(b)<<(b%4<<3);if(f[b>>2]|=128<<(b%4<<3),b>55)for(c(e,f),b=0;16>b;b++)f[b]=0;return f[14]=8*d,c(e,f),e}function j(a){var b,c=[];for(b=0;64>b;b+=4)c[b>>2]=a.charCodeAt(b)+(a.charCodeAt(b+1)<<8)+(a.charCodeAt(b+2)<<16)+(a.charCodeAt(b+3)<<24);return c}function k(a){for(var b="",c=0;4>c;c++)b+=p[a>>8*c+4&15]+p[a>>8*c&15];return b}function l(a){for(var b=0;b<a.length;b++)a[b]=k(a[b]);return a.join("")}function m(a){return l(i(a))}function n(a,b){return a+b&4294967295}function n(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}var o=a("../../util.js");b.exports=function(a){var b=m(a),c=o.hex2bin(b);return c};var p="0123456789abcdef".split("");"5d41402abc4b2a76b9719d911017c592"!=m("hello")},{"../../util.js":61}],17:[function(a,b){function c(a,b){return new Number(a<<b|a>>>32-b)}function d(a,b,c){return new Number(a^b^c)}function e(a,b,c){return new Number(a&b|~a&c)}function f(a,b,c){return new Number((a|~b)^c)}function g(a,b,c){return new Number(a&c|b&~c)}function h(a,b,c){return new Number(a^(b|~c))}function i(a,b,i,j,k,l,m,n){switch(n){case 0:a+=d(b,i,j)+l+0;break;case 1:a+=e(b,i,j)+l+1518500249;break;case 2:a+=f(b,i,j)+l+1859775393;break;case 3:a+=g(b,i,j)+l+2400959708;break;case 4:a+=h(b,i,j)+l+2840853838;break;case 5:a+=h(b,i,j)+l+1352829926;break;case 6:a+=g(b,i,j)+l+1548603684;break;case 7:a+=f(b,i,j)+l+1836072691;break;case 8:a+=e(b,i,j)+l+2053994217;break;case 9:a+=d(b,i,j)+l+0;break;default:throw new Error("Bogus round number")}a=c(a,m)+k,i=c(i,10),a&=4294967295,b&=4294967295,i&=4294967295,j&=4294967295,k&=4294967295;var o=[];return o[0]=a,o[1]=b,o[2]=i,o[3]=j,o[4]=k,o[5]=l,o[6]=m,o}function j(a){a[0]=1732584193,a[1]=4023233417,a[2]=2562383102,a[3]=271733878,a[4]=3285377520}function k(a,b){blockA=[],blockB=[];var c,d,e;for(d=0;5>d;d++)blockA[d]=new Number(a[d]),blockB[d]=new Number(a[d]);var f=0;for(e=0;5>e;e++)for(d=0;16>d;d++)c=i(blockA[(f+0)%5],blockA[(f+1)%5],blockA[(f+2)%5],blockA[(f+3)%5],blockA[(f+4)%5],b[s[e][d]],r[e][d],e),blockA[(f+0)%5]=c[0],blockA[(f+1)%5]=c[1],blockA[(f+2)%5]=c[2],blockA[(f+3)%5]=c[3],blockA[(f+4)%5]=c[4],f+=4;for(f=0,e=5;10>e;e++)for(d=0;16>d;d++)c=i(blockB[(f+0)%5],blockB[(f+1)%5],blockB[(f+2)%5],blockB[(f+3)%5],blockB[(f+4)%5],b[s[e][d]],r[e][d],e),blockB[(f+0)%5]=c[0],blockB[(f+1)%5]=c[1],blockB[(f+2)%5]=c[2],blockB[(f+3)%5]=c[3],blockB[(f+4)%5]=c[4],f+=4;blockB[3]+=blockA[2]+a[1],a[1]=a[2]+blockA[3]+blockB[4],a[2]=a[3]+blockA[4]+blockB[0],a[3]=a[4]+blockA[0]+blockB[1],a[4]=a[0]+blockA[1]+blockB[2],a[0]=blockB[3]}function l(a){for(var b=0;16>b;b++)a[b]=0}function m(a,b,c,d){var e=new Array(16);l(e);for(var f=0,g=0;(63&c)>g;g++)e[g>>>2]^=(255&b.charCodeAt(f++))<<8*(3&g);e[c>>>2&15]^=1<<8*(3&c)+7,(63&c)>55&&(k(a,e),e=new Array(16),l(e)),e[14]=c<<3,e[15]=c>>>29|d<<3,k(a,e)}function n(a){var b=(255&a.charCodeAt(3))<<24;return b|=(255&a.charCodeAt(2))<<16,b|=(255&a.charCodeAt(1))<<8,b|=255&a.charCodeAt(0)}function o(a){var b,c,d=new Array(q/32),e=new Array(q/8);j(d),b=a.length;var f=new Array(16);l(f);var g,h=0;for(c=b;c>63;c-=64){for(g=0;16>g;g++)f[g]=n(a.substr(h,4)),h+=4;k(d,f)}for(m(d,a.substr(h),b,0),g=0;q/8>g;g+=4)e[g]=255&d[g>>>2],e[g+1]=d[g>>>2]>>>8&255,e[g+2]=d[g>>>2]>>>16&255,e[g+3]=d[g>>>2]>>>24&255;return e}function p(a){for(var b=o(a),c="",d=0;q/8>d;d++)c+=String.fromCharCode(b[d]);return c}var q=160,r=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12],[11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5],[11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12],[9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6],[9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11],[9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5],[15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8],[8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]],s=[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],[7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8],[3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12],[1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2],[4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12],[6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2],[15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13],[8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14],[12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]];b.exports=p},{}],18:[function(a,b){var c=function(){var a=8,b="",c=0,d=function(a,b){this.highOrder=a,this.lowOrder=b},e=function(b){var c,d=[],e=(1<<a)-1,f=b.length*a;for(c=0;f>c;c+=a)d[c>>5]|=(b.charCodeAt(c/a)&e)<<32-a-c%32;return d},f=function(a){var b,c,d=[],e=a.length;for(b=0;e>b;b+=2){if(c=parseInt(a.substr(b,2),16),isNaN(c))throw new Error("INVALID HEX STRING");d[b>>3]|=c<<24-4*(b%8)}return d},g=function(a){var b,d,e=c?"0123456789ABCDEF":"0123456789abcdef",f="",g=4*a.length;for(b=0;g>b;b+=1)d=a[b>>2]>>8*(3-b%4),f+=e.charAt(d>>4&15)+e.charAt(15&d);return f},h=function(a){var c,d,e,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g="",h=4*a.length;for(c=0;h>c;c+=3)for(e=(a[c>>2]>>8*(3-c%4)&255)<<16|(a[c+1>>2]>>8*(3-(c+1)%4)&255)<<8|a[c+2>>2]>>8*(3-(c+2)%4)&255,d=0;4>d;d+=1)g+=8*c+6*d<=32*a.length?f.charAt(e>>6*(3-d)&63):b;return g},i=function(a){for(var b="",c=255,d=0;d<32*a.length;d+=8)b+=String.fromCharCode(a[d>>5]>>>24-d%32&c);return b},j=function(a,b){return a<<b|a>>>32-b},k=function(a,b){return a>>>b|a<<32-b},l=function(a,b){return 32>=b?new d(a.highOrder>>>b|a.lowOrder<<32-b,a.lowOrder>>>b|a.highOrder<<32-b):new d(a.lowOrder>>>b|a.highOrder<<32-b,a.highOrder>>>b|a.lowOrder<<32-b)},m=function(a,b){return a>>>b},n=function(a,b){return 32>=b?new d(a.highOrder>>>b,a.lowOrder>>>b|a.highOrder<<32-b):new d(0,a.highOrder<<32-b)},o=function(a,b,c){return a^b^c},p=function(a,b,c){return a&b^~a&c},q=function(a,b,c){return new d(a.highOrder&b.highOrder^~a.highOrder&c.highOrder,a.lowOrder&b.lowOrder^~a.lowOrder&c.lowOrder)},r=function(a,b,c){return a&b^a&c^b&c},s=function(a,b,c){return new d(a.highOrder&b.highOrder^a.highOrder&c.highOrder^b.highOrder&c.highOrder,a.lowOrder&b.lowOrder^a.lowOrder&c.lowOrder^b.lowOrder&c.lowOrder)},t=function(a){return k(a,2)^k(a,13)^k(a,22)},u=function(a){var b=l(a,28),c=l(a,34),e=l(a,39);return new d(b.highOrder^c.highOrder^e.highOrder,b.lowOrder^c.lowOrder^e.lowOrder)},v=function(a){return k(a,6)^k(a,11)^k(a,25)},w=function(a){var b=l(a,14),c=l(a,18),e=l(a,41);return new d(b.highOrder^c.highOrder^e.highOrder,b.lowOrder^c.lowOrder^e.lowOrder)},x=function(a){return k(a,7)^k(a,18)^m(a,3)},y=function(a){var b=l(a,1),c=l(a,8),e=n(a,7);return new d(b.highOrder^c.highOrder^e.highOrder,b.lowOrder^c.lowOrder^e.lowOrder)},z=function(a){return k(a,17)^k(a,19)^m(a,10)},A=function(a){var b=l(a,19),c=l(a,61),e=n(a,6);return new d(b.highOrder^c.highOrder^e.highOrder,b.lowOrder^c.lowOrder^e.lowOrder)},B=function(a,b){var c=(65535&a)+(65535&b),d=(a>>>16)+(b>>>16)+(c>>>16);
return(65535&d)<<16|65535&c},C=function(a,b,c,d){var e=(65535&a)+(65535&b)+(65535&c)+(65535&d),f=(a>>>16)+(b>>>16)+(c>>>16)+(d>>>16)+(e>>>16);return(65535&f)<<16|65535&e},D=function(a,b,c,d,e){var f=(65535&a)+(65535&b)+(65535&c)+(65535&d)+(65535&e),g=(a>>>16)+(b>>>16)+(c>>>16)+(d>>>16)+(e>>>16)+(f>>>16);return(65535&g)<<16|65535&f},E=function(a,b){var c,e,f,g;return c=(65535&a.lowOrder)+(65535&b.lowOrder),e=(a.lowOrder>>>16)+(b.lowOrder>>>16)+(c>>>16),f=(65535&e)<<16|65535&c,c=(65535&a.highOrder)+(65535&b.highOrder)+(e>>>16),e=(a.highOrder>>>16)+(b.highOrder>>>16)+(c>>>16),g=(65535&e)<<16|65535&c,new d(g,f)},F=function(a,b,c,e){var f,g,h,i;return f=(65535&a.lowOrder)+(65535&b.lowOrder)+(65535&c.lowOrder)+(65535&e.lowOrder),g=(a.lowOrder>>>16)+(b.lowOrder>>>16)+(c.lowOrder>>>16)+(e.lowOrder>>>16)+(f>>>16),h=(65535&g)<<16|65535&f,f=(65535&a.highOrder)+(65535&b.highOrder)+(65535&c.highOrder)+(65535&e.highOrder)+(g>>>16),g=(a.highOrder>>>16)+(b.highOrder>>>16)+(c.highOrder>>>16)+(e.highOrder>>>16)+(f>>>16),i=(65535&g)<<16|65535&f,new d(i,h)},G=function(a,b,c,e,f){var g,h,i,j;return g=(65535&a.lowOrder)+(65535&b.lowOrder)+(65535&c.lowOrder)+(65535&e.lowOrder)+(65535&f.lowOrder),h=(a.lowOrder>>>16)+(b.lowOrder>>>16)+(c.lowOrder>>>16)+(e.lowOrder>>>16)+(f.lowOrder>>>16)+(g>>>16),i=(65535&h)<<16|65535&g,g=(65535&a.highOrder)+(65535&b.highOrder)+(65535&c.highOrder)+(65535&e.highOrder)+(65535&f.highOrder)+(h>>>16),h=(a.highOrder>>>16)+(b.highOrder>>>16)+(c.highOrder>>>16)+(e.highOrder>>>16)+(f.highOrder>>>16)+(g>>>16),j=(65535&h)<<16|65535&g,new d(j,i)},H=function(a,b){var c,d,e,f,g,h,i,k,l,m=[],n=p,q=o,s=r,t=j,u=B,v=D,w=[1732584193,4023233417,2562383102,271733878,3285377520],x=[1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782];for(a[b>>5]|=128<<24-b%32,a[(b+65>>9<<4)+15]=b,l=a.length,i=0;l>i;i+=16){for(c=w[0],d=w[1],e=w[2],f=w[3],g=w[4],k=0;80>k;k+=1)m[k]=16>k?a[k+i]:t(m[k-3]^m[k-8]^m[k-14]^m[k-16],1),h=20>k?v(t(c,5),n(d,e,f),g,x[k],m[k]):40>k?v(t(c,5),q(d,e,f),g,x[k],m[k]):60>k?v(t(c,5),s(d,e,f),g,x[k],m[k]):v(t(c,5),q(d,e,f),g,x[k],m[k]),g=f,f=e,e=t(d,30),d=c,c=h;w[0]=u(c,w[0]),w[1]=u(d,w[1]),w[2]=u(e,w[2]),w[3]=u(f,w[3]),w[4]=u(g,w[4])}return w},I=function(a,b,c){var e,f,g,h,i,j,k,l,m,n,o,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z=[];for("SHA-224"===c||"SHA-256"===c?(H=64,I=(b+65>>9<<4)+15,L=16,M=1,W=Number,N=B,O=C,P=D,Q=x,R=z,S=t,T=v,V=r,U=p,X=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],o="SHA-224"===c?[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]:[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]):("SHA-384"===c||"SHA-512"===c)&&(H=80,I=(b+128>>10<<5)+31,L=32,M=2,W=d,N=E,O=F,P=G,Q=y,R=A,S=u,T=w,V=s,U=q,X=[new W(1116352408,3609767458),new W(1899447441,602891725),new W(3049323471,3964484399),new W(3921009573,2173295548),new W(961987163,4081628472),new W(1508970993,3053834265),new W(2453635748,2937671579),new W(2870763221,3664609560),new W(3624381080,2734883394),new W(310598401,1164996542),new W(607225278,1323610764),new W(1426881987,3590304994),new W(1925078388,4068182383),new W(2162078206,991336113),new W(2614888103,633803317),new W(3248222580,3479774868),new W(3835390401,2666613458),new W(4022224774,944711139),new W(264347078,2341262773),new W(604807628,2007800933),new W(770255983,1495990901),new W(1249150122,1856431235),new W(1555081692,3175218132),new W(1996064986,2198950837),new W(2554220882,3999719339),new W(2821834349,766784016),new W(2952996808,2566594879),new W(3210313671,3203337956),new W(3336571891,1034457026),new W(3584528711,2466948901),new W(113926993,3758326383),new W(338241895,168717936),new W(666307205,1188179964),new W(773529912,1546045734),new W(1294757372,1522805485),new W(1396182291,2643833823),new W(1695183700,2343527390),new W(1986661051,1014477480),new W(2177026350,1206759142),new W(2456956037,344077627),new W(2730485921,1290863460),new W(2820302411,3158454273),new W(3259730800,3505952657),new W(3345764771,106217008),new W(3516065817,3606008344),new W(3600352804,1432725776),new W(4094571909,1467031594),new W(275423344,851169720),new W(430227734,3100823752),new W(506948616,1363258195),new W(659060556,3750685593),new W(883997877,3785050280),new W(958139571,3318307427),new W(1322822218,3812723403),new W(1537002063,2003034995),new W(1747873779,3602036899),new W(1955562222,1575990012),new W(2024104815,1125592928),new W(2227730452,2716904306),new W(2361852424,442776044),new W(2428436474,593698344),new W(2756734187,3733110249),new W(3204031479,2999351573),new W(3329325298,3815920427),new W(3391569614,3928383900),new W(3515267271,566280711),new W(3940187606,3454069534),new W(4118630271,4000239992),new W(116418474,1914138554),new W(174292421,2731055270),new W(289380356,3203993006),new W(460393269,320620315),new W(685471733,587496836),new W(852142971,1086792851),new W(1017036298,365543100),new W(1126000580,2618297676),new W(1288033470,3409855158),new W(1501505948,4234509866),new W(1607167915,987167468),new W(1816402316,1246189591)],o="SHA-384"===c?[new W(3418070365,3238371032),new W(1654270250,914150663),new W(2438529370,812702999),new W(355462360,4144912697),new W(1731405415,4290775857),new W(41048885895,1750603025),new W(3675008525,1694076839),new W(1203062813,3204075428)]:[new W(1779033703,4089235720),new W(3144134277,2227873595),new W(1013904242,4271175723),new W(2773480762,1595750129),new W(1359893119,2917565137),new W(2600822924,725511199),new W(528734635,4215389547),new W(1541459225,327033209)]),a[b>>5]|=128<<24-b%32,a[I]=b,Y=a.length,J=0;Y>J;J+=L){for(e=o[0],f=o[1],g=o[2],h=o[3],i=o[4],j=o[5],k=o[6],l=o[7],K=0;H>K;K+=1)Z[K]=16>K?new W(a[K*M+J],a[K*M+J+1]):O(R(Z[K-2]),Z[K-7],Q(Z[K-15]),Z[K-16]),m=P(l,T(i),U(i,j,k),X[K],Z[K]),n=N(S(e),V(e,f,g)),l=k,k=j,j=i,i=N(h,m),h=g,g=f,f=e,e=N(m,n);o[0]=N(e,o[0]),o[1]=N(f,o[1]),o[2]=N(g,o[2]),o[3]=N(h,o[3]),o[4]=N(i,o[4]),o[5]=N(j,o[5]),o[6]=N(k,o[6]),o[7]=N(l,o[7])}switch(c){case"SHA-224":return[o[0],o[1],o[2],o[3],o[4],o[5],o[6]];case"SHA-256":return o;case"SHA-384":return[o[0].highOrder,o[0].lowOrder,o[1].highOrder,o[1].lowOrder,o[2].highOrder,o[2].lowOrder,o[3].highOrder,o[3].lowOrder,o[4].highOrder,o[4].lowOrder,o[5].highOrder,o[5].lowOrder];case"SHA-512":return[o[0].highOrder,o[0].lowOrder,o[1].highOrder,o[1].lowOrder,o[2].highOrder,o[2].lowOrder,o[3].highOrder,o[3].lowOrder,o[4].highOrder,o[4].lowOrder,o[5].highOrder,o[5].lowOrder,o[6].highOrder,o[6].lowOrder,o[7].highOrder,o[7].lowOrder];default:throw new Error("Unknown SHA variant")}},J=function(b,c){if(this.sha1=null,this.sha224=null,this.sha256=null,this.sha384=null,this.sha512=null,this.strBinLen=null,this.strToHash=null,"HEX"===c){if(0!==b.length%2)throw new Error("TEXT MUST BE IN BYTE INCREMENTS");this.strBinLen=4*b.length,this.strToHash=f(b)}else{if("ASCII"!==c&&"undefined"!=typeof c)throw new Error("UNKNOWN TEXT INPUT TYPE");this.strBinLen=b.length*a,this.strToHash=e(b)}};return J.prototype={getHash:function(a,b){var c=null,d=this.strToHash.slice();switch(b){case"HEX":c=g;break;case"B64":c=h;break;case"ASCII":c=i;break;default:throw new Error("FORMAT NOT RECOGNIZED")}switch(a){case"SHA-1":return null===this.sha1&&(this.sha1=H(d,this.strBinLen)),c(this.sha1);case"SHA-224":return null===this.sha224&&(this.sha224=I(d,this.strBinLen,a)),c(this.sha224);case"SHA-256":return null===this.sha256&&(this.sha256=I(d,this.strBinLen,a)),c(this.sha256);case"SHA-384":return null===this.sha384&&(this.sha384=I(d,this.strBinLen,a)),c(this.sha384);case"SHA-512":return null===this.sha512&&(this.sha512=I(d,this.strBinLen,a)),c(this.sha512);default:throw new Error("HASH NOT RECOGNIZED")}},getHMAC:function(b,c,d,j){var k,l,m,n,o,p,q,r,s,t=[],u=[];switch(j){case"HEX":k=g;break;case"B64":k=h;break;case"ASCII":k=i;break;default:throw new Error("FORMAT NOT RECOGNIZED")}switch(d){case"SHA-1":m=64,s=160;break;case"SHA-224":m=64,s=224;break;case"SHA-256":m=64,s=256;break;case"SHA-384":m=128,s=384;break;case"SHA-512":m=128,s=512;break;default:throw new Error("HASH NOT RECOGNIZED")}if("HEX"===c){if(0!==b.length%2)throw new Error("KEY MUST BE IN BYTE INCREMENTS");l=f(b),r=4*b.length}else{if("ASCII"!==c)throw new Error("UNKNOWN KEY INPUT TYPE");l=e(b),r=b.length*a}for(n=8*m,q=m/4-1,r/8>m?(l="SHA-1"===d?H(l,r):I(l,r,d),l[q]&=4294967040):m>r/8&&(l[q]&=4294967040),o=0;q>=o;o+=1)t[o]=909522486^l[o],u[o]=1549556828^l[o];return"SHA-1"===d?(p=H(t.concat(this.strToHash),n+this.strBinLen),p=H(u.concat(p),n+s)):(p=I(t.concat(this.strToHash),n+this.strBinLen,d),p=I(u.concat(p),n+s,d)),k(p)}},J}();b.exports={sha1:function(a){var b=new c(a,"ASCII");return b.getHash("SHA-1","ASCII")},sha224:function(a){var b=new c(a,"ASCII");return b.getHash("SHA-224","ASCII")},sha256:function(a){var b=new c(a,"ASCII");return b.getHash("SHA-256","ASCII")},sha384:function(a){var b=new c(a,"ASCII");return b.getHash("SHA-384","ASCII")},sha512:function(a){var b=new c(a,"ASCII");return b.getHash("SHA-512","ASCII")}}},{}],19:[function(a,b){b.exports={cipher:a("./cipher"),hash:a("./hash"),cfb:a("./cfb.js"),publicKey:a("./public_key"),signature:a("./signature.js"),random:a("./random.js"),pkcs1:a("./pkcs1.js")};var c=a("./crypto.js");for(var d in c)b.exports[d]=c[d]},{"./cfb.js":5,"./cipher":10,"./crypto.js":12,"./hash":15,"./pkcs1.js":20,"./public_key":23,"./random.js":26,"./signature.js":27}],20:[function(a,b){function c(a){for(var b,c="";c.length<a;)b=e.getSecureRandomOctet(),0!==b&&(c+=String.fromCharCode(b));return c}var d=[];d[1]=[48,32,48,12,6,8,42,134,72,134,247,13,2,5,5,0,4,16],d[2]=[48,33,48,9,6,5,43,14,3,2,26,5,0,4,20],d[3]=[48,33,48,9,6,5,43,36,3,2,1,5,0,4,20],d[8]=[48,49,48,13,6,9,96,134,72,1,101,3,4,2,1,5,0,4,32],d[9]=[48,65,48,13,6,9,96,134,72,1,101,3,4,2,2,5,0,4,48],d[10]=[48,81,48,13,6,9,96,134,72,1,101,3,4,2,3,5,0,4,64],d[11]=[48,45,48,13,6,9,96,134,72,1,101,3,4,2,4,5,0,4,28];var e=(a("./crypto.js"),a("./random.js")),f=a("../util.js"),g=a("./public_key/jsbn.js"),h=a("./hash");b.exports={eme:{encode:function(a,b){var d=a.length;if(d>b-11)throw new Error("Message too long");var e=c(b-d-3),f=String.fromCharCode(0)+String.fromCharCode(2)+e+String.fromCharCode(0)+a;return f},decode:function(a){0!==a.charCodeAt(0)&&(a=String.fromCharCode(0)+a);for(var b=a.charCodeAt(0),c=a.charCodeAt(1),d=2;0!==a.charCodeAt(d)&&d<a.length;)d++;var e=d-2,f=a.charCodeAt(d++);if(0===b&&2===c&&e>=8&&0===f)return a.substr(d);throw new Error("Decryption error")}},emsa:{encode:function(a,b,c){var e,i=h.digest(a,b);if(i.length!==h.getHashByteLength(a))throw new Error("Invalid hash length");var j="";for(e=0;e<d[a].length;e++)j+=String.fromCharCode(d[a][e]);j+=i;var k=j.length;if(k+11>c)throw new Error("Intended encoded message length too short");var l="";for(e=0;c-k-3>e;e++)l+=String.fromCharCode(255);var m=String.fromCharCode(0)+String.fromCharCode(1)+l+String.fromCharCode(0)+j;return new g(f.hexstrdump(m),16)}}}},{"../util.js":61,"./crypto.js":12,"./hash":15,"./public_key/jsbn.js":24,"./random.js":26}],21:[function(a,b){function c(){function a(a,b,c,h,i,j){for(var k,l,m,n=g.getLeftNBits(f.digest(a,b),i.bitLength()),o=new d(g.hexstrdump(n),16);;)if(k=e.getRandomBigIntegerInRange(d.ONE,i.subtract(d.ONE)),l=c.modPow(k,h).mod(i),m=k.modInverse(i).multiply(o.add(j.multiply(l))).mod(i),0!=l&&0!=m)break;var p=[];return p[0]=l.toMPI(),p[1]=m.toMPI(),p}function b(a){var b=h.prefer_hash_algorithm;switch(Math.round(a.bitLength()/8)){case 20:return 2!=b&&b>11&&10!=b&&8>b?2:b;case 28:return b>11&&8>b?11:b;case 32:return b>10&&8>b?8:b;default:return g.print_debug("DSA select hash algorithm: returning null for an unknown length of q"),null}}function c(a,b,c,e,h,i,j,k){var l=g.getLeftNBits(f.digest(a,e),i.bitLength()),m=new d(g.hexstrdump(l),16);if(d.ZERO.compareTo(b)>0||b.compareTo(i)>0||d.ZERO.compareTo(c)>0||c.compareTo(i)>0)return g.print_debug("invalid DSA Signature"),null;var n=c.modInverse(i),o=m.multiply(n).mod(i),p=b.multiply(n).mod(i);return j.modPow(o,h).multiply(k.modPow(p,h)).mod(h).mod(i)}this.select_hash_algorithm=b,this.sign=a,this.verify=c}var d=a("./jsbn.js"),e=a("../random.js"),f=a("../hash"),g=a("../../util.js"),h=a("../../config");b.exports=c},{"../../config":4,"../../util.js":61,"../hash":15,"../random.js":26,"./jsbn.js":24}],22:[function(a,b){function c(){function a(a,b,c,f){var g=c.subtract(d.TWO),h=e.getRandomBigIntegerInRange(d.ONE,g);h=h.mod(g).add(d.ONE);var i=[];return i[0]=b.modPow(h,c),i[1]=f.modPow(h,c).multiply(a).mod(c),i}function b(a,b,c,d){return f.print_debug("Elgamal Decrypt:\nc1:"+f.hexstrdump(a.toMPI())+"\nc2:"+f.hexstrdump(b.toMPI())+"\np:"+f.hexstrdump(c.toMPI())+"\nx:"+f.hexstrdump(d.toMPI())),a.modPow(d,c).modInverse(c).multiply(b).mod(c)}this.encrypt=a,this.decrypt=b}var d=a("./jsbn.js"),e=a("../random.js"),f=a("../../util.js");b.exports=c},{"../../util.js":61,"../random.js":26,"./jsbn.js":24}],23:[function(a,b){b.exports={rsa:a("./rsa.js"),elgamal:a("./elgamal.js"),dsa:a("./dsa.js")}},{"./dsa.js":21,"./elgamal.js":22,"./rsa.js":25}],24:[function(a,b){function c(a,b,c){null!=a&&("number"==typeof a?this.fromNumber(a,b,c):null==b&&"string"!=typeof a?this.fromString(a,256):this.fromString(a,b))}function d(){return new c(null)}function e(a,b,c,d,e,f){for(;--f>=0;){var g=b*this[a++]+c[d]+e;e=Math.floor(g/67108864),c[d++]=67108863&g}return e}function f(a){return ec.charAt(a)}function g(a,b){var c=fc[a.charCodeAt(b)];return null==c?-1:c}function h(a){for(var b=this.t-1;b>=0;--b)a[b]=this[b];a.t=this.t,a.s=this.s}function i(a){this.t=1,this.s=0>a?-1:0,a>0?this[0]=a:-1>a?this[0]=a+this.DV:this.t=0}function j(a){var b=d();return b.fromInt(a),b}function k(a,b){var d;if(16==b)d=4;else if(8==b)d=3;else if(256==b)d=8;else if(2==b)d=1;else if(32==b)d=5;else{if(4!=b)return void this.fromRadix(a,b);d=2}this.t=0,this.s=0;for(var e=a.length,f=!1,h=0;--e>=0;){var i=8==d?255&a[e]:g(a,e);0>i?"-"==a.charAt(e)&&(f=!0):(f=!1,0==h?this[this.t++]=i:h+d>this.DB?(this[this.t-1]|=(i&(1<<this.DB-h)-1)<<h,this[this.t++]=i>>this.DB-h):this[this.t-1]|=i<<h,h+=d,h>=this.DB&&(h-=this.DB))}8==d&&0!=(128&a[0])&&(this.s=-1,h>0&&(this[this.t-1]|=(1<<this.DB-h)-1<<h)),this.clamp(),f&&c.ZERO.subTo(this,this)}function l(){for(var a=this.s&this.DM;this.t>0&&this[this.t-1]==a;)--this.t}function m(a){if(this.s<0)return"-"+this.negate().toString(a);var b;if(16==a)b=4;else if(8==a)b=3;else if(2==a)b=1;else if(32==a)b=5;else{if(4!=a)return this.toRadix(a);b=2}var c,d=(1<<b)-1,e=!1,g="",h=this.t,i=this.DB-h*this.DB%b;if(h-->0)for(i<this.DB&&(c=this[h]>>i)>0&&(e=!0,g=f(c));h>=0;)b>i?(c=(this[h]&(1<<i)-1)<<b-i,c|=this[--h]>>(i+=this.DB-b)):(c=this[h]>>(i-=b)&d,0>=i&&(i+=this.DB,--h)),c>0&&(e=!0),e&&(g+=f(c));return e?g:"0"}function n(){var a=d();return c.ZERO.subTo(this,a),a}function o(){return this.s<0?this.negate():this}function p(a){var b=this.s-a.s;if(0!=b)return b;var c=this.t;if(b=c-a.t,0!=b)return this.s<0?-b:b;for(;--c>=0;)if(0!=(b=this[c]-a[c]))return b;return 0}function q(a){var b,c=1;return 0!=(b=a>>>16)&&(a=b,c+=16),0!=(b=a>>8)&&(a=b,c+=8),0!=(b=a>>4)&&(a=b,c+=4),0!=(b=a>>2)&&(a=b,c+=2),0!=(b=a>>1)&&(a=b,c+=1),c}function r(){return this.t<=0?0:this.DB*(this.t-1)+q(this[this.t-1]^this.s&this.DM)}function s(a,b){var c;for(c=this.t-1;c>=0;--c)b[c+a]=this[c];for(c=a-1;c>=0;--c)b[c]=0;b.t=this.t+a,b.s=this.s}function t(a,b){for(var c=a;c<this.t;++c)b[c-a]=this[c];b.t=Math.max(this.t-a,0),b.s=this.s}function u(a,b){var c,d=a%this.DB,e=this.DB-d,f=(1<<e)-1,g=Math.floor(a/this.DB),h=this.s<<d&this.DM;for(c=this.t-1;c>=0;--c)b[c+g+1]=this[c]>>e|h,h=(this[c]&f)<<d;for(c=g-1;c>=0;--c)b[c]=0;b[g]=h,b.t=this.t+g+1,b.s=this.s,b.clamp()}function v(a,b){b.s=this.s;var c=Math.floor(a/this.DB);if(c>=this.t)return void(b.t=0);var d=a%this.DB,e=this.DB-d,f=(1<<d)-1;b[0]=this[c]>>d;for(var g=c+1;g<this.t;++g)b[g-c-1]|=(this[g]&f)<<e,b[g-c]=this[g]>>d;d>0&&(b[this.t-c-1]|=(this.s&f)<<e),b.t=this.t-c,b.clamp()}function w(a,b){for(var c=0,d=0,e=Math.min(a.t,this.t);e>c;)d+=this[c]-a[c],b[c++]=d&this.DM,d>>=this.DB;if(a.t<this.t){for(d-=a.s;c<this.t;)d+=this[c],b[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;c<a.t;)d-=a[c],b[c++]=d&this.DM,d>>=this.DB;d-=a.s}b.s=0>d?-1:0,-1>d?b[c++]=this.DV+d:d>0&&(b[c++]=d),b.t=c,b.clamp()}function x(a,b){var d=this.abs(),e=a.abs(),f=d.t;for(b.t=f+e.t;--f>=0;)b[f]=0;for(f=0;f<e.t;++f)b[f+d.t]=d.am(0,e[f],b,f,0,d.t);b.s=0,b.clamp(),this.s!=a.s&&c.ZERO.subTo(b,b)}function y(a){for(var b=this.abs(),c=a.t=2*b.t;--c>=0;)a[c]=0;for(c=0;c<b.t-1;++c){var d=b.am(c,b[c],a,2*c,0,1);(a[c+b.t]+=b.am(c+1,2*b[c],a,2*c+1,d,b.t-c-1))>=b.DV&&(a[c+b.t]-=b.DV,a[c+b.t+1]=1)}a.t>0&&(a[a.t-1]+=b.am(c,b[c],a,2*c,0,1)),a.s=0,a.clamp()}function z(a,b,e){var f=a.abs();if(!(f.t<=0)){var g=this.abs();if(g.t<f.t)return null!=b&&b.fromInt(0),void(null!=e&&this.copyTo(e));null==e&&(e=d());var h=d(),i=this.s,j=a.s,k=this.DB-q(f[f.t-1]);k>0?(f.lShiftTo(k,h),g.lShiftTo(k,e)):(f.copyTo(h),g.copyTo(e));var l=h.t,m=h[l-1];if(0!=m){var n=m*(1<<this.F1)+(l>1?h[l-2]>>this.F2:0),o=this.FV/n,p=(1<<this.F1)/n,r=1<<this.F2,s=e.t,t=s-l,u=null==b?d():b;for(h.dlShiftTo(t,u),e.compareTo(u)>=0&&(e[e.t++]=1,e.subTo(u,e)),c.ONE.dlShiftTo(l,u),u.subTo(h,h);h.t<l;)h[h.t++]=0;for(;--t>=0;){var v=e[--s]==m?this.DM:Math.floor(e[s]*o+(e[s-1]+r)*p);if((e[s]+=h.am(0,v,e,t,0,l))<v)for(h.dlShiftTo(t,u),e.subTo(u,e);e[s]<--v;)e.subTo(u,e)}null!=b&&(e.drShiftTo(l,b),i!=j&&c.ZERO.subTo(b,b)),e.t=l,e.clamp(),k>0&&e.rShiftTo(k,e),0>i&&c.ZERO.subTo(e,e)}}}function A(a){var b=d();return this.abs().divRemTo(a,null,b),this.s<0&&b.compareTo(c.ZERO)>0&&a.subTo(b,b),b}function B(a){this.m=a}function C(a){return a.s<0||a.compareTo(this.m)>=0?a.mod(this.m):a}function D(a){return a}function E(a){a.divRemTo(this.m,null,a)}function F(a,b,c){a.multiplyTo(b,c),this.reduce(c)}function G(a,b){a.squareTo(b),this.reduce(b)}function H(){if(this.t<1)return 0;var a=this[0];if(0==(1&a))return 0;var b=3&a;return b=b*(2-(15&a)*b)&15,b=b*(2-(255&a)*b)&255,b=b*(2-((65535&a)*b&65535))&65535,b=b*(2-a*b%this.DV)%this.DV,b>0?this.DV-b:-b}function I(a){this.m=a,this.mp=a.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<a.DB-15)-1,this.mt2=2*a.t}function J(a){var b=d();return a.abs().dlShiftTo(this.m.t,b),b.divRemTo(this.m,null,b),a.s<0&&b.compareTo(c.ZERO)>0&&this.m.subTo(b,b),b}function K(a){var b=d();return a.copyTo(b),this.reduce(b),b}function L(a){for(;a.t<=this.mt2;)a[a.t++]=0;for(var b=0;b<this.m.t;++b){var c=32767&a[b],d=c*this.mpl+((c*this.mph+(a[b]>>15)*this.mpl&this.um)<<15)&a.DM;for(c=b+this.m.t,a[c]+=this.m.am(0,d,a,b,0,this.m.t);a[c]>=a.DV;)a[c]-=a.DV,a[++c]++}a.clamp(),a.drShiftTo(this.m.t,a),a.compareTo(this.m)>=0&&a.subTo(this.m,a)}function M(a,b){a.squareTo(b),this.reduce(b)}function N(a,b,c){a.multiplyTo(b,c),this.reduce(c)}function O(){return 0==(this.t>0?1&this[0]:this.s)}function P(a,b){if(a>4294967295||1>a)return c.ONE;var e=d(),f=d(),g=b.convert(this),h=q(a)-1;for(g.copyTo(e);--h>=0;)if(b.sqrTo(e,f),(a&1<<h)>0)b.mulTo(f,g,e);else{var i=e;e=f,f=i}return b.revert(e)}function Q(a,b){var c;return c=256>a||b.isEven()?new B(b):new I(b),this.exp(a,c)}function R(){var a=d();return this.copyTo(a),a}function S(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function T(){return 0==this.t?this.s:this[0]<<24>>24}function U(){return 0==this.t?this.s:this[0]<<16>>16}function V(a){return Math.floor(Math.LN2*this.DB/Math.log(a))}function W(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1}function X(a){if(null==a&&(a=10),0==this.signum()||2>a||a>36)return"0";var b=this.chunkSize(a),c=Math.pow(a,b),e=j(c),f=d(),g=d(),h="";for(this.divRemTo(e,f,g);f.signum()>0;)h=(c+g.intValue()).toString(a).substr(1)+h,f.divRemTo(e,f,g);return g.intValue().toString(a)+h}function Y(a,b){this.fromInt(0),null==b&&(b=10);for(var d=this.chunkSize(b),e=Math.pow(b,d),f=!1,h=0,i=0,j=0;j<a.length;++j){var k=g(a,j);0>k?"-"==a.charAt(j)&&0==this.signum()&&(f=!0):(i=b*i+k,++h>=d&&(this.dMultiply(e),this.dAddOffset(i,0),h=0,i=0))}h>0&&(this.dMultiply(Math.pow(b,h)),this.dAddOffset(i,0)),f&&c.ZERO.subTo(this,this)}function Z(a,b,d){if("number"==typeof b)if(2>a)this.fromInt(1);else for(this.fromNumber(a,d),this.testBit(a-1)||this.bitwiseTo(c.ONE.shiftLeft(a-1),fb,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(b);)this.dAddOffset(2,0),this.bitLength()>a&&this.subTo(c.ONE.shiftLeft(a-1),this);else{var e=new Array,f=7&a;e.length=(a>>3)+1,b.nextBytes(e),f>0?e[0]&=(1<<f)-1:e[0]=0,this.fromString(e,256)}}function $(){var a=this.t,b=new Array;b[0]=this.s;var c,d=this.DB-a*this.DB%8,e=0;if(a-->0)for(d<this.DB&&(c=this[a]>>d)!=(this.s&this.DM)>>d&&(b[e++]=c|this.s<<this.DB-d);a>=0;)8>d?(c=(this[a]&(1<<d)-1)<<8-d,c|=this[--a]>>(d+=this.DB-8)):(c=this[a]>>(d-=8)&255,0>=d&&(d+=this.DB,--a)),(e>0||c!=this.s)&&(b[e++]=c);return b}function _(a){return 0==this.compareTo(a)}function ab(a){return this.compareTo(a)<0?this:a}function bb(a){return this.compareTo(a)>0?this:a}function cb(a,b,c){var d,e,f=Math.min(a.t,this.t);for(d=0;f>d;++d)c[d]=b(this[d],a[d]);if(a.t<this.t){for(e=a.s&this.DM,d=f;d<this.t;++d)c[d]=b(this[d],e);c.t=this.t}else{for(e=this.s&this.DM,d=f;d<a.t;++d)c[d]=b(e,a[d]);c.t=a.t}c.s=b(this.s,a.s),c.clamp()}function db(a,b){return a&b}function eb(a){var b=d();return this.bitwiseTo(a,db,b),b}function fb(a,b){return a|b}function gb(a){var b=d();return this.bitwiseTo(a,fb,b),b}function hb(a,b){return a^b}function ib(a){var b=d();return this.bitwiseTo(a,hb,b),b}function jb(a,b){return a&~b}function kb(a){var b=d();return this.bitwiseTo(a,jb,b),b}function lb(){for(var a=d(),b=0;b<this.t;++b)a[b]=this.DM&~this[b];return a.t=this.t,a.s=~this.s,a}function mb(a){var b=d();return 0>a?this.rShiftTo(-a,b):this.lShiftTo(a,b),b}function nb(a){var b=d();return 0>a?this.lShiftTo(-a,b):this.rShiftTo(a,b),b}function ob(a){if(0==a)return-1;var b=0;return 0==(65535&a)&&(a>>=16,b+=16),0==(255&a)&&(a>>=8,b+=8),0==(15&a)&&(a>>=4,b+=4),0==(3&a)&&(a>>=2,b+=2),0==(1&a)&&++b,b}function pb(){for(var a=0;a<this.t;++a)if(0!=this[a])return a*this.DB+ob(this[a]);return this.s<0?this.t*this.DB:-1}function qb(a){for(var b=0;0!=a;)a&=a-1,++b;return b}function rb(){for(var a=0,b=this.s&this.DM,c=0;c<this.t;++c)a+=qb(this[c]^b);return a}function sb(a){var b=Math.floor(a/this.DB);return b>=this.t?0!=this.s:0!=(this[b]&1<<a%this.DB)}function tb(a,b){var d=c.ONE.shiftLeft(a);return this.bitwiseTo(d,b,d),d}function ub(a){return this.changeBit(a,fb)}function vb(a){return this.changeBit(a,jb)}function wb(a){return this.changeBit(a,hb)}function xb(a,b){for(var c=0,d=0,e=Math.min(a.t,this.t);e>c;)d+=this[c]+a[c],b[c++]=d&this.DM,d>>=this.DB;if(a.t<this.t){for(d+=a.s;c<this.t;)d+=this[c],b[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;c<a.t;)d+=a[c],b[c++]=d&this.DM,d>>=this.DB;d+=a.s}b.s=0>d?-1:0,d>0?b[c++]=d:-1>d&&(b[c++]=this.DV+d),b.t=c,b.clamp()}function yb(a){var b=d();return this.addTo(a,b),b}function zb(a){var b=d();return this.subTo(a,b),b}function Ab(a){var b=d();return this.multiplyTo(a,b),b}function Bb(){var a=d();return this.squareTo(a),a}function Cb(a){var b=d();return this.divRemTo(a,b,null),b}function Db(a){var b=d();return this.divRemTo(a,null,b),b}function Eb(a){var b=d(),c=d();return this.divRemTo(a,b,c),new Array(b,c)}function Fb(a){this[this.t]=this.am(0,a-1,this,0,0,this.t),++this.t,this.clamp()}function Gb(a,b){if(0!=a){for(;this.t<=b;)this[this.t++]=0;for(this[b]+=a;this[b]>=this.DV;)this[b]-=this.DV,++b>=this.t&&(this[this.t++]=0),++this[b]}}function Hb(){}function Ib(a){return a}function Jb(a,b,c){a.multiplyTo(b,c)}function Kb(a,b){a.squareTo(b)}function Lb(a){return this.exp(a,new Hb)}function Mb(a,b,c){var d=Math.min(this.t+a.t,b);for(c.s=0,c.t=d;d>0;)c[--d]=0;var e;for(e=c.t-this.t;e>d;++d)c[d+this.t]=this.am(0,a[d],c,d,0,this.t);for(e=Math.min(a.t,b);e>d;++d)this.am(0,a[d],c,d,0,b-d);c.clamp()}function Nb(a,b,c){--b;var d=c.t=this.t+a.t-b;for(c.s=0;--d>=0;)c[d]=0;for(d=Math.max(b-this.t,0);d<a.t;++d)c[this.t+d-b]=this.am(b-d,a[d],c,0,0,this.t+d-b);c.clamp(),c.drShiftTo(1,c)}function Ob(a){this.r2=d(),this.q3=d(),c.ONE.dlShiftTo(2*a.t,this.r2),this.mu=this.r2.divide(a),this.m=a}function Pb(a){if(a.s<0||a.t>2*this.m.t)return a.mod(this.m);if(a.compareTo(this.m)<0)return a;var b=d();return a.copyTo(b),this.reduce(b),b}function Qb(a){return a}function Rb(a){for(a.drShiftTo(this.m.t-1,this.r2),a.t>this.m.t+1&&(a.t=this.m.t+1,a.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);a.compareTo(this.r2)<0;)a.dAddOffset(1,this.m.t+1);for(a.subTo(this.r2,a);a.compareTo(this.m)>=0;)a.subTo(this.m,a)}function Sb(a,b){a.squareTo(b),this.reduce(b)}function Tb(a,b,c){a.multiplyTo(b,c),this.reduce(c)}function Ub(a,b){var c,e,f=a.bitLength(),g=j(1);if(0>=f)return g;c=18>f?1:48>f?3:144>f?4:768>f?5:6,e=8>f?new B(b):b.isEven()?new Ob(b):new I(b);var h=new Array,i=3,k=c-1,l=(1<<c)-1;if(h[1]=e.convert(this),c>1){var m=d();for(e.sqrTo(h[1],m);l>=i;)h[i]=d(),e.mulTo(m,h[i-2],h[i]),i+=2}var n,o,p=a.t-1,r=!0,s=d();for(f=q(a[p])-1;p>=0;){for(f>=k?n=a[p]>>f-k&l:(n=(a[p]&(1<<f+1)-1)<<k-f,p>0&&(n|=a[p-1]>>this.DB+f-k)),i=c;0==(1&n);)n>>=1,--i;if((f-=i)<0&&(f+=this.DB,--p),r)h[n].copyTo(g),r=!1;else{for(;i>1;)e.sqrTo(g,s),e.sqrTo(s,g),i-=2;i>0?e.sqrTo(g,s):(o=g,g=s,s=o),e.mulTo(s,h[n],g)}for(;p>=0&&0==(a[p]&1<<f);)e.sqrTo(g,s),o=g,g=s,s=o,--f<0&&(f=this.DB-1,--p)}return e.revert(g)}function Vb(a){var b=this.s<0?this.negate():this.clone(),c=a.s<0?a.negate():a.clone();if(b.compareTo(c)<0){var d=b;b=c,c=d}var e=b.getLowestSetBit(),f=c.getLowestSetBit();if(0>f)return b;for(f>e&&(f=e),f>0&&(b.rShiftTo(f,b),c.rShiftTo(f,c));b.signum()>0;)(e=b.getLowestSetBit())>0&&b.rShiftTo(e,b),(e=c.getLowestSetBit())>0&&c.rShiftTo(e,c),b.compareTo(c)>=0?(b.subTo(c,b),b.rShiftTo(1,b)):(c.subTo(b,c),c.rShiftTo(1,c));return f>0&&c.lShiftTo(f,c),c}function Wb(a){if(0>=a)return 0;var b=this.DV%a,c=this.s<0?a-1:0;if(this.t>0)if(0==b)c=this[0]%a;else for(var d=this.t-1;d>=0;--d)c=(b*c+this[d])%a;return c}function Xb(a){var b=a.isEven();if(this.isEven()&&b||0==a.signum())return c.ZERO;for(var d=a.clone(),e=this.clone(),f=j(1),g=j(0),h=j(0),i=j(1);0!=d.signum();){for(;d.isEven();)d.rShiftTo(1,d),b?(f.isEven()&&g.isEven()||(f.addTo(this,f),g.subTo(a,g)),f.rShiftTo(1,f)):g.isEven()||g.subTo(a,g),g.rShiftTo(1,g);for(;e.isEven();)e.rShiftTo(1,e),b?(h.isEven()&&i.isEven()||(h.addTo(this,h),i.subTo(a,i)),h.rShiftTo(1,h)):i.isEven()||i.subTo(a,i),i.rShiftTo(1,i);d.compareTo(e)>=0?(d.subTo(e,d),b&&f.subTo(h,f),g.subTo(i,g)):(e.subTo(d,e),b&&h.subTo(f,h),i.subTo(g,i))}return 0!=e.compareTo(c.ONE)?c.ZERO:i.compareTo(a)>=0?i.subtract(a):i.signum()<0?(i.addTo(a,i),i.signum()<0?i.add(a):i):i}function Yb(a){var b,c=this.abs();if(1==c.t&&c[0]<=gc[gc.length-1]){for(b=0;b<gc.length;++b)if(c[0]==gc[b])return!0;return!1}if(c.isEven())return!1;for(b=1;b<gc.length;){for(var d=gc[b],e=b+1;e<gc.length&&hc>d;)d*=gc[e++];for(d=c.modInt(d);e>b;)if(d%gc[b++]==0)return!1}return c.millerRabin(a)}function q(a){var b,c=1;return 0!=(b=a>>>16)&&(a=b,c+=16),0!=(b=a>>8)&&(a=b,c+=8),0!=(b=a>>4)&&(a=b,c+=4),0!=(b=a>>2)&&(a=b,c+=2),0!=(b=a>>1)&&(a=b,c+=1),c}function Zb(){var a=this.toByteArray(),b=8*(a.length-1)+q(a[0]),c="";return c+=String.fromCharCode((65280&b)>>8),c+=String.fromCharCode(255&b),c+=ac.bin2str(a)}function $b(a){var b=this.subtract(c.ONE),e=b.getLowestSetBit();if(0>=e)return!1;var f=b.shiftRight(e);a=a+1>>1,a>gc.length&&(a=gc.length);for(var g,h=d(),i=[],j=0;a>j;++j){for(;g=gc[Math.floor(Math.random()*gc.length)],-1!=i.indexOf(g););i.push(g),h.fromInt(g);var k=h.modPow(f,this);if(0!=k.compareTo(c.ONE)&&0!=k.compareTo(b)){for(var g=1;g++<e&&0!=k.compareTo(b);)if(k=k.modPowInt(2,this),0==k.compareTo(c.ONE))return!1;if(0!=k.compareTo(b))return!1}}return!0}var _b,ac=a("../../util.js");c.prototype.am=e,_b=26,c.prototype.DB=_b,c.prototype.DM=(1<<_b)-1,c.prototype.DV=1<<_b;var bc=52;c.prototype.FV=Math.pow(2,bc),c.prototype.F1=bc-_b,c.prototype.F2=2*_b-bc;var cc,dc,ec="0123456789abcdefghijklmnopqrstuvwxyz",fc=new Array;for(cc="0".charCodeAt(0),dc=0;9>=dc;++dc)fc[cc++]=dc;for(cc="a".charCodeAt(0),dc=10;36>dc;++dc)fc[cc++]=dc;for(cc="A".charCodeAt(0),dc=10;36>dc;++dc)fc[cc++]=dc;B.prototype.convert=C,B.prototype.revert=D,B.prototype.reduce=E,B.prototype.mulTo=F,B.prototype.sqrTo=G,I.prototype.convert=J,I.prototype.revert=K,I.prototype.reduce=L,I.prototype.mulTo=N,I.prototype.sqrTo=M,c.prototype.copyTo=h,c.prototype.fromInt=i,c.prototype.fromString=k,c.prototype.clamp=l,c.prototype.dlShiftTo=s,c.prototype.drShiftTo=t,c.prototype.lShiftTo=u,c.prototype.rShiftTo=v,c.prototype.subTo=w,c.prototype.multiplyTo=x,c.prototype.squareTo=y,c.prototype.divRemTo=z,c.prototype.invDigit=H,c.prototype.isEven=O,c.prototype.exp=P,c.prototype.toString=m,c.prototype.negate=n,c.prototype.abs=o,c.prototype.compareTo=p,c.prototype.bitLength=r,c.prototype.mod=A,c.prototype.modPowInt=Q,c.ZERO=j(0),c.ONE=j(1),c.TWO=j(2),b.exports=c,Hb.prototype.convert=Ib,Hb.prototype.revert=Ib,Hb.prototype.mulTo=Jb,Hb.prototype.sqrTo=Kb,Ob.prototype.convert=Pb,Ob.prototype.revert=Qb,Ob.prototype.reduce=Rb,Ob.prototype.mulTo=Tb,Ob.prototype.sqrTo=Sb;var gc=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],hc=(1<<26)/gc[gc.length-1],c=a("./jsbn.js");c.prototype.chunkSize=V,c.prototype.toRadix=X,c.prototype.fromRadix=Y,c.prototype.fromNumber=Z,c.prototype.bitwiseTo=cb,c.prototype.changeBit=tb,c.prototype.addTo=xb,c.prototype.dMultiply=Fb,c.prototype.dAddOffset=Gb,c.prototype.multiplyLowerTo=Mb,c.prototype.multiplyUpperTo=Nb,c.prototype.modInt=Wb,c.prototype.millerRabin=$b,c.prototype.clone=R,c.prototype.intValue=S,c.prototype.byteValue=T,c.prototype.shortValue=U,c.prototype.signum=W,c.prototype.toByteArray=$,c.prototype.equals=_,c.prototype.min=ab,c.prototype.max=bb,c.prototype.and=eb,c.prototype.or=gb,c.prototype.xor=ib,c.prototype.andNot=kb,c.prototype.not=lb,c.prototype.shiftLeft=mb,c.prototype.shiftRight=nb,c.prototype.getLowestSetBit=pb,c.prototype.bitCount=rb,c.prototype.testBit=sb,c.prototype.setBit=ub,c.prototype.clearBit=vb,c.prototype.flipBit=wb,c.prototype.add=yb,c.prototype.subtract=zb,c.prototype.multiply=Ab,c.prototype.divide=Cb,c.prototype.remainder=Db,c.prototype.divideAndRemainder=Eb,c.prototype.modPow=Ub,c.prototype.modInverse=Xb,c.prototype.pow=Lb,c.prototype.gcd=Vb,c.prototype.isProbablePrime=Yb,c.prototype.toMPI=Zb,c.prototype.square=Bb
},{"../../util.js":61,"./jsbn.js":24}],25:[function(a,b){function c(){function a(a){for(var b=0;b<a.length;b++)a[b]=i.getSecureRandomOctet()}this.nextBytes=a}function d(a,b,c){return l=l.bitLength()===b.bitLength()?l.square().mod(b):i.getRandomBigIntegerInRange(g.TWO,b),k=l.modInverse(b).modPow(c,b),a.multiply(k).mod(b)}function e(a,b){return a.multiply(l).mod(b)}function f(){function a(a,b,c,f,i,k,l){j.rsa_blinding&&(a=d(a,b,c));var m=a.mod(i).modPow(f.mod(i.subtract(g.ONE)),i),n=a.mod(k).modPow(f.mod(k.subtract(g.ONE)),k);h.print_debug("rsa.js decrypt\nxpn:"+h.hexstrdump(m.toMPI())+"\nxqn:"+h.hexstrdump(n.toMPI()));var o=n.subtract(m);return 0===o[0]?(o=m.subtract(n),o=o.multiply(l).mod(k),o=k.subtract(o)):o=o.multiply(l).mod(k),o=o.multiply(i).add(m),j.rsa_blinding&&(o=e(o,b)),o}function b(a,b,c){return a.modPowInt(b,c)}function f(a,b,c){return a.modPow(b,c)}function i(a,b,c){return a.modPowInt(b,c)}function k(){this.n=null,this.e=0,this.ee=null,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.u=null}function l(a,b){var d=new k,e=new c,f=a>>1;for(d.e=parseInt(b,16),d.ee=new g(b,16);;){for(;d.p=new g(a-f,1,e),0!==d.p.subtract(g.ONE).gcd(d.ee).compareTo(g.ONE)||!d.p.isProbablePrime(10););for(;d.q=new g(f,1,e),0!==d.q.subtract(g.ONE).gcd(d.ee).compareTo(g.ONE)||!d.q.isProbablePrime(10););if(d.p.compareTo(d.q)<=0){var h=d.p;d.p=d.q,d.q=h}var i=d.p.subtract(g.ONE),j=d.q.subtract(g.ONE),l=i.multiply(j);if(0===l.gcd(d.ee).compareTo(g.ONE)){d.n=d.p.multiply(d.q),d.d=d.ee.modInverse(l),d.dmp1=d.d.mod(i),d.dmq1=d.d.mod(j),d.u=d.p.modInverse(d.q);break}}return d}this.encrypt=b,this.decrypt=a,this.verify=i,this.sign=f,this.generate=l,this.keyObject=k}var g=a("./jsbn.js"),h=a("../../util.js"),i=a("../random.js"),j=a("../../config"),k=g.ZERO,l=g.ZERO;b.exports=f},{"../../config":4,"../../util.js":61,"../random.js":26,"./jsbn.js":24}],26:[function(a,b){function c(){this.buffer=null,this.size=null}var d=a("../type/mpi.js"),e=null;"undefined"==typeof window&&(e=a("crypto")),b.exports={getRandomBytes:function(a){for(var b="",c=0;a>c;c++)b+=String.fromCharCode(this.getSecureRandomOctet());return b},getSecureRandom:function(a,b){for(var c=this.getSecureRandomUint(),d=(b-a).toString(2).length;(c&Math.pow(2,d)-1)>b-a;)c=this.getSecureRandomUint();return a+Math.abs(c&Math.pow(2,d)-1)},getSecureRandomOctet:function(){var a=new Uint8Array(1);return this.getRandomValues(a),a[0]},getSecureRandomUint:function(){var a=new Uint8Array(4),b=new DataView(a.buffer);return this.getRandomValues(a),b.getUint32(0)},getRandomValues:function(a){if(!(a instanceof Uint8Array))throw new Error("Invalid type: buf not an Uint8Array");if("undefined"!=typeof window&&window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(a);else if("undefined"!=typeof window&&"object"==typeof window.msCrypto&&"function"==typeof window.msCrypto.getRandomValues)window.msCrypto.getRandomValues(a);else if(e){var b=e.randomBytes(a.length);a.set(b)}else{if(!this.randomBuffer.buffer)throw new Error("No secure random number generator available.");this.randomBuffer.get(a)}},getRandomBigInteger:function(a){if(1>a)throw new Error("Illegal parameter value: bits < 1");var b=Math.floor((a+7)/8),c=this.getRandomBytes(b);a%8>0&&(c=String.fromCharCode(Math.pow(2,a%8)-1&c.charCodeAt(0))+c.substring(1));var e=new d;return e.fromBytes(c),e.toBigInteger()},getRandomBigIntegerInRange:function(a,b){if(b.compareTo(a)<=0)throw new Error("Illegal parameter value: max <= min");for(var c=b.subtract(a),d=this.getRandomBigInteger(c.bitLength());d>c;)d=this.getRandomBigInteger(c.bitLength());return a.add(d)},randomBuffer:new c},c.prototype.init=function(a){this.buffer=new Uint8Array(a),this.size=0},c.prototype.set=function(a){if(!this.buffer)throw new Error("RandomBuffer is not initialized");if(!(a instanceof Uint8Array))throw new Error("Invalid type: buf not an Uint8Array");var b=this.buffer.length-this.size;a.length>b&&(a=a.subarray(0,b)),this.buffer.set(a,this.size),this.size+=a.length},c.prototype.get=function(a){if(!this.buffer)throw new Error("RandomBuffer is not initialized");if(!(a instanceof Uint8Array))throw new Error("Invalid type: buf not an Uint8Array");if(this.size<a.length)throw new Error("Random number buffer depleted");for(var b=0;b<a.length;b++)a[b]=this.buffer[--this.size],this.buffer[this.size]=0}},{"../type/mpi.js":59,crypto:!1}],27:[function(a,b){{var c=a("./public_key"),d=a("./pkcs1.js");a("./hash")}b.exports={verify:function(a,b,e,f,g){switch(a){case 1:case 2:case 3:var h=new c.rsa,i=f[0].toBigInteger(),j=f[0].byteLength(),k=f[1].toBigInteger(),l=e[0].toBigInteger(),m=h.verify(l,k,i),n=d.emsa.encode(b,g,j);return 0===m.compareTo(n);case 16:throw new Error("signing with Elgamal is not defined in the OpenPGP standard.");case 17:var o=new c.dsa,p=e[0].toBigInteger(),q=e[1].toBigInteger(),r=f[0].toBigInteger(),s=f[1].toBigInteger(),t=f[2].toBigInteger(),u=f[3].toBigInteger(),l=g,v=o.verify(b,p,q,l,r,s,t,u);return 0===v.compareTo(p);default:throw new Error("Invalid signature algorithm.")}},sign:function(a,b,e,f){var g;switch(b){case 1:case 2:case 3:var h=new c.rsa,i=e[2].toBigInteger(),j=e[0].toBigInteger();return g=d.emsa.encode(a,f,e[0].byteLength()),h.sign(g,i,j).toMPI();case 17:var k=new c.dsa,l=e[0].toBigInteger(),m=e[1].toBigInteger(),n=e[2].toBigInteger(),o=(e[3].toBigInteger(),e[4].toBigInteger());g=f;var p=k.sign(a,g,n,l,m,o);return p[0].toString()+p[1].toString();case 16:throw new Error("Signing with Elgamal is not defined in the OpenPGP standard.");default:throw new Error("Invalid signature algorithm.")}}}},{"./hash":15,"./pkcs1.js":20,"./public_key":23}],28:[function(a,b){function c(a){var b=/^-----BEGIN PGP (MESSAGE, PART \d+\/\d+|MESSAGE, PART \d+|SIGNED MESSAGE|MESSAGE|PUBLIC KEY BLOCK|PRIVATE KEY BLOCK)-----$\n/m,c=a.match(b);if(!c)throw new Error("Unknow ASCII armor type");return c[1].match(/MESSAGE, PART \d+\/\d+/)?n.armor.multipart_section:c[1].match(/MESSAGE, PART \d+/)?n.armor.multipart_last:c[1].match(/SIGNED MESSAGE/)?n.armor.signed:c[1].match(/MESSAGE/)?n.armor.message:c[1].match(/PUBLIC KEY BLOCK/)?n.armor.public_key:c[1].match(/PRIVATE KEY BLOCK/)?n.armor.private_key:void 0}function d(){var a="";return o.show_version&&(a+="Version: "+o.versionstring+"\r\n"),o.show_comment&&(a+="Comment: "+o.commentstring+"\r\n"),a+="\r\n"}function e(a){var b=g(a),c=""+String.fromCharCode(b>>16)+String.fromCharCode(b>>8&255)+String.fromCharCode(255&b);return m.encode(c)}function f(a,b){var c=e(a),d=b;return c[0]==d[0]&&c[1]==d[1]&&c[2]==d[2]&&c[3]==d[3]}function g(a){for(var b=11994318,c=0;a.length-c>16;)b=b<<8^p[255&(b>>16^a.charCodeAt(c))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+1))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+2))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+3))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+4))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+5))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+6))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+7))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+8))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+9))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+10))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+11))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+12))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+13))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+14))],b=b<<8^p[255&(b>>16^a.charCodeAt(c+15))],c+=16;for(var d=c;d<a.length;d++)b=b<<8^p[255&(b>>16^a.charCodeAt(c++))];return 16777215&b}function h(a){var b=/^\s*\n/m,c="",d=a,e=b.exec(a);if(null===e)throw new Error("Mandatory blank line missing between armor headers and armor data");return c=a.slice(0,e.index),d=a.slice(e.index+e[0].length),c=c.split("\n"),c.pop(),{headers:c,body:d}}function i(a){for(var b=0;b<a.length;b++)if(!a[b].match(/^(Version|Comment|MessageID|Hash|Charset): .+$/))throw new Error("Improperly formatted armor header: "+a[b])}function j(a){var b=/^=/m,c=a,d="",e=b.exec(a);return null!==e&&(c=a.slice(0,e.index),d=a.slice(e.index+1)),{body:c,checksum:d}}function k(a){var b=/^-----[^-]+-----$\n/m;a=a.replace(/[\t\r ]+\n/g,"\n");var d,g,k,l=c(a),n=a.split(b),o=1;if(a.search(b)!=n[0].length&&(o=0),2!=l){k=h(n[o]);var p=j(k.body);d={data:m.decode(p.body),headers:k.headers,type:l},g=p.checksum}else{k=h(n[o].replace(/^- /gm,""));var q=h(n[o+1].replace(/^- /gm,""));i(q.headers);var r=j(q.body);d={text:k.body.replace(/\n$/,"").replace(/\n/g,"\r\n"),data:m.decode(r.body),headers:k.headers,type:l},g=r.checksum}if(g=g.substr(0,4),!f(d.data,g))throw new Error("Ascii armor integrity check on message failed: '"+g+"' should be '"+e(d.data)+"'");return i(d.headers),d}function l(a,b,c,f){var g="";switch(a){case n.armor.multipart_section:g+="-----BEGIN PGP MESSAGE, PART "+c+"/"+f+"-----\r\n",g+=d(),g+=m.encode(b),g+="\r\n="+e(b)+"\r\n",g+="-----END PGP MESSAGE, PART "+c+"/"+f+"-----\r\n";break;case n.armor.multipart_last:g+="-----BEGIN PGP MESSAGE, PART "+c+"-----\r\n",g+=d(),g+=m.encode(b),g+="\r\n="+e(b)+"\r\n",g+="-----END PGP MESSAGE, PART "+c+"-----\r\n";break;case n.armor.signed:g+="\r\n-----BEGIN PGP SIGNED MESSAGE-----\r\n",g+="Hash: "+b.hash+"\r\n\r\n",g+=b.text.replace(/\n-/g,"\n- -"),g+="\r\n-----BEGIN PGP SIGNATURE-----\r\n",g+=d(),g+=m.encode(b.data),g+="\r\n="+e(b.data)+"\r\n",g+="-----END PGP SIGNATURE-----\r\n";break;case n.armor.message:g+="-----BEGIN PGP MESSAGE-----\r\n",g+=d(),g+=m.encode(b),g+="\r\n="+e(b)+"\r\n",g+="-----END PGP MESSAGE-----\r\n";break;case n.armor.public_key:g+="-----BEGIN PGP PUBLIC KEY BLOCK-----\r\n",g+=d(),g+=m.encode(b),g+="\r\n="+e(b)+"\r\n",g+="-----END PGP PUBLIC KEY BLOCK-----\r\n\r\n";break;case n.armor.private_key:g+="-----BEGIN PGP PRIVATE KEY BLOCK-----\r\n",g+=d(),g+=m.encode(b),g+="\r\n="+e(b)+"\r\n",g+="-----END PGP PRIVATE KEY BLOCK-----\r\n"}return g}var m=a("./base64.js"),n=a("../enums.js"),o=a("../config"),p=[0,8801531,25875725,17603062,60024545,51751450,35206124,44007191,128024889,120049090,103502900,112007375,70412248,78916387,95990485,88014382,264588937,256049778,240098180,248108927,207005800,215016595,232553829,224014750,140824496,149062475,166599357,157832774,200747345,191980970,176028764,184266919,520933865,529177874,512099556,503334943,480196360,471432179,487973381,496217854,414011600,405478443,422020573,430033190,457094705,465107658,448029500,439496647,281648992,273666971,289622637,298124950,324696449,333198714,315665548,307683447,392699481,401494690,383961940,375687087,352057528,343782467,359738805,368533838,1041867730,1050668841,1066628831,1058355748,1032471859,1024199112,1006669886,1015471301,968368875,960392720,942864358,951368477,975946762,984451313,1000411399,992435708,836562267,828023200,810956886,818967725,844041146,852051777,868605623,860066380,914189410,922427545,938981743,930215316,904825475,896059e3,878993294,887231349,555053627,563297984,547333942,538569677,579245274,570480673,588005847,596249900,649392898,640860153,658384399,666397428,623318499,631331096,615366894,606833685,785398962,777416777,794487231,802989380,759421523,767923880,751374174,743392165,695319947,704115056,687564934,679289981,719477610,711202705,728272487,737067676,2083735460,2092239711,2109313705,2101337682,2141233477,2133257662,2116711496,2125215923,2073216669,2064943718,2048398224,2057199467,2013339772,2022141063,2039215473,2030942602,1945504045,1936737750,1920785440,1929023707,1885728716,1893966647,1911503553,1902736954,1951893524,1959904495,1977441561,1968902626,2009362165,2000822798,1984871416,1992881923,1665111629,1673124534,1656046400,1647513531,1621913772,1613380695,1629922721,1637935450,1688082292,1679317903,1695859321,1704103554,1728967061,1737211246,1720132760,1711368291,1828378820,1820103743,1836060105,1844855090,1869168165,1877963486,1860430632,1852155859,1801148925,1809650950,1792118e3,1784135691,1757986588,1750004711,1765960209,1774462698,1110107254,1118611597,1134571899,1126595968,1102643863,1094667884,1077139354,1085643617,1166763343,1158490548,1140961346,1149762745,1176011694,1184812885,1200772771,1192499800,1307552511,1298785796,1281720306,1289958153,1316768798,1325007077,1341561107,1332794856,1246636998,1254647613,1271201483,1262662192,1239272743,1230733788,1213667370,1221678289,1562785183,1570797924,1554833554,1546300521,1588974462,1580441477,1597965939,1605978760,1518843046,1510078557,1527603627,1535847760,1494504007,1502748348,1486784330,1478020017,1390639894,1382365165,1399434779,1408230112,1366334967,1375129868,1358579962,1350304769,1430452783,1438955220,1422405410,1414423513,1456544974,1448562741,1465633219,1474135352];b.exports={encode:l,decode:k}},{"../config":4,"../enums.js":30,"./base64.js":29}],29:[function(a,b){function c(a){var b,c,d,f="",g=0,h=0,i=a.length;for(d=0;i>d;d++)c=a.charCodeAt(d),0===h?(f+=e.charAt(c>>2&63),b=(3&c)<<4):1==h?(f+=e.charAt(b|c>>4&15),b=(15&c)<<2):2==h&&(f+=e.charAt(b|c>>6&3),g+=1,g%60===0&&(f+="\n"),f+=e.charAt(63&c)),g+=1,g%60===0&&(f+="\n"),h+=1,3==h&&(h=0);return h>0&&(f+=e.charAt(b),g+=1,g%60===0&&(f+="\n"),f+="=",g+=1),1==h&&(g%60===0&&(f+="\n"),f+="="),f}function d(a){var b,c,d="",f=0,g=0,h=a.length;for(c=0;h>c;c++)b=e.indexOf(a.charAt(c)),b>=0&&(f&&(d+=String.fromCharCode(g|b>>6-f&255)),f=f+2&7,g=b<<f&255);return d}var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";b.exports={encode:c,decode:d}},{}],30:[function(a,b){b.exports={s2k:{simple:0,salted:1,iterated:3,gnu:101},publicKey:{rsa_encrypt_sign:1,rsa_encrypt:2,rsa_sign:3,elgamal:16,dsa:17},symmetric:{plaintext:0,idea:1,tripledes:2,cast5:3,blowfish:4,aes128:7,aes192:8,aes256:9,twofish:10},compression:{uncompressed:0,zip:1,zlib:2,bzip2:3},hash:{md5:1,sha1:2,ripemd:3,sha256:8,sha384:9,sha512:10,sha224:11},packet:{publicKeyEncryptedSessionKey:1,signature:2,symEncryptedSessionKey:3,onePassSignature:4,secretKey:5,publicKey:6,secretSubkey:7,compressed:8,symmetricallyEncrypted:9,marker:10,literal:11,trust:12,userid:13,publicSubkey:14,userAttribute:17,symEncryptedIntegrityProtected:18,modificationDetectionCode:19},literal:{binary:"b".charCodeAt(),text:"t".charCodeAt(),utf8:"u".charCodeAt()},signature:{binary:0,text:1,standalone:2,cert_generic:16,cert_persona:17,cert_casual:18,cert_positive:19,cert_revocation:48,subkey_binding:24,key_binding:25,key:31,key_revocation:32,subkey_revocation:40,timestamp:64,third_party:80},signatureSubpacket:{signature_creation_time:2,signature_expiration_time:3,exportable_certification:4,trust_signature:5,regular_expression:6,revocable:7,key_expiration_time:9,placeholder_backwards_compatibility:10,preferred_symmetric_algorithms:11,revocation_key:12,issuer:16,notation_data:20,preferred_hash_algorithms:21,preferred_compression_algorithms:22,key_server_preferences:23,preferred_key_server:24,primary_user_id:25,policy_uri:26,key_flags:27,signers_user_id:28,reason_for_revocation:29,features:30,signature_target:31,embedded_signature:32},keyFlags:{certify_keys:1,sign_data:2,encrypt_communication:4,encrypt_storage:8,split_private_key:16,authentication:32,shared_private_key:128},keyStatus:{invalid:0,expired:1,revoked:2,valid:3,no_self_cert:4},armor:{multipart_section:0,multipart_last:1,signed:2,message:3,public_key:4,private_key:5},write:function(a,b){if("number"==typeof b&&(b=this.read(a,b)),void 0!==a[b])return a[b];throw new Error("Invalid enum value.")},read:function(a,b){for(var c in a)if(a[c]==b)return c;throw new Error("Invalid enum value.")}}},{}],31:[function(a,b){b.exports=a("./openpgp.js"),b.exports.key=a("./key.js"),b.exports.message=a("./message.js"),b.exports.cleartext=a("./cleartext.js"),b.exports.util=a("./util.js"),b.exports.packet=a("./packet"),b.exports.MPI=a("./type/mpi.js"),b.exports.S2K=a("./type/s2k.js"),b.exports.Keyid=a("./type/keyid.js"),b.exports.armor=a("./encoding/armor.js"),b.exports.enums=a("./enums.js"),b.exports.config=a("./config/config.js"),b.exports.crypto=a("./crypto"),b.exports.Keyring=a("./keyring"),b.exports.AsyncProxy=a("./worker/async_proxy.js")},{"./cleartext.js":1,"./config/config.js":3,"./crypto":19,"./encoding/armor.js":28,"./enums.js":30,"./key.js":32,"./keyring":33,"./message.js":36,"./openpgp.js":37,"./packet":40,"./type/keyid.js":58,"./type/mpi.js":59,"./type/s2k.js":60,"./util.js":61,"./worker/async_proxy.js":62}],32:[function(a,b,c){function d(a){if(!(this instanceof d))return new d(a);if(this.primaryKey=null,this.revocationSignature=null,this.directSignatures=null,this.users=null,this.subKeys=null,this.packetlist2structure(a),!this.primaryKey||!this.users)throw new Error("Invalid key: need at least key and user ID packet")}function e(a,b){for(var c=0;c<a.length;c++)for(var d=a[c].getKeyId(),e=0;e<b.length;e++)if(d.equals(b[e]))return a[c];return null}function f(a,b){return a.algorithm!==p.read(p.publicKey,p.publicKey.dsa)&&a.algorithm!==p.read(p.publicKey,p.publicKey.rsa_sign)&&(!b.keyFlags||0!==(b.keyFlags[0]&p.keyFlags.encrypt_communication)||0!==(b.keyFlags[0]&p.keyFlags.encrypt_storage))}function g(a,b){return!(a.algorithm!=p.read(p.publicKey,p.publicKey.dsa)&&a.algorithm!=p.read(p.publicKey,p.publicKey.rsa_sign)&&a.algorithm!=p.read(p.publicKey,p.publicKey.rsa_encrypt_sign)||b.keyFlags&&0===(b.keyFlags[0]&p.keyFlags.sign_data))}function h(a,b){return 3==a.version&&0!==a.expirationTimeV3?new Date(a.created.getTime()+24*a.expirationTimeV3*3600*1e3):4==a.version&&b.keyNeverExpires===!1?new Date(a.created.getTime()+1e3*b.keyExpirationTime):null}function i(a,b,c,d){a=a[c],a&&(b[c]?a.forEach(function(a){a.isExpired()||d&&!d(a)||b[c].some(function(b){return b.signature===a.signature})||b[c].push(a)}):b[c]=a)}function j(a){return this instanceof j?(this.userId=a.tag==p.packet.userid?a:null,this.userAttribute=a.tag==p.packet.userAttribute?a:null,this.selfCertifications=null,this.otherCertifications=null,void(this.revocationCertifications=null)):new j(a)}function k(a){return this instanceof k?(this.subKey=a,this.bindingSignature=null,void(this.revocationSignature=null)):new k(a)}function l(a){var b={};b.keys=[];try{var c=q.decode(a);if(c.type!=p.armor.public_key&&c.type!=p.armor.private_key)throw new Error("Armored text not of type key");var e=new o.List;e.read(c.data);var f=e.indexOfTag(p.packet.publicKey,p.packet.secretKey);if(0===f.length)throw new Error("No key packet found in armored text");for(var g=0;g<f.length;g++){var h=e.slice(f[g],f[g+1]);try{var i=new d(h);b.keys.push(i)}catch(j){b.err=b.err||[],b.err.push(j)}}}catch(j){b.err=b.err||[],b.err.push(j)}return b}function m(a){if(a.keyType=a.keyType||p.publicKey.rsa_encrypt_sign,a.keyType!==p.publicKey.rsa_encrypt_sign)throw new Error("Only RSA Encrypt or Sign supported");if(!a.passphrase)throw new Error("Parameter options.passphrase required");var b=new o.List,c=new o.SecretKey;c.algorithm=p.read(p.publicKey,a.keyType),c.generate(a.numBits),c.encrypt(a.passphrase);var e=new o.Userid;e.read(a.userId);var f={};f.userid=e,f.key=c;var g=new o.Signature;g.signatureType=p.signature.cert_generic,g.publicKeyAlgorithm=a.keyType,g.hashAlgorithm=r.prefer_hash_algorithm,g.keyFlags=[p.keyFlags.certify_keys|p.keyFlags.sign_data],g.preferredSymmetricAlgorithms=[],g.preferredSymmetricAlgorithms.push(p.symmetric.aes256),g.preferredSymmetricAlgorithms.push(p.symmetric.aes192),g.preferredSymmetricAlgorithms.push(p.symmetric.aes128),g.preferredSymmetricAlgorithms.push(p.symmetric.cast5),g.preferredSymmetricAlgorithms.push(p.symmetric.tripledes),g.preferredHashAlgorithms=[],g.preferredHashAlgorithms.push(p.hash.sha256),g.preferredHashAlgorithms.push(p.hash.sha1),g.preferredHashAlgorithms.push(p.hash.sha512),g.preferredCompressionAlgorithms=[],g.preferredCompressionAlgorithms.push(p.compression.zlib),g.preferredCompressionAlgorithms.push(p.compression.zip),r.integrity_protect&&(g.features=[],g.features.push(1)),g.sign(c,f);var h=new o.SecretSubkey;h.algorithm=p.read(p.publicKey,a.keyType),h.generate(a.numBits),h.encrypt(a.passphrase),f={},f.key=c,f.bind=h;var i=new o.Signature;return i.signatureType=p.signature.subkey_binding,i.publicKeyAlgorithm=a.keyType,i.hashAlgorithm=r.prefer_hash_algorithm,i.keyFlags=[p.keyFlags.encrypt_communication|p.keyFlags.encrypt_storage],i.sign(c,f),b.push(c),b.push(e),b.push(g),b.push(h),b.push(i),a.unlocked||(c.clearPrivateMPIs(),h.clearPrivateMPIs()),new d(b)}function n(a){for(var b={},c=0;c<a.length;c++){var d=a[c].getPrimaryUser();if(!d||!d.selfCertificate.preferredSymmetricAlgorithms)return r.encryption_cipher;d.selfCertificate.preferredSymmetricAlgorithms.forEach(function(a,c){var d=b[a]||(b[a]={prio:0,count:0,algo:a});d.prio+=64>>c,d.count++})}var e={prio:0,algo:r.encryption_cipher};for(var f in b)try{f!==p.symmetric.plaintext&&f!==p.symmetric.idea&&p.read(p.symmetric,f)&&b[f].count===a.length&&b[f].prio>e.prio&&(e=b[f])}catch(g){}return e.algo}var o=a("./packet"),p=a("./enums.js"),q=a("./encoding/armor.js"),r=a("./config"),s=a("./util");d.prototype.packetlist2structure=function(a){for(var b,c,d,e=0;e<a.length;e++)switch(a[e].tag){case p.packet.publicKey:case p.packet.secretKey:this.primaryKey=a[e],c=this.primaryKey.getKeyId();break;case p.packet.userid:case p.packet.userAttribute:b=new j(a[e]),this.users||(this.users=[]),this.users.push(b);break;case p.packet.publicSubkey:case p.packet.secretSubkey:b=null,this.subKeys||(this.subKeys=[]),d=new k(a[e]),this.subKeys.push(d);break;case p.packet.signature:switch(a[e].signatureType){case p.signature.cert_generic:case p.signature.cert_persona:case p.signature.cert_casual:case p.signature.cert_positive:if(!b){s.print_debug("Dropping certification signatures without preceding user packet");continue}a[e].issuerKeyId.equals(c)?(b.selfCertifications||(b.selfCertifications=[]),b.selfCertifications.push(a[e])):(b.otherCertifications||(b.otherCertifications=[]),b.otherCertifications.push(a[e]));break;case p.signature.cert_revocation:b?(b.revocationCertifications||(b.revocationCertifications=[]),b.revocationCertifications.push(a[e])):(this.directSignatures||(this.directSignatures=[]),this.directSignatures.push(a[e]));break;case p.signature.key:this.directSignatures||(this.directSignatures=[]),this.directSignatures.push(a[e]);break;case p.signature.subkey_binding:if(!d){s.print_debug("Dropping subkey binding signature without preceding subkey packet");continue}d.bindingSignature=a[e];break;case p.signature.key_revocation:this.revocationSignature=a[e];break;case p.signature.subkey_revocation:if(!d){s.print_debug("Dropping subkey revocation signature without preceding subkey packet");continue}d.revocationSignature=a[e]}}},d.prototype.toPacketlist=function(){var a=new o.List;a.push(this.primaryKey),a.push(this.revocationSignature),a.concat(this.directSignatures);var b;for(b=0;b<this.users.length;b++)a.concat(this.users[b].toPacketlist());if(this.subKeys)for(b=0;b<this.subKeys.length;b++)a.concat(this.subKeys[b].toPacketlist());return a},d.prototype.getKeyPacket=function(){return this.primaryKey},d.prototype.getSubkeyPackets=function(){var a=[];if(this.subKeys)for(var b=0;b<this.subKeys.length;b++)a.push(this.subKeys[b].subKey);return a},d.prototype.getAllKeyPackets=function(){return[this.getKeyPacket()].concat(this.getSubkeyPackets())},d.prototype.getKeyIds=function(){for(var a=[],b=this.getAllKeyPackets(),c=0;c<b.length;c++)a.push(b[c].getKeyId());return a},d.prototype.getPublicKeyPacket=function(a){return this.primaryKey.tag==p.packet.publicKey?e(this.getAllKeyPackets(),a):null},d.prototype.getPrivateKeyPacket=function(a){return this.primaryKey.tag==p.packet.secretKey?e(this.getAllKeyPackets(),a):null},d.prototype.getUserIds=function(){for(var a=[],b=0;b<this.users.length;b++)this.users[b].userId&&a.push(this.users[b].userId.write());return a},d.prototype.isPublic=function(){return this.primaryKey.tag==p.packet.publicKey},d.prototype.isPrivate=function(){return this.primaryKey.tag==p.packet.secretKey},d.prototype.toPublic=function(){for(var a,b=new o.List,c=this.toPacketlist(),e=0;e<c.length;e++)switch(c[e].tag){case p.packet.secretKey:a=c[e].writePublicKey();var f=new o.PublicKey;f.read(a),b.push(f);break;case p.packet.secretSubkey:a=c[e].writePublicKey();var g=new o.PublicSubkey;g.read(a),b.push(g);break;default:b.push(c[e])}return new d(b)},d.prototype.armor=function(){var a=this.isPublic()?p.armor.public_key:p.armor.private_key;return q.encode(a,this.toPacketlist().write())},d.prototype.getSigningKeyPacket=function(){if(this.isPublic())throw new Error("Need private key for signing");var a=this.getPrimaryUser();if(a&&g(this.primaryKey,a.selfCertificate))return this.primaryKey;if(this.subKeys)for(var b=0;b<this.subKeys.length;b++)if(this.subKeys[b].isValidSigningKey(this.primaryKey))return this.subKeys[b].subKey;return null},d.prototype.getPreferredHashAlgorithm=function(){var a=this.getPrimaryUser();return a&&a.selfCertificate.preferredHashAlgorithms?a.selfCertificate.preferredHashAlgorithms[0]:r.prefer_hash_algorithm},d.prototype.getEncryptionKeyPacket=function(){if(this.subKeys)for(var a=0;a<this.subKeys.length;a++)if(this.subKeys[a].isValidEncryptionKey(this.primaryKey))return this.subKeys[a].subKey;var b=this.getPrimaryUser();return b&&f(this.primaryKey,b.selfCertificate)?this.primaryKey:null},d.prototype.decrypt=function(a){if(!this.isPrivate())throw new Error("Nothing to decrypt in a public key");for(var b=this.getAllKeyPackets(),c=0;c<b.length;c++){var d=b[c].decrypt(a);if(!d)return!1}return!0},d.prototype.decryptKeyPacket=function(a,b){if(!this.isPrivate())throw new Error("Nothing to decrypt in a public key");for(var c=this.getAllKeyPackets(),d=0;d<c.length;d++)for(var e=c[d].getKeyId(),f=0;f<a.length;f++)if(e.equals(a[f])){var g=c[d].decrypt(b);if(!g)return!1}return!0},d.prototype.verifyPrimaryKey=function(){if(this.revocationSignature&&!this.revocationSignature.isExpired()&&(this.revocationSignature.verified||this.revocationSignature.verify(this.primaryKey,{key:this.primaryKey})))return p.keyStatus.revoked;if(3==this.primaryKey.version&&0!==this.primaryKey.expirationTimeV3&&Date.now()>this.primaryKey.created.getTime()+24*this.primaryKey.expirationTimeV3*3600*1e3)return p.keyStatus.expired;for(var a=!1,b=0;b<this.users.length;b++)this.users[b].userId&&this.users[b].selfCertifications&&(a=!0);if(!a)return p.keyStatus.no_self_cert;var c=this.getPrimaryUser();return c?4==this.primaryKey.version&&c.selfCertificate.keyNeverExpires===!1&&Date.now()>this.primaryKey.created.getTime()+1e3*c.selfCertificate.keyExpirationTime?p.keyStatus.expired:p.keyStatus.valid:p.keyStatus.invalid},d.prototype.getExpirationTime=function(){if(3==this.primaryKey.version)return h(this.primaryKey);if(4==this.primaryKey.version){var a=this.getPrimaryUser();return a?h(this.primaryKey,a.selfCertificate):null}},d.prototype.getPrimaryUser=function(){for(var a=[],b=0;b<this.users.length;b++)if(this.users[b].userId&&this.users[b].selfCertifications)for(var c=0;c<this.users[b].selfCertifications.length;c++)a.push({user:this.users[b],selfCertificate:this.users[b].selfCertifications[c]});a=a.sort(function(a,b){return a.isPrimaryUserID>b.isPrimaryUserID?-1:a.isPrimaryUserID<b.isPrimaryUserID?1:a.created>b.created?-1:a.created<b.created?1:0});for(var b=0;b<a.length;b++)if(a[b].user.isValidSelfCertificate(this.primaryKey,a[b].selfCertificate))return a[b];return null},d.prototype.update=function(a){var b=this;if(a.verifyPrimaryKey()!==p.keyStatus.invalid){if(this.primaryKey.getFingerprint()!==a.primaryKey.getFingerprint())throw new Error("Key update method: fingerprints of keys not equal");if(this.isPublic()&&a.isPrivate()){var c=(this.subKeys&&this.subKeys.length)===(a.subKeys&&a.subKeys.length)&&(!this.subKeys||this.subKeys.every(function(b){return a.subKeys.some(function(a){return b.subKey.getFingerprint()===a.subKey.getFingerprint()})}));if(!c)throw new Error("Cannot update public key with private key if subkey mismatch");this.primaryKey=a.primaryKey}this.revocationSignature||!a.revocationSignature||a.revocationSignature.isExpired()||!a.revocationSignature.verified&&!a.revocationSignature.verify(a.primaryKey,{key:a.primaryKey})||(this.revocationSignature=a.revocationSignature),i(a,this,"directSignatures"),a.users.forEach(function(a){for(var c=!1,d=0;d<b.users.length;d++)if(a.userId&&a.userId.userid===b.users[d].userId.userid||a.userAttribute&&a.userAttribute.equals(b.users[d].userAttribute)){b.users[d].update(a,b.primaryKey),c=!0;break}c||b.users.push(a)}),a.subKeys&&a.subKeys.forEach(function(a){for(var c=!1,d=0;d<b.subKeys.length;d++)if(a.subKey.getFingerprint()===b.subKeys[d].subKey.getFingerprint()){b.subKeys[d].update(a,b.primaryKey),c=!0;break}c||b.subKeys.push(a)})}},d.prototype.revoke=function(){},j.prototype.toPacketlist=function(){var a=new o.List;return a.push(this.userId||this.userAttribute),a.concat(this.revocationCertifications),a.concat(this.selfCertifications),a.concat(this.otherCertifications),a},j.prototype.isRevoked=function(a,b){if(this.revocationCertifications){var c=this;return this.revocationCertifications.some(function(d){return d.issuerKeyId.equals(a.issuerKeyId)&&!d.isExpired()&&(d.verified||d.verify(b,{userid:c.userId||c.userAttribute,key:b}))})}return!1},j.prototype.getValidSelfCertificate=function(a){if(!this.selfCertifications)return null;for(var b=this.selfCertifications.sort(function(a,b){return a=a.created,b=b.created,a>b?-1:b>a?1:0}),c=0;c<b.length;c++)if(this.isValidSelfCertificate(a,b[c]))return b[c];return null},j.prototype.isValidSelfCertificate=function(a,b){return this.isRevoked(b,a)?!1:b.isExpired()||!b.verified&&!b.verify(a,{userid:this.userId||this.userAttribute,key:a})?!1:!0},j.prototype.verify=function(a){if(!this.selfCertifications)return p.keyStatus.no_self_cert;for(var b,c=0;c<this.selfCertifications.length;c++)if(this.isRevoked(this.selfCertifications[c],a))b=p.keyStatus.revoked;else if(this.selfCertifications[c].verified||this.selfCertifications[c].verify(a,{userid:this.userId||this.userAttribute,key:a})){if(!this.selfCertifications[c].isExpired()){b=p.keyStatus.valid;break}b=p.keyStatus.expired}else b=p.keyStatus.invalid;return b},j.prototype.update=function(a,b){var c=this;i(a,this,"selfCertifications",function(a){return a.verified||a.verify(b,{userid:c.userId||c.userAttribute,key:b})}),i(a,this,"otherCertifications"),i(a,this,"revocationCertifications")},k.prototype.toPacketlist=function(){var a=new o.List;return a.push(this.subKey),a.push(this.revocationSignature),a.push(this.bindingSignature),a},k.prototype.isValidEncryptionKey=function(a){return this.verify(a)==p.keyStatus.valid&&f(this.subKey,this.bindingSignature)},k.prototype.isValidSigningKey=function(a){return this.verify(a)==p.keyStatus.valid&&g(this.subKey,this.bindingSignature)},k.prototype.verify=function(a){return this.revocationSignature&&!this.revocationSignature.isExpired()&&(this.revocationSignature.verified||this.revocationSignature.verify(a,{key:a,bind:this.subKey}))?p.keyStatus.revoked:3==this.subKey.version&&0!==this.subKey.expirationTimeV3&&Date.now()>this.subKey.created.getTime()+24*this.subKey.expirationTimeV3*3600*1e3?p.keyStatus.expired:this.bindingSignature?this.bindingSignature.isExpired()?p.keyStatus.expired:this.bindingSignature.verified||this.bindingSignature.verify(a,{key:a,bind:this.subKey})?4==this.subKey.version&&this.bindingSignature.keyNeverExpires===!1&&Date.now()>this.subKey.created.getTime()+1e3*this.bindingSignature.keyExpirationTime?p.keyStatus.expired:p.keyStatus.valid:p.keyStatus.invalid:p.keyStatus.invalid},k.prototype.getExpirationTime=function(){return h(this.subKey,this.bindingSignature)},k.prototype.update=function(a,b){if(a.verify(b)!==p.keyStatus.invalid){if(this.subKey.getFingerprint()!==a.subKey.getFingerprint())throw new Error("SubKey update method: fingerprints of subkeys not equal");this.subKey.tag===p.packet.publicSubkey&&a.subKey.tag===p.packet.secretSubkey&&(this.subKey=a.subKey),!this.bindingSignature&&a.bindingSignature&&(a.bindingSignature.verified||a.bindingSignature.verify(b,{key:b,bind:this.subKey}))&&(this.bindingSignature=a.bindingSignature),this.revocationSignature||!a.revocationSignature||a.revocationSignature.isExpired()||!a.revocationSignature.verified&&!a.revocationSignature.verify(b,{key:b,bind:this.subKey})||(this.revocationSignature=a.revocationSignature)}},c.Key=d,c.readArmored=l,c.generate=m,c.getPreferredSymAlgo=n},{"./config":4,"./encoding/armor.js":28,"./enums.js":30,"./packet":40,"./util":61}],33:[function(a,b){b.exports=a("./keyring.js"),b.exports.localstore=a("./localstore.js")
},{"./keyring.js":34,"./localstore.js":35}],34:[function(a,b){function c(b){this.storeHandler=b||new(a("./localstore.js")),this.publicKeys=new d(this.storeHandler.loadPublic()),this.privateKeys=new d(this.storeHandler.loadPrivate())}function d(a){this.keys=a}function e(a,b){a=a.toLowerCase();for(var c=b.getUserIds(),d=0;d<c.length;d++)if(keyEmail=c[d].split("<")[1].split(">")[0].trim().toLowerCase(),keyEmail==a)return!0;return!1}function f(a,b){return 16===a.length?a===b.getKeyId().toHex():a===b.getFingerprint()}{var g=(a("../enums.js"),a("../key.js"));a("../util.js")}b.exports=c,c.prototype.store=function(){this.storeHandler.storePublic(this.publicKeys.keys),this.storeHandler.storePrivate(this.privateKeys.keys)},c.prototype.clear=function(){this.publicKeys.keys=[],this.privateKeys.keys=[]},c.prototype.getKeysForId=function(a,b){var c=[];return c=c.concat(this.publicKeys.getForId(a,b)||[]),c=c.concat(this.privateKeys.getForId(a,b)||[]),c.length?c:null},c.prototype.removeKeysForId=function(a){var b=[];return b=b.concat(this.publicKeys.removeForId(a)||[]),b=b.concat(this.privateKeys.removeForId(a)||[]),b.length?b:null},c.prototype.getAllKeys=function(){return this.publicKeys.keys.concat(this.privateKeys.keys)},d.prototype.getForAddress=function(a){for(var b=[],c=0;c<this.keys.length;c++)e(a,this.keys[c])&&b.push(this.keys[c]);return b},d.prototype.getForId=function(a,b){for(var c=0;c<this.keys.length;c++){if(f(a,this.keys[c].primaryKey))return this.keys[c];if(b&&this.keys[c].subKeys)for(var d=0;d<this.keys[c].subKeys.length;d++)if(f(a,this.keys[c].subKeys[d].subKey))return this.keys[c]}return null},d.prototype.importKey=function(a){var b=g.readArmored(a),c=this;return b.keys.forEach(function(a){var b=a.primaryKey.getKeyId().toHex(),d=c.getForId(b);d?d.update(a):c.push(a)}),b.err?b.err:null},d.prototype.push=function(a){return this.keys.push(a)},d.prototype.removeForId=function(a){for(var b=0;b<this.keys.length;b++)if(f(a,this.keys[b].primaryKey))return this.keys.splice(b,1)[0];return null}},{"../enums.js":30,"../key.js":32,"../util.js":61,"./localstore.js":35}],35:[function(a,b){function c(b){b=b||"openpgp-",this.publicKeysItem=b+this.publicKeysItem,this.privateKeysItem=b+this.privateKeysItem,this.storage="undefined"!=typeof window&&window.localStorage?window.localStorage:new(a("node-localstorage").LocalStorage)(f.node_store)}function d(a,b){var c=JSON.parse(a.getItem(b)),d=[];if(null!==c&&0!==c.length)for(var e,f=0;f<c.length;f++)e=g.readArmored(c[f]),e.err?h.print_debug("Error reading armored key from keyring index: "+f):d.push(e.keys[0]);return d}function e(a,b,c){for(var d=[],e=0;e<c.length;e++)d.push(c[e].armor());a.setItem(b,JSON.stringify(d))}b.exports=c;var f=a("../config"),g=a("../key.js"),h=a("../util.js");c.prototype.publicKeysItem="public-keys",c.prototype.privateKeysItem="private-keys",c.prototype.loadPublic=function(){return d(this.storage,this.publicKeysItem)},c.prototype.loadPrivate=function(){return d(this.storage,this.privateKeysItem)},c.prototype.storePublic=function(a){e(this.storage,this.publicKeysItem,a)},c.prototype.storePrivate=function(a){e(this.storage,this.privateKeysItem,a)}},{"../config":4,"../key.js":32,"../util.js":61,"node-localstorage":!1}],36:[function(a,b,c){function d(a){return this instanceof d?void(this.packets=a||new h.List):new d(a)}function e(a){var b=j.decode(a).data,c=new h.List;c.read(b);var e=new d(c);return e}function f(a){var b=new h.Literal;b.setText(a);var c=new h.List;c.push(b);var e=new d(c);return e}function g(a){var b=new h.Literal;b.setBytes(a,i.read(i.literal,i.literal.binary));var c=new h.List;c.push(b);var e=new d(c);return e}var h=a("./packet"),i=a("./enums.js"),j=a("./encoding/armor.js"),k=a("./config"),l=a("./crypto"),m=a("./key.js");d.prototype.getEncryptionKeyIds=function(){var a=[],b=this.packets.filterByTag(i.packet.publicKeyEncryptedSessionKey);return b.forEach(function(b){a.push(b.publicKeyId)}),a},d.prototype.getSigningKeyIds=function(){var a=[],b=this.unwrapCompressed(),c=b.packets.filterByTag(i.packet.onePassSignature);if(c.forEach(function(b){a.push(b.signingKeyId)}),!a.length){var d=b.packets.filterByTag(i.packet.signature);d.forEach(function(b){a.push(b.issuerKeyId)})}return a},d.prototype.decrypt=function(a){var b=this.getEncryptionKeyIds();if(!b.length)return this;var c=a.getPrivateKeyPacket(b);if(!c.isDecrypted)throw new Error("Private key is not decrypted.");for(var e,f=this.packets.filterByTag(i.packet.publicKeyEncryptedSessionKey),g=0;g<f.length;g++)if(f[g].publicKeyId.equals(c.getKeyId())){e=f[g],e.decrypt(c);break}if(e){var j=this.packets.filterByTag(i.packet.symmetricallyEncrypted,i.packet.symEncryptedIntegrityProtected);if(0!==j.length){var k=j[0];k.decrypt(e.sessionKeyAlgorithm,e.sessionKey);var l=new d(k.packets);return k.packets=new h.List,l}}},d.prototype.getLiteralData=function(){var a=this.packets.findPacket(i.packet.literal);return a&&a.data||null},d.prototype.getText=function(){var a=this.packets.findPacket(i.packet.literal);return a?a.getText():null},d.prototype.encrypt=function(a){var b=new h.List,c=m.getPreferredSymAlgo(a),e=l.generateSessionKey(i.read(i.symmetric,c));a.forEach(function(a){var d=a.getEncryptionKeyPacket();if(!d)throw new Error("Could not find valid key packet for encryption in key "+a.primaryKey.getKeyId().toHex());var f=new h.PublicKeyEncryptedSessionKey;f.publicKeyId=d.getKeyId(),f.publicKeyAlgorithm=d.algorithm,f.sessionKey=e,f.sessionKeyAlgorithm=i.read(i.symmetric,c),f.encrypt(d),b.push(f)});var f;return f=k.integrity_protect?new h.SymEncryptedIntegrityProtected:new h.SymmetricallyEncrypted,f.packets=this.packets,f.encrypt(i.read(i.symmetric,c),e),b.push(f),f.packets=new h.List,new d(b)},d.prototype.sign=function(a){var b=new h.List,c=this.packets.findPacket(i.packet.literal);if(!c)throw new Error("No literal data packet to sign.");var e,f=i.write(i.literal,c.format),g=f==i.literal.binary?i.signature.binary:i.signature.text;for(e=0;e<a.length;e++){var j=new h.OnePassSignature;j.type=g,j.hashAlgorithm=k.prefer_hash_algorithm;var l=a[e].getSigningKeyPacket();if(!l)throw new Error("Could not find valid key packet for signing in key "+a[e].primaryKey.getKeyId().toHex());j.publicKeyAlgorithm=l.algorithm,j.signingKeyId=l.getKeyId(),b.push(j)}for(b.push(c),e=a.length-1;e>=0;e--){var m=new h.Signature;if(m.signatureType=g,m.hashAlgorithm=k.prefer_hash_algorithm,m.publicKeyAlgorithm=l.algorithm,!l.isDecrypted)throw new Error("Private key is not decrypted.");m.sign(l,c),b.push(m)}return new d(b)},d.prototype.verify=function(a){var b=[],c=this.unwrapCompressed(),d=c.packets.filterByTag(i.packet.literal);if(1!==d.length)throw new Error("Can only verify message with one literal data packet.");var e=c.packets.filterByTag(i.packet.signature);return a.forEach(function(a){for(var c=0;c<e.length;c++){var f=a.getPublicKeyPacket([e[c].issuerKeyId]);if(f){var g={};g.keyid=e[c].issuerKeyId,g.valid=e[c].verify(f,d[0]),b.push(g);break}}}),b},d.prototype.unwrapCompressed=function(){var a=this.packets.filterByTag(i.packet.compressed);return a.length?new d(a[0].packets):this},d.prototype.armor=function(){return j.encode(i.armor.message,this.packets.write())},c.Message=d,c.readArmored=e,c.fromText=f,c.fromBinary=g},{"./config":4,"./crypto":19,"./encoding/armor.js":28,"./enums.js":30,"./key.js":32,"./packet":40}],37:[function(a,b,c){function d(a){n=new t(a)}function e(a,b,c){return l(c)?void n.encryptMessage(a,b,c):m(function(){var c,d;return c=q.fromText(b),c=c.encrypt(a),d=o.encode(p.armor.message,c.packets.write())},c)}function f(a,b,c,d){return l(d)?void n.signAndEncryptMessage(a,b,c,d):m(function(){var d,e;return d=q.fromText(c),d=d.sign([b]),d=d.encrypt(a),e=o.encode(p.armor.message,d.packets.write())},d)}function g(a,b,c){return l(c)?void n.decryptMessage(a,b,c):m(function(){return b=b.decrypt(a),b.getText()},c)}function h(a,b,c,d){return l(d)?void n.decryptAndVerifyMessage(a,b,c,d):m(function(){var d={};return c=c.decrypt(a),d.text=c.getText(),d.text?(d.signatures=c.verify(b),d):null},d)}function i(a,b,c){return l(c)?void n.signClearMessage(a,b,c):m(function(){var c=new r.CleartextMessage(b);return c.sign(a),c.armor()},c)}function j(a,b,c){return l(c)?void n.verifyClearSignedMessage(a,b,c):m(function(){var c={};if(!(b instanceof r.CleartextMessage))throw new Error("Parameter [message] needs to be of type CleartextMessage.");return c.text=b.getText(),c.signatures=b.verify(a),c},c)}function k(a,b){return l(b)?void n.generateKeyPair(a,b):m(function(){var b={},c=s.generate(a);return b.key=c,b.privateKeyArmored=c.armor(),b.publicKeyArmored=c.toPublic().armor(),b},b)}function l(a){if("undefined"==typeof window||!window.Worker||"function"!=typeof a)return!1;if(!n)throw new Error("You need to set the worker path!");return!0}function m(a,b){var c;try{c=a()}catch(d){if(b)return void b(d);throw d}return b?void b(null,c):c}var n,o=a("./encoding/armor.js"),p=(a("./packet"),a("./enums.js")),q=(a("./config"),a("./message.js")),r=a("./cleartext.js"),s=a("./key.js"),t=a("./worker/async_proxy.js");c.initWorker=d,c.encryptMessage=e,c.signAndEncryptMessage=f,c.decryptMessage=g,c.decryptAndVerifyMessage=h,c.signClearMessage=i,c.verifyClearSignedMessage=j,c.generateKeyPair=k},{"./cleartext.js":1,"./config":4,"./encoding/armor.js":28,"./enums.js":30,"./key.js":32,"./message.js":36,"./packet":40,"./worker/async_proxy.js":62}],38:[function(a,b){function c(a){return a.substr(0,1).toUpperCase()+a.substr(1)}var d=a("../enums.js");b.exports={Compressed:a("./compressed.js"),SymEncryptedIntegrityProtected:a("./sym_encrypted_integrity_protected.js"),PublicKeyEncryptedSessionKey:a("./public_key_encrypted_session_key.js"),SymEncryptedSessionKey:a("./sym_encrypted_session_key.js"),Literal:a("./literal.js"),PublicKey:a("./public_key.js"),SymmetricallyEncrypted:a("./symmetrically_encrypted.js"),Marker:a("./marker.js"),PublicSubkey:a("./public_subkey.js"),UserAttribute:a("./user_attribute.js"),OnePassSignature:a("./one_pass_signature.js"),SecretKey:a("./secret_key.js"),Userid:a("./userid.js"),SecretSubkey:a("./secret_subkey.js"),Signature:a("./signature.js"),Trust:a("./trust.js"),newPacketFromTag:function(a){return new(this[c(a)])},fromStructuredClone:function(a){var b=d.read(d.packet,a.tag),c=this.newPacketFromTag(b);for(var e in a)a.hasOwnProperty(e)&&(c[e]=a[e]);return c.postCloneTypeFix&&c.postCloneTypeFix(),c}}},{"../enums.js":30,"./compressed.js":39,"./literal.js":41,"./marker.js":42,"./one_pass_signature.js":43,"./public_key.js":46,"./public_key_encrypted_session_key.js":47,"./public_subkey.js":48,"./secret_key.js":49,"./secret_subkey.js":50,"./signature.js":51,"./sym_encrypted_integrity_protected.js":52,"./sym_encrypted_session_key.js":53,"./symmetrically_encrypted.js":54,"./trust.js":55,"./user_attribute.js":56,"./userid.js":57}],39:[function(a,b){function c(){this.tag=d.packet.compressed,this.packets=null,this.algorithm="uncompressed",this.compressed=null}b.exports=c;var d=a("../enums.js"),e=a("../compression/jxg.js"),f=a("../encoding/base64.js");c.prototype.read=function(a){this.algorithm=d.read(d.compression,a.charCodeAt(0)),this.compressed=a.substr(1),this.decompress()},c.prototype.write=function(){return null===this.compressed&&this.compress(),String.fromCharCode(d.write(d.compression,this.algorithm))+this.compressed},c.prototype.decompress=function(){var a,b;switch(this.algorithm){case"uncompressed":a=this.compressed;break;case"zip":compData=this.compressed,b=f.encode(compData).replace(/\n/g,"");var c=new e.Util.Unzip(e.Util.Base64.decodeAsArray(b));a=unescape(c.deflate()[0][0]);break;case"zlib":var d=this.compressed.charCodeAt(0)%16;if(8==d){compData=this.compressed.substring(0,this.compressed.length-4),b=f.encode(compData).replace(/\n/g,""),a=e.decompress(b);break}throw new Error("Compression algorithm ZLIB only supports DEFLATE compression method.");case"bzip2":throw new Error("Compression algorithm BZip2 [BZ2] is not implemented.");default:throw new Error("Compression algorithm unknown :"+this.alogrithm)}this.packets.read(a)},c.prototype.compress=function(){switch(this.algorithm){case"uncompressed":this.compressed=this.packets.write();break;case"zip":throw new Error("Compression algorithm ZIP [RFC1951] is not implemented.");case"zlib":throw new Error("Compression algorithm ZLIB [RFC1950] is not implemented.");case"bzip2":throw new Error("Compression algorithm BZip2 [BZ2] is not implemented.");default:throw new Error("Compression algorithm unknown :"+this.type)}}},{"../compression/jxg.js":2,"../encoding/base64.js":29,"../enums.js":30}],40:[function(a,b){a("../enums.js");b.exports={List:a("./packetlist.js")};var c=a("./all_packets.js");for(var d in c)b.exports[d]=c[d]},{"../enums.js":30,"./all_packets.js":38,"./packetlist.js":45}],41:[function(a,b){function c(){this.tag=e.packet.literal,this.format="utf8",this.data="",this.date=new Date,this.filename="msg.txt"}b.exports=c;var d=a("../util.js"),e=a("../enums.js");c.prototype.setText=function(a){a=a.replace(/\r/g,"").replace(/\n/g,"\r\n"),this.data="utf8"==this.format?d.encode_utf8(a):a},c.prototype.getText=function(){var a=d.decode_utf8(this.data);return a.replace(/\r\n/g,"\n")},c.prototype.setBytes=function(a,b){this.format=b,this.data=a},c.prototype.getBytes=function(){return this.data},c.prototype.setFilename=function(a){this.filename=a},c.prototype.getFilename=function(){return this.filename},c.prototype.read=function(a){var b=e.read(e.literal,a.charCodeAt(0)),c=a.charCodeAt(1);this.filename=d.decode_utf8(a.substr(2,c)),this.date=d.readDate(a.substr(2+c,4));var f=a.substring(6+c);this.setBytes(f,b)},c.prototype.write=function(){var a=d.encode_utf8(this.filename),b=this.getBytes(),c="";return c+=String.fromCharCode(e.write(e.literal,this.format)),c+=String.fromCharCode(a.length),c+=a,c+=d.writeDate(this.date),c+=b}},{"../enums.js":30,"../util.js":61}],42:[function(a,b){function c(){this.tag=d.packet.marker}b.exports=c;var d=a("../enums.js");c.prototype.read=function(a){return 80==a.charCodeAt(0)&&71==a.charCodeAt(1)&&80==a.charCodeAt(2)?!0:!1}},{"../enums.js":30}],43:[function(a,b){function c(){this.tag=d.packet.onePassSignature,this.version=null,this.type=null,this.hashAlgorithm=null,this.publicKeyAlgorithm=null,this.signingKeyId=null,this.flags=null}b.exports=c;var d=a("../enums.js"),e=a("../type/keyid.js");c.prototype.read=function(a){var b=0;return this.version=a.charCodeAt(b++),this.type=d.read(d.signature,a.charCodeAt(b++)),this.hashAlgorithm=d.read(d.hash,a.charCodeAt(b++)),this.publicKeyAlgorithm=d.read(d.publicKey,a.charCodeAt(b++)),this.signingKeyId=new e,this.signingKeyId.read(a.substr(b)),b+=8,this.flags=a.charCodeAt(b++),this},c.prototype.write=function(){var a="";return a+=String.fromCharCode(3),a+=String.fromCharCode(d.write(d.signature,this.type)),a+=String.fromCharCode(d.write(d.hash,this.hashAlgorithm)),a+=String.fromCharCode(d.write(d.publicKey,this.publicKeyAlgorithm)),a+=this.signingKeyId.write(),a+=String.fromCharCode(this.flags)},c.prototype.postCloneTypeFix=function(){this.signingKeyId=e.fromClone(this.signingKeyId)}},{"../enums.js":30,"../type/keyid.js":58}],44:[function(a,b){var c=(a("../enums.js"),a("../util.js"));b.exports={readSimpleLength:function(a){var b,d=0,e=a.charCodeAt(0);return 192>e?(d=a.charCodeAt(0),b=1):255>e?(d=(a.charCodeAt(0)-192<<8)+a.charCodeAt(1)+192,b=2):255==e&&(d=c.readNumber(a.substr(1,4)),b=5),{len:d,offset:b}},writeSimpleLength:function(a){var b="";return 192>a?b+=String.fromCharCode(a):a>191&&8384>a?(b+=String.fromCharCode((a-192>>8)+192),b+=String.fromCharCode(a-192&255)):(b+=String.fromCharCode(255),b+=c.writeNumber(a,4)),b},writeHeader:function(a,b){var c="";return c+=String.fromCharCode(192|a),c+=this.writeSimpleLength(b)},writeOldHeader:function(a,b){var d="";return 256>b?(d+=String.fromCharCode(128|a<<2),d+=String.fromCharCode(b)):65536>b?(d+=String.fromCharCode(128|a<<2|1),d+=c.writeNumber(b,2)):(d+=String.fromCharCode(128|a<<2|2),d+=c.writeNumber(b,4)),d},read:function(a,b,d){if(null===a||a.length<=b||a.substring(b).length<2||0===(128&a.charCodeAt(b)))throw new Error("Error during parsing. This message / key is probably not containing a valid OpenPGP format.");var e,f=b,g=-1,h=-1;h=0,0!==(64&a.charCodeAt(f))&&(h=1);var i;h?g=63&a.charCodeAt(f):(g=(63&a.charCodeAt(f))>>2,i=3&a.charCodeAt(f)),f++;var j=null,k=-1;if(h)if(a.charCodeAt(f)<192)e=a.charCodeAt(f++),c.print_debug("1 byte length:"+e);else if(a.charCodeAt(f)>=192&&a.charCodeAt(f)<224)e=(a.charCodeAt(f++)-192<<8)+a.charCodeAt(f++)+192,c.print_debug("2 byte length:"+e);else if(a.charCodeAt(f)>223&&a.charCodeAt(f)<255){e=1<<(31&a.charCodeAt(f++)),c.print_debug("4 byte length:"+e);var l=f+e;j=a.substring(f,f+e);for(var m;;){if(a.charCodeAt(l)<192){m=a.charCodeAt(l++),e+=m,j+=a.substring(l,l+m),l+=m;break}if(a.charCodeAt(l)>=192&&a.charCodeAt(l)<224){m=(a.charCodeAt(l++)-192<<8)+a.charCodeAt(l++)+192,e+=m,j+=a.substring(l,l+m),l+=m;break}if(!(a.charCodeAt(l)>223&&a.charCodeAt(l)<255)){l++,m=a.charCodeAt(l++)<<24|a.charCodeAt(l++)<<16|a[l++].charCodeAt()<<8|a.charCodeAt(l++),j+=a.substring(l,l+m),e+=m,l+=m;break}m=1<<(31&a.charCodeAt(l++)),e+=m,j+=a.substring(l,l+m),l+=m}k=l-f}else f++,e=a.charCodeAt(f++)<<24|a.charCodeAt(f++)<<16|a.charCodeAt(f++)<<8|a.charCodeAt(f++);else switch(i){case 0:e=a.charCodeAt(f++);break;case 1:e=a.charCodeAt(f++)<<8|a.charCodeAt(f++);break;case 2:e=a.charCodeAt(f++)<<24|a.charCodeAt(f++)<<16|a.charCodeAt(f++)<<8|a.charCodeAt(f++);break;default:e=d}return-1==k&&(k=e),null===j&&(j=a.substring(f,f+k)),{tag:g,packet:j,offset:f+k}}}},{"../enums.js":30,"../util.js":61}],45:[function(a,b){function c(){this.length=0}b.exports=c;var d=a("./packet.js"),e=a("./all_packets.js"),f=a("../enums.js");c.prototype.read=function(a){for(var b=0;b<a.length;){var c=d.read(a,b,a.length-b);b=c.offset;var g=f.read(f.packet,c.tag),h=e.newPacketFromTag(g);this.push(h),h.read(c.packet)}},c.prototype.write=function(){for(var a="",b=0;b<this.length;b++){var c=this[b].write();a+=d.writeHeader(this[b].tag,c.length),a+=c}return a},c.prototype.push=function(a){a&&(a.packets=a.packets||new c,this[this.length]=a,this.length++)},c.prototype.filter=function(a){for(var b=new c,d=0;d<this.length;d++)a(this[d],d,this)&&b.push(this[d]);return b},c.prototype.filterByTag=function(){for(var a=Array.prototype.slice.call(arguments),b=new c,d=this,e=0;e<this.length;e++)a.some(function(a){return d[e].tag==a})&&b.push(this[e]);return b},c.prototype.forEach=function(a){for(var b=0;b<this.length;b++)a(this[b])},c.prototype.findPacket=function(a){var b=this.filterByTag(a);if(b.length)return b[0];for(var c=null,d=0;d<this.length;d++)if(this[d].packets.length&&(c=this[d].packets.findPacket(a)))return c;return null},c.prototype.indexOfTag=function(){for(var a=Array.prototype.slice.call(arguments),b=[],c=this,d=0;d<this.length;d++)a.some(function(a){return c[d].tag==a})&&b.push(d);return b},c.prototype.slice=function(a,b){b||(b=this.length);for(var d=new c,e=a;b>e;e++)d.push(this[e]);return d},c.prototype.concat=function(a){if(a)for(var b=0;b<a.length;b++)this.push(a[b])},b.exports.fromStructuredClone=function(a){for(var b=new c,d=0;d<a.length;d++)b.push(e.fromStructuredClone(a[d])),b[d].packets=0!==b[d].packets.length?this.fromStructuredClone(b[d].packets):new c;return b}},{"../enums.js":30,"./all_packets.js":38,"./packet.js":44}],46:[function(a,b){function c(){this.tag=g.packet.publicKey,this.version=4,this.created=new Date,this.mpi=[],this.algorithm="rsa_sign",this.expirationTimeV3=0,this.fingerprint=null,this.keyid=null}b.exports=c;var d=a("../util.js"),e=a("../type/mpi.js"),f=a("../type/keyid.js"),g=a("../enums.js"),h=a("../crypto");c.prototype.read=function(a){var b=0;if(this.version=a.charCodeAt(b++),3==this.version||4==this.version){this.created=d.readDate(a.substr(b,4)),b+=4,3==this.version&&(this.expirationTimeV3=d.readNumber(a.substr(b,2)),b+=2),this.algorithm=g.read(g.publicKey,a.charCodeAt(b++));var c=h.getPublicMpiCount(this.algorithm);this.mpi=[];for(var f=a.substr(b),i=0,j=0;c>j&&i<f.length;j++)if(this.mpi[j]=new e,i+=this.mpi[j].read(f.substr(i)),i>f.length)throw new Error("Error reading MPI @:"+i);return i+6}throw new Error("Version "+this.version+" of the key packet is unsupported.")},c.prototype.readPublicKey=c.prototype.read,c.prototype.write=function(){var a=String.fromCharCode(this.version);a+=d.writeDate(this.created),3==this.version&&(a+=d.writeNumber(this.expirationTimeV3,2)),a+=String.fromCharCode(g.write(g.publicKey,this.algorithm));for(var b=h.getPublicMpiCount(this.algorithm),c=0;b>c;c++)a+=this.mpi[c].write();return a},c.prototype.writePublicKey=c.prototype.write,c.prototype.writeOld=function(){var a=this.writePublicKey();return String.fromCharCode(153)+d.writeNumber(a.length,2)+a},c.prototype.getKeyId=function(){return this.keyid?this.keyid:(this.keyid=new f,4==this.version?this.keyid.read(d.hex2bin(this.getFingerprint()).substr(12,8)):3==this.version&&this.keyid.read(this.mpi[0].write().substr(-8)),this.keyid)},c.prototype.getFingerprint=function(){if(this.fingerprint)return this.fingerprint;var a="";if(4==this.version)a=this.writeOld(),this.fingerprint=h.hash.sha1(a);else if(3==this.version){for(var b=h.getPublicMpiCount(this.algorithm),c=0;b>c;c++)a+=this.mpi[c].toBytes();this.fingerprint=h.hash.md5(a)}return this.fingerprint=d.hexstrdump(this.fingerprint),this.fingerprint},c.prototype.getBitSize=function(){return 8*this.mpi[0].byteLength()},c.prototype.postCloneTypeFix=function(){for(var a=0;a<this.mpi.length;a++)this.mpi[a]=e.fromClone(this.mpi[a]);this.keyid&&(this.keyid=f.fromClone(this.keyid))}},{"../crypto":19,"../enums.js":30,"../type/keyid.js":58,"../type/mpi.js":59,"../util.js":61}],47:[function(a,b){function c(){this.tag=g.packet.publicKeyEncryptedSessionKey,this.version=3,this.publicKeyId=new d,this.publicKeyAlgorithm="rsa_encrypt",this.sessionKey=null,this.sessionKeyAlgorithm="aes256",this.encrypted=[]}b.exports=c;var d=a("../type/keyid.js"),e=a("../util.js"),f=a("../type/mpi.js"),g=a("../enums.js"),h=a("../crypto");c.prototype.read=function(a){this.version=a.charCodeAt(0),this.publicKeyId.read(a.substr(1)),this.publicKeyAlgorithm=g.read(g.publicKey,a.charCodeAt(9));var b=10,c=function(a){switch(a){case"rsa_encrypt":case"rsa_encrypt_sign":return 1;case"elgamal":return 2;default:throw new Error("Invalid algorithm.")}}(this.publicKeyAlgorithm);this.encrypted=[];for(var d=0;c>d;d++){var e=new f;b+=e.read(a.substr(b)),this.encrypted.push(e)}},c.prototype.write=function(){var a=String.fromCharCode(this.version);a+=this.publicKeyId.write(),a+=String.fromCharCode(g.write(g.publicKey,this.publicKeyAlgorithm));for(var b=0;b<this.encrypted.length;b++)a+=this.encrypted[b].write();return a},c.prototype.encrypt=function(a){var b=String.fromCharCode(g.write(g.symmetric,this.sessionKeyAlgorithm));b+=this.sessionKey;var c=e.calc_checksum(this.sessionKey);b+=e.writeNumber(c,2);var d=new f;d.fromBytes(h.pkcs1.eme.encode(b,a.mpi[0].byteLength())),this.encrypted=h.publicKeyEncrypt(this.publicKeyAlgorithm,a.mpi,d)},c.prototype.decrypt=function(a){var b=h.publicKeyDecrypt(this.publicKeyAlgorithm,a.mpi,this.encrypted).toBytes(),c=e.readNumber(b.substr(b.length-2)),d=h.pkcs1.eme.decode(b);if(a=d.substring(1,d.length-2),c!=e.calc_checksum(a))throw new Error("Checksum mismatch");this.sessionKey=a,this.sessionKeyAlgorithm=g.read(g.symmetric,d.charCodeAt(0))},c.prototype.postCloneTypeFix=function(){this.publicKeyId=d.fromClone(this.publicKeyId);for(var a=0;a<this.encrypted.length;a++)this.encrypted[a]=f.fromClone(this.encrypted[a])}},{"../crypto":19,"../enums.js":30,"../type/keyid.js":58,"../type/mpi.js":59,"../util.js":61}],48:[function(a,b){function c(){d.call(this),this.tag=e.packet.publicSubkey}b.exports=c;var d=a("./public_key.js"),e=a("../enums.js");c.prototype=new d,c.prototype.constructor=c},{"../enums.js":30,"./public_key.js":46}],49:[function(a,b){function c(){i.call(this),this.tag=j.packet.secretKey,this.encrypted=null,this.isDecrypted=!1}function d(a){return"sha1"==a?20:2}function e(a){return"sha1"==a?l.hash.sha1:function(a){return k.writeNumber(k.calc_checksum(a),2)}}function f(a,b,c){var f=d(a),g=e(a),h=b.substr(b.length-f);b=b.substr(0,b.length-f);var i=g(b);if(i!=h)return new Error("Hash mismatch.");for(var j=l.getPrivateMpiCount(c),k=0,n=[],o=0;j>o&&k<b.length;o++)n[o]=new m,k+=n[o].read(b.substr(k));return n}function g(a,b,c){for(var d="",f=l.getPublicMpiCount(b),g=f;g<c.length;g++)d+=c[g].write();return d+=e(a)(d)}function h(a,b,c){return a.produce_key(b,l.cipher[c].keySize)}b.exports=c;var i=a("./public_key.js"),j=a("../enums.js"),k=a("../util.js"),l=a("../crypto"),m=a("../type/mpi.js"),n=a("../type/s2k.js");c.prototype=new i,c.prototype.constructor=c,c.prototype.read=function(a){var b=this.readPublicKey(a);a=a.substr(b);var c=a.charCodeAt(0);if(c)this.encrypted=a;else{var d=f("mod",a.substr(1),this.algorithm);if(d instanceof Error)throw d;this.mpi=this.mpi.concat(d),this.isDecrypted=!0}},c.prototype.write=function(){var a=this.writePublicKey();return this.encrypted?a+=this.encrypted:(a+=String.fromCharCode(0),a+=g("mod",this.algorithm,this.mpi)),a},c.prototype.encrypt=function(a){var b=new n,c="aes256",d=g("sha1",this.algorithm,this.mpi),e=h(b,a,c),f=l.cipher[c].blockSize,i=l.random.getRandomBytes(f);this.encrypted="",this.encrypted+=String.fromCharCode(254),this.encrypted+=String.fromCharCode(j.write(j.symmetric,c)),this.encrypted+=b.write(),this.encrypted+=i,this.encrypted+=l.cfb.normalEncrypt(c,e,d,i)},c.prototype.decrypt=function(a){if(this.isDecrypted)return!0;var b,c,d=0,e=this.encrypted.charCodeAt(d++);if(255==e||254==e){b=this.encrypted.charCodeAt(d++),b=j.read(j.symmetric,b);var g=new n;d+=g.read(this.encrypted.substr(d)),c=h(g,a,b)}else b=e,b=j.read(j.symmetric,b),c=l.hash.md5(a);var i=this.encrypted.substr(d,l.cipher[b].blockSize);d+=i.length;var k,m=this.encrypted.substr(d);k=l.cfb.normalDecrypt(b,c,m,i);var o=254==e?"sha1":"mod",p=f(o,k,this.algorithm);return p instanceof Error?!1:(this.mpi=this.mpi.concat(p),this.isDecrypted=!0,!0)},c.prototype.generate=function(a){this.mpi=l.generateMpi(this.algorithm,a),this.isDecrypted=!0},c.prototype.clearPrivateMPIs=function(){this.mpi=this.mpi.slice(0,l.getPublicMpiCount(this.algorithm)),this.isDecrypted=!1}},{"../crypto":19,"../enums.js":30,"../type/mpi.js":59,"../type/s2k.js":60,"../util.js":61,"./public_key.js":46}],50:[function(a,b){function c(){d.call(this),this.tag=e.packet.secretSubkey}b.exports=c;var d=a("./secret_key.js"),e=a("../enums.js");c.prototype=new d,c.prototype.constructor=c},{"../enums.js":30,"./secret_key.js":49}],51:[function(a,b){function c(){this.tag=g.packet.signature,this.version=4,this.signatureType=null,this.hashAlgorithm=null,this.publicKeyAlgorithm=null,this.signatureData=null,this.unhashedSubpackets=null,this.signedHashValue=null,this.created=new Date,this.signatureExpirationTime=null,this.signatureNeverExpires=!0,this.exportable=null,this.trustLevel=null,this.trustAmount=null,this.regularExpression=null,this.revocable=null,this.keyExpirationTime=null,this.keyNeverExpires=null,this.preferredSymmetricAlgorithms=null,this.revocationKeyClass=null,this.revocationKeyAlgorithm=null,this.revocationKeyFingerprint=null,this.issuerKeyId=new j,this.notation=null,this.preferredHashAlgorithms=null,this.preferredCompressionAlgorithms=null,this.keyServerPreferences=null,this.preferredKeyServer=null,this.isPrimaryUserID=null,this.policyURI=null,this.keyFlags=null,this.signersUserId=null,this.reasonForRevocationFlag=null,this.reasonForRevocationString=null,this.features=null,this.signatureTargetPublicKeyAlgorithm=null,this.signatureTargetHashAlgorithm=null,this.signatureTargetHash=null,this.embeddedSignature=null,this.verified=!1}function d(a,b){var c="";return c+=f.writeSimpleLength(b.length+1),c+=String.fromCharCode(a),c+=b}b.exports=c;var e=a("../util.js"),f=a("./packet.js"),g=a("../enums.js"),h=a("../crypto"),i=a("../type/mpi.js"),j=a("../type/keyid.js");c.prototype.read=function(a){function b(a){for(var b=e.readNumber(a.substr(0,2)),c=2;2+b>c;){var d=f.readSimpleLength(a.substr(c));c+=d.offset,this.read_sub_packet(a.substr(c,d.len)),c+=d.len}return c}var c=0;switch(this.version=a.charCodeAt(c++),this.version){case 3:5!=a.charCodeAt(c++)&&e.print_debug("packet/signature.js\ninvalid One-octet length of following hashed material.MUST be 5. @:"+(c-1));var d=c;this.signatureType=a.charCodeAt(c++),this.created=e.readDate(a.substr(c,4)),c+=4,this.signatureData=a.substring(d,c),this.issuerKeyId.read(a.substring(c,c+8)),c+=8,this.publicKeyAlgorithm=a.charCodeAt(c++),this.hashAlgorithm=a.charCodeAt(c++);break;case 4:this.signatureType=a.charCodeAt(c++),this.publicKeyAlgorithm=a.charCodeAt(c++),this.hashAlgorithm=a.charCodeAt(c++),c+=b.call(this,a.substr(c),!0),this.signatureData=a.substr(0,c);var g=c;c+=b.call(this,a.substr(c),!1),this.unhashedSubpackets=a.substr(g,c-g);break;default:throw new Error("Version "+this.version+" of the signature is unsupported.")}this.signedHashValue=a.substr(c,2),c+=2,this.signature=a.substr(c)},c.prototype.write=function(){var a="";switch(this.version){case 3:a+=String.fromCharCode(3),a+=String.fromCharCode(5),a+=this.signatureData,a+=this.issuerKeyId.write(),a+=String.fromCharCode(this.publicKeyAlgorithm),a+=String.fromCharCode(this.hashAlgorithm);break;case 4:a+=this.signatureData,a+=this.unhashedSubpackets?this.unhashedSubpackets:e.writeNumber(0,2)}return a+=this.signedHashValue+this.signature},c.prototype.sign=function(a,b){var c=g.write(g.signature,this.signatureType),d=g.write(g.publicKey,this.publicKeyAlgorithm),e=g.write(g.hash,this.hashAlgorithm),f=String.fromCharCode(4);f+=String.fromCharCode(c),f+=String.fromCharCode(d),f+=String.fromCharCode(e),this.issuerKeyId=a.getKeyId(),f+=this.write_all_sub_packets(),this.signatureData=f;var i=this.calculateTrailer(),j=this.toSign(c,b)+this.signatureData+i,k=h.hash.digest(e,j);this.signedHashValue=k.substr(0,2),this.signature=h.signature.sign(e,d,a.mpi,j)},c.prototype.write_all_sub_packets=function(){var a=g.signatureSubpacket,b="",c="";if(null!==this.created&&(b+=d(a.signature_creation_time,e.writeDate(this.created))),null!==this.signatureExpirationTime&&(b+=d(a.signature_expiration_time,e.writeNumber(this.signatureExpirationTime,4))),null!==this.exportable&&(b+=d(a.exportable_certification,String.fromCharCode(this.exportable?1:0))),null!==this.trustLevel&&(c=String.fromCharCode(this.trustLevel)+String.fromCharCode(this.trustAmount),b+=d(a.trust_signature,c)),null!==this.regularExpression&&(b+=d(a.regular_expression,this.regularExpression)),null!==this.revocable&&(b+=d(a.revocable,String.fromCharCode(this.revocable?1:0))),null!==this.keyExpirationTime&&(b+=d(a.key_expiration_time,e.writeNumber(this.keyExpirationTime,4))),null!==this.preferredSymmetricAlgorithms&&(c=e.bin2str(this.preferredSymmetricAlgorithms),b+=d(a.preferred_symmetric_algorithms,c)),null!==this.revocationKeyClass&&(c=String.fromCharCode(this.revocationKeyClass),c+=String.fromCharCode(this.revocationKeyAlgorithm),c+=this.revocationKeyFingerprint,b+=d(a.revocation_key,c)),this.issuerKeyId.isNull()||(b+=d(a.issuer,this.issuerKeyId.write())),null!==this.notation)for(var f in this.notation)if(this.notation.hasOwnProperty(f)){var h=this.notation[f];c=String.fromCharCode(128),c+=String.fromCharCode(0),c+=String.fromCharCode(0),c+=String.fromCharCode(0),c+=e.writeNumber(f.length,2),c+=e.writeNumber(h.length,2),c+=f+h,b+=d(a.notation_data,c)}return null!==this.preferredHashAlgorithms&&(c=e.bin2str(this.preferredHashAlgorithms),b+=d(a.preferred_hash_algorithms,c)),null!==this.preferredCompressionAlgorithms&&(c=e.bin2str(this.preferredCompressionAlgorithms),b+=d(a.preferred_compression_algorithms,c)),null!==this.keyServerPreferences&&(c=e.bin2str(this.keyServerPreferences),b+=d(a.key_server_preferences,c)),null!==this.preferredKeyServer&&(b+=d(a.preferred_key_server,this.preferredKeyServer)),null!==this.isPrimaryUserID&&(b+=d(a.primary_user_id,String.fromCharCode(this.isPrimaryUserID?1:0))),null!==this.policyURI&&(b+=d(a.policy_uri,this.policyURI)),null!==this.keyFlags&&(c=e.bin2str(this.keyFlags),b+=d(a.key_flags,c)),null!==this.signersUserId&&(b+=d(a.signers_user_id,this.signersUserId)),null!==this.reasonForRevocationFlag&&(c=String.fromCharCode(this.reasonForRevocationFlag),c+=this.reasonForRevocationString,b+=d(a.reason_for_revocation,c)),null!==this.features&&(c=e.bin2str(this.features),b+=d(a.features,c)),null!==this.signatureTargetPublicKeyAlgorithm&&(c=String.fromCharCode(this.signatureTargetPublicKeyAlgorithm),c+=String.fromCharCode(this.signatureTargetHashAlgorithm),c+=this.signatureTargetHash,b+=d(a.signature_target,c)),null!==this.embeddedSignature&&(b+=d(a.embedded_signature,this.embeddedSignature.write())),b=e.writeNumber(b.length,2)+b
},c.prototype.read_sub_packet=function(a){function b(a,b){this[a]=[];for(var c=0;c<b.length;c++)this[a].push(b.charCodeAt(c))}var d,f=0,g=127&a.charCodeAt(f++);switch(g){case 2:this.created=e.readDate(a.substr(f));break;case 3:d=e.readNumber(a.substr(f)),this.signatureNeverExpires=0===d,this.signatureExpirationTime=d;break;case 4:this.exportable=1==a.charCodeAt(f++);break;case 5:this.trustLevel=a.charCodeAt(f++),this.trustAmount=a.charCodeAt(f++);break;case 6:this.regularExpression=a.substr(f);break;case 7:this.revocable=1==a.charCodeAt(f++);break;case 9:d=e.readNumber(a.substr(f)),this.keyExpirationTime=d,this.keyNeverExpires=0===d;break;case 11:b.call(this,"preferredSymmetricAlgorithms",a.substr(f));break;case 12:this.revocationKeyClass=a.charCodeAt(f++),this.revocationKeyAlgorithm=a.charCodeAt(f++),this.revocationKeyFingerprint=a.substr(f,20);break;case 16:this.issuerKeyId.read(a.substr(f));break;case 20:if(128==a.charCodeAt(f)){f+=4;var i=e.readNumber(a.substr(f,2));f+=2;var j=e.readNumber(a.substr(f,2));f+=2;var k=a.substr(f,i),l=a.substr(f+i,j);this.notation=this.notation||{},this.notation[k]=l}else e.print_debug("Unsupported notation flag "+a.charCodeAt(f));break;case 21:b.call(this,"preferredHashAlgorithms",a.substr(f));break;case 22:b.call(this,"preferredCompressionAlgorithms",a.substr(f));break;case 23:b.call(this,"keyServerPreferencess",a.substr(f));break;case 24:this.preferredKeyServer=a.substr(f);break;case 25:this.isPrimaryUserID=0!==a[f++];break;case 26:this.policyURI=a.substr(f);break;case 27:b.call(this,"keyFlags",a.substr(f));break;case 28:this.signersUserId+=a.substr(f);break;case 29:this.reasonForRevocationFlag=a.charCodeAt(f++),this.reasonForRevocationString=a.substr(f);break;case 30:b.call(this,"features",a.substr(f));break;case 31:this.signatureTargetPublicKeyAlgorithm=a.charCodeAt(f++),this.signatureTargetHashAlgorithm=a.charCodeAt(f++);var m=h.getHashByteLength(this.signatureTargetHashAlgorithm);this.signatureTargetHash=a.substr(f,m);break;case 32:this.embeddedSignature=new c,this.embeddedSignature.read(a.substr(f));break;default:e.print_debug("Unknown signature subpacket type "+g+" @:"+f)}},c.prototype.toSign=function(a,b){var c=g.signature;switch(a){case c.binary:case c.text:return b.getBytes();case c.standalone:return"";case c.cert_generic:case c.cert_persona:case c.cert_casual:case c.cert_positive:case c.cert_revocation:var d,f;if(void 0!==b.userid)f=180,d=b.userid;else{if(void 0===b.userattribute)throw new Error("Either a userid or userattribute packet needs to be supplied for certification.");f=209,d=b.userattribute}var h=d.write();if(4==this.version)return this.toSign(c.key,b)+String.fromCharCode(f)+e.writeNumber(h.length,4)+h;if(3==this.version)return this.toSign(c.key,b)+h;break;case c.subkey_binding:case c.subkey_revocation:case c.key_binding:return this.toSign(c.key,b)+this.toSign(c.key,{key:b.bind});case c.key:if(void 0===b.key)throw new Error("Key packet is required for this signature.");return b.key.writeOld();case c.key_revocation:return this.toSign(c.key,b);case c.timestamp:return"";case c.third_party:throw new Error("Not implemented");default:throw new Error("Unknown signature type.")}},c.prototype.calculateTrailer=function(){var a="";return 3==this.version?a:(a+=String.fromCharCode(4),a+=String.fromCharCode(255),a+=e.writeNumber(this.signatureData.length,4))},c.prototype.verify=function(a,b){var c=g.write(g.signature,this.signatureType),d=g.write(g.publicKey,this.publicKeyAlgorithm),e=g.write(g.hash,this.hashAlgorithm),f=this.toSign(c,b),j=this.calculateTrailer(),k=0;d>0&&4>d?k=1:17==d&&(k=2);for(var l=[],m=0,n=0;k>n;n++)l[n]=new i,m+=l[n].read(this.signature.substr(m));return this.verified=h.signature.verify(d,e,l,a.mpi,f+this.signatureData+j),this.verified},c.prototype.isExpired=function(){return this.signatureNeverExpires?!1:Date.now()>this.created.getTime()+1e3*this.signatureExpirationTime},c.prototype.postCloneTypeFix=function(){this.issuerKeyId=j.fromClone(this.issuerKeyId)}},{"../crypto":19,"../enums.js":30,"../type/keyid.js":58,"../type/mpi.js":59,"../util.js":61,"./packet.js":44}],52:[function(a,b){function c(){this.tag=e.packet.symEncryptedIntegrityProtected,this.encrypted=null,this.modification=!1,this.packets=null}b.exports=c;var d=(a("../util.js"),a("../crypto")),e=a("../enums.js");c.prototype.read=function(a){var b=a.charCodeAt(0);if(1!=b)throw new Error("Invalid packet version.");this.encrypted=a.substr(1)},c.prototype.write=function(){return String.fromCharCode(1)+this.encrypted},c.prototype.encrypt=function(a,b){var c=this.packets.write(),e=d.getPrefixRandom(a),f=e+e.charAt(e.length-2)+e.charAt(e.length-1),g=c;g+=String.fromCharCode(211),g+=String.fromCharCode(20),g+=d.hash.sha1(f+g),this.encrypted=d.cfb.encrypt(e,a,g,b,!1).substring(0,f.length+g.length)},c.prototype.decrypt=function(a,b){var c=d.cfb.decrypt(a,b,this.encrypted,!1);this.hash=d.hash.sha1(d.cfb.mdc(a,b,this.encrypted)+c.substring(0,c.length-20));var e=c.substr(c.length-20,20);if(this.hash!=e)throw new Error("Modification detected.");this.packets.read(c.substr(0,c.length-22))}},{"../crypto":19,"../enums.js":30,"../util.js":61}],53:[function(a,b){function c(){this.tag=e.packet.symEncryptedSessionKey,this.sessionKeyEncryptionAlgorithm=null,this.sessionKeyAlgorithm="aes256",this.encrypted=null,this.s2k=new d}var d=a("../type/s2k.js"),e=a("../enums.js"),f=a("../crypto");b.exports=c,c.prototype.read=function(a){this.version=a.charCodeAt(0);var b=e.read(e.symmetric,a.charCodeAt(1)),c=this.s2k.read(a.substr(2)),d=c+2;d<a.length?(this.encrypted=a.substr(d),this.sessionKeyEncryptionAlgorithm=b):this.sessionKeyAlgorithm=b},c.prototype.write=function(){var a=null===this.encrypted?this.sessionKeyAlgorithm:this.sessionKeyEncryptionAlgorithm,b=String.fromCharCode(this.version)+String.fromCharCode(e.write(e.symmetric,a))+this.s2k.write();return null!==this.encrypted&&(b+=this.encrypted),b},c.prototype.decrypt=function(a){var b=null!==this.sessionKeyEncryptionAlgorithm?this.sessionKeyEncryptionAlgorithm:this.sessionKeyAlgorithm,c=f.cipher[b].keySize,d=this.s2k.produce_key(a,c);if(null===this.encrypted)this.sessionKey=d;else{var g=f.cfb.decrypt(this.sessionKeyEncryptionAlgorithm,d,this.encrypted,!0);this.sessionKeyAlgorithm=e.read(e.symmetric,g[0].keyCodeAt()),this.sessionKey=g.substr(1)}},c.prototype.encrypt=function(a){var b=f.getKeyLength(this.sessionKeyEncryptionAlgorithm),c=this.s2k.produce_key(a,b),d=String.fromCharCode(e.write(e.symmetric,this.sessionKeyAlgorithm))+f.getRandomBytes(f.getKeyLength(this.sessionKeyAlgorithm));this.encrypted=f.cfb.encrypt(f.getPrefixRandom(this.sessionKeyEncryptionAlgorithm),this.sessionKeyEncryptionAlgorithm,c,d,!0)},c.prototype.postCloneTypeFix=function(){this.s2k=d.fromClone(this.s2k)}},{"../crypto":19,"../enums.js":30,"../type/s2k.js":60}],54:[function(a,b){function c(){this.tag=e.packet.symmetricallyEncrypted,this.encrypted=null,this.packets=null}b.exports=c;var d=a("../crypto"),e=a("../enums.js");c.prototype.read=function(a){this.encrypted=a},c.prototype.write=function(){return this.encrypted},c.prototype.decrypt=function(a,b){var c=d.cfb.decrypt(a,b,this.encrypted,!0);this.packets.read(c)},c.prototype.encrypt=function(a,b){var c=this.packets.write();this.encrypted=d.cfb.encrypt(d.getPrefixRandom(a),a,c,b,!0)}},{"../crypto":19,"../enums.js":30}],55:[function(a,b){function c(){this.tag=d.packet.trust}b.exports=c;var d=a("../enums.js");c.prototype.read=function(){}},{"../enums.js":30}],56:[function(a,b){function c(){this.tag=e.packet.userAttribute,this.attributes=[]}var d=(a("../util.js"),a("./packet.js")),e=a("../enums.js");b.exports=c,c.prototype.read=function(a){for(var b=0;b<a.length;){var c=d.readSimpleLength(a.substr(b));b+=c.offset,this.attributes.push(a.substr(b,c.len)),b+=c.len}},c.prototype.write=function(){for(var a="",b=0;b<this.attributes.length;b++)a+=d.writeSimpleLength(this.attributes[b].length),a+=this.attributes[b];return a},c.prototype.equals=function(a){return a&&a instanceof c?this.attributes.every(function(b,c){return b===a.attributes[c]}):!1}},{"../enums.js":30,"../util.js":61,"./packet.js":44}],57:[function(a,b){function c(){this.tag=e.packet.userid,this.userid=""}b.exports=c;var d=a("../util.js"),e=a("../enums.js");c.prototype.read=function(a){this.userid=d.decode_utf8(a)},c.prototype.write=function(){return d.encode_utf8(this.userid)}},{"../enums.js":30,"../util.js":61}],58:[function(a,b){function c(){this.bytes=""}b.exports=c;var d=a("../util.js");c.prototype.read=function(a){this.bytes=a.substr(0,8)},c.prototype.write=function(){return this.bytes},c.prototype.toHex=function(){return d.hexstrdump(this.bytes)},c.prototype.equals=function(a){return this.bytes==a.bytes},c.prototype.isNull=function(){return""===this.bytes},b.exports.mapToHex=function(a){return a.toHex()},b.exports.fromClone=function(a){var b=new c;return b.bytes=a.bytes,b}},{"../util.js":61}],59:[function(a,b){function c(){this.data=null}b.exports=c;var d=a("../crypto/public_key/jsbn.js"),e=a("../util.js");c.prototype.read=function(a){var b=a.charCodeAt(0)<<8|a.charCodeAt(1),c=Math.ceil(b/8),d=a.substr(2,c);return this.fromBytes(d),2+c},c.prototype.fromBytes=function(a){this.data=new d(e.hexstrdump(a),16)},c.prototype.toBytes=function(){return this.write().substr(2)},c.prototype.byteLength=function(){return this.toBytes().length},c.prototype.write=function(){return this.data.toMPI()},c.prototype.toBigInteger=function(){return this.data.clone()},c.prototype.fromBigInteger=function(a){this.data=a.clone()},b.exports.fromClone=function(a){a.data.copyTo=d.prototype.copyTo;var b=new d;a.data.copyTo(b);var e=new c;return e.data=b,e}},{"../crypto/public_key/jsbn.js":24,"../util.js":61}],60:[function(a,b){function c(){this.algorithm="sha256",this.type="iterated",this.c=96,this.salt=f.random.getRandomBytes(8)}b.exports=c;var d=a("../enums.js"),e=a("../util.js"),f=a("../crypto");c.prototype.get_count=function(){var a=6;return 16+(15&this.c)<<(this.c>>4)+a},c.prototype.read=function(a){var b=0;switch(this.type=d.read(d.s2k,a.charCodeAt(b++)),this.algorithm=d.read(d.hash,a.charCodeAt(b++)),this.type){case"simple":break;case"salted":this.salt=a.substr(b,8),b+=8;break;case"iterated":this.salt=a.substr(b,8),b+=8,this.c=a.charCodeAt(b++);break;case"gnu":if("GNU"!=a.substr(b,3))throw new Error("Unknown s2k type.");b+=3;var c=1e3+a.charCodeAt(b++);if(1001!=c)throw new Error("Unknown s2k gnu protection mode.");this.type=c;break;default:throw new Error("Unknown s2k type.")}return b},c.prototype.write=function(){var a=String.fromCharCode(d.write(d.s2k,this.type));switch(a+=String.fromCharCode(d.write(d.hash,this.algorithm)),this.type){case"simple":break;case"salted":a+=this.salt;break;case"iterated":a+=this.salt,a+=String.fromCharCode(this.c)}return a},c.prototype.produce_key=function(a,b){function c(b,c){var e=d.write(d.hash,c.algorithm);switch(c.type){case"simple":return f.hash.digest(e,b+a);case"salted":return f.hash.digest(e,b+c.salt+a);case"iterated":var g=[],h=c.get_count();for(data=c.salt+a;g.length*data.length<h;)g.push(data);return g=g.join(""),g.length>h&&(g=g.substr(0,h)),f.hash.digest(e,b+g)}}a=e.encode_utf8(a);for(var g="",h="";g.length<=b;)g+=c(h,this),h+=String.fromCharCode(0);return g.substr(0,b)},b.exports.fromClone=function(a){var b=new c;return this.algorithm=a.algorithm,this.type=a.type,this.c=a.c,this.salt=a.salt,b}},{"../crypto":19,"../enums.js":30,"../util.js":61}],61:[function(a,b){var c=a("./config");b.exports={readNumber:function(a){for(var b=0,c=0;c<a.length;c++)b<<=8,b+=a.charCodeAt(c);return b},writeNumber:function(a,b){for(var c="",d=0;b>d;d++)c+=String.fromCharCode(a>>8*(b-d-1)&255);return c},readDate:function(a){var b=this.readNumber(a),c=new Date;return c.setTime(1e3*b),c},writeDate:function(a){var b=Math.round(a.getTime()/1e3);return this.writeNumber(b,4)},emailRegEx:/^[+a-zA-Z0-9_.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,6}$/,hexdump:function(a){for(var b,c=[],d=a.length,e=0,f=0;d>e;){for(b=a.charCodeAt(e++).toString(16);b.length<2;)b="0"+b;c.push(" "+b),f++,f%32===0&&c.push("\n           ")}return c.join("")},hexstrdump:function(a){if(null===a)return"";for(var b,c=[],d=a.length,e=0;d>e;){for(b=a.charCodeAt(e++).toString(16);b.length<2;)b="0"+b;c.push(""+b)}return c.join("")},hex2bin:function(a){for(var b="",c=0;c<a.length;c+=2)b+=String.fromCharCode(parseInt(a.substr(c,2),16));return b},hexidump:function(a){for(var b,c=[],d=a.length,e=0;d>e;){for(b=a[e++].toString(16);b.length<2;)b="0"+b;c.push(""+b)}return c.join("")},encode_utf8:function(a){return unescape(encodeURIComponent(a))},decode_utf8:function(a){if("string"!=typeof a)throw new Error('Parameter "utf8" is not of type string');try{return decodeURIComponent(escape(a))}catch(b){return a}},bin2str:function(a){for(var b=[],c=0;c<a.length;c++)b[c]=String.fromCharCode(a[c]);return b.join("")},str2bin:function(a){for(var b=[],c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b},str2Uint8Array:function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b},Uint8Array2str:function(a){for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(a[c]);return b},calc_checksum:function(a){for(var b={s:0,add:function(a){this.s=(this.s+a)%65536}},c=0;c<a.length;c++)b.add(a.charCodeAt(c));return b.s},print_debug:function(a){c.debug&&console.log(a)},print_debug_hexstr_dump:function(a,b){c.debug&&(a+=this.hexstrdump(b),console.log(a))},getLeftNBits:function(a,b){var c=b%8;if(0===c)return a.substring(0,b/8);var d=(b-c)/8+1,e=a.substring(0,d);return this.shiftRight(e,8-c)},shiftRight:function(a,b){var c=util.str2bin(a);if(b%8===0)return a;for(var d=c.length-1;d>=0;d--)c[d]>>=b%8,d>0&&(c[d]|=c[d-1]<<8-b%8&255);return util.bin2str(c)},get_hashAlgorithmString:function(a){switch(a){case 1:return"MD5";case 2:return"SHA1";case 3:return"RIPEMD160";case 8:return"SHA256";case 9:return"SHA384";case 10:return"SHA512";case 11:return"SHA224"}return"unknown"}}},{"./config":4}],62:[function(a,b){function c(a){this.worker=new Worker(a||"openpgp.worker.js"),this.worker.onmessage=this.onMessage.bind(this),this.worker.onerror=function(a){throw new Error("Unhandled error in openpgp worker: "+a.message+" ("+a.filename+":"+a.lineno+")")},this.seedRandom(h),this.tasks=[]}var d=a("../crypto"),e=a("../packet"),f=a("../key.js"),g=a("../type/keyid.js"),h=(a("../enums.js"),5e4),i=2e4;c.prototype.onMessage=function(a){var b=a.data;switch(b.event){case"method-return":this.tasks.shift()(b.err?new Error(b.err):null,b.data);break;case"request-seed":this.seedRandom(i);break;default:throw new Error("Unknown Worker Event.")}},c.prototype.seedRandom=function(a){var b=this.getRandomBuffer(a);this.worker.postMessage({event:"seed-random",buf:b})},c.prototype.getRandomBuffer=function(a){if(!a)return null;var b=new Uint8Array(a);return d.random.getRandomValues(b),b},c.prototype.terminate=function(){this.worker.terminate()},c.prototype.encryptMessage=function(a,b,c){a=a.map(function(a){return a.toPacketlist()}),this.worker.postMessage({event:"encrypt-message",keys:a,text:b}),this.tasks.push(c)},c.prototype.signAndEncryptMessage=function(a,b,c,d){a=a.map(function(a){return a.toPacketlist()}),b=b.toPacketlist(),this.worker.postMessage({event:"sign-and-encrypt-message",publicKeys:a,privateKey:b,text:c}),this.tasks.push(d)},c.prototype.decryptMessage=function(a,b,c){a=a.toPacketlist(),this.worker.postMessage({event:"decrypt-message",privateKey:a,message:b}),this.tasks.push(c)},c.prototype.decryptAndVerifyMessage=function(a,b,c,d){a=a.toPacketlist(),b=b.map(function(a){return a.toPacketlist()}),this.worker.postMessage({event:"decrypt-and-verify-message",privateKey:a,publicKeys:b,message:c}),this.tasks.push(function(a,b){b&&(b.signatures=b.signatures.map(function(a){return a.keyid=g.fromClone(a.keyid),a})),d(a,b)})},c.prototype.signClearMessage=function(a,b,c){a=a.map(function(a){return a.toPacketlist()}),this.worker.postMessage({event:"sign-clear-message",privateKeys:a,text:b}),this.tasks.push(c)},c.prototype.verifyClearSignedMessage=function(a,b,c){a=a.map(function(a){return a.toPacketlist()}),this.worker.postMessage({event:"verify-clear-signed-message",publicKeys:a,message:b}),this.tasks.push(function(a,b){b&&(b.signatures=b.signatures.map(function(a){return a.keyid=g.fromClone(a.keyid),a})),c(a,b)})},c.prototype.generateKeyPair=function(a,b){this.worker.postMessage({event:"generate-key-pair",options:a}),this.tasks.push(function(a,c){if(c){var d=e.List.fromStructuredClone(c.key);c.key=new f.Key(d)}b(a,c)})},c.prototype.decryptKey=function(a,b,c){a=a.toPacketlist(),this.worker.postMessage({event:"decrypt-key",privateKey:a,password:b}),this.tasks.push(function(a,b){if(b){var d=e.List.fromStructuredClone(b);b=new f.Key(d)}c(a,b)})},c.prototype.decryptKeyPacket=function(a,b,c,d){a=a.toPacketlist(),this.worker.postMessage({event:"decrypt-key-packet",privateKey:a,keyIds:b,password:c}),this.tasks.push(function(a,b){if(b){var c=e.List.fromStructuredClone(b);b=new f.Key(c)}d(a,b)})},b.exports=c},{"../crypto":19,"../enums.js":30,"../key.js":32,"../packet":40,"../type/keyid.js":58}]},{},[31])(31)});

$(document).ready(function() {
    getDocumentReadyForUse($("#foki > li.active > a").attr("aria-controls"));
    $('iframe').iFrameResize({
        'autoResize': false,
        'heightCalculationMethod': 'documentElementScroll'
    });
    botProtection();
});

function tabs() {
    //return;
    $("#foki > li.tab-selector > a").each(function() {
        $(this).attr("href", "#" + $(this).attr("aria-controls"));
        $(this).attr("role", "tab");
        $(this).attr("data-toggle", "tab");
    });
    $("#foki > li.tab-selector > a").off();
    $("#foki > li.tab-selector > a").on("show.bs.tab", function(e) {
        var fokus = $(this).attr("aria-controls");
        var link = $("#" + fokus + "TabSelector a").attr("data-href");
        if ($("#" + fokus + "TabSelector").attr("data-loaded") != "1") {
            $.get(link, function(data) {
                $("#" + fokus + "TabSelector").attr("data-loaded", "1");
                $("#" + fokus).html(data);
                $("input[name=focus]").val($("#foki li.active a").attr("aria-controls"));
                getDocumentReadyForUse(fokus);
            });
        } else {
            getDocumentReadyForUse(fokus);
        }
    });
}

function getDocumentReadyForUse(fokus) {
    clickLog();
    popovers();
    if (fokus === "bilder") imageLoader();
    //pagination();
    tabs();
    theme();
    fokiChanger();
    pluginInfo();
    productWidget();
}

function pluginInfo() {
    if (localStorage) {
        if (localStorage.getItem('pluginInfo') == "off") $("#searchplugin").css("display", "none");
        $("#searchplugin").on('close.bs.alert', function() {
            $.get('/pluginClose');
            localStorage.setItem('pluginInfo', 'off');
        });
        $("#searchplugin a.btn").click(function() {
            $.get('/pluginInstall');
        });
    }
}

function theme() {
    if (localStorage) {
        var theme = localStorage.getItem("theme");
        if (theme != null) {
            if ((theme.match(/,/g) || []).length != 3) {
                localStorage.removeItem("theme");
            } else {
                theme = theme.split(",");
                $("#theme").attr("href", "/css/theme.css.php?r=" + theme[0] + "&g=" + theme[1] + "&b=" + theme[2] + "&a=" + theme[3]);
            }
        }
    }
}

function clickLog() {
    $(".result a.title, .result div.link-link a").off();
    $(".result a.title, .result div.link-link a").click(function() {
        $.get("/clickstats", {
            i: $("meta[name=p]").attr("content"),
            s: $(this).attr("data-hoster"),
            q: $("meta[name=q]").attr("content"),
            p: $(this).attr("data-count"),
            url: $(this).attr("href")
        });
    });
}

function popovers() {
    $("[data-toggle=popover]").each(function(e) {
        $(this).popover("destroy");
        $(this).popover({
            //html          :   true,
            //title         :   "<span class='glyphicon glyphicon-cog'></span> Optionen",
            content: $(this).parent().find(".content").html()
        });
    });
}

function pagination() {
    $(".pagination li:not(.active) > a").attr("href", "#");
    $(".pagination li.disabled > a").removeAttr("href");
    $(".pagination li:not(.active) > a").off();
    $(".pagination li:not(.active) > a").click(paginationHandler);
}

function paginationHandler() {
    var link = $(this).attr("data-href");
    if (link.length == 0) {
        return;
    }
    var tabPane = $(".tab-pane.active");
    $(tabPane).html("<div class=\"loader\"><img src=\"/img/ajax-loader.gif\" alt=\"\" /></div>");
    $.get(link, function(data) {
        $(tabPane).html(data);
        $(".pagination li:not(.active) > a").attr("href", "#");
        $(".pagination li.disabled > a").removeAttr("href");
        $(".pagination li:not(.active) > a").off();
        $(".pagination li:not(.active) > a").click(paginationHandler);
        getDocumentReadyForUse();
    });
}

function imageLoader() {
    if (typeof $("#container").masonry == "undefined") {
        return;
    }
    var $grid = $("#container").masonry({
        columnWidth: 150,
        itemSelector: '.item',
        gutter: 10,
        isFitWidth: true
    });
    $grid.imagesLoaded().progress(function(instance, image) {
        $grid.masonry('layout');
    });
}

function eliminateHost(host) {
    $(".result:not(.ad)").each(function(e) {
        var host2 = $(this).find(".link-link > a").attr("data-host");
        if (host2.indexOf(host) === 0) {
            $(this).css("display", "none");
        }
    });
}

function fokiChanger() {
    $("#fokiChanger ul > li").click(function() {
        document.location.href = $(this).attr("data-href");
    });
}
// Polyfill for form attribute
(function($) {
    /**
     * polyfill for html5 form attr
     */
    // detect if browser supports this
    var sampleElement = $('[form]').get(0);
    var isIE11 = !(window.ActiveXObject) && "ActiveXObject" in window;
    if (sampleElement && window.HTMLFormElement && sampleElement.form instanceof HTMLFormElement && !isIE11) {
        // browser supports it, no need to fix
        return;
    }
    /**
     * Append a field to a form
     *
     */
    $.fn.appendField = function(data) {
        // for form only
        if (!this.is('form')) return;
        // wrap data
        if (!$.isArray(data) && data.name && data.value) {
            data = [data];
        }
        var $form = this;
        // attach new params
        $.each(data, function(i, item) {
            $('<input/>').attr('type', 'hidden').attr('name', item.name).val(item.value).appendTo($form);
        });
        return $form;
    };
    /**
     * Find all input fields with form attribute point to jQuery object
     * 
     */
    $('form[id]').submit(function(e) {
        var $form = $(this);
        // serialize data
        var data = $('[form=' + $form.attr('id') + ']').serializeArray();
        // append data to form
        $form.appendField(data);
    }).each(function() {
        var form = this,
            $form = $(form),
            $fields = $('[form=' + $form.attr('id') + ']');
        $fields.filter('button, input').filter('[type=reset],[type=submit]').click(function() {
            var type = this.type.toLowerCase();
            if (type === 'reset') {
                // reset form
                form.reset();
                // for elements outside form
                $fields.each(function() {
                    this.value = this.defaultValue;
                    this.checked = this.defaultChecked;
                }).filter('select').each(function() {
                    $(this).find('option').each(function() {
                        this.selected = this.defaultSelected;
                    });
                });
            } else if (type.match(/^submit|image$/i)) {
                $(form).appendField({
                    name: this.name,
                    value: this.value
                }).submit();
            }
        });
    });
})(jQuery);

function botProtection() {
    if ($("meta[name=pqr]").length > 0) {
        var link = atob($("meta[name=pqr]").attr("content"));
        var hash = $("meta[name=pq]").attr("content");
        document.location.href = link + "&bot=" + hash;
    }
}

function productWidget() {
    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
    if (isMobile) {
        $('.lightSlider').lightSlider({
            item: 5,
            loop: false,
            slideMove: 2,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed: 600,
            pager: false,
            prevHtml: '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span>',
            nextHtml: '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span>',
            responsive: [{
                breakpoint: 1400,
                settings: {
                    item: 4,
                    slideMove: 2,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    item: 3,
                    slideMove: 2,
                }
            }, {
                breakpoint: 980,
                settings: {
                    item: 4,
                    slideMove: 2,
                }
            }, {
                breakpoint: 720,
                settings: {
                    item: 3,
                    slideMove: 1
                }
            }, {
                breakpoint: 520,
                settings: {
                    item: 2,
                    slideMove: 1,
                }
            }, ]
        });
    } else {
        $('.lightSlider').lightSlider({
            item: 5,
            loop: false,
            slideMove: 2,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed: 600,
            pager: false,
            enableTouch: false,
            enableDrag: false,
            prevHtml: '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span>',
            nextHtml: '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span>',
            responsive: [{
                breakpoint: 1400,
                settings: {
                    item: 4,
                    slideMove: 2,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    item: 3,
                    slideMove: 2,
                }
            }, {
                breakpoint: 980,
                settings: {
                    item: 4,
                    slideMove: 2,
                }
            }, {
                breakpoint: 720,
                settings: {
                    item: 3,
                    slideMove: 1
                }
            }, {
                breakpoint: 520,
                settings: {
                    item: 2,
                    slideMove: 1,
                }
            }, ]
        });
    }
    $(".lightSliderContainer").removeClass("hidden");
}
$(document).ready(function() {
    // checkPlugin();
    if (location.href.indexOf("#plugin-modal") > -1) {
        $("#plugin-modal").modal("show");
    }
    $("button").popover();
    if (localStorage) {
        var theme = localStorage.getItem("theme");
        if (theme != null) {
            if ((theme.match(/,/g) || []).length != 3) {
                localStorage.removeItem("theme");
            } else {
                theme = theme.split(",");
                $("#theme").attr("href", "/css/theme.css.php?r=" + theme[0] + "&g=" + theme[1] + "&b=" + theme[2] + "&a=" + theme[3]);
            }
        }
        if (localStorage.getItem("pers") && !isUseOnce()) {
            setSettings();
        }
    }
    $("button").on("shown.bs.popover", function() {
        $("#color-chooser a").click(function() {
            var theme = $(this).attr("data-rgba");
            if (localStorage) {
                localStorage.setItem("theme", theme);
                location.href = "/";
            }
        });
    });
    $("#mobileFoki").change(function() {
        var fokus = $("#mobileFoki > option:selected").val();
        if (fokus == "angepasst") window.location = "./settings/";
        else window.location = "./?focus=" + fokus; //$("#mobileFoki > option:selected").val());
    });
    if ($("fieldset#foki.mobile").length) {
        $("fieldset#foki.mobile label#anpassen-label").click(function() {
            window.location = "./settings/";
        });
    }
    $("#anpassen-label").click(function() {
        window.location = "./settings/";
    });
});

function setSettings() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        if (key.startsWith("param_") && !key.endsWith("lang")) {
            key = key.substring(key.indexOf("param_") + 6);
            $("#searchForm").append("<input type=\"hidden\" name=\"" + key + "\" value=\"" + value + "\">");
        }
        $("#foki input[type=radio]#angepasst").attr("checked", true);
    }
    if ($("fieldset#foki.mobile").length) {
        $("fieldset.mobile input#bilder").val("angepasst");
        $("fieldset.mobile input#bilder").prop("checked", true);
        $("fieldset.mobile input#bilder").attr("id", "angepasst");
        $("fieldset.mobile label#bilder-label").attr("id", "anpassen-label");
        $("fieldset.mobile label#anpassen-label").attr("for", "angepasst");
        $("fieldset.mobile label#anpassen-label span.glyphicon").attr("class", "glyphicon glyphicon-cog");
        $("fieldset.mobile label#anpassen-label span.content").html("angepasst");
        console.log("test");
    }
}
//Polyfill for form attribute
(function($) {
    /**
     * polyfill for html5 form attr
     */
    // detect if browser supports this
    var sampleElement = $('[form]').get(0);
    var isIE11 = !(window.ActiveXObject) && "ActiveXObject" in window;
    if (sampleElement && window.HTMLFormElement && sampleElement.form instanceof HTMLFormElement && !isIE11) {
        // browser supports it, no need to fix
        return;
    }
    /**
     * Append a field to a form
     *
     */
    $.fn.appendField = function(data) {
        // for form only
        if (!this.is('form')) return;
        // wrap data
        if (!$.isArray(data) && data.name && data.value) {
            data = [data];
        }
        var $form = this;
        // attach new params
        $.each(data, function(i, item) {
            $('<input/>').attr('type', 'hidden').attr('name', item.name).val(item.value).appendTo($form);
        });
        return $form;
    };
    /**
     * Find all input fields with form attribute point to jQuery object
     * 
     */
    $('form[id]').submit(function(e) {
        var $form = $(this);
        // serialize data
        var data = $('[form=' + $form.attr('id') + ']').serializeArray();
        // append data to form
        $form.appendField(data);
    }).each(function() {
        var form = this,
            $form = $(form),
            $fields = $('[form=' + $form.attr('id') + ']');
        $fields.filter('button, input').filter('[type=reset],[type=submit]').click(function() {
            var type = this.type.toLowerCase();
            if (type === 'reset') {
                // reset form
                form.reset();
                // for elements outside form
                $fields.each(function() {
                    this.value = this.defaultValue;
                    this.checked = this.defaultChecked;
                }).filter('select').each(function() {
                    $(this).find('option').each(function() {
                        this.selected = this.defaultSelected;
                    });
                });
            } else if (type.match(/^submit|image$/i)) {
                $(form).appendField({
                    name: this.name,
                    value: this.value
                }).submit();
            }
        });
    });
})(jQuery);
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;
// Prüft, ob der URL-Parameter "usage" auf "once" gesetzt ist.
function isUseOnce() {
    var url = document.location.search;
    var pos = url.indexOf("usage=");
    if (pos >= 0 && url.substring(pos + 6, pos + 11) == "once") return true;
    return false;
}
$(document).ready(function() {
    // Wenn LocalStorage verfügbar ist, geben wir die Möglichkeit die Einstellungen dort zu speichern
    tickOptions();
    if (localStorage) {
        $("#save").removeClass("hidden");
        if (localStorage.getItem("pers")) {
            $("#reset").removeClass("hidden");
        }
        $("#save").click(function() {
            resetOptions();
            localStorage.setItem("pers", true);
            $("input[type=checkbox]:checked, input[type=hidden]").each(function(el) {
                localStorage.setItem($(this).attr("name"), $(this).val());
            });
            $("select").each(function(el) {
                localStorage.setItem($(this).attr("name"), $(this).val());
            });
            document.location.href = $("#save").attr("data-href");
        });
        $("#reset").click(function() {
            resetOptions();
            document.location.href = $("#save").attr("data-href");
        });
    }
    $(".checker").click(function() {
        var selector = "." + $(this).attr("data-type");
        if ($(selector + " input:checked").length) {
            $(selector + " input").prop("checked", false);
        } else {
            $(selector + " input").prop("checked", true);
        }
    });
    $(".allUnchecker").click(function() {
        $(".focusCheckbox").prop("checked", false);
    });
    $("#unten").click(function() {
        $("#settings-form").append("<input type=\"hidden\" name=\"usage\" value=\"once\">");
        if (isEnglish()) {
            alert("On the following startpage your settings are saved one-time. They will be lost after your first search. Though if you want to save them, you can create a bookmark for the generated startpage.");
        } else {
            alert("Auf der folgenden Startseite sind Ihre Einstellungen nun einmalig gespeichert. Nach Ihrer ersten Suche sind diese wieder verloren. Wenn Sie diese speichern möchten, können Sie sich allerdings ein Lesezeichnen für die generierte Startseite einrichten.");
        }
    });
    $("#plugin").click(function() {
        $("form").attr('action', $("#save").attr("data-href") + '#plugin-modal');
        if (isEnglish()) {
            alert("Your browser plugin with personal settings was generated. Please follow the instructions on the following page to install it. Notice that beforehand you might have to delete a former MetaGer plugin.");
        } else {
            alert("Ihr Browserplugin mit den persönlichen Sucheinstellungen wurde generiert. Folgen Sie bitte der Anleitung auf der folgenden Seite um es zu installieren. Beachten Sie: Zuvor sollten Sie ein eventuell bereits installiertes MetaGer-Plugin entfernen.");
        }
    });
});

function tickOptions() {
    if (localStorage && localStorage.getItem("pers")) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            if (key.startsWith("param_")) {
                if ($("input[name=" + key + "]").length) {
                    $("input[name=" + key + "]").attr("checked", "");
                } else {
                    $("select[name=" + key + "] > option[value=" + value + "]").attr("selected", true);
                }
            }
        }
    } else {
        $("div.web input").attr("checked", true);
    }
}

function resetOptions() {
    localStorage.removeItem("pers");
    var keys = [];
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i)
        keys.push(key);
    }
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key.startsWith("param_" || key.startsWith("focus"))) {
            localStorage.removeItem(key);
        }
    }
}

function isEnglish() {
    if (window.location.href.indexOf('/en/') == -1) {
        return false;
    } else {
        return true;
    }
}
/*! iFrame Resizer (iframeSizer.min.js ) - v3.5.5 - 2016-06-16
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2016 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(a){"use strict";function b(b,c,d){"addEventListener"in a?b.addEventListener(c,d,!1):"attachEvent"in a&&b.attachEvent("on"+c,d)}function c(b,c,d){"removeEventListener"in a?b.removeEventListener(c,d,!1):"detachEvent"in a&&b.detachEvent("on"+c,d)}function d(){var b,c=["moz","webkit","o","ms"];for(b=0;b<c.length&&!N;b+=1)N=a[c[b]+"RequestAnimationFrame"];N||h("setup","RequestAnimationFrame not supported")}function e(b){var c="Host page: "+b;return a.top!==a.self&&(c=a.parentIFrame&&a.parentIFrame.getId?a.parentIFrame.getId()+": "+b:"Nested host page: "+b),c}function f(a){return K+"["+e(a)+"]"}function g(a){return P[a]?P[a].log:G}function h(a,b){k("log",a,b,g(a))}function i(a,b){k("info",a,b,g(a))}function j(a,b){k("warn",a,b,!0)}function k(b,c,d,e){!0===e&&"object"==typeof a.console&&console[b](f(c),d)}function l(d){function e(){function a(){s(V),p(W)}g("Height"),g("Width"),t(a,V,"init")}function f(){var a=U.substr(L).split(":");return{iframe:P[a[0]].iframe,id:a[0],height:a[1],width:a[2],type:a[3]}}function g(a){var b=Number(P[W]["max"+a]),c=Number(P[W]["min"+a]),d=a.toLowerCase(),e=Number(V[d]);h(W,"Checking "+d+" is in range "+c+"-"+b),c>e&&(e=c,h(W,"Set "+d+" to min value")),e>b&&(e=b,h(W,"Set "+d+" to max value")),V[d]=""+e}function k(){function a(){function a(){var a=0,d=!1;for(h(W,"Checking connection is from allowed list of origins: "+c);a<c.length;a++)if(c[a]===b){d=!0;break}return d}function d(){var a=P[W].remoteHost;return h(W,"Checking connection is from: "+a),b===a}return c.constructor===Array?a():d()}var b=d.origin,c=P[W].checkOrigin;if(c&&""+b!="null"&&!a())throw new Error("Unexpected message received from: "+b+" for "+V.iframe.id+". Message was: "+d.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function l(){return K===(""+U).substr(0,L)&&U.substr(L).split(":")[0]in P}function w(){var a=V.type in{"true":1,"false":1,undefined:1};return a&&h(W,"Ignoring init message from meta parent page"),a}function y(a){return U.substr(U.indexOf(":")+J+a)}function z(a){h(W,"MessageCallback passed: {iframe: "+V.iframe.id+", message: "+a+"}"),N("messageCallback",{iframe:V.iframe,message:JSON.parse(a)}),h(W,"--")}function A(){var b=document.body.getBoundingClientRect(),c=V.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:c.height,iframeWidth:c.width,clientHeight:Math.max(document.documentElement.clientHeight,a.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,a.innerWidth||0),offsetTop:parseInt(c.top-b.top,10),offsetLeft:parseInt(c.left-b.left,10),scrollTop:a.pageYOffset,scrollLeft:a.pageXOffset})}function B(a,b){function c(){u("Send Page Info","pageInfo:"+A(),a,b)}x(c,32)}function C(){function d(b,c){function d(){P[g]?B(P[g].iframe,g):e()}["scroll","resize"].forEach(function(e){h(g,b+e+" listener for sendPageInfo"),c(a,e,d)})}function e(){d("Remove ",c)}function f(){d("Add ",b)}var g=W;f(),P[g].stopPageInfo=e}function D(){P[W]&&P[W].stopPageInfo&&(P[W].stopPageInfo(),delete P[W].stopPageInfo)}function E(){var a=!0;return null===V.iframe&&(j(W,"IFrame ("+V.id+") not found"),a=!1),a}function F(a){var b=a.getBoundingClientRect();return o(W),{x:Math.floor(Number(b.left)+Number(M.x)),y:Math.floor(Number(b.top)+Number(M.y))}}function G(b){function c(){M=g,H(),h(W,"--")}function d(){return{x:Number(V.width)+f.x,y:Number(V.height)+f.y}}function e(){a.parentIFrame?a.parentIFrame["scrollTo"+(b?"Offset":"")](g.x,g.y):j(W,"Unable to scroll to requested position, window.parentIFrame not found")}var f=b?F(V.iframe):{x:0,y:0},g=d();h(W,"Reposition requested from iFrame (offset x:"+f.x+" y:"+f.y+")"),a.top!==a.self?e():c()}function H(){!1!==N("scrollCallback",M)?p(W):q()}function I(b){function c(){var a=F(g);h(W,"Moving to in page link (#"+e+") at x: "+a.x+" y: "+a.y),M={x:a.x,y:a.y},H(),h(W,"--")}function d(){a.parentIFrame?a.parentIFrame.moveToAnchor(e):h(W,"In page link #"+e+" not found and window.parentIFrame not found")}var e=b.split("#")[1]||"",f=decodeURIComponent(e),g=document.getElementById(f)||document.getElementsByName(f)[0];g?c():a.top!==a.self?d():h(W,"In page link #"+e+" not found")}function N(a,b){return m(W,a,b)}function O(){switch(P[W].firstRun&&T(),V.type){case"close":n(V.iframe);break;case"message":z(y(6));break;case"scrollTo":G(!1);break;case"scrollToOffset":G(!0);break;case"pageInfo":B(P[W].iframe,W),C();break;case"pageInfoStop":D();break;case"inPageLink":I(y(9));break;case"reset":r(V);break;case"init":e(),N("initCallback",V.iframe),N("resizedCallback",V);break;default:e(),N("resizedCallback",V)}}function Q(a){var b=!0;return P[a]||(b=!1,j(V.type+" No settings for "+a+". Message was: "+U)),b}function S(){for(var a in P)u("iFrame requested init",v(a),document.getElementById(a),a)}function T(){P[W].firstRun=!1}var U=d.data,V={},W=null;"[iFrameResizerChild]Ready"===U?S():l()?(V=f(),W=R=V.id,!w()&&Q(W)&&(h(W,"Received: "+U),E()&&k()&&O())):i(W,"Ignored: "+U)}function m(a,b,c){var d=null,e=null;if(P[a]){if(d=P[a][b],"function"!=typeof d)throw new TypeError(b+" on iFrame["+a+"] is not a function");e=d(c)}return e}function n(a){var b=a.id;h(b,"Removing iFrame: "+b),a.parentNode.removeChild(a),m(b,"closedCallback",b),h(b,"--"),delete P[b]}function o(b){null===M&&(M={x:void 0!==a.pageXOffset?a.pageXOffset:document.documentElement.scrollLeft,y:void 0!==a.pageYOffset?a.pageYOffset:document.documentElement.scrollTop},h(b,"Get page position: "+M.x+","+M.y))}function p(b){null!==M&&(a.scrollTo(M.x,M.y),h(b,"Set page position: "+M.x+","+M.y),q())}function q(){M=null}function r(a){function b(){s(a),u("reset","reset",a.iframe,a.id)}h(a.id,"Size reset requested by "+("init"===a.type?"host page":"iFrame")),o(a.id),t(b,a,"reset")}function s(a){function b(b){a.iframe.style[b]=a[b]+"px",h(a.id,"IFrame ("+e+") "+b+" set to "+a[b]+"px")}function c(b){H||"0"!==a[b]||(H=!0,h(e,"Hidden iFrame detected, creating visibility listener"),y())}function d(a){b(a),c(a)}var e=a.iframe.id;P[e]&&(P[e].sizeHeight&&d("height"),P[e].sizeWidth&&d("width"))}function t(a,b,c){c!==b.type&&N?(h(b.id,"Requesting animation frame"),N(a)):a()}function u(a,b,c,d){function e(){var e=P[d].targetOrigin;h(d,"["+a+"] Sending msg to iframe["+d+"] ("+b+") targetOrigin: "+e),c.contentWindow.postMessage(K+b,e)}function f(){i(d,"["+a+"] IFrame("+d+") not found"),P[d]&&delete P[d]}function g(){c&&"contentWindow"in c&&null!==c.contentWindow?e():f()}d=d||c.id,P[d]&&g()}function v(a){return a+":"+P[a].bodyMarginV1+":"+P[a].sizeWidth+":"+P[a].log+":"+P[a].interval+":"+P[a].enablePublicMethods+":"+P[a].autoResize+":"+P[a].bodyMargin+":"+P[a].heightCalculationMethod+":"+P[a].bodyBackground+":"+P[a].bodyPadding+":"+P[a].tolerance+":"+P[a].inPageLinks+":"+P[a].resizeFrom+":"+P[a].widthCalculationMethod}function w(a,c){function d(){function b(b){1/0!==P[w][b]&&0!==P[w][b]&&(a.style[b]=P[w][b]+"px",h(w,"Set "+b+" = "+P[w][b]+"px"))}function c(a){if(P[w]["min"+a]>P[w]["max"+a])throw new Error("Value for min"+a+" can not be greater than max"+a)}c("Height"),c("Width"),b("maxHeight"),b("minHeight"),b("maxWidth"),b("minWidth")}function e(){var a=c&&c.id||S.id+F++;return null!==document.getElementById(a)&&(a+=F++),a}function f(b){return R=b,""===b&&(a.id=b=e(),G=(c||{}).log,R=b,h(b,"Added missing iframe ID: "+b+" ("+a.src+")")),b}function g(){h(w,"IFrame scrolling "+(P[w].scrolling?"enabled":"disabled")+" for "+w),a.style.overflow=!1===P[w].scrolling?"hidden":"auto",a.scrolling=!1===P[w].scrolling?"no":"yes"}function i(){("number"==typeof P[w].bodyMargin||"0"===P[w].bodyMargin)&&(P[w].bodyMarginV1=P[w].bodyMargin,P[w].bodyMargin=""+P[w].bodyMargin+"px")}function k(){var b=P[w].firstRun,c=P[w].heightCalculationMethod in O;!b&&c&&r({iframe:a,height:0,width:0,type:"init"})}function l(){Function.prototype.bind&&(P[w].iframe.iFrameResizer={close:n.bind(null,P[w].iframe),resize:u.bind(null,"Window resize","resize",P[w].iframe),moveToAnchor:function(a){u("Move to anchor","moveToAnchor:"+a,P[w].iframe,w)},sendMessage:function(a){a=JSON.stringify(a),u("Send Message","message:"+a,P[w].iframe,w)}})}function m(c){function d(){u("iFrame.onload",c,a),k()}b(a,"load",d),u("init",c,a)}function o(a){if("object"!=typeof a)throw new TypeError("Options is not an object")}function p(a){for(var b in S)S.hasOwnProperty(b)&&(P[w][b]=a.hasOwnProperty(b)?a[b]:S[b])}function q(a){return""===a||"file://"===a?"*":a}function s(b){b=b||{},P[w]={firstRun:!0,iframe:a,remoteHost:a.src.split("/").slice(0,3).join("/")},o(b),p(b),P[w].targetOrigin=!0===P[w].checkOrigin?q(P[w].remoteHost):"*"}function t(){return w in P&&"iFrameResizer"in a}var w=f(a.id);t()?j(w,"Ignored iFrame, already setup."):(s(c),g(),d(),i(),m(v(w)),l())}function x(a,b){null===Q&&(Q=setTimeout(function(){Q=null,a()},b))}function y(){function b(){function a(a){function b(b){return"0px"===P[a].iframe.style[b]}function c(a){return null!==a.offsetParent}c(P[a].iframe)&&(b("height")||b("width"))&&u("Visibility change","resize",P[a].iframe,a)}for(var b in P)a(b)}function c(a){h("window","Mutation observed: "+a[0].target+" "+a[0].type),x(b,16)}function d(){var a=document.querySelector("body"),b={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},d=new e(c);d.observe(a,b)}var e=a.MutationObserver||a.WebKitMutationObserver;e&&d()}function z(a){function b(){B("Window "+a,"resize")}h("window","Trigger event: "+a),x(b,16)}function A(){function a(){B("Tab Visable","resize")}"hidden"!==document.visibilityState&&(h("document","Trigger event: Visiblity change"),x(a,16))}function B(a,b){function c(a){return"parent"===P[a].resizeFrom&&P[a].autoResize&&!P[a].firstRun}for(var d in P)c(d)&&u(a,b,document.getElementById(d),d)}function C(){b(a,"message",l),b(a,"resize",function(){z("resize")}),b(document,"visibilitychange",A),b(document,"-webkit-visibilitychange",A),b(a,"focusin",function(){z("focus")}),b(a,"focus",function(){z("focus")})}function D(){function a(a,c){function d(){if(!c.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==c.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+c.tagName+">")}c&&(d(),w(c,a),b.push(c))}var b;return d(),C(),function(c,d){switch(b=[],typeof d){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(d||"iframe"),a.bind(void 0,c));break;case"object":a(c,d);break;default:throw new TypeError("Unexpected data type ("+typeof d+")")}return b}}function E(a){a.fn?a.fn.iFrameResize=function(a){function b(b,c){w(c,a)}return this.filter("iframe").each(b).end()}:i("","Unable to bind to jQuery, it is not fully loaded.")}var F=0,G=!1,H=!1,I="message",J=I.length,K="[iFrameSizer]",L=K.length,M=null,N=a.requestAnimationFrame,O={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},P={},Q=null,R="Host Page",S={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){j("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}};a.jQuery&&E(jQuery),"function"==typeof define&&define.amd?define([],D):"object"==typeof module&&"object"==typeof module.exports?module.exports=D():a.iFrameResize=a.iFrameResize||D()}(window||{});
//# sourceMappingURL=iframeResizer.map
//# sourceMappingURL=all.js.map
