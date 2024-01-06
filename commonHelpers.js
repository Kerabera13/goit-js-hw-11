import{i as l,S as d}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="41640430-3528202645bdb0a9dd97623d3",c=document.querySelector("#searchForm"),p=document.querySelector("#searchInput"),s=document.getElementById("gallery"),u=document.querySelector(".loader");c.addEventListener("submit",y);async function y(o){o.preventDefault();const r=p.value.trim();if(r){L();try{const n=await g(r);h(n)}catch(n){b(n)}finally{w(),c.reset()}}}async function g(o){const r=`https://pixabay.com/api/?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,n=await fetch(r);if(!n.ok)throw new Error("Network response was not ok");return(await n.json()).hits}function h(o){if(s.innerHTML="",o.length===0){l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"bottomRight",messageColor:"#fff",messageSize:"16px",timeout:5e3,maxWidth:400,transitionIn:"fadeInLeft",transitionOut:"fadeOut"});return}const r=k(o);s.innerHTML=r,new d("#gallery a",{captionsData:"alt",captionPosition:"bottom"}).refresh()}function b(o){console.error("Error fetching images:",o),l.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}function L(){u.style.display="block"}function w(){u.style.display="none"}function k(o){return o.map(({webformatURL:r,tags:n,likes:a,views:e,comments:t,downloads:i,largeImageURL:f})=>`
    <li class="gallery__item">
      <a class="gallery__link" href="${f}">
        <img class="gallery__image" src="${r}" alt="${n}" />
      </a>
      <div class="image-info">
        <span>Likes: ${a}</span>
        <span>Views: ${e}</span>
        <span>Comments: ${t}</span>
        <span>Downloads: ${i}</span>
      </div>
    </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
