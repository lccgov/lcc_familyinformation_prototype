//https://github.com/alphagov/govuk_frontend_toolkit/blob/master/javascripts/govuk/modules.js
$(document).ready(function(){LCC.modules.start()}),function(e){"use strict";var t=e.jQuery,i=e.LCC||{};i.Modules=i.Modules||{},i.modules={find:function(e){var i,a="[data-module]",e=e||t("body");
// Container could be a module too 
return i=e.find(a),e.is(a)&&(i=i.add(e)),i},start:function(e){
// eg selectable-table to SelectableTable 
function a(e){return s(n(e))}
// http://stackoverflow.com/questions/6660977/convert-hyphens-to-camel-case-camelcase 
function n(e){return e.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})}
// http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript 
function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}for(var r=this.find(e),o=0,l=r.length;o<l;o++){var u,d=t(r[o]),c=a(d.data("module")),h=d.data("module-started");"function"!=typeof i.Modules[c]||h||(u=new i.Modules[c],u.start(d),d.data("module-started",!0))}}},e.LCC=i}(window),function(e,t){"use strict";var i=e.LCC||{};i.Cookie=i.Cookie||{},t(document).ready(function(){i.Cookie.addCookieMessage()}),i.Cookie.addCookieMessage=function(){var e=document.getElementById("global-cookie-message");e&&(t(e).on("click",".js-seen-cookie-message",function(e){i.Cookie.cookieCommand("seen_cookie_message","yes",{days:28})}),null===i.Cookie.cookieCommand("seen_cookie_message")&&(e.style.display="block"))},/*
    Cookie methods
    ==============

    Usage:

      Setting a cookie:
      LCC.Cookie.cookieCommand('hobnob', 'tasty', { days: 30 });

      Reading a cookie:
      LCC.Cookie.cookieCommand('hobnob');

      Deleting a cookie:
      LCC.Cookie.cookieCommand('hobnob', null);
  */
i.Cookie.cookieCommand=function(e,t,a){return"undefined"!=typeof t?t===!1||null===t?i.Cookie.setCookie(e,"",{days:-1}):i.Cookie.setCookie(e,t,a):i.Cookie.getCookie(e)},i.Cookie.setCookie=function(e,t,i){"undefined"==typeof i&&(i={});var a=e+"="+t+"; path=/";if(i.days){var n=new Date;n.setTime(n.getTime()+24*i.days*60*60*1e3),a=a+"; expires="+n.toGMTString()}"https:"==document.location.protocol&&(a+="; Secure"),document.cookie=a},i.Cookie.getCookie=function(e){for(var t=e+"=",i=document.cookie.split(";"),a=0,n=i.length;a<n;a++){for(var s=i[a];" "==s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(t))return decodeURIComponent(s.substring(t.length))}return null},e.LCC=i}(window,jQuery),function(e,t){"use strict";var i=e.LCC||{};i.MainMenu=i.MainMenu||{},t(document).ready(function(){i.MainMenu.addActiveItemEvent()}),i.MainMenu.addActiveItemEvent=function(){t("a.main-menu").click(function(){t("#main-menu").toggleClass("active"),t(this).toggleClass("active"),t("#main-menu ul.root li:nth-child(1) a").addClass("firstItem"),t("#main-menu ul.root li ul li a").removeClass("firstItem"),t("#main-menu ul.root li a.firstItem").focus()})},e.LCC=i}(window,jQuery),function(e,t){"use strict";var i=e.LCC||{};i.GlobalSearch=i.GlobalSearch||{},t(document).ready(function(){i.GlobalSearch.addClickEvent()}),i.GlobalSearch.addClickEvent=function(){t("a.search").click(function(){t("#nav-search").toggleClass("active"),t(this).toggleClass("active"),t("#nav-search input").focus()})},e.LCC=i}(window,jQuery),function(e,t){"use strict";var i=e.LCC||{};i.EqualHeights=i.EqualHeights||{},t(e).on("load",function(){i.EqualHeights.applyEqualHeights()}),t(e).on("resize",function(){i.EqualHeights.applyEqualHeights()}),i.EqualHeights.applyEqualHeights=function(){var e,i=0,a=0,n=new Array,s=0;t(".equal-item").each(function(){if(e=t(this),t(e).height("auto"),s=e.position().top,a!=s){for(var r=0;r<n.length;r++)n[r].height(i);n.length=0,// empty the array
a=s,i=e.height(),n.push(e)}else n.push(e),i=i<e.height()?e.height():i;for(var r=0;r<n.length;r++)n[r].height(i)})},e.LCC=i}(window,jQuery),/*! jQuery UI - v1.10.2 - 2013-03-19
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.slider.js
 * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
function(e,t){
// selectors
function i(t,i){var n,s,r,o=t.nodeName.toLowerCase();
// the element and all of its ancestors must be visible
return"area"===o?(n=t.parentNode,s=n.name,!(!t.href||!s||"map"!==n.nodeName.toLowerCase())&&(r=e("img[usemap=#"+s+"]")[0],!!r&&a(r))):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&a(t)}function a(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var n=0,s=/^ui-id-\d+$/;
// $.ui might exist from components with no dependencies, e.g., $.ui.position
e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),
// plugins
e.fn.extend({focus:function(t){return function(i,a){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),a&&a.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var a,n,s=e(this[0]);s.length&&s[0]!==document;){if(
// Ignore z-index if position is set to a value where z-index is ignored by the browser
// This makes behavior of this function consistent across browsers
// WebKit always returns auto if the element is positioned
a=s.css("position"),("absolute"===a||"relative"===a||"fixed"===a)&&(
// IE returns 0 when zIndex is not specified
// other browsers return a string
// we ignore the case of nested elements with an explicit value of 0
// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
n=parseInt(s.css("zIndex"),10),!isNaN(n)&&0!==n))return n;s=s.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){s.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):
// support: jQuery <1.8
function(t,i,a){return!!e.data(t,a[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var a=e.attr(t,"tabindex"),n=isNaN(a);return(n||a>=0)&&i(t,!n)}}),
// support: jQuery <1.8
e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,a){function n(t,i,a,n){return e.each(s,function(){i-=parseFloat(e.css(t,"padding"+this))||0,a&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),n&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var s="Width"===a?["Left","Right"]:["Top","Bottom"],r=a.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+a]=function(i){return i===t?o["inner"+a].call(this):this.each(function(){e(this).css(r,n(this,i)+"px")})},e.fn["outer"+a]=function(t,i){return"number"!=typeof t?o["outer"+a].call(this,t):this.each(function(){e(this).css(r,n(this,t,!0,i)+"px")})}}),
// support: jQuery <1.8
e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),
// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),
// deprecated
e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{
// $.ui.plugin is deprecated.  Use the proxy pattern instead.
plugin:{add:function(t,i,a){var n,s=e.ui[t].prototype;for(n in a)s.plugins[n]=s.plugins[n]||[],s.plugins[n].push([i,a[n]])},call:function(e,t,i){var a,n=e.plugins[t];if(n&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(a=0;a<n.length;a++)e.options[n[a][0]]&&n[a][1].apply(e.element,i)}},
// only used by resizable
hasScroll:function(t,i){
//If overflow is hidden, the element might have extra content, but the user wants to hide it
if("hidden"===e(t).css("overflow"))return!1;var a=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;
// TODO: determine which cases actually cause this to happen
// if the element doesn't have the scroll set, see if it's possible to
// set the scroll
return t[a]>0||(t[a]=1,n=t[a]>0,t[a]=0,n)}})}(jQuery),function(e,t){var i=0,a=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,a=0;null!=(i=t[a]);a++)try{e(i).triggerHandler("remove")}catch(e){}n(t)},e.widget=function(t,i,a){var n,s,r,o,
// proxiedPrototype allows the provided prototype to remain unmodified
// so that it can be used as a mixin for multiple widgets (#8876)
l={},u=t.split(".")[0];t=t.split(".")[1],n=u+"-"+t,a||(a=i,i=e.Widget),
// create selector for plugin
e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[u]=e[u]||{},s=e[u][t],r=e[u][t]=function(e,t){
// allow instantiation without "new" keyword
// allow instantiation without "new" keyword
// allow instantiation without initializing for simple inheritance
// must use "new" keyword (the code above always passes args)
return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new r(e,t)},
// extend with the existing constructor to carry over any static properties
e.extend(r,s,{version:a.version,
// copy the object used to create the prototype in case we need to
// redefine the widget later
_proto:e.extend({},a),
// track widgets that inherit from this widget in case this widget is
// redefined after a widget inherits from it
_childConstructors:[]}),o=new i,
// we need to make the options hash a property directly on the new instance
// otherwise we'll modify the options hash on the prototype that we're
// inheriting from
o.options=e.widget.extend({},o.options),e.each(a,function(t,a){return e.isFunction(a)?void(l[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,s=this._superApply;return this._super=e,this._superApply=n,t=a.apply(this,arguments),this._super=i,this._superApply=s,t}}()):void(l[t]=a)}),r.prototype=e.widget.extend(o,{
// TODO: remove support for widgetEventPrefix
// always use the name + a colon as the prefix, e.g., draggable:start
// don't prefix for widgets that aren't DOM-based
widgetEventPrefix:s?o.widgetEventPrefix:t},l,{constructor:r,namespace:u,widgetName:t,widgetFullName:n}),
// If this widget is being redefined then we need to find all widgets that
// are inheriting from it and redefine all of them so that they inherit from
// the new version of this widget. We're essentially trying to replace one
// level in the prototype chain.
s?(e.each(s._childConstructors,function(t,i){var a=i.prototype;
// redefine the child widget using the same prototype that was
// originally used, but inherit from the new version of the base
e.widget(a.namespace+"."+a.widgetName,r,i._proto)}),
// remove the list of existing child constructors from the old constructor
// so the old child constructors can be garbage collected
delete s._childConstructors):i._childConstructors.push(r),e.widget.bridge(t,r)},e.widget.extend=function(i){for(var n,s,r=a.call(arguments,1),o=0,l=r.length;o<l;o++)for(n in r[o])s=r[o][n],r[o].hasOwnProperty(n)&&s!==t&&(
// Clone objects
e.isPlainObject(s)?i[n]=e.isPlainObject(i[n])?e.widget.extend({},i[n],s):
// Don't extend strings, arrays, etc. with objects
e.widget.extend({},s):i[n]=s);return i},e.widget.bridge=function(i,n){var s=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,l=a.call(arguments,1),u=this;
// allow multiple hashes to be passed on init
return r=!o&&l.length?e.widget.extend.apply(null,[r].concat(l)):r,o?this.each(function(){var a,n=e.data(this,s);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(a=n[r].apply(n,l),a!==n&&a!==t?(u=a&&a.jquery?u.pushStack(a.get()):a,!1):void 0):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,s);t?t.option(r||{})._init():e.data(this,s,new n(r,this))}),u}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,
// callbacks
create:null},_createWidget:function(t,a){a=e(a||this.defaultElement||this)[0],this.element=e(a),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),a!==this&&(e.data(a,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===a&&this.destroy()}}),this.document=e(a.style?
// element within the document
a.ownerDocument:
// element is window or document
a.document||a),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),
// we can probably remove the unbind calls in 2.0
// all event bindings should go through this._on()
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),
// clean up events and states
this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,a){var n,s,r,o=i;if(0===arguments.length)
// don't return a reference to the internal hash
return e.widget.extend({},this.options);if("string"==typeof i)if(
// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
o={},n=i.split("."),i=n.shift(),n.length){for(s=o[i]=e.widget.extend({},this.options[i]),r=0;r<n.length-1;r++)s[n[r]]=s[n[r]]||{},s=s[n[r]];if(i=n.pop(),a===t)return s[i]===t?null:s[i];s[i]=a}else{if(a===t)return this.options[i]===t?null:this.options[i];o[i]=a}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,i,a){var n,s=this;
// no suppressDisabledCheck flag, shuffle arguments
"boolean"!=typeof t&&(a=i,i=t,t=!1),
// no element argument, shuffle and use this.element
a?(
// accept selectors, DOM elements
i=n=e(i),this.bindings=this.bindings.add(i)):(a=i,i=this.element,n=this.widget()),e.each(a,function(a,r){function o(){
// allow widgets to customize the disabled handling
// - disabled as an array instead of boolean
// - disabled class as method for disabling individual parts
if(t||s.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled"))return("string"==typeof r?s[r]:r).apply(s,arguments)}
// copy the guid so direct unbinding works
"string"!=typeof r&&(o.guid=r.guid=r.guid||o.guid||e.guid++);var l=a.match(/^(\w+)\s*(.*)$/),u=l[1]+s.eventNamespace,d=l[2];d?n.delegate(d,u,o):i.bind(u,o)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?a[e]:e).apply(a,arguments)}var a=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,a){var n,s,r=this.options[t];if(a=a||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),
// the original event may come from any element
// so we need to reset the target on the new event
i.target=this.element[0],
// copy original event properties over to the new event
s=i.originalEvent)for(n in s)n in i||(i[n]=s[n]);return this.element.trigger(i,a),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(a))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(a,n,s){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=s,n.delay&&a.delay(n.delay),r&&e.effects&&e.effects.effect[o]?a[t](n):o!==t&&a[o]?a[o](n.duration,n.easing,s):a.queue(function(i){e(this)[t](),s&&s.call(a[0]),i()})}})}(jQuery),function(e,t){var i=!1;e(document).mouseup(function(){i=!1}),e.widget("ui.mouse",{version:"1.10.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){if(!0===e.data(i.target,t.widgetName+".preventClickEvent"))return e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1}),this.started=!1},
// TODO: make sure destroying one instance of mouse doesn't mess with
// other instances of mouse
_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){
// don't let more than one widget handle mouseStart
if(!i){
// we may have missed mouseup (out of window)
this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var a=this,n=1===t.which,
// event.target.nodeName works around a bug in IE 8 with
// disabled inputs (#7620)
s=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&e(t.target).closest(this.options.cancel).length;
// Click event may never have fired (Gecko & Opera)
// these delegates are required to keep context
return!(n&&!s&&this._mouseCapture(t))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){a.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return a._mouseMove(e)},this._mouseUpDelegate=function(e){return a._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),i=!0,!0))}},_mouseMove:function(t){
// IE mouseup check - mouseup happened when mouse was out of window
// IE mouseup check - mouseup happened when mouse was out of window
return e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},
// These are placeholder methods, to be overriden by extending plugin
_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(e,t){
// number of pages in a slider
// (how many times can you page up/down to go through the whole range)
var i=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,
// callbacks
change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,a=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",r=[];for(i=a.values&&a.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;t<i;t++)r.push(s);this.handles=n.add(e(r.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):this.range=e([])},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");this._off(e),this._on(e,this._handleEvents),this._hoverable(e),this._focusable(e)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,a,n,s,r,o,l,u,d=this,c=this.options;return!c.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},a=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(a-d.values(t));(n>i||n===i&&(t===d._lastChangedValue||d.values(t)===c.min))&&(n=i,s=e(this),r=t)}),o=this._start(t,r),o!==!1&&(this._mouseSliding=!0,this._handleIndex=r,s.addClass("ui-state-active").focus(),l=s.offset(),u=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=u?{left:0,top:0}:{left:t.pageX-l.left-s.width()/2,top:t.pageY-l.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,r,a),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,a,n,s;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),a=i/t,a>1&&(a=1),a<0&&(a=0),"vertical"===this.orientation&&(a=1-a),n=this._valueMax()-this._valueMin(),s=this._valueMin()+a*n,this._trimAlignValue(s)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var a,n,s;this.options.values&&this.options.values.length?(a=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>a||1===t&&i<a)&&(i=a),i!==this.values(t)&&(n=this.values(),n[t]=i,
// A slide can be canceled by returning false from the slide callback
s=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),a=this.values(t?0:1),s!==!1&&this.values(t,i,!0))):i!==this.value()&&(
// A slide can be canceled by returning false from the slide callback
s=this._trigger("slide",e,{handle:this.handles[t],value:i}),s!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),
//store the last changed value index for reference when handles overlap
this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),void this._change(null,0)):this._value()},values:function(t,i){var a,n,s;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),void this._change(null,t);if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(a=this.options.values,n=arguments[0],s=0;s<a.length;s+=1)a[s]=this._trimAlignValue(n[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,i){var a,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),a=0;a<n;a+=1)this._change(null,a);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},
//internal value getter
// _value() returns value trimmed by min and max, aligned by step
_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},
//internal values getter
// _values() returns array of values trimmed by min and max, aligned by step
// _values( index ) returns single value trimmed by min and max, aligned by step
_values:function(e){var t,i,a;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(
// .slice() creates a copy of the array
// this copy gets trimmed by min and max and then returned
i=this.options.values.slice(),a=0;a<i.length;a+=1)i[a]=this._trimAlignValue(i[a]);return i}return[]},
// returns the step-aligned value that val is closest to, between (inclusive) min and max
_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,a=e-i;
// Since JavaScript has problems with large floats, round
// the final value to 5 digits after the decimal point (see #4124)
return 2*Math.abs(i)>=t&&(a+=i>0?t:-t),parseFloat(a.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,i,a,n,s,r=this.options.range,o=this.options,l=this,u=!this._animateOff&&o.animate,d={};this.options.values&&this.options.values.length?this.handles.each(function(a){i=(l.values(a)-l._valueMin())/(l._valueMax()-l._valueMin())*100,d["horizontal"===l.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[u?"animate":"css"](d,o.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===a&&l.range.stop(1,1)[u?"animate":"css"]({left:i+"%"},o.animate),1===a&&l.range[u?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:o.animate})):(0===a&&l.range.stop(1,1)[u?"animate":"css"]({bottom:i+"%"},o.animate),1===a&&l.range[u?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:o.animate}))),t=i}):(a=this.value(),n=this._valueMin(),s=this._valueMax(),i=s!==n?(a-n)/(s-n)*100:0,d["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[u?"animate":"css"](d,o.animate),"min"===r&&"horizontal"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({width:i+"%"},o.animate),"max"===r&&"horizontal"===this.orientation&&this.range[u?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:o.animate}),"min"===r&&"vertical"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({height:i+"%"},o.animate),"max"===r&&"vertical"===this.orientation&&this.range[u?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:o.animate}))},_handleEvents:{keydown:function(t){/*jshint maxcomplexity:25*/
var a,n,s,r,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),a=this._start(t,o),a===!1))return}switch(r=this.options.step,n=s=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/i);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/i);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(n===this._valueMax())return;s=this._trimAlignValue(n+r);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(n===this._valueMin())return;s=this._trimAlignValue(n-r)}this._slide(t,o,s)},click:function(e){e.preventDefault()},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}})}(jQuery);/**
 *    The Nomensa accessible media player is a flexible multimedia solution for websites and intranets.
 *    The core player consists of JavaScript wrapper responsible for generating an accessible HTML toolbar
 *    for interacting with a media player of your choice. We currently provide support for YouTube (default),
 *    Vimeo and JWPlayer although it should be possible to integrate the player with almost any media player on
 *    the web (provided a JavaScript api for the player in question is available).
 *
 *    Copyright (C) 2013  Nomensa Ltd
 *
 *    Version 2.1.2
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 **/
var swfobject=function(){function e(){if(!R){try{var e=L.getElementsByTagName("body")[0].appendChild(m("span"));e.parentNode.removeChild(e)}catch(e){return}R=!0;for(var t=B.length,i=0;i<t;i++)B[i]()}}function t(e){R?e():B[B.length]=e}function i(e){if(typeof F.addEventListener!=x)F.addEventListener("load",e,!1);else if(typeof L.addEventListener!=x)L.addEventListener("load",e,!1);else if(typeof F.attachEvent!=x)v(F,"onload",e);else if("function"==typeof F.onload){var t=F.onload;F.onload=function(){t(),e()}}else F.onload=e}function a(){j?n():s()}function n(){var e=L.getElementsByTagName("body")[0],t=m(I);t.setAttribute("type",E);var i=e.appendChild(t);if(i){var a=0;!function(){if(typeof i.GetVariable!=x){var n=i.GetVariable("$version");n&&(n=n.split(" ")[1].split(","),K.pv=[parseInt(n[0],10),parseInt(n[1],10),parseInt(n[2],10)])}else if(a<10)return a++,void setTimeout(arguments.callee,10);e.removeChild(t),i=null,s()}()}else s()}function s(){var e=V.length;if(e>0)for(var t=0;t<e;t++){var i=V[t].id,a=V[t].callbackFn,n={success:!1,id:i};if(K.pv[0]>0){var s=g(i);if(s)if(!y(V[t].swfVersion)||K.wk&&K.wk<312)if(V[t].expressInstall&&o()){var d={};d.data=V[t].expressInstall,d.width=s.getAttribute("width")||"0",d.height=s.getAttribute("height")||"0",s.getAttribute("class")&&(d.styleclass=s.getAttribute("class")),s.getAttribute("align")&&(d.align=s.getAttribute("align"));for(var c={},h=s.getElementsByTagName("param"),p=h.length,f=0;f<p;f++)"movie"!=h[f].getAttribute("name").toLowerCase()&&(c[h[f].getAttribute("name")]=h[f].getAttribute("value"));l(d,c,i,a)}else u(s),a&&a(n);else w(i,!0),a&&(n.success=!0,n.ref=r(i),a(n))}else if(w(i,!0),a){var m=r(i);m&&typeof m.SetVariable!=x&&(n.success=!0,n.ref=m),a(n)}}}function r(e){var t=null,i=g(e);if(i&&"OBJECT"==i.nodeName)if(typeof i.SetVariable!=x)t=i;else{var a=i.getElementsByTagName(I)[0];a&&(t=a)}return t}function o(){return!W&&y("6.0.65")&&(K.win||K.mac)&&!(K.wk&&K.wk<312)}function l(e,t,i,a){W=!0,D=a||null,M={success:!1,id:i};var n=g(i);if(n){"OBJECT"==n.nodeName?(C=d(n),b=null):(C=n,b=i),e.id=O,(typeof e.width==x||!/%$/.test(e.width)&&parseInt(e.width,10)<310)&&(e.width="310"),(typeof e.height==x||!/%$/.test(e.height)&&parseInt(e.height,10)<137)&&(e.height="137"),L.title=L.title.slice(0,47)+" - Flash Player Installation";var s=K.ie&&K.win?"ActiveX":"PlugIn",r="MMredirectURL="+F.location.toString().replace(/&/g,"%26")+"&MMplayerType="+s+"&MMdoctitle="+L.title;if(typeof t.flashvars!=x?t.flashvars+="&"+r:t.flashvars=r,K.ie&&K.win&&4!=n.readyState){var o=m("div");i+="SWFObjectNew",o.setAttribute("id",i),n.parentNode.insertBefore(o,n),n.style.display="none",function(){4==n.readyState?n.parentNode.removeChild(n):setTimeout(arguments.callee,10)}()}c(e,t,i)}}function u(e){if(K.ie&&K.win&&4!=e.readyState){var t=m("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(d(e),t),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(d(e),e)}function d(e){var t=m("div");if(K.win&&K.ie)t.innerHTML=e.innerHTML;else{var i=e.getElementsByTagName(I)[0];if(i){var a=i.childNodes;if(a)for(var n=a.length,s=0;s<n;s++)1==a[s].nodeType&&"PARAM"==a[s].nodeName||8==a[s].nodeType||t.appendChild(a[s].cloneNode(!0))}}return t}function c(e,t,i){var a,n=g(i);if(K.wk&&K.wk<312)return a;if(n)if(typeof e.id==x&&(e.id=i),K.ie&&K.win){var s="";for(var r in e)e[r]!=Object.prototype[r]&&("data"==r.toLowerCase()?t.movie=e[r]:"styleclass"==r.toLowerCase()?s+=' class="'+e[r]+'"':"classid"!=r.toLowerCase()&&(s+=" "+r+'="'+e[r]+'"'));var o="";for(var l in t)t[l]!=Object.prototype[l]&&(o+='<param name="'+l+'" value="'+t[l]+'" />');n.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+s+">"+o+"</object>",$[$.length]=e.id,a=g(e.id)}else{var u=m(I);u.setAttribute("type",E);for(var d in e)e[d]!=Object.prototype[d]&&("styleclass"==d.toLowerCase()?u.setAttribute("class",e[d]):"classid"!=d.toLowerCase()&&u.setAttribute(d,e[d]));for(var c in t)t[c]!=Object.prototype[c]&&"movie"!=c.toLowerCase()&&h(u,c,t[c]);n.parentNode.replaceChild(u,n),a=u}return a}function h(e,t,i){var a=m("param");a.setAttribute("name",t),a.setAttribute("value",i),e.appendChild(a)}function p(e){var t=g(e);t&&"OBJECT"==t.nodeName&&(K.ie&&K.win?(t.style.display="none",function(){4==t.readyState?f(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function f(e){var t=g(e);if(t){for(var i in t)"function"==typeof t[i]&&(t[i]=null);t.parentNode.removeChild(t)}}function g(e){var t=null;try{t=L.getElementById(e)}catch(e){}return t}function m(e){return L.createElement(e)}function v(e,t,i){e.attachEvent(t,i),H[H.length]=[e,t,i]}function y(e){var t=K.pv,i=e.split(".");return i[0]=parseInt(i[0],10),i[1]=parseInt(i[1],10)||0,i[2]=parseInt(i[2],10)||0,t[0]>i[0]||t[0]==i[0]&&t[1]>i[1]||t[0]==i[0]&&t[1]==i[1]&&t[2]>=i[2]}function _(e,t,i,a){if(!K.ie||!K.mac){var n=L.getElementsByTagName("head")[0];if(n){var s=i&&"string"==typeof i?i:"screen";if(a&&(N=null,S=null),!N||S!=s){var r=m("style");r.setAttribute("type","text/css"),r.setAttribute("media",s),N=n.appendChild(r),K.ie&&K.win&&typeof L.styleSheets!=x&&L.styleSheets.length>0&&(N=L.styleSheets[L.styleSheets.length-1]),S=s}K.ie&&K.win?N&&typeof N.addRule==I&&N.addRule(e,t):N&&typeof L.createTextNode!=x&&N.appendChild(L.createTextNode(e+" {"+t+"}"))}}}function w(e,t){if(U){var i=t?"visible":"hidden";R&&g(e)?g(e).style.visibility=i:_("#"+e,"visibility:"+i)}}function k(e){var t=/[\\\"<>\.;]/,i=null!=t.exec(e);return i&&typeof encodeURIComponent!=x?encodeURIComponent(e):e}var C,b,D,M,N,S,x="undefined",I="object",T="Shockwave Flash",A="ShockwaveFlash.ShockwaveFlash",E="application/x-shockwave-flash",O="SWFObjectExprInst",P="onreadystatechange",F=window,L=document,Y=navigator,j=!1,B=[a],V=[],$=[],H=[],R=!1,W=!1,U=!0,K=function(){var e=typeof L.getElementById!=x&&typeof L.getElementsByTagName!=x&&typeof L.createElement!=x,t=Y.userAgent.toLowerCase(),i=Y.platform.toLowerCase(),a=i?/win/.test(i):/win/.test(t),n=i?/mac/.test(i):/mac/.test(t),s=!!/webkit/.test(t)&&parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),r=!1,o=[0,0,0],l=null;if(typeof Y.plugins!=x&&typeof Y.plugins[T]==I)l=Y.plugins[T].description,!l||typeof Y.mimeTypes!=x&&Y.mimeTypes[E]&&!Y.mimeTypes[E].enabledPlugin||(j=!0,r=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),o[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),o[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),o[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof F.ActiveXObject!=x)try{var u=new ActiveXObject(A);u&&(l=u.GetVariable("$version"),l&&(r=!0,l=l.split(" ")[1].split(","),o=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(e){}return{w3:e,pv:o,wk:s,ie:r,win:a,mac:n}}();(function(){K.w3&&((typeof L.readyState!=x&&"complete"==L.readyState||typeof L.readyState==x&&(L.getElementsByTagName("body")[0]||L.body))&&e(),R||(typeof L.addEventListener!=x&&L.addEventListener("DOMContentLoaded",e,!1),K.ie&&K.win&&(L.attachEvent(P,function(){"complete"==L.readyState&&(L.detachEvent(P,arguments.callee),e())}),F==top&&!function(){if(!R){try{L.documentElement.doScroll("left")}catch(e){return void setTimeout(arguments.callee,0)}e()}}()),K.wk&&!function(){if(!R)return/loaded|complete/.test(L.readyState)?void e():void setTimeout(arguments.callee,0)}(),i(e)))})(),function(){K.ie&&K.win&&window.attachEvent("onunload",function(){for(var e=H.length,t=0;t<e;t++)H[t][0].detachEvent(H[t][1],H[t][2]);for(var i=$.length,a=0;a<i;a++)p($[a]);for(var n in K)K[n]=null;K=null;for(var s in swfobject)swfobject[s]=null;swfobject=null})}();return{registerObject:function(e,t,i,a){if(K.w3&&e&&t){var n={};n.id=e,n.swfVersion=t,n.expressInstall=i,n.callbackFn=a,V[V.length]=n,w(e,!1)}else a&&a({success:!1,id:e})},getObjectById:function(e){if(K.w3)return r(e)},embedSWF:function(e,i,a,n,s,r,u,d,h,p){var f={success:!1,id:i};K.w3&&!(K.wk&&K.wk<312)&&e&&i&&a&&n&&s?(w(i,!1),t(function(){a+="",n+="";var t={};if(h&&typeof h===I)for(var g in h)t[g]=h[g];t.data=e,t.width=a,t.height=n;var m={};if(d&&typeof d===I)for(var v in d)m[v]=d[v];if(u&&typeof u===I)for(var _ in u)typeof m.flashvars!=x?m.flashvars+="&"+_+"="+u[_]:m.flashvars=_+"="+u[_];if(y(s)){var k=c(t,m,i);t.id==i&&w(i,!0),f.success=!0,f.ref=k}else{if(r&&o())return t.data=r,void l(t,m,i,p);w(i,!0)}p&&p(f)})):p&&p(f)},switchOffAutoHideShow:function(){U=!1},ua:K,getFlashPlayerVersion:function(){return{major:K.pv[0],minor:K.pv[1],release:K.pv[2]}},hasFlashPlayerVersion:y,createSWF:function(e,t,i){return K.w3?c(e,t,i):void 0},showExpressInstall:function(e,t,i,a){K.w3&&o()&&l(e,t,i,a)},removeSWF:function(e){K.w3&&p(e)},createCSS:function(e,t,i,a){K.w3&&_(e,t,i,a)},addDomLoadEvent:t,addLoadEvent:i,getQueryParamValue:function(e){var t=L.location.search||L.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return k(t);for(var i=t.split("&"),a=0;a<i.length;a++)if(i[a].substring(0,i[a].indexOf("="))==e)return k(i[a].substring(i[a].indexOf("=")+1))}return""},expressInstallCallback:function(){if(W){var e=g(O);e&&C&&(e.parentNode.replaceChild(C,e),b&&(w(b,!0),K.ie&&K.win&&(C.style.display="block")),D&&D(M)),W=!1}}}}();!function(e){e.NOMENSA=e.NOMENSA||{};var t,i;e.NOMENSA.uaMatch=function(e){e=e.toLowerCase();var t=/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},t=e.NOMENSA.uaMatch(e.navigator.userAgent),i={},t.browser&&(i[t.browser]=!0,i.version=t.version),e.NOMENSA.browser=i}(window),window.NOMENSA=window.NOMENSA||{},window.NOMENSA.player=window.NOMENSA.player||{},window.NOMENSA.player.YoutubePlayer=function(e){this.config=e,this.config.playerVars={controls:0,showinfo:0,origin:window.location.protocol+"//"+window.location.hostname,rel:0}},window.NOMENSA.player.YoutubePlayer.apiLoaded=!1,window.NOMENSA.player.YoutubePlayer.prototype={getYTOptions:function(){var e=this,t={height:this.config.flashHeight,width:this.config.flashWidth,videoId:this.config.media,events:{onReady:function(t){e.$html.find("iframe").attr({id:e.config.id,role:"presentation"}),e.onPlayerReady(t)},onStateChange:function(t){e.onPlayerStateChange(t.data)}}};return t.playerVars=this.config.playerVars,this.config.repeat&&(t.playerVars.playlist=this.config.media),t},init:function(){return"undefined"!=typeof window.postMessage?function(e){var t=document.createElement("script"),i=document.getElementsByTagName("script")[0];this.$html=this.assembleHTML(),this.config.captions&&this.getCaptions(),e.html(this.$html),window.NOMENSA.player.PlayerDaemon.addPlayer(this),window.NOMENSA.player.YoutubePlayer.apiLoaded?this.player=YT.Player("player-"+player.config.id,getOptions(player)):"undefined"==typeof window.onYouTubeIframeAPIReady&&(window.onYouTubeIframeAPIReady=function(){window.NOMENSA.player.PlayerDaemon.map(function(e){"undefined"!=typeof e.getYTOptions&&(e.player=new YT.Player("player-"+e.config.id,e.getYTOptions()))}),window.NOMENSA.player.YoutubePlayer.apiLoaded=!0},t.src="//www.youtube.com/iframe_api",i.parentNode.insertBefore(t,i))}:function(e){var t=this;this.$html=this.assembleHTML(),this.config.captions&&this.getCaptions(),e.html(this.$html),window.NOMENSA.player.PlayerDaemon.addPlayer(this),window.NOMENSA.player.stateHandlers[this.config.id]=function(e){var i=window.NOMENSA.player.PlayerDaemon.getPlayer(t.config.id);i.onPlayerStateChange(e)},window.onYouTubePlayerReady=function(e){var i=window.NOMENSA.player.PlayerDaemon.getPlayer(e),a=document.getElementById(i.config.id);i.player=a,i.cue(),i.getPlayer().addEventListener("onStateChange","window.NOMENSA.player.stateHandlers."+t.config.id),i.onPlayerReady()}}}(),state:{ended:0,playing:1,paused:2,unstarted:-1},onPlayerReady:function(){var e,t=[];return function(i){var a=t.length;if("function"==typeof i)t.push(i);else{if(0===a)return!1;for(e=0;e<a;e++)t[e].apply(this,arguments)}}}(),onPlayerStateChange:function(e){1==e?(this.play(),this.config.buttons.toggle&&this.$html.find(".play").removeClass("play").addClass("pause").text("Pause")):this.config.repeat&&0==e&&this.play()},getFlashVars:function(){var e={controlbar:"none",file:this.config.media};return""!=this.config.image&&(e.image=this.config.image),this.config.repeat&&(e.repeat=this.config.repeat),e},getFlashParams:function(){return{allowScriptAccess:"always",wmode:"transparent"}},generateFlashPlayer:function(e){var t=this,i=this.getFlashVars(),a=this.getFlashParams(),n={id:this.config.id,name:this.config.id},s=$("<"+this.config.flashContainer+" />").attr("id","player-"+this.config.id).addClass("flashReplace").html('This content requires Macromedia Flash Player. You can <a href="http://get.adobe.com/flashplayer/">install or upgrade the Adobe Flash Player here</a>.'),r=$("<span />").addClass("video"),o=this.getURL();return setTimeout(function(){swfobject.embedSWF(o,s.attr("id"),t.config.flashWidth,t.config.flashHeight,"9.0.115",null,i,a,n,t.config.swfCallback),window.NOMENSA.browser.mozilla&&parseInt(window.NOMENSA.browser.version,10)>=2&&t.$html.find("object").attr("tabindex","-1")},0),e.append(r.append(s)),e},generateVideoPlayer:function(e){if("undefined"==typeof window.postMessage)return this.generateFlashPlayer(e);var t=$("<"+this.config.flashContainer+" />").attr("id","player-"+this.config.id),i=$("<span />").addClass("video");return e.append(i.append(t)),e},getPlayer:function(){return this.player},is_html5:!1,play:function(){this.player.playVideo(),this.setSliderTimeout(),this.config.captionsOn&&this.captions&&this.setCaptionTimeout()},pause:function(){this.player.pauseVideo(),this.clearSliderTimeout(),this.config.captionsOn&&this.captions&&this.clearCaptionTimeout()},ffwd:function(){var e=this.getCurrentTime()+this.config.playerSkip,t=this.getDuration();e>t&&(e=t),this.seek(e)},rewd:function(){var e=this.getCurrentTime()-this.config.playerSkip;e<0&&(e=0),this.seek(e)},mute:function(){var e=this.$html.find("button.mute");this.player.isMuted()?(this.player.unMute(),e.hasClass("muted")&&e.removeClass("muted")):(this.player.mute(),e.addClass("muted"))},volup:function(){var e=this.player.getVolume();e>=100?e=100:e+=this.config.volumeStep,this.player.setVolume(e),this.updateVolume(e)},voldwn:function(){var e=this.player.getVolume();e<=0?e=0:e-=this.config.volumeStep,this.player.setVolume(e),this.updateVolume(e)},getDuration:function(){return this.player.getDuration()},getCurrentTime:function(){return this.player.getCurrentTime()},getBytesLoaded:function(){return this.player.getVideoBytesLoaded()},getBytesTotal:function(){return this.player.getVideoBytesTotal()},seek:function(e){this.player.seekTo(e,!0),this.config.captionsOn&&this.captions&&(this.$html.find(".caption").remove(),this.clearCaptionTimeout(),this.setCaptionTimeout(),this.getPreviousCaption())},cue:function(){this.player.cueVideoById(this.config.media)},toggleCaptions:function(){var e=this,t=this.$html.find(".captions");t.hasClass("captions-off")?(t.removeClass("captions-off").addClass("captions-on"),e.getPreviousCaption(),e.setCaptionTimeout(),e.config.captionsOn=!0):(t.removeClass("captions-on").addClass("captions-off"),e.clearCaptionTimeout(),e.$html.find(".caption").remove(),e.config.captionsOn=!1)}},window.NOMENSA=window.NOMENSA||{},window.NOMENSA.player=window.NOMENSA.player||{},window.NOMENSA.player.MediaplayerDecorator=function(e){var t=e;this.config=t.config,this.player=t.player,this.state=t.state;for(var i in t)"function"==typeof t[i]&&(this[i]=function(e){return function(){return t[e].apply(this,arguments)}}(i))},window.NOMENSA.player.MediaplayerDecorator.prototype.generatePlayerContainer=function(){var e=$("<"+this.config.playerContainer+" />").css(this.config.playerStyles).addClass("player-container");return window.NOMENSA.browser.msie&&e.addClass("player-container-ie player-container-ie-"+window.NOMENSA.browser.version.substring(0,1)),e},window.NOMENSA.player.MediaplayerDecorator.prototype.assembleHTML=function(){var e=this.generatePlayerContainer(),t=this.generateVideoPlayer(e),i=t.append(this.getControls());return i},window.NOMENSA.player.MediaplayerDecorator.prototype.getURL=function(){return[this.config.url,this.config.id].join("")},window.NOMENSA.player.MediaplayerDecorator.prototype.createButton=function(e,t){var i=[e,this.config.id].join("-"),a=$("<button />").append(t).addClass(e).attr({title:e,id:i}).addClass("ui-corner-all ui-state-default").hover(function(){$(this).addClass("ui-state-hover")},function(){$(this).removeClass("ui-state-hover")}).focus(function(){$(this).addClass("ui-state-focus")}).blur(function(){$(this).removeClass("ui-state-focus")}).click(function(e){e.preventDefault()});return a},window.NOMENSA.player.MediaplayerDecorator.prototype.getFuncControls=function(){var e=this,t=$("<div>");t[0].className="player-controls";var i=[];if(e.config.buttons.toggle){var a=e.createButton("play","Play").attr({"aria-live":"assertive"}).click(function(){$(this).hasClass("play")?($(this).removeClass("play").addClass("pause").attr({title:"Pause",id:"pause-"+e.config.id}).text("Pause"),e.play()):($(this).removeClass("pause").addClass("play").attr({title:"Play",id:"play-"+e.config.id}).text("Play"),e.pause())});i.push(a)}else{var n=e.createButton("play","Play").click(function(){e.play()}),s=e.createButton("pause","Pause").click(function(){e.pause()});i.push(n),i.push(s)}if(e.config.buttons.rewind){var r=e.createButton("rewind","Rewind").click(function(){e.rewd()});i.push(r)}if(e.config.buttons.forward){var o=e.createButton("forward","Forward").click(function(){e.ffwd()});i.push(o)}if(e.config.captions){var l=e.createButton("captions","Captions").click(function(){e.toggleCaptions()}),u=1==e.config.captionsOn?"captions-on":"captions-off";l.addClass(u),i.push(l)}for(var d=0;d<i.length;d+=1)t[0].appendChild(i[d][0]);return t},window.NOMENSA.player.MediaplayerDecorator.prototype.getVolControls=function(){for(var e=this,t=$("<div>").addClass("volume-controls"),i=e.createButton("mute","Mute").click(function(){e.mute()}),a=e.createButton("vol-up",'+<span class="ui-helper-hidden-accessible"> Volume Up</span>').click(function(){e.volup()}),n=e.createButton("vol-down",'-<span class="ui-helper-hidden-accessible"> Volume Down</span>').click(function(){e.voldwn()}),s=$("<span />").attr({id:"vol-"+e.config.id,class:"vol-display"}).text("100%"),r=[i,n,a,s],o=0;o<r.length;o+=1)t[0].appendChild(r[o][0]);return t},window.NOMENSA.player.MediaplayerDecorator.prototype.getSliderBar=function(){for(var e=$("<span />").addClass("ui-helper-hidden-accessible").html("<p>The timeline slider below uses WAI ARIA. Please use the documentation for your screen reader to find out more.</p>"),t=$("<span />").addClass("current-time").attr({id:"current-"+this.config.id}).text("00:00:00"),i=this.getSlider(),a=$("<span />").addClass("duration-time").attr({id:"duration-"+this.config.id}).text("00:00:00"),n=$("<div />").addClass("timer-bar").append(e),s=[t,i,a],r=0;r<s.length;r+=1)n[0].appendChild(s[r][0]);return n},window.NOMENSA.player.MediaplayerDecorator.prototype.getSlider=function(){var e=this,t=$("<span />").attr("id","slider-"+this.config.id).slider({orientation:"horizontal",change:function(t,i){var a=i.value,n=a/100*e.getDuration();e.seek(n)}});t.find("a.ui-slider-handle").attr({role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"0","aria-valuetext":"0 percent",title:"Slider Control"});var i=$("<span />").addClass("progress-bar").attr({id:"progress-bar-"+this.config.id,tabindex:"-1"}).addClass("ui-progressbar-value ui-widget-header ui-corner-left").css({width:"0%",height:"95%"}),a=$("<span />").attr({id:"loaded-bar-"+this.config.id,tabindex:"-1"}).addClass("loaded-bar ui-progressbar-value ui-widget-header ui-corner-left").css({height:"95%",width:"0%"});return t.append(i,a)},window.NOMENSA.player.MediaplayerDecorator.prototype.setSliderTimeout=function(){var e=this;void 0==e.sliderInterval&&(e.sliderInterval=setInterval(function(){e.updateSlider()},e.config.sliderTimeout))},window.NOMENSA.player.MediaplayerDecorator.prototype.clearSliderTimeout=function(){var e=this;void 0!=e.sliderInterval&&(e.sliderInterval=clearInterval(e.sliderInterval))},window.NOMENSA.player.MediaplayerDecorator.prototype.updateSlider=function(){var e="undefined"!=typeof this.duration?this.duration:this.getDuration(),t="boolean"==typeof this.duration_found&&this.duration_found,i=this.getCurrentTime(),a=0;e>0?(a=i/e*100,a=parseInt(a,10)):e=0,t||($("#duration-"+this.config.id).html(this.formatTime(parseInt(e,10))),this.duration_found=!0),$("#slider-"+this.config.id).find("a.ui-slider-handle").attr({"aria-valuenow":a,"aria-valuetext":a.toString()+" percent"}).css("left",a.toString()+"%"),$("#progress-bar-"+this.config.id).attr({"aria-valuenow":a,"aria-valuetext":a.toString()+" percent"}).css("width",a.toString()+"%"),this.updateLoaderBar(),this.updateTime(i)},window.NOMENSA.player.MediaplayerDecorator.prototype.updateLoaderBar=function(){var e=this.getBytesLoaded()/this.getBytesTotal()*100;e=parseInt(e,10),isFinite(e)||(e=0),$("#loaded-bar-"+this.config.id).attr({"aria-valuetext":e.toString()+" percent","aria-valuenow":e}).css("width",e.toString()+"%")},window.NOMENSA.player.MediaplayerDecorator.prototype.formatTime=function(e){var t=0,i=0,a=0;e>=60?(i=parseInt(e/60,10),a=e-60*i,i>=60&&(t=parseInt(i/60,10),i-=parseInt(60*t,10))):a=e;for(var n=[t,i,a],s=0;s<n.length;s+=1)n[s]=n[s]<10?"0"+n[s].toString():n[s].toString();return n.join(":")},window.NOMENSA.player.MediaplayerDecorator.prototype.updateTime=function(e){var t=this.formatTime(parseInt(e,10));this.$html.find("#current-"+this.config.id).html(t)},window.NOMENSA.player.MediaplayerDecorator.prototype.getControls=function(){var e=$("<span />").addClass("ui-corner-bottom").addClass("control-bar"),t=$("<a />").attr("href","http://www.nomensa.com?ref=logo").html("Accessible Media Player by Nomensa").addClass("logo");e.append(t);for(var i=this.getFuncControls(),a=this.getVolControls(),n=this.getSliderBar(),s=[i,a,n],r=0;r<s.length;r+=1)e[0].appendChild(s[r][0]);return e},window.NOMENSA.player.MediaplayerDecorator.prototype.updateVolume=function(e){$("#vol-"+this.config.id).text(e.toString()+"%");var t=this.$html.find("button.mute");0==e?t.addClass("muted"):t.hasClass("muted")&&t.removeClass("muted")},window.NOMENSA.player.MediaplayerDecorator.prototype.getCaptions=function(){var e=this;if(e.config.captions){$.ajax({url:e.config.captions,success:function(t){$(t).find("p").length>0&&(e.captions=$(t).find("p"))}})}},window.NOMENSA.player.MediaplayerDecorator.prototype.toggleCaptions=function(){var e=this,t=this.$html.find(".captions");t.hasClass("captions-off")?(t.removeClass("captions-off").addClass("captions-on"),e.getPreviousCaption(),e.setCaptionTimeout(),e.config.captionsOn=!0):(t.removeClass("captions-on").addClass("captions-off"),e.clearCaptionTimeout(),e.$html.find(".caption").remove(),e.config.captionsOn=!1)},window.NOMENSA.player.MediaplayerDecorator.prototype.syncCaptions=function(){var e;if(this.captions){var t=this.getCurrentTime();t=this.formatTime(parseInt(t,10)),e=this.captions.filter('[begin="'+t+'"]'),1==e.length&&this.insertCaption(e)}},window.NOMENSA.player.MediaplayerDecorator.prototype.insertCaption=function(e){if(1==this.$html.find(".caption").length)this.$html.find(".caption").text(e.text());else{var t=$("<div>").text(e.text());t[0].className="caption",this.$html.find(".video").prepend(t)}},window.NOMENSA.player.MediaplayerDecorator.prototype.getPreviousCaption=function(e){var t;void 0==e&&(e=this.getCurrentTime());var i=this.formatTime(parseInt(e,10));if(this.captions){for(t=this.captions.filter('[begin="'+i+'"]');1!=t.length&&e>0;)e--,i=this.formatTime(parseInt(e,10)),t=this.captions.filter('[begin="'+i+'"]');1==t.length&&this.insertCaption(t)}},window.NOMENSA.player.MediaplayerDecorator.prototype.destroyPlayerInstance=function(){return!1},window.NOMENSA.player.MediaplayerDecorator.prototype.destroy=function(){this.clearSliderTimeout(),this.clearCaptionTimeout(),this.destroyPlayerInstance(),this.$html.remove()},window.NOMENSA.player.MediaplayerDecorator.prototype.setCaptionTimeout=function(){var e=this;void 0==e.captionInterval&&(e.captionInterval=setInterval(function(){e.syncCaptions()},500))},window.NOMENSA.player.MediaplayerDecorator.prototype.clearCaptionTimeout=function(){void 0!=this.captionInterval&&(this.captionInterval=clearInterval(this.captionInterval))},window.NOMENSA=window.NOMENSA||{},window.NOMENSA.player=window.NOMENSA.player||{},jQuery(function(e){e(window).resize(function(){e(".player-container").each(function(){e(this).width()>580?e(this).addClass("player-wide"):e(this).removeClass("player-wide")})})}),"undefined"==typeof window.postMessage&&(window.NOMENSA.player.stateHandlers={}),window.NOMENSA.player.PlayerManager=function(){var e={};this.getPlayer=function(t){return void 0!=e[t]?e[t]:null},this.addPlayer=function(t){return e[t.config.id]=t,!0},this.removePlayer=function(t){void 0!=e[t]&&(e[t].destroy(),delete e[t])},this.map=function(t){var i;for(i in e)t(e[i])}},window.NOMENSA.player.PlayerDaemon=new window.NOMENSA.player.PlayerManager;var html5_methods={play:function(){this.player.play(),this.setSliderTimeout(),this.config.captionsOn&&this.captions&&this.setCaptionTimeout()},pause:function(){this.player.pause(),this.clearSliderTimeout(),this.config.captionsOn&&this.captions&&this.clearCaptionTimeout()},ffwd:function(){var e=this.getCurrentTime()+this.config.playerSkip;this.seek(e)},rewd:function(){var e=this.getCurrentTime()-this.config.playerSkip;e<0&&(e=0),this.seek(e)},mute:function(){var e=this.$html.find("button.mute");this.player.muted?(this.player.muted=!1,e.hasClass("muted")&&e.removeClass("muted")):(this.player.muted=!0,e.addClass("muted"))},volup:function(){var e=100*this.player.volume;e<100-this.config.volumeStep?e+=this.config.volumeStep:e=100,this.player.volume=e/100,this.updateVolume(Math.round(e))},voldwn:function(){var e=100*this.player.volume;e>this.config.volumeStep?e-=this.config.volumeStep:e=0,this.player.volume=e/100,this.updateVolume(Math.round(e))},getDuration:function(){return this.player.duration},getCurrentTime:function(){return this.player.currentTime},getBytesLoaded:function(){return this.player.buffered.end(0)},getBytesTotal:function(){return this.player.duration},seek:function(e){this.player.currentTime=e},cue:function(){}};!function(e){e.fn.player=function(t,i){function a(t){this.config=s,e.extend(!0,this,d,i),this.is_html5=!1;var a=r(this);a&&this.config.useHtml5?(this.config.media=a.src,this.is_html5=!0,this.$html=this.assembleHTML5(a.container,a.mimetype),e.extend(this,html5_methods)):(this.config.media instanceof Array&&"undefined"!=typeof this.config.media.push&&(this.config.media=this.config.media[0]),this.$html=this.assembleHTML()),this.config.captions&&this.getCaptions()}var n={id:"media_player",url:window.location.protocol+"//www.youtube.com/apiplayer?enablejsapi=1&version=3&playerapiid=",media:"8LiQ-bLJaM4",repeat:!1,captions:null,captionsOn:!0,flashWidth:"100%",flashHeight:"300px",playerStyles:{height:"100%",width:"100%"},sliderTimeout:350,flashContainer:"span",playerContainer:"span",image:"",playerSkip:10,volumeStep:10,buttons:{forward:!0,rewind:!0,toggle:!0},logoURL:"http://www.nomensa.com?ref=logo",useHtml5:!0,swfCallback:null},s=e.extend(!0,{},n,t),r=function(e){var t,i,a,n,s,r,o=e.config.media;if(n=function(e){if(t=document.createElement(e.container),void 0!=t.canPlayType&&(a=t.canPlayType(e.mimetype),"maybe"==a.toLowerCase()||"probably"==a.toLowerCase()))return!0},"string"==typeof o&&(i=l(o),n(i)))return i.src=o,i;if(o instanceof Array&&"undefined"!=typeof o.push)for(s=0,r=o.length;s<r;s++)if(i=l(o[s]),n(i))return i.src=o[s],i;return!1},o=function(e){var t="",i="video";switch(e){case"mp4":t='video/mp4; codecs="avc1.42E01E, mp4a.40.2"';break;case"m4v":t='video/mp4; codecs="avc1.42E01E, mp4a.40.2"';break;case"ogg":t='video/ogg; codecs="theora, vorbis"';break;case"ogv":t='video/ogg; codecs="theora, vorbis"';break;case"webm":t='video/webm; codecs="vp8, vorbis"';break;case"mp3":t="audio/mpeg",i="audio"}return{mimetype:t,container:i}},l=function(e){var t=e.lastIndexOf(".");if(t!=-1){var i=e.substring(t+1),a=o(i);return a}return null},u=function(){return!!window.NOMENSA.browser.mozilla&&parseInt(window.NOMENSA.browser.version,10)>=2},d={generatePlayerContainer:function(){var t=e("<"+this.config.playerContainer+" />").css(this.config.playerStyles).addClass("player-container");return window.NOMENSA.browser.msie&&t.addClass("player-container-ie player-container-ie-"+window.NOMENSA.browser.version.substring(0,1)),t},getFlashVars:function(){var e={controlbar:"none",file:this.config.media};return""!=this.config.image&&(e.image=this.config.image),this.config.repeat&&(e.repeat=this.config.repeat),e},getFlashParams:function(){return{allowScriptAccess:"always",wmode:"transparent"}},getURL:function(){return[this.config.url,this.config.id].join("")},generateFlashPlayer:function(t){var i=this,a=this.getFlashVars(),n=this.getFlashParams(),s={id:this.config.id,name:this.config.id},r=e("<"+this.config.flashContainer+" />").attr("id","player-"+this.config.id).addClass("flashReplace").html('This content requires Macromedia Flash Player. You can <a href="http://get.adobe.com/flashplayer/">install or upgrade the Adobe Flash Player here</a>.'),o=e("<span />").addClass("video"),l=this.getURL();return setTimeout(function(){swfobject.embedSWF(l,r.attr("id"),i.config.flashWidth,i.config.flashHeight,"9.0.115",null,a,n,s,i.config.swfCallback),u()&&i.$html.find("object").attr("tabindex","-1")},0),t.append(o.append(r)),t},generateHTML5Player:function(t,i,a){var n=e("<span />");n[0].className="video";var s=e("<"+i+" />").attr({id:this.config.id,src:this.config.media,type:a}).css({width:"100%",height:"50%"});return""!=e.trim(this.config.image)&&s.attr({poster:e.trim(this.config.image)}),t.append(n.append(s))},createButton:function(t,i){var a=[t,this.config.id].join("-"),n=e("<button />").append(i).addClass(t).attr({title:t,id:a}).addClass("ui-corner-all ui-state-default").hover(function(){e(this).addClass("ui-state-hover")},function(){e(this).removeClass("ui-state-hover")}).focus(function(){e(this).addClass("ui-state-focus")}).blur(function(){e(this).removeClass("ui-state-focus")}).click(function(e){e.preventDefault()});return n},getFuncControls:function(){var t=this,i=e("<div>");i[0].className="player-controls";var a=[];if(t.config.buttons.toggle){var n=t.createButton("play","Play").attr({"aria-live":"assertive"}).click(function(){e(this).hasClass("play")?(e(this).removeClass("play").addClass("pause").attr({title:"Pause",id:"pause-"+t.config.id}).text("Pause"),t.play()):(e(this).removeClass("pause").addClass("play").attr({title:"Play",id:"play-"+t.config.id}).text("Play"),t.pause())});a.push(n)}else{var s=t.createButton("play","Play").click(function(){t.play()}),r=t.createButton("pause","Pause").click(function(){t.pause()});a.push(s),a.push(r)}if(t.config.buttons.rewind){var o=t.createButton("rewind","Rewind").click(function(){t.rewd()});a.push(o)}if(t.config.buttons.forward){var l=t.createButton("forward","Forward").click(function(){t.ffwd()});a.push(l)}if(t.config.captions){var u=t.createButton("captions","Captions").click(function(){t.toggleCaptions()}),d=1==t.config.captionsOn?"captions-on":"captions-off";u.addClass(d),a.push(u)}var c;for(c=0;c<a.length;c+=1)i[0].appendChild(a[c][0]);return i},getVolControls:function(){var t,i=this,a=e("<div>").addClass("volume-controls"),n=i.createButton("mute","Mute").click(function(){i.mute()}),s=i.createButton("vol-up",'+<span class="ui-helper-hidden-accessible"> Volume Up</span>').click(function(){i.volup()}),r=i.createButton("vol-down",'-<span class="ui-helper-hidden-accessible"> Volume Down</span>').click(function(){i.voldwn()}),o=e("<span />").attr({id:"vol-"+i.config.id,class:"vol-display"}).text("100%"),l=[n,r,s,o];for(t=0;t<l.length;t+=1)a[0].appendChild(l[t][0]);
return a},getSliderBar:function(){var t,i=e("<span />").addClass("ui-helper-hidden-accessible").html("<p>The timeline slider below uses WAI ARIA. Please use the documentation for your screen reader to find out more.</p>"),a=e("<span />").addClass("current-time").attr({id:"current-"+this.config.id}).text("00:00:00"),n=this.getSlider(),s=e("<span />").addClass("duration-time").attr({id:"duration-"+this.config.id}).text("00:00:00"),r=e("<div />").addClass("timer-bar").append(i),o=[a,n,s];for(t=0;t<o.length;t+=1)r[0].appendChild(o[t][0]);return r},getSlider:function(){var t=this,i=e("<span />").attr("id","slider-"+this.config.id).slider({orientation:"horizontal",change:function(e,i){var a=i.value,n=a/100*t.getDuration();t.seek(n)}});i.find("a.ui-slider-handle").attr({role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"0","aria-valuetext":"0 percent",title:"Slider Control"});var a=e("<span />").addClass("progress-bar").attr({id:"progress-bar-"+this.config.id,tabindex:"-1"}).addClass("ui-progressbar-value ui-widget-header ui-corner-left").css({width:"0%",height:"95%"}),n=e("<span />").attr({id:"loaded-bar-"+this.config.id,tabindex:"-1"}).addClass("loaded-bar ui-progressbar-value ui-widget-header ui-corner-left").css({height:"95%",width:"0%"});return i.append(a,n)},setSliderTimeout:function(){var e=this;void 0==e.sliderInterval&&(e.sliderInterval=setInterval(function(){e.updateSlider()},e.config.sliderTimeout))},clearSliderTimeout:function(){var e=this;void 0!=e.sliderInterval&&(e.sliderInterval=clearInterval(e.sliderInterval))},updateSlider:function(){var t="undefined"!=typeof this.duration?this.duration:this.getDuration(),i="boolean"==typeof this.duration_found&&this.duration_found,a=this.getCurrentTime(),n=0;t>0?(n=a/t*100,n=parseInt(n,10)):t=0,i||(e("#duration-"+this.config.id).html(this.formatTime(parseInt(t,10))),this.duration_found=!0),e("#slider-"+this.config.id).find("a.ui-slider-handle").attr({"aria-valuenow":n,"aria-valuetext":n.toString()+" percent"}).css("left",n.toString()+"%"),e("#progress-bar-"+this.config.id).attr({"aria-valuenow":n,"aria-valuetext":n.toString()+" percent"}).css("width",n.toString()+"%"),this.updateLoaderBar(),this.updateTime(a)},updateLoaderBar:function(){var t=this.getBytesLoaded()/this.getBytesTotal()*100;t=parseInt(t,10),isFinite(t)||(t=0),e("#loaded-bar-"+this.config.id).attr({"aria-valuetext":t.toString()+" percent","aria-valuenow":t}).css("width",t.toString()+"%")},formatTime:function(e){var t=0,i=0,a=0;e>=60?(i=parseInt(e/60,10),a=e-60*i,i>=60&&(t=parseInt(i/60,10),i-=parseInt(60*t,10))):a=e;var n,s=[t,i,a];for(n=0;n<s.length;n+=1)s[n]=s[n]<10?"0"+s[n].toString():s[n].toString();return s.join(":")},updateTime:function(e){var t=this.formatTime(parseInt(e,10));this.$html.find("#current-"+this.config.id).html(t)},getControls:function(){var t=e("<span />").addClass("ui-corner-bottom").addClass("control-bar"),i=e("<a />").attr("href","http://www.nomensa.com?ref=logo").html("Accessible Media Player by Nomensa").addClass("logo");t.append(i);var a,n=this.getFuncControls(),s=this.getVolControls(),r=this.getSliderBar(),o=[n,s,r];for(a=0;a<o.length;a+=1)t[0].appendChild(o[a][0]);return t},assembleHTML:function(){var e=this.generatePlayerContainer(),t=this.generateFlashPlayer(e),i=t.append(this.getControls());return i},assembleHTML5:function(e,t){var i=this.generatePlayerContainer(),a=this.generateHTML5Player(i,e,t),n=a.append(this.getControls());return n},updateVolume:function(t){e("#vol-"+this.config.id).text(t.toString()+"%");var i=this.$html.find("button.mute");0==t?i.addClass("muted"):i.hasClass("muted")&&i.removeClass("muted")},getCaptions:function(){var t=this;if(t.config.captions){e.ajax({url:t.config.captions,success:function(i){e(i).find("p").length>0&&(t.captions=e(i).find("p"))}})}},syncCaptions:function(){var e;if(this.captions){var t=this.getCurrentTime();t=this.formatTime(parseInt(t,10)),e=this.captions.filter('[begin="'+t+'"]'),1==e.length&&this.insertCaption(e)}},insertCaption:function(t){if(1==this.$html.find(".caption").length)this.$html.find(".caption").text(t.text());else{var i=e("<div>").text(t.text());i[0].className="caption",this.$html.find(".video").prepend(i)}},getPreviousCaption:function(e){var t;void 0==e&&(e=this.getCurrentTime());var i=this.formatTime(parseInt(e,10));if(this.captions){for(t=this.captions.filter('[begin="'+i+'"]');1!=t.length&&e>0;)e--,i=this.formatTime(parseInt(e,10)),t=this.captions.filter('[begin="'+i+'"]');1==t.length&&this.insertCaption(t)}},destroyPlayerInstance:function(){return!1},destroy:function(){this.clearSliderTimeout(),this.clearCaptionTimeout(),this.destroyPlayerInstance(),this.$html.remove()},setCaptionTimeout:function(){var e=this;void 0==e.captionInterval&&(e.captionInterval=setInterval(function(){e.syncCaptions()},500))},clearCaptionTimeout:function(){void 0!=this.captionInterval&&(this.captionInterval=clearInterval(this.captionInterval))},play:function(){this.player.playVideo(),this.setSliderTimeout(),this.config.captionsOn&&this.captions&&this.setCaptionTimeout()},pause:function(){this.player.pauseVideo(),this.clearSliderTimeout(),this.config.captionsOn&&this.captions&&this.clearCaptionTimeout()},ffwd:function(){var e=this.getCurrentTime()+this.config.playerSkip;this.seek(e)},rewd:function(){var e=this.getCurrentTime()-this.config.playerSkip;e<0&&(e=0),this.seek(e)},mute:function(){var e=this.$html.find("button.mute");this.player.isMuted()?(this.player.unMute(),e.hasClass("muted")&&e.removeClass("muted")):(this.player.mute(),e.addClass("muted"))},volup:function(){var e=this.player.getVolume();e<100-this.config.volumeStep?e+=this.config.volumeStep:e=100,this.player.setVolume(e),this.updateVolume(e)},voldwn:function(){var e=this.player.getVolume();e>this.config.volumeStep?e-=this.config.volumeStep:e=0,this.player.setVolume(e),this.updateVolume(e)},getDuration:function(){return this.player.getDuration()},getCurrentTime:function(){return this.player.getCurrentTime()},getBytesLoaded:function(){return this.player.getVideoBytesLoaded()},getBytesTotal:function(){return this.player.getVideoBytesTotal()},seek:function(e){this.player.seekTo(e),this.config.captionsOn&&this.captions&&(this.$html.find(".caption").remove(),this.clearCaptionTimeout(),this.setCaptionTimeout(),this.getPreviousCaption())},cue:function(){this.player.cueVideoById(this.config.media)},toggleCaptions:function(){var e=this,t=this.$html.find(".captions");t.hasClass("captions-off")?(t.removeClass("captions-off").addClass("captions-on"),e.getPreviousCaption(),e.setCaptionTimeout(),e.config.captionsOn=!0):(t.removeClass("captions-on").addClass("captions-off"),e.clearCaptionTimeout(),e.$html.find(".caption").remove(),e.config.captionsOn=!1)}};return this.each(function(t){var i,n,r=e(this),o=function(e){e.$html.width()>580&&e.$html.addClass("player-wide"),e.is_html5&&(e.player=document.getElementById(e.config.id))};s.url.match(/^(http|https)\:\/\/www\.youtube\.com/)?(i=new window.NOMENSA.player.YoutubePlayer(s),n=new window.NOMENSA.player.MediaplayerDecorator(i),n.onPlayerReady(function(){o(n),this.getPlayer().setLoop(!0)}),n.init(r)):(n=new a(t),r.html(n.$html),o(n),window.NOMENSA.player.PlayerDaemon.addPlayer(n))})}}(jQuery),function(e){function t(e){if(e.indexOf("youtube.com")>-1){var t,i,a,n,s={};if(n=e.split("?"),1===n.length)return;for(n=n[1].split("&"),t=0,i=n.length;t<i;t++)a=n[t].split("="),s[a[0]]=a[1];return s.v}if(e.indexOf("youtu.be")>-1){var n=e.split("/");return n.pop()}}function i(i){i.find("a[href*='youtube.com']").each(function(i){var a=e(this),n=t(a.attr("href")),s=e('<span class="media-player" />'),r=a.siblings(".captions");"off"==e(this).attr("data-youtube-player")||"undefined"!=typeof n&&(a.parent().replaceWith(s),s.player({id:"youtube-"+i,media:n,captions:r.length>0?r.attr("href"):null,url:document.location.protocol+"//www.youtube.com/apiplayer?enablejsapi=1&version=3&playerapiid="}))})}window.LCC=window.LCC||{},LCC.enhanceYoutubeVideoLinks=i,e(function(){LCC.enhanceYoutubeVideoLinks(e(".media-container"))})}(jQuery),function(e,t){"use strict";t(document).ready(function(){if(0!==t("#ms-designer-ribbon").length){var i=t("#ms-designer-ribbon").position().top;t(e).scroll(function(){var a=t(e).scrollTop();t(document).height(),t(e).height();
//if top of element is in view
a>i?t("#ms-designer-ribbon").css({position:"fixed",top:"0","z-index":"700"}):t("#ms-designer-ribbon").css({position:"inherit"})})}})}(window,jQuery),/*! jQuery UI - v1.12.1 - 2016-11-23
* http://jqueryui.com
* Includes: keycode.js, widgets/datepicker.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
function(e){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module.
define(["jquery"],e):
// Browser globals
e(jQuery)}(function(e){function t(e){for(var t,i;e.length&&e[0]!==document;){if(
// Ignore z-index if position is set to a value where z-index is ignored by the browser
// This makes behavior of this function consistent across browsers
// WebKit always returns auto if the element is positioned
t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(
// IE returns 0 when zIndex is not specified
// other browsers return a string
// we ignore the case of nested elements with an explicit value of 0
// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */
function i(){this._curInst=null,// The current instance in use
this._keyEvent=!1,// If the last event was a key event
this._disabledInputs=[],// List of date picker inputs that have been disabled
this._datepickerShowing=!1,// True if the popup picker is showing , false if not
this._inDialog=!1,// True if showing within a "dialog", false if not
this._mainDivId="ui-datepicker-div",// The ID of the main datepicker division
this._inlineClass="ui-datepicker-inline",// The name of the inline marker class
this._appendClass="ui-datepicker-append",// The name of the append marker class
this._triggerClass="ui-datepicker-trigger",// The name of the trigger marker class
this._dialogClass="ui-datepicker-dialog",// The name of the dialog marker class
this._disableClass="ui-datepicker-disabled",// The name of the disabled covering marker class
this._unselectableClass="ui-datepicker-unselectable",// The name of the unselectable cell marker class
this._currentClass="ui-datepicker-current-day",// The name of the current day marker class
this._dayOverClass="ui-datepicker-days-cell-over",// The name of the day hover marker class
this.regional=[],// Available regional settings, indexed by language code
this.regional[""]={// Default regional settings
closeText:"Done",// Display text for close link
prevText:"Prev",// Display text for previous month link
nextText:"Next",// Display text for next month link
currentText:"Today",// Display text for current month link
monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],// Names of months for drop-down and formatting
monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],// For formatting
dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],// For formatting
dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],// For formatting
dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],// Column headings for days starting at Sunday
weekHeader:"Wk",// Column header for week of the year
dateFormat:"mm/dd/yy",// See format options on parseDate
firstDay:0,// The first day of the week, Sun = 0, Mon = 1, ...
isRTL:!1,// True if right-to-left language, false if left-to-right
showMonthAfterYear:!1,// True if the year select precedes month, false for month then year
yearSuffix:""},this._defaults={// Global defaults for all the date picker instances
showOn:"focus",// "focus" for popup on focus,
// "button" for trigger button, or "both" for either
showAnim:"fadeIn",// Name of jQuery animation for popup
showOptions:{},// Options for enhanced animations
defaultDate:null,// Used when field is blank: actual date,
// +/-number for offset from today, null for today
appendText:"",// Display text following the input box, e.g. showing the format
buttonText:"...",// Text for trigger button
buttonImage:"",// URL for trigger button image
buttonImageOnly:!1,// True if the image appears alone, false if it appears on a button
hideIfNoPrevNext:!1,// True to hide next/previous month links
// if not applicable, false to just disable them
navigationAsDateFormat:!1,// True if date formatting applied to prev/today/next links
gotoCurrent:!1,// True if today link goes back to current selection instead
changeMonth:!1,// True if month can be selected directly, false if only prev/next
changeYear:!1,// True if year can be selected directly, false if only prev/next
yearRange:"c-10:c+10",// Range of years to display in drop-down,
// either relative to today's year (-nn:+nn), relative to currently displayed year
// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
showOtherMonths:!1,// True to show dates in other months, false to leave blank
selectOtherMonths:!1,// True to allow selection of dates in other months, false for unselectable
showWeek:!1,// True to show week of the year, false to not show it
calculateWeek:this.iso8601Week,// How to calculate the week of the year,
// takes a Date and returns the number of the week for it
shortYearCutoff:"+10",// Short year values < this are in the current century,
// > this are in the previous century,
// string value starting with "+" for current year + value
minDate:null,// The earliest selectable date, or null for no limit
maxDate:null,// The latest selectable date, or null for no limit
duration:"fast",// Duration of display/closure
beforeShowDay:null,// Function that takes a date and returns an array with
// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
// [2] = cell title (optional), e.g. $.datepicker.noWeekends
beforeShow:null,// Function that takes an input field and
// returns a set of custom settings for the date picker
onSelect:null,// Define a callback function when a date is selected
onChangeMonthYear:null,// Define a callback function when the month or year is changed
onClose:null,// Define a callback function when the datepicker is closed
numberOfMonths:1,// Number of months to show at a time
showCurrentAtPos:0,// The position in multipe months at which to show the current month (starting at 0)
stepMonths:1,// Number of months to step back/forward
stepBigMonths:12,// Number of months to step back/forward for the big links
altField:"",// Selector for an alternate field to store selected dates into
altFormat:"",// The date format to use for the alternate field
constrainInput:!0,// The input is constrained by the current date format
showButtonPanel:!1,// True to show button panel, false to not show it
autoSize:!1,// True to size the input for the date format, false to leave as is
disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.on("mouseout",i,function(){e(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&e(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&e(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,n)}function n(){e.datepicker._isDisabledDatepicker(r.inline?r.dpDiv.parent()[0]:r.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&e(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&e(this).addClass("ui-datepicker-next-hover"))}/* jQuery extend now ignores nulls! */
function s(t,i){e.extend(t,i);for(var a in i)null==i[a]&&(t[a]=i[a]);return t}e.ui=e.ui||{};e.ui.version="1.12.1",e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};
// jscs:disable maximumLineLength
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Datepicker
//>>group: Widgets
//>>description: Displays a calendar from an input or inline for selecting dates.
//>>docs: http://api.jqueryui.com/datepicker/
//>>demos: http://jqueryui.com/datepicker/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/datepicker.css
//>>css.theme: ../../themes/base/theme.css
e.extend(e.ui,{datepicker:{version:"1.12.1"}});var r;e.extend(i.prototype,{/* Class name added to elements to indicate already configured with a date picker. */
markerClassName:"hasDatepicker",
//Keep track of the maximum number of rows displayed (see #7043)
maxRows:4,
// TODO rename to "widget" when switching to widget factory
_widgetDatepicker:function(){return this.dpDiv},/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
setDefaults:function(e){return s(this._defaults,e||{}),this},/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
_attachDatepicker:function(t,i){var a,n,s;a=t.nodeName.toLowerCase(),n="div"===a||"span"===a,t.id||(this.uuid+=1,t.id="dp"+this.uuid),s=this._newInst(e(t),n),s.settings=e.extend({},i||{}),"input"===a?this._connectDatepicker(t,s):n&&this._inlineDatepicker(t,s)},/* Create a new instance object. */
_newInst:function(t,i){var n=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");// escape jQuery meta chars
return{id:n,input:t,// associated target
selectedDay:0,selectedMonth:0,selectedYear:0,// current selection
drawMonth:0,drawYear:0,// month being drawn
inline:i,// is datepicker inline or not
dpDiv:i?// presentation div
a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},/* Attach the date picker to an input field. */
_connectDatepicker:function(t,i){var a=e(t);i.append=e([]),i.trigger=e([]),a.hasClass(this.markerClassName)||(this._attachments(a,i),a.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),
//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
i.settings.disabled&&this._disableDatepicker(t))},/* Make attachments based on settings. */
_attachments:function(t,i){var a,n,s,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=e("<span class='"+this._appendClass+"'>"+r+"</span>"),t[o?"before":"after"](i.append)),t.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),a=this._get(i,"showOn"),"focus"!==a&&"both"!==a||// pop-up date picker when in the marked field
t.on("focus",this._showDatepicker),"button"!==a&&"both"!==a||(// pop-up date picker when button clicked
n=this._get(i,"buttonText"),s=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:s,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(s?e("<img/>").attr({src:s,alt:n,title:n}):n)),t[o?"before":"after"](i.trigger),i.trigger.on("click",function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},/* Apply the maximum length for the date format. */
_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,a,n,s=new Date(2009,11,20),// Ensure double digits
r=this._get(e,"dateFormat");r.match(/[DM]/)&&(t=function(e){for(i=0,a=0,n=0;n<e.length;n++)e[n].length>i&&(i=e[n].length,a=n);return a},s.setMonth(t(this._get(e,r.match(/MM/)?"monthNames":"monthNamesShort"))),s.setDate(t(this._get(e,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-s.getDay())),e.input.attr("size",this._formatDate(e,s).length)}},/* Attach an inline date picker to a div. */
_inlineDatepicker:function(t,i){var a=e(t);a.hasClass(this.markerClassName)||(a.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),
//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
i.settings.disabled&&this._disableDatepicker(t),
// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
i.dpDiv.css("display","block"))},/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
_dialogDatepicker:function(t,i,a,n,r){var o,l,u,d,c,h=this._dialogInst;// internal instance
// should use actual width/height below
// Move input on screen for focus, but hidden behind dialog
return h||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),e("body").append(this._dialogInput),h=this._dialogInst=this._newInst(this._dialogInput,!1),h.settings={},e.data(this._dialogInput[0],"datepicker",h)),s(h.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(h,i):i,this._dialogInput.val(i),this._pos=r?r.length?r:[r.pageX,r.pageY]:null,this._pos||(l=document.documentElement.clientWidth,u=document.documentElement.clientHeight,d=document.documentElement.scrollLeft||document.body.scrollLeft,c=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+d,u/2-150+c]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),h.settings.onSelect=a,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",h),this},/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
_destroyDatepicker:function(t){var i,a=e(t),n=e.data(t,"datepicker");a.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),a.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):"div"!==i&&"span"!==i||a.removeClass(this.markerClassName).empty(),r===n&&(r=null))},/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
_enableDatepicker:function(t){var i,a,n=e(t),s=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,s.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==i&&"span"!==i||(a=n.children("."+this._inlineClass),a.children().removeClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
_disableDatepicker:function(t){var i,a,n=e(t),s=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,s.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==i&&"span"!==i||(a=n.children("."+this._inlineClass),a.children().addClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),// delete entry
this._disabledInputs[this._disabledInputs.length]=t)},/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]===e)return!0;return!1},/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
_getInst:function(t){try{return e.data(t,"datepicker")}catch(e){throw"Missing instance data for this datepicker"}},/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
_optionDatepicker:function(t,i,a){var n,r,o,l,u=this._getInst(t);
// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):u?"all"===i?e.extend({},u.settings):this._get(u,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=a),void(u&&(this._curInst===u&&this._hideDatepicker(),r=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(u,"min"),l=this._getMinMaxDate(u,"max"),s(u.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(u.settings.minDate=this._formatDate(u,o)),null!==l&&void 0!==n.dateFormat&&void 0===n.maxDate&&(u.settings.maxDate=this._formatDate(u,l)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),u),this._autoSize(u),this._setDate(u,r),this._updateAlternate(u),this._updateDatepicker(u))))},
// Change method deprecated
_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},/* Handle keystrokes. */
_doKeyDown:function(t){var i,a,n,s=e.datepicker._getInst(t.target),r=!0,o=s.dpDiv.is(".ui-datepicker-rtl");if(s._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),r=!1;break;// hide on tab out
case 13:
// Trigger custom callback
return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",s.dpDiv),n[0]&&e.datepicker._selectDay(t.target,s.selectedMonth,s.selectedYear,n[0]),i=e.datepicker._get(s,"onSelect"),i?(a=e.datepicker._formatDate(s),i.apply(s.input?s.input[0]:null,[a,s])):e.datepicker._hideDatepicker(),!1;// don't submit the form
case 27:e.datepicker._hideDatepicker();break;// hide on escape
case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M");break;// previous month/year on page up/+ ctrl
case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M");break;// next month/year on page down/+ ctrl
case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),r=t.ctrlKey||t.metaKey;break;// clear on ctrl or command +end
case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),r=t.ctrlKey||t.metaKey;break;// current on ctrl or command +home
case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?1:-1,"D"),r=t.ctrlKey||t.metaKey,
// -1 day on ctrl or command +left
t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M");
// next month/year on alt +left on Mac
break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),r=t.ctrlKey||t.metaKey;break;// -1 week on ctrl or command +up
case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?-1:1,"D"),r=t.ctrlKey||t.metaKey,
// +1 day on ctrl or command +right
t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M");
// next month/year on alt +right
break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),r=t.ctrlKey||t.metaKey;break;// +1 week on ctrl or command +down
default:r=!1}else 36===t.keyCode&&t.ctrlKey?// display the date picker on ctrl+home
e.datepicker._showDatepicker(this):r=!1;r&&(t.preventDefault(),t.stopPropagation())},/* Filter entered characters - based on date format. */
_doKeyPress:function(t){var i,a,n=e.datepicker._getInst(t.target);if(e.datepicker._get(n,"constrainInput"))return i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),a=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||a<" "||!i||i.indexOf(a)>-1},/* Synchronise manual entry and field/alternate field. */
_doKeyUp:function(t){var i,a=e.datepicker._getInst(t.target);if(a.input.val()!==a.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,e.datepicker._getFormatConfig(a)),i&&(// only if valid
e.datepicker._setDateFromField(a),e.datepicker._updateAlternate(a),e.datepicker._updateDatepicker(a))}catch(e){}return!0},/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
_showDatepicker:function(i){if(i=i.target||i,"input"!==i.nodeName.toLowerCase()&&(// find from button/image trigger
i=e("input",i.parentNode)[0]),!e.datepicker._isDisabledDatepicker(i)&&e.datepicker._lastInput!==i){var a,n,r,o,l,u,d;a=e.datepicker._getInst(i),e.datepicker._curInst&&e.datepicker._curInst!==a&&(e.datepicker._curInst.dpDiv.stop(!0,!0),a&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(a,"beforeShow"),r=n?n.apply(i,[i,a]):{},r!==!1&&(s(a.settings,r),a.lastVal=null,e.datepicker._lastInput=i,e.datepicker._setDateFromField(a),e.datepicker._inDialog&&(// hide cursor
i.value=""),e.datepicker._pos||(// position below input
e.datepicker._pos=e.datepicker._findPos(i),e.datepicker._pos[1]+=i.offsetHeight),o=!1,e(i).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),l={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,
//to avoid flashes on Firefox
a.dpDiv.empty(),
// determine sizing offscreen
a.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(a),
// fix width for dynamic number of date pickers
// and adjust position before showing
l=e.datepicker._checkOffset(a,l,o),a.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),a.inline||(u=e.datepicker._get(a,"showAnim"),d=e.datepicker._get(a,"duration"),a.dpDiv.css("z-index",t(e(i))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[u]?a.dpDiv.show(u,e.datepicker._get(a,"showOptions"),d):a.dpDiv[u||"show"](u?d:null),e.datepicker._shouldFocusInput(a)&&a.input.trigger("focus"),e.datepicker._curInst=a))}},/* Generate the date picker content. */
_updateDatepicker:function(t){this.maxRows=4,//Reset the max number of rows being displayed (see #7043)
r=t,// for delegate hover events
t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,a=this._getNumberOfMonths(t),s=a[1],o=17,l=t.dpDiv.find("."+this._dayOverClass+" a");l.length>0&&n.apply(l.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",o*s+"em"),t.dpDiv[(1!==a[0]||1!==a[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.trigger("focus"),
// Deffered render of the years select (to avoid flashes on Firefox)
t.yearshtml&&(i=t.yearshtml,setTimeout(function(){
//assure that inst.yearshtml didn't change.
i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},
// #6694 - don't focus the input if it's already focused
// this breaks the change event in IE
// Support: IE and jQuery <1.9
_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},/* Check positioning to remain on screen. */
_checkOffset:function(t,i,a){var n=t.dpDiv.outerWidth(),s=t.dpDiv.outerHeight(),r=t.input?t.input.outerWidth():0,o=t.input?t.input.outerHeight():0,l=document.documentElement.clientWidth+(a?0:e(document).scrollLeft()),u=document.documentElement.clientHeight+(a?0:e(document).scrollTop());
// Now check if datepicker is showing outside window viewport - move to a better place if so.
return i.left-=this._get(t,"isRTL")?n-r:0,i.left-=a&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=a&&i.top===t.input.offset().top+o?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>l&&l>n?Math.abs(i.left+n-l):0),i.top-=Math.min(i.top,i.top+s>u&&u>s?Math.abs(s+o):0),i},/* Find an object's position on the screen. */
_findPos:function(t){for(var i,a=this._getInst(t),n=this._get(a,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
_hideDatepicker:function(t){var i,a,n,s,r=this._curInst;!r||t&&r!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(r,"showAnim"),a=this._get(r,"duration"),n=function(){e.datepicker._tidyDialog(r)},
// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
e.effects&&(e.effects.effect[i]||e.effects[i])?r.dpDiv.hide(i,e.datepicker._get(r,"showOptions"),a,n):r.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?a:null,n),i||n(),this._datepickerShowing=!1,s=this._get(r,"onClose"),s&&s.apply(r.input?r.input[0]:null,[r.input?r.input.val():"",r]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},/* Tidy up after a dialog display. */
_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},/* Close date picker if clicked elsewhere. */
_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),a=e.datepicker._getInst(i[0]);(i[0].id===e.datepicker._mainDivId||0!==i.parents("#"+e.datepicker._mainDivId).length||i.hasClass(e.datepicker.markerClassName)||i.closest("."+e.datepicker._triggerClass).length||!e.datepicker._datepickerShowing||e.datepicker._inDialog&&e.blockUI)&&(!i.hasClass(e.datepicker.markerClassName)||e.datepicker._curInst===a)||e.datepicker._hideDatepicker()}},/* Adjust one of the date sub-fields. */
_adjustDate:function(t,i,a){var n=e(t),s=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(s,i+("M"===a?this._get(s,"showCurrentAtPos"):0),// undo positioning
a),this._updateDatepicker(s))},/* Action for current link. */
_gotoToday:function(t){var i,a=e(t),n=this._getInst(a[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(a)},/* Action for selecting a new month/year. */
_selectMonthYear:function(t,i,a){var n=e(t),s=this._getInst(n[0]);s["selected"+("M"===a?"Month":"Year")]=s["draw"+("M"===a?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(s),this._adjustDate(n)},/* Action for selecting a day. */
_selectDay:function(t,i,a,n){var s,r=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(s=this._getInst(r[0]),s.selectedDay=s.currentDay=e("a",n).html(),s.selectedMonth=s.currentMonth=i,s.selectedYear=s.currentYear=a,this._selectDate(t,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear)))},/* Erase the input field and hide the date picker. */
_clearDate:function(t){var i=e(t);this._selectDate(i,"")},/* Update the input field with the selected date. */
_selectDate:function(t,i){var a,n=e(t),s=this._getInst(n[0]);i=null!=i?i:this._formatDate(s),s.input&&s.input.val(i),this._updateAlternate(s),a=this._get(s,"onSelect"),a?a.apply(s.input?s.input[0]:null,[i,s]):s.input&&s.input.trigger("change"),s.inline?this._updateDatepicker(s):(this._hideDatepicker(),this._lastInput=s.input[0],"object"!=typeof s.input[0]&&s.input.trigger("focus"),this._lastInput=null)},/* Update any alternate field to synchronise with the main field. */
_updateAlternate:function(t){var i,a,n,s=this._get(t,"altField");s&&(// update alternate field too
i=this._get(t,"altFormat")||this._get(t,"dateFormat"),a=this._getDate(t),n=this.formatDate(i,a,this._getFormatConfig(t)),e(s).val(n))},/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
noWeekends:function(e){var t=e.getDay();return[t>0&&t<6,""]},/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
iso8601Week:function(e){var t,i=new Date(e.getTime());
// Find Thursday of this week starting on Monday
// Compare with Jan 1
return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
parseDate:function(t,i,a){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?i.toString():i+"",""===i)return null;var n,s,r,o,l=0,u=(a?a.shortYearCutoff:null)||this._defaults.shortYearCutoff,d="string"!=typeof u?u:(new Date).getFullYear()%100+parseInt(u,10),c=(a?a.dayNamesShort:null)||this._defaults.dayNamesShort,h=(a?a.dayNames:null)||this._defaults.dayNames,p=(a?a.monthNamesShort:null)||this._defaults.monthNamesShort,f=(a?a.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,v=-1,y=-1,_=!1,
// Check whether a format character is doubled
w=function(e){var i=n+1<t.length&&t.charAt(n+1)===e;return i&&n++,i},
// Extract a number from the string value
k=function(e){var t=w(e),a="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?a:1,s=new RegExp("^\\d{"+n+","+a+"}"),r=i.substring(l).match(s);if(!r)throw"Missing number at position "+l;return l+=r[0].length,parseInt(r[0],10)},
// Extract a name from the string value and convert to an index
C=function(t,a,n){var s=-1,r=e.map(w(t)?n:a,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(r,function(e,t){var a=t[1];if(i.substr(l,a.length).toLowerCase()===a.toLowerCase())return s=t[0],l+=a.length,!1}),s!==-1)return s+1;throw"Unknown name at position "+l},
// Confirm that a literal character matches the string value
b=function(){if(i.charAt(l)!==t.charAt(n))throw"Unexpected literal at position "+l;l++};for(n=0;n<t.length;n++)if(_)"'"!==t.charAt(n)||w("'")?b():_=!1;else switch(t.charAt(n)){case"d":v=k("d");break;case"D":C("D",c,h);break;case"o":y=k("o");break;case"m":m=k("m");break;case"M":m=C("M",p,f);break;case"y":g=k("y");break;case"@":o=new Date(k("@")),g=o.getFullYear(),m=o.getMonth()+1,v=o.getDate();break;case"!":o=new Date((k("!")-this._ticksTo1970)/1e4),g=o.getFullYear(),m=o.getMonth()+1,v=o.getDate();break;case"'":w("'")?b():_=!0;break;default:b()}if(l<i.length&&(r=i.substr(l),!/^\s+/.test(r)))throw"Extra/unparsed characters found in date: "+r;if(g===-1?g=(new Date).getFullYear():g<100&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(g<=d?0:-100)),y>-1)for(m=1,v=y;;){if(s=this._getDaysInMonth(g,m-1),v<=s)break;m++,v-=s}if(o=this._daylightSavingAdjust(new Date(g,m-1,v)),o.getFullYear()!==g||o.getMonth()+1!==m||o.getDate()!==v)throw"Invalid date";return o},/* Standard date formats. */
ATOM:"yy-mm-dd",// RFC 3339 (ISO 8601)
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",// RFC 822
TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",// ISO 8601
_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
formatDate:function(e,t,i){if(!t)return"";var a,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,s=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,
// Check whether a format character is doubled
l=function(t){var i=a+1<e.length&&e.charAt(a+1)===t;return i&&a++,i},
// Format a number, with leading zero if necessary
u=function(e,t,i){var a=""+t;if(l(e))for(;a.length<i;)a="0"+a;return a},
// Format a name, short or long as requested
d=function(e,t,i,a){return l(e)?a[t]:i[t]},c="",h=!1;if(t)for(a=0;a<e.length;a++)if(h)"'"!==e.charAt(a)||l("'")?c+=e.charAt(a):h=!1;else switch(e.charAt(a)){case"d":c+=u("d",t.getDate(),2);break;case"D":c+=d("D",t.getDay(),n,s);break;case"o":c+=u("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":c+=u("m",t.getMonth()+1,2);break;case"M":c+=d("M",t.getMonth(),r,o);break;case"y":c+=l("y")?t.getFullYear():(t.getFullYear()%100<10?"0":"")+t.getFullYear()%100;break;case"@":c+=t.getTime();break;case"!":c+=1e4*t.getTime()+this._ticksTo1970;break;case"'":l("'")?c+="'":h=!0;break;default:c+=e.charAt(a)}return c},/* Extract all possible characters from the date format. */
_possibleChars:function(e){var t,i="",a=!1,
// Check whether a format character is doubled
n=function(i){var a=t+1<e.length&&e.charAt(t+1)===i;return a&&t++,a};for(t=0;t<e.length;t++)if(a)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):a=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;// Accept anything
case"'":n("'")?i+="'":a=!0;break;default:i+=e.charAt(t)}return i},/* Get a setting value, defaulting if necessary. */
_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},/* Parse existing date and initialise date picker. */
_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),a=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),s=n,r=this._getFormatConfig(e);try{s=this.parseDate(i,a,r)||n}catch(e){a=t?"":a}e.selectedDay=s.getDate(),e.drawMonth=e.selectedMonth=s.getMonth(),e.drawYear=e.selectedYear=s.getFullYear(),e.currentDay=a?s.getDate():0,e.currentMonth=a?s.getMonth():0,e.currentYear=a?s.getFullYear():0,this._adjustInstDate(e)}},/* Retrieve the default date shown on opening. */
_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},/* A date may be specified as an exact value or a relative one. */
_determineDate:function(t,i,a){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},s=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(e){}for(var a=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,n=a.getFullYear(),s=a.getMonth(),r=a.getDate(),o=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=o.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":s+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(n,s));break;case"y":case"Y":n+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(n,s))}l=o.exec(i)}return new Date(n,s,r)},r=null==i||""===i?a:"string"==typeof i?s(i):"number"==typeof i?isNaN(i)?a:n(i):new Date(i.getTime());return r=r&&"Invalid Date"===r.toString()?a:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},/* Set the date(s) directly. */
_setDate:function(e,t,i){var a=!t,n=e.selectedMonth,s=e.selectedYear,r=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=r.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=r.getMonth(),e.drawYear=e.selectedYear=e.currentYear=r.getFullYear(),n===e.selectedMonth&&s===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(a?"":this._formatDate(e))},/* Retrieve the date(s) directly. */
_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
_attachHandlers:function(t){var i=this._get(t,"stepMonths"),a="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(a,-i,"M")},next:function(){e.datepicker._adjustDate(a,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(a)},selectDay:function(){return e.datepicker._selectDay(a,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(a,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(a,this,"Y"),!1}};e(this).on(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},/* Generate the HTML for the current state of the date picker. */
_generateHTML:function(e){var t,i,a,n,s,r,o,l,u,d,c,h,p,f,g,m,v,y,_,w,k,C,b,D,M,N,S,x,I,T,A,E,O,P,F,L,Y,j,B,V=new Date,$=this._daylightSavingAdjust(new Date(V.getFullYear(),V.getMonth(),V.getDate())),// clear time
H=this._get(e,"isRTL"),R=this._get(e,"showButtonPanel"),W=this._get(e,"hideIfNoPrevNext"),U=this._get(e,"navigationAsDateFormat"),K=this._getNumberOfMonths(e),z=this._get(e,"showCurrentAtPos"),q=this._get(e,"stepMonths"),Q=1!==K[0]||1!==K[1],G=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),J=this._getMinMaxDate(e,"min"),X=this._getMinMaxDate(e,"max"),Z=e.drawMonth-z,ee=e.drawYear;if(Z<0&&(Z+=12,ee--),X)for(t=this._daylightSavingAdjust(new Date(X.getFullYear(),X.getMonth()-K[0]*K[1]+1,X.getDate())),t=J&&t<J?J:t;this._daylightSavingAdjust(new Date(ee,Z,1))>t;)Z--,Z<0&&(Z=11,ee--);for(e.drawMonth=Z,e.drawYear=ee,i=this._get(e,"prevText"),i=U?this.formatDate(i,this._daylightSavingAdjust(new Date(ee,Z-q,1)),this._getFormatConfig(e)):i,a=this._canAdjustMonth(e,-1,ee,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(H?"e":"w")+"'>"+i+"</span></a>":W?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(H?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=U?this.formatDate(n,this._daylightSavingAdjust(new Date(ee,Z+q,1)),this._getFormatConfig(e)):n,s=this._canAdjustMonth(e,1,ee,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(H?"w":"e")+"'>"+n+"</span></a>":W?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(H?"w":"e")+"'>"+n+"</span></a>",r=this._get(e,"currentText"),o=this._get(e,"gotoCurrent")&&e.currentDay?G:$,r=U?this.formatDate(r,o,this._getFormatConfig(e)):r,l=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",u=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(H?l:"")+(this._isInRange(e,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(H?"":l)+"</div>":"",d=parseInt(this._get(e,"firstDay"),10),d=isNaN(d)?0:d,c=this._get(e,"showWeek"),h=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),g=this._get(e,"monthNamesShort"),m=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),_=this._getDefaultDate(e),w="",C=0;C<K[0];C++){for(b="",this.maxRows=4,D=0;D<K[1];D++){if(M=this._daylightSavingAdjust(new Date(ee,Z,e.selectedDay)),N=" ui-corner-all",S="",Q){if(S+="<div class='ui-datepicker-group",K[1]>1)switch(D){case 0:S+=" ui-datepicker-group-first",N=" ui-corner-"+(H?"right":"left");break;case K[1]-1:S+=" ui-datepicker-group-last",N=" ui-corner-"+(H?"left":"right");break;default:S+=" ui-datepicker-group-middle",N=""}S+="'>"}for(S+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+N+"'>"+(/all|left/.test(N)&&0===C?H?s:a:"")+(/all|right/.test(N)&&0===C?H?a:s:"")+this._generateMonthYearHeader(e,Z,ee,J,X,C>0||D>0,f,g)+// draw month headers
"</div><table class='ui-datepicker-calendar'><thead><tr>",x=c?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",k=0;k<7;k++)// days of the week
I=(k+d)%7,x+="<th scope='col'"+((k+d+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+h[I]+"'>"+p[I]+"</span></th>";for(S+=x+"</tr></thead><tbody>",T=this._getDaysInMonth(ee,Z),ee===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,T)),A=(this._getFirstDayOfMonth(ee,Z)-d+7)%7,E=Math.ceil((A+T)/7),// calculate the number of rows to generate
O=Q&&this.maxRows>E?this.maxRows:E,//If multiple months, use the higher number of rows (see #7043)
this.maxRows=O,P=this._daylightSavingAdjust(new Date(ee,Z,1-A)),F=0;F<O;F++){for(// create date picker rows
S+="<tr>",L=c?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(P)+"</td>":"",k=0;k<7;k++)// create date picker days
Y=m?m.apply(e.input?e.input[0]:null,[P]):[!0,""],j=P.getMonth()!==Z,B=j&&!y||!Y[0]||J&&P<J||X&&P>X,L+="<td class='"+((k+d+6)%7>=5?" ui-datepicker-week-end":"")+(// highlight weekends
j?" ui-datepicker-other-month":"")+(// highlight days from other months
P.getTime()===M.getTime()&&Z===e.selectedMonth&&e._keyEvent||// user pressed key
_.getTime()===P.getTime()&&_.getTime()===M.getTime()?
// or defaultDate is current printedDate and defaultDate is selectedDate
" "+this._dayOverClass:"")+(// highlight selected day
B?" "+this._unselectableClass+" ui-state-disabled":"")+(// highlight unselectable days
j&&!v?"":" "+Y[1]+(// highlight custom dates
P.getTime()===G.getTime()?" "+this._currentClass:"")+(// highlight selected day
P.getTime()===$.getTime()?" ui-datepicker-today":""))+"'"+(// highlight today (if different)
j&&!v||!Y[2]?"":" title='"+Y[2].replace(/'/g,"&#39;")+"'")+(// cell title
B?"":" data-handler='selectDay' data-event='click' data-month='"+P.getMonth()+"' data-year='"+P.getFullYear()+"'")+">"+(// actions
j&&!v?"&#xa0;":// display for other months
B?"<span class='ui-state-default'>"+P.getDate()+"</span>":"<a class='ui-state-default"+(P.getTime()===$.getTime()?" ui-state-highlight":"")+(P.getTime()===G.getTime()?" ui-state-active":"")+(// highlight selected day
j?" ui-priority-secondary":"")+// distinguish dates from other months
"' href='#'>"+P.getDate()+"</a>")+"</td>",// display selectable date
P.setDate(P.getDate()+1),P=this._daylightSavingAdjust(P);S+=L+"</tr>"}Z++,Z>11&&(Z=0,ee++),S+="</tbody></table>"+(Q?"</div>"+(K[0]>0&&D===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),b+=S}w+=b}return w+=u,e._keyEvent=!1,w},/* Generate the month and year header. */
_generateMonthYearHeader:function(e,t,i,a,n,s,r,o){var l,u,d,c,h,p,f,g,m=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),_="<div class='ui-datepicker-title'>",w="";
// Month selection
if(s||!m)w+="<span class='ui-datepicker-month'>"+r[t]+"</span>";else{for(l=a&&a.getFullYear()===i,u=n&&n.getFullYear()===i,w+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",d=0;d<12;d++)(!l||d>=a.getMonth())&&(!u||d<=n.getMonth())&&(w+="<option value='"+d+"'"+(d===t?" selected='selected'":"")+">"+o[d]+"</option>");w+="</select>"}
// Year selection
if(y||(_+=w+(!s&&m&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",s||!v)_+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(
// determine range of years to display
c=this._get(e,"yearRange").split(":"),h=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?h+parseInt(e,10):parseInt(e,10);return isNaN(t)?h:t},f=p(c[0]),g=Math.max(f,p(c[1]||"")),f=a?Math.max(f,a.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";f<=g;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",_+=e.yearshtml,e.yearshtml=null}// Close datepicker_header
return _+=this._get(e,"yearSuffix"),y&&(_+=(!s&&m&&v?"":"&#xa0;")+w),_+="</div>"},/* Adjust one of the date sub-fields. */
_adjustInstDate:function(e,t,i){var a=e.selectedYear+("Y"===i?t:0),n=e.selectedMonth+("M"===i?t:0),s=Math.min(e.selectedDay,this._getDaysInMonth(a,n))+("D"===i?t:0),r=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(a,n,s)));e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),"M"!==i&&"Y"!==i||this._notifyChange(e)},/* Ensure a date is within any min/max bounds. */
_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),n=i&&t<i?i:t;return a&&n>a?a:n},/* Notify change of month/year. */
_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},/* Determine the number of months to show. */
_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},/* Determine the current maximum date - ensure no time components are set. */
_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},/* Find the number of days in a given month. */
_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},/* Find the day of the week of the first of a month. */
_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},/* Determines if we should allow a "next/prev" month display change. */
_canAdjustMonth:function(e,t,i,a){var n=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(i,a+(t<0?t:n[0]*n[1]),1));return t<0&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(e,s)},/* Is the given date in the accepted range? */
_isInRange:function(e,t){var i,a,n=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),r=null,o=null,l=this._get(e,"yearRange");return l&&(i=l.split(":"),a=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=a),i[1].match(/[+\-].*/)&&(o+=a)),(!n||t.getTime()>=n.getTime())&&(!s||t.getTime()<=s.getTime())&&(!r||t.getFullYear()>=r)&&(!o||t.getFullYear()<=o)},/* Provide the configuration settings for formatting/parsing. */
_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},/* Format the given date for display. */
_formatDate:function(e,t,i,a){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(a,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
e.fn.datepicker=function(t){/* Verify an empty collection wasn't passed - Fixes #6976 */
if(!this.length)return this;/* Initialise the date picker. */
e.datepicker.initialized||(e(document).on("mousedown",e.datepicker._checkExternalClick),e.datepicker.initialized=!0),/* Append datepicker main container to body if not exist. */
0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new i,// singleton instance
e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.12.1";e.datepicker}),function(e){"use strict";var t=e.jQuery,i=e.LCC||{};i.Modules=i.Modules||{},i.Modules.BackToTop=function(){this.start=function(i){
// browser window scroll (in pixels) after which the "back to top" link is shown
var a=i.data("offset")?i.data("offset"):300,
//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
n=i.data("offset-opacity")?i.data("offset-opacity"):1200,
//duration of the top scrolling animation (in ms)
s=i.data("scroll-top-duration")?i.data("scroll-top-duration"):700;
//hide or show the "back to top" link
t(e).scroll(function(){t(this).scrollTop()>a?i.addClass("cd-is-visible"):i.removeClass("cd-is-visible cd-fade-out"),t(this).scrollTop()>n&&i.addClass("cd-fade-out")}),
//smooth scroll to top
i.on("click",function(e){e.preventDefault(),t("body,html").animate({scrollTop:0},s)})}},e.LCC=i}(window),function(e,t){"use strict";var i=e.LCC||{};i.Modules=i.Modules||{},i.Modules.Accordion=function(){this.start=function(e){var i=e.data("accordion-drawer-panel")?e.data("accordion-drawer-panel"):".accordion-drawer a ~ div",a=e.data("accordion-drawer-header")?e.data("accordion-drawer-header"):".accordion-drawer > a";t(e).find(i).hide(),t(e).find(a).on("click",function(){return t(this).toggleClass("active"),t(this).next("div").slideToggle(),"Click to expand"===t(this).children().find("#tooltip").text()?t(this).children().find("#tooltip").text("Click to hide"):t(this).children().find("#tooltip").text("Click to expand"),!1})}},e.LCC=i}(window,jQuery),function(e,t){"use strict";var i=e.LCC||{};i.Modules=i.Modules||{},
//relies on bootstrap so make sure bootstrap is loaded before this module is used                          
i.Modules.Carousel=function(){this.start=function(e){if(t(e).find("ol.carousel-indicators").length){var i=t(e).find("ol.carousel-indicators");t(e).find(".item").each(function(t){i.append('<li data-target="#'+e[0].id+'" data-slide-to="'+t+'" class="'+(0===t?"active":"")+'"></li>')})}
//add prev button
e.find(".carousel-inner").append('<a class="left carousel-control" href="#'+e[0].id+'" data-slide="prev"><span class="icon-prev"><span class="sr-only">Previous slide</span></span></a>'),
//add next button
e.find(".carousel-inner").append('<a class="right carousel-control" href="#'+e[0].id+'" data-slide="next"><span class="icon-next"></span><span class="sr-only">Next slide</span></a>'),
//add play and pause button
e.find(".carousel-inner").append('<div id="carouselButtons">                                                 <button id="playButton" type="button" class="btn btn-default btn-sm">                                                     <span class="glyphicon glyphicon-play"></span>                                                     <span class="sr-only">Play carousel</span>                                                 </button>                                                 <button id="pauseButton" type="button" class="btn btn-default btn-sm">                                                     <span class="glyphicon glyphicon-pause"></span>                                                     <span class="sr-only">Pause carousel</span>                                                 </button>                                             </div>'),t(e).find(".item:first-child").addClass("active"),
//add events
t(e).find("#playButton").click(function(){t(e).carousel("cycle")}),t(e).find("#pauseButton").click(function(){t(e).carousel("pause")})}},e.LCC=i}(window,jQuery),function(e,t){"use strict";var i=e.LCC||{};i.Modules=i.Modules||{},i.Modules.ScrollTo=function(){this.start=function(e){
// bind a click event to the 'skip' link
t(e).click(function(e){var i="#"+this.href.split("#")[1];t("body, html").animate({scrollTop:t(i).offset().top},600,function(){t(i).attr("tabindex","-1").on("blur focusout",function(){
// when focus leaves this element, 
// remove the tabindex attribute
t(this).removeAttr("tabindex")}).focus()})})}},e.LCC=i}(window,jQuery),function(e,t){"use strict";var i=e.LCC||{};i.Modules=i.Modules||{},i.Modules.PreventDefault=function(){this.start=function(e){var t=e.data("prevent-default-children")?e.data("prevent-default-children"):"";""!==t?e.find(t).on("click",function(e){return e.preventDefault(),!0}):e.on("click",function(e){return e.preventDefault(),!0})}},e.LCC=i}(window,jQuery);