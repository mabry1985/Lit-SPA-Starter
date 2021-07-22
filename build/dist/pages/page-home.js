import"../../chunk-WBVK3N4J.js";import{a as k,b as w,c as g,e as b}from"../../chunk-5N5HCB7M.js";function q(r,e,t,i){var a=f();if(i)for(var s=0;s<i.length;s++)a=i[s](a);var n=e(function(l){a.initializeInstanceElements(l,o.elements)},t),o=a.decorateClass(P(n.d.map(E)),r);return a.initializeClassElements(n.F,o.elements),a.runClassFinishers(n.F,o.finishers)}function f(){f=function(){return r};var r={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(a){a.kind===i&&a.placement==="own"&&this.defineClassElement(e,a)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(a){t.forEach(function(s){var n=s.placement;if(s.kind===a&&(n==="static"||n==="prototype")){var o=n==="static"?e:i;this.defineClassElement(o,s)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if(t.kind==="field"){var a=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:a===void 0?void 0:a.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],a=[],s={static:[],prototype:[],own:[]};if(e.forEach(function(o){this.addElementPlacement(o,s)},this),e.forEach(function(o){if(!c(o))return i.push(o);var u=this.decorateElement(o,s);i.push(u.element),i.push.apply(i,u.extras),a.push.apply(a,u.finishers)},this),!t)return{elements:i,finishers:a};var n=this.decorateConstructor(i,t);return a.push.apply(a,n.finishers),n.finishers=a,n},addElementPlacement:function(e,t,i){var a=t[e.placement];if(!i&&a.indexOf(e.key)!==-1)throw new TypeError("Duplicated element ("+e.key+")");a.push(e.key)},decorateElement:function(e,t){for(var i=[],a=[],s=e.decorators,n=s.length-1;n>=0;n--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var u=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,s[n])(u)||u);e=l.element,this.addElementPlacement(e,t),l.finisher&&a.push(l.finisher);var d=l.extras;if(d){for(var p=0;p<d.length;p++)this.addElementPlacement(d[p],t);i.push.apply(i,d)}}return{element:e,finishers:a,extras:i}},decorateConstructor:function(e,t){for(var i=[],a=t.length-1;a>=0;a--){var s=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[a])(s)||s);if(n.finisher!==void 0&&i.push(n.finisher),n.elements!==void 0){e=n.elements;for(var o=0;o<e.length-1;o++)for(var u=o+1;u<e.length;u++)if(e[o].key===e[u].key&&e[o].placement===e[u].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor},i={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,i),e.kind==="field"&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(e!==void 0)return D(e).map(function(t){var i=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),i},this)},toElementDescriptor:function(e){var t=String(e.kind);if(t!=="method"&&t!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+t+'"');var i=v(e.key),a=String(e.placement);if(a!=="static"&&a!=="prototype"&&a!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+a+'"');var s=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:a,descriptor:Object.assign({},s)};return t!=="field"?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(s,"get","The property descriptor of a field descriptor"),this.disallowProperty(s,"set","The property descriptor of a field descriptor"),this.disallowProperty(s,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=m(e,"finisher"),a=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:a}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)},i={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,i),t},toClassDescriptor:function(e){var t=String(e.kind);if(t!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=m(e,"finisher"),a=this.toElementDescriptors(e.elements);return{elements:a,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var a=(0,t[i])(e);if(a!==void 0){if(typeof a!="function")throw new TypeError("Finishers must return a constructor.");e=a}}return e},disallowProperty:function(e,t,i){if(e[t]!==void 0)throw new TypeError(i+" can't have a ."+t+" property.")}};return r}function E(r){var e=v(r.key),t;r.kind==="method"?t={value:r.value,writable:!0,configurable:!0,enumerable:!1}:r.kind==="get"?t={get:r.value,configurable:!0,enumerable:!1}:r.kind==="set"?t={set:r.value,configurable:!0,enumerable:!1}:r.kind==="field"&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:r.kind==="field"?"field":"method",key:e,placement:r.static?"static":r.kind==="field"?"own":"prototype",descriptor:t};return r.decorators&&(i.decorators=r.decorators),r.kind==="field"&&(i.initializer=r.value),i}function S(r,e){r.descriptor.get!==void 0?e.descriptor.get=r.descriptor.get:e.descriptor.set=r.descriptor.set}function P(r){for(var e=[],t=function(n){return n.kind==="method"&&n.key===a.key&&n.placement===a.placement},i=0;i<r.length;i++){var a=r[i],s;if(a.kind==="method"&&(s=e.find(t)))if(h(a.descriptor)||h(s.descriptor)){if(c(a)||c(s))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");s.descriptor=a.descriptor}else{if(c(a)){if(c(s))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");s.decorators=a.decorators}S(a,s)}else e.push(a)}return e}function c(r){return r.decorators&&r.decorators.length}function h(r){return r!==void 0&&!(r.value===void 0&&r.writable===void 0)}function m(r,e){var t=r[e];if(t!==void 0&&typeof t!="function")throw new TypeError("Expected '"+e+"' to be a function");return t}function v(r){var e=A(r,"string");return typeof e=="symbol"?e:String(e)}function A(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function D(r){return x(r)||_(r)||T(r)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(r,e){if(!!r){if(typeof r=="string")return y(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(r,e)}}function y(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}function _(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function x(r){if(Array.isArray(r))return r}var I=q([k("page-home")],function(r,e){class t extends e{constructor(...a){super(...a);r(this)}}return{F:t,d:[{kind:"field",static:!0,key:"styles",value(){return[w]}},{kind:"method",key:"render",value:function(){return g`
      <section>
        <page-title>Home</page-title>

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

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>

        <p>Here you can see <a href="/error">the not found page</a>.</p>
      </section>
    `}}]}},b);export{I as PageHome};
//# sourceMappingURL=page-home.js.map
