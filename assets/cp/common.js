/* =====================================================================
   CONTROL PARKS V2 — code commun à toutes les pages
   (en-tête, langue FR/EN, panier, pied de page, animations, images)
   Les DONNÉES modifiables sont en tête : PAYS, CLIENTS.
   ===================================================================== */
document.documentElement.classList.add('js');

/* ---- PAYS / AGENCES --------------------------------------------------
   Pour DÉPLACER un point   : modifiez lon / lat (coordonnées GPS de la ville)
                              ou forcez x / y (en % de la carte) qui ont priorité.
   Pour AJOUTER un pays     : ajoutez une entrée sur le même modèle ; le point,
                              l'onglet, le panneau et le pied de page se créent seuls.
   Pour TROUVER x / y       : ouvrez index.html?reglage#/ et survolez la carte,
                              le cadre noir affiche x %, y % et lon / lat.
--------------------------------------------------------------------- */
const PAYS = [
  { id:'ci', code:'ci', flag:'🇨🇮', hq:true,
    nom:{fr:"Côte d'Ivoire", en:"Ivory Coast"}, ville:'Abidjan',
    lon:-3.99, lat:5.35,            /* Abidjan */
    tel:['21 25 97 30','21 34 10 13'], telIntl:['+22521259730','+22521341013'],
    email:'contact@controlparks.ci', adresse:"Marcory Zone 4, Abidjan – Côte d'Ivoire",
    photo:'images/agence-ci.jpg',
    desc:{fr:"Siège social et centre de contrôle 24 h/24. Nos équipes d'Abidjan pilotent l'ensemble du réseau et interviennent sur tout le territoire ivoirien.",
          en:"Head office and 24/7 control centre. Our Abidjan teams run the whole network and operate across Ivory Coast."} },
  { id:'tg', code:'tg', flag:'🇹🇬',
    nom:{fr:'Togo', en:'Togo'}, ville:'Lomé',
    lon:1.22, lat:6.14,             /* Lomé */
    tel:['(228) 90 94 13 47'], telIntl:['+22890941347'],
    email:'contact@controlparks.ci', adresse:'Lomé – Togo',
    photo:'images/agence-tg.jpg',
    desc:{fr:"Bureau direct à Lomé : installation, maintenance et support pour les flottes togolaises et le corridor Lomé–Ouagadougou.",
          en:"Direct office in Lomé: installation, maintenance and support for Togolese fleets and the Lomé–Ouagadougou corridor."} },
  { id:'bj', code:'bj', flag:'🇧🇯',
    nom:{fr:'Bénin', en:'Benin'}, ville:'Cotonou',
    lon:2.42, lat:6.37,             /* Cotonou */
    tel:['(228) 90 94 13 47'], telIntl:['+22890941347'],   /* suivi par l'équipe du Togo */
    email:'contact@controlparks.ci', adresse:'Lomé – Togo (équipe en charge du Bénin)',
    photo:'images/agence-bj.jpg',
    desc:{fr:"Le Bénin est suivi par notre équipe de Lomé : accompagnement des transporteurs, du port autonome de Cotonou et des flottes de location du Bénin.",
          en:"Benin is served by our Lomé team: supporting hauliers, the autonomous port of Cotonou and rental fleets across Benin."} },
  { id:'lr', code:'lr', flag:'🇱🇷',
    nom:{fr:'Liberia', en:'Liberia'}, ville:'Monrovia',
    lon:-10.80, lat:6.30,           /* Monrovia */
    tel:['(231) 775 488 217'], telIntl:['+231775488217'],
    email:'contact@controlparks.ci', adresse:'Monrovia – Liberia',
    photo:'images/agence-lr.webp',
    desc:{fr:"Bureau de Monrovia : suivi des flottes minières, logistiques et humanitaires opérant au Liberia.",
          en:"Monrovia office: tracking mining, logistics and humanitarian fleets operating in Liberia."} }
];

/* ---- LOGOS CLIENTS (dossier images/clients/) ------------------------ */
const CLIENTS = [
  {name:'TotalEnergies', src:'images/clients/Logo_TotalEnergies.webp'},
  {name:'LafargeHolcim', src:'images/clients/LafargeHolcim_logo.webp'},
  {name:'Maersk', src:'images/clients/maersk.png'},
  {name:'Nestlé', src:'images/clients/nestle.png'},
  {name:'Petro Ivoire', src:'images/clients/Petro ivoire.png'},
  {name:'APM Terminals', src:'images/clients/apm_terminals.png'}
];

/* ---- ICÔNES (SVG au trait) ------------------------------------------ */
const ICON = {
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  warn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4m0 4h.01"/></svg>',
  cam:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
  eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="3"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
  fuel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 11h8M3 11h8m-4 8V5a2 2 0 0 1 2-2h6l4 8-4 8H9a2 2 0 0 1-2-2z"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg>',
  support:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9L22 10l-5.5 5 1.5 7-6-3.6-6 3.6 1.5-7L2 10l7.1-1.1z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>',
  img:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M14 9h4l4 4v4a1 1 0 0 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  oil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5"/></svg>',
  mine:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21l4-9 5 5 4-11 5 15z"/></svg>',
  key:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="8" cy="15" r="4"/><path d="M10.8 12.2L21 2m-3 3l3 3m-6 0l3 3"/></svg>',
  wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-7 7a2.1 2.1 0 0 1-3-3l7-7a6 6 0 0 1 7.9-7.9z"/></svg>',
  building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-4h6v4M9 11h.01M15 11h.01M9 15h.01M15 15h.01"/></svg>',
  car:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 17h14M3 12l2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><circle cx="7.5" cy="14" r="1"/><circle cx="16.5" cy="14" r="1"/></svg>',
  moto:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M5 17h4l3-6h4l3 6M12 11l-2-4h-3M14 7h3l2 4"/></svg>',
  family:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.2"/><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2M14 21v-1.5a3.5 3.5 0 0 1 3.5-3.5h1a3.5 3.5 0 0 1 3.5 3.5V21"/></svg>',
  route:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H14a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h5.5"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg>',
  cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>',
  cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17.5 19H7a4 4 0 0 1-.6-8A6 6 0 0 1 18 9a5 5 0 0 1-.5 10z"/></svg>',
  plug:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/></svg>',
  file:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>'
};

/* ---- TRADUCTIONS communes (le français est dans le HTML) ------------ */
const I18N = { en: {
  'nav.solutions':'Solutions','nav.entreprise':'Business','nav.entreprise.sub':'Professional fleets, SMEs and key accounts','nav.particulier':'Individuals','nav.particulier.sub':'Protect your personal vehicle','nav.connexe':'Related','nav.connexe.sub':'Associated services and equipment','nav.souscrire':'Subscribe','nav.tarification':'Pricing','nav.contact':'Contact us',
  'contact.eyebrow':'Tailored demonstration','contact.title':'See your own fleet on our screen, in 30 minutes.','contact.text':'A Control Parks expert sets up a demo with your routes, your vehicle types and your real risks. No commitment.','contact.addr':'Marcory Zone 4, Abidjan — Ivory Coast',
  'form.title':'Book my demonstration','form.nom':'Full name','form.soc':'Company','form.mail':'Business e-mail','form.tel':'Phone','form.taille':'Fleet size','form.pays':'Country','form.autre':'Other','form.msg':'Your need (optional)','form.submit':'Book my demo','form.ok.title':'Request received.','form.ok.text':'An expert will call you back within 24 working hours to prepare your demonstration.',
  'foot.text':'Authorised MiX Telematics distributor. Geolocation, video telematics and remote control for West African fleets.','foot.offres':'Our offers','foot.site':'The site','foot.boutique':'Shop','foot.entreprise':'Company','foot.contact':'Contact','foot.agences':'Our branches','foot.rights':'All rights reserved','foot.legal':'Legal notice','foot.privacy':'Privacy',
  'cart.title':'Your cart','cart.total':'Total','cart.go':'Go to the shop'
}};
const T = {
  siege:{fr:'Siège',en:'Head office'}, agence:{fr:'Agence',en:'Branch'}, photo:{fr:"Photo de l'agence",en:'Branch photo'},
  contacter:{fr:'Contacter cette agence',en:'Contact this branch'}, devis:{fr:'Demander un devis',en:'Request a quote'},
  cartEmpty:{fr:'Votre panier est vide.',en:'Your cart is empty.'}, cartHint:{fr:'Ajoutez des produits depuis la boutique.',en:'Add products from the shop.'},
  soon:{tarification:{fr:'Tarification',en:'Pricing'},boutique:{fr:'Boutique',en:'Shop'},entreprise:{fr:'Entreprise',en:'Company'},'solutions/entreprise':{fr:'Solutions · Entreprise',en:'Solutions · Business'},'solutions/particulier':{fr:'Solutions · Particulier',en:'Solutions · Individuals'},'solutions/connexe':{fr:'Solutions · Connexe',en:'Solutions · Related'}}
};
let LANG = 'fr';
try{ LANG = localStorage.getItem('cp_lang') || 'fr'; }catch(e){}
const t = o => (o && typeof o === 'object') ? (o[LANG] || o.fr) : o;

/* ---- IMAGES : essaie jpg → png → webp → jpeg avant d'abandonner ------ */
const IMG_EXT=['jpg','png','webp','jpeg'];
window.imgTry=function(img){
  const m=img.src.match(/\.(jpg|png|webp|jpeg)$/i); const cur=m?m[1].toLowerCase():null;
  const tried=(img.dataset.tried||'').split(',').filter(Boolean); if(cur&&!tried.includes(cur))tried.push(cur);
  const next=IMG_EXT.find(e=>!tried.includes(e));
  if(!next||!cur){img.remove();return;}
  img.dataset.tried=tried.join(','); img.src=img.src.replace(/\.(jpg|png|webp|jpeg)$/i,'.'+next);
};

/* ---- LANGUE ----------------------------------------------------------- */
function applyLang(){
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n],[data-i18n-html]').forEach(el=>{
    const html = el.hasAttribute('data-i18n-html');
    const key = el.getAttribute(html?'data-i18n-html':'data-i18n');
    if(!el.dataset.fr) el.dataset.fr = html ? el.innerHTML : el.textContent;
    const val = LANG==='fr' ? el.dataset.fr : (I18N.en[key] || el.dataset.fr);
    if(html) el.innerHTML = val; else el.textContent = val;
  });
  document.querySelectorAll('.lang button').forEach(b=>{const on=b.dataset.lang===LANG;b.classList.toggle('act',on);b.setAttribute('aria-pressed',on);});
  buildFootAgences(); renderCart();
  if(typeof window.renderPage==='function') window.renderPage();   /* contenu propre à chaque page */
}
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>{LANG=b.dataset.lang;try{localStorage.setItem('cp_lang',LANG);}catch(e){}applyLang();}));

/* ---- MENU (burger, menus déroulants) --------------------------------- */
const burger=document.getElementById('burger'), navLinks=document.getElementById('navLinks');
if(burger){
  burger.addEventListener('click',()=>{const o=navLinks.classList.toggle('open');burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':'';});
}
document.querySelectorAll('.has-dd>button').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();const li=b.parentNode;const o=li.classList.toggle('open');b.setAttribute('aria-expanded',o);}));
document.addEventListener('click',()=>document.querySelectorAll('.has-dd.open').forEach(li=>{li.classList.remove('open');li.querySelector('button').setAttribute('aria-expanded',false);}));
function closeMenu(){if(!navLinks)return;navLinks.classList.remove('open');burger.setAttribute('aria-expanded',false);document.body.style.overflow='';}

/* ---- LOGOS CLIENTS (défilement) -------------------------------------- */
(function(){
  const track=document.getElementById('logosTrack'); if(!track) return;
  const html=CLIENTS.map(c=>`<div class="logo-item"><img src="${c.src}" alt="${c.name}" loading="lazy" onerror="this.outerHTML='<span class=logo-fallback>${c.name.replace(/'/g,'&#39;')}</span>'"></div>`).join('');
  track.innerHTML=html+html; /* doublé pour un défilement sans coupure */
})();

/* ---- PIED DE PAGE : agences ------------------------------------------ */
function buildFootAgences(){
  const el=document.getElementById('footAgences'); if(!el) return;
  el.innerHTML=PAYS.map(p=>`<div class="foot-agence"><b>${p.flag} ${t(p.nom)} — ${p.ville}</b><span>${p.tel.join(' · ')}</span></div>`).join('');
}

/* ---- PANIER (partagé entre les pages via localStorage) --------------- */
let CART=[]; try{CART=JSON.parse(localStorage.getItem('cp_cart')||'[]');}catch(e){}
const fmt=n=>n.toLocaleString('fr-FR')+' FCFA';
function saveCart(){try{localStorage.setItem('cp_cart',JSON.stringify(CART));}catch(e){}renderCart();}
function renderCart(){
  const badge=document.getElementById('cartBadge'); if(!badge) return;
  const n=CART.reduce((s,i)=>s+i.qty,0);
  badge.textContent=n; badge.classList.toggle('show',n>0);
  const body=document.getElementById('cartBody');
  if(!CART.length){body.innerHTML=`<div class="cart-empty">${ICON.cart}<b>${t(T.cartEmpty)}</b><span>${t(T.cartHint)}</span></div>`;}
  else body.innerHTML=CART.map(i=>`<div class="cart-item"><div class="thumb"></div><div><b>${i.name}</b><small>${fmt(i.price)}</small></div><div class="qty"><button type="button" data-q="-1" data-id="${i.id}">−</button><span>${i.qty}</span><button type="button" data-q="1" data-id="${i.id}">+</button></div></div>`).join('');
  document.getElementById('cartTotal').textContent=fmt(CART.reduce((s,i)=>s+i.qty*i.price,0));
  body.querySelectorAll('[data-q]').forEach(b=>b.addEventListener('click',()=>{const it=CART.find(x=>x.id===b.dataset.id);it.qty+= +b.dataset.q;if(it.qty<=0)CART=CART.filter(x=>x!==it);saveCart();}));
}
window.addToCart=function(id,name,price){const it=CART.find(x=>x.id===id);if(it)it.qty++;else CART.push({id,name,price,qty:1});saveCart();openCart();};
function openCart(){document.body.classList.add('cart-open');document.getElementById('cartDrawer').setAttribute('aria-hidden',false);}
function closeCart(){document.body.classList.remove('cart-open');document.getElementById('cartDrawer').setAttribute('aria-hidden',true);}
const cartBtn=document.getElementById('cartBtn');
if(cartBtn){
  cartBtn.addEventListener('click',openCart);
  document.getElementById('cartClose').addEventListener('click',closeCart);
  document.getElementById('cartVeil').addEventListener('click',closeCart);
}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeCart();closeMenu();}});

/* ---- FORMULAIRE DE DÉMO ---------------------------------------------- */
const demoForm=document.getElementById('demoForm');
if(demoForm) demoForm.addEventListener('submit',e=>{
  e.preventDefault(); const f=e.target;
  if(!f.checkValidity()){f.reportValidity();return;}
  /* TODO : brancher l'envoi (e-mail / backend). Pour la démo, on affiche la confirmation. */
  document.getElementById('formCard').classList.add('sent');
});

/* ---- ANIMATIONS D'APPARITION, BOUTON HAUT DE PAGE -------------------- */
const rvObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rvObs.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
function revealCheck(){document.querySelectorAll('.rv:not(.in)').forEach(el=>rvObs.observe(el));}
const toTop=document.getElementById('toTop');
if(toTop){
  window.addEventListener('scroll',()=>toTop.classList.toggle('show',window.scrollY>600),{passive:true});
  toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}
const yearEl=document.getElementById('year'); if(yearEl) yearEl.textContent=new Date().getFullYear();

/* ---- DÉMARRAGE (après le script de la page, qui définit renderPage) -- */
document.addEventListener('DOMContentLoaded',()=>{
  applyLang();
  revealCheck();
  setTimeout(()=>document.querySelectorAll('.rv').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight)el.classList.add('in');}),80);
});
