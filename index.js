/* empty css                      */import{a as v,S as w,i as n}from"./assets/vendor-nOc_fn3H.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const S="57670282-f23c2b26a4d723b7515ee2ad5",q="https://pixabay.com/api/";async function d(s,r){return(await v.get(q,{params:{key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const M=w.default,f=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more"),P=new M(".gallery a",{captions:!0,captionDelay:250});function g(s){const r=s.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                ${e.likes}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${e.views}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${e.comments}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${e.downloads}
              </p>
            </div>
          </a>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",r),P.refresh()}function B(){f.innerHTML=""}function h(){m.classList.add("is-visible")}function p(){m.classList.remove("is-visible")}function b(){y.classList.add("is-visible")}function L(){y.classList.remove("is-visible")}const u=document.querySelector(".form"),$=document.querySelector(".load-more");let i=1,c="";u.addEventListener("submit",async s=>{s.preventDefault();const r=u.elements["search-text"].value.trim();if(r!==""){c=r,i=1,B(),L(),h();try{const e=await d(c,i);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e.hits);const a=Math.ceil(e.totalHits/15);i<a?b():n.info({message:"We're sorry, but you've reached the end of search results."})}catch{n.error({message:"Something went wrong. Please try again later."})}finally{p()}}});$.addEventListener("click",async()=>{i+=1,L(),h();try{const s=await d(c,i);g(s.hits);const r=Math.ceil(s.totalHits/15);i<r?b():n.info({message:"We're sorry, but you've reached the end of search results."});const e=document.querySelector(".gallery-item");if(e){const a=e.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}catch{n.error({message:"Something went wrong. Please try again later."})}finally{p()}});
//# sourceMappingURL=index.js.map
