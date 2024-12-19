(()=>{var o=Object.defineProperty;var c=(r,t,e)=>t in r?o(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var n=(r,t,e)=>c(r,typeof t!="symbol"?t+"":t,e);var s=class s extends HTMLElement{static register(t="pagefind-search",e){"customElements"in window&&(e||customElements).define(t,this)}get bundlePath(){return this.getAttribute(s.attrs.bundlePath)||"/pagefind/"}get id(){return this.hasAttribute("id")?this.getAttribute("id"):"_pagefind_search_"+this.count}static underscoreToCamelCase(t){return t.replace(/_([a-z])/g,e=>e[1].toUpperCase())}get options(){let t={element:`#${this.id}`},e="_";for(let{name:a,value:i}of this.attributes)a.startsWith(e)&&(a===s.attrs.bundlePath&&(i=new URL(i,location).pathname),(i==="false"||i==="true"||Number(i).toString()===i)&&(i=JSON.parse(i)),t[s.underscoreToCamelCase(a.slice(e.length))]=i);return t}async pagefind(t){if(typeof PagefindUI>"u"){if(!this.scriptPromise)throw new Error(`<${this.tagName.toLowerCase()}> is not yet attached to a document.`);await this.scriptPromise}let e=Object.assign({},this.options,t);this.pagefindUI=new PagefindUI(e);let a=this.querySelector('input:is([type="text"], [type="search"])');this.hasAttribute(s.attrs.autofocus)&&a?.focus(),document.addEventListener("click",i=>{i.target.closest("pagefind-search")||(this.querySelector(".pagefind-ui__drawer")?.classList.add("pagefind-ui__hidden"),a?.blur())}),a?.addEventListener("click",()=>{this.querySelector(".pagefind-ui__drawer")?.classList.remove("pagefind-ui__hidden"),a?.focus()})}async connectedCallback(){if(this.hasAttached)return;this.hasAttached=!0,this.count=s.count++,this.setAttribute("id",this.id),this.replaceChildren();let t=`${this.bundlePath}pagefind-ui.js`;this.scriptPromise=import(t),this.hasAttribute(s.attrs.manualInit)||(await this.scriptPromise,await this.pagefind())}};n(s,"attrs",{bundlePath:"_bundle_path",manualInit:"manual",autofocus:"pagefind-autofocus"}),n(s,"count",0);var u=s;u.register();})();
