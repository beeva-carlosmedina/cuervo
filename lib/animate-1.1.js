(function(C){var D=0,f=window.performance||{};Function.bind||(Function.prototype.bind=function(){var a=this,c=Array.prototype.slice.call(arguments),b=c.shift();return function(){return a.apply(b,c.concat(Array.prototype.slice.call(arguments)))}});var d=function(a){return function(){for(var c=document.createElement("div").style,b=a.prefix.split(","),e,d=0,f=b.length;d<f;d++)if(e=b[d]+a.words,e in c)return b[d].substr(0,b[d].length-1);return!1}},e=function(a,c){var b=c();if(""===b)return a;a=a.charAt(0).toUpperCase()+
a.substr(1);return b+a},F=function(a,c){var b=c();if(""===b)return a;a=a.charAt(0)+a.substr(1);return b+a},G=d({prefix:"r,webkitR,MozR,msR,OR",words:"equestAnimationFrame"}),z=d({prefix:"t,webkitT,MozT,msT,OT",words:"ransform"}),g=d({prefix:"t,webkitT,MozT,msT,OT",words:"ransition"}),k=d({prefix:"a,webkitA,MozA,msA,OA",words:"nimation"}),H=d({prefix:"a,-webkit-a,-moz-a,-ms-a,-o-a",words:"nimation"}),s=function(a,c,b){a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent("on"+c,function(){b.call(a,
window.event)})},A=function(a,c){for(var b in c)a[b]=c[b];return a},B=function(a,c){if(a.indexOf)return a.indexOf(c);for(var b=0,e;e=a[b];b++)if(e===c)return b;return-1},t=window[e("requestAnimationFrame",G)]||function(a){setTimeout(a,17)},d=document.createElement("style");d.setAttribute("id","ex_animate_style");d.type="text/css";document.getElementsByTagName("head")[0].appendChild(d);d=function(){this._init.apply(this,arguments)};d.prototype={css:document.getElementById("ex_animate_style"),_keywords:["point",
"timing"],_events:[],_method:null,_currentFrame:0,_needStop:!1,_init:function(a,c){c=c||{};this.elem=a;this.options=A({},c);this.events={};this.keyframes=[];this.keyframesString=[];this.uniqId=++D;var b=document.createElement("div").style;e("transform",z);var d=e("transition",g),f=e("animation",k);d in b&&(this.options.transition=!0);f in b&&(this.options.animation=!0);this.options.animation&&(b=document.createTextNode(""),this.css.appendChild(b),this.keyframeElement=b)},setElement:function(a){this.elem=
a;return this},_getProperty:function(a){var c={},b;for(b in a)-1==B(this._keywords,b)&&(c[b]=a[b]);return c},keyframe:function(a){this.keyframes=this.keyframes.concat(a);return this},resetKeyFrames:function(){this.keyframes=[];return this},reset:function(){this.keyframes=[];this.elem.style[e("animation",k)]="";this.elem.style[e("transitionProperty",g)]="";this.elem.style[e("transitionTimingFunction",g)]="";this.elem.style[e("transitionDuration",g)]="";return this},start:function(a){var c=this;this._startOpt=
a=this._startOpt||A({timing:"linear"},a);null==this._startOpt.repeat&&(this._startOpt.repeat=1);this._startOpt.repeat*=1;this._startOpt.delay=this._startOpt.delay||"0s";var b=function(c){var a="{",b=0,e;for(e in c)0<b++&&(a+=";"),a=a+e+":"+c[e];return a+"}"};this._currentFrame=0;var d=function(){for(var d=this.keyframes[this.keyframes.length-1].point,f="key"+this.uniqId,l="{",g=0,n;n=this.keyframes[g];g++)l+=Math.round(n.point/d*100)+"% "+b(this._getProperty(n));l+="}";l="@"+F("keyframes",H)+" "+
f+l;l!=this.keyframeElement.data&&(this.keyframeElement.data=l);this.elem.style[e("animation",k)]=f+" "+d+"ms "+a.timing;var d=this._getProperty(this.keyframes[this.keyframes.length-1]),x;for(x in d)this.elem.style[x]=d[x];this._startOpt.repeat&&(this.elem.style[e("animationIterationCount",k)]=this._startOpt.repeat);this._startOpt.delay&&(this.elem.style[e("animationDelay",k)]=this._startOpt.delay);this._startOpt.direction&&(this.elem.style[e("animationDirection",k)]=this._startOpt.direction);s(this.elem,
e("animationEnd",k),function(a){c.events.animationEnd&&c.events.animationEnd.bind(c)(a)})},q=function(){var b=this._currentFrame,d=function(c,b){for(var d=[c,b],f=[],l=0;1>=l;l++){var n=this._getProperty(d[l]),h;for(h in n)-1==B(f,h)&&f.push(h)}this.elem.style[e("transitionDuration",g)]=0;d=this._getProperty(c);for(h in d)this.elem.style[h]=d[h];this.elem.style[e("transitionProperty",g)]=f.join(",");this.elem.style[e("transitionTimingFunction",g)]=a.timing;a.accelerate&&(this.elem.style[e("transform",
z)]="translateZ(0)");this.elem.offsetWidth;this.elem.style[e("transitionDuration",g)]=(b.point-c.point)/1E3+"s";f=this._getProperty(b);for(h in f)this.elem.style[h]=f[h]};if(1==this.keyframes.length){var f=this.keyframes[0];0<f.point&&this.keyframes.unshift({point:0})}if(1<this.keyframes.length){var f=this.keyframes[0],k=this.keyframes[1],n=e("transitionDelay",g);d.bind(this)(f,k);c._startOpt.delay&&(c.elem.style[n]=c._startOpt.delay);b++;s(this.elem,e("transitionend",g),function(a){!c.keyframes[b+
1]&&1<c._startOpt.repeat&&(b=0,/number/i.test(typeof c._startOpt.repeat)&&c._startOpt.repeat--);if(c.keyframes[b+1]){a=c.keyframes[b];var e=c.keyframes[b+1];0!==c.elem.style[n]&&(c.elem.style[n]=0);d.bind(c)(a,e);b++}else c.events.animationEnd&&c.events.animationEnd.bind(c)(a)})}},r=function(){var a=0,b=this._startOpt.delay.replace?1*this._startOpt.delay.replace(/[^\.\d]/g,""):this._startOpt.delay,d=function(e,g){var k=[],p=this._getProperty(e),u=this._getProperty(g),m;for(m in p)if(null!=u[m]){if(/[\(\)]/.test(p[m])){console.error("time\u6a21\u5f0f\u4e0d\u652f\u6301\u8fd9\u79cd\u6837\u5f0f:"+
p[m]+"\uff0c\u8bf7\u4f7f\u7528animation\u6216\u8005transition\u6a21\u5f0f");return}var s=parseFloat(p[m].toString().replace(/[^\d+]/g,"")),E=parseFloat(u[m].toString().replace(/[^\d+]/g,""));k.push({prop:m,start:s,end:E,unit:("0"==u[m]?p[m]:u[m]).toString().replace(/[\D]*\d+(?=[a-z]*)/gi,"")})}var h=function(a){for(var c=0,b;b=k[c];c++)if(-1==a)/opacity/i.test(b.prop)&&(this.elem.style.filter="alpha(opacity="+100*b.end+")"),this.elem.style[b.prop]=b.end+b.unit;else{var d=(b.start+(b.end-b.start)*
a).toFixed(1);/opacity/i.test(b.prop)&&(this.elem.style.filter="alpha(opacity="+100*d+")");this.elem.style[b.prop]=d+b.unit}},q=function(){this.keyframes[a+1]?(d.bind(this)(this.keyframes[a],this.keyframes[a+1]),a++):1<this._startOpt.repeat?/number/i.test(typeof this._startOpt.repeat)&&(this._startOpt.repeat--,a=0,q.call(this)):c.events.animationEnd&&c.events.animationEnd.bind(c)()};h.bind(this)(0);1==this.keyframes.length&&(e=this.keyframes[0],0<e.point&&this.keyframes.unshift({point:0}));var r=
g.point-e.point,y=0,w=function(){var a=(f.now?f.now():+new Date)-v-y;h.bind(c)(a/r);if(a<r)if(c._needStop){var b=f.now?f.now():+new Date;y=0;c._continueFunc=function(){y=(f.now?f.now():+new Date)-b;t(w)}}else t(w);else h.bind(c)(-1),q.bind(c)()},v=0;this._startOpt.delay&&!this._isDelayed?(f.now?v=f.now()+1E3*b:(p=new Date,v=+p.setMilliseconds(p.getMilliseconds()+1E3*b)),setTimeout(function(){c._isDelayed=!0;t(w)},1E3*b)):(v=f.now?f.now():+new Date,t(w))};this._currentFrame=a;d.bind(this)(this.keyframes[a],
this.keyframes[a+1]);a++};if(a.method)switch(a.method){case "animation":this.options.animation?d.bind(this)():console.error("your browser does not support animation method.");break;case "transition":this.options.transition?q.bind(this)():console.error("your browser does not support transition method.");break;case "time":r.bind(this)()}else this.options.transition?q.bind(this)():this.options.animation?d.bind(this)():r.bind(this)();return this},clear:function(){for(var a=0,c=this.keyframes.length;a<
c;a++){var b=this._getProperty(this.keyframes[a]),d;for(d in b)this.elem.style[d]=""}return this},on:function(a,c){"animationend"==a?this.events.animationEnd=c:s(this.elem,a,c);return this},stop:function(){this._needStop=!0;this._currentFrame=0;return this},pause:function(){this._needStop=!0;return this},continuePlay:function(){!0==this._needStop&&(this._startOpt&&"time"==this._startOpt.method?(this._needStop=!1,this._continueFunc&&this._continueFunc(),this._continueFunc=null):(this._needStop=!1,
this.clear(),this.start()));return this}};C.Animate=d})(window);