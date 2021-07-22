import"../../chunk-WBVK3N4J.js";import{a as k,b as w,c as g,e as b}from"../../chunk-5N5HCB7M.js";function q(i,e,t,r){var a=f();if(r)for(var s=0;s<r.length;s++)a=r[s](a);var n=e(function(l){a.initializeInstanceElements(l,o.elements)},t),o=a.decorateClass(P(n.d.map(E)),i);return a.initializeClassElements(n.F,o.elements),a.runClassFinishers(n.F,o.finishers)}function f(){f=function(){return i};var i={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(a){a.kind===r&&a.placement==="own"&&this.defineClassElement(e,a)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(a){t.forEach(function(s){var n=s.placement;if(s.kind===a&&(n==="static"||n==="prototype")){var o=n==="static"?e:r;this.defineClassElement(o,s)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if(t.kind==="field"){var a=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:a===void 0?void 0:a.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],a=[],s={static:[],prototype:[],own:[]};if(e.forEach(function(o){this.addElementPlacement(o,s)},this),e.forEach(function(o){if(!c(o))return r.push(o);var u=this.decorateElement(o,s);r.push(u.element),r.push.apply(r,u.extras),a.push.apply(a,u.finishers)},this),!t)return{elements:r,finishers:a};var n=this.decorateConstructor(r,t);return a.push.apply(a,n.finishers),n.finishers=a,n},addElementPlacement:function(e,t,r){var a=t[e.placement];if(!r&&a.indexOf(e.key)!==-1)throw new TypeError("Duplicated element ("+e.key+")");a.push(e.key)},decorateElement:function(e,t){for(var r=[],a=[],s=e.decorators,n=s.length-1;n>=0;n--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var u=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,s[n])(u)||u);e=l.element,this.addElementPlacement(e,t),l.finisher&&a.push(l.finisher);var d=l.extras;if(d){for(var p=0;p<d.length;p++)this.addElementPlacement(d[p],t);r.push.apply(r,d)}}return{element:e,finishers:a,extras:r}},decorateConstructor:function(e,t){for(var r=[],a=t.length-1;a>=0;a--){var s=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[a])(s)||s);if(n.finisher!==void 0&&r.push(n.finisher),n.elements!==void 0){e=n.elements;for(var o=0;o<e.length-1;o++)for(var u=o+1;u<e.length;u++)if(e[o].key===e[u].key&&e[o].placement===e[u].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor},r={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,r),e.kind==="field"&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(e!==void 0)return D(e).map(function(t){var r=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),r},this)},toElementDescriptor:function(e){var t=String(e.kind);if(t!=="method"&&t!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+t+'"');var r=v(e.key),a=String(e.placement);if(a!=="static"&&a!=="prototype"&&a!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+a+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:a,descriptor:Object.assign({},s)};return t!=="field"?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=m(e,"finisher"),a=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:a}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)},r={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,r),t},toClassDescriptor:function(e){var t=String(e.kind);if(t!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=m(e,"finisher"),a=this.toElementDescriptors(e.elements);return{elements:a,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var a=(0,t[r])(e);if(a!==void 0){if(typeof a!="function")throw new TypeError("Finishers must return a constructor.");e=a}}return e},disallowProperty:function(e,t,r){if(e[t]!==void 0)throw new TypeError(r+" can't have a ."+t+" property.")}};return i}function E(i){var e=v(i.key),t;i.kind==="method"?t={value:i.value,writable:!0,configurable:!0,enumerable:!1}:i.kind==="get"?t={get:i.value,configurable:!0,enumerable:!1}:i.kind==="set"?t={set:i.value,configurable:!0,enumerable:!1}:i.kind==="field"&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:i.kind==="field"?"field":"method",key:e,placement:i.static?"static":i.kind==="field"?"own":"prototype",descriptor:t};return i.decorators&&(r.decorators=i.decorators),i.kind==="field"&&(r.initializer=i.value),r}function A(i,e){i.descriptor.get!==void 0?e.descriptor.get=i.descriptor.get:e.descriptor.set=i.descriptor.set}function P(i){for(var e=[],t=function(n){return n.kind==="method"&&n.key===a.key&&n.placement===a.placement},r=0;r<i.length;r++){var a=i[r],s;if(a.kind==="method"&&(s=e.find(t)))if(h(a.descriptor)||h(s.descriptor)){if(c(a)||c(s))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");s.descriptor=a.descriptor}else{if(c(a)){if(c(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");s.decorators=a.decorators}A(a,s)}else e.push(a)}return e}function c(i){return i.decorators&&i.decorators.length}function h(i){return i!==void 0&&!(i.value===void 0&&i.writable===void 0)}function m(i,e){var t=i[e];if(t!==void 0&&typeof t!="function")throw new TypeError("Expected '"+e+"' to be a function");return t}function v(i){var e=S(i,"string");return typeof e=="symbol"?e:String(e)}function S(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function D(i){return x(i)||_(i)||T(i)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(i,e){if(!!i){if(typeof i=="string")return y(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(i,e)}}function y(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=i[t];return r}function _(i){if(typeof Symbol!="undefined"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function x(i){if(Array.isArray(i))return i}var I=q([k("page-about")],function(i,e){class t extends e{constructor(...a){super(...a);i(this)}}return{F:t,d:[{kind:"field",static:!0,key:"styles",value(){return[w]}},{kind:"method",key:"render",value:function(){return g`
      <section>
        <page-title>About</page-title>
        <p>
          Lorem ipsu m dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          efficitur blandit quam, non tincidunt mi semper ut. Vestibulum
          vestibulum justo at ipsum tristique gravida. Praesent fermentum arcu
          tellus, a eleifend elit sodales ac. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Curabitur et elit leo. Sed vestibulum
          diam eu diam volutpat venenatis. Donec molestie nunc mauris, non
          accumsan nisl rutrum ut. Etiam ac aliquet mi. Cras scelerisque purus
          placerat, vehicula tortor at, euismod felis. Sed consequat lacinia
          magna ac elementum. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Nullam sit amet nisl
          accumsan risus scelerisque pharetra non ut mauris. Donec vulputate
          bibendum lectus sed pellentesque. Pellentesque volutpat vel lacus sed
          luctus. Nunc convallis lobortis tellus. Suspendisse vitae justo a
          neque faucibus lobortis. Praesent tempor elit vitae magna viverra
          aliquet. Donec sodales leo lectus, a commodo arcu gravida a. Aenean
          vestibulum in velit vel molestie. Fusce nunc odio, tempus quis tortor
          sit amet, tempus vestibulum augue. Morbi lacinia commodo turpis vel
          venenatis. Etiam volutpat, metus at egestas tincidunt, sapien velit
          lacinia lectus, eu dignissim augue neque eu leo. Etiam vestibulum ex
          elit, et dapibus urna pellentesque vehicula. Aenean porttitor erat sit
          amet mi ultricies cursus. Etiam volutpat arcu eu nunc consequat
          feugiat. Curabitur ultricies convallis ligula at iaculis. Suspendisse
          tellus elit, tristique ac hendrerit vitae, vestibulum id augue. Donec
          felis felis, cursus sit amet vehicula nec, sagittis eget ligula.
          Curabitur sit amet enim leo. Vivamus egestas urna lorem, a interdum
          odio posuere vel. Suspendisse pharetra, orci vitae condimentum
          finibus, odio tortor facilisis arcu, laoreet tincidunt libero ex ac
          arcu. In et sapien vitae massa efficitur lacinia sed vel sapien.
          Praesent interdum arcu commodo, eleifend ligula sed, semper lorem.
          Aenean sit amet posuere turpis. Integer ut erat ut metus laoreet
          sodales. Nullam risus velit, sodales hendrerit nunc eget, sagittis
          sagittis tellus. Maecenas at lorem quam. Curabitur at lectus quam.
          Fusce facilisis porttitor nisi, blandit ultrices neque ornare ac.
          Quisque velit nunc, cursus ac mollis fermentum, volutpat in ligula.
          Aenean et quam eget nulla accumsan varius. Suspendisse potenti. Sed
          fringilla neque lacinia augue vehicula, eu iaculis sapien facilisis.
          Nullam tincidunt finibus est eu gravida. Proin consectetur sapien et
          suscipit finibus. Morbi neque nibh, eleifend a est vitae, porta
          lobortis lectus. Vivamus nec mi turpis. In pharetra leo eros, in
          scelerisque nibh tincidunt a. Fusce non eros eget felis imperdiet
          aliquam. Suspendisse sed hendrerit tellus. In rhoncus accumsan orci,
          sed aliquet odio suscipit ut. Ut dignissim nulla eu enim lobortis, et
          iaculis ligula sollicitudin. Mauris accumsan lectus mi, et vulputate
          velit vehicula sit amet. Pellentesque viverra ex placerat aliquam
          condimentum. Generated 5 paragraphs, 432 words, 2958 bytes of Lorem
          Ipsum
        </p>
      </section>
    `}}]}},b);export{I as PageAbout};
//# sourceMappingURL=page-about.js.map
