"use strict";var Q=Object.defineProperty;var A=(e,n)=>()=>(e&&(n=e(e=0)),n);var S=(e,n)=>{for(var t in n)Q(e,t,{get:n[t],enumerable:!0})};function L(e,n){return new Promise(t=>{e.addEventListener("message",function r({data:a}){a==null||a.type!==n||(e.removeEventListener("message",r),t(a))})})}async function O(e,n,t){let r={type:"wasm_bindgen_worker_init",module:e,memory:n,receiver:t.receiver()};Y=await Promise.all(Array.from({length:t.numThreads()},async()=>{let a=new Worker(new URL("./workerHelpers.js",Z.url),{type:"module"});return a.postMessage(r),await L(a,"wasm_bindgen_worker_ready"),a})),t.build()}var Z,Y,C=A(()=>{Z={};L(self,"wasm_bindgen_worker_init").then(async e=>{let n=await Promise.resolve().then(()=>(W(),h));await n.default(e.module,e.memory),postMessage({type:"wasm_bindgen_worker_ready"}),n.wbg_rayon_start_worker(e.receiver)})});var h={};S(h,{default:()=>le,initSync:()=>ce,initThreadPool:()=>ae,optimise:()=>te,wbg_rayon_PoolBuilder:()=>w,wbg_rayon_start_worker:()=>se});function M(){return(y===null||y.buffer!==i.memory.buffer)&&(y=new Uint8Array(i.memory.buffer)),y}function $(e,n){return e=e>>>0,D.decode(M().slice(e,e+n))}function v(e){u===o.length&&o.push(o.length+1);let n=u;return u=o[n],o[n]=e,n}function ee(e,n){let t=n(e.length*1,1)>>>0;return M().set(e,t/1),F=e.length,t}function B(){return(f===null||f.buffer!==i.memory.buffer)&&(f=new Int32Array(i.memory.buffer)),f}function ne(e,n){return e=e>>>0,M().subarray(e/1,e/1+n)}function te(e,n,t,r){try{let l=i.__wbindgen_add_to_stack_pointer(-16),p=ee(e,i.__wbindgen_malloc),g=F;i.optimise(l,p,g,n,t,r);var a=B()[l/4+0],c=B()[l/4+1],d=ne(a,c).slice();return i.__wbindgen_free(a,c*1),d}finally{i.__wbindgen_add_to_stack_pointer(16)}}function re(e){return o[e]}function ie(e){e<132||(o[e]=u,u=e)}function x(e){let n=re(e);return ie(e),n}function ae(e){let n=i.initThreadPool(e);return x(n)}function se(e){i.wbg_rayon_start_worker(e)}async function oe(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}let t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}else{let t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}function j(){let e={};return e.wbg={},e.wbg.__wbindgen_throw=function(n,t){throw new Error($(n,t))},e.wbg.__wbindgen_module=function(){let n=U.__wbindgen_wasm_module;return v(n)},e.wbg.__wbindgen_memory=function(){let n=i.memory;return v(n)},e.wbg.__wbg_startWorkers_6fd3af285ea11136=function(n,t,r){let a=O(x(n),x(t),w.__wrap(r));return v(a)},e}function q(e,n){e.wbg.memory=n||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function G(e,n){return i=e.exports,U.__wbindgen_wasm_module=n,f=null,y=null,i.__wbindgen_start(),i}function ce(e,n){if(i!==void 0)return i;let t=j();q(t,n),e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e));let r=new WebAssembly.Instance(e,t);return G(r,e)}async function U(e,n){if(i!==void 0)return i;typeof e=="undefined"&&(e=new URL("squoosh_oxipng_bg.wasm",ye.url));let t=j();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e)),q(t,n);let{instance:r,module:a}=await oe(await e,t);return G(r,a)}var ye,i,D,y,o,u,F,f,w,le,W=A(()=>{C();ye={},D=typeof TextDecoder!="undefined"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder!="undefined"&&D.decode();y=null;o=new Array(128).fill(void 0);o.push(void 0,null,!0,!1);u=o.length;F=0;f=null;w=class e{static __wrap(n){n=n>>>0;let t=Object.create(e.prototype);return t.__wbg_ptr=n,t}__destroy_into_raw(){let n=this.__wbg_ptr;return this.__wbg_ptr=0,n}free(){let n=this.__destroy_into_raw();i.__wbg_wbg_rayon_poolbuilder_free(n)}numThreads(){return i.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){return i.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)}build(){i.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}};le=U});var J={};S(J,{default:()=>de,initSync:()=>me,optimise:()=>_e});function T(){return(b===null||b.byteLength===0)&&(b=new Uint8Array(s.memory.buffer)),b}function fe(e,n){return e=e>>>0,H.decode(T().subarray(e,e+n))}function ue(e,n){let t=n(e.length*1,1)>>>0;return T().set(e,t/1),N=e.length,t}function P(){return(_===null||_.byteLength===0)&&(_=new Int32Array(s.memory.buffer)),_}function be(e,n){return e=e>>>0,T().subarray(e/1,e/1+n)}function _e(e,n,t,r){try{let l=s.__wbindgen_add_to_stack_pointer(-16),p=ue(e,s.__wbindgen_malloc),g=N;s.optimise(l,p,g,n,t,r);var a=P()[l/4+0],c=P()[l/4+1],d=be(a,c).slice();return s.__wbindgen_free(a,c*1),d}finally{s.__wbindgen_add_to_stack_pointer(16)}}async function we(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}let t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}else{let t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}function V(){let e={};return e.wbg={},e.wbg.__wbindgen_throw=function(n,t){throw new Error(fe(n,t))},e}function z(e,n){return s=e.exports,X.__wbindgen_wasm_module=n,_=null,b=null,s}function me(e){if(s!==void 0)return s;let n=V();e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e));let t=new WebAssembly.Instance(e,n);return z(t,e)}async function X(e){if(s!==void 0)return s;typeof e=="undefined"&&(e=new URL("squoosh_oxipng_bg.wasm",pe.url));let n=V();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));let{instance:t,module:r}=await we(await e,n);return z(t,r)}var pe,s,H,b,N,_,de,K=A(()=>{pe={},H=typeof TextDecoder!="undefined"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder!="undefined"&&H.decode();b=null;N=0;_=null;de=X});var I={level:2,interlace:!1,optimiseAlpha:!1};var E=()=>(async e=>{try{return typeof MessageChannel!="undefined"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(e)}catch(n){return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]));async function ge(e){let{default:n,initThreadPool:t,optimise:r}=await Promise.resolve().then(()=>(W(),h));return await n(e),await t(globalThis.navigator.hardwareConcurrency),r}async function Ae(e){let{default:n,optimise:t}=await Promise.resolve().then(()=>(K(),J));return await n(e),t}var m;async function k(e){var n;if(!m){let t=((n=globalThis.navigator)===null||n===void 0?void 0:n.hardwareConcurrency)>1;typeof self!="undefined"&&typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&t&&await E()?m=ge(e):m=Ae(e)}return m}async function R(e,n={}){let t={...I,...n};return(await k())(new Uint8Array(e),t.level,t.interlace,t.optimiseAlpha).buffer}onmessage=async function(e){let[n,t]=e.data;await k(n);let r=await t.arrayBuffer(),a=await R(r),c=new Blob([a],{type:t.type});this.postMessage(c)};
//# sourceMappingURL=optimize-png.worker.js.map