import{i as l,S as f}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="41640430-3528202645bdb0a9dd97623d3",c=document.querySelector("#searchForm"),y=document.querySelector("#searchInput"),i=document.getElementById("gallery"),u=document.querySelector(".loader");c.addEventListener("submit",p);async function p(o){o.preventDefault();const t=y.value.trim();if(t){w();try{const n=await g(t);h(n)}catch(n){b(n)}finally{L(),c.reset()}}}async function g(o){const t=`https://pixabay.com/api/?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,n=await fetch(t);if(!n.ok)throw new Error("Network response was not ok");return(await n.json()).hits}function h(o){if(i.innerHTML="",o.length===0){l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#FF0000"});return}const t=k(o);i.innerHTML=t,new f("#gallery a",{captionsData:"alt",captionPosition:"bottom"}).refresh()}function b(o){console.error("Error fetching images:",o),l.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}function w(){u.style.display="block"}function L(){u.style.display="none"}function k(o){return o.map(({webformatURL:t,tags:n,likes:a,views:e,comments:r,downloads:s,largeImageURL:d})=>`
    <li class="gallery__item">
      <a class="gallery__link" href="${d}">
        <img class="gallery__image" src="${t}" alt="${n}" />
      </a>
      <div class="image-info">
        <span>Likes: ${a}</span>
        <span>Views: ${e}</span>
        <span>Comments: ${r}</span>
        <span>Downloads: ${s}</span>
      </div>
    </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
