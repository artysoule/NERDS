for(var linkNav=document.querySelectorAll('[href^="#"]'),V=.4,i=0;i<linkNav.length;i++)linkNav[i].addEventListener("click",(function(e){e.preventDefault();var a=window.pageYOffset,s=this.href.replace(/[^#]*(.*)/,"$1");t=document.querySelector(s).getBoundingClientRect().top,start=null,requestAnimationFrame((function e(o){null===start&&(start=o);var i=o-start,c=t<0?Math.max(a-i/V,a+t):Math.min(a+i/V,a+t);window.scrollTo(0,c),c!=a+t?requestAnimationFrame(e):location.hash=s}))}),!1);const sandwichToggle=function(){function e(){let e=this.getAttribute("data-target-id"),t=this.getAttribute("data-target-class-toggle");this.classList.toggle("--active"),document.querySelector(".site-nav").classList.toggle("--active"),document.querySelectorAll(".site-nav__link").forEach(e=>{e.classList.toggle("--active")}),e&&t&&document.getElementById(e).classList.toggle(t)}document.querySelectorAll(".sandwich").forEach(t=>{t.addEventListener("click",e)})};sandwichToggle();var feedbackLink=document.querySelector(".footer-contacts__button"),feedbackPopup=document.querySelector(".feedback"),feedbackClose=document.querySelector(".feedback__close-button"),feedbackForm=feedbackPopup.querySelector(".feedback__form"),feedbackName=feedbackPopup.querySelector(".feedback__input.--name"),feedbackEmail=feedbackPopup.querySelector(".feedback__input.--email"),overlay=document.querySelector(".overlay");feedbackLink.addEventListener("click",(function(e){e.preventDefault(),feedbackPopup.classList.add("feedback--animation-show"),overlay.classList.add("overlay--show"),feedbackName.focus()})),feedbackForm.addEventListener("submit",(function(e){feedbackEmail.value&&feedbackName.value?(e.preventDefault(),feedbackPopup.classList.remove("feedback--animation-show"),feedbackPopup.classList.remove("feedback--static-show"),overlay.classList.remove("overlay--show")):(e.preventDefault(),feedbackPopup.classList.add("feedback--error"),setTimeout((function(){feedbackPopup.classList.remove("feedback--error"),feedbackPopup.classList.remove("feedback--animation-show"),feedbackPopup.classList.add("feedback--static-show")}),600))})),feedbackClose.addEventListener("click",(function(e){e.preventDefault(),feedbackPopup.classList.remove("feedback--animation-show"),feedbackPopup.classList.remove("feedback--static-show"),overlay.classList.remove("overlay--show")})),window.addEventListener("keydown",(function(e){27===e.keyCode&&(e.preventDefault(),feedbackPopup.classList.contains("feedback--animation-show")&&(feedbackPopup.classList.remove("feedback--animation-show"),overlay.classList.remove("overlay--show")),feedbackPopup.classList.contains("feedback--static-show")&&(feedbackPopup.classList.remove("feedback--static-show"),overlay.classList.remove("overlay--show")))})),document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelector(".filters__button"),t=document.querySelector(".filters");e.addEventListener("click",(function(e){e.preventDefault()})),t.addEventListener("submit",(function(e){e.preventDefault()}))}));var header=document.querySelector(".header"),headerNav=document.querySelector(".header__nav"),logo=document.querySelector(".logo"),siteNav=document.querySelector(".site-nav");window.onscroll=function(){window.pageYOffset>250?(header.classList.add("--sticky"),headerNav.classList.add("--sticky"),logo.classList.add("--sticky"),siteNav.classList.add("--sticky")):(header.classList.remove("--sticky"),headerNav.classList.remove("--sticky"),logo.classList.remove("--sticky"),siteNav.classList.remove("--sticky"))};var siteNavLinks=document.querySelectorAll(".site-nav__link");for(let e of siteNavLinks)e.onclick=function(){for(var t=0;t<siteNavLinks.length;t++)siteNavLinks[t].classList.remove("--current");e.classList.add("--current")};logo.onclick=function(){for(var e=0;e<siteNavLinks.length;e++)siteNavLinks[e].classList.remove("--current")},document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".template"),t=document.querySelectorAll(".template__info"),a=document.querySelectorAll(".template__price"),s=document.querySelectorAll(".template__look");for(let a of e)a.addEventListener("mouseover",(function(){a.classList.add("--current");for(let e of t)e.parentNode.classList.contains("--current")&&e.classList.add("template__info--show")})),a.addEventListener("mouseleave",(function(){setTimeout((function(){a.classList.remove("--current");for(let e of t)e.parentNode.classList.contains("--current")||e.classList.remove("template__info--show")}),400)}));for(let e of t)e.addEventListener("mouseover",(function(){e.classList.add("template__info--show")}));for(let e of a)e.addEventListener("mouseenter",(function(){e.classList.add("--disappearing"),setTimeout((function(){for(let e of s)e.previousElementSibling.classList.contains("--disappearing")&&(e.previousElementSibling.classList.remove("--disappearing"),e.previousElementSibling.classList.add("--not-active"),e.classList.remove("--not-active"))}),500)}));for(let e of s)e.addEventListener("mouseout",(function(){e.classList.add("--disappearing"),setTimeout((function(){for(let e of a)e.nextElementSibling.classList.contains("--disappearing")&&(e.nextElementSibling.classList.remove("--disappearing"),e.nextElementSibling.classList.add("--not-active"),e.classList.remove("--not-active"))}),500)}))}));