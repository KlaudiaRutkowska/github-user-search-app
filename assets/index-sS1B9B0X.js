(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const A=e=>e*(2-e),g=(e,o,c=2e3)=>{const n=16.666666666666668,t=Math.round(c/n);let s=0;const r=parseInt(o,10),f=setInterval(()=>{s++;const v=A(s/t),d=Math.round(r*v);parseInt(e.innerHTML,10)!==d&&(e.innerHTML=d),s===t&&clearInterval(f)},n)},D=document.querySelector("form"),N=document.querySelector('input[type="text"]'),p=document.querySelector(".input-wrapper > span");N.addEventListener("input",e=>{p.style.display==="block"&&(p.style.display="none")});D.addEventListener("submit",e=>{e.preventDefault();const o=new FormData(e.target);O(o.get("username"))});const O=e=>{fetch(`https://api.github.com/users/${e}`).then(o=>{if(o.ok)return p.style.display="none",o.json();throw p.style.display="block",new Error("Nie udało się pobrać danych")}).then(o=>{_(o)}).catch(o=>{console.error("Wystąpił błąd: ",o.message)})},_=e=>{console.log(e);const o=document.querySelector('img[alt="user icon"]'),c=document.querySelector("div.loading-icon");o.classList.remove("skeleton","skeleton-icon"),c.style.display="none",o.style.display="block",o.setAttribute("src",e.avatar_url);const n=document.querySelector("h2.name");n.classList.remove("skeleton","skeleton-name"),e.name!=null?n.innerHTML=e.name:n.innerHTML=e.login;const t=document.querySelector("p.login");t.classList.remove("skeleton","skeleton-login"),t.innerHTML="@"+e.login;const s=document.querySelector("p.created-at");s.classList.remove("skeleton","skeleton-date");const r=new Date(e.created_at),f=r.getDate(),v=r.toLocaleString("en-US",{month:"short"}),d=r.getFullYear();s.innerHTML="Joined "+f+" "+v+" "+d;const L=document.querySelector("p.description");L.classList.remove("skeleton","skeleton-description"),e.bio!=null?L.innerHTML=e.bio:L.innerHTML="This profile has no bio";const q=document.querySelector(".repos-wrapper > .repos");g(q,e.public_repos,1e3);const T=document.querySelector(".followers-wrapper > .followers");g(T,e.followers,1e3);const H=document.querySelector(".following-wrapper > .following");g(H,e.following,1e3);const a=document.querySelector("p.location");a.classList.remove("skeleton","skeleton-social");const b=document.querySelector(".location-wrapper > svg");e.location!=null?(a.innerHTML=e.location,a.classList.remove("not-avaliable"),b.classList.remove("not-avaliable")):(a.innerHTML="Not Avaliable",a.classList.add("not-avaliable"),b.classList.add("not-avaliable"));const l=document.querySelector("a.blog");l.classList.remove("skeleton","skeleton-social");const h=document.querySelector(".blog-wrapper > svg");e.blog!=!1?(l.setAttribute("href",e.blog),l.innerHTML=e.blog,l.classList.remove("not-avaliable"),h.classList.remove("not-avaliable")):(l.innerHTML="Not Avaliable",l.classList.add("not-avaliable"),h.classList.add("not-avaliable"));const u=document.querySelector("p.twitter");u.classList.remove("skeleton","skeleton-social");const w=document.querySelector(".twitter-wrapper > svg");e.twitter_username!=null?(u.innerHTML=e.twitter_username,u.classList.remove("not-avaliable"),w.classList.remove("not-avaliable")):(u.innerHTML="Not Avaliable",u.classList.add("not-avaliable"),w.classList.add("not-avaliable"));const i=document.querySelector("a.github");i.classList.remove("skeleton","skeleton-social");const S=document.querySelector(".github-wrapper > svg");e.html_url!=null?(i.setAttribute("href",e.html_url),i.innerHTML="@github",i.classList.remove("not-avaliable"),S.classList.remove("not-avaliable")):(i.innerHTML="Not Avaliable",i.classList.add("not-avaliable"),S.classList.add("not-avaliable"))};let y=!1;const E=document.querySelector("button.mode"),m=document.documentElement,k=document.querySelector("button.mode > p"),M=e=>{if(e){y=!0,m.classList.add("dark"),m.style.colorScheme="dark",k.innerHTML="light";return}y=!1,m.classList.remove("dark"),m.style.colorScheme="light",k.innerHTML="dark"};E.addEventListener("click",()=>{M(!y)});const I=window.matchMedia("(prefers-color-scheme: dark)");M(I.matches);