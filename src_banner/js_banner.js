/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};
  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
window.Drupal = {
  behaviors: {},
  locale: {}
};
(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };
  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };
  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;
        case '!':
          processedArgs[key] = args[key];
          break;
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }
    if (keys.length === 0) {
      return str;
    }
    var key = keys.pop();
    var fragments = str.split(key);
    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }
    return fragments.join(args[key]);
  };
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }
    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };
  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');
    try {
      url = decodeURIComponent(url);
    } catch (e) {}
    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };
  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}
    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }
    return translations[index];
  };
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };
  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;
    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };
  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
      deprecatedProperty = _ref2.deprecatedProperty,
      message = _ref2.message;
    if (!Proxy || !Reflect) {
      return target;
    }
    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }
        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };
  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };
  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
if (window.jQuery) {
  jQuery.noConflict();
}
document.documentElement.className += ' js';
(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };
  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/**
 * @file Common data layer helper.
 */

(function () {
  Drupal.behaviors.dataLayer = {

    /**
     * The language prefix list (no blank).
     *
     * @return {array}
     */
    langPrefixes: function langPrefixes() {
      var languages = Drupal.settings.dataLayer.languages,
          langList = [];

      for (var lang in languages) {
        if (languages[lang].prefix !== '') {
          langList.push(languages[lang].prefix);
        }
      }
      return langList;
    },

    /**
     * Drupal behavior.
     */
    attach: function() { return }

  };
})();
;
!function r(a,n,i){function o(t,e){if(!n[t]){if(!a[t]){var s="function"==typeof require&&require;if(!e&&s)return s(t,!0);if(c)return c(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}s=n[t]={exports:{}},a[t][0].call(s.exports,function(e){return o(a[t][1][e]||e)},s,s.exports,r,a,n,i)}return n[t].exports}for(var c="function"==typeof require&&require,e=0;e<i.length;e++)o(i[e]);return o}({1:[function(e,t,s){"use strict";if("document"in window.self){if(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g")))if("Element"in(n=window.self)){var r="classList",a="prototype",n=n.Element[a],i=Object,o=String[a].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[a].indexOf||function(e){for(var t=0,s=this.length;t<s;t++)if(t in this&&this[t]===e)return t;return-1},l=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},u=function(e,t){if(""===t)throw new l("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new l("INVALID_CHARACTER_ERR","String contains an invalid character");return c.call(e,t)},d=function(e){for(var t=o.call(e.getAttribute("class")||""),s=t?t.split(/\s+/):[],r=0,a=s.length;r<a;r++)this.push(s[r]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},p=d[a]=[],b=function(){return new d(this)};if(l[a]=Error[a],p.item=function(e){return this[e]||null},p.contains=function(e){return-1!==u(this,e+="")},p.add=function(){for(var e,t=arguments,s=0,r=t.length,a=!1;-1===u(this,e=t[s]+"")&&(this.push(e),a=!0),++s<r;);a&&this._updateClassName()},p.remove=function(){var e,t,s=arguments,r=0,a=s.length,n=!1;do{for(t=u(this,e=s[r]+"");-1!==t;)this.splice(t,1),n=!0,t=u(this,e)}while(++r<a);n&&this._updateClassName()},p.toggle=function(e,t){var s=this.contains(e+=""),r=s?!0!==t&&"remove":!1!==t&&"add";return r&&this[r](e),!0===t||!1===t?t:!s},p.toString=function(){return this.join(" ")},i.defineProperty){p={get:b,enumerable:!0,configurable:!0};try{i.defineProperty(n,r,p)}catch(e){void 0!==e.number&&-2146823252!==e.number||(p.enumerable=!1,i.defineProperty(n,r,p))}}else i[a].__defineGetter__&&n.__defineGetter__(r,b)}(p=document.createElement("_")).classList.add("c1","c2"),p.classList.contains("c2")||((i=function(e){var r=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){for(var t=arguments.length,s=0;s<t;s++)r.call(this,arguments[s])}})("add"),i("remove")),p.classList.toggle("c3",!1),p.classList.contains("c3")&&(f=DOMTokenList.prototype.toggle,DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:f.call(this,e)})}var f},{}],2:[function(e,t,s){"use strict";var r;"function"!=typeof(r=window.Element.prototype).matches&&(r.matches=r.msMatchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),s=0;t[s]&&t[s]!==this;)++s;return Boolean(t[s])}),"function"!=typeof r.closest&&(r.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})},{}],3:[function(e,t,s){"use strict";for(var r={polyfill:function(){if(!("KeyboardEvent"in window)||"key"in KeyboardEvent.prototype)return!1;var e={get:function(e){var t=r.keys[this.which||this.keyCode];return t=Array.isArray(t)?t[+this.shiftKey]:t}};return Object.defineProperty(KeyboardEvent.prototype,"key",e),e},keys:{3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"}},a=1;a<25;a++)r.keys[111+a]="F"+a;var n="";for(a=65;a<91;a++)n=String.fromCharCode(a),r.keys[a]=[n.toLowerCase(),n.toUpperCase()];"function"==typeof define&&define.amd?define("keyboardevent-key-polyfill",r):void 0!==s&&void 0!==t?t.exports=r:window&&(window.keyboardeventKeyPolyfill=r)},{}],4:[function(e,t,s){"use strict";var c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(Object.assign){var e=new String("abc");if(e[5]="de","5"!==Object.getOwnPropertyNames(e)[0]){for(var t={},s=0;s<10;s++)t["_"+String.fromCharCode(s)]=s;var r,a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"===a.join(""))return r={},"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")?1:void 0}}}catch(e){}}()?Object.assign:function(e,t){for(var s,r=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var n in s=Object(arguments[a]))l.call(s,n)&&(r[n]=s[n]);if(c)for(var i=c(s),o=0;o<i.length;o++)u.call(s,i[o])&&(r[i[o]]=s[i[o]])}return r}},{}],5:[function(e,t,s){"use strict";const c=e("object-assign"),l=e("../delegate"),u=e("../delegateAll"),d=/^(.+):delegate\((.+)\)$/;function p(e,t){var s=e[t];return delete e[t],s}t.exports=function(o,e){const s=Object.keys(o).reduce(function(e,t){s=o[t=t],(i=t.match(d))&&(t=i[1],r=i[2]),"object"==typeof s&&(a={capture:p(s,"capture"),passive:p(s,"passive")}),n={selector:r,delegate:"object"==typeof s?u(s):r?l(r,s):s,options:a};var s,r,a,n,i=-1<t.indexOf(" ")?t.split(" ").map(function(e){return c({type:e},n)}):(n.type=t,[n]);return e.concat(i)},[]);return c({add:function(t){s.forEach(function(e){t.addEventListener(e.type,e.delegate,e.options)})},remove:function(t){s.forEach(function(e){t.removeEventListener(e.type,e.delegate,e.options)})}},e)}},{"../delegate":7,"../delegateAll":8,"object-assign":4}],6:[function(e,t,s){"use strict";t.exports=function(e){return function(t){return e.some(function(e){return!1===e.call(this,t)},this)}}},{}],7:[function(e,t,s){"use strict";e("element-closest"),t.exports=function(s,r){return function(e){var t=e.target.closest(s);if(t)return r.call(t,e)}}},{"element-closest":2}],8:[function(e,t,s){"use strict";const r=e("../delegate"),a=e("../compose");t.exports=function(s){var e=Object.keys(s);return 1===e.length&&"*"===e[0]?s["*"]:(e=e.reduce(function(e,t){return e.push(r(t,s[t])),e},[]),a(e))}},{"../compose":6,"../delegate":7}],9:[function(e,t,s){"use strict";t.exports=function(t,s){return function(e){if(t!==e.target&&!t.contains(e.target))return s.call(this,e)}}},{}],10:[function(e,t,s){"use strict";t.exports={behavior:e("./behavior"),delegate:e("./delegate"),delegateAll:e("./delegateAll"),ignore:e("./ignore"),keymap:e("./keymap")}},{"./behavior":5,"./delegate":7,"./delegateAll":8,"./ignore":9,"./keymap":11}],11:[function(e,t,s){"use strict";e("keyboardevent-key-polyfill");const n={Alt:"altKey",Control:"ctrlKey",Ctrl:"ctrlKey",Shift:"shiftKey"};t.exports=function(a){const e=Object.keys(a).some(function(e){return-1<e.indexOf("+")});return function(s){var r=function(e,t){var s=e.key;if(t)for(var r in n)!0===e[n[r]]&&(s=[r,s].join("+"));return s}(s,e);return[r,r.toLowerCase()].reduce(function(e,t){return e=t in a?a[r].call(this,s):e},void 0)}},t.exports.MODIFIERS=n},{"keyboardevent-key-polyfill":3}],12:[function(e,t,s){"use strict";t.exports=function(t,s){function r(e){return e.currentTarget.removeEventListener(e.type,r,s),t.call(this,e)}return r}},{}],13:[function(e,t,s){"use strict";var r=/(^\s+)|(\s+$)/g,a=/\s+/,n=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(r,"")};t.exports=function(e,t){if("string"!=typeof e)throw new Error("Expected a string but got "+typeof e);var s=((t=t||window.document).getElementById||function(e){return this.querySelector('[id="'+e.replace(/"/g,'\\"')+'"]')}).bind(t);return 1===(e=n(e).split(a)).length&&""===e[0]?[]:e.map(function(e){var t=s(e);if(t)return t;throw new Error('no element with id: "'+e+'"')})}},{}],14:[function(e,t,s){"use strict";var r=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/toggle-form-input");var n=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];t.exports=r({[n]:{[`.${e}-show-password`]:function(e){e.preventDefault(),a(this)}}})},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/events":37,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/toggle-form-input":56}],15:[function(e,t,s){"use strict";const r=e("../../uswds-core/src/js/utils/select");var a=e("../../uswds-core/src/js/utils/behavior");const n=e("../../uswds-core/src/js/utils/toggle"),i=e("../../uswds-core/src/js/utils/is-in-viewport");var o=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const c=`.${e}-accordion, .${e}-accordion--bordered`,l=`.${e}-accordion__button[aria-controls]:not(${`.${e}-banner__button`})`,u="aria-expanded",d=t=>{return r(l,t).filter(e=>e.closest(c)===t)},p=(t,e)=>{var s=t.closest(c);if(!s)throw new Error(l+" is missing outer "+c);var e=n(t,e),r=s.hasAttribute("data-allow-multiple");e&&!r&&d(s).forEach(e=>{e!==t&&n(e,!1)})};e=a({[o]:{[l](){p(this),"true"!==this.getAttribute(u)||i(this)||this.scrollIntoView()}}},{init(e){r(l,e).forEach(e=>{var t="true"===e.getAttribute(u);p(e,t)})},ACCORDION:c,BUTTON:l,show:e=>p(e,!0),hide:e=>p(e,!1),toggle:p,getButtons:d});t.exports=e},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/events":37,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/is-in-viewport":49,"../../uswds-core/src/js/utils/select":54,"../../uswds-core/src/js/utils/toggle":57}],16:[function(e,t,s){"use strict";var r=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select");var n=e("../../uswds-core/src/js/events")["CLICK"],i=e("../../uswds-core/src/js/config")["prefix"];const o=e("../../uswds-core/src/js/utils/toggle"),c=`.${i}-banner__header`,l=i+"-banner__header--expanded",u=c+" [aria-controls]";t.exports=r({[n]:{[u]:function(e){e.preventDefault();e=e.target.closest(u);o(e),this.closest(c).classList.toggle(l)}}},{init(e){a(u,e).forEach(e=>{var t="true"===e.getAttribute(l);o(e,t)})}})},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/events":37,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/select":54,"../../uswds-core/src/js/utils/toggle":57}],17:[function(e,t,s){"use strict";var r=e("receptor/keymap"),e=e("../../uswds-core/src/js/utils/behavior")({keydown:{'a[class*="usa-button"]':r({" ":e=>{e.preventDefault(),e.target.click()}})}});t.exports=e},{"../../uswds-core/src/js/utils/behavior":46,"receptor/keymap":11}],18:[function(e,t,s){"use strict";const r=e("../../uswds-core/src/js/utils/select");var a=e("../../uswds-core/src/js/utils/behavior"),n=e("../../uswds-core/src/js/utils/debounce"),e=e("../../uswds-core/src/js/config")["prefix"],i=e+"-character-count";const o="."+i,c=`.${e}-character-count__field`,l=`.${e}-character-count__message`,u="The content is too long.",d=e+"-character-count__status--invalid",p=i+"__status",b=i+"__sr-status",f="."+p,h="."+b,m="characters allowed",v=e=>{e=e.closest(o);if(!e)throw new Error(c+" is missing outer "+o);var t=e.querySelector(l);if(t)return{characterCountEl:e,messageEl:t};throw new Error(o+" is missing inner "+l)},g=e=>{var t=document.createElement("div"),s=document.createElement("div"),r=e.dataset.maxlength+" "+m;t.classList.add(""+p,"usa-hint"),s.classList.add(""+b,"usa-sr-only"),t.setAttribute("aria-hidden",!0),s.setAttribute("aria-live","polite"),t.textContent=r,s.textContent=r,e.append(t,s)},w=(e,t)=>{let s="";var r;return s=0===e?t+" "+m:(r=Math.abs(t-e))+` ${"character"+(1===r?"":"s")} `+(t<e?"over limit":"left")},y=n((e,t)=>{e.textContent=t},1e3),E=e=>{var t=v(e)["characterCountEl"],s=e.value.length,r=parseInt(t.getAttribute("data-maxlength"),10),a=t.querySelector(f),t=t.querySelector(h),n=w(s,r);r&&(r=s&&r<s,a.textContent=n,y(t,n),r&&!e.validationMessage&&e.setCustomValidity(u),r||e.validationMessage!==u||e.setCustomValidity(""),a.classList.toggle(d,r))},A=e=>{var t,{characterCountEl:s,messageEl:r}=v(e);r.classList.add("usa-sr-only"),r.removeAttribute("aria-live"),r=e,e=v(r).characterCountEl,(t=r.getAttribute("maxlength"))&&(r.removeAttribute("maxlength"),e.setAttribute("data-maxlength",t)),g(s)};e=a({input:{[c](){E(this)}}},{init(e){r(c,e).forEach(e=>A(e))},MESSAGE_INVALID_CLASS:d,VALIDATION_MESSAGE:u,STATUS_MESSAGE_CLASS:p,STATUS_MESSAGE_SR_ONLY_CLASS:b,DEFAULT_STATUS_LABEL:m,createStatusMessages:g,getCountMessage:w,updateCountMessage:E});t.exports=e},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/debounce":47,"../../uswds-core/src/js/utils/select":54}],19:[function(e,t,I){"use strict";var s=e("receptor/keymap");const r=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior");const b=e("../../uswds-core/src/js/utils/sanitizer");var n=e("../../uswds-core/src/js/config")["prefix"],e=e("../../uswds-core/src/js/events")["CLICK"],n=n+"-combo-box";const f=n+"--pristine",h=n+"__select",m=n+"__input",v=n+"__clear-input",O=v+"__wrapper",B=n+"__input-button-separator",g=n+"__toggle-list",H=g+"__wrapper",w=n+"__list",y=n+"__list-option",E=y+"--focused",A=y+"--selected",x=n+"__status",j="."+n,P="."+h,u="."+m,d="."+v,p="."+g,F="."+w,i="."+y,L="."+E,R="."+A,Y="."+x,U=".*{{query}}.*";const _=(e,t="")=>{e.value=t,t=new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:{value:t}});e.dispatchEvent(t)},S=e=>{var t,s,r,a,n,i,o,c,l,e=e.closest(j);if(e)return t=e.querySelector(P),s=e.querySelector(u),r=e.querySelector(F),a=e.querySelector(Y),n=e.querySelector(L),i=e.querySelector(R),o=e.querySelector(p),c=e.querySelector(d),l=e.classList.contains(f),{comboBoxEl:e,selectEl:t,inputEl:s,listEl:r,statusEl:a,focusedOptionEl:n,selectedOptionEl:i,toggleListBtnEl:o,clearInputBtnEl:c,isPristine:l,disableFiltering:"true"===e.dataset.disableFiltering};throw new Error("Element is missing outer "+j)},C=e=>{var{inputEl:e,toggleListBtnEl:t,clearInputBtnEl:s}=S(e);s.hidden=!0,s.disabled=!0,t.disabled=!0,e.disabled=!0};const o=e=>{e=e.closest(j);if(!e.dataset.enhanced){const u=e.querySelector("select");if(!u)throw new Error(j+" is missing inner select");var t=u.id,r=document.querySelector(`label[for="${t}"]`),a=t+"--list",n=t+"-label",i=t+"--assistiveHint";const d=[];var o=e.dataset["defaultValue"],c=e.dataset["placeholder"];let s;if(c&&d.push({placeholder:c}),o)for(let e=0,t=u.options.length;e<t;e+=1){var l=u.options[e];if(l.value===o){s=l;break}}if(!r||!r.matches(`label[for="${t}"]`))throw new Error(j+` for ${t} is either missing a label or a "for" attribute`);r.setAttribute("id",n),r.setAttribute("id",n),u.setAttribute("aria-hidden","true"),u.setAttribute("tabindex","-1"),u.classList.add("usa-sr-only",h),u.id="",u.value="",["required","aria-label","aria-labelledby"].forEach(e=>{var t;u.hasAttribute(e)&&(t=u.getAttribute(e),d.push({[e]:t}),u.removeAttribute(e))});const p=document.createElement("input");p.setAttribute("id",t),p.setAttribute("aria-owns",a),p.setAttribute("aria-controls",a),p.setAttribute("aria-autocomplete","list"),p.setAttribute("aria-describedby",i),p.setAttribute("aria-expanded","false"),p.setAttribute("autocapitalize","off"),p.setAttribute("autocomplete","off"),p.setAttribute("class",m),p.setAttribute("type","text"),p.setAttribute("role","combobox"),d.forEach(s=>Object.keys(s).forEach(e=>{var t=b.escapeHTML`${s[e]}`;p.setAttribute(e,t)})),e.insertAdjacentElement("beforeend",p),e.insertAdjacentHTML("beforeend",b.escapeHTML`
    <span class="${O}" tabindex="-1">
        <button type="button" class="${v}" aria-label="Clear the select contents">&nbsp;</button>
      </span>
      <span class="${B}">&nbsp;</span>
      <span class="${H}" tabindex="-1">
        <button type="button" tabindex="-1" class="${g}" aria-label="Toggle the dropdown list">&nbsp;</button>
      </span>
      <ul
        tabindex="-1"
        id="${a}"
        class="${w}"
        role="listbox"
        aria-labelledby="${n}"
        hidden>
      </ul>
      <div class="${x} usa-sr-only" role="status"></div>
      <span id="${i}" class="usa-sr-only">
        When autocomplete results are available use up and down arrows to review and enter to select.
        Touch device users, explore by touch or with swipe gestures.
      </span>`),s&&(c=S(e)["inputEl"],_(u,s.value),_(c,s.text),e.classList.add(f)),u.disabled&&(C(e),u.disabled=!1),u.hasAttribute("aria-disabled")&&(r=e,{inputEl:r,toggleListBtnEl:t,clearInputBtnEl:a}=S(r),a.hidden=!0,a.setAttribute("aria-disabled",!0),t.setAttribute("aria-disabled",!0),r.setAttribute("aria-disabled",!0),u.removeAttribute("aria-disabled")),e.dataset.enhanced="true"}},D=(e,t,{skipFocus:s,preventScroll:r}={})=>{var{inputEl:e,listEl:a,focusedOptionEl:n}=S(e);n&&(n.classList.remove(E),n.setAttribute("tabIndex","-1")),t?(e.setAttribute("aria-activedescendant",t.id),t.setAttribute("tabIndex","0"),t.classList.add(E),r||(n=t.offsetTop+t.offsetHeight,a.scrollTop+a.offsetHeight<n&&(a.scrollTop=n-a.offsetHeight),t.offsetTop<a.scrollTop&&(a.scrollTop=t.offsetTop)),s||t.focus({preventScroll:r})):(e.setAttribute("aria-activedescendant",""),e.focus())},$=(e,r="",a={})=>{const n=e=>e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");e=`^(?:${e.replace(/{{(.*?)}}/g,(e,t)=>{var t=t.trim(),s=a[t];return"query"!==t&&s?(t=new RegExp(s,"i"),(s=r.match(t))?n(s[1]):""):n(r)})})$`;return new RegExp(e,"i")},c=e=>{const{comboBoxEl:t,selectEl:s,inputEl:r,listEl:a,statusEl:n,isPristine:i,disableFiltering:o}=S(e);let c,l;const u=a.id+"--option-";var d=(r.value||"").toLowerCase(),e=t.dataset.filter||U,p=$(e,d,t.dataset);const b=[];for(let e=0,t=s.options.length;e<t;e+=1){var f=s.options[e],h=u+b.length;f.value&&(o||i||!d||p.test(f.text))&&(s.value&&f.value===s.value&&(c=h),o&&!l&&p.test(f.text)&&(l=h),b.push(f))}var e=b.length,m=b.map((e,t)=>{var s=u+t,r=[y];let a="-1",n="false";s===c&&(r.push(A,E),a="0",n="true"),c||0!==t||(r.push(E),a="0");var i=document.createElement("li");return i.setAttribute("aria-setsize",b.length),i.setAttribute("aria-posinset",t+1),i.setAttribute("aria-selected",n),i.setAttribute("id",s),i.setAttribute("class",r.join(" ")),i.setAttribute("tabindex",a),i.setAttribute("role","option"),i.setAttribute("data-value",e.value),i.textContent=e.text,i}),v=document.createElement("li");v.setAttribute("class",y+"--no-results"),v.textContent="No results found",a.hidden=!1,e?(a.innerHTML="",m.forEach(e=>a.insertAdjacentElement("beforeend",e))):(a.innerHTML="",a.insertAdjacentElement("beforeend",v)),r.setAttribute("aria-expanded","true"),n.textContent=e?e+` result${1<e?"s":""} available.`:"No results.";let g;i&&c?g=a.querySelector("#"+c):o&&l&&(g=a.querySelector("#"+l)),g&&D(a,g,{skipFocus:!0})},l=e=>{var{inputEl:e,listEl:t,statusEl:s,focusedOptionEl:r}=S(e);s.innerHTML="",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-activedescendant",""),r&&r.classList.remove(E),t.scrollTop=0,t.hidden=!0},T=e=>{var{comboBoxEl:t,selectEl:s,inputEl:r}=S(e);_(s,e.dataset.value),_(r,e.textContent),t.classList.add(f),l(t),r.focus()},k=e=>{var{comboBoxEl:s,selectEl:r,inputEl:a}=S(e),n=r.value,i=(a.value||"").toLowerCase();if(n)for(let e=0,t=r.options.length;e<t;e+=1){var o=r.options[e];if(o.value===n)return i!==o.text&&_(a,o.text),void s.classList.add(f)}i&&_(a)};var M=e=>{var{comboBoxEl:t,listEl:s}=S(e.target),s=(s.hidden&&c(t),s.querySelector(L)||s.querySelector(i));s&&D(t,s),e.preventDefault()},q=e=>{var t=e.target,s=t.nextSibling;s&&D(t,s),e.preventDefault()},N=e=>{var{comboBoxEl:t,listEl:s,focusedOptionEl:r}=S(e.target),r=r&&r.previousSibling,s=!s.hidden;D(t,r),s&&e.preventDefault(),r||l(t)};a=a({[e]:{[u](){var e,t;this.disabled||(e=this,{comboBoxEl:e,listEl:t}=S(e),t.hidden&&c(e))},[p](){var e,t,s;this.disabled||(e=this,{comboBoxEl:e,listEl:t,inputEl:s}=S(e),(t.hidden?c:l)(e),s.focus())},[i](){this.disabled||T(this)},[d](){var e,t,s,r;this.disabled||(e=this,{comboBoxEl:e,listEl:r,selectEl:t,inputEl:s}=S(e),r=!r.hidden,t.value&&_(t),s.value&&_(s),e.classList.remove(f),r&&c(e),s.focus())}},focusout:{[j](e){this.contains(e.relatedTarget)||(k(this),l(this))}},keydown:{[j]:s({Escape:e=>{var{comboBoxEl:e,inputEl:t}=S(e.target);l(e),k(e),t.focus()}}),[u]:s({Enter:e=>{var{comboBoxEl:t,listEl:s}=S(e.target),s=!s.hidden;(e=>{var{comboBoxEl:s,selectEl:r,inputEl:a,statusEl:e}=S(e),n=(e.textContent="",(a.value||"").toLowerCase());if(n)for(let e=0,t=r.options.length;e<t;e+=1){var i=r.options[e];if(i.text.toLowerCase()===n)return _(r,i.value),_(a,i.text),s.classList.add(f)}k(s)})(t),s&&l(t),e.preventDefault()},ArrowDown:M,Down:M}),[i]:s({ArrowUp:N,Up:N,ArrowDown:q,Down:q,Enter:e=>{T(e.target),e.preventDefault()}," ":e=>{T(e.target),e.preventDefault()},"Shift+Tab":()=>{}})},input:{[u](){this.closest(j).classList.remove(f),c(this)}},mouseover:{[i](){var e;(e=this).classList.contains(E)||D(e,e,{preventScroll:!0})}}},{init(e){r(j,e).forEach(e=>{o(e)})},getComboBoxContext:S,enhanceComboBox:o,generateDynamicRegExp:$,disable:C,enable:e=>{var{inputEl:e,toggleListBtnEl:t,clearInputBtnEl:s}=S(e);s.hidden=!1,s.disabled=!1,t.disabled=!1,e.disabled=!1},displayList:c,hideList:l,COMBO_BOX_CLASS:n});t.exports=a},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/events":37,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/sanitizer":51,"../../uswds-core/src/js/utils/select-or-matches":53,"receptor/keymap":11}],20:[function(e,E,A){"use strict";const t=e("receptor/keymap");var _=e("../../uswds-core/src/js/utils/behavior");const S=e("../../uswds-core/src/js/utils/select"),P=e("../../uswds-core/src/js/utils/select-or-matches");var s=e("../../uswds-core/src/js/config")["prefix"],F=e("../../uswds-core/src/js/events")["CLICK"];const R=e("../../uswds-core/src/js/utils/active-element");var Y=e("../../uswds-core/src/js/utils/is-ios-device");const C=e("../../uswds-core/src/js/utils/sanitizer");e=s+"-date-picker";const U=e+"__wrapper",V=e+"--initialized",K=e+"--active",W=e+"__internal-input",z=e+"__external-input",Q=e+"__button",n=e+"__calendar",G=e+"__status",D=n+"__date",Z=D+"--focused",X=D+"--selected",J=D+"--previous-month",ee=D+"--current-month",te=D+"--next-month",se=D+"--range-date",re=D+"--today",ae=D+"--range-date-start",ne=D+"--range-date-end",ie=D+"--within-range",oe=n+"__previous-year",ce=n+"__previous-month",le=n+"__next-year",ue=n+"__next-month",de=n+"__month-selection",pe=n+"__year-selection",p=n+"__month",be=p+"--focused",fe=p+"--selected",x=n+"__year",he=x+"--focused",me=x+"--selected",ve=n+"__previous-year-chunk",ge=n+"__next-year-chunk",we=n+"__date-picker",ye=n+"__month-picker",Ee=n+"__year-picker",$=n+"__table",Ae=n+"__row",T=n+"__cell",k=T+"--center-items",xe=n+"__month-label",je=n+"__day-of-week",f="."+e,Le="."+Q,_e="."+W,h="."+z,m="."+n,Se="."+G;s="."+D;const o="."+Z;e="."+ee;const Ce="."+oe,De="."+ce,$e="."+le,Te="."+ue;var ke="."+pe,Me="."+de,qe="."+p;const v="."+x,Ne="."+ve,Ie="."+ge,M="."+we;var Oe="."+ye;const Be="."+Ee,He="."+be,c="."+he,Pe="Please enter a valid date",Fe=["January","February","March","April","May","June","July","August","September","October","November","December"],Re=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],j=12,Ye="MM/DD/YYYY",Ue="YYYY-MM-DD";var r=(...e)=>e.map(e=>e+":not([disabled])").join(", "),Ve=r(Ce,De,ke,Me,$e,Te,o),Ke=r(He),r=r(Ne,Ie,c);const We=(e,t)=>(t!==e.getMonth()&&e.setDate(0),e),ze=(e,t,s)=>{var r=new Date(0);return r.setFullYear(e,t,s),r},Qe=()=>{var e=new Date,t=e.getDate(),s=e.getMonth(),e=e.getFullYear();return ze(e,s,t)},Ge=e=>{var t=new Date(0);return t.setFullYear(e.getFullYear(),e.getMonth(),1),t},Ze=e=>{var t=new Date(0);return t.setFullYear(e.getFullYear(),e.getMonth()+1,0),t},q=(e,t)=>{e=new Date(e.getTime());return e.setDate(e.getDate()+t),e},Xe=(e,t)=>q(e,-t),Je=(e,t)=>q(e,7*t),et=e=>{var t=e.getDay();return Xe(e,t)},N=(e,t)=>{var e=new Date(e.getTime()),s=(e.getMonth()+12+t)%12;return e.setMonth(e.getMonth()+t),We(e,s),e},tt=(e,t)=>N(e,-t),st=(e,t)=>N(e,12*t),rt=(e,t)=>st(e,-t),b=(e,t)=>{e=new Date(e.getTime());return e.setMonth(t),We(e,t),e},L=(e,t)=>{var e=new Date(e.getTime()),s=e.getMonth();return e.setFullYear(t),We(e,s),e},at=(e,t)=>{let s=t<e?t:e;return new Date(s.getTime())},nt=(e,t)=>{let s=e<t?t:e;return new Date(s.getTime())},it=(e,t)=>e&&t&&e.getFullYear()===t.getFullYear(),I=(e,t)=>it(e,t)&&e.getMonth()===t.getMonth(),O=(e,t)=>I(e,t)&&e.getDate()===t.getDate(),l=(e,t,s)=>{let r=e;return e<t?r=t:s&&s<e&&(r=s),new Date(r.getTime())},ot=(e,t,s)=>t<=e&&(!s||e<=s),ct=(e,t,s)=>Ze(e)<t||s&&Ge(e)>s,lt=(e,t,s)=>Ze(b(e,11))<t||s&&Ge(b(e,0))>s,g=(r,a=Ue,n=!1)=>{let i,o,c,l,u;if(r){let e,t,s;a===Ye?[e,t,s]=r.split("/"):[s,e,t]=r.split("-"),s&&(u=parseInt(s,10),Number.isNaN(u)||(l=u,n&&(l=Math.max(0,l),s.length<3)&&(r=(a=Qe().getFullYear())-a%10**s.length,l=r+u))),e&&(u=parseInt(e,10),Number.isNaN(u)||(o=u,n&&(o=Math.max(1,o),o=Math.min(12,o)))),o&&t&&null!=l&&(u=parseInt(t,10),Number.isNaN(u)||(c=u,n&&(a=ze(l,o,0).getDate(),c=Math.max(1,c),c=Math.min(a,c)))),o&&c&&null!=l&&(i=ze(l,o-1,c))}return i},B=(e,t=Ue)=>{var s=(e,t)=>("0000"+e).slice(-t),r=e.getMonth()+1,a=e.getDate(),e=e.getFullYear();return t===Ye?[s(r,2),s(a,2),s(e,4)].join("/"):[s(e,4),s(r,2),s(a,2)].join("-")},ut=(e,t)=>{var s=[],r=[];let a=0;for(;a<e.length;){r=[];const i=document.createElement("tr");for(;a<e.length&&r.length<t;){var n=document.createElement("td");n.insertAdjacentElement("beforeend",e[a]),r.push(n),a+=1}r.forEach(e=>{i.insertAdjacentElement("beforeend",e)}),s.push(i)}return s},dt=e=>{const t=document.createElement("tbody");return e.forEach(e=>{t.insertAdjacentElement("beforeend",e)}),t},pt=(e,t="")=>{e.value=t,t=new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:{value:t}});e.dispatchEvent(t)},H=e=>{e=e.closest(f);if(!e)throw new Error("Element is missing outer "+f);var t=e.querySelector(_e),s=e.querySelector(h),r=e.querySelector(m),a=e.querySelector(Le),n=e.querySelector(Se),i=e.querySelector(v),o=g(s.value,Ye,!0),c=g(t.value),l=g(r.dataset.value),u=g(e.dataset.minDate),d=g(e.dataset.maxDate),p=g(e.dataset.rangeDate),b=g(e.dataset.defaultDate);if(u&&d&&d<u)throw new Error("Minimum date cannot be after maximum date");return{calendarDate:l,minDate:u,toggleBtnEl:a,selectedDate:c,maxDate:d,firstYearChunkEl:i,datePickerEl:e,inputDate:o,internalInputEl:t,externalInputEl:s,calendarEl:r,rangeDate:p,defaultDate:b,statusEl:n}},bt=e=>{var{externalInputEl:e,toggleBtnEl:t}=H(e);t.disabled=!0,e.disabled=!0},ft=e=>{var{externalInputEl:e,toggleBtnEl:t}=H(e);t.setAttribute("aria-disabled",!0),e.setAttribute("aria-disabled",!0)};const ht=e=>{var t,s,r,a,{externalInputEl:e,minDate:n,maxDate:i}=H(e),e=e.value;let o=!1;return o=e&&(o=!0,[t,s,r]=(e=e.split("/")).map(e=>{let t;e=parseInt(e,10);return t=Number.isNaN(e)?t:e}),t)&&s&&null!=r&&(a=ze(r,t-1,s)).getMonth()===t-1&&a.getDate()===s&&a.getFullYear()===r&&4===e[2].length&&ot(a,n,i)?!1:o},mt=e=>{var e=H(e)["externalInputEl"],t=ht(e);t&&!e.validationMessage&&e.setCustomValidity(Pe),t||e.validationMessage!==Pe||e.setCustomValidity("")},vt=(e,t)=>{var s,r,a=g(t);a&&(a=B(a,Ye),{datePickerEl:e,internalInputEl:s,externalInputEl:r}=H(e),pt(s,t),pt(r,a),mt(e))},u=(e,t)=>{const{datePickerEl:s,calendarEl:r,statusEl:a,selectedDate:d,maxDate:p,minDate:b,rangeDate:f}=H(e),h=Qe();let n=t||h;e=r.hidden;const m=q(n,0);var i=n.getMonth(),t=n.getFullYear();const v=tt(n,1),g=N(n,1);var o=B(n),c=Ge(n),l=I(n,b),u=I(n,p),w=d||n;const y=f&&at(w,f),E=f&&nt(w,f),A=f&&q(y,1),x=f&&Xe(E,1);for(var w=Fe[i],j=(n=et(c),[]);j.length<28||n.getMonth()===i||j.length%7!=0;)j.push((e=>{var t=[D],s=e.getDate(),r=e.getMonth(),a=e.getFullYear(),n=e.getDay(),i=B(e);let o="-1";var c=!ot(e,b,p),l=O(e,d),e=(I(e,v)&&t.push(J),I(e,m)&&t.push(ee),I(e,g)&&t.push(te),l&&t.push(X),O(e,h)&&t.push(re),f&&(O(e,f)&&t.push(se),O(e,y)&&t.push(ae),O(e,E)&&t.push(ne),ot(e,A,x))&&t.push(ie),O(e,m)&&(o="0",t.push(Z)),Fe[r]),n=Re[n],u=document.createElement("button");return u.setAttribute("type","button"),u.setAttribute("tabindex",o),u.setAttribute("class",t.join(" ")),u.setAttribute("data-day",s),u.setAttribute("data-month",r+1),u.setAttribute("data-year",a),u.setAttribute("data-value",i),u.setAttribute("aria-label",C.escapeHTML`${s} ${e} ${a} ${n}`),u.setAttribute("aria-selected",l?"true":"false"),!0==c&&(u.disabled=!0),u.textContent=s,u})(n)),n=q(n,1);var c=ut(j,7),L=r.cloneNode(),o=(L.dataset.value=o,L.style.top=s.offsetHeight+"px",L.hidden=!1,L.innerHTML=C.escapeHTML`
    <div tabindex="-1" class="${we}">
      <div class="${Ae}">
        <div class="${T} ${k}">
          <button
            type="button"
            class="${oe}"
            aria-label="Navigate back one year"
            ${l?'disabled="disabled"':""}
          ></button>
        </div>
        <div class="${T} ${k}">
          <button
            type="button"
            class="${ce}"
            aria-label="Navigate back one month"
            ${l?'disabled="disabled"':""}
          ></button>
        </div>
        <div class="${T} ${xe}">
          <button
            type="button"
            class="${de}" aria-label="${w}. Select month"
          >${w}</button>
          <button
            type="button"
            class="${pe}" aria-label="${t}. Select year"
          >${t}</button>
        </div>
        <div class="${T} ${k}">
          <button
            type="button"
            class="${ue}"
            aria-label="Navigate forward one month"
            ${u?'disabled="disabled"':""}
          ></button>
        </div>
        <div class="${T} ${k}">
          <button
            type="button"
            class="${le}"
            aria-label="Navigate forward one year"
            ${u?'disabled="disabled"':""}
          ></button>
        </div>
      </div>
    </div>
    `,document.createElement("table")),l=(o.setAttribute("class",$),document.createElement("thead"));o.insertAdjacentElement("beforeend",l);const _=document.createElement("tr"),S=(l.insertAdjacentElement("beforeend",_),{Sunday:"S",Monday:"M",Tuesday:"T",Wednesday:"W",Thursday:"Th",Friday:"Fr",Saturday:"S"});Object.keys(S).forEach(e=>{var t=document.createElement("th");t.setAttribute("class",je),t.setAttribute("scope","col"),t.setAttribute("aria-label",e),t.textContent=S[e],_.insertAdjacentElement("beforeend",t)});u=dt(c);o.insertAdjacentElement("beforeend",u);L.querySelector(M).insertAdjacentElement("beforeend",o),r.parentNode.replaceChild(L,r),s.classList.add(K);l=[];return O(d,m)&&l.push("Selected date"),e?(l.push("You can navigate by day using left and right arrows","Weeks by using up and down arrows","Months by using page up and page down keys","Years by using shift plus page up and shift plus page down","Home and end keys navigate to the beginning and end of a week"),a.textContent=""):l.push(w+" "+t),a.textContent=l.join(". "),L},gt=e=>{var{datePickerEl:e,calendarEl:t,statusEl:s}=H(e);e.classList.remove(K),t.hidden=!0,s.textContent=""},wt=e=>{var{calendarEl:e,inputDate:t,minDate:s,maxDate:r}=H(e);!e.hidden&&t&&(t=l(t,s,r),u(e,t))},yt=(e,t)=>{const{calendarEl:s,statusEl:r,calendarDate:o,minDate:c,maxDate:l}=H(e),u=o.getMonth(),d=null==t?u:t;var e=Fe.map((e,t)=>{var s=b(o,t),s=ct(s,c,l);let r="-1";var a=[p],n=t===u,i=(t===d&&(r="0",a.push(be)),n&&a.push(fe),document.createElement("button"));return i.setAttribute("type","button"),i.setAttribute("tabindex",r),i.setAttribute("class",a.join(" ")),i.setAttribute("data-value",t),i.setAttribute("data-label",e),i.setAttribute("aria-selected",n?"true":"false"),!0===s&&(i.disabled=!0),i.textContent=e,i}),t=document.createElement("div"),a=(t.setAttribute("tabindex","-1"),t.setAttribute("class",ye),document.createElement("table")),e=(a.setAttribute("class",$),a.setAttribute("role","presentation"),ut(e,3)),e=dt(e),e=(a.insertAdjacentElement("beforeend",e),t.insertAdjacentElement("beforeend",a),s.cloneNode());return e.insertAdjacentElement("beforeend",t),s.parentNode.replaceChild(e,s),r.textContent="Select a month.",e},d=(e,t)=>{var{calendarEl:e,statusEl:s,calendarDate:r,minDate:a,maxDate:n}=H(e),i=r.getFullYear(),o=null==t?i:t,t=o,c=(t-=t%j,t=Math.max(0,t),lt(L(r,t-1),a,n)),l=lt(L(r,t+j),a,n),u=[];let d=t;for(;u.length<j;){var p=lt(L(r,d),a,n);let e="-1";var b=[x],f=d===i,h=(d===o&&(e="0",b.push(he)),f&&b.push(me),document.createElement("button"));h.setAttribute("type","button"),h.setAttribute("tabindex",e),h.setAttribute("class",b.join(" ")),h.setAttribute("data-value",d),h.setAttribute("aria-selected",f?"true":"false"),!0===p&&(h.disabled=!0),h.textContent=d,u.push(h),d+=1}var m=e.cloneNode(),v=document.createElement("div"),g=(v.setAttribute("tabindex","-1"),v.setAttribute("class",Ee),document.createElement("table")),w=(g.setAttribute("class",$),document.createElement("tbody")),y=document.createElement("tr"),E=document.createElement("button"),c=(E.setAttribute("type","button"),E.setAttribute("class",ve),E.setAttribute("aria-label",`Navigate back ${j} years`),!0===c&&(E.disabled=!0),E.innerHTML=C.escapeHTML`&nbsp`,document.createElement("button")),l=(c.setAttribute("type","button"),c.setAttribute("class",ge),c.setAttribute("aria-label",`Navigate forward ${j} years`),!0===l&&(c.disabled=!0),c.innerHTML=C.escapeHTML`&nbsp`,document.createElement("table")),A=(l.setAttribute("class",$),l.setAttribute("role","presentation"),ut(u,3)),A=dt(A),A=(l.insertAdjacentElement("beforeend",A),document.createElement("td")),E=(A.insertAdjacentElement("beforeend",E),document.createElement("td")),l=(E.setAttribute("colspan","3"),E.insertAdjacentElement("beforeend",l),document.createElement("td"));return l.insertAdjacentElement("beforeend",c),y.insertAdjacentElement("beforeend",A),y.insertAdjacentElement("beforeend",E),y.insertAdjacentElement("beforeend",l),w.insertAdjacentElement("beforeend",y),g.insertAdjacentElement("beforeend",w),v.insertAdjacentElement("beforeend",g),m.insertAdjacentElement("beforeend",v),e.parentNode.replaceChild(m,e),s.textContent=C.escapeHTML`Showing years ${t} to ${t+j-1}. Select a year.`,m},Et=e=>{var{datePickerEl:t,externalInputEl:s}=H(e.target);gt(t),s.focus(),e.preventDefault()};var a=i=>e=>{var{calendarEl:t,calendarDate:s,minDate:r,maxDate:a}=H(e.target),n=i(s),n=l(n,r,a);O(s,n)||u(t,n).querySelector(o).focus(),e.preventDefault()},At=a(e=>{return e=e,t=1,Je(e,-t);var t}),xt=a(e=>Je(e,1)),jt=a(e=>Xe(e,1)),Lt=a(e=>q(e,1)),_t=a(e=>et(e)),St=a(e=>{return t=(e=e).getDay(),q(e,6-t);var t}),Ct=a(e=>N(e,1)),Dt=a(e=>tt(e,1)),$t=a(e=>st(e,1)),a=a(e=>rt(e,1));var i=o=>e=>{var t=e.target,s=parseInt(t.dataset.value,10),{calendarEl:t,calendarDate:r,minDate:a,maxDate:n}=H(t),i=b(r,s),s=o(s),s=Math.max(0,Math.min(11,s)),r=b(r,s),s=l(r,a,n);I(i,s)||yt(t,s.getMonth()).querySelector(He).focus(),e.preventDefault()},Tt=i(e=>e-3),kt=i(e=>e+3),Mt=i(e=>e-1),qt=i(e=>e+1),Nt=i(e=>e-e%3),It=i(e=>e+2-e%3),Ot=i(()=>11),i=i(()=>0);var w=o=>e=>{var t=e.target,s=parseInt(t.dataset.value,10),{calendarEl:t,calendarDate:r,minDate:a,maxDate:n}=H(t),i=L(r,s),s=o(s),s=Math.max(0,s),r=L(r,s),s=l(r,a,n);it(i,s)||d(t,s.getFullYear()).querySelector(c).focus(),e.preventDefault()},Bt=w(e=>e-3),Ht=w(e=>e+3),Pt=w(e=>e-1),Ft=w(e=>e+1),Rt=w(e=>e-e%3),Yt=w(e=>e+2-e%3),Ut=w(e=>e-j),w=w(e=>e+j);var y=n=>{const a=e=>{var e=H(e)["calendarEl"],e=S(n,e),t=e.length-1,s=e[0],r=e[t],a=e.indexOf(R());return{focusableElements:e,isNotFound:-1===a,firstTabStop:s,isFirstTab:0===a,lastTabStop:r,isLastTab:a===t}};return{tabAhead(e){var{firstTabStop:t,isLastTab:s,isNotFound:r}=a(e.target);(s||r)&&(e.preventDefault(),t.focus())},tabBack(e){var{lastTabStop:t,isFirstTab:s,isNotFound:r}=a(e.target);(s||r)&&(e.preventDefault(),t.focus())}}},Ve=y(Ve),Ke=y(Ke),y=y(r),r={[F]:{[Le](){var e,t,s,r,a,n;(e=this).disabled||({calendarEl:t,inputDate:n,minDate:s,maxDate:r,defaultDate:a}=H(e),t.hidden?(n=l(n||a||Qe(),s,r),u(t,n).querySelector(o).focus()):gt(e))},[s](){var e,t,s;(e=this).disabled||({datePickerEl:t,externalInputEl:s}=H(e),vt(e,e.dataset.value),gt(t),s.focus())},[qe](){var e,t,s,r,a;(e=this).disabled||({calendarEl:t,calendarDate:a,minDate:s,maxDate:r}=H(e),e=parseInt(e.dataset.value,10),a=b(a,e),a=l(a,s,r),u(t,a).querySelector(o).focus())},[v](){var e,t,s,r,a;(e=this).disabled||({calendarEl:t,calendarDate:a,minDate:s,maxDate:r}=H(e),e=parseInt(e.innerHTML,10),a=L(a,e),a=l(a,s,r),u(t,a).querySelector(o).focus())},[De](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:s,minDate:r,maxDate:a}=H(t),s=tt(s,1),s=l(s,r,a),r=u(t,s);let e=r.querySelector(De);(e=e.disabled?r.querySelector(M):e).focus()}},[Te](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:s,minDate:r,maxDate:a}=H(t),s=N(s,1),s=l(s,r,a),r=u(t,s);let e=r.querySelector(Te);(e=e.disabled?r.querySelector(M):e).focus()}},[Ce](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:s,minDate:r,maxDate:a}=H(t),s=rt(s,1),s=l(s,r,a),r=u(t,s);let e=r.querySelector(Ce);(e=e.disabled?r.querySelector(M):e).focus()}},[$e](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:s,minDate:r,maxDate:a}=H(t),s=st(s,1),s=l(s,r,a),r=u(t,s);let e=r.querySelector($e);(e=e.disabled?r.querySelector(M):e).focus()}},[Ne](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:s,minDate:r,maxDate:a}=H(t),n=t.querySelector(c),n=parseInt(n.textContent,10)-j,n=Math.max(0,n),s=L(s,n),n=l(s,r,a),s=d(t,n.getFullYear());let e=s.querySelector(Ne);(e=e.disabled?s.querySelector(Be):e).focus()}},[Ie](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:s,minDate:r,maxDate:a}=H(t),n=t.querySelector(c),n=parseInt(n.textContent,10)+j,n=Math.max(0,n),s=L(s,n),n=l(s,r,a),s=d(t,n.getFullYear());let e=s.querySelector(Ie);(e=e.disabled?s.querySelector(Be):e).focus()}},[Me](){yt(this).querySelector(He).focus()},[ke](){d(this).querySelector(c).focus()}},keyup:{[m](e){var t=this.dataset.keydownKeyCode;""+e.keyCode!==t&&e.preventDefault()}},keydown:{[h](e){13===e.keyCode&&mt(this)},[s]:t({Up:At,ArrowUp:At,Down:xt,ArrowDown:xt,Left:jt,ArrowLeft:jt,Right:Lt,ArrowRight:Lt,Home:_t,End:St,PageDown:Ct,PageUp:Dt,"Shift+PageDown":$t,"Shift+PageUp":a,Tab:Ve.tabAhead}),[M]:t({Tab:Ve.tabAhead,"Shift+Tab":Ve.tabBack}),[qe]:t({Up:Tt,ArrowUp:Tt,Down:kt,ArrowDown:kt,Left:Mt,ArrowLeft:Mt,Right:qt,ArrowRight:qt,Home:Nt,End:It,PageDown:Ot,PageUp:i}),[Oe]:t({Tab:Ke.tabAhead,"Shift+Tab":Ke.tabBack}),[v]:t({Up:Bt,ArrowUp:Bt,Down:Ht,ArrowDown:Ht,Left:Pt,ArrowLeft:Pt,Right:Ft,ArrowRight:Ft,Home:Rt,End:Yt,PageDown:w,PageUp:Ut}),[Be]:t({Tab:y.tabAhead,"Shift+Tab":y.tabBack}),[m](e){this.dataset.keydownKeyCode=e.keyCode},[f](e){t({Escape:Et})(e)}},focusout:{[h](){mt(this)},[f](e){this.contains(e.relatedTarget)||gt(this)}},input:{[h](){{var t=this,{internalInputEl:s,inputDate:r}=H(t);let e="";r&&!ht(t)&&(e=B(r)),s.value!==e&&pt(s,e)}wt(this)}}},F=(Y()||(r.mouseover={[e](){var e,t,s;(e=this).disabled||(s=(t=e.closest(m)).dataset.value,(e=e.dataset.value)!==s&&(s=g(e),u(t,s).querySelector(o).focus()))},[qe](){var e,t;(e=this).disabled||e.classList.contains(be)||(t=parseInt(e.dataset.value,10),yt(e,t).querySelector(He).focus())},[v](){var e,t;(e=this).disabled||e.classList.contains(he)||(t=parseInt(e.dataset.value,10),d(e,t).querySelector(c).focus())}}),_(r,{init(e){P(f,e).forEach(e=>{var t=(e=e.closest(f)).dataset.defaultValue,s=e.querySelector("input");if(!s)throw new Error(f+" is missing inner input");s.value&&(s.value="");var r=g(e.dataset.minDate||s.getAttribute("min"));e.dataset.minDate=r?B(r):"0000-01-01",(r=g(e.dataset.maxDate||s.getAttribute("max")))&&(e.dataset.maxDate=B(r));(r=document.createElement("div")).classList.add(U);var a=s.cloneNode();a.classList.add(z),a.type="text",r.appendChild(a),r.insertAdjacentHTML("beforeend",C.escapeHTML`
    <button type="button" class="${Q}" aria-haspopup="true" aria-label="Toggle calendar"></button>
    <div class="${n}" role="application" hidden></div>
    <div class="usa-sr-only ${G}" role="status" aria-live="polite"></div>`),s.setAttribute("aria-hidden","true"),s.setAttribute("tabindex","-1"),s.style.display="none",s.classList.add(W),s.removeAttribute("id"),s.removeAttribute("name"),s.required=!1,e.appendChild(r),e.classList.add(V),t&&vt(e,t),s.disabled&&(bt(e),s.disabled=!1),s.hasAttribute("aria-disabled")&&(ft(e),s.removeAttribute("aria-disabled"))})},getDatePickerContext:H,disable:bt,ariaDisable:ft,enable:e=>{var{externalInputEl:e,toggleBtnEl:t}=H(e);t.disabled=!1,e.disabled=!1},isDateInputInvalid:ht,setCalendarValue:vt,validateDateInput:mt,renderCalendar:u,updateCalendarIfVisible:wt}));E.exports=F},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/events":37,"../../uswds-core/src/js/utils/active-element":45,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/is-ios-device":50,"../../uswds-core/src/js/utils/sanitizer":51,"../../uswds-core/src/js/utils/select":54,"../../uswds-core/src/js/utils/select-or-matches":53,"receptor/keymap":11}],21:[function(e,t,s){"use strict";var r=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select"),n=e("../../uswds-core/src/js/utils/select-or-matches");var i=e("../../uswds-core/src/js/config")["prefix"];const{getDatePickerContext:o,isDateInputInvalid:c,updateCalendarIfVisible:l}=e("../../usa-date-picker/src/index");e=i+"-date-range-picker";const u=e+"__range-start",d=e+"__range-end",p="."+(i+"-date-picker"),b="."+e,f="."+u,h="."+d,m=e=>{var t,s,e=e.closest(b);if(e)return t=e.querySelector(f),s=e.querySelector(h),{dateRangePickerEl:e,rangeStartEl:t,rangeEndEl:s};throw new Error("Element is missing outer "+b)},v=e=>{var{dateRangePickerEl:e,rangeStartEl:t,rangeEndEl:s}=m(e),t=o(t)["internalInputEl"],r=t.value;r&&!c(t)?(s.dataset.minDate=r,s.dataset.rangeDate=r,s.dataset.defaultDate=r):(s.dataset.minDate=e.dataset.minDate||"",s.dataset.rangeDate="",s.dataset.defaultDate=""),l(s)},g=e=>{var{dateRangePickerEl:e,rangeStartEl:t,rangeEndEl:s}=m(e),s=o(s)["internalInputEl"],r=s.value;r&&!c(s)?(t.dataset.maxDate=r,t.dataset.rangeDate=r,t.dataset.defaultDate=r):(t.dataset.maxDate=e.dataset.maxDate||"",t.dataset.rangeDate="",t.dataset.defaultDate=""),l(t)};i=r({"input change":{[f](){v(this)},[h](){g(this)}}},{init(e){n(b,e).forEach(e=>{var e=(e=e).closest(b),[t,s]=a(p,e);if(!t)throw new Error(`${b} is missing inner two '${p}' elements`);if(!s)throw new Error(`${b} is missing second '${p}' element`);t.classList.add(u),s.classList.add(d),e.dataset.minDate||(e.dataset.minDate="0000-01-01");var r=e.dataset["minDate"];(r=(t.dataset.minDate=r,s.dataset.minDate=r,e.dataset)["maxDate"])&&(t.dataset.maxDate=r,s.dataset.maxDate=r),v(e),g(e)})}});t.exports=i},{"../../usa-date-picker/src/index":20,"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/select":54,"../../uswds-core/src/js/utils/select-or-matches":53}],22:[function(e,t,I){"use strict";const s=e("../../uswds-core/src/js/utils/select-or-matches");var r=e("../../uswds-core/src/js/utils/behavior");const g=e("../../uswds-core/src/js/utils/sanitizer");e=e("../../uswds-core/src/js/config").prefix;const w=e+"-file-input",c="."+w,l=e+"-file-input__input",u=e+"-file-input__target",a="."+l,d=e+"-file-input__box",p=e+"-file-input__instructions",y=e+"-file-input__preview",o=e+"-file-input__preview-heading",b=e+"-file-input--disabled",f=e+"-file-input__choose",E=e+"-file-input__accepted-files-message",h=e+"-file-input__drag-text",n=e+"-file-input--drag",A="is-loading",x="has-invalid-file",j=e+"-file-input__preview-image",L=j+"--generic",_=j+"--pdf",S=j+"--word",C=j+"--video",D=j+"--excel",$=e+"-sr-only",T="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";let k=Boolean(!0),M="",m="";const v=e=>{var t,e=e.closest(c);if(e)return t=e.querySelector(a),{dropZoneEl:e,inputEl:t};throw new Error("Element is missing outer "+c)};const i=e=>{var t=e.charCodeAt(0);return 32===t?"-":65<=t&&t<=90?"img_"+e.toLowerCase():"__"+t.toString(16).slice(-4)},O=e=>e.replace(/[^a-z0-9]/g,i),B=e=>e+"-"+Math.floor(Date.now().toString()/1e3),q=e=>{return e.hasAttribute("multiple")?"files":"file"},H=e=>{var t,s,r,a=e.hasAttribute("aria-disabled")||e.hasAttribute("disabled"),n=(t=e,s=document.createElement("div"),i=document.createElement("div"),n=document.createElement("div"),t.classList.remove(w),t.classList.add(l),s.classList.add(w),n.classList.add(d),i.classList.add(u),i.prepend(n),t.parentNode.insertBefore(i,t),t.parentNode.insertBefore(s,i),i.appendChild(t),s.appendChild(i),i),i=(s=(t=e).closest(c),i=q(t),r=document.createElement("div"),i=`Drag ${i} here or`,o="choose from folder",M=i+" "+o,r.classList.add(p),r.setAttribute("aria-hidden","true"),t.setAttribute("aria-label",M),r.innerHTML=g.escapeHTML`<span class="${h}">${i}</span> <span class="${f}">${o}</span>`,t.parentNode.insertBefore(r,t),(/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(s.querySelector("."+h).outerHTML=""),r),o=v(e)["dropZoneEl"];return a?o.classList.add(b):(t=e,s=document.createElement("div"),r=q(t),a=t.closest(c),t=t.closest("."+u),m=`No ${r} selected.`,s.classList.add($),s.setAttribute("aria-live","polite"),s.textContent=m,a.insertBefore(s,t)),{instructions:i,dropTarget:n}},N=(e,t)=>{var s=e.querySelectorAll("."+y),r=e.querySelector("."+o),a=e.querySelector("."+E);r&&(r.outerHTML=""),a&&(a.outerHTML="",e.classList.remove(x)),null!==s&&(t&&t.removeAttribute("hidden"),Array.prototype.forEach.call(s,e=>{e.parentNode.removeChild(e)}))},P=(e,t,s)=>{const r=e;let a=m;1===t.length?a="You have selected the file: "+s:1<t.length&&(a=`You have selected ${t.length} files: `+s.join(", ")),setTimeout(()=>{r.textContent=a},1e3)},F=(e,t)=>{var s=document.createElement("div"),r=e.closest("."+u),a=r.querySelector("."+p);let n="Change file",i="";1===t.length?i=g.escapeHTML`Selected file <span class="usa-file-input__choose">${n}</span>`:1<t.length&&(n="Change files",i=g.escapeHTML`${t.length} files selected <span class="usa-file-input__choose">${n}</span>`),a.setAttribute("hidden","true"),s.classList.add(o),s.innerHTML=i,r.insertBefore(s,a),e.setAttribute("aria-label",n)},R=(e,t,s,r)=>{var a=e,n=t,i=s,o=r,c=n.getAttribute("accept");if(o.classList.remove(x),c){var l=c.split(","),c=document.createElement("div");let t=!0;var u=a.target.files||a.dataTransfer.files;for(let e=0;e<u.length;e+=1){var d=u[e];if(!t)break;for(let e=0;e<l.length;e+=1){var p=l[e];if(t=0<d.name.indexOf(p)||((e,t)=>{let s=!1;e=e.indexOf(t);return s=0<=e?!0:s})(d.type,p.replace(/\*/g,""))){k=!0;break}}}t||(N(o,i),n.value="",o.insertBefore(c,n),c.textContent=n.dataset.errormessage||"This is not a valid file type.",c.classList.add(E),o.classList.add(x),k=!1,a.preventDefault(),a.stopPropagation())}if(!0===k){var i=t,b=s,n=r,f=(c=e).target.files,c=n.closest("."+w).querySelector("."+$),h=[];N(n,b);for(let e=0;e<f.length;e+=1){const m=new FileReader,v=f[e].name;let t;h.push(v),m.onloadstart=function(){t=B(O(v)),b.insertAdjacentHTML("afterend",g.escapeHTML`<div class="${y}" aria-hidden="true">
          <img id="${t}" src="${T}" alt="" class="${j} ${A}"/>${v}
        <div>`)},m.onloadend=function(){var e=document.getElementById(t);0<v.indexOf(".pdf")?e.setAttribute("onerror",`this.onerror=null;this.src="${T}"; this.classList.add("${_}")`):0<v.indexOf(".doc")||0<v.indexOf(".pages")?e.setAttribute("onerror",`this.onerror=null;this.src="${T}"; this.classList.add("${S}")`):0<v.indexOf(".xls")||0<v.indexOf(".numbers")?e.setAttribute("onerror",`this.onerror=null;this.src="${T}"; this.classList.add("${D}")`):0<v.indexOf(".mov")||0<v.indexOf(".mp4")?e.setAttribute("onerror",`this.onerror=null;this.src="${T}"; this.classList.add("${C}")`):e.setAttribute("onerror",`this.onerror=null;this.src="${T}"; this.classList.add("${L}")`),e.classList.remove(A),e.src=m.result},f[e]&&m.readAsDataURL(f[e])}0===f.length?i.setAttribute("aria-label",M):F(i,f),P(c,f,h)}};e=r({},{init(e){s(c,e).forEach(t=>{const{instructions:s,dropTarget:r}=H(t);r.addEventListener("dragover",function(){this.classList.add(n)},!1),r.addEventListener("dragleave",function(){this.classList.remove(n)},!1),r.addEventListener("drop",function(){this.classList.remove(n)},!1),t.addEventListener("change",e=>R(e,t,s,r),!1)})},teardown(e){s(a,e).forEach(e=>{var t=e.parentElement.parentElement;t.parentElement.replaceChild(e,t),e.className=w})},getFileInputContext:v,disable:e=>{var{dropZoneEl:e,inputEl:t}=v(e);t.disabled=!0,e.classList.add(b)},ariaDisable:e=>{e=v(e).dropZoneEl;e.classList.add(b)},enable:e=>{var{dropZoneEl:e,inputEl:t}=v(e);t.disabled=!1,e.classList.remove(b),e.removeAttribute("aria-disabled")}});t.exports=e},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/sanitizer":51,"../../uswds-core/src/js/utils/select-or-matches":53}],23:[function(e,t,s){"use strict";var r=e("../../uswds-core/src/js/utils/behavior"),a=e("../../uswds-core/src/js/events")["CLICK"];const n=e("../../uswds-core/src/js/config")["prefix"],i=`.${n}-footer--big`,o=i+" nav"+` .${n}-footer__primary-link`;function c(r){var e=document.querySelector(i);e&&e.querySelectorAll(o).forEach(e=>{var t=e.getAttribute("class"),s=e.getAttribute("data-tag")||e.tagName,s=document.createElement(r?"button":s);s.setAttribute("class",t),s.classList.toggle(n+"-footer__primary-link--button",r),s.textContent=e.textContent,r&&(s.setAttribute("data-tag",e.tagName),t=n+"-footer-menu-list-"+Math.floor(1e5*Math.random()),s.setAttribute("aria-controls",t),s.setAttribute("aria-expanded","false"),e.nextElementSibling.setAttribute("id",t),s.setAttribute("type","button")),e.after(s),e.remove()})}const l=e=>{c(e.matches)};t.exports=r({[a]:{[o]:function(){var e;window.innerWidth<480&&(e="true"===this.getAttribute("aria-expanded"),this.closest(i).querySelectorAll(o).forEach(e=>{e.setAttribute("aria-expanded",!1)}),this.setAttribute("aria-expanded",!e))}}},{HIDE_MAX_WIDTH:480,init(){c(window.innerWidth<480),this.mediaQueryList=window.matchMedia("(max-width: 479.9px)"),this.mediaQueryList.addListener(l)},teardown(){this.mediaQueryList.removeListener(l)}})},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/events":37,"../../uswds-core/src/js/utils/behavior":46}],24:[function(e,t,I){"use strict";var s=e("receptor/keymap"),r=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select"),n=e("../../uswds-core/src/js/utils/toggle"),i=e("../../uswds-core/src/js/utils/focus-trap"),o=e("../../usa-accordion/src/index");var c=e("../../uswds-core/src/js/utils/scrollbar-width"),l=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const u=`.${e}-header`,d=`.${e}-nav`;var p=`.${e}-nav-container`;const b=`.${e}-nav__primary`,f=`.${e}-nav__primary-item`,h=`button.${e}-nav__link`;var m=d+" a";const v="data-nav-hidden",g=`.${e}-menu-btn`,w=`.${e}-nav__close`;var y=w+`, .${e}-overlay`;const E=[d,`.${e}-overlay`].join(", "),A=`body *:not(${u}, ${p}, ${d}, ${d} *):not([aria-hidden])`,x=(v,"usa-js-mobile-nav--active");let j,L,_;const S=()=>document.body.classList.contains(x),C=navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome");e=c();const D=window.getComputedStyle(document.body).getPropertyValue("padding-right"),$=parseInt(D.replace(/px/,""),10)+parseInt(e.replace(/px/,""),10)+"px",T=()=>{const t=document.querySelector(u).parentNode;(_=document.querySelectorAll(A)).forEach(e=>{e!==t&&(e.setAttribute("aria-hidden",!0),e.setAttribute(v,""))})},k=()=>{(_=document.querySelectorAll("[data-nav-hidden]"))&&_.forEach(e=>{e.removeAttribute("aria-hidden"),e.removeAttribute(v)})};p=e=>{var t=document["body"];const s="boolean"==typeof e?e:!S();e=t,r=`-${window.scrollY}px`,C&&e.style.setProperty("--scrolltop",r),t.classList.toggle(x,s),a(E).forEach(e=>e.classList.toggle("is-visible",s)),j.focusTrap.update(s);var e=t.querySelector(w),r=document.querySelector(g);return t.style.paddingRight=t.style.paddingRight===$?D:$,(s?T:k)(),s&&e?e.focus():!s&&r&&"none"!==getComputedStyle(r).display&&r.focus(),s};const M=()=>{var e=document.body.querySelector(w);S()&&e&&0===e.getBoundingClientRect().width&&j.toggleNav.call(e,!1)},q=()=>j.toggleNav.call(j,!1),N=()=>{L&&(n(L,!1),L=null)};j=r({[l]:{[h](){return L!==this&&N(),L||(L=this,n(L,!0)),!1},body:N,[g]:p,[y]:p,[m](){var e=this.closest(o.ACCORDION);e&&o.getButtons(e).forEach(e=>o.hide(e)),S()&&j.toggleNav.call(j,!1)}},keydown:{[b]:s({Escape:e=>{var t;N(),t=(e=e).target.closest(f),e.target.matches(h)||(e=t.querySelector(h))&&e.focus()}})},focusout:{[b](e){e.target.closest(b).contains(e.relatedTarget)||N()}}},{init(e){e=e.matches(d)?e:e.querySelector(d);e&&(j.focusTrap=i(e,{Escape:q})),C&&document.body.classList.add("is-safari"),M(),window.addEventListener("resize",M,!1)},teardown(){window.removeEventListener("resize",M,!1),L=!1},focusTrap:null,toggleNav:p}),t.exports=j},{"../../usa-accordion/src/index":15,"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/events":37,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/focus-trap":48,"../../uswds-core/src/js/utils/scrollbar-width":52,"../../uswds-core/src/js/utils/select":54,"../../uswds-core/src/js/utils/toggle":57,"receptor/keymap":11}],25:[function(e,t,s){"use strict";const r=e("receptor/once");var a=e("receptor/keymap");const n=e("../../uswds-core/src/js/utils/select-or-matches");var i=e("../../uswds-core/src/js/utils/behavior"),o=e("../../uswds-core/src/js/config")["prefix"],c=e("../../uswds-core/src/js/events")["CLICK"];const l=e("../../uswds-core/src/js/utils/sanitizer"),u=o+"-current",d=0,p=o+"-in-page-nav",b=o+"-anchor",f=p+"__nav",h=p+"__list",m=p+"__item",v=p+"__link",g=p+"__heading",w=m+"--sub-item",y=e=>{const t=document.querySelectorAll("."+v);e.map(e=>!0===e.isIntersecting&&1<=e.intersectionRatio&&(t.forEach(e=>e.classList.remove(u)),document.querySelector(`a[href="#${e.target.id}"]`).classList.add(u),!0))},E=e=>{var t=document.querySelector("."+p).dataset.scrollOffset||d;window.scroll({behavior:"smooth",top:e.offsetTop-t,block:"start"}),window.location.hash.slice(1)!==e.id&&window.history.pushState(null,"","#"+e.id)},A=e=>{var t=l.escapeHTML`${e.dataset.titleText||"On this page"}`,s=l.escapeHTML`${e.dataset.titleHeadingLevel||"h4"}`,r={root:null,rootMargin:l.escapeHTML`${e.dataset.rootMargin||"0px 0px 0px 0px"}`,threshold:[l.escapeHTML`${e.dataset.threshold||"1"}`]},a=(e=>{e=document.querySelectorAll(e+` h2, ${e} h3`);return Array.from(e).filter(e=>{e=window.getComputedStyle(e);return"none"!==e.getPropertyValue("display")&&"hidden"!==e.getPropertyValue("visibility")})})(l.escapeHTML`${e.dataset.mainContentSelector||"main"}`),n=document.createElement("nav"),s=(n.setAttribute("aria-label",t),n.classList.add(f),document.createElement(s));s.classList.add(g),s.setAttribute("tabindex","0"),s.textContent=t,n.appendChild(s);const i=document.createElement("ul");i.classList.add(h),n.appendChild(i),a.forEach(e=>{var t=document.createElement("li"),s=document.createElement("a"),r=document.createElement("a"),a=e.textContent,n=e.tagName.toLowerCase(),n=(t.classList.add(m),"h3"===n&&t.classList.add(w),(e=>{var t=e.textContent.toLowerCase().replace(/[^a-z\d]/g,"-").replace(/-{2,}/g,"-").replace(/^-|-$/g,"");let s,r=0;for(;s=t,1<(r+=1)&&(s+="-"+r),document.getElementById(s););return s})(e));s.setAttribute("href","#"+n),s.setAttribute("class",v),s.textContent=a,r.setAttribute("id",n),r.setAttribute("class",b),e.insertAdjacentElement("afterbegin",r),i.appendChild(t),t.appendChild(s)}),e.appendChild(n);t=document.querySelectorAll("."+b);const o=new window.IntersectionObserver(y,r);t.forEach(e=>{o.observe(e)})};e=i({[c]:{["."+v](e){e.preventDefault(),this.disabled||(e=this,e=document.getElementById(e.hash.slice(1)),E(e))}},keydown:{["."+v]:a({Enter:e=>{e=(e=>{let t;return t=(e&&1===e.nodeType?e.getAttribute("href"):e.target.hash).replace("#","")})(e),e=document.getElementById(e);const t=e.parentElement;t&&(t.setAttribute("tabindex",0),t.focus(),t.addEventListener("blur",r(()=>{t.setAttribute("tabindex",-1)}))),E(e)}})}},{init(e){n("."+p,e).forEach(e=>{A(e),(e=window.location.hash.slice(1))&&(e=document.getElementById(e))&&E(e)})}});t.exports=e},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/events":37,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/sanitizer":51,"../../uswds-core/src/js/utils/select-or-matches":53,"receptor/keymap":11,"receptor/once":12}],26:[function(e,t,s){"use strict";const r=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior"),e=e("../../uswds-core/src/js/config")["prefix"];const n="."+(e+"-masked"),i=e+"-input-mask",o=i+"--content",c="placeholder",p="_#dDmMyY9",b="A",f=(e,t)=>e?t.replace(/\W/g,""):t.replace(/\D/g,""),h=e=>!Number.isNaN(parseInt(e,10)),m=e=>!!e&&e.match(/[A-Z]/i),l=e=>{var t=e,s=t.getAttribute("id"),r=(t.value=(e=>{var t=e.dataset.charset,s=t||e.dataset.placeholder,e=e["value"],r=s.length;let a="",n,i;var o=f(t,e);for(n=0,i=0;n<r;n+=1){var c=h(o[i]),l=m(o[i]),u=0<=p.indexOf(s[n]),d=0<=b.indexOf(s[n]);if(u&&c||t&&d&&l)a+=o[i],i+=1;else{if(!t&&!c&&u||t&&(d&&!l||u&&!c))return a;a+=s[n]}if(void 0===o[i])break}return a})(t),r=(t=e).value,t=""+e.dataset.placeholder.substr(r.length),(e=document.createElement("i")).textContent=r,[e,t]),e=document.getElementById(s+"Mask");e.textContent="",e.replaceChildren(r[0],r[1])};e=a({keyup:{[n](){l(this)}}},{init(e){r(n,e).forEach(e=>{var t,s,r;(r=(e=e).getAttribute(c))&&(e.setAttribute("maxlength",r.length),e.setAttribute("data-placeholder",r),e.removeAttribute(c),(t=document.createElement("span")).classList.add(i),t.setAttribute("data-mask",r),(s=document.createElement("span")).classList.add(o),s.setAttribute("aria-hidden","true"),s.id=e.id+"Mask",s.textContent=r,t.appendChild(s),e.closest("form").insertBefore(t,e),t.appendChild(e))})}});t.exports=e},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/select-or-matches":53}],27:[function(e,t,s){"use strict";var r=e("receptor/keymap"),a=e("../../uswds-core/src/js/utils/behavior");const n=e("../../uswds-core/src/js/utils/toggle"),i=e("../../uswds-core/src/js/utils/focus-trap"),o=e("../../usa-accordion/src/index");var c=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const l=`.${e}-language__submenu`,u=`.${e}-language__primary`,d=`.${e}-language__primary-item`,p=`button.${e}-language__link`;let b,f;const h=()=>b.toggleLanguage.call(b,!1),m=()=>{f&&(n(f,!1),f=null)};b=a({[c]:{[p](){return f!==this&&m(),f===this?m():f||(f=this,n(f,!0)),!1},body:m,[`.${e}-language`+" a"](){var e=this.closest(o.ACCORDION);e&&o.getButtons(e).forEach(e=>o.hide(e))}},keydown:{[u]:r({Escape:e=>{var t;m(),t=(e=e).target.closest(d),e.target.matches(p)||t.querySelector(p).focus()}})},focusout:{[u](e){e.target.closest(u).contains(e.relatedTarget)||m()}}},{init(e){e=e.matches(l)?e:e.querySelector(l);e&&(b.focusTrap=i(e,{Escape:h}))},teardown(){f=!1},focusTrap:null}),t.exports=b},{"../../usa-accordion/src/index":15,"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/events":37,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/focus-trap":48,"../../uswds-core/src/js/utils/toggle":57,"receptor/keymap":11}],28:[function(e,t,s){"use strict";const a=e("../../uswds-core/src/js/utils/select-or-matches"),u=e("../../uswds-core/src/js/utils/focus-trap");var r=e("../../uswds-core/src/js/utils/scrollbar-width"),n=e("../../uswds-core/src/js/utils/behavior"),e=e("../../uswds-core/src/js/config")["prefix"];const d=e+"-modal",i=d+"-overlay",o=d+"-wrapper",p="data-open-modal",b="data-close-modal",f="data-force-action",h="data-modal-hidden",c="."+d,m=`.${o} *[data-focus]`,v=`${o} *[${b}]`,l=(p,v+`, .${i}:not([${f}])`),g=`body > *:not(.${o}):not([aria-hidden])`,w=(h,"usa-js-modal--active"),y="is-hidden";let E,A,x;const j=r(),L=()=>{E.toggleModal.call(E,!1)},_=()=>{A=window.getComputedStyle(document.body).getPropertyValue("padding-right"),x=parseInt(A.replace(/px/,""),10)+parseInt(j.replace(/px/,""),10)+"px"};function S(e){let t,s=e.target;var r,a,n,i,o=document["body"],c=!document.body.classList.contains(w),l=s?s.getAttribute("aria-controls"):document.querySelector(".usa-modal-wrapper.is-visible"),l=c?document.getElementById(l):document.querySelector(".usa-modal-wrapper.is-visible");return!(!l||(r=l.querySelector(m)?l.querySelector(m):l.querySelector(".usa-modal"),a=document.getElementById(l.getAttribute("data-opener")),n=o.querySelector("*[data-open-modal][aria-controls]"),i=l.getAttribute(f),(s="keydown"===e.type&&null!==l?l.querySelector(v):s)&&(s.hasAttribute(p)&&(null===this.getAttribute("id")?(t="modal-"+(Math.floor(9e5*Math.random())+1e5),this.setAttribute("id",t)):t=this.getAttribute("id"),l.setAttribute("data-opener",t)),s.closest("."+d))&&!s.hasAttribute(b)&&!s.closest(`[${b}]`)))&&(o.classList.toggle(w,c),l.classList.toggle("is-visible",c),l.classList.toggle(y,!c),i&&o.classList.toggle("usa-js-no-click",c),o.style.paddingRight===x?o.style.removeProperty("padding-right"):o.style.paddingRight=x,c&&r?(E.focusTrap=i?u(l):u(l,{Escape:L}),E.focusTrap.update(c),r.focus(),document.querySelectorAll(g).forEach(e=>{e.setAttribute("aria-hidden","true"),e.setAttribute(h,"")})):!c&&n&&a&&(document.querySelectorAll("[data-modal-hidden]").forEach(e=>{e.removeAttribute("aria-hidden"),e.removeAttribute(h)}),a.focus(),E.focusTrap.update(c)),c)}const C=(e,t)=>{const s=e.getAttribute("id");var r=e.getAttribute("aria-labelledby"),a=e.getAttribute("aria-describedby"),n=e.hasAttribute(f);if(!r)throw new Error(s+" is missing aria-labelledby attribute");if(a)return t.setAttribute("role","dialog"),t.setAttribute("id",s),t.setAttribute("aria-labelledby",r),t.setAttribute("aria-describedby",a),n&&t.setAttribute(f,n),t.querySelectorAll(l).forEach(e=>{e.setAttribute("aria-controls",s)}),e.removeAttribute("id"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-describedby"),e.setAttribute("tabindex","-1"),t;throw new Error(s+" is missing aria-desribedby attribute")},D=e=>{if(!e.getAttribute("id"))throw new Error("Modal markup is missing ID");var t=(e=>{var t=e.getAttribute("id");const s=document.createElement("div");e=Array.from(e.attributes);return _(),s.setAttribute("data-placeholder-for",t),s.style.display="none",s.setAttribute("aria-hidden","true"),e.forEach(e=>{s.setAttribute("data-original-"+e.name,e.value)}),s})(e),s=(e.after(t),t=e,e=document.createElement("div"),s=document.createElement("div"),e.classList.add(y,o),s.classList.add(i),e.append(s),s.append(t),C(t,e),e);document.body.appendChild(s)};E=n({},{init(e){a(c,e).forEach(e=>{var t=e.id;D(e),a(`[aria-controls="${t}"]`,document).forEach(e=>{"A"===e.nodeName&&(e.setAttribute("role","button"),e.addEventListener("click",e=>e.preventDefault())),e.addEventListener("click",S)})})},teardown(e){a(c,e).forEach(e=>{var t=e.id;{const r=e;var e,s=(e=r.parentElement.parentElement).getAttribute("id");s&&((s=document.querySelector(`[data-placeholder-for="${s}"]`))&&(Array.from(s.attributes).forEach(e=>{e.name.startsWith("data-original-")&&r.setAttribute(e.name.substr(14),e.value)}),s.after(r),s.parentElement.removeChild(s)),e.parentElement.removeChild(e))}a(`[aria-controls="${t}"]`,document).forEach(e=>e.removeEventListener("click",S))})},focusTrap:null,toggleModal:S}),t.exports=E},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/focus-trap":48,"../../uswds-core/src/js/utils/scrollbar-width":52,"../../uswds-core/src/js/utils/select-or-matches":53}],29:[function(e,t,s){"use strict";const r=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior"),e=e("../../uswds-core/src/js/config")["prefix"];const n="."+(e+"-range"),i=e=>{var t=e.dataset.textPreposition||"of",s=e.dataset.textUnit,r=e.value,a=e.getAttribute("max")||100;let n;n=s?r+` ${s} ${t} `+a:r+` ${t} `+a,e.setAttribute("aria-valuetext",n)};e=a({change:{[n](){i(this)}}},{init(e){r(n,e).forEach(e=>{i(e)})},updateCallout:i});t.exports=e},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/select-or-matches":53}],30:[function(e,t,s){"use strict";const a=e("receptor/ignore");var r=e("../../uswds-core/src/js/utils/behavior");const n=e("../../uswds-core/src/js/utils/select"),i=e("../../uswds-core/src/js/events")["CLICK"],o=".js-search-button",c=".js-search-form",l="[type=search]",u="header";let d;const p=e=>{e=e.closest(u);return(e||document).querySelector(c)},b=(e,t)=>{var s=p(e);if(!s)throw new Error(`No ${c} found for search toggle in ${u}!`);if(e.hidden=t,s.hidden=!t,t){e=s.querySelector(l);e&&e.focus();const r=a(s,()=>{d&&!function(){b(this,!1),d=void 0}.call(d),document.body.removeEventListener(i,r)});setTimeout(()=>{document.body.addEventListener(i,r)},0)}};e=r({[i]:{".js-search-button":function(){b(this,!0),d=this}}},{init(e){n(o,e).forEach(e=>{b(e,!1)})},teardown(){d=void 0}});t.exports=e},{"../../uswds-core/src/js/events":37,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/select":54,"receptor/ignore":9}],31:[function(e,t,s){"use strict";const r=e("receptor/once");var a=e("../../uswds-core/src/js/utils/behavior"),n=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];t.exports=a({[n]:{[`.${e}-skipnav[href^="#"], .${e}-footer__return-to-top [href^="#"]`]:function(){var e=encodeURI(this.getAttribute("href"));const t=document.getElementById("#"===e?"main-content":e.slice(1));t&&(t.style.outline="0",t.setAttribute("tabindex",0),t.focus(),t.addEventListener("blur",r(()=>{t.setAttribute("tabindex",-1)})))}}})},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/events":37,"../../uswds-core/src/js/utils/behavior":46,"receptor/once":12}],32:[function(e,t,s){"use strict";const o=e("../../uswds-core/src/js/utils/select");var r=e("../../uswds-core/src/js/utils/behavior"),a=e("../../uswds-core/src/js/events")["CLICK"];const n=e("../../uswds-core/src/js/config")["prefix"],i=e("../../uswds-core/src/js/utils/sanitizer"),c=`.${n}-table`,l="aria-sort",u="ascending",d="descending",p=n+"-table__header__button",b="."+p,f="th[data-sortable]",h=`.${n}-table__announcement-region[aria-live="polite"]`,m=(e,t)=>e.children[t].getAttribute("data-sort-value")||e.children[t].innerText||e.children[t].textContent,v=(r,a)=>(e,t)=>{var s=m(a?e:t,r),t=m(a?t:e,r);return s&&t&&!Number.isNaN(Number(s))&&!Number.isNaN(Number(t))?s-t:s.toString().localeCompare(t,navigator.language,{numeric:!0,ignorePunctuation:!0})},g=e=>{var t=e.innerText,s=e.getAttribute(l)===u,r=t+", sortable column, currently "+(e.getAttribute(l)===u||e.getAttribute(l)===d||!1?s?"sorted "+u:"sorted "+d:"unsorted"),t=`Click to sort by ${t} in ${s?d:u} order.`;e.setAttribute("aria-label",r),e.querySelector(b).setAttribute("title",t)},w=(t,e)=>{var s,r=t.closest(c);let a=e;if("boolean"!=typeof a&&(a=t.getAttribute(l)===u),!r)throw new Error(f+" is missing outer "+c);if(a=((e,t)=>{e.setAttribute(l,!0===t?d:u),g(e);const s=e.closest(c).querySelector("tbody");var r=[].slice.call(s.querySelectorAll("tr"));const a=[].slice.call(e.parentNode.children).indexOf(e);return r.sort(v(a,!t)).forEach(e=>{[].slice.call(e.children).forEach(e=>e.removeAttribute("data-sort-active")),e.children[a].setAttribute("data-sort-active",!0),s.appendChild(e)}),!0})(t,e)){s=r,o(f,s).filter(e=>e.closest(c)===s).forEach(e=>{e!==t&&((e=e).removeAttribute(l),g(e))});var e=r,r=t,n=e.querySelector("caption").innerText,i=r.getAttribute(l)===u,r=r.innerText;if(!(e=e.nextElementSibling)||!e.matches(h))throw new Error("Table containing a sortable column header is not followed by an aria-live region.");n=`The table named "${n}" is now sorted by ${r} in ${i?u:d} order.`,e.innerText=n}};e=r({[a]:{[b](e){e.preventDefault(),w(e.target.closest(f),e.target.closest(f).getAttribute(l)===u)}}},{init(e){var t,e=o(f,e),e=(e.forEach(e=>{return e=e,(t=document.createElement("button")).setAttribute("tabindex","0"),t.classList.add(p),t.innerHTML=i.escapeHTML`
  <svg class="${n}-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g class="descending" fill="transparent">
      <path d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
    </g>
    <g class="ascending" fill="transparent">
      <path transform="rotate(180, 12, 12)" d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
    </g>
    <g class="unsorted" fill="transparent">
      <polygon points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"/>
    </g>
  </svg>
  `,e.appendChild(t),void g(e);var t}),e.filter(e=>e.getAttribute(l)===u||e.getAttribute(l)===d)[0]);void 0!==e&&((t=e.getAttribute(l))===u?w(e,!0):t===d&&w(e,!1))},TABLE:c,SORTABLE_HEADER:f,SORT_BUTTON:b});t.exports=e},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/events":37,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/sanitizer":51,"../../uswds-core/src/js/utils/select":54}],33:[function(e,t,s){"use strict";var r=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select-or-matches");var n=e("../../uswds-core/src/js/config")["prefix"];const{COMBO_BOX_CLASS:f,enhanceComboBox:i}=e("../../usa-combo-box/src/index"),h="."+(n+"-time-picker"),m={filter:"0?{{ hourQueryFilter }}:{{minuteQueryFilter}}.*{{ apQueryFilter }}m?",apQueryFilter:"([ap])",hourQueryFilter:"([1-9][0-2]?)",minuteQueryFilter:"[\\d]+:([0-9]{0,2})"},v=e=>{let t;var s;return t=e&&([e,s]=e.split(":").map(e=>{let t;e=parseInt(e,10);return t=Number.isNaN(e)?t:e}),null!=e)&&null!=s?60*e+s:t},o=t=>{const s=t.closest(h),r=s.querySelector("input");if(!r)throw new Error(h+" is missing inner input");const a=document.createElement("select");["id","name","required","aria-label","aria-labelledby","disabled","aria-disabled"].forEach(e=>{var t;r.hasAttribute(e)&&(t=r.getAttribute(e),a.setAttribute(e,t),r.removeAttribute(e))});var n=(e,t)=>("0000"+e).slice(-t),t=Math.max(0,v(s.dataset.minTime)||0),i=Math.min(1439,v(s.dataset.maxTime)||1439),o=Math.floor(Math.max(1,s.dataset.step||30));let c;for(let e=t;e<=i;e+=o){u=e,l=void 0,l=u%60,u=Math.floor(u/60);var{minute:l,hour24:u,hour12:d,ampm:p}={minute:l,hour24:u,hour12:u%12||12,ampm:u<12?"am":"pm"},b=document.createElement("option");b.value=n(u,2)+":"+n(l,2),b.text=d+":"+n(l,2)+p,b.text===r.value&&(c=b.value),a.appendChild(b)}s.classList.add(f),Object.keys(m).forEach(e=>{s.dataset[e]=m[e]}),s.dataset.disableFiltering="true",s.dataset.defaultValue=c,s.appendChild(a),r.remove()};e=r({},{init(e){a(h,e).forEach(e=>{o(e),i(e)})},FILTER_DATASET:m});t.exports=e},{"../../usa-combo-box/src/index":19,"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/select-or-matches":53}],34:[function(e,t,s){"use strict";const r=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior"),n=e("../../uswds-core/src/js/config")["prefix"];const b=e("../../uswds-core/src/js/utils/is-in-viewport"),i=`.${n}-tooltip`;e=`.${n}-tooltip__trigger`;const o=n+"-tooltip__trigger",c=n+"-tooltip",f=n+"-tooltip__body",h="is-visible",m=n+"-tooltip__body--wrap",l=e=>{var t=e.parentNode,s=t.querySelector("."+f);return{trigger:e,wrapper:t,body:s}},u=(t,r,e)=>{t.setAttribute("aria-hidden","false"),t.classList.add("is-set");const a=e=>{t.classList.remove(f+"--top"),t.classList.remove(f+"--bottom"),t.classList.remove(f+"--right"),t.classList.remove(f+"--left"),t.classList.add(f+"--"+e)},n=e=>{e.style.top=null,e.style.bottom=null,e.style.right=null,e.style.left=null,e.style.margin=null},i=(e,t)=>parseInt(window.getComputedStyle(e).getPropertyValue(t),10),o=(e,t,s)=>{return 0<i(s,"margin-"+e)?t-i(s,"margin-"+e):t},c=e=>{n(e);var t=o("top",e.offsetHeight,r),s=o("left",e.offsetWidth,r);a("top"),e.style.left="50%",e.style.top="-5px",e.style.margin=`-${t}px 0 0 -${s/2}px`},l=e=>{n(e);var t=o("left",e.offsetWidth,r);a("bottom"),e.style.left="50%",e.style.margin=`5px 0 0 -${t/2}px`},u=e=>{n(e);var t=o("top",e.offsetHeight,r);a("right"),e.style.top="50%",e.style.left=r.offsetLeft+r.offsetWidth+5+"px",e.style.margin=`-${t/2}px 0 0 0`},d=e=>{n(e);var t=o("top",e.offsetHeight,r),s=o("left",r.offsetLeft>e.offsetWidth?r.offsetLeft-e.offsetWidth:e.offsetWidth,r);a("left"),e.style.top="50%",e.style.left="-5px",e.style.margin=`-${t/2}px 0 0 ${r.offsetLeft>e.offsetWidth?s:-s}px`};function p(s,e=1){const r=[c,l,u,d];let a=!1;!function e(t){t<r.length&&((0,r[t])(s),b(s)?a=!0:e(t+=1))}(0),a||(s.classList.add(m),e<=2&&p(s,e+=1))}switch(e){case"top":c(t),b(t)||p(t);break;case"bottom":l(t),b(t)||p(t);break;case"right":u(t),b(t)||p(t);break;case"left":d(t),b(t)||p(t)}setTimeout(()=>{t.classList.add(h)},20)},d=e=>{e.classList.remove(h),e.classList.remove("is-set"),e.classList.remove(m),e.setAttribute("aria-hidden","true")},p=e=>{var t="tooltip-"+(Math.floor(9e5*Math.random())+1e5),s=e.getAttribute("title");const r=document.createElement("span");var a=document.createElement("span"),n=e.getAttribute("data-classes");let i=e.getAttribute("data-position");return i||(i="top",e.setAttribute("data-position",i)),e.setAttribute("aria-describedby",t),e.setAttribute("tabindex","0"),e.removeAttribute("title"),e.classList.remove(c),e.classList.add(o),e.parentNode.insertBefore(r,e),r.appendChild(e),r.classList.add(c),r.appendChild(a),n&&n.split(" ").forEach(e=>r.classList.add(e)),a.classList.add(f),a.setAttribute("id",t),a.setAttribute("role","tooltip"),a.setAttribute("aria-hidden","true"),a.textContent=s,{tooltipBody:a,position:i,tooltipContent:s,wrapper:r}};n=a({"mouseover focusin":{[i](e){e=e.target;"BUTTON"===e.nodeName&&e.hasAttribute("title")&&p(e)},[e](e){var{trigger:e,body:t}=l(e.target);u(t,e,e.dataset.position)}},"mouseout focusout":{[e](e){e=l(e.target).body;d(e)}}},{init(e){r(i,e).forEach(e=>{p(e)})},setup:p,getTooltipElements:l,show:u,hide:d});t.exports=n},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/is-in-viewport":49,"../../uswds-core/src/js/utils/select-or-matches":53}],35:[function(e,t,s){"use strict";var r=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/validate-input");var n=e("../../uswds-core/src/js/config")["prefix"];const i=e("../../uswds-core/src/js/utils/select-or-matches"),o="input[data-validation-element]",c=`.${n}-checklist__item`,l=e=>{var t,r,s,a;a=(t=e).parentNode,s=t.getAttribute("id")+"-sr-summary",t.setAttribute("aria-describedby",s),(t=document.createElement("span")).setAttribute("data-validation-status",""),t.classList.add("usa-sr-only"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic",!0),t.setAttribute("id",s),a.append(t),s=(r=e).parentNode.querySelectorAll(c),a=r.getAttribute("data-validation-element"),r.setAttribute("aria-controls",a),s.forEach(e=>{let t="status incomplete";r.hasAttribute("data-validation-incomplete")&&(t=r.getAttribute("data-validation-incomplete"));var s=`${e.textContent} ${t} `;e.setAttribute("tabindex","0"),e.setAttribute("aria-label",s)})};e=r({"input change":{"input[data-validation-element]"(e){e=e.target,a(e)}}},{init(e){i(o,e).forEach(e=>l(e))}});t.exports=e},{"../../uswds-core/src/js/config":36,"../../uswds-core/src/js/utils/behavior":46,"../../uswds-core/src/js/utils/select-or-matches":53,"../../uswds-core/src/js/utils/validate-input":58}],36:[function(e,t,s){"use strict";t.exports={prefix:"usa"}},{}],37:[function(e,t,s){"use strict";t.exports={CLICK:"click"}},{}],38:[function(e,t,s){"use strict";var r=e("../../../usa-accordion/src/index"),a=e("../../../usa-banner/src/index"),n=e("../../../usa-button/src/index"),i=e("../../../usa-character-count/src/index"),o=e("../../../usa-combo-box/src/index"),c=e("../../../usa-date-picker/src/index"),l=e("../../../usa-date-range-picker/src/index"),u=e("../../../usa-file-input/src/index"),d=e("../../../usa-footer/src/index"),p=e("../../../usa-in-page-navigation/src/index"),b=e("../../../usa-input-mask/src/index"),f=e("../../../usa-language-selector/src/index"),h=e("../../../usa-modal/src/index"),m=e("../../../usa-header/src/index"),v=e("../../../_usa-password/src/index"),g=e("../../../usa-range/src/index"),w=e("../../../usa-search/src/index"),y=e("../../../usa-skipnav/src/index"),E=e("../../../usa-table/src/index"),A=e("../../../usa-time-picker/src/index"),x=e("../../../usa-tooltip/src/index"),e=e("../../../usa-validation/src/index");t.exports={accordion:r,banner:a,button:n,characterCount:i,comboBox:o,datePicker:c,dateRangePicker:l,fileInput:u,footer:d,inPageNavigation:p,inputMask:b,languageSelector:f,modal:h,navigation:m,password:v,range:g,search:w,skipnav:y,table:E,timePicker:A,tooltip:x,validator:e}},{"../../../_usa-password/src/index":14,"../../../usa-accordion/src/index":15,"../../../usa-banner/src/index":16,"../../../usa-button/src/index":17,"../../../usa-character-count/src/index":18,"../../../usa-combo-box/src/index":19,"../../../usa-date-picker/src/index":20,"../../../usa-date-range-picker/src/index":21,"../../../usa-file-input/src/index":22,"../../../usa-footer/src/index":23,"../../../usa-header/src/index":24,"../../../usa-in-page-navigation/src/index":25,"../../../usa-input-mask/src/index":26,"../../../usa-language-selector/src/index":27,"../../../usa-modal/src/index":28,"../../../usa-range/src/index":29,"../../../usa-search/src/index":30,"../../../usa-skipnav/src/index":31,"../../../usa-table/src/index":32,"../../../usa-time-picker/src/index":33,"../../../usa-tooltip/src/index":34,"../../../usa-validation/src/index":35}],39:[function(e,t,s){"use strict";"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){var t=t||{bubbles:!1,cancelable:!1,detail:null},s=document.createEvent("CustomEvent");return s.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),s})},{}],40:[function(e,t,s){"use strict";var r=window.HTMLElement.prototype;const a="hidden";a in r||Object.defineProperty(r,a,{get(){return this.hasAttribute(a)},set(e){e?this.setAttribute(a,""):this.removeAttribute(a)}})},{}],41:[function(e,t,s){"use strict";e("classlist-polyfill"),e("./element-hidden"),e("./number-is-nan"),e("./custom-event"),e("./svg4everybody")},{"./custom-event":39,"./element-hidden":40,"./number-is-nan":42,"./svg4everybody":43,"classlist-polyfill":1}],42:[function(e,t,s){"use strict";Number.isNaN=Number.isNaN||function(e){return"number"==typeof e&&e!=e}},{}],43:[function(e,t,s){"use strict";function f(e,t,s,r){if(s){var a=document.createDocumentFragment(),n=!t.hasAttribute("viewBox")&&s.getAttribute("viewBox");n&&t.setAttribute("viewBox",n);for(var i=document.importNode?document.importNode(s,!0):s.cloneNode(!0),o=document.createElementNS(t.namespaceURI||"http://www.w3.org/2000/svg","g");i.childNodes.length;)o.appendChild(i.firstChild);if(r)for(var c=0;r.attributes.length>c;c++){var l=r.attributes[c];"xlink:href"!==l.name&&"href"!==l.name&&o.setAttribute(l.name,l.value)}a.appendChild(o),e.appendChild(a)}}t.exports=function(e){var c,l=Object(e),e=window.top!==window.self,u=(c="polyfill"in l?l.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&e,{}),d=window.requestAnimationFrame||setTimeout,p=document.getElementsByTagName("use"),b=0;c&&function e(){if(!(b&&p.length-b<=0))for(var t=b=0;t<p.length;){var s,r,a=p[t],n=a.parentNode,i=function(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}(n),o=a.getAttribute("xlink:href")||a.getAttribute("href");!o&&l.attributeName&&(o=a.getAttribute(l.attributeName)),i&&o?c&&(!l.validate||l.validate(o,i,a)?(n.removeChild(a),s=(o=o.split("#")).shift(),o=o.join("#"),s.length?((r=u[s])||((r=u[s]=new XMLHttpRequest).open("GET",s),r.send(),r._embeds=[]),r._embeds.push({parent:n,svg:i,id:o}),function(r,a){r.onreadystatechange=function(){var s;4===r.readyState&&((s=r._cachedDocument)||((s=r._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=r.responseText,s.domain!==document.domain&&(s.domain=document.domain),r._cachedTarget={}),r._embeds.splice(0).map(function(e){var t=(t=r._cachedTarget[e.id])||(r._cachedTarget[e.id]=s.getElementById(e.id));f(e.parent,e.svg,t,a)}))},r.onreadystatechange()}(r,a)):f(n,i,document.getElementById(o),a)):(++t,++b)):++t}d(e,67)}()}},{}],44:[function(e,t,s){"use strict";window.uswdsPresent=!0,e("./polyfills");var r=e("./config");const a=e("./index"),n=e("./polyfills/svg4everybody");r.components=a;e=()=>{const t=document.body;Object.keys(a).forEach(e=>{a[e].on(t)}),n()};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e,{once:!0}):e(),s.default=r,s.initComponents=e},{"./config":36,"./index":38,"./polyfills":41,"./polyfills/svg4everybody":43}],45:[function(e,t,s){"use strict";t.exports=(e=document)=>e.activeElement},{}],46:[function(e,t,s){"use strict";const r=e("object-assign"),a=e("receptor/behavior"),n=(...e)=>function(t=document.body){e.forEach(e=>{"function"==typeof this[e]&&this[e].call(this,t)})};t.exports=(e,t)=>a(e,r({on:n("init","add"),off:n("teardown","remove")},t))},{"object-assign":4,"receptor/behavior":5}],47:[function(e,t,s){"use strict";t.exports=function(t,s=500){let r=null;return(...e)=>{window.clearTimeout(r),r=window.setTimeout(()=>{t.apply(this,e)},s)}}},{}],48:[function(e,t,s){"use strict";const a=e("object-assign"),n=e("receptor")["keymap"],i=e("./behavior"),o=e("./select"),c=e("./active-element"),l=e=>{const t=o('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',e),s=t[0],r=t[t.length-1];return{firstTabStop:s,lastTabStop:r,tabAhead:function(e){c()===r&&(e.preventDefault(),s.focus())},tabBack:function(e){c()===s?(e.preventDefault(),r.focus()):t.includes(c())||(e.preventDefault(),s.focus())}}};t.exports=(e,t={})=>{const s=l(e);var{Esc:e,Escape:r}=t,e=(r&&!e&&(t.Esc=r),n(a({Tab:s.tabAhead,"Shift+Tab":s.tabBack},t)));return i({keydown:e},{init(){s.firstTabStop&&s.firstTabStop.focus()},update(e){e?this.on():this.off()}})}},{"./active-element":45,"./behavior":46,"./select":54,"object-assign":4,receptor:10}],49:[function(e,t,s){"use strict";t.exports=function(e,t=window,s=document.documentElement){return 0<=(e=e.getBoundingClientRect()).top&&0<=e.left&&e.bottom<=(t.innerHeight||s.clientHeight)&&e.right<=(t.innerWidth||s.clientWidth)}},{}],50:[function(e,t,s){"use strict";t.exports=function(){return"undefined"!=typeof navigator&&(navigator.userAgent.match(/(iPod|iPhone|iPad)/g)||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!window.MSStream}},{}],51:[function(e,t,s){"use strict";t.exports=function(){"use strict";var n={_entity:/[&<>"'/]/g,_entities:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","/":"&#x2F;"},getEntity:function(e){return n._entities[e]},escapeHTML:function(e){var t="";for(var s=0;s<e.length;s++){t+=e[s];if(s+1<arguments.length){var r=arguments[s+1]||"";t+=String(r).replace(n._entity,n.getEntity)}}return t},createSafeHTML:function(e){var t=arguments.length;var s=new Array(t>1?t-1:0);for(var r=1;r<t;r++)s[r-1]=arguments[r];var a=n.escapeHTML.apply(n,[e].concat(s));return{__html:a,toString:function(){return"[object WrappedHTMLObject]"},info:"This is a wrapped HTML object. See https://developer.mozilla.or"+"g/en-US/Firefox_OS/Security/Security_Automation for more."}},unwrapSafeHTML:function(){var e=arguments.length;var t=new Array(e);for(var s=0;s<e;s++)t[s]=arguments[s];var r=t.map(function(e){return e.__html});return r.join("")}};return n}()},{}],52:[function(e,t,s){"use strict";t.exports=function(){var e=document.createElement("div"),t=(e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e),document.createElement("div")),t=(e.appendChild(t),e.offsetWidth-t.offsetWidth+"px");return e.parentNode.removeChild(e),t}},{}],53:[function(e,t,s){"use strict";const a=e("./select");t.exports=(e,t)=>{var s,r=a(e,t);return"string"==typeof e&&(s=t)&&"object"==typeof s&&1===s.nodeType&&t.matches(e)&&r.push(t),r}},{"./select":54}],54:[function(e,t,s){"use strict";t.exports=(e,t)=>{var s;return"string"!=typeof e?[]:(s=(t=t&&(s=t)&&"object"==typeof s&&1===s.nodeType?t:window.document).querySelectorAll(e),Array.prototype.slice.call(s))}},{}],55:[function(e,t,s){"use strict";t.exports=(e,t)=>{e.setAttribute("autocapitalize","off"),e.setAttribute("autocorrect","off"),e.setAttribute("type",t?"password":"text")}},{}],56:[function(e,t,s){"use strict";const a=e("resolve-id-refs"),n=e("./toggle-field-mask"),i="aria-pressed",o="data-show-text";t.exports=e=>{const t=e.hasAttribute(i)&&"true"!==e.getAttribute(i);a(e.getAttribute("aria-controls")).forEach(e=>n(e,t)),e.hasAttribute(o)||e.setAttribute(o,e.textContent);var s=e.getAttribute(o),r=e.getAttribute("data-hide-text")||s.replace(/\bShow\b/i,e=>`${"S"===e[0]?"H":"h"}ide`);return e.textContent=t?s:r,e.setAttribute(i,t),t}},{"./toggle-field-mask":55,"resolve-id-refs":13}],57:[function(e,t,s){"use strict";const r="aria-expanded";t.exports=(e,t)=>{let s=t;"boolean"!=typeof s&&(s="false"===e.getAttribute(r)),e.setAttribute(r,s);t=e.getAttribute("aria-controls"),e=document.getElementById(t);if(e)return s?e.removeAttribute("hidden"):e.setAttribute("hidden",""),s;throw new Error(`No toggle target found with id: "${t}"`)}},{}],58:[function(e,t,s){"use strict";const c=e("./debounce");e=e("../config").prefix;const l=e+"-checklist__item--checked";t.exports=function(n){var e=n.dataset.validationElement;const i="#"===e.charAt(0)?document.querySelector(e):document.getElementById(e);if(!i)throw new Error(`No validation element found with id: "${e}"`);let o="";Object.entries(n.dataset).forEach(([t,s])=>{if(t.startsWith("validate")){var t=t.substr("validate".length).toLowerCase(),s=new RegExp(s),r=`[data-validator="${t}"]`,r=i.querySelector(r);const a=n.parentNode.querySelector("[data-validation-status]");s=s.test(n.value);if(r.classList.toggle(l,s),!r)throw new Error(`No validator checkbox found for: "${t}"`);s=n.dataset.validationComplete||"status complete",t=n.dataset.validationIncomplete||"status incomplete";let e=r.textContent+" ";r.classList.contains(l)?e+=s:e+=t,r.setAttribute("aria-label",e),o+=e+". ",c(()=>{a.textContent=o},1e3)()}})}},{"../config":36,"./debounce":47}]},{},[44]);
;
(function (Drupal) {
  'use strict';
  Drupal.behaviors.topic_page_customizations = {
    attach: function () {
      let btn = document.querySelector('button.gsa-menu-btn'),
          items = document.querySelectorAll('.overlay-trigger'),
          scrollBody = document.querySelector('body'),
          items_array = [...items];
      btn.onclick = () => {
        items_array.forEach(item => {
          item.classList.add('is-visible');
          scrollBody.classList.add("overflow-hidden");
        });
      };
      document.querySelector('.tbm-button').onclick = () => {
        items_array.forEach(item => {
          item.classList.remove('is-visible');
          scrollBody.classList.remove("overflow-hidden");
        });
      };
      document.addEventListener('click', event => {
        if (event.target.closest('.usa-overlay')) {
          scrollBody.classList.remove("overflow-hidden");
        }
      });
    },
  };
}(Drupal));
;
// ==================================================
// fancyBox v3.3.5
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a=[],s=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=t&&t.data?t.data.options:e||{},o=e.$target||n(t.currentTarget),i=o.attr("data-fancybox")||"",i?(a=e.selector?n(e.selector):t.data?t.data.items:[],a=a.length?a.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]'),s=a.index(o),s<0&&(s=0)):a=[o],n.fancybox.open(a,e,s))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={loop:!1,gutter:50,keyboard:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',arrowLeft:'<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>',arrowRight:'<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>'},parentEl:"body",autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"ZurÃ¼ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃ¤ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"MaÃŸstab"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){var t,n=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(n.style[t]!==o)return i[t];return"transitionend"}(),f=function(t){return t&&t.length&&t[0].offsetHeight},p=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},h=function(t,o,i){var a=this;a.opts=p({index:i},n.fancybox.defaults),n.isPlainObject(o)&&(a.opts=p(a.opts,o)),n.fancybox.isMobile&&(a.opts=p(a.opts,a.opts.mobile)),a.id=a.opts.id||++c,a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=!0,a.group=[],a.slides={},a.addContent(t),a.group.length&&(a.$lastFocus=n(e.activeElement).trigger("blur"),a.init())};n.extend(h.prototype,{init:function(){var i,a,s,r=this,c=r.group[r.currIndex],l=c.opts,d=n.fancybox.scrollbarWidth;n.fancybox.getInstance()||l.hideScrollbar===!1||(n("body").addClass("fancybox-active"),!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(d===o&&(i=n('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"),d=n.fancybox.scrollbarWidth=i[0].offsetWidth-i[0].clientWidth,i.remove()),n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+d+"px; }</style>"),n("body").addClass("compensate-for-scrollbar"))),s="",n.each(l.buttons,function(t,e){s+=l.btnTpl[e]||""}),a=n(r.translate(r,l.baseTpl.replace("{{buttons}}",s).replace("{{arrows}}",l.btnTpl.arrowLeft+l.btnTpl.arrowRight))).attr("id","fancybox-container-"+r.id).addClass("fancybox-is-hidden").addClass(l.baseClass).data("FancyBox",r).appendTo(l.parentEl),r.$refs={container:a},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){r.$refs[t]=a.find(".fancybox-"+t)}),r.trigger("onInit"),r.activate(),r.jumpTo(r.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=n[e];return i===o?t:i})},addContent:function(t){var e,i=this,a=n.makeArray(t);n.each(a,function(t,e){var a,s,r,c,l,d={},u={};n.isPlainObject(e)?(d=e,u=e.opts||e):"object"===n.type(e)&&n(e).length?(a=n(e),u=a.data()||{},u=n.extend(!0,{},u,u.options),u.$orig=a,d.src=i.opts.src||u.src||a.attr("href"),d.type||d.src||(d.type="inline",d.src=e)):d={type:"html",src:e+""},d.opts=n.extend(!0,{},i.opts,u),n.isArray(u.buttons)&&(d.opts.buttons=u.buttons),s=d.type||d.opts.type,c=d.src||"",!s&&c&&((r=c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))?(s="video",d.opts.videoFormat||(d.opts.videoFormat="video/"+("ogv"===r[1]?"ogg":r[1]))):c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":c.match(/\.(pdf)((\?|#).*)?$/i)?s="iframe":"#"===c.charAt(0)&&(s="inline")),s?d.type=s:i.trigger("objectNeedsType",d),d.contentType||(d.contentType=n.inArray(d.type,["html","inline","ajax"])>-1?"html":d.type),d.index=i.group.length,"auto"==d.opts.smallBtn&&(d.opts.smallBtn=n.inArray(d.type,["html","inline","ajax"])>-1),"auto"===d.opts.toolbar&&(d.opts.toolbar=!d.opts.smallBtn),d.opts.$trigger&&d.index===i.opts.index&&(d.opts.$thumb=d.opts.$trigger.find("img:first")),d.opts.$thumb&&d.opts.$thumb.length||!d.opts.$orig||(d.opts.$thumb=d.opts.$orig.find("img:first")),"function"===n.type(d.opts.caption)&&(d.opts.caption=d.opts.caption.apply(e,[i,d])),"function"===n.type(i.opts.caption)&&(d.opts.caption=i.opts.caption.apply(e,[i,d])),d.opts.caption instanceof n||(d.opts.caption=d.opts.caption===o?"":d.opts.caption+""),"ajax"===d.type&&(l=c.split(/\s+/,2),l.length>1&&(d.src=l.shift(),d.opts.filter=l.shift())),d.opts.modal&&(d.opts=n.extend(!0,d.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),i.group.push(d)}),Object.keys(i.slides).length&&(i.updateControls(),e=i.Thumbs,e&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}).on("click.fb","[data-fancybox-zoom]",function(t){o[o.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?d(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},n.fancybox.isMobile?600:250))}),r.on("focusin.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null;o.isClosing||!o.current||!o.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||o&&"fixed"!==n(t.target).css("position")&&!o.$refs.container.has(t.target).length&&(t.stopPropagation(),o.focus())}),r.on("keydown.fb",function(t){var e=o.current,i=t.keyCode||t.which;if(e&&e.opts.keyboard&&!(t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input")||n(t.target).is("textarea")))return 8===i||27===i?(t.preventDefault(),void o.close(t)):37===i||38===i?(t.preventDefault(),void o.previous()):39===i||40===i?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,i)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=t.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&!o.isDragging&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var i,a,s,r,c,l,d,u=this,p=u.group.length;if(!(u.isDragging||u.isClosing||u.isAnimating&&u.firstRun)){if(t=parseInt(t,10),a=u.current?u.current.opts.loop:u.opts.loop,!a&&(t<0||t>=p))return!1;if(i=u.firstRun=!Object.keys(u.slides).length,!(p<2&&!i&&u.isDragging)){if(r=u.current,u.prevIndex=u.currIndex,u.prevPos=u.currPos,s=u.createSlide(t),p>1&&((a||s.index>0)&&u.createSlide(t-1),(a||s.index<p-1)&&u.createSlide(t+1)),u.current=s,u.currIndex=s.index,u.currPos=s.pos,u.trigger("beforeShow",i),u.updateControls(),l=n.fancybox.getTranslate(s.$slide),s.isMoved=(0!==l.left||0!==l.top)&&!s.$slide.hasClass("fancybox-animated"),s.forcedDuration=o,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[i?"animationDuration":"transitionDuration"],e=parseInt(e,10),i)return s.opts.animationEffect&&e&&u.$refs.container.css("transition-duration",e+"ms"),u.$refs.container.removeClass("fancybox-is-hidden"),f(u.$refs.container),u.$refs.container.addClass("fancybox-is-open"),f(u.$refs.container),s.$slide.addClass("fancybox-slide--previous"),u.loadSlide(s),s.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"),void u.preload("image");n.each(u.slides,function(t,e){n.fancybox.stop(e.$slide)}),s.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),s.isMoved?(c=Math.round(s.$slide.width()),n.each(u.slides,function(t,o){var i=o.pos-s.pos;n.fancybox.animate(o.$slide,{top:0,left:i*c+i*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===u.currPos&&(s.isMoved=!1,u.complete())})})):u.$refs.stage.children().removeAttr("style"),s.isLoaded?u.revealContent(s):u.loadSlide(s),u.preload("image"),r.pos!==s.pos&&(d="fancybox-slide--"+(r.pos>s.pos?"next":"previous"),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),r.isComplete=!1,e&&(s.isMoved||s.opts.transitionEffect)&&(s.isMoved?r.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+s.opts.transitionEffect,n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,i){var a,s,r,c,l,d=this,u=d.current,f=u.$content,p=n.fancybox.getTranslate(u.$slide).width,h=n.fancybox.getTranslate(u.$slide).height,g=u.width,b=u.height;!d.isAnimating&&f&&"image"==u.type&&u.isLoaded&&!u.hasError&&(n.fancybox.stop(f),d.isAnimating=!0,t=t===o?.5*p:t,e=e===o?.5*h:e,a=n.fancybox.getTranslate(f),a.top-=n.fancybox.getTranslate(u.$slide).top,a.left-=n.fancybox.getTranslate(u.$slide).left,c=g/a.width,l=b/a.height,s=.5*p-.5*g,r=.5*h-.5*b,g>p&&(s=a.left*c-(t*c-t),s>0&&(s=0),s<p-g&&(s=p-g)),b>h&&(r=a.top*l-(e*l-e),r>0&&(r=0),r<h-b&&(r=h-b)),d.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},i||330,function(){d.isAnimating=!1}),d.SlideShow&&d.SlideShow.isActive&&d.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;!o.isAnimating&&a&&"image"==i.type&&i.isLoaded&&!i.hasError&&(n.fancybox.stop(a),o.isAnimating=!0,e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,n,o,i,a,s=this,r=t.$content,c=t.width||t.opts.width,l=t.height||t.opts.height,d={};return!!(t.isLoaded&&r&&r.length)&&(i={top:parseInt(t.$slide.css("paddingTop"),10),right:parseInt(t.$slide.css("paddingRight"),10),bottom:parseInt(t.$slide.css("paddingBottom"),10),left:parseInt(t.$slide.css("paddingLeft"),10)},e=parseInt(s.$refs.stage.width(),10)-(i.left+i.right),n=parseInt(s.$refs.stage.height(),10)-(i.top+i.bottom),c&&l||(c=e,l=n),o=Math.min(1,e/c,n/l),c=Math.floor(o*c),l=Math.floor(o*l),"image"===t.type?(d.top=Math.floor(.5*(n-l))+i.top,d.left=Math.floor(.5*(e-c))+i.left):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?c/l:t.opts.ratio||16/9,l>c/a?l=c/a:c>l*a&&(c=l*a)),d.width=c,d.height=l,d)},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height;i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),t.$slide.trigger("refresh"),o.$refs.toolbar.toggleClass("compensate-for-scrollbar",t.$slide.get(0).scrollHeight>t.$slide.get(0).clientHeight),o.trigger("onUpdate",t)},centerSlide:function(t,e){var i,a,s=this;s.current&&(i=Math.round(t.$slide.width()),a=t.pos-s.current.pos,n.fancybox.animate(t.$slide,{top:0,left:a*i+a*t.opts.gutter,opacity:1},e===o?0:e,null,!1))},updateCursor:function(t,e){var o,i=this,a=i.current,s=i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");a&&!i.isClosing&&(o=i.isZoomable(),s.toggleClass("fancybox-is-zoomable",o),n("[data-fancybox-zoom]").prop("disabled",!o),o&&("zoom"===a.opts.clickContent||n.isFunction(a.opts.clickContent)&&"zoom"===a.opts.clickContent(a))?i.isScaledDown(t,e)?s.addClass("fancybox-can-zoomIn"):a.opts.touch?s.addClass("fancybox-can-drag"):s.addClass("fancybox-can-zoomOut"):a.opts.touch&&"video"!==a.contentType&&s.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if(t=e.getFitPos(n),n.width>t.width||n.height>t.height)return!0}return!1},isScaledDown:function(t,e){var i=this,a=!1,s=i.current,r=s.$content;return t!==o&&e!==o?a=t<s.width&&e<s.height:r&&(a=n.fancybox.getTranslate(r),a=a.width<s.width&&a.height<s.height),a},canPan:function(){var t,e=this,n=!1,o=e.current;return"image"===o.type&&(t=o.$content)&&!o.hasError&&(n=e.getFitPos(o),n=Math.abs(t.width()-n.width)>1||Math.abs(t.height()-n.height)>1),n},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,a.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,'<video class="fancybox-video" controls controlsList="nodownload"><source src="'+t.src+'" type="'+t.opts.videoFormat+"\">Your browser doesn't support HTML5 video</video");break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(e){var o,i,a,s,r,c=this,l=e.opts.srcset||e.opts.image.srcset;if(e.timouts=setTimeout(function(){var t=e.$image;!e.isLoading||t&&t[0].complete||e.hasError||c.showLoading(e)},350),l){s=t.devicePixelRatio||1,r=t.innerWidth*s,a=l.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),a.sort(function(t,e){return t.value-e.value});for(var d=0;d<a.length;d++){var u=a[d];if("w"===u.postfix&&u.value>=r||"x"===u.postfix&&u.value>=s){i=u;break}}!i&&a.length&&(i=a[a.length-1]),i&&(e.src=i.url,e.width&&e.height&&"w"==i.postfix&&(e.height=e.width/e.height*i.value,e.width=i.value),e.opts.srcset=l)}e.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),o=e.opts.thumb||!(!e.opts.$thumb||!e.opts.$thumb.length)&&e.opts.$thumb.attr("src"),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&o&&(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null}).one("load",function(){c.afterLoad(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",o)),c.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){var n;t.$ghost||(e.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),e.afterLoad(t)),t.timouts&&(clearTimeout(t.timouts),t.timouts=null),e.isClosing||(t.opts.srcset&&(n=t.opts.sizes,n&&"auto"!==n||(n=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),o.attr("sizes",n).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!e.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),e.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(o[0].complete||"complete"==o[0].readyState)&&o[0].naturalWidth&&o[0].naturalHeight?o.trigger("load"):o[0].error&&o.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,i=this,a=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(s),s.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(t.$content),a.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),s.on("refresh.fb",function(){var n,i,s=t.$content,r=a.css.width,c=a.css.height;if(1===e[0].isReady){try{n=e.contents(),i=n.find("body")}catch(t){}i&&i.length&&i.children().length&&(s.css({width:"",height:""}),r===o&&(r=Math.ceil(Math.max(i[0].clientWidth,i.outerWidth(!0)))),r&&s.width(r),c===o&&(c=Math.ceil(Math.max(i[0].clientHeight,i.outerHeight(!0)))),c&&s.height(c)),s.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),s.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?(e.parent().parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.pos===e.currPos&&e.updateCursor(),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).prependTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,i,a,s,r=this,c=t.$slide,l=!1,d=!1;return e=t.opts[r.firstRun?"animationEffect":"transitionEffect"],a=t.opts[r.firstRun?"animationDuration":"transitionDuration"],a=parseInt(t.forcedDuration===o?a:t.forcedDuration,10),t.pos===r.currPos&&(t.isComplete?e=!1:r.isAnimating=!0),!t.isMoved&&t.pos===r.currPos&&a||(e=!1),"zoom"===e&&(t.pos===r.currPos&&a&&"image"===t.type&&!t.hasError&&(d=r.getThumbPos(t))?l=r.getFitPos(t):e="fade"),"zoom"===e?(l.scaleX=l.width/d.width,l.scaleY=l.height/d.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-d.width/d.height)>.1),s&&(d.opacity=.1,l.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),d),f(t.$content),void n.fancybox.animate(t.$content,l,a,function(){r.isAnimating=!1,r.complete()})):(r.updateSlide(t),e?(n.fancybox.stop(c),i="fancybox-animated fancybox-slide--"+(t.pos>=r.prevPos?"next":"previous")+" fancybox-fx-"+e,c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),f(c),void n.fancybox.animate(c,"fancybox-slide--current",a,function(e){c.removeClass(i).removeAttr("style"),t.pos===r.currPos&&r.complete()},!0)):(f(c),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===r.currPos&&r.complete())))},getThumbPos:function(o){var i,a=this,s=!1,r=o.opts.$thumb,c=r&&r.length&&r[0].ownerDocument===e?r.offset():0,l=function(e){for(var o,i=e[0],a=i.getBoundingClientRect(),s=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return o=s.every(function(t){var e=Math.min(a.right,t.right)-Math.max(a.left,t.left),n=Math.min(a.bottom,t.bottom)-Math.max(a.top,t.top);return e>0&&n>0}),o&&a.bottom>0&&a.right>0&&a.left<n(t).width()&&a.top<n(t).height()};return c&&l(r)&&(i=a.$refs.stage.offset(),s={top:c.top-i.top+parseFloat(r.css("border-top-width")||0),left:c.left-i.left+parseFloat(r.css("border-left-width")||0),width:r.width(),height:r.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,o=t.current,i={};!o.isMoved&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),t.preload("inline"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),t.slides=i),t.isAnimating=!1,t.updateCursor(),t.trigger("afterShow"),o.$slide.find("video,audio").filter(":visible:first").trigger("play"),(n(e.activeElement).is("[disabled]")||o.opts.autoFocus&&"image"!=o.type&&"iframe"!==o.type)&&t.focus())},preload:function(t){var e=this,n=e.slides[e.currPos+1],o=e.slides[e.currPos-1];n&&n.type===t&&e.loadSlide(n),o&&o.type===t&&e.loadSlide(o)},focus:function(){var t,e=this.current;this.isClosing||e&&e.isComplete&&e.$content&&(t=e.$content.find("input[autofocus]:enabled:visible:first"),t.length||(t=e.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")),t=t&&t.length?t:e.$content,t.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,p=this,h=p.current,g=function(){p.cleanUp(t)};return!p.isClosing&&(p.isClosing=!0,p.trigger("beforeClose",t)===!1?(p.isClosing=!1,d(function(){p.update()}),!1):(p.removeEvents(),h.timouts&&clearTimeout(h.timouts),a=h.$content,o=h.opts.animationEffect,i=n.isNumeric(e)?e:o?h.opts.animationDuration:0,h.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),h.$slide.siblings().trigger("onReset").remove(),i&&p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),p.hideLoading(h),p.hideControls(),p.updateCursor(),"zoom"!==o||t!==!0&&a&&i&&"image"===h.type&&!h.hasError&&(l=p.getThumbPos(h))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=h.opts.zoomOpacity,"auto"==r&&(r=Math.abs(h.width/h.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),f(a),n.fancybox.animate(a,l,i,g),!0):(o&&i?t===!0?setTimeout(g,i):n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,i,g):g(),!0)))},cleanUp:function(t){var e,o=this,i=n("body");o.current.$slide.trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.$lastFocus&&o.current.opts.backFocus&&o.$lastFocus.trigger("focus"),o.current=null,e=n.fancybox.getInstance(),e?e.activate():(i.removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;return s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),o===!1?o:void("afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i))},updateControls:function(t){var e=this,n=e.current,o=n.index,i=n.opts.caption,a=e.$refs.container,s=e.$refs.caption;n.$slide.trigger("refresh"),e.$caption=i&&i.length?s.html(i):null,e.isHiddenControls||e.isIdle||e.showControls(),a.find("[data-fancybox-count]").html(e.group.length),a.find("[data-fancybox-index]").html(o+1),a.find("[data-fancybox-prev]").toggleClass("disabled",!n.opts.loop&&o<=0),a.find("[data-fancybox-next]").toggleClass("disabled",!n.opts.loop&&o>=e.group.length-1),"image"===n.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",n.opts.image.src||n.src).show():n.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.3.5",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof h&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new h(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",i={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(i.transform=n),e.opacity!==o&&(i.opacity=e.opacity),e.width!==o&&(i.width=e.width),e.height!==o&&(i.height=e.height),t.css(i)},animate:function(t,e,i,a,s){var r=!1;n.isFunction(i)&&(a=i,i=null),n.isPlainObject(e)||t.removeAttr("style"),n.fancybox.stop(t),t.on(u,function(o){(!o||!o.originalEvent||t.is(o.originalEvent.target)&&"z-index"!=o.originalEvent.propertyName)&&(n.fancybox.stop(t),r&&n.fancybox.setTranslate(t,r),
    n.isPlainObject(e)?s===!1&&t.removeAttr("style"):s!==!0&&t.removeClass(e),n.isFunction(a)&&a(o))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(e)?(e.scaleX!==o&&e.scaleY!==o&&(r=n.extend({},e,{width:t.width()*e.scaleX,height:t.height()*e.scaleY,scaleX:1,scaleY:1}),delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t){t&&t.length&&(clearTimeout(t.data("timer")),t.off("transitionend").css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-trigger]",function(t){i(t,{$target:n('[data-fancybox="'+n(t.currentTarget).attr("data-trigger")+'"]').eq(n(t.currentTarget).attr("data-index")||0),$trigger:n(this)})})}}(window,document,window.jQuery||jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},n,a.opts.media),t.each(s,function(n,o){if(c=p.match(o.matcher)){if(h=o.type,f=n,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[n],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):e(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):e(o.thumb,c),"youtube"===n?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===n&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)})}(window.jQuery||jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){this.$container.off(".fb.touch")},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$content,p="touchstart"==o.type;if(p&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||d.isClosing)return o.stopPropagation(),void o.preventDefault();if(i.realPoints=i.startPoints=a(o),i.startPoints.length){if(o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=f,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(u.$slide[0].clientWidth),i.canvasHeight=Math.round(u.$slide[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=i.sliderLastPos||n.fancybox.getTranslate(u.$slide),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(p?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(p?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),!i.opts&&!d.canPan()||!c.is(i.$stage)&&!i.$stage.find(c).length)return void(c.is(".fancybox-image")&&o.preventDefault());n.fancybox.isMobile&&(l(c)||l(c.parent()))||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.instance.canPan()?(n.fancybox.stop(i.$content),i.$content.css("transition-duration",""),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-controls--isGrabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.$content.css("transition-duration",""),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))}}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this,o=n(t.target);return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling||!o.is(e.$stage)&&!e.$stage.find(o).length?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.instance.canPan())&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&e.isSwiping===!0||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.isSwiping,c=s.sliderStartPos.left||0;if(r!==!0)"x"==r&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?c+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?c-=Math.pow(-s.distanceX,.8):c+=s.distanceX),s.sliderLastPos={top:"x"==r?0:s.sliderStartPos.top+s.distanceY,left:c},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,s.instance.group.length<2&&s.opts.vertical?s.isSwiping="y":s.instance.isDragging||s.opts.vertical===!1||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),s.canTap=!1,"y"===s.isSwiping&&n.fancybox.isMobile&&(l(s.$target)||l(s.$target.parent())))return void(s.isScrolling=!0);s.instance.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(s.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration",""),e.inTransition=!1,e.pos===s.instance.current.pos&&(s.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left-n.fancybox.getTranslate(s.instance.$refs.stage).left)}),s.instance.SlideShow&&s.instance.SlideShow.isActive&&s.instance.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;return s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5)?void(t.startPoints=t.newPoints):(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&(i(t.requestId),t.requestId=null),void(t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})))},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),y=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),v=m-e.centerPointStartX,x=y-e.centerPointStartY,w=l+(g+v),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&(i(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming,d=o.isScrolling;return o.endPoints=a(t),o.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r,d)))},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length;o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,200)):"x"==t&&o.distanceX>50&&a>1?i=o.instance.previous(o.speedX):"x"==t&&o.distanceX<-50&&a>1&&(i=o.instance.next(o.speedX)),i!==!1||"x"!=t&&"y"!=t||(e||a<2?o.instance.centerSlide(o.instance.current,150):o.instance.jumpTo(o.instance.current.index)),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(i.opts.momentum===!1?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+i.velocityX*i.speed,e=i.contentLastPos.top+i.velocityY*i.speed),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,330))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.setTranslate(a.$content,n.fancybox.getTranslate(a.$content)),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls(!0);break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))})}(window,document,window.jQuery||jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'},slideShow:{autoStart:!1,speed:3e3}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(t){var e=this;e.instance&&e.instance.current&&(t===!0||e.instance.current.opts.loop||e.instance.currIndex<e.instance.group.length-1)?e.timer=setTimeout(function(){e.isActive&&e.instance.jumpTo((e.instance.currIndex+1)%e.instance.group.length)},e.instance.current.opts.slideShow.speed):(e.stop(),e.instance.idleSecondsCounter=0,e.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;e&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.set(!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,window.jQuery||jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(!n)return void(e&&e.fancybox&&(e.fancybox.defaults.btnTpl.fullScreen=!1));var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on({"onInit.fb":function(t,e){var n;e&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t))})}(document,window.jQuery||jQuery),function(t,e){"use strict";var n="fancybox-thumbs",o=n+"-active",i=n+"-loading";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var a=function(t){this.init(t)};e.extend(a.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e,n,o=this;o.instance=t,t.Thumbs=o,o.opts=t.group[t.currIndex].opts.thumbs,e=t.group[0],e=e.opts.thumb||!(!e.opts.$thumb||!e.opts.$thumb.length)&&e.opts.$thumb.attr("src"),t.group.length>1&&(n=t.group[1],n=n.opts.thumb||!(!n.opts.$thumb||!n.opts.$thumb.length)&&n.opts.$thumb.attr("src")),o.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]"),o.opts&&e&&n&&e&&n?(o.$button.show().on("click",function(){o.toggle()}),o.isActive=!0):o.$button.hide()},create:function(){var t,o=this,a=o.instance,s=o.opts.parentEl,r=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(a.$refs.container.find(s).addBack().filter(s)),o.$grid.on("click","li",function(){a.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e("<ul>").appendTo(o.$grid)),e.each(a.group,function(e,n){t=n.opts.thumb||(n.opts.$thumb?n.opts.$thumb.attr("src"):null),t||"image"!==n.type||(t=n.src),r.push('<li data-index="'+e+'" tabindex="0" class="'+i+'"'+(t&&t.length?' style="background-image:url('+t+')" />':"")+"></li>")}),o.$list[0].innerHTML=r.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+a.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,i=this,a=i.$list,s=i.$grid;i.instance.current&&(e=a.children().removeClass(o).filter('[data-index="'+i.instance.current.index+'"]').addClass(o),n=e.position(),"y"===i.opts.axis&&(n.top<0||n.top>a.height()-e.outerHeight())?a.stop().animate({scrollTop:a.scrollTop()+n.top},t):"x"===i.opts.axis&&(n.left<s.scrollLeft()||n.left>s.scrollLeft()+(s.width()-e.outerWidth()))&&a.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new a(e),n.isActive&&n.opts.autoStart===!0&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&n.opts.hideOnClose!==!1&&n.$grid.hide()}})}(document,window.jQuery||jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__links a").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})}}}))})}(document,window.jQuery||jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:t,index:o<1?1:o,gallery:i}}function i(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).trigger("click.fb-start"))}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,n=e.hash||(e.$orig?e.$orig.data("fancybox"):""),""!==n&&n)}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"ï¿½":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)}),n(function(){n.fancybox.defaults.hash!==!1&&(n(t).on({"onInit.fb":function(t,e){var n,i;e.group[e.currIndex].opts.hash!==!1&&(n=o(),i=a(e),i&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&i.opts.hash!==!1&&(r=a(o),r&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),e.location.hash!=="#"+o.currentHash&&(o.origHash||(o.origHash=e.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in e.history?(e.history[s?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):e.location.hash=o.currentHash,o.hashTimer=null},300))))},"beforeClose.fb":function(n,o,i){var s;i.opts.hash!==!1&&(s=a(o),o.currentHash&&o.hasCreatedHistory?e.history.back():o.currentHash&&("replaceState"in e.history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+(o.origHash||"")):e.location.hash=o.origHash),o.currentHash=null,clearTimeout(o.hashTimer))}}),n(e).on("hashchange.fb",function(){var t,e=o();n.each(n(".fancybox-container").get().reverse(),function(e,o){var i=n(o).data("FancyBox");if(i.currentHash)return t=i,!1}),t?!t.currentHash||t.currentHash===e.gallery+"-"+e.index||1===e.index&&t.currentHash==e.gallery||(t.currentHash=null,t.close()):""!==e.gallery&&i(e)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(document,window,window.jQuery||jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||o.opts.wheel===!1||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,window.jQuery||jQuery);
;

const init_sticky_nav = () => {
    $ = jQuery;
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      //var contentHeight = $(".usa-header--extended").height();
      if (y >= 5) {
        $(".usa-header--extended").addClass("locked");
      } else {
        $(".usa-header--extended").removeClass("locked");
      }
    });
}
const print_page = () => {
  let slice = [].slice;
  let printButtons = slice.call(document.querySelectorAll('.print-button'), 0);

  printButtons.forEach(function(printButton) {
    printButton.addEventListener('click', function(e) {
      window.print();
    });
  });
}
const iframe_wrapper = () => {
  $('iframe').each(function() {
    $container = $(this).parent('div').attr('class')
    if ($container != 'embed-responsive' && $container != 'exclude-embed-responsive') {
      $(this).wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    };
  });
}
const perdiem_modal = () => {
  $ = jQuery;
  var showDialog = $(".show_dialog").length;
  var perdiemLink = $("#perdiem-link");
  if(showDialog) {
    $(perdiemLink).removeClass("scroller");
    $(perdiemLink).attr('data-fancybox','');
    $(perdiemLink).attr("data-src","#lookup-dialog");
  } else {
    $(perdiemLink).on('click',function(){
      $('.tb-megamenu-button').trigger('click');
    })
  }
}
const content_modal = () => {
  $ = jQuery;
  //FANCYBOX Inline Content
  $('.popup,.fancybox').fancybox();
  //Images
  $('.popup-image').fancybox({
    'type': 'image'
  });
  //iFrames
  $('.popup-iframe').fancybox({
    'type': 'iframe',
    'autoScale': 'true'
  });
}

const mobile_menu_focus = () => {
  $ = jQuery;
  $('.gsa-menu-btn').click(
    function(event){
      setTimeout(function() {
        $('.tb-megamenu-button__close-mobile-menu').focus();
      }, 500);
    }
  );
}

const left_nav = () => {
  $ = jQuery;
  if($('#gsa-left-sidebar').length > 0) {
    left_nav_responsive();
    window.addEventListener('resize', function(event) {
      left_nav_responsive();
    });
  }
}

const left_nav_responsive = () => {
  $ = jQuery;
  if (window.innerWidth > 1024) {
    $('#gsa-left-sidebar button.usa-accordion__button')
      .first().attr('aria-disabled', true);
  } else {
    $('#gsa-left-sidebar button.usa-accordion__button')
      .first().attr('aria-disabled', false);
  }
}

left_nav();
content_modal();
perdiem_modal();

init_sticky_nav();
print_page();
iframe_wrapper();
mobile_menu_focus();

;
jQuery(function() {
  jQuery(document).ready( function () {
    // jQuery('a[href^="mailto:"]').click(function(e){

    //   e.preventDefault();

    //   var href = jQuery(this).attr('href');
    //   var emailString = href.replace('mailto:','');
    //   var args = '';
    //   var recipient = '';


    //   if (emailString.indexOf('?') != -1) {
    //     var emailArr = emailString.split('?');
    //     recipient = emailArr[0];
    //     args = '&' + emailArr[1];
    //   } else {
    //     recipient = emailString;
    //   }

    //   var emailpath = 'https://mail.google.com/mail/u/0/?view=cm&fs=1' + String(args).replace('subject=', 'su=') + '&to=' + recipient;

    //   window.open(emailpath,'_blank');
    // });
  });
});
;
jQuery(function () {
  jQuery(document).ready(function () {

    var shareConfig = {
      "Facebook": {
        "url": "http://www.facebook.com/sharer/sharer.php?u=%SHARE_URL%",
        "icon": "facebook-16.jpg"
      },
      "Twitter": {
        "url": "http://twitter.com/intent/tweet?via=interior&amp;url=%SHARE_URL%&amp;text=%SHARE_TITLE%",
        "icon": "twitter-16.png"
      },
      "LinkedIn": {
        "url": "http://www.linkedin.com/shareArticle?mini=true&url=%SHARE_URL%&title=%SHARE_TITLE%",
        "icon": "linkedin-16.png"
      },

      "Digg": {
        "url": "http://digg.com/submit?url=%SHARE_URL%&title=%SHARE_TITLE%",
        "icon": "digg-16.png"
      },
      "Reddit": {
        "url": "http://reddit.com/submit?url=%SHARE_URL%&title=%SHARE_TITLE%",
        "icon": "reddit-16.png"
      },
      "Email": {
        "url": "mailto:?subject=You might be interested in this information on GSA.gov&body=You might be interested in this information on GSA.gov - %SHARE_URL%",
        "icon": "email-16.png"
      }
    };
    var currentPage = window.location.href;
    var title = document.title;
    if (typeof imagePath === 'undefined') {
      imagePath = "/modules/custom/topic_page_customizations/modules/topic_page_footer/img/"
    }
    ;
    var shareHTML = '<div id="share-box"><ul>';

    jQuery.each(shareConfig, function (name, site) {
      shareHTML = shareHTML + '<li><a title="Open link in a new window" href="' + site.url.replace("%SHARE_URL%", encodeURIComponent(currentPage)).replace("%SHARE_TITLE%", encodeURIComponent(title)) + '" target="_blank"><img src="' + imagePath + site.icon + '" alt="Share on ' + name + '" />' + name + '</a></li>';
    });
    shareHTML = shareHTML + '</ul></div>';
    var attempts = 0;

    var setup_share_hover = function(){
      attempts ++;
      var $share_page = jQuery('#share_page');
      if($share_page.length === 0 && attempts <= 5){
        window.setTimeout(setup_share_hover, 1000);
      }else {
        $share_page.hover(function (e) {
          jQuery(this).append(shareHTML);
        }, function () {
          jQuery('#share_page div').remove();
        });
      }
    }

    setup_share_hover();
  });
});
;
const init_top_btn = () => {
  $ = jQuery;
  $(document).scroll(function () {
    // Show and hide the back to top elevator js container
    var y = $(this).scrollTop();
    var contentHeight = $(".insite-text-asset-container").height();
    if (y > 600) {
      $("#backtotop").fadeIn();
      // $("#backtotop").bind("click",function(){
      //   $("#logo").focus();
      // });
    } else {
      $("#backtotop").fadeOut();
    }
    if (y < 600 ){
    }
  });
}
init_top_btn();
;
const smooth_scroll = () => {
  var slice = [].slice;
  var navs = slice.call(document.querySelectorAll('.scroller, #scrollto-categories'), 0);
  navs.forEach(function(nav) {
    nav.addEventListener('click', function(e) {
      let attrId = nav.getAttribute('id');
      if(attrId == 'backtotop'){
        e.preventDefault();
      } else if (attrId == 'perdiem-link') {
        if ($('#perdiem-section').length > 0){
          e.preventDefault();
        }
      } else if (attrId == 'scrollto-categories') {
        select_nav('category-navigation');
      }
      if (attrId != 'scrollto-categories') {
        var targetEl = nav.dataset.scrollTo;
        select_nav(targetEl);
      }
    });
  });

  function select_nav(className) {
    var el = document.querySelector('#' + className);
    el.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
    // setTimeout(() => {
    //   el.focus();
    // }, 500);
  }
}
smooth_scroll();
;
const init_megamenu_active_state = () => {
  $ = jQuery;
  var current = location.pathname.split('/')[1];
  $('.tb-megamenu-nav li.level-1 > a').each(function(){
    var $this = $(this);
    // if the current path is like this link, make it active
    if($this.attr('href').indexOf(current) == 1){
      $this.addClass('active-trail');
      $this.parent('li').addClass('active-trail active');
      // console.log($this.attr('href').indexOf(current))
    }
  })
}
init_megamenu_active_state();
;
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var H;function f(){return H.apply(null,arguments)}function a(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function F(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function c(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function L(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;for(var t in e)if(c(e,t))return;return 1}function o(e){return void 0===e}function u(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function V(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function G(e,t){for(var n=[],s=e.length,i=0;i<s;++i)n.push(t(e[i],i));return n}function E(e,t){for(var n in t)c(t,n)&&(e[n]=t[n]);return c(t,"toString")&&(e.toString=t.toString),c(t,"valueOf")&&(e.valueOf=t.valueOf),e}function l(e,t,n,s){return Pt(e,t,n,s,!0).utc()}function m(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function A(e){if(null==e._isValid){var t=m(e),n=j.call(t.parsedDateParts,function(e){return null!=e}),n=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(n=n&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return n;e._isValid=n}return e._isValid}function I(e){var t=l(NaN);return null!=e?E(m(t),e):m(t).userInvalidated=!0,t}var j=Array.prototype.some||function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1},Z=f.momentProperties=[],z=!1;function $(e,t){var n,s,i,r=Z.length;if(o(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),o(t._i)||(e._i=t._i),o(t._f)||(e._f=t._f),o(t._l)||(e._l=t._l),o(t._strict)||(e._strict=t._strict),o(t._tzm)||(e._tzm=t._tzm),o(t._isUTC)||(e._isUTC=t._isUTC),o(t._offset)||(e._offset=t._offset),o(t._pf)||(e._pf=m(t)),o(t._locale)||(e._locale=t._locale),0<r)for(n=0;n<r;n++)o(i=t[s=Z[n]])||(e[s]=i);return e}function q(e){$(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===z&&(z=!0,f.updateOffset(this),z=!1)}function h(e){return e instanceof q||null!=e&&null!=e._isAMomentObject}function B(e){!1===f.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function e(r,a){var o=!0;return E(function(){if(null!=f.deprecationHandler&&f.deprecationHandler(null,r),o){for(var e,t,n=[],s=arguments.length,i=0;i<s;i++){if(e="","object"==typeof arguments[i]){for(t in e+="\n["+i+"] ",arguments[0])c(arguments[0],t)&&(e+=t+": "+arguments[0][t]+", ");e=e.slice(0,-2)}else e=arguments[i];n.push(e)}B(r+"\nArguments: "+Array.prototype.slice.call(n).join("")+"\n"+(new Error).stack),o=!1}return a.apply(this,arguments)},a)}var J={};function Q(e,t){null!=f.deprecationHandler&&f.deprecationHandler(e,t),J[e]||(B(t),J[e]=!0)}function d(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function X(e,t){var n,s=E({},e);for(n in t)c(t,n)&&(F(e[n])&&F(t[n])?(s[n]={},E(s[n],e[n]),E(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)c(e,n)&&!c(t,n)&&F(e[n])&&(s[n]=E({},s[n]));return s}function K(e){null!=e&&this.set(e)}f.suppressDeprecationWarnings=!1,f.deprecationHandler=null;var ee=Object.keys||function(e){var t,n=[];for(t in e)c(e,t)&&n.push(t);return n};function r(e,t,n){var s=""+Math.abs(e);return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,t-s.length)).toString().substr(1)+s}var te=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ne=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,se={},ie={};function s(e,t,n,s){var i="string"==typeof s?function(){return this[s]()}:s;e&&(ie[e]=i),t&&(ie[t[0]]=function(){return r(i.apply(this,arguments),t[1],t[2])}),n&&(ie[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function re(e,t){return e.isValid()?(t=ae(t,e.localeData()),se[t]=se[t]||function(s){for(var e,i=s.match(te),t=0,r=i.length;t<r;t++)ie[i[t]]?i[t]=ie[i[t]]:i[t]=(e=i[t]).match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");return function(e){for(var t="",n=0;n<r;n++)t+=d(i[n])?i[n].call(e,s):i[n];return t}}(t),se[t](e)):e.localeData().invalidDate()}function ae(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(ne.lastIndex=0;0<=n&&ne.test(e);)e=e.replace(ne,s),ne.lastIndex=0,--n;return e}var oe={};function t(e,t){var n=e.toLowerCase();oe[n]=oe[n+"s"]=oe[t]=e}function _(e){return"string"==typeof e?oe[e]||oe[e.toLowerCase()]:void 0}function ue(e){var t,n,s={};for(n in e)c(e,n)&&(t=_(n))&&(s[t]=e[n]);return s}var le={};function n(e,t){le[e]=t}function he(e){return e%4==0&&e%100!=0||e%400==0}function y(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function g(e){var e=+e,t=0;return t=0!=e&&isFinite(e)?y(e):t}function de(t,n){return function(e){return null!=e?(fe(this,t,e),f.updateOffset(this,n),this):ce(this,t)}}function ce(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function fe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&he(e.year())&&1===e.month()&&29===e.date()?(n=g(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),We(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}var i=/\d/,w=/\d\d/,me=/\d{3}/,_e=/\d{4}/,ye=/[+-]?\d{6}/,p=/\d\d?/,ge=/\d\d\d\d?/,we=/\d\d\d\d\d\d?/,pe=/\d{1,3}/,ke=/\d{1,4}/,ve=/[+-]?\d{1,6}/,Me=/\d+/,De=/[+-]?\d+/,Se=/Z|[+-]\d\d:?\d\d/gi,Ye=/Z|[+-]\d\d(?::?\d\d)?/gi,k=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function v(e,n,s){be[e]=d(n)?n:function(e,t){return e&&s?s:n}}function Oe(e,t){return c(be,e)?be[e](t._strict,t._locale):new RegExp(M(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function M(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var be={},xe={};function D(e,n){var t,s,i=n;for("string"==typeof e&&(e=[e]),u(n)&&(i=function(e,t){t[n]=g(e)}),s=e.length,t=0;t<s;t++)xe[e[t]]=i}function Te(e,i){D(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var S,Y=0,O=1,b=2,x=3,T=4,N=5,Ne=6,Pe=7,Re=8;function We(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=(t%(n=12)+n)%n;return e+=(t-n)/12,1==n?he(e)?29:28:31-n%7%2}S=Array.prototype.indexOf||function(e){for(var t=0;t<this.length;++t)if(this[t]===e)return t;return-1},s("M",["MM",2],"Mo",function(){return this.month()+1}),s("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),s("MMMM",0,0,function(e){return this.localeData().months(this,e)}),t("month","M"),n("month",8),v("M",p),v("MM",p,w),v("MMM",function(e,t){return t.monthsShortRegex(e)}),v("MMMM",function(e,t){return t.monthsRegex(e)}),D(["M","MM"],function(e,t){t[O]=g(e)-1}),D(["MMM","MMMM"],function(e,t,n,s){s=n._locale.monthsParse(e,s,n._strict);null!=s?t[O]=s:m(n).invalidMonth=e});var Ce="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Ue="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),He=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Fe=k,Le=k;function Ve(e,t){var n;if(e.isValid()){if("string"==typeof t)if(/^\d+$/.test(t))t=g(t);else if(!u(t=e.localeData().monthsParse(t)))return;n=Math.min(e.date(),We(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n)}}function Ge(e){return null!=e?(Ve(this,e),f.updateOffset(this,!0),this):ce(this,"Month")}function Ee(){function e(e,t){return t.length-e.length}for(var t,n=[],s=[],i=[],r=0;r<12;r++)t=l([2e3,r]),n.push(this.monthsShort(t,"")),s.push(this.months(t,"")),i.push(this.months(t,"")),i.push(this.monthsShort(t,""));for(n.sort(e),s.sort(e),i.sort(e),r=0;r<12;r++)n[r]=M(n[r]),s[r]=M(s[r]);for(r=0;r<24;r++)i[r]=M(i[r]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Ae(e){return he(e)?366:365}s("Y",0,0,function(){var e=this.year();return e<=9999?r(e,4):"+"+e}),s(0,["YY",2],0,function(){return this.year()%100}),s(0,["YYYY",4],0,"year"),s(0,["YYYYY",5],0,"year"),s(0,["YYYYYY",6,!0],0,"year"),t("year","y"),n("year",1),v("Y",De),v("YY",p,w),v("YYYY",ke,_e),v("YYYYY",ve,ye),v("YYYYYY",ve,ye),D(["YYYYY","YYYYYY"],Y),D("YYYY",function(e,t){t[Y]=2===e.length?f.parseTwoDigitYear(e):g(e)}),D("YY",function(e,t){t[Y]=f.parseTwoDigitYear(e)}),D("Y",function(e,t){t[Y]=parseInt(e,10)}),f.parseTwoDigitYear=function(e){return g(e)+(68<g(e)?1900:2e3)};var Ie=de("FullYear",!0);function je(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}function Ze(e){var t;return e<100&&0<=e?((t=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,t)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function ze(e,t,n){n=7+t-n;return n-(7+Ze(e,0,n).getUTCDay()-t)%7-1}function $e(e,t,n,s,i){var r,t=1+7*(t-1)+(7+n-s)%7+ze(e,s,i),n=t<=0?Ae(r=e-1)+t:t>Ae(e)?(r=e+1,t-Ae(e)):(r=e,t);return{year:r,dayOfYear:n}}function qe(e,t,n){var s,i,r=ze(e.year(),t,n),r=Math.floor((e.dayOfYear()-r-1)/7)+1;return r<1?s=r+P(i=e.year()-1,t,n):r>P(e.year(),t,n)?(s=r-P(e.year(),t,n),i=e.year()+1):(i=e.year(),s=r),{week:s,year:i}}function P(e,t,n){var s=ze(e,t,n),t=ze(e+1,t,n);return(Ae(e)-s+t)/7}s("w",["ww",2],"wo","week"),s("W",["WW",2],"Wo","isoWeek"),t("week","w"),t("isoWeek","W"),n("week",5),n("isoWeek",5),v("w",p),v("ww",p,w),v("W",p),v("WW",p,w),Te(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=g(e)});function Be(e,t){return e.slice(t,7).concat(e.slice(0,t))}s("d",0,"do","day"),s("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),s("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),s("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),s("e",0,0,"weekday"),s("E",0,0,"isoWeekday"),t("day","d"),t("weekday","e"),t("isoWeekday","E"),n("day",11),n("weekday",11),n("isoWeekday",11),v("d",p),v("e",p),v("E",p),v("dd",function(e,t){return t.weekdaysMinRegex(e)}),v("ddd",function(e,t){return t.weekdaysShortRegex(e)}),v("dddd",function(e,t){return t.weekdaysRegex(e)}),Te(["dd","ddd","dddd"],function(e,t,n,s){s=n._locale.weekdaysParse(e,s,n._strict);null!=s?t.d=s:m(n).invalidWeekday=e}),Te(["d","e","E"],function(e,t,n,s){t[s]=g(e)});var Je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Qe="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ke=k,et=k,tt=k;function nt(){function e(e,t){return t.length-e.length}for(var t,n,s,i=[],r=[],a=[],o=[],u=0;u<7;u++)s=l([2e3,1]).day(u),t=M(this.weekdaysMin(s,"")),n=M(this.weekdaysShort(s,"")),s=M(this.weekdays(s,"")),i.push(t),r.push(n),a.push(s),o.push(t),o.push(n),o.push(s);i.sort(e),r.sort(e),a.sort(e),o.sort(e),this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+i.join("|")+")","i")}function st(){return this.hours()%12||12}function it(e,t){s(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function rt(e,t){return t._meridiemParse}s("H",["HH",2],0,"hour"),s("h",["hh",2],0,st),s("k",["kk",2],0,function(){return this.hours()||24}),s("hmm",0,0,function(){return""+st.apply(this)+r(this.minutes(),2)}),s("hmmss",0,0,function(){return""+st.apply(this)+r(this.minutes(),2)+r(this.seconds(),2)}),s("Hmm",0,0,function(){return""+this.hours()+r(this.minutes(),2)}),s("Hmmss",0,0,function(){return""+this.hours()+r(this.minutes(),2)+r(this.seconds(),2)}),it("a",!0),it("A",!1),t("hour","h"),n("hour",13),v("a",rt),v("A",rt),v("H",p),v("h",p),v("k",p),v("HH",p,w),v("hh",p,w),v("kk",p,w),v("hmm",ge),v("hmmss",we),v("Hmm",ge),v("Hmmss",we),D(["H","HH"],x),D(["k","kk"],function(e,t,n){e=g(e);t[x]=24===e?0:e}),D(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),D(["h","hh"],function(e,t,n){t[x]=g(e),m(n).bigHour=!0}),D("hmm",function(e,t,n){var s=e.length-2;t[x]=g(e.substr(0,s)),t[T]=g(e.substr(s)),m(n).bigHour=!0}),D("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[x]=g(e.substr(0,s)),t[T]=g(e.substr(s,2)),t[N]=g(e.substr(i)),m(n).bigHour=!0}),D("Hmm",function(e,t,n){var s=e.length-2;t[x]=g(e.substr(0,s)),t[T]=g(e.substr(s))}),D("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[x]=g(e.substr(0,s)),t[T]=g(e.substr(s,2)),t[N]=g(e.substr(i))});k=de("Hours",!0);var at,ot={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ce,monthsShort:Ue,week:{dow:0,doy:6},weekdays:Je,weekdaysMin:Xe,weekdaysShort:Qe,meridiemParse:/[ap]\.?m?\.?/i},R={},ut={};function lt(e){return e&&e.toLowerCase().replace("_","-")}function ht(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=lt(e[r]).split("-")).length,n=(n=lt(e[r+1]))?n.split("-"):null;0<t;){if(s=dt(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&function(e,t){for(var n=Math.min(e.length,t.length),s=0;s<n;s+=1)if(e[s]!==t[s])return s;return n}(i,n)>=t-1)break;t--}r++}return at}function dt(t){var e;if(void 0===R[t]&&"undefined"!=typeof module&&module&&module.exports&&null!=t.match("^[^/\\\\]*$"))try{e=at._abbr,require("./locale/"+t),ct(e)}catch(e){R[t]=null}return R[t]}function ct(e,t){return e&&((t=o(t)?mt(e):ft(e,t))?at=t:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),at._abbr}function ft(e,t){if(null===t)return delete R[e],null;var n,s=ot;if(t.abbr=e,null!=R[e])Q("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=R[e]._config;else if(null!=t.parentLocale)if(null!=R[t.parentLocale])s=R[t.parentLocale]._config;else{if(null==(n=dt(t.parentLocale)))return ut[t.parentLocale]||(ut[t.parentLocale]=[]),ut[t.parentLocale].push({name:e,config:t}),null;s=n._config}return R[e]=new K(X(s,t)),ut[e]&&ut[e].forEach(function(e){ft(e.name,e.config)}),ct(e),R[e]}function mt(e){var t;if(!(e=e&&e._locale&&e._locale._abbr?e._locale._abbr:e))return at;if(!a(e)){if(t=dt(e))return t;e=[e]}return ht(e)}function _t(e){var t=e._a;return t&&-2===m(e).overflow&&(t=t[O]<0||11<t[O]?O:t[b]<1||t[b]>We(t[Y],t[O])?b:t[x]<0||24<t[x]||24===t[x]&&(0!==t[T]||0!==t[N]||0!==t[Ne])?x:t[T]<0||59<t[T]?T:t[N]<0||59<t[N]?N:t[Ne]<0||999<t[Ne]?Ne:-1,m(e)._overflowDayOfYear&&(t<Y||b<t)&&(t=b),m(e)._overflowWeeks&&-1===t&&(t=Pe),m(e)._overflowWeekday&&-1===t&&(t=Re),m(e).overflow=t),e}var yt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,wt=/Z|[+-]\d\d(?::?\d\d)?/,pt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],kt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],vt=/^\/?Date\((-?\d+)/i,Mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Dt={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function St(e){var t,n,s,i,r,a,o=e._i,u=yt.exec(o)||gt.exec(o),o=pt.length,l=kt.length;if(u){for(m(e).iso=!0,t=0,n=o;t<n;t++)if(pt[t][1].exec(u[1])){i=pt[t][0],s=!1!==pt[t][2];break}if(null==i)e._isValid=!1;else{if(u[3]){for(t=0,n=l;t<n;t++)if(kt[t][1].exec(u[3])){r=(u[2]||" ")+kt[t][0];break}if(null==r)return void(e._isValid=!1)}if(s||null==r){if(u[4]){if(!wt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Tt(e)}else e._isValid=!1}}else e._isValid=!1}function Yt(e,t,n,s,i,r){e=[function(e){e=parseInt(e,10);{if(e<=49)return 2e3+e;if(e<=999)return 1900+e}return e}(e),Ue.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&e.push(parseInt(r,10)),e}function Ot(e){var t,n,s,i,r=Mt.exec(e._i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));r?(t=Yt(r[4],r[3],r[2],r[5],r[6],r[7]),n=r[1],s=t,i=e,n&&Qe.indexOf(n)!==new Date(s[0],s[1],s[2]).getDay()?(m(i).weekdayMismatch=!0,i._isValid=!1):(e._a=t,e._tzm=(n=r[8],s=r[9],i=r[10],n?Dt[n]:s?0:60*(((n=parseInt(i,10))-(s=n%100))/100)+s),e._d=Ze.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),m(e).rfc2822=!0)):e._isValid=!1}function bt(e,t,n){return null!=e?e:null!=t?t:n}function xt(e){var t,n,s,i,r,a,o,u,l,h,d,c=[];if(!e._d){for(s=e,i=new Date(f.now()),n=s._useUTC?[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]:[i.getFullYear(),i.getMonth(),i.getDate()],e._w&&null==e._a[b]&&null==e._a[O]&&(null!=(i=(s=e)._w).GG||null!=i.W||null!=i.E?(u=1,l=4,r=bt(i.GG,s._a[Y],qe(W(),1,4).year),a=bt(i.W,1),((o=bt(i.E,1))<1||7<o)&&(h=!0)):(u=s._locale._week.dow,l=s._locale._week.doy,d=qe(W(),u,l),r=bt(i.gg,s._a[Y],d.year),a=bt(i.w,d.week),null!=i.d?((o=i.d)<0||6<o)&&(h=!0):null!=i.e?(o=i.e+u,(i.e<0||6<i.e)&&(h=!0)):o=u),a<1||a>P(r,u,l)?m(s)._overflowWeeks=!0:null!=h?m(s)._overflowWeekday=!0:(d=$e(r,a,o,u,l),s._a[Y]=d.year,s._dayOfYear=d.dayOfYear)),null!=e._dayOfYear&&(i=bt(e._a[Y],n[Y]),(e._dayOfYear>Ae(i)||0===e._dayOfYear)&&(m(e)._overflowDayOfYear=!0),h=Ze(i,0,e._dayOfYear),e._a[O]=h.getUTCMonth(),e._a[b]=h.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=c[t]=n[t];for(;t<7;t++)e._a[t]=c[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[x]&&0===e._a[T]&&0===e._a[N]&&0===e._a[Ne]&&(e._nextDay=!0,e._a[x]=0),e._d=(e._useUTC?Ze:je).apply(null,c),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[x]=24),e._w&&void 0!==e._w.d&&e._w.d!==r&&(m(e).weekdayMismatch=!0)}}function Tt(e){if(e._f===f.ISO_8601)St(e);else if(e._f===f.RFC_2822)Ot(e);else{e._a=[],m(e).empty=!0;for(var t,n,s,i,r,a=""+e._i,o=a.length,u=0,l=ae(e._f,e._locale).match(te)||[],h=l.length,d=0;d<h;d++)n=l[d],(t=(a.match(Oe(n,e))||[])[0])&&(0<(s=a.substr(0,a.indexOf(t))).length&&m(e).unusedInput.push(s),a=a.slice(a.indexOf(t)+t.length),u+=t.length),ie[n]?(t?m(e).empty=!1:m(e).unusedTokens.push(n),s=n,r=e,null!=(i=t)&&c(xe,s)&&xe[s](i,r._a,r,s)):e._strict&&!t&&m(e).unusedTokens.push(n);m(e).charsLeftOver=o-u,0<a.length&&m(e).unusedInput.push(a),e._a[x]<=12&&!0===m(e).bigHour&&0<e._a[x]&&(m(e).bigHour=void 0),m(e).parsedDateParts=e._a.slice(0),m(e).meridiem=e._meridiem,e._a[x]=function(e,t,n){if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((e=e.isPM(n))&&t<12&&(t+=12),t=e||12!==t?t:0):t}(e._locale,e._a[x],e._meridiem),null!==(o=m(e).era)&&(e._a[Y]=e._locale.erasConvertYear(o,e._a[Y])),xt(e),_t(e)}}function Nt(e){var t,n,s,i=e._i,r=e._f;if(e._locale=e._locale||mt(e._l),null===i||void 0===r&&""===i)return I({nullInput:!0});if("string"==typeof i&&(e._i=i=e._locale.preparse(i)),h(i))return new q(_t(i));if(V(i))e._d=i;else if(a(r))!function(e){var t,n,s,i,r,a,o=!1,u=e._f.length;if(0===u)return m(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<u;i++)r=0,a=!1,t=$({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Tt(t),A(t)&&(a=!0),r=(r+=m(t).charsLeftOver)+10*m(t).unusedTokens.length,m(t).score=r,o?r<s&&(s=r,n=t):(null==s||r<s||a)&&(s=r,n=t,a&&(o=!0));E(e,n||t)}(e);else if(r)Tt(e);else if(o(r=(i=e)._i))i._d=new Date(f.now());else V(r)?i._d=new Date(r.valueOf()):"string"==typeof r?(n=i,null!==(t=vt.exec(n._i))?n._d=new Date(+t[1]):(St(n),!1===n._isValid&&(delete n._isValid,Ot(n),!1===n._isValid&&(delete n._isValid,n._strict?n._isValid=!1:f.createFromInputFallback(n))))):a(r)?(i._a=G(r.slice(0),function(e){return parseInt(e,10)}),xt(i)):F(r)?(t=i)._d||(s=void 0===(n=ue(t._i)).day?n.date:n.day,t._a=G([n.year,n.month,s,n.hour,n.minute,n.second,n.millisecond],function(e){return e&&parseInt(e,10)}),xt(t)):u(r)?i._d=new Date(r):f.createFromInputFallback(i);return A(e)||(e._d=null),e}function Pt(e,t,n,s,i){var r={};return!0!==t&&!1!==t||(s=t,t=void 0),!0!==n&&!1!==n||(s=n,n=void 0),(F(e)&&L(e)||a(e)&&0===e.length)&&(e=void 0),r._isAMomentObject=!0,r._useUTC=r._isUTC=i,r._l=n,r._i=e,r._f=t,r._strict=s,(i=new q(_t(Nt(i=r))))._nextDay&&(i.add(1,"d"),i._nextDay=void 0),i}function W(e,t,n,s){return Pt(e,t,n,s,!1)}f.createFromInputFallback=e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),f.ISO_8601=function(){},f.RFC_2822=function(){};ge=e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:I()}),we=e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:I()});function Rt(e,t){var n,s;if(!(t=1===t.length&&a(t[0])?t[0]:t).length)return W();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ct(e){var e=ue(e),t=e.year||0,n=e.quarter||0,s=e.month||0,i=e.week||e.isoWeek||0,r=e.day||0,a=e.hour||0,o=e.minute||0,u=e.second||0,l=e.millisecond||0;this._isValid=function(e){var t,n,s=!1,i=Wt.length;for(t in e)if(c(e,t)&&(-1===S.call(Wt,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<i;++n)if(e[Wt[n]]){if(s)return!1;parseFloat(e[Wt[n]])!==g(e[Wt[n]])&&(s=!0)}return!0}(e),this._milliseconds=+l+1e3*u+6e4*o+1e3*a*60*60,this._days=+r+7*i,this._months=+s+3*n+12*t,this._data={},this._locale=mt(),this._bubble()}function Ut(e){return e instanceof Ct}function Ht(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){s(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+r(~~(e/60),2)+n+r(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),v("Z",Ye),v("ZZ",Ye),D(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Vt(Ye,e)});var Lt=/([\+\-]|\d\d)/gi;function Vt(e,t){var t=(t||"").match(e);return null===t?null:0===(t=60*(e=((t[t.length-1]||[])+"").match(Lt)||["-",0,0])[1]+g(e[2]))?0:"+"===e[0]?t:-t}function Gt(e,t){var n;return t._isUTC?(t=t.clone(),n=(h(e)||V(e)?e:W(e)).valueOf()-t.valueOf(),t._d.setTime(t._d.valueOf()+n),f.updateOffset(t,!1),t):W(e).local()}function Et(e){return-Math.round(e._d.getTimezoneOffset())}function At(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}f.updateOffset=function(){};var It=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,jt=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function C(e,t){var n,s=e,i=null;return Ut(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:u(e)||!isNaN(+e)?(s={},t?s[t]=+e:s.milliseconds=+e):(i=It.exec(e))?(n="-"===i[1]?-1:1,s={y:0,d:g(i[b])*n,h:g(i[x])*n,m:g(i[T])*n,s:g(i[N])*n,ms:g(Ht(1e3*i[Ne]))*n}):(i=jt.exec(e))?(n="-"===i[1]?-1:1,s={y:Zt(i[2],n),M:Zt(i[3],n),w:Zt(i[4],n),d:Zt(i[5],n),h:Zt(i[6],n),m:Zt(i[7],n),s:Zt(i[8],n)}):null==s?s={}:"object"==typeof s&&("from"in s||"to"in s)&&(t=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=zt(e,t):((n=zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(W(s.from),W(s.to)),(s={}).ms=t.milliseconds,s.M=t.months),i=new Ct(s),Ut(e)&&c(e,"_locale")&&(i._locale=e._locale),Ut(e)&&c(e,"_isValid")&&(i._isValid=e._isValid),i}function Zt(e,t){e=e&&parseFloat(e.replace(",","."));return(isNaN(e)?0:e)*t}function zt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(Q(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),qt(this,C(e,t),s),this}}function qt(e,t,n,s){var i=t._milliseconds,r=Ht(t._days),t=Ht(t._months);e.isValid()&&(s=null==s||s,t&&Ve(e,ce(e,"Month")+t*n),r&&fe(e,"Date",ce(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&f.updateOffset(e,r||t))}C.fn=Ct.prototype,C.invalid=function(){return C(NaN)};Ce=$t(1,"add"),Je=$t(-1,"subtract");function Bt(e){return"string"==typeof e||e instanceof String}function Jt(e){return h(e)||V(e)||Bt(e)||u(e)||function(t){var e=a(t),n=!1;e&&(n=0===t.filter(function(e){return!u(e)&&Bt(t)}).length);return e&&n}(e)||function(e){var t,n,s=F(e)&&!L(e),i=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a=r.length;for(t=0;t<a;t+=1)n=r[t],i=i||c(e,n);return s&&i}(e)||null==e}function Qt(e,t){if(e.date()<t.date())return-Qt(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months"),t=t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(1+n,"months")-s);return-(n+t)||0}function Xt(e){return void 0===e?this._locale._abbr:(null!=(e=mt(e))&&(this._locale=e),this)}f.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",f.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";Xe=e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}var en=126227808e5;function tn(e,t){return(e%t+t)%t}function nn(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-en:new Date(e,t,n).valueOf()}function sn(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-en:Date.UTC(e,t,n)}function rn(e,t){return t.erasAbbrRegex(e)}function an(){for(var e=[],t=[],n=[],s=[],i=this.eras(),r=0,a=i.length;r<a;++r)t.push(M(i[r].name)),e.push(M(i[r].abbr)),n.push(M(i[r].narrow)),s.push(M(i[r].name)),s.push(M(i[r].abbr)),s.push(M(i[r].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}function on(e,t){s(0,[e,e.length],0,t)}function un(e,t,n,s,i){var r;return null==e?qe(this,s,i).year:(r=P(e,s,i),function(e,t,n,s,i){e=$e(e,t,n,s,i),t=Ze(e.year,0,e.dayOfYear);return this.year(t.getUTCFullYear()),this.month(t.getUTCMonth()),this.date(t.getUTCDate()),this}.call(this,e,t=r<t?r:t,n,s,i))}s("N",0,0,"eraAbbr"),s("NN",0,0,"eraAbbr"),s("NNN",0,0,"eraAbbr"),s("NNNN",0,0,"eraName"),s("NNNNN",0,0,"eraNarrow"),s("y",["y",1],"yo","eraYear"),s("y",["yy",2],0,"eraYear"),s("y",["yyy",3],0,"eraYear"),s("y",["yyyy",4],0,"eraYear"),v("N",rn),v("NN",rn),v("NNN",rn),v("NNNN",function(e,t){return t.erasNameRegex(e)}),v("NNNNN",function(e,t){return t.erasNarrowRegex(e)}),D(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,s){s=n._locale.erasParse(e,s,n._strict);s?m(n).era=s:m(n).invalidEra=e}),v("y",Me),v("yy",Me),v("yyy",Me),v("yyyy",Me),v("yo",function(e,t){return t._eraYearOrdinalRegex||Me}),D(["y","yy","yyy","yyyy"],Y),D(["yo"],function(e,t,n,s){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[Y]=n._locale.eraYearOrdinalParse(e,i):t[Y]=parseInt(e,10)}),s(0,["gg",2],0,function(){return this.weekYear()%100}),s(0,["GG",2],0,function(){return this.isoWeekYear()%100}),on("gggg","weekYear"),on("ggggg","weekYear"),on("GGGG","isoWeekYear"),on("GGGGG","isoWeekYear"),t("weekYear","gg"),t("isoWeekYear","GG"),n("weekYear",1),n("isoWeekYear",1),v("G",De),v("g",De),v("GG",p,w),v("gg",p,w),v("GGGG",ke,_e),v("gggg",ke,_e),v("GGGGG",ve,ye),v("ggggg",ve,ye),Te(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=g(e)}),Te(["gg","GG"],function(e,t,n,s){t[s]=f.parseTwoDigitYear(e)}),s("Q",0,"Qo","quarter"),t("quarter","Q"),n("quarter",7),v("Q",i),D("Q",function(e,t){t[O]=3*(g(e)-1)}),s("D",["DD",2],"Do","date"),t("date","D"),n("date",9),v("D",p),v("DD",p,w),v("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),D(["D","DD"],b),D("Do",function(e,t){t[b]=g(e.match(p)[0])});ke=de("Date",!0);s("DDD",["DDDD",3],"DDDo","dayOfYear"),t("dayOfYear","DDD"),n("dayOfYear",4),v("DDD",pe),v("DDDD",me),D(["DDD","DDDD"],function(e,t,n){n._dayOfYear=g(e)}),s("m",["mm",2],0,"minute"),t("minute","m"),n("minute",14),v("m",p),v("mm",p,w),D(["m","mm"],T);var ln,_e=de("Minutes",!1),ve=(s("s",["ss",2],0,"second"),t("second","s"),n("second",15),v("s",p),v("ss",p,w),D(["s","ss"],N),de("Seconds",!1));for(s("S",0,0,function(){return~~(this.millisecond()/100)}),s(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),s(0,["SSS",3],0,"millisecond"),s(0,["SSSS",4],0,function(){return 10*this.millisecond()}),s(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),s(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),s(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),s(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),s(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),t("millisecond","ms"),n("millisecond",16),v("S",pe,i),v("SS",pe,w),v("SSS",pe,me),ln="SSSS";ln.length<=9;ln+="S")v(ln,Me);function hn(e,t){t[Ne]=g(1e3*("0."+e))}for(ln="S";ln.length<=9;ln+="S")D(ln,hn);ye=de("Milliseconds",!1),s("z",0,0,"zoneAbbr"),s("zz",0,0,"zoneName");i=q.prototype;function dn(e){return e}i.add=Ce,i.calendar=function(e,t){1===arguments.length&&(arguments[0]?Jt(arguments[0])?(e=arguments[0],t=void 0):function(e){for(var t=F(e)&&!L(e),n=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i=0;i<s.length;i+=1)n=n||c(e,s[i]);return t&&n}(arguments[0])&&(t=arguments[0],e=void 0):t=e=void 0);var e=e||W(),n=Gt(e,this).startOf("day"),n=f.calendarFormat(this,n)||"sameElse",t=t&&(d(t[n])?t[n].call(this,e):t[n]);return this.format(t||this.localeData().calendar(n,this,W(e)))},i.clone=function(){return new q(this)},i.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=_(t)){case"year":r=Qt(this,s)/12;break;case"month":r=Qt(this,s);break;case"quarter":r=Qt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:y(r)},i.endOf=function(e){var t,n;if(void 0===(e=_(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?sn:nn,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-tn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-tn(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-tn(t,1e3)-1;break}return this._d.setTime(t),f.updateOffset(this,!0),this},i.format=function(e){return e=e||(this.isUtc()?f.defaultFormatUtc:f.defaultFormat),e=re(this,e),this.localeData().postformat(e)},i.from=function(e,t){return this.isValid()&&(h(e)&&e.isValid()||W(e).isValid())?C({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},i.fromNow=function(e){return this.from(W(),e)},i.to=function(e,t){return this.isValid()&&(h(e)&&e.isValid()||W(e).isValid())?C({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},i.toNow=function(e){return this.to(W(),e)},i.get=function(e){return d(this[e=_(e)])?this[e]():this},i.invalidAt=function(){return m(this).overflow},i.isAfter=function(e,t){return e=h(e)?e:W(e),!(!this.isValid()||!e.isValid())&&("millisecond"===(t=_(t)||"millisecond")?this.valueOf()>e.valueOf():e.valueOf()<this.clone().startOf(t).valueOf())},i.isBefore=function(e,t){return e=h(e)?e:W(e),!(!this.isValid()||!e.isValid())&&("millisecond"===(t=_(t)||"millisecond")?this.valueOf()<e.valueOf():this.clone().endOf(t).valueOf()<e.valueOf())},i.isBetween=function(e,t,n,s){return e=h(e)?e:W(e),t=h(t)?t:W(t),!!(this.isValid()&&e.isValid()&&t.isValid())&&(("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n)))},i.isSame=function(e,t){var e=h(e)?e:W(e);return!(!this.isValid()||!e.isValid())&&("millisecond"===(t=_(t)||"millisecond")?this.valueOf()===e.valueOf():(e=e.valueOf(),this.clone().startOf(t).valueOf()<=e&&e<=this.clone().endOf(t).valueOf()))},i.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},i.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},i.isValid=function(){return A(this)},i.lang=Xe,i.locale=Xt,i.localeData=Kt,i.max=we,i.min=ge,i.parsingFlags=function(){return E({},m(this))},i.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t,n=[];for(t in e)c(e,t)&&n.push({unit:t,priority:le[t]});return n.sort(function(e,t){return e.priority-t.priority}),n}(e=ue(e)),s=n.length,i=0;i<s;i++)this[n[i].unit](e[n[i].unit]);else if(d(this[e=_(e)]))return this[e](t);return this},i.startOf=function(e){var t,n;if(void 0===(e=_(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?sn:nn,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=tn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=tn(t,6e4);break;case"second":t=this._d.valueOf(),t-=tn(t,1e3);break}return this._d.setTime(t),f.updateOffset(this,!0),this},i.subtract=Je,i.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},i.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},i.toDate=function(){return new Date(this.valueOf())},i.toISOString=function(e){if(!this.isValid())return null;var t=(e=!0!==e)?this.clone().utc():this;return t.year()<0||9999<t.year()?re(t,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):d(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",re(t,"Z")):re(t,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},i.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t="moment",n="";return this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",n="Z"),t="["+t+'("]',e=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",this.format(t+e+"-MM-DD[T]HH:mm:ss.SSS"+(n+'[")]'))},"undefined"!=typeof Symbol&&null!=Symbol.for&&(i[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},i.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},i.eraName=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].name;if(t[n].until<=e&&e<=t[n].since)return t[n].name}return""},i.eraNarrow=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].narrow;if(t[n].until<=e&&e<=t[n].since)return t[n].narrow}return""},i.eraAbbr=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].abbr;if(t[n].until<=e&&e<=t[n].since)return t[n].abbr}return""},i.eraYear=function(){for(var e,t,n=this.localeData().eras(),s=0,i=n.length;s<i;++s)if(e=n[s].since<=n[s].until?1:-1,t=this.clone().startOf("day").valueOf(),n[s].since<=t&&t<=n[s].until||n[s].until<=t&&t<=n[s].since)return(this.year()-f(n[s].since).year())*e+n[s].offset;return this.year()},i.year=Ie,i.isLeapYear=function(){return he(this.year())},i.weekYear=function(e){return un.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},i.isoWeekYear=function(e){return un.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},i.quarter=i.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},i.month=Ge,i.daysInMonth=function(){return We(this.year(),this.month())},i.week=i.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},i.isoWeek=i.isoWeeks=function(e){var t=qe(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},i.weeksInYear=function(){var e=this.localeData()._week;return P(this.year(),e.dow,e.doy)},i.weeksInWeekYear=function(){var e=this.localeData()._week;return P(this.weekYear(),e.dow,e.doy)},i.isoWeeksInYear=function(){return P(this.year(),1,4)},i.isoWeeksInISOWeekYear=function(){return P(this.isoWeekYear(),1,4)},i.date=ke,i.day=i.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},i.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},i.isoWeekday=function(e){return this.isValid()?null!=e?(t=e,n=this.localeData(),n="string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t,this.day(this.day()%7?n:n-7)):this.day()||7:null!=e?this:NaN;var t,n},i.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},i.hour=i.hours=k,i.minute=i.minutes=_e,i.second=i.seconds=ve,i.millisecond=i.milliseconds=ye,i.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Et(this);if("string"==typeof e){if(null===(e=Vt(Ye,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Et(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?qt(this,C(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,f.updateOffset(this,!0),this._changeInProgress=null)),this},i.utc=function(e){return this.utcOffset(0,e)},i.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Et(this),"m")),this},i.parseZone=function(){var e;return null!=this._tzm?this.utcOffset(this._tzm,!1,!0):"string"==typeof this._i&&(null!=(e=Vt(Se,this._i))?this.utcOffset(e):this.utcOffset(0,!0)),this},i.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?W(e).utcOffset():0,(this.utcOffset()-e)%60==0)},i.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},i.isLocal=function(){return!!this.isValid()&&!this._isUTC},i.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},i.isUtc=At,i.isUTC=At,i.zoneAbbr=function(){return this._isUTC?"UTC":""},i.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},i.dates=e("dates accessor is deprecated. Use date instead.",ke),i.months=e("months accessor is deprecated. Use month instead",Ge),i.years=e("years accessor is deprecated. Use year instead",Ie),i.zone=e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?(this.utcOffset(e="string"!=typeof e?-e:e,t),this):-this.utcOffset()}),i.isDSTShifted=e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!o(this._isDSTShifted))return this._isDSTShifted;var e,t={};return $(t,this),(t=Nt(t))._a?(e=(t._isUTC?l:W)(t._a),this._isDSTShifted=this.isValid()&&0<function(e,t,n){for(var s=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),r=0,a=0;a<s;a++)(n&&e[a]!==t[a]||!n&&g(e[a])!==g(t[a]))&&r++;return r+i}(t._a,e.toArray())):this._isDSTShifted=!1,this._isDSTShifted});w=K.prototype;function cn(e,t,n,s){var i=mt(),s=l().set(s,t);return i[n](s,e)}function fn(e,t,n){if(u(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");for(var s=[],i=0;i<12;i++)s[i]=cn(e,i,n,"month");return s}function mn(e,t,n,s){t=("boolean"==typeof e?u(t)&&(n=t,t=void 0):(t=e,e=!1,u(n=t)&&(n=t,t=void 0)),t||"");var i,r=mt(),a=e?r._week.dow:0,o=[];if(null!=n)return cn(t,(n+a)%7,s,"day");for(i=0;i<7;i++)o[i]=cn(t,(i+a)%7,s,"day");return o}w.calendar=function(e,t,n){return d(e=this._calendar[e]||this._calendar.sameElse)?e.call(t,n):e},w.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(te).map(function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e}).join(""),this._longDateFormat[e])},w.invalidDate=function(){return this._invalidDate},w.ordinal=function(e){return this._ordinal.replace("%d",e)},w.preparse=dn,w.postformat=dn,w.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return d(i)?i(e,t,n,s):i.replace(/%d/i,e)},w.pastFuture=function(e,t){return d(e=this._relativeTime[0<e?"future":"past"])?e(t):e.replace(/%s/i,t)},w.set=function(e){var t,n;for(n in e)c(e,n)&&(d(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},w.eras=function(e,t){for(var n,s=this._eras||mt("en")._eras,i=0,r=s.length;i<r;++i){switch(typeof s[i].since){case"string":n=f(s[i].since).startOf("day"),s[i].since=n.valueOf();break}switch(typeof s[i].until){case"undefined":s[i].until=1/0;break;case"string":n=f(s[i].until).startOf("day").valueOf(),s[i].until=n.valueOf();break}}return s},w.erasParse=function(e,t,n){var s,i,r,a,o,u=this.eras();for(e=e.toUpperCase(),s=0,i=u.length;s<i;++s)if(r=u[s].name.toUpperCase(),a=u[s].abbr.toUpperCase(),o=u[s].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return u[s];break;case"NNNN":if(r===e)return u[s];break;case"NNNNN":if(o===e)return u[s];break}else if(0<=[r,a,o].indexOf(e))return u[s]},w.erasConvertYear=function(e,t){var n=e.since<=e.until?1:-1;return void 0===t?f(e.since).year():f(e.since).year()+(t-e.offset)*n},w.erasAbbrRegex=function(e){return c(this,"_erasAbbrRegex")||an.call(this),e?this._erasAbbrRegex:this._erasRegex},w.erasNameRegex=function(e){return c(this,"_erasNameRegex")||an.call(this),e?this._erasNameRegex:this._erasRegex},w.erasNarrowRegex=function(e){return c(this,"_erasNarrowRegex")||an.call(this),e?this._erasNarrowRegex:this._erasRegex},w.months=function(e,t){return e?(a(this._months)?this._months:this._months[(this._months.isFormat||He).test(t)?"format":"standalone"])[e.month()]:a(this._months)?this._months:this._months.standalone},w.monthsShort=function(e,t){return e?(a(this._monthsShort)?this._monthsShort:this._monthsShort[He.test(t)?"format":"standalone"])[e.month()]:a(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},w.monthsParse=function(e,t,n){var s,i;if(this._monthsParseExact)return function(e,t,n){var s,i,r,e=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=l([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=S.call(this._shortMonthsParse,e))?i:null:-1!==(i=S.call(this._longMonthsParse,e))?i:null:"MMM"===t?-1!==(i=S.call(this._shortMonthsParse,e))||-1!==(i=S.call(this._longMonthsParse,e))?i:null:-1!==(i=S.call(this._longMonthsParse,e))||-1!==(i=S.call(this._shortMonthsParse,e))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=l([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(i="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(i.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},w.monthsRegex=function(e){return this._monthsParseExact?(c(this,"_monthsRegex")||Ee.call(this),e?this._monthsStrictRegex:this._monthsRegex):(c(this,"_monthsRegex")||(this._monthsRegex=Le),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},w.monthsShortRegex=function(e){return this._monthsParseExact?(c(this,"_monthsRegex")||Ee.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(c(this,"_monthsShortRegex")||(this._monthsShortRegex=Fe),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},w.week=function(e){return qe(e,this._week.dow,this._week.doy).week},w.firstDayOfYear=function(){return this._week.doy},w.firstDayOfWeek=function(){return this._week.dow},w.weekdays=function(e,t){return t=a(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"],!0===e?Be(t,this._week.dow):e?t[e.day()]:t},w.weekdaysMin=function(e){return!0===e?Be(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},w.weekdaysShort=function(e){return!0===e?Be(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},w.weekdaysParse=function(e,t,n){var s,i;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,e=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=l([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=S.call(this._weekdaysParse,e))?i:null:"ddd"===t?-1!==(i=S.call(this._shortWeekdaysParse,e))?i:null:-1!==(i=S.call(this._minWeekdaysParse,e))?i:null:"dddd"===t?-1!==(i=S.call(this._weekdaysParse,e))||-1!==(i=S.call(this._shortWeekdaysParse,e))||-1!==(i=S.call(this._minWeekdaysParse,e))?i:null:"ddd"===t?-1!==(i=S.call(this._shortWeekdaysParse,e))||-1!==(i=S.call(this._weekdaysParse,e))||-1!==(i=S.call(this._minWeekdaysParse,e))?i:null:-1!==(i=S.call(this._minWeekdaysParse,e))||-1!==(i=S.call(this._weekdaysParse,e))||-1!==(i=S.call(this._shortWeekdaysParse,e))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=l([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(i="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(i.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},w.weekdaysRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||nt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(c(this,"_weekdaysRegex")||(this._weekdaysRegex=Ke),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},w.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||nt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(c(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=et),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},w.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||nt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(c(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=tt),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},w.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},w.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ct("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===g(e%100/10)?"th":1==t?"st":2==t?"nd":3==t?"rd":"th")}}),f.lang=e("moment.lang is deprecated. Use moment.locale instead.",ct),f.langData=e("moment.langData is deprecated. Use moment.localeData instead.",mt);var _n=Math.abs;function yn(e,t,n,s){t=C(t,n);return e._milliseconds+=s*t._milliseconds,e._days+=s*t._days,e._months+=s*t._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function wn(e){return 4800*e/146097}function pn(e){return 146097*e/4800}function kn(e){return function(){return this.as(e)}}pe=kn("ms"),me=kn("s"),Ce=kn("m"),we=kn("h"),ge=kn("d"),Je=kn("w"),k=kn("M"),_e=kn("Q"),ve=kn("y");function vn(e){return function(){return this.isValid()?this._data[e]:NaN}}var ye=vn("milliseconds"),ke=vn("seconds"),Ie=vn("minutes"),w=vn("hours"),Mn=vn("days"),Dn=vn("months"),Sn=vn("years");var Yn=Math.round,On={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function bn(e,t,n,s){var i=C(e).abs(),r=Yn(i.as("s")),a=Yn(i.as("m")),o=Yn(i.as("h")),u=Yn(i.as("d")),l=Yn(i.as("M")),h=Yn(i.as("w")),i=Yn(i.as("y")),r=(r<=n.ss?["s",r]:r<n.s&&["ss",r])||a<=1&&["m"]||a<n.m&&["mm",a]||o<=1&&["h"]||o<n.h&&["hh",o]||u<=1&&["d"]||u<n.d&&["dd",u];return(r=(r=null!=n.w?r||h<=1&&["w"]||h<n.w&&["ww",h]:r)||l<=1&&["M"]||l<n.M&&["MM",l]||i<=1&&["y"]||["yy",i])[2]=t,r[3]=0<+e,r[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,r)}var xn=Math.abs;function Tn(e){return(0<e)-(e<0)||+e}function Nn(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,s,i,r,a,o=xn(this._milliseconds)/1e3,u=xn(this._days),l=xn(this._months),h=this.asSeconds();return h?(e=y(o/60),t=y(e/60),o%=60,e%=60,n=y(l/12),l%=12,s=o?o.toFixed(3).replace(/\.?0+$/,""):"",i=Tn(this._months)!==Tn(h)?"-":"",r=Tn(this._days)!==Tn(h)?"-":"",a=Tn(this._milliseconds)!==Tn(h)?"-":"",(h<0?"-":"")+"P"+(n?i+n+"Y":"")+(l?i+l+"M":"")+(u?r+u+"D":"")+(t||e||o?"T":"")+(t?a+t+"H":"")+(e?a+e+"M":"")+(o?a+s+"S":"")):"P0D"}var U=Ct.prototype;return U.isValid=function(){return this._isValid},U.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},U.add=function(e,t){return yn(this,e,t,1)},U.subtract=function(e,t){return yn(this,e,t,-1)},U.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=_(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+wn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(pn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},U.asMilliseconds=pe,U.asSeconds=me,U.asMinutes=Ce,U.asHours=we,U.asDays=ge,U.asWeeks=Je,U.asMonths=k,U.asQuarters=_e,U.asYears=ve,U.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*g(this._months/12):NaN},U._bubble=function(){var e=this._milliseconds,t=this._days,n=this._months,s=this._data;return 0<=e&&0<=t&&0<=n||e<=0&&t<=0&&n<=0||(e+=864e5*gn(pn(n)+t),n=t=0),s.milliseconds=e%1e3,e=y(e/1e3),s.seconds=e%60,e=y(e/60),s.minutes=e%60,e=y(e/60),s.hours=e%24,t+=y(e/24),n+=e=y(wn(t)),t-=gn(pn(e)),e=y(n/12),n%=12,s.days=t,s.months=n,s.years=e,this},U.clone=function(){return C(this)},U.get=function(e){return e=_(e),this.isValid()?this[e+"s"]():NaN},U.milliseconds=ye,U.seconds=ke,U.minutes=Ie,U.hours=w,U.days=Mn,U.weeks=function(){return y(this.days()/7)},U.months=Dn,U.years=Sn,U.humanize=function(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,s=On;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(n=e),"object"==typeof t&&(s=Object.assign({},On,t),null!=t.s&&null==t.ss&&(s.ss=t.s-1)),e=this.localeData(),t=bn(this,!n,s,e),n&&(t=e.pastFuture(+this,t)),e.postformat(t)},U.toISOString=Nn,U.toString=Nn,U.toJSON=Nn,U.locale=Xt,U.localeData=Kt,U.toIsoString=e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Nn),U.lang=Xe,s("X",0,0,"unix"),s("x",0,0,"valueOf"),v("x",De),v("X",/[+-]?\d+(\.\d{1,3})?/),D("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e))}),D("x",function(e,t,n){n._d=new Date(g(e))}),f.version="2.29.4",H=W,f.fn=i,f.min=function(){return Rt("isBefore",[].slice.call(arguments,0))},f.max=function(){return Rt("isAfter",[].slice.call(arguments,0))},f.now=function(){return Date.now?Date.now():+new Date},f.utc=l,f.unix=function(e){return W(1e3*e)},f.months=function(e,t){return fn(e,t,"months")},f.isDate=V,f.locale=ct,f.invalid=I,f.duration=C,f.isMoment=h,f.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},f.parseZone=function(){return W.apply(null,arguments).parseZone()},f.localeData=mt,f.isDuration=Ut,f.monthsShort=function(e,t){return fn(e,t,"monthsShort")},f.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},f.defineLocale=ft,f.updateLocale=function(e,t){var n,s;return null!=t?(s=ot,null!=R[e]&&null!=R[e].parentLocale?R[e].set(X(R[e]._config,t)):(t=X(s=null!=(n=dt(e))?n._config:s,t),null==n&&(t.abbr=e),(s=new K(t)).parentLocale=R[e],R[e]=s),ct(e)):null!=R[e]&&(null!=R[e].parentLocale?(R[e]=R[e].parentLocale,e===ct()&&ct(e)):null!=R[e]&&delete R[e]),R[e]},f.locales=function(){return ee(R)},f.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},f.normalizeUnits=_,f.relativeTimeRounding=function(e){return void 0===e?Yn:"function"==typeof e&&(Yn=e,!0)},f.relativeTimeThreshold=function(e,t){return void 0!==On[e]&&(void 0===t?On[e]:(On[e]=t,"s"===e&&(On.ss=t-1),!0))},f.calendarFormat=function(e,t){return(e=e.diff(t,"days",!0))<-6?"sameElse":e<-1?"lastWeek":e<0?"lastDay":e<1?"sameDay":e<2?"nextDay":e<7?"nextWeek":"sameElse"},f.prototype=i,f.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},f});
;
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.Mustache = {};
    factory(global.Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template + ':' + (tags || mustache.tags).join(':')] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.3.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;
}));;
/* The Per Diem tool reports custom events using Google Analytics ga() methods, and Google Tag Manager dataLayer objects.

 It seems that some of these have been removed from the script, and others refactored in a way that prevents them from firing:

 1. var "ga" returns undefined, preventing Google Analytics ga() methods from firing.
 2. tests for the object "dataLayer" seem to be confused with other if statements. This is difficult to discern post-compression, but is clearly preventing event objects from reaching the GTM dataLayer.


 */

//const { start } = require("repl");
var perDiemSwiper,
	perDiemSearch = {
		rates: {},
		query: {},
	},

	gaConsoleCSS = 'background: green; color: white',
	// D9P-1125: This is now being handled in config.  Edit this value at https://SITE/admin/config/services/perdiem

	// Prod
	// apiRoot = 'https://api.gsa.gov/travel/perdiem/v2/rates';
	// Test
	// apiRoot = window.location.protocol + '//' + window.location.host + '/api/rs/perdiem';
	apiRoot = '';
  validDatesBegin = '';
  validDatesEnd = '';
//doc ready
(function ($) {

	Drupal.behaviors.perdiem = {
		attach: function (context, settings) {
      first_year = settings.perdiem_first_year;
      last_year = settings.perdiem_last_year;
			apiRoot = settings.perdiem_api_root;
      validDatesBegin = '10/1/' + first_year.substring(0, first_year.indexOf('-')),
      validDatesEnd = '09/30/' + last_year.substring(0, last_year.indexOf('-'));
		}
	};

	$(document).ready(function () {
		//force fields to reset values on load
		$("input[type=text]").val('');
		$('.perdiem-step-1 .usa-select').prop("selectedIndex", 0).val();
		SetUp_Perdiem_Tool();
	});


	function SetUp_Perdiem_Tool() {


	// validDatesBegin = '10/1/2012',
	// 	validDatesEnd = '09/30/2022';

		//set valid search dates to moment objs
		validDatesBegin = moment(validDatesBegin, 'MM/DD/YYYY');
		validDatesEnd = moment(validDatesEnd, 'MM/DD/YYYY');

		//global ajax settings
		$.ajaxSetup({
			timeout: 30000
		});
		//test for IE11, print userAgent
		var isIE11 = !!navigator.userAgent.match(/Trident\/7.0;(.*)rv(:*)11/);

		if (!navigator.geolocation) {
			$('#perdiem-current-location').hide();
		}
		//geolocation
		$('.get-location').on('click', useMyCurrentLocation);

		//clear location form
		$('#perdiem-clear-location-form').on('click', clearLocationForm);

		//reset search, back to first screen
		$('#perdiem-new-search').on('click', newSearch);

		//perform ajax calls, check for multiple rates
		$('#perdiem-multiple-rates-check').on('click', checkForMultipleRates);

		//validate multiple rate selection
		$('#perdiem-swiper').on('change', '#perdiem-fiscal-year-1,#perdiem-fiscal-year-2', validateMultipleRates);

		//perform calculation with selected rates
		$('#perdiem-swiper').on('click', '#perdiem-rates-selected', ratesSelected);

		//validate location
		$('#perdiem-city,#perdiem-zip').on('keyup', validateLocationParams)
		$('#perdiem-state').on('change', validateLocationParams)
		validateLocationParams();

		//validate dates
		//$(".usa-date-picker").on('click',validateDates);
		$('#perdiem-start-date,#perdiem-end-date').on('keyup', validateDates)

		$('#perdiem-start-date-group').on('change', validateDates)
		$('#perdiem-end-date-group').on('change', validateDates)
		validateDates();

		$("#perdiem-rate-lookup-fiscal-year").on('change', function () {
			$("#perdiem-look-up-rates-submit").removeAttr('disabled');
			$("#perdiem-look-up-rates-submit").removeClass('disabled');
			$("#perdiem-start-date,#perdiem-end-date,.usa-date-picker__button").attr('disabled', 'disabled');
		});
		$('#perdiem-tool-intent').on('click', function () {

			//perDiemSwiper.slideTo(1)
			if (typeof (ga) != "undefined") {
				ga('send', 'event', 'Per Diem Tool Intent', perDiemSearch.locationType);
			}
			//console.log('%cGA SEND EVENT: CATEGORY: Per Diem Tool Intent ACTION: ' + perDiemSearch.locationType, gaConsoleCSS);
			//console.log("#perdiem-tool-intent");

		});

		$('#perdiem-swiper').on('click', '#perdiem-result-print', perDiemResultPrint)

		//launch gsa.gov rate lookup
		$('#perdiem-look-up-rates-submit').on('click', lookUpRatesSubmit);
	}

	function successResults() {

		$('.perdiem-search-container').addClass("success");
		scrollToTargetAdjusted();
	}

	function scrollToTargetAdjusted() {
		var element = document.getElementById('perdiem-swiper');
		var headerOffset = 120;
		var elementPosition = element.offsetTop;
		var offsetPosition = elementPosition - headerOffset;

		window.scrollTo({
			block: 'start',
			top: offsetPosition,
			behavior: "smooth"
		});
	}

	function newSearch() {
		$('.perdiem-search-container').removeClass("success");
		clearLocationForm()
		clearDateForm()
		scrollToTargetAdjusted()
		$('.perdiem-step-1').removeClass("success");
		$('#perdiem-multiple-rates-check, #perdiem-rates-selected').addClass("display-none").attr("disabled");
		$('#perdiem-look-up-rates-submit').removeClass("display-none").attr('disabled');
	}

	function resetErrors() {
		$('.perdiem-error').hide();
	}

	function clearLocationForm() {
		$('#perdiem-look-up-rates-submit').removeClass("display-none").attr('disabled', 'disabled');
		$('#perdiem-choose-rates').empty();
		$('.perdiem-step-1 .usa-select').prop("selectedIndex", 0).val();
		$('#perdiem-zip').val('');
		$('#perdiem-city').val('');
		validateLocationParams();
		$('#perdiem-state').focus();
		$('#perdiem-end-date').val('');
		$('#perdiem-start-date').val('');
		disableFY();
		$('#perdiem-city').attr('disabled', 'disabled');
	}

	function clearDateForm() {
		$('#perdiem-start-date').val('');
		$('#perdiem-end-date').val('');
	}

	function disableFY() {
		$("#perdiem-rate-lookup-fiscal-year").attr('disabled', 'disabled');
	}
	function enableFY() {
		$("#perdiem-rate-lookup-fiscal-year").removeAttr('disabled');
	}

	function validateMultipleRates() {

		$('#perdiem-multiple-rates-check').addClass('disabled display-none').attr('disabled', 'disabled');

		if ($('#perdiem-fiscal-year-1').val() === '' && $('#perdiem-fiscal-year-2').val()) {

			$('#perdiem-rates-selected').addClass('display-none disabled').attr('disabled', 'disabled');
		} else {
			$('#perdiem-rates-selected').removeClass('display-none disabled').removeAttr('disabled');
		}
	}

	function disableNext() {
		//$("#perdiem-look-up-rates-submit").removeAttr('disabled');;
		$('#perdiem-multiple-rates-check').addClass('disabled display-none').attr('disabled', 'disabled');
	}

	function enableNext() {
		$("#perdiem-look-up-rates-submit").addClass("display-none");
		$('#perdiem-multiple-rates-check').removeClass('disabled display-none').removeAttr('disabled');
		resetErrors()
	}

	function validateDates() {
		disableFY();
		perDiemSearch.locationType = 'Custom Location'
		resetErrors();
		var valid = /\d{1,2}\/\d{1,2}\/\d{2,4}/;
		var startDateVal = $('#perdiem-start-date').val();
		var endDateVal = $('#perdiem-end-date').val();
		var startDate = moment(startDateVal, 'MM/DD/YYYY');
		var endDate = moment(endDateVal, 'MM/DD/YYYY');


		//text is valid and dates are valid
		if (startDateVal.match(valid) && endDateVal.match(valid) && startDate.isValid() && endDate.isValid()) {
			//dates are in acceptable range (THIS IS NOT INCLUSIVE)
			if ((startDate.isSame(validDatesBegin) || startDate.isBetween(validDatesBegin, validDatesEnd)) && (endDate.isBetween(validDatesBegin, validDatesEnd) || endDate.isSame(validDatesEnd))) {
				//start is before or equal to end
				if (startDate.isBefore(endDate) || startDate.isSame(endDate)) {
					enableNext()
					$('#perdiem-start-date').removeClass('perdiem-invalid')
					$('#perdiem-end-date').removeClass('perdiem-invalid')
				} else {
					$('#perdiem-end-before-start').show();
					disableNext()
				}
			} else {
				disableNext()
			}
		} else {
			disableNext()
			if (!startDateVal.match(valid) || !startDate.isValid()) {
				if (startDateVal !== '') {
					$('#perdiem-start-date').addClass('perdiem-invalid')
				}

			}
			if (!endDateVal.match(valid) || !endDate.isValid()) {
				if (endDateVal !== '') {
					$('#perdiem-end-date').addClass('perdiem-invalid')
				}
			}
		}
	}


	function validateLocationParams() {
		resetErrors();
		perDiemSearch.locationType = 'Custom Location';
		var validZIP = /\d{5}/;

		//if everything is blank

		$('#perdiem-state').on('change', function () {
			$("#perdiem-city").removeClass('disabled').removeAttr('disabled');
		});

		if ($('#perdiem-city').val() === '' && $('#perdiem-state').val() === '' && $('#perdiem-zip').val().length < 5) {
			//disabled
			$('#perdiem-tool-intent').addClass('disabled').attr('disabled', 'disabled');
			//if not everything is blank
		} else {
			//but zip and state are blank (city only)
			if (!$('#perdiem-zip').val().match(validZIP) && $('#perdiem-state').val() === '') {
				//disabled
				$('#perdiem-tool-intent').addClass('disabled').attr('disabled', 'disabled');
			}
			//otherwise
			else {
				//enabled
				$('#perdiem-rate-lookup-fiscal-year, #perdiem-tool-intent, #perdiem-start-date, #perdiem-end-date, .usa-date-picker__button').removeClass('disabled').removeAttr('disabled');

			}

		}

  }

	function checkForMultipleRates() {
		function e(e) {

			if (perDiemSearch.query.zip = $("#perdiem-zip").val(),
				perDiemSearch.query.state = $("#perdiem-state").val(),
				perDiemSearch.query.city = $("#perdiem-city").val(), "" !== perDiemSearch.query.zip) var a = apiRoot + "/zip/" + perDiemSearch.query.zip, t = "zip";
			else if ("" === perDiemSearch.query.city || e) {
				var a = apiRoot + "/state/" + perDiemSearch.query.state;
				varreqType = "state"
			} else var a = apiRoot + "/city/" + perDiemSearch.query.city + "/state/" + perDiemSearch.query.state,
				t = "city-state";
			r(a, t)
		}

		function r(r, t) {
			function o() {
				return $.ajax({
					url: s + "?api_key=bp4LMwzIzfSmKyn3qXoo2t87bb6swBBkWQGryDpW"
				}).done(function (r) {
					if (r.rates && 0 !== r.rates.length) {
						a = !1;
						var o = r.rates[0].rate;
						if (o.length > 1) {
							for (i in o) " " === o[i].county && (o[i].county = "Standard Rate");
							perDiemSearch.rates.fy1 = {
								year: perDiemSearch.startFY,
								multiple: !0,
								rates: o
							}
						} else perDiemSearch.rates.fy1 = {
							year: perDiemSearch.startFY,
							multiple: !1,
							rate: o[0]
						}
					} else "city-state" === t ? e(!0) : locationError(), a = !0
				}).fail(function () {
					$("#perdiem-multiple-rates-check").html("Next"), a = !0, $("#perdiem-api-error").show()
				})
			}

			function n() {
				if (perDiemSearch.startFY !== perDiemSearch.endFY) {
					var o = r + "/year/" + perDiemSearch.endFY + "?api_key=bp4LMwzIzfSmKyn3qXoo2t87bb6swBBkWQGryDpW";
					return $.ajax({
						url: o
					}).done(function (r) {
						if (r.rates && 0 !== r.rates.length) {
							a = !1;
							var o = r.rates[0].rate;
							if (o.length > 1) {
								for (i in o) " " === o[i].county && (o[i].county = "Standard Rate");
								perDiemSearch.rates.fy2 = {
									year: perDiemSearch.endFY,
									multiple: !0,
									rates: o
								}
							} else perDiemSearch.rates.fy2 = {
								year: perDiemSearch.endFY,
								multiple: !1,
								rate: o[0]
							}
						} else "city-state" === t ? e(!0) : locationError(), a = !0
					}).fail(function () {
						$("#perdiem-multiple-rates-check").html("Next"), $("#perdiem-api-error").show(), a = !0
					})
				}
				return !0
			}
			var s = r + "/year/" + perDiemSearch.startFY;
			$.when(o(), n()).done(function () {
				function e() {
					function e(e, r) {
						return e.county > r.county
					}
					perDiemSearch.rates.fy1.multiple && (perDiemSearch.rates.fy1.rates = perDiemSearch.rates.fy1.rates.sort(e)), perDiemSearch.rates.fy2 && perDiemSearch.rates.fy2.multiple && (perDiemSearch.rates.fy2.rates = perDiemSearch.rates.fy2.rates.sort(e));
					var r = template_multiple_rates,
						a = Mustache.render(r, {
							rates: perDiemSearch.rates
						});
					$("#perdiem-choose-rates").html(a)
				}
				a === !0 || (perDiemSearch.rates.fy2 ? perDiemSearch.rates.fy1.multiple || perDiemSearch.rates.fy2.multiple ? e() : calculateRates() : perDiemSearch.rates.fy1.multiple ? e() : calculateRates())
			})
		}
		//$("#perdiem-multiple-rates-check").html('Next <span class="glyphicon glyphicon-refresh spinning"></span>'),
		resetErrors(),
			perDiemSearch.startDate = moment($("#perdiem-start-date").val(), "MM/DD/YYYY"),
			perDiemSearch.startDate.month() > 8 ? perDiemSearch.startFY = perDiemSearch.startDate.year() + 1 : perDiemSearch.startFY = perDiemSearch.startDate.year(),
			perDiemSearch.endDate = moment($("#perdiem-end-date").val(), "MM/DD/YYYY"),
			perDiemSearch.endDate.month() > 8 ? perDiemSearch.endFY = perDiemSearch.endDate.year() + 1 : perDiemSearch.endFY = perDiemSearch.endDate.year(), e();
		var a = !1
	}


	function useMyCurrentLocation() {
		//var $btn = $(this).button('loading')
		var geocodeResult = {
			city: '',
			state: '',
			zip: ''
		};
		//get location
		navigator.geolocation.getCurrentPosition(reverseGeocode, currentPositionError);
		geocoder = new google.maps.Geocoder();

		function reverseGeocode(position) {

			var latitude = position.coords.latitude,
				longitude = position.coords.longitude;

			var latlong = new google.maps.LatLng(latitude, longitude);

			geocoder.geocode({
				'latLng': latlong
			}, function (results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					var addressComponents = results[0].address_components;
					//ZIP, use postal_code
					for (i in addressComponents) {
						if (addressComponents[i].types[0] === 'postal_code') {
							geocodeResult.zip = addressComponents[i].long_name;
						}
					}
					//CITY, use locality
					for (i in addressComponents) {
						if (addressComponents[i].types.indexOf('locality') > -1) {
							geocodeResult.city = addressComponents[i].long_name;
						}
					}
					//if no locality, use sublocality
					if (geocodeResult.city === '') {
						for (i in addressComponents) {
							if (addressComponents[i].types.indexOf('sublocality') > -1) {
								geocodeResult.city = addressComponents[i].long_name;
							}
						}
					}
					//STATE, use administrative_area_level_1
					for (i in addressComponents) {
						if (addressComponents[i].types.indexOf('administrative_area_level_1') > -1) {
							geocodeResult.state = addressComponents[i].short_name;
						}
					}
					populateForm();
//					$btn.button('reset')
				} else {
					//error

				}
			});
		}

		function populateForm() {

			$('#perdiem-zip').val(geocodeResult.zip)
			$('#perdiem-city').val(geocodeResult.city)
			$('#perdiem-state option').each(function () {
				if ($(this).val() === geocodeResult.state) {
					$(this).prop('selected', true);

				}
			})
			setTimeout(function () {
				validateLocationParams();
				perDiemSearch.locationType = 'Geolocation'
			}, 250)
			$('#perdiem-zip,#perdiem-city,#perdiem-state').addClass('animated flash');
			setTimeout(function () {
				$('#perdiem-zip,#perdiem-city,#perdiem-state').removeClass('animated flash');
			}, 2000)
		}
	}

	function currentPositionError() {
		console.warn('location error')
	}

	function locationError() {
		$('#perdiem-location-error').show()
		$('#perdiem-multiple-rates-check').html('Next')
	}


	function calculateRates() {

		perDiemSearch.results = {
			breakdown: [],
			rateInfo: [],
			lodgingTotal: 0,
			mieTotal: 0,
			total: 0,
			startDate: moment(perDiemSearch.startDate).format("MMMM DD, YYYY"),
			endDate: moment(perDiemSearch.endDate).format("MMMM DD, YYYY")
		};

		var e = moment(perDiemSearch.startDate, "MM/DD/YYYY"),
			r = moment(perDiemSearch.endDate, "MM/DD/YYYY");
		moment(perDiemSearch.startDate, "MM/DD/YYYY"), moment(perDiemSearch.endDate, "MM/DD/YYYY");

		var numberOfDays = 0, tempDayNum = 0;
		for (var startDate = moment(perDiemSearch.startDate).format("MM-DD-YYYY"), endDate = moment(perDiemSearch.endDate).format("MM-DD-YYYY"), fullDate = e; !fullDate.isAfter(r); fullDate.add(1, "days")) {

			var s = fullDate.format("MM") - 1,
				m = fullDate.format("YYYY"),
				dailyRate = 0,
				prevDate = moment(fullDate.toDate()).add(-1, "days"),
				nextDate = moment(fullDate.toDate()).add(1, "days"),
				lastDateOfMonth = moment(fullDate.toDate()).endOf('month').format("MM/DD/YY");

			//Whats the purpose of L508-L519
			if (s > 8) var c = parseFloat(m) + 1;
			else var c = parseFloat(m);
			var l = Object.keys(perDiemSearch.rates);
			for (i in l)
				if (perDiemSearch.rates[l[i]].year === c) var rate = perDiemSearch.rates[l[i]].rate;

			// for all instances of rate[]
			for (i in rate.months.month) {
				if (rate.months.month[i].number === s + 1) {
					var lodgingAmount = rate.months.month[i].value;
				}
			}

			// Format all months
			var fullMonth = fullDate.format("MMMM"), daySchema = '';

			if (fullDate.format("MM-DD-YYYY") === startDate) {
				daySchema = 'First day (' + fullDate.format("MM/DD/YY") + ')*';
				numberOfDays = 1;
				dailyRate = 0.75 * rate.meals;
				var D = !1;
			} else if (fullDate.format("MM-DD-YYYY") === endDate) {
				daySchema = 'Last day (' + fullDate.format("MM/DD/YY") + ')*';
				numberOfDays = 1;
				dailyRate = 0.75 * rate.meals;
				var D = !1;
			} else if (lastDateOfMonth === fullDate.format("MM/DD/YY")) { //when new month starts
				daySchema = 'Full day (' + fullDate.format("MMM") + ')';
				if (fullDate.format("MM-DD-YYYY") === startDate) { //No push in rateInfo if start date is last date of the month
					var D = !0;
				} else {
					numberOfDays = tempDayNum + 1;
					tempDayNum = 1;
					dailyRate = rate.meals;
					var D = !1;
				}
			} else if (nextDate.format("MM-DD-YYYY") === endDate) { //push in rateInfo for Full Day Entry for Last Month
				if (moment(perDiemSearch.startDate).month() === moment(perDiemSearch.endDate).month() && moment(perDiemSearch.startDate).format('YYYY') === moment(perDiemSearch.endDate).format('YYYY'))
					numberOfDays = moment(perDiemSearch.endDate).format("D") - moment(perDiemSearch.startDate).format("D") - 1;
				else
					numberOfDays = fullDate.format("D");
				var D = !1;
				dailyRate = rate.meals;
				daySchema = 'Full day (' + fullDate.format("MMM") + ')';
			} else if (prevDate.format("MMMM") === fullMonth) { //No push in rateInfo for rest of the days of the month
				var D = !0;
				tempDayNum += 1;
			} else {
				var D = !0;
			}

			if (D === !1 && perDiemSearch.results.rateInfo.push({
				fullDate: daySchema,
				lodging: formatCurrency(lodgingAmount),
				mie: formatCurrency(dailyRate),
				numberOfDays: numberOfDays,
				mieRowTotal: formatCurrency(numberOfDays * dailyRate)
			})) {
				var nightCount = '';
				perDiemSearch.results.mieTotal += numberOfDays * dailyRate;
				if (startDate === endDate) {
					nightCount = 0;
				} else if (moment(perDiemSearch.startDate).month() === moment(perDiemSearch.endDate).month() && moment(perDiemSearch.startDate).format('YYYY') === moment(perDiemSearch.endDate).format('YYYY')) {
					nightCount = moment(perDiemSearch.endDate).format("D") - moment(perDiemSearch.startDate).format("D");
				} else if (fullDate.month() === moment(perDiemSearch.startDate).month() && moment(perDiemSearch.startDate).format('YYYY') === moment(fullDate).format('YYYY')) {
					nightCount = moment(fullDate).daysInMonth() - fullDate.format("DD") + 1;
				} else if (fullDate.month() === moment(perDiemSearch.endDate).month() && moment(perDiemSearch.endDate).format('YYYY') === moment(fullDate).format('YYYY')) {
					nightCount = perDiemSearch.endDate.format("DD") - 1;
				} else {
					nightCount = moment(fullDate).daysInMonth();
				}

				var S = perDiemSearch.results.breakdown;
				for (i in S)
					if (S[i].date === fullMonth) {
						var D = !0;
					} else var D = !1;

				if (!D) {
					perDiemSearch.results.lodgingTotal += lodgingAmount * nightCount;
					perDiemSearch.results.breakdown.push({
						date: fullMonth,
						lodging: formatCurrency(lodgingAmount),
						nightCount: nightCount,
						monthTotal: lodgingAmount * nightCount
					})
				}
			}
		}
		var sum = parseFloat(perDiemSearch.results.lodgingTotal) + parseFloat(perDiemSearch.results.mieTotal);
		perDiemSearch.results.lodgingTotal = formatCurrency(perDiemSearch.results.lodgingTotal);
		perDiemSearch.results.mieTotal = formatCurrency(perDiemSearch.results.mieTotal);
		perDiemSearch.results.total = formatCurrency(sum),
			perDiemSearch.rates.fy2 && perDiemSearch.rates.fy1.rate.county === perDiemSearch.rates.fy2.rate.county && (perDiemSearch.ratesAreSame = !0),
			perDiemSearch.query.stateFormatted = USStates[perDiemSearch.query.state.toLowerCase()];

		var g = template_calculator_results,
			Y = Mustache.render(g, {
				perDiemSearch: perDiemSearch,
				sameRate: perDiemSearch.ratesAreSame
			});
		if ($("#perdiem-results").html(Y),
			//perDiemSwiper.slideTo(5),
			successResults(),
			"undefined" != typeof dataLayer) {
			var w = {
				event: "virtualEvent"
			};
			w.eventCategory = "Per Diem Tool Success", w.eventAction = perDiemSearch.searchType, "Look Up" === perDiemSearch.searchType && (w.eventLabel = perDiemSearch.endFY), dataLayer.push(w)
		}
	};

	function formatCurrency(n) {
		n = parseFloat(n);
		if (n % 1 !== 0) {
			var formatted = n.toFixed(2)
		} else {
			var formatted = n
		}
		return formatted;
	}

	function ratesSelected() {
		if (perDiemSearch.rates.fy1.multiple) {
			var e = $("#perdiem-fiscal-year-1 option:selected").index() - 1;
			perDiemSearch.rates.fy1.rate = perDiemSearch.rates.fy1.rates[e]
		}
		if (perDiemSearch.rates.fy2 && perDiemSearch.rates.fy2.multiple) {
			var r = $("#perdiem-fiscal-year-2 option:selected").index() - 1;
			perDiemSearch.rates.fy2.rate = perDiemSearch.rates.fy2.rates[r]
		}
		calculateRates()
	}


	function updateProgress(n) {
		$('.progress-bar').attr('aria-valuenow', n).css('width', n + '%')
	}

  let cityEvaluated = '';
  function cityEvaluate(){

    let regexMatch1 = /['-]/,
        regexMatch2 = /[.]/;

    if ($('#perdiem-city').val().match(regexMatch1)) {
      cityEvaluated = $('#perdiem-city').val().replace(regexMatch1, " ")
    } else if ($('#perdiem-city').val().match(regexMatch2)) {
      cityEvaluated = $('#perdiem-city').val().replace(regexMatch2, "")
    }
    return cityEvaluated;
  }

	function lookUpRatesSubmit() {
    //cityEvaluate();

		var lookUpYear = $('#perdiem-rate-lookup-fiscal-year').val();
    var url = 'https://' + document.location.host + "/travel/plan-book/per-diem-rates/per-diem-rates-results/?action=perdiems_report&fiscal_year=" + lookUpYear + "&city=" + $('#perdiem-city').val() + "&state=" + $('#perdiem-state').val() + "&zip=" + $('#perdiem-zip').val();
    //var url = 'https://' + document.location.host + "/travel/plan-book/per-diem-rates/per-diem-rates-results/?action=perdiems_report&fiscal_year=" + lookUpYear + "&city=" + cityEvaluated + "&state=" + $('#perdiem-state').val() + "&zip=" + $('#perdiem-zip').val();
		if (typeof (ga) != "undefined") {
			ga('send', 'event', 'Per Diem Tool Success', 'Look Up');
		}
		//console.log('%cGA SEND EVENT: CATEGORY: Per Diem Tool Success ACTION: Look Up LABEL: ' + lookUpYear, gaConsoleCSS)
		window.open(url, '_self')
	}

	function perDiemResultPrint() {
		var w = window.open();
		w.document.title = 'Per Diem Rates';
		var template = template_calculator_results_print;
		var rendered = Mustache.render(template, {
			perDiemSearch: perDiemSearch,
			sameRate: perDiemSearch.ratesAreSame
		});
		$(w.document.body).html(rendered);
		setTimeout(function () {
			w.focus();
			w.print();
		}, 1000)

	}

})(jQuery);
var USStates = {
	"al": "Alabama",
	"ak": "Alaska",
	"az": "Arizona",
	"ar": "Arkansas",
	"ca": "California",
	"co": "Colorado",
	"ct": "Connecticut",
	"dc": "District of Columbia",
	"de": "Delaware",
	"fl": "Florida",
	"ga": "Georgia",
	"hi": "Hawaii",
	"id": "Idaho",
	"il": "Illinois",
	"in": "Indiana",
	"ia": "Iowa",
	"ks": "Kansas",
	"ky": "Kentucky",
	"la": "Louisiana",
	"me": "Maine",
	"md": "Maryland",
	"ma": "Massachusetts",
	"mi": "Michigan",
	"mt": "Montana",
	"mn": "Minnesota",
	"ms": "Mississippi",
	"mo": "Missouri",
	"ne": "Nebraska",
	"nv": "Nevada",
	"nh": "New Hampshire",
	"nj": "New Jersey",
	"nm": "New Mexico",
	"ny": "New York",
	"nc": "North Carolina",
	"nd": "North Dakota",
	"oh": "Ohio",
	"ok": "Oklahoma",
	"or": "Oregon",
	"pa": "Pennsylvania",
	"ri": "Rhode Island",
	"sc": "South Carolina",
	"sd": "South Dakota",
	"tn": "Tennessee",
	"tx": "Texas",
	"ut": "Utah",
	"vt": "Vermont",
	"va": "Virginia",
	"wa": "Washington",
	"wv": "West Virginia",
	"wi": "Wisconsin",
	"wy": "Wyoming"
}
;
/*!
 * Elevator.js
 *
 * MIT licensed
 * Copyright (C) 2015 Tim Holman, http://tholman.com
 */

/*********************************************
 * Elevator.js
 *********************************************/

var Elevator = function (options) {

  'use strict';

  // Elements
  var body = null;

  // Scroll vars
  var animation = null;
  var duration = null; // ms
  var customDuration = false;
  var startTime = null;
  var startPosition = null;
  var endPosition = 0;
  var targetElement = null;
  var verticalPadding = null;
  var elevating = false;

  var startCallback;
  var mainAudio;
  var endAudio;
  var endCallback;

  var that = this;

  /**
   * Utils
   */

  // Thanks Mr Penner - http://robertpenner.com/easing/
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  function extendParameters(options, defaults) {
    for (var option in defaults) {
      var t = options[option] === undefined && typeof option !== "function";
      if (t) {
        options[option] = defaults[option];
      }
    }
    return options;
  }

  function getVerticalOffset(element) {
    var verticalOffset = 0;
    while (element) {
      verticalOffset += element.offsetTop || 0;
      element = element.offsetParent;
    }

    if (verticalPadding) {
      verticalOffset = verticalOffset - verticalPadding;
    }

    return verticalOffset;
  }

  /**
   * Main
   */

  // Time is passed through requestAnimationFrame, what a world!
  function animateLoop(time) {
    if (!startTime) {
      startTime = time;
    }

    var timeSoFar = time - startTime;
    var easedPosition = easeInOutQuad(timeSoFar, startPosition, endPosition - startPosition, duration);

    window.scrollTo(0, easedPosition);

    if (timeSoFar < duration) {
      animation = requestAnimationFrame(animateLoop);
    } else {
      animationFinished();
    }
  }

  //            ELEVATE!
  //              /
  //         ____
  //       .'    '=====<0
  //       |======|
  //       |======|
  //       [IIIIII[\--()
  //       |_______|
  //       C O O O D
  //      C O  O  O D
  //     C  O  O  O  D
  //     C__O__O__O__D
  //    [_____________]
  this.elevate = function () {

    if (elevating) {
      return;
    }

    elevating = true;
    startPosition = (document.documentElement.scrollTop || body.scrollTop);
    updateEndPosition();

    // No custom duration set, so we travel at pixels per millisecond. (0.75px per ms)
    if (!customDuration) {
      duration = (Math.abs(endPosition - startPosition) * 1.5);
    }

    requestAnimationFrame(animateLoop);

    // Start music!
    if (mainAudio) {
      mainAudio.play();
    }

    if (startCallback) {
      startCallback();
    }
  };

  function browserMeetsRequirements() {
    return window.requestAnimationFrame && window.Audio && window.addEventListener;
  }

  function resetPositions() {
    startTime = null;
    startPosition = null;
    elevating = false;
  }

  function updateEndPosition() {
    if (targetElement) {
      endPosition = getVerticalOffset(targetElement);
    }
  }

  function animationFinished() {

    resetPositions();

    // Stop music!
    if (mainAudio) {
      mainAudio.pause();
      mainAudio.currentTime = 0;
    }

    if (endAudio) {
      endAudio.play();
    }

    if (endCallback) {
      endCallback();
    }
  }

  function onWindowBlur() {

    // If animating, go straight to the top. And play no more music.
    if (elevating) {

      cancelAnimationFrame(animation);
      resetPositions();

      if (mainAudio) {
        mainAudio.pause();
        mainAudio.currentTime = 0;
      }

      updateEndPosition();
      window.scrollTo(0, endPosition);
    }
  }

  function bindElevateToElement(element) {
    if (element.addEventListener) {
      element.addEventListener('click', that.elevate, false);
    } else {
      // Older browsers
      element.attachEvent('onclick', function () {
        updateEndPosition();
        document.documentElement.scrollTop = endPosition;
        document.body.scrollTop = endPosition;
        window.scroll(0, endPosition);
      });
    }
  }

  function init(_options) {
    // Bind to element click event, if need be.
    body = document.body;

    var defaults = {
      duration: undefined,
      mainAudio: false,
      endAudio: false,
      preloadAudio: true,
      loopAudio: true,
      startCallback: null,
      endCallback: null
    };

    _options = extendParameters(_options, defaults);

    if (_options.element) {
      bindElevateToElement(_options.element);
    }

    // Take the stairs instead
    if (!browserMeetsRequirements()) {
      return;
    }

    if (_options.duration) {
      customDuration = true;
      duration = _options.duration;
    }

    if (_options.targetElement) {
      targetElement = _options.targetElement;
    }

    if (_options.verticalPadding) {
      verticalPadding = _options.verticalPadding;
    }

    window.addEventListener('blur', onWindowBlur, false);

    if (_options.mainAudio) {
      mainAudio = new Audio(_options.mainAudio);
      mainAudio.setAttribute('preload', _options.preloadAudio);
      mainAudio.setAttribute('loop', _options.loopAudio);
    }

    if (_options.endAudio) {
      endAudio = new Audio(_options.endAudio);
      endAudio.setAttribute('preload', 'true');
    }

    if (_options.endCallback) {
      endCallback = _options.endCallback;
    }

    if (_options.startCallback) {
      startCallback = _options.startCallback;
    }
  }

  init(options);
};
;
var template_multiple_rates = '{{#rates}} {{#fy1}} <label for="perdiem-fiscal-year-1">Destination County</label> <select id="perdiem-fiscal-year-1" class="usa-select"> <option value="">Select a Destination</option> {{#rates}} <option>{{county}} including {{city}}</option> {{/rates}} </select> {{/fy1}} {{#fy2}}{{#multiple}} <br> <label for="perdiem-fiscal-year-2">Fiscal Year {{year}}, Destination County</label> <select id="perdiem-fiscal-year-2" class="usa-select"> <option value="">Select a Destination</option> {{#rates}} <option>{{county}} including {{city}}</option> {{/rates}} </select> {{/multiple}}{{/fy2}}  {{/rates}}';

var template_calculator_results = '{{#perDiemSearch}} {{#query}} <h2>Your search for <span>{{#city}} {{city}}{{#stateFormatted}},{{/stateFormatted}}{{/city}}{{#stateFormatted}} {{stateFormatted}}{{/stateFormatted}}{{#zip}} {{zip}}{{/zip}}</span> <span class="text-light">({{rates.fy1.rate.county}} including {{rates.fy1.rate.city}}{{#rates.fy2.rate.county}}{{^sameRate}} and {{rates.fy2.rate.county}} including {{rates.fy2.rate.county}}{{/sameRate}}{{/rates.fy2.rate.county}})</span>{{/query}}</h2> {{#results}} \
<div class="usa-alert usa-alert--info usa-alert--no-icon margin-bottom-2"><div class="usa-alert__body">\
    <p class="usa-alert__text"> \
        <span class="text-bold perdiem_total font-sans-lg">Estimated per diem total: ${{total}}</span> \
        <span class="text-regular text-no-wrap">(Max lodging total + M&IE total)</span> \
    </p> \
</div></div> \
 <div class="grid-row grid-gap-6"> \
    <div class="desktop:grid-col-6"> \
    <h3>Lodging breakdown: {{#results}} {{#startDate}} {{startDate}} - {{/startDate}}  {{#endDate}} {{endDate}}  {{/endDate}} {{/results}}</h3> \
        <table class="perdiem_results lodging_table"> \
            <thead> <th>Date</th> <th>Daily Rate</th> <th># of Nights</th> <th>Total</th> </thead> \
            <tbody> \
            {{#breakdown}} <tr> \
                <td>{{date}}{{#isRate}}{{/isRate}}</td> \
                <td>{{#lodging}}${{lodging}}{{/lodging}}</td> \
                <td>{{nightCount}} </td> \
                <td>${{monthTotal}} </td>\
                </tr>\
            {{/breakdown}} \
            </tbody>\
        </table> \
        <p class="font-sans-lg">Max lodging total: <strong>${{lodgingTotal}}</strong></p>\
    </div> \
    <div class="desktop:grid-col-6 desktop:border-left-1px"> \
    <h3>Meals & incidental expenses breakdown: {{#results}} {{#startDate}} {{startDate}} - {{/startDate}}  {{#endDate}} {{endDate}}  {{/endDate}} {{/results}}</h3> \
    <table class="perdiem_results mie_table"> \
            <thead><tr><th>Days, Month</th><th>Daily Rate</th><th># of Days</th><th>Total</th></tr><thead> \
            <tbody> \
                 {{#rateInfo}} \
                    <tr> \
                        <td>{{fullDate}}</td> \
                        <td>${{mie}}</td> \
                        <td>{{numberOfDays}}</td> \
                        <td>${{mieRowTotal}}</td> \
                    </tr> \
                {{/rateInfo}} \
                </tbody> \
        </table> \
        <p>*The first and last calendar dates of M&IE are calculated at 75%.</p>\
        <p class="font-sans-lg">M&IE total: <strong>${{mieTotal}}</strong></p>\
    </div> \
    </div>{{/results}} {{/perDiemSearch}}';

var template_calculator_results_print = '{{#perDiemSearch}} {{#query}} <h2>Your search for <span>{{#city}} {{city}}{{#stateFormatted}},{{/stateFormatted}}{{/city}}{{#stateFormatted}} {{stateFormatted}}{{/stateFormatted}}{{#zip}} {{zip}}{{/zip}}</span> <span class="text-light">({{rates.fy1.rate.county}} including {{rates.fy1.rate.city}}{{#rates.fy2.rate.county}}{{^sameRate}} and {{rates.fy2.rate.county}} including {{rates.fy2.rate.county}}{{/sameRate}}{{/rates.fy2.rate.county}})</span>{{/query}}</h2> {{#results}} \
<div class="usa-alert usa-alert--info usa-alert--no-icon margin-bottom-2"><div class="usa-alert__body">\
    <p class="usa-alert__text"> \
        <span class="text-bold perdiem_total font-sans-lg">Estimated per diem total: ${{total}}</span> \
        <span class="text-regular text-no-wrap">(Max lodging total + M&IE total)</span> \
    </p> \
</div></div> \
 <div class="grid-row grid-gap-6"> \
    <div class="desktop:grid-col-6"> \
    <h3>Lodging breakdown: {{#results}} {{#startDate}} {{startDate}} - {{/startDate}}  {{#endDate}} {{endDate}}  {{/endDate}} {{/results}}</h3> \
        <table class="perdiem_results lodging_table"> \
            <thead> <th>Date</th> <th>Daily Rate</th> <th># of Nights</th> <th>Total</th> </thead> \
            <tbody> \
            {{#breakdown}} <tr> \
                <td>{{date}}{{#isRate}}{{/isRate}}</td> \
                <td>{{#lodging}}${{lodging}}{{/lodging}}</td> \
                <td>{{nightCount}} </td> \
                <td>${{monthTotal}} </td>\
                </tr>\
            {{/breakdown}} \
            </tbody>\
        </table> \
        <p class="font-sans-lg">Max lodging total: <strong>${{lodgingTotal}}</strong></p>\
    </div> \
    <div class="desktop:grid-col-6 desktop:border-left-1px"> \
    <h3>Meals & incidental expenses breakdown: {{#results}} {{#startDate}} {{startDate}} - {{/startDate}}  {{#endDate}} {{endDate}}  {{/endDate}} {{/results}}</h3> \
    <table class="perdiem_results mie_table"> \
            <thead><tr><th>Days, Month</th><th>Daily Rate</th><th># of Days</th><th>Total</th></tr><thead> \
            <tbody> \
                 {{#rateInfo}} \
                    <tr> \
                        <td>{{fullDate}}</td> \
                        <td>${{mie}}</td> \
                        <td>{{numberOfDays}}</td> \
                        <td>${{mieRowTotal}}</td> \
                    </tr> \
                {{/rateInfo}} \
                </tbody> \
        </table> \
        <p>*The first and last calendar dates of M&IE are calculated at 75%.</p>\
        <p class="font-sans-lg">M&IE total: <strong>${{mieTotal}}</strong></p>\
    </div> \
    </div>{{/results}} {{/perDiemSearch}}';
;
