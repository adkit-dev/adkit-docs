module.exports=[33026,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"ReadonlyURLSearchParams",{enumerable:!0,get:function(){return e}});class d extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class e extends URLSearchParams{append(){throw new d}delete(){throw new d}set(){throw new d}sort(){throw new d}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},15942,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"RedirectStatusCode",{enumerable:!0,get:function(){return e}});var d,e=((d={})[d.SeeOther=303]="SeeOther",d[d.TemporaryRedirect=307]="TemporaryRedirect",d[d.PermanentRedirect=308]="PermanentRedirect",d);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},45480,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e={REDIRECT_ERROR_CODE:function(){return h},RedirectType:function(){return i},isRedirectError:function(){return j}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});let g=a.r(15942),h="NEXT_REDIRECT";var i=((d={}).push="push",d.replace="replace",d);function j(a){if("object"!=typeof a||null===a||!("digest"in a)||"string"!=typeof a.digest)return!1;let b=a.digest.split(";"),[c,d]=b,e=b.slice(2,-2).join(";"),f=Number(b.at(-2));return c===h&&("replace"===d||"push"===d)&&"string"==typeof e&&!isNaN(f)&&f in g.RedirectStatusCode}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},83250,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={getRedirectError:function(){return i},getRedirectStatusCodeFromError:function(){return n},getRedirectTypeFromError:function(){return m},getURLFromRedirectError:function(){return l},permanentRedirect:function(){return k},redirect:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(15942),g=a.r(45480),h=a.r(20635).actionAsyncStorage;function i(a,b,c=f.RedirectStatusCode.TemporaryRedirect){let d=Object.defineProperty(Error(g.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return d.digest=`${g.REDIRECT_ERROR_CODE};${b};${a};${c};`,d}function j(a,b){throw i(a,b??=h?.getStore()?.isAction?g.RedirectType.push:g.RedirectType.replace,f.RedirectStatusCode.TemporaryRedirect)}function k(a,b=g.RedirectType.replace){throw i(a,b,f.RedirectStatusCode.PermanentRedirect)}function l(a){return(0,g.isRedirectError)(a)?a.digest.split(";").slice(2,-2).join(";"):null}function m(a){if(!(0,g.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return a.digest.split(";",2)[1]}function n(a){if(!(0,g.isRedirectError)(a))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(a.digest.split(";").at(-2))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},28888,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={HTTPAccessErrorStatus:function(){return f},HTTP_ERROR_FALLBACK_ERROR_CODE:function(){return h},getAccessFallbackErrorTypeByStatus:function(){return k},getAccessFallbackHTTPStatus:function(){return j},isHTTPAccessFallbackError:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f={NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401},g=new Set(Object.values(f)),h="NEXT_HTTP_ERROR_FALLBACK";function i(a){if("object"!=typeof a||null===a||!("digest"in a)||"string"!=typeof a.digest)return!1;let[b,c]=a.digest.split(";");return b===h&&g.has(Number(c))}function j(a){return Number(a.digest.split(";")[1])}function k(a){switch(a){case 401:return"unauthorized";case 403:return"forbidden";case 404:return"not-found";default:return}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},9189,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"notFound",{enumerable:!0,get:function(){return f}});let d=a.r(28888),e=`${d.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;function f(){let a=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});throw a.digest=e,a}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},68620,(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"forbidden",{enumerable:!0,get:function(){return d}}),a.r(28888).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},93979,(a,b,c)=>{"use strict";function d(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unauthorized",{enumerable:!0,get:function(){return d}}),a.r(28888).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},83998,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={isHangingPromiseRejectionError:function(){return f},makeDevtoolsIOAwarePromise:function(){return l},makeHangingPromise:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===g}let g="HANGING_PROMISE_REJECTION";class h extends Error{constructor(a,b){super(`During prerendering, ${b} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${b} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${a}".`),this.route=a,this.expression=b,this.digest=g}}let i=new WeakMap;function j(a,b,c){if(a.aborted)return Promise.reject(new h(b,c));{let d=new Promise((d,e)=>{let f=e.bind(null,new h(b,c)),g=i.get(a);if(g)g.push(f);else{let b=[f];i.set(a,b),a.addEventListener("abort",()=>{for(let a=0;a<b.length;a++)b[a]()},{once:!0})}});return d.catch(k),d}}function k(){}function l(a,b,c){return b.stagedRendering?b.stagedRendering.delayUntilStage(c,void 0,a):new Promise(b=>{setTimeout(()=>{b(a)},0)})}},70514,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isPostpone",{enumerable:!0,get:function(){return e}});let d=Symbol.for("react.postpone");function e(a){return"object"==typeof a&&null!==a&&a.$$typeof===d}},80497,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={BailoutToCSRError:function(){return g},isBailoutToCSRError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="BAILOUT_TO_CLIENT_SIDE_RENDERING";class g extends Error{constructor(a){super(`Bail out to client-side rendering: ${a}`),this.reason=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===f}},92451,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isNextRouterError",{enumerable:!0,get:function(){return f}});let d=a.r(28888),e=a.r(45480);function f(a){return(0,e.isRedirectError)(a)||(0,d.isHTTPAccessFallbackError)(a)}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},93465,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={DynamicServerError:function(){return g},isDynamicServerError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="DYNAMIC_SERVER_USAGE";class g extends Error{constructor(a){super(`Dynamic server usage: ${a}`),this.description=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&"string"==typeof a.digest&&a.digest===f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},48258,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={StaticGenBailoutError:function(){return g},isStaticGenBailoutError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="NEXT_STATIC_GEN_BAILOUT";class g extends Error{constructor(...a){super(...a),this.code=f}}function h(a){return"object"==typeof a&&null!==a&&"code"in a&&a.code===f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},40988,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={METADATA_BOUNDARY_NAME:function(){return f},OUTLET_BOUNDARY_NAME:function(){return h},ROOT_LAYOUT_BOUNDARY_NAME:function(){return i},VIEWPORT_BOUNDARY_NAME:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="__next_metadata_boundary__",g="__next_viewport_boundary__",h="__next_outlet_boundary__",i="__next_root_layout_boundary__"},64482,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={atLeastOneTask:function(){return h},scheduleImmediate:function(){return g},scheduleOnNextTick:function(){return f},waitAtLeastOneReactRenderTask:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a=>{Promise.resolve().then(()=>{process.nextTick(a)})},g=a=>{setImmediate(a)};function h(){return new Promise(a=>g(a))}function i(){return new Promise(a=>setImmediate(a))}},74509,(a,b,c)=>{"use strict";function d(){let a,b,c=new Promise((c,d)=>{a=c,b=d});return{resolve:a,reject:b,promise:c}}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"createPromiseWithResolvers",{enumerable:!0,get:function(){return d}})},93933,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e={RenderStage:function(){return i},StagedRenderingController:function(){return j}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});let g=a.r(66087),h=a.r(74509);var i=((d={})[d.Static=1]="Static",d[d.Runtime=2]="Runtime",d[d.Dynamic=3]="Dynamic",d);class j{constructor(a=null){this.abortSignal=a,this.currentStage=1,this.runtimeStagePromise=(0,h.createPromiseWithResolvers)(),this.dynamicStagePromise=(0,h.createPromiseWithResolvers)(),a&&a.addEventListener("abort",()=>{let{reason:b}=a;this.currentStage<2&&(this.runtimeStagePromise.promise.catch(k),this.runtimeStagePromise.reject(b)),this.currentStage<3&&(this.dynamicStagePromise.promise.catch(k),this.dynamicStagePromise.reject(b))},{once:!0})}advanceStage(a){!(this.currentStage>=a)&&(this.currentStage=a,a>=2&&this.runtimeStagePromise.resolve(),a>=3&&this.dynamicStagePromise.resolve())}getStagePromise(a){switch(a){case 2:return this.runtimeStagePromise.promise;case 3:return this.dynamicStagePromise.promise;default:throw Object.defineProperty(new g.InvariantError(`Invalid render stage: ${a}`),"__NEXT_ERROR_CODE",{value:"E881",enumerable:!1,configurable:!0})}}waitForStage(a){return this.getStagePromise(a)}delayUntilStage(a,b,c){var d,e,f;let g,h=(d=this.getStagePromise(a),e=b,f=c,g=new Promise((a,b)=>{d.then(a.bind(null,f),b)}),void 0!==e&&(g.displayName=e),g);return this.abortSignal&&h.catch(k),h}}function k(){}},17165,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d,e,f={Postpone:function(){return D},PreludeState:function(){return Z},abortAndThrowOnSynchronousRequestDataAccess:function(){return C},abortOnSynchronousPlatformIOAccess:function(){return A},accessedDynamicData:function(){return L},annotateDynamicAccess:function(){return Q},consumeDynamicAccess:function(){return M},createDynamicTrackingState:function(){return t},createDynamicValidationState:function(){return u},createHangingInputAbortSignal:function(){return P},createRenderInBrowserAbortSignal:function(){return O},delayUntilRuntimeStage:function(){return aa},formatDynamicAPIAccesses:function(){return N},getFirstDynamicReason:function(){return v},isDynamicPostpone:function(){return G},isPrerenderInterruptedError:function(){return K},logDisallowedDynamicError:function(){return $},markCurrentScopeAsDynamic:function(){return w},postponeWithTracking:function(){return E},throwIfDisallowedDynamic:function(){return _},throwToInterruptStaticGeneration:function(){return x},trackAllowedDynamicAccess:function(){return Y},trackDynamicDataInDynamicRender:function(){return y},trackSynchronousPlatformIOAccessInDev:function(){return B},useDynamicRouteParams:function(){return R},useDynamicSearchParams:function(){return S}};for(var g in f)Object.defineProperty(c,g,{enumerable:!0,get:f[g]});let h=(d=a.r(10412))&&d.__esModule?d:{default:d},i=a.r(93465),j=a.r(48258),k=a.r(32319),l=a.r(56704),m=a.r(83998),n=a.r(40988),o=a.r(64482),p=a.r(80497),q=a.r(66087),r=a.r(93933),s="function"==typeof h.default.unstable_postpone;function t(a){return{isDebugDynamicAccesses:a,dynamicAccesses:[],syncDynamicErrorWithStack:null}}function u(){return{hasSuspenseAboveBody:!1,hasDynamicMetadata:!1,hasDynamicViewport:!1,hasAllowedDynamic:!1,dynamicErrors:[]}}function v(a){var b;return null==(b=a.dynamicAccesses[0])?void 0:b.expression}function w(a,b,c){if(b)switch(b.type){case"cache":case"unstable-cache":case"private-cache":return}if(!a.forceDynamic&&!a.forceStatic){if(a.dynamicShouldError)throw Object.defineProperty(new j.StaticGenBailoutError(`Route ${a.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${c}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E553",enumerable:!1,configurable:!0});if(b)switch(b.type){case"prerender-ppr":return E(a.route,c,b.dynamicTracking);case"prerender-legacy":b.revalidate=0;let d=Object.defineProperty(new i.DynamicServerError(`Route ${a.route} couldn't be rendered statically because it used ${c}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E550",enumerable:!1,configurable:!0});throw a.dynamicUsageDescription=c,a.dynamicUsageStack=d.stack,d}}}function x(a,b,c){let d=Object.defineProperty(new i.DynamicServerError(`Route ${b.route} couldn't be rendered statically because it used \`${a}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E558",enumerable:!1,configurable:!0});throw c.revalidate=0,b.dynamicUsageDescription=a,b.dynamicUsageStack=d.stack,d}function y(a){switch(a.type){case"cache":case"unstable-cache":case"private-cache":return}}function z(a,b,c){let d=J(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`);c.controller.abort(d);let e=c.dynamicTracking;e&&e.dynamicAccesses.push({stack:e.isDebugDynamicAccesses?Error().stack:void 0,expression:b})}function A(a,b,c,d){let e=d.dynamicTracking;z(a,b,d),e&&null===e.syncDynamicErrorWithStack&&(e.syncDynamicErrorWithStack=c)}function B(a){a.stagedRendering&&a.stagedRendering.advanceStage(r.RenderStage.Dynamic)}function C(a,b,c,d){if(!1===d.controller.signal.aborted){z(a,b,d);let e=d.dynamicTracking;e&&null===e.syncDynamicErrorWithStack&&(e.syncDynamicErrorWithStack=c)}throw J(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`)}function D({reason:a,route:b}){let c=k.workUnitAsyncStorage.getStore();E(b,a,c&&"prerender-ppr"===c.type?c.dynamicTracking:null)}function E(a,b,c){(function(){if(!s)throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E224",enumerable:!1,configurable:!0})})(),c&&c.dynamicAccesses.push({stack:c.isDebugDynamicAccesses?Error().stack:void 0,expression:b}),h.default.unstable_postpone(F(a,b))}function F(a,b){return`Route ${a} needs to bail out of prerendering at this point because it used ${b}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}function G(a){return"object"==typeof a&&null!==a&&"string"==typeof a.message&&H(a.message)}function H(a){return a.includes("needs to bail out of prerendering at this point because it used")&&a.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")}if(!1===H(F("%%%","^^^")))throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E296",enumerable:!1,configurable:!0});let I="NEXT_PRERENDER_INTERRUPTED";function J(a){let b=Object.defineProperty(Error(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return b.digest=I,b}function K(a){return"object"==typeof a&&null!==a&&a.digest===I&&"name"in a&&"message"in a&&a instanceof Error}function L(a){return a.length>0}function M(a,b){return a.dynamicAccesses.push(...b.dynamicAccesses),a.dynamicAccesses}function N(a){return a.filter(a=>"string"==typeof a.stack&&a.stack.length>0).map(({expression:a,stack:b})=>(b=b.split("\n").slice(4).filter(a=>!(a.includes("node_modules/next/")||a.includes(" (<anonymous>)")||a.includes(" (node:"))).join("\n"),`Dynamic API Usage Debug - ${a}:
${b}`))}function O(){let a=new AbortController;return a.abort(Object.defineProperty(new p.BailoutToCSRError("Render in Browser"),"__NEXT_ERROR_CODE",{value:"E721",enumerable:!1,configurable:!0})),a.signal}function P(a){switch(a.type){case"prerender":case"prerender-runtime":let b=new AbortController;if(a.cacheSignal)a.cacheSignal.inputReady().then(()=>{b.abort()});else{let c=(0,k.getRuntimeStagePromise)(a);c?c.then(()=>(0,o.scheduleOnNextTick)(()=>b.abort())):(0,o.scheduleOnNextTick)(()=>b.abort())}return b.signal;case"prerender-client":case"prerender-ppr":case"prerender-legacy":case"request":case"cache":case"private-cache":case"unstable-cache":return}}function Q(a,b){let c=b.dynamicTracking;c&&c.dynamicAccesses.push({stack:c.isDebugDynamicAccesses?Error().stack:void 0,expression:a})}function R(a){let b=l.workAsyncStorage.getStore(),c=k.workUnitAsyncStorage.getStore();if(b&&c)switch(c.type){case"prerender-client":case"prerender":{let d=c.fallbackRouteParams;d&&d.size>0&&h.default.use((0,m.makeHangingPromise)(c.renderSignal,b.route,a));break}case"prerender-ppr":{let d=c.fallbackRouteParams;if(d&&d.size>0)return E(b.route,a,c.dynamicTracking);break}case"prerender-runtime":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called during a runtime prerender. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E771",enumerable:!1,configurable:!0});case"cache":case"private-cache":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0})}}function S(a){let b=l.workAsyncStorage.getStore(),c=k.workUnitAsyncStorage.getStore();if(b)switch(!c&&(0,k.throwForMissingRequestStore)(a),c.type){case"prerender-client":h.default.use((0,m.makeHangingPromise)(c.renderSignal,b.route,a));break;case"prerender-legacy":case"prerender-ppr":if(b.forceStatic)return;throw Object.defineProperty(new p.BailoutToCSRError(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});case"prerender":case"prerender-runtime":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called from a Server Component. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E795",enumerable:!1,configurable:!0});case"cache":case"unstable-cache":case"private-cache":throw Object.defineProperty(new q.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0});case"request":return}}let T=/\n\s+at Suspense \(<anonymous>\)/,U=RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${n.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`),V=RegExp(`\\n\\s+at ${n.METADATA_BOUNDARY_NAME}[\\n\\s]`),W=RegExp(`\\n\\s+at ${n.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),X=RegExp(`\\n\\s+at ${n.OUTLET_BOUNDARY_NAME}[\\n\\s]`);function Y(a,b,c,d){if(!X.test(b)){if(V.test(b)){c.hasDynamicMetadata=!0;return}if(W.test(b)){c.hasDynamicViewport=!0;return}if(U.test(b)){c.hasAllowedDynamic=!0,c.hasSuspenseAboveBody=!0;return}else if(T.test(b)){c.hasAllowedDynamic=!0;return}else{var e,f;let g;if(d.syncDynamicErrorWithStack)return void c.dynamicErrors.push(d.syncDynamicErrorWithStack);let h=(e=`Route "${a.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,f=b,(g=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0})).stack=g.name+": "+e+f,g);return void c.dynamicErrors.push(h)}}}var Z=((e={})[e.Full=0]="Full",e[e.Empty=1]="Empty",e[e.Errored=2]="Errored",e);function $(a,b){console.error(b),a.dev||(a.hasReadableErrorStacks?console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${a.route}" in your browser to investigate the error.`):console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${a.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`))}function _(a,b,c,d){if(d.syncDynamicErrorWithStack)throw $(a,d.syncDynamicErrorWithStack),new j.StaticGenBailoutError;if(0!==b){if(c.hasSuspenseAboveBody)return;let d=c.dynamicErrors;if(d.length>0){for(let b=0;b<d.length;b++)$(a,d[b]);throw new j.StaticGenBailoutError}if(c.hasDynamicViewport)throw console.error(`Route "${a.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`),new j.StaticGenBailoutError;if(1===b)throw console.error(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`),new j.StaticGenBailoutError}else if(!1===c.hasAllowedDynamic&&c.hasDynamicMetadata)throw console.error(`Route "${a.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`),new j.StaticGenBailoutError}function aa(a,b){return a.runtimeStagePromise?a.runtimeStagePromise.then(()=>b):b}},90798,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unstable_rethrow",{enumerable:!0,get:function(){return function a(b){if((0,g.isNextRouterError)(b)||(0,f.isBailoutToCSRError)(b)||(0,i.isDynamicServerError)(b)||(0,h.isDynamicPostpone)(b)||(0,e.isPostpone)(b)||(0,d.isHangingPromiseRejectionError)(b)||(0,h.isPrerenderInterruptedError)(b))throw b;b instanceof Error&&"cause"in b&&a(b.cause)}}});let d=a.r(83998),e=a.r(70514),f=a.r(80497),g=a.r(92451),h=a.r(17165),i=a.r(93465);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},57490,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unstable_rethrow",{enumerable:!0,get:function(){return d}});let d=a.r(90798).unstable_rethrow;("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},71742,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={ReadonlyURLSearchParams:function(){return f.ReadonlyURLSearchParams},RedirectType:function(){return h.RedirectType},forbidden:function(){return j.forbidden},notFound:function(){return i.notFound},permanentRedirect:function(){return g.permanentRedirect},redirect:function(){return g.redirect},unauthorized:function(){return k.unauthorized},unstable_isUnrecognizedActionError:function(){return m},unstable_rethrow:function(){return l.unstable_rethrow}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(33026),g=a.r(83250),h=a.r(45480),i=a.r(9189),j=a.r(68620),k=a.r(93979),l=a.r(57490);function m(){throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."),"__NEXT_ERROR_CODE",{value:"E776",enumerable:!1,configurable:!0})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},87586,a=>{"use strict";let b=(0,a.i(70424).registerClientReference)(function(){throw Error("Attempted to call ReactInstallationPage() from the server but ReactInstallationPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/adkit-docs/components/docs/pages/react-installation.tsx <module evaluation>","ReactInstallationPage");a.s(["ReactInstallationPage",0,b])},27381,a=>{"use strict";let b=(0,a.i(70424).registerClientReference)(function(){throw Error("Attempted to call ReactInstallationPage() from the server but ReactInstallationPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/adkit-docs/components/docs/pages/react-installation.tsx","ReactInstallationPage");a.s(["ReactInstallationPage",0,b])},57511,a=>{"use strict";a.i(87586);var b=a.i(27381);a.n(b)},39086,a=>{"use strict";let b=(0,a.i(70424).registerClientReference)(function(){throw Error("Attempted to call DocContent() from the server but DocContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/adkit-docs/components/docs/doc-content.tsx <module evaluation>","DocContent");a.s(["DocContent",0,b])},49771,a=>{"use strict";let b=(0,a.i(70424).registerClientReference)(function(){throw Error("Attempted to call DocContent() from the server but DocContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/adkit-docs/components/docs/doc-content.tsx","DocContent");a.s(["DocContent",0,b])},21297,a=>{"use strict";a.i(39086);var b=a.i(49771);a.n(b)},89975,a=>{"use strict";var b=a.i(36356),c=a.i(71742);let d=[{slug:"quickstart",title:"Quickstart",description:"Get Adkit running on your site in under 10 minutes.",content:`## Install the SDK

Choose your preferred installation method:

### JavaScript (Recommended for most sites)

Add the Adkit script to your HTML:

\`\`\`html
<script src="https://cdn.adkit.dev/v1.js" defer></script>
\`\`\`

### React / Next.js

Install the React package:

\`\`\`bash
npm install adkit-react
\`\`\`

## Add Your First Slot

### JavaScript

\`\`\`html
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
></div>
\`\`\`

### React

\`\`\`tsx
import { AdkitProvider, AdSlot } from "adkit-react"
import "adkit-react/styles.css"

function App() {
  return (
    <AdkitProvider siteId="your-site-id">
      <AdSlot slot="sidebar" aspectRatio="4:3" />
    </AdkitProvider>
  )
}
\`\`\`

## Get Your Site ID

1. Sign up at [adkit.dev](https://adkit.dev)
2. Create a new site in your dashboard
3. Copy your site ID from the settings page

## Next Steps

- Configure your slot pricing in the [Publisher Dashboard](/docs/publisher/dashboard)
- Customize the appearance with [Theming](/docs/react/theming)
- Learn about [How It Works](/docs/how-it-works)`},{slug:"how-it-works",title:"How It Works",description:"Understand the Adkit model: fixed-price slots, self-serve booking, and publisher approval.",content:`## The Adkit Model

Adkit replaces programmatic advertising with a direct marketplace. Publishers set fixed daily prices, and advertisers book slots directly through your website.

## Key Concepts

### Fixed-Price Slots

You define ad slots on your site with a daily price. No bidding, no auctions, no real-time optimization. Advertisers see the price upfront and book for specific dates.

### Self-Serve Booking

Empty slots display a placeholder inviting visitors to book. When someone clicks, they see your pricing and can purchase the slot with a credit card. Demand comes from your own audience.

### Publisher Approval

Every ad submission goes through your approval queue. You review the creative, destination URL, and advertiser details before anything goes live. Your site, your rules.

### Automatic Payouts

Adkit handles payment processing via Stripe. You receive 85% of each booking, paid out automatically. If a slot has downtime (your site is unreachable), advertisers are refunded proportionally.

## Revenue Share

| Party | Share |
|-------|-------|
| Publisher | 85% |
| Adkit | 15% |

Compare this to AdSense, where publishers typically keep around 68%.

## Flow

1. **Publisher** creates slots and sets prices
2. **Visitor** sees empty slot with booking CTA
3. **Advertiser** books dates and uploads creative
4. **Publisher** approves or rejects the ad
5. **Ad goes live** on the booked dates
6. **Publisher** receives payout via Stripe`},{slug:"react/installation",title:"Installation",description:"Install the adkit-react package and add it to your React or Next.js project.",component:a.i(57511).ReactInstallationPage},{slug:"react/provider",title:"AdkitProvider",description:"Configure the Adkit context provider for your React application.",content:`## Overview

\`AdkitProvider\` initializes the Adkit SDK and provides context to all child components.

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`siteId\` | \`string\` | Yes | Your Adkit site ID |
| \`theme\` | \`"light" \\| "dark" \\| "auto"\` | No | Color theme (default: \`"auto"\`) |
| \`locale\` | \`string\` | No | Locale for formatting (default: \`"en-US"\`) |

## Example

\`\`\`tsx
import { AdkitProvider } from "adkit-react"

function App({ children }) {
  return (
    <AdkitProvider 
      siteId="your-site-id"
      theme="dark"
      locale="en-GB"
    >
      {children}
    </AdkitProvider>
  )
}
\`\`\`

## Notes

- Only one \`AdkitProvider\` should exist in your app
- Place it as high in the tree as possible
- All \`AdSlot\` components must be descendants of \`AdkitProvider\``},{slug:"react/adslot",title:"AdSlot",description:"Render an ad slot in your React application.",content:`## Overview

\`AdSlot\` renders an ad placement. It displays either a paid creative or a booking placeholder.

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`slot\` | \`string\` | Yes | Unique slot identifier |
| \`aspectRatio\` | \`string\` | No | Aspect ratio (e.g., \`"16:9"\`, \`"4:3"\`) |
| \`className\` | \`string\` | No | Additional CSS classes |
| \`fallback\` | \`ReactNode\` | No | Content to show while loading |

## Example

\`\`\`tsx
import { AdSlot } from "adkit-react"

function Sidebar() {
  return (
    <AdSlot 
      slot="sidebar"
      aspectRatio="4:3"
      className="my-4"
    />
  )
}
\`\`\`

## Slot Identifiers

Slot identifiers must be unique within your site. Use descriptive names like:

- \`header-banner\`
- \`sidebar\`
- \`in-content-1\`
- \`footer-leaderboard\``},{slug:"react/booking-modal",title:"BookingModal",description:"Customize the booking modal that appears when visitors click to book a slot.",content:`## Overview

The \`BookingModal\` component controls the booking flow UI. It's rendered automatically when a visitor clicks to book, but you can customize its appearance.

## Props

| Prop | Type | Description |
|------|------|-------------|
| \`onClose\` | \`() => void\` | Called when modal is dismissed |
| \`onSuccess\` | \`(booking: Booking) => void\` | Called after successful booking |

## Customization

Content coming soon.`},{slug:"react/use-adkit",title:"useAdkit Hook",description:"Access Adkit state and methods from any component.",content:`## Overview

The \`useAdkit\` hook provides access to Adkit context from any component within the provider.

## Usage

\`\`\`tsx
import { useAdkit } from "adkit-react"

function MyComponent() {
  const { siteId, theme, slots } = useAdkit()
  
  return <div>Site: {siteId}</div>
}
\`\`\`

## Return Value

| Property | Type | Description |
|----------|------|-------------|
| \`siteId\` | \`string\` | Current site ID |
| \`theme\` | \`string\` | Current theme |
| \`slots\` | \`Map<string, Slot>\` | Loaded slot data |
| \`refresh\` | \`() => void\` | Force refresh slot data |

Content coming soon.`},{slug:"react/theming",title:"Theming",description:"Customize colors, fonts, and styling for the React SDK.",content:`## Theme Prop

Set the theme on \`AdkitProvider\`:

\`\`\`tsx
<AdkitProvider siteId="..." theme="dark">
\`\`\`

Options:
- \`"light"\` - Light mode
- \`"dark"\` - Dark mode  
- \`"auto"\` - Follow system preference (default)

## CSS Variables

Override CSS variables to customize colors:

\`\`\`css
:root {
  --adkit-primary: #6366f1;
  --adkit-background: #ffffff;
  --adkit-text: #0a0a0a;
  --adkit-border: #e5e5e5;
}

.dark {
  --adkit-background: #0a0a0a;
  --adkit-text: #fafafa;
  --adkit-border: #262626;
}
\`\`\`

Content coming soon.`},{slug:"react/custom-styling",title:"Custom Styling",description:"Apply custom CSS classes and styles to Adkit components.",content:`## className Prop

All Adkit components accept a \`className\` prop:

\`\`\`tsx
<AdSlot slot="sidebar" className="my-custom-class" />
\`\`\`

## CSS Selectors

Target Adkit elements with these selectors:

\`\`\`css
.adkit-slot { }
.adkit-slot-placeholder { }
.adkit-slot-creative { }
.adkit-booking-modal { }
\`\`\`

Content coming soon.`},{slug:"js/installation",title:"Installation",description:"Add the Adkit script to any website.",content:`## Add the Script

Add this script tag to your HTML, ideally in the \`<head>\`:

\`\`\`html
<script src="https://cdn.adkit.dev/v1.js" defer></script>
\`\`\`

## Add a Slot

Place a div with data attributes where you want the ad:

\`\`\`html
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
></div>
\`\`\`

## Verify Installation

Open your browser console. You should see:

\`\`\`
[Adkit] Initialized with site: your-site-id
\`\`\`

## CDN

The script is served from Adkit's global CDN with automatic failover. Average load time is under 50ms.`},{slug:"js/data-attributes",title:"Data Attributes",description:"Configure ad slots using HTML data attributes.",content:`## Required Attributes

| Attribute | Description |
|-----------|-------------|
| \`data-adkit-site\` | Your site ID |
| \`data-adkit-slot\` | Unique slot identifier |

## Optional Attributes

| Attribute | Description | Default |
|-----------|-------------|---------|
| \`data-adkit-aspect-ratio\` | Aspect ratio (e.g., \`"16:9"\`) | \`"auto"\` |
| \`data-adkit-theme\` | \`"light"\`, \`"dark"\`, or \`"auto"\` | \`"auto"\` |
| \`data-adkit-lazy\` | Enable lazy loading | \`"true"\` |

## Example

\`\`\`html
<div
  data-adkit-site="abc123"
  data-adkit-slot="header-banner"
  data-adkit-aspect-ratio="728:90"
  data-adkit-theme="dark"
  data-adkit-lazy="true"
></div>
\`\`\``},{slug:"js/api",title:"JavaScript API",description:"Programmatically control Adkit slots with JavaScript.",content:`## Global Object

After the script loads, \`window.Adkit\` is available:

\`\`\`javascript
window.Adkit.refresh("sidebar")
window.Adkit.destroy("sidebar")
\`\`\`

## Methods

| Method | Description |
|--------|-------------|
| \`refresh(slotId)\` | Reload a specific slot |
| \`refreshAll()\` | Reload all slots |
| \`destroy(slotId)\` | Remove a slot |
| \`on(event, callback)\` | Listen for events |

## Events

\`\`\`javascript
window.Adkit.on("impression", (data) => {
  console.log("Impression:", data.slotId)
})

window.Adkit.on("click", (data) => {
  console.log("Click:", data.slotId)
})
\`\`\`

Content coming soon.`},{slug:"js/theming",title:"Theming",description:"Customize the appearance of JavaScript SDK slots.",content:`## Theme Attribute

Set the theme per slot:

\`\`\`html
<div
  data-adkit-site="..."
  data-adkit-slot="sidebar"
  data-adkit-theme="dark"
></div>
\`\`\`

## Global Theme

Set a global theme via JavaScript:

\`\`\`javascript
window.Adkit.setTheme("dark")
\`\`\`

Content coming soon.`},{slug:"js/custom-styling",title:"Custom Styling",description:"Apply custom CSS to JavaScript SDK slots.",content:`## CSS Classes

Adkit adds these classes to slot elements:

\`\`\`css
.adkit-slot { }
.adkit-slot--loading { }
.adkit-slot--empty { }
.adkit-slot--filled { }
\`\`\`

## Custom Styles

\`\`\`css
.adkit-slot {
  border-radius: 8px;
  overflow: hidden;
}

.adkit-slot--empty {
  background: #f5f5f5;
}
\`\`\`

Content coming soon.`},{slug:"publisher/dashboard",title:"Dashboard Overview",description:"Navigate the Adkit publisher dashboard.",content:`## Overview

The publisher dashboard at [adkit.dev/dashboard](https://adkit.dev/dashboard) is your control center for managing ad slots, reviewing submissions, and tracking revenue.

## Sections

- **Overview** - Revenue summary, recent activity
- **Slots** - Create and manage ad placements
- **Approvals** - Review pending ad submissions
- **Analytics** - Impressions, clicks, CTR, revenue
- **Payouts** - Stripe connection, payout history
- **Settings** - Site configuration, team members

Content coming soon.`},{slug:"publisher/creating-slots",title:"Creating Slots",description:"Define ad placements and set pricing.",content:`## Create a Slot

1. Go to **Slots** in your dashboard
2. Click **New Slot**
3. Enter a unique identifier (e.g., \`sidebar\`)
4. Set the daily price
5. Choose dimensions or aspect ratio

## Pricing

Set a fixed daily price in USD. Advertisers book by the day and pay upfront.

## Best Practices

- Use descriptive slot names
- Price based on traffic and placement visibility
- Start lower and increase as demand grows

Content coming soon.`},{slug:"publisher/approvals",title:"Approvals",description:"Review and approve ad submissions before they go live.",content:`## Approval Queue

When an advertiser books a slot, their submission appears in your approval queue. You can:

- **Approve** - Ad goes live on the booked dates
- **Reject** - Advertiser is refunded, ad doesn't run
- **Request Changes** - Ask for creative modifications

## Review Checklist

- Creative quality and appropriateness
- Destination URL safety
- Brand alignment

Content coming soon.`},{slug:"publisher/analytics",title:"Analytics",description:"Track impressions, clicks, CTR, and revenue.",content:`## Metrics

| Metric | Description |
|--------|-------------|
| Impressions | Times the ad was displayed |
| Clicks | Times the ad was clicked |
| CTR | Click-through rate |
| Revenue | Total earnings |
| Fill Rate | % of time slots had paid ads |

## Date Range

Filter analytics by:
- Today
- Last 7 days
- Last 30 days
- Custom range

Content coming soon.`},{slug:"publisher/discounts",title:"Discounts",description:"Create discount codes for advertisers.",content:`## Create a Discount

1. Go to **Settings > Discounts**
2. Click **New Discount**
3. Set the code, percentage, and expiration

## Discount Types

- **Percentage off** - e.g., 20% off
- **Fixed amount** - e.g., $10 off

Content coming soon.`},{slug:"publisher/payouts",title:"Payouts",description:"Connect Stripe and receive automatic payouts.",content:`## Connect Stripe

1. Go to **Settings > Payouts**
2. Click **Connect Stripe**
3. Complete Stripe onboarding

## Payout Schedule

Payouts are processed weekly on Mondays for the previous week's earnings.

## Revenue Share

You receive 85% of each booking. Adkit retains 15%.

Content coming soon.`},{slug:"publisher/settings",title:"Settings",description:"Configure your site and team settings.",content:`## Site Settings

- Site name and URL
- Default slot pricing
- Notification preferences

## Team Members

Invite team members with different roles:
- **Owner** - Full access
- **Admin** - Manage slots and approvals
- **Viewer** - Read-only analytics

Content coming soon.`},{slug:"advertiser/booking",title:"Booking an Ad",description:"Book ad space on publisher sites.",content:`## How to Book

1. Visit a site with Adkit slots
2. Click on an empty slot placeholder
3. Select your dates
4. Upload your creative
5. Enter payment details
6. Submit for publisher approval

## Creative Requirements

- Image formats: PNG, JPG, GIF, WebP
- Max file size: 2MB
- Match the slot's aspect ratio

Content coming soon.`},{slug:"advertiser/campaigns",title:"Campaign Management",description:"Manage your active and upcoming ad campaigns.",content:`## Advertiser Dashboard

Access your campaigns at [adkit.dev/advertiser](https://adkit.dev/advertiser).

## Campaign Status

- **Pending** - Awaiting publisher approval
- **Approved** - Scheduled to run
- **Live** - Currently displaying
- **Completed** - Campaign ended
- **Rejected** - Publisher declined

Content coming soon.`},{slug:"advertiser/billing",title:"Billing",description:"Manage payment methods and view invoices.",content:`## Payment Methods

Add credit cards in your account settings. Payments are processed via Stripe.

## Invoices

Download invoices for completed bookings from your dashboard.

## Refunds

If a publisher's site has downtime during your campaign, you receive an automatic prorated refund.

Content coming soon.`},{slug:"api/serve",title:"Serve API",description:"API endpoint for fetching ad creatives.",content:`## Endpoint

\`\`\`
GET https://api.adkit.dev/v1/serve
\`\`\`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| \`site\` | string | Yes | Site ID |
| \`slot\` | string | Yes | Slot identifier |

## Response

\`\`\`json
{
  "status": "filled",
  "creative": {
    "imageUrl": "https://cdn.adkit.dev/...",
    "destinationUrl": "https://example.com",
    "impressionId": "imp_abc123"
  }
}
\`\`\`

## Status Values

- \`filled\` - Paid ad to display
- \`empty\` - No active booking, show placeholder

Content coming soon.`},{slug:"api/events",title:"Events API",description:"API endpoint for tracking impressions and clicks.",content:`## Impression Tracking

\`\`\`
POST https://api.adkit.dev/v1/events/impression
\`\`\`

## Click Tracking

\`\`\`
POST https://api.adkit.dev/v1/events/click
\`\`\`

## Request Body

\`\`\`json
{
  "impressionId": "imp_abc123",
  "timestamp": "2024-01-15T10:30:00Z"
}
\`\`\`

Content coming soon.`},{slug:"concepts/pricing",title:"Server-Authoritative Pricing",description:"How Adkit protects publishers from price manipulation.",content:`## The Problem

Client-side pricing can be manipulated. If prices are set in JavaScript, attackers can modify them before checkout.

## The Solution

Adkit uses server-authoritative pricing. Prices are stored on our servers and validated at checkout. The client never controls the price.

## How It Works

1. Publisher sets price in dashboard (server-side)
2. SDK fetches price from API for display
3. At checkout, server validates the price again
4. Payment is processed at the server-verified price

This prevents any client-side price manipulation.`},{slug:"concepts/slot-identity",title:"Slot Identity",description:"How slot identifiers work across your site.",content:`## Slot Identifiers

Each slot has a unique identifier within your site. This ID:

- Must be unique per site
- Should be descriptive (e.g., \`sidebar\`, \`header-banner\`)
- Is case-sensitive
- Cannot contain spaces

## Consistency

Use the same slot ID across all pages where that slot appears. This ensures:

- Consistent pricing
- Unified analytics
- Proper ad delivery

Content coming soon.`},{slug:"concepts/event-tracking",title:"Event Tracking",description:"How Adkit tracks impressions and clicks.",content:`## Automatic Tracking

The SDK automatically tracks:

- **Impressions** - When an ad enters the viewport
- **Clicks** - When a user clicks the ad

## Viewability

Impressions are only counted when:

- At least 50% of the ad is visible
- The ad has been visible for at least 1 second

## Privacy

Adkit does not use cookies for tracking. We use anonymous impression IDs that cannot identify individual users.

Content coming soon.`},{slug:"changelog",title:"Changelog",description:"Recent updates and releases.",content:`## Changelog

Release notes and updates will be posted here.

Content coming soon.`}];function e(a){return d.find(b=>b.slug===a)}var f=a.i(21297);async function g({params:a}){let{slug:b}=await a,c=e(b.join("/"));return c?{title:`${c.title} | Documentation`,description:c.description,openGraph:{title:c.title,description:c.description,type:"article"}}:{title:"Not Found",description:"The page you're looking for doesn't exist."}}async function h(){return d.filter(a=>""!==a.slug).map(a=>({slug:a.slug.split("/")}))}async function i({params:a}){let{slug:d}=await a,g=d.join("/"),h=e(g);if(h||(0,c.notFound)(),h.component){let a=h.component;return(0,b.jsx)(a,{})}return(0,b.jsx)(f.DocContent,{title:h.title,description:h.description,content:h.content||"",slug:g})}a.s(["default",()=>i,"generateMetadata",()=>g,"generateStaticParams",()=>h],89975)}];

//# sourceMappingURL=adkit-docs_217fd6ba._.js.map