/* =====================================================================
   CONTROL PARKS V2 — page d'accueil (index.html)
   Dépend de assets/cp/common.js (chargé avant).
   ===================================================================== */

Object.assign(I18N.en,{
  'hero.live':'Live network · 24/7 · 4 countries','hero.eyebrow':'Geolocation & on-board AI','hero.title':'<mark>Total</mark> control of your vehicles, down to the kilometre.','hero.text':'Real-time geolocation, smart cameras and advanced telematics: Control Parks secures your drivers, your cargo and your profitability, everywhere in West Africa.','hero.cta1':'Request a demo','hero.cta2':'Discover our offers',
  'kpi.1':'Founded in','kpi.1.sub':'Abidjan, Ivory Coast','kpi.2':'Years of experience','kpi.2.sub':'Authorised MiX Telematics distributor','kpi.3':'Countries of operation','kpi.3.sub':'Ivory Coast · Togo · Benin · Liberia',
  'logos.head':'They already trust us',
  'map.eyebrow':'Where we are','map.title':'Pick a country, meet your Control Parks branch.','map.text':'A head office in Abidjan and local teams in every country: your vehicles are monitored by technicians who know your roads.','map.badge':'branches',
  'about.eyebrow':'About us','about.title':'A qualified partner, <mark>not just a reseller.</mark>','about.p1':'Since 2006, Control Parks has helped companies in Ivory Coast and the sub-region optimise their vehicle fleets — cutting accident risk as much as operating costs.','about.p2':'As an authorised distributor of MiX Telematics, a global fleet-management provider present in more than 120 countries, we put qualified people first, for a solid partnership with every client.','about.pt1':'Authorised MiX Telematics distributor in West Africa','about.pt2':'Trained technicians, on-site installation and support','about.pt3':'Control centre and assistance 24 hours a day','about.cta':'Discover the company','about.ph':'Your photo here','about.chip':'countries covered by MiX technology',
  'offres.eyebrow':'Our offers at a glance','offres.title':'Three levels of control. One standard: yours.',
  'soon.home':'Home','soon.eyebrow':'Next step of the demo','soon.text':'This page is planned in the approved mock-up and will be built right after the home page. Navigation, cart and language switch are already in place.','soon.s1':'Home','soon.s2':'Pricing','soon.s3':'Shop','soon.s4':'Solutions','soon.s5':'Company','soon.back':'Back to home'
});

const OFFRES = [
  { id:'essentiel', num:'01', tab:{fr:'Mix Essentiel',en:'Mix Essential'},
    eyebrow:{fr:'Pour flottes standards & VTC',en:'For standard fleets & ride-hailing'},
    title:{fr:'La base solide de votre gestion',en:'The solid foundation of your fleet management'},
    text:{fr:"Le Mix Essentiel vous offre la visibilité totale dont vous avez besoin pour opérer efficacement. Suivez vos véhicules en temps réel, optimisez les trajets et protégez vos actifs contre le vol.",
          en:"Mix Essential gives you the full visibility you need to operate efficiently. Track vehicles in real time, optimise routes and protect your assets against theft."},
    feats:[['pin',{fr:'Géolocalisation en temps réel précise',en:'Accurate real-time geolocation'}],['clock',{fr:'Historique détaillé des trajets et arrêts',en:'Detailed trip and stop history'}],['lock',{fr:'Arrêt et démarrage du véhicule à distance (Kill-Switch)',en:'Remote engine stop & start (kill-switch)'}],['warn',{fr:"Alertes d'excès de vitesse",en:'Speeding alerts'}]],
    imgs:['https://images.unsplash.com/photo-1695632231361-7468689ed9a4?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1676288176918-232f7caadfee?auto=format&fit=crop&w=1000&q=80'] },
  { id:'vision', num:'02', tab:{fr:'Mix Vision',en:'Mix Vision'},
    eyebrow:{fr:'Politique zéro accident',en:'Zero-accident policy'},
    title:{fr:"L'intelligence artificielle embarquée",en:'On-board artificial intelligence'},
    text:{fr:"Conçu pour le transport lourd de marchandises. Le Mix Vision combine la télématique avancée avec des caméras IA (ADAS & DMS) pour anticiper et prévenir les accidents avant qu'ils ne se produisent.",
          en:"Built for heavy goods transport. Mix Vision combines advanced telematics with AI cameras (ADAS & DMS) to anticipate and prevent accidents before they happen."},
    feats:[['cam',{fr:'Caméras cockpit et route intégrées',en:'Integrated cabin and road cameras'}],['eye',{fr:'Détection de fatigue et de somnolence (DMS)',en:'Fatigue and drowsiness detection (DMS)'}],['phone',{fr:"Détection de l'utilisation du téléphone au volant",en:'Phone-use-while-driving detection'}],['warn',{fr:'Alertes anti-collision et distances de sécurité (ADAS)',en:'Collision and safe-distance alerts (ADAS)'}]],
    imgs:['https://images.unsplash.com/photo-1621295971452-575871f09160?auto=format&fit=crop&w=1000&q=80','https://www.cnil.fr/sites/default/files/styles/contenu_generique_visuel/public/2024-11/cameras-vehicules.png?itok=WbA_dK59'] },
  { id:'premium', num:'03', star:true, tab:{fr:'Mix Premium',en:'Mix Premium'},
    eyebrow:{fr:'Solution intégrale',en:'Complete solution'},
    title:{fr:'Contrôle absolu & télémétrie',en:'Absolute control & telemetry'},
    text:{fr:"La combinaison ultime dédiée aux industries critiques (pétrole, mines). Maximisez votre ROI avec des données moteur poussées et une sécurisation militaire de vos cargaisons sensibles.",
          en:"The ultimate combination for critical industries (oil, mining). Maximise ROI with deep engine data and military-grade protection of sensitive cargo."},
    feats:[['check',{fr:'Combinaison complète Mix Essentiel + Mix Vision',en:'Full Mix Essential + Mix Vision bundle'}],['fuel',{fr:'Télémétrie avancée (consommation exacte via CAN bus)',en:'Advanced telemetry (exact fuel use via CAN bus)'}],['shield',{fr:'Sécurisation par serrures électroniques des cargaisons',en:'Electronic cargo locks'}],['support',{fr:'Support prioritaire et salle de contrôle 24/7',en:'Priority support and 24/7 control room'}]],
    imgs:['https://images.unsplash.com/photo-1652145595413-0a79398e5888?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1549909226-2f7fcd960d6e?auto=format&fit=crop&w=1000&q=80'] },
  { id:'tanksafe', num:'04', tab:{fr:'Mix TankSafe',en:'Mix TankSafe'},
    eyebrow:{fr:'Sécurité carburant',en:'Fuel security'},
    title:{fr:'Votre carburant et vos bénéfices, protégés',en:'Your fuel and your margins, protected'},
    text:{fr:"Le carburant représente environ 40 % du coût d'exploitation d'une flotte. Le Mix TankSafe™ empêche le siphonnage, le vol et le déversement — une solution brevetée, jusqu'à 25 % d'économie démontrée et un retour sur investissement en 4 à 6 semaines.",
          en:"Fuel is around 40% of a fleet's operating cost. Mix TankSafe™ prevents siphoning, theft and spillage — a patented solution with up to 25% proven savings and payback in 4 to 6 weeks."},
    feats:[['shield',{fr:'Valve flottante « Inexpugnable » : siphonnage impossible',en:'"Impregnable" floating valve: siphoning impossible'}],['lock',{fr:'Version « Standard » : +75 % de protection anti-vol',en:'"Standard" version: +75% anti-theft protection'}],['fuel',{fr:'100 % aluminium, installation en quelques minutes',en:'100% aluminium, fitted in minutes'}],['check',{fr:'Solution brevetée, garantie 3 ans',en:'Patented solution, 3-year warranty'}]],
    imgs:['https://images.unsplash.com/photo-1528458538087-f58e9ad895da?auto=format&fit=crop&w=1000&q=80','https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1000&q=80'] }
];


const pages={home:document.getElementById('page-home'),soon:document.getElementById('page-soon')};
function showPage(id){Object.values(pages).forEach(p=>p.classList.remove('act'));pages[id].classList.add('act');}
function scrollToId(id){
  const el=document.getElementById(id); if(!el) return;
  const y=el.getBoundingClientRect().top+window.scrollY-(document.getElementById('hdr').offsetHeight-2);
  window.scrollTo({top:y,behavior:'smooth'});
}
/* Pages qui existent déjà en fichier séparé : on y redirige */
const PAGES_HTML={'boutique':'boutique.html','solutions/entreprise':'solutions-entreprise.html','solutions/particulier':'solutions-particulier.html'};
function route(){
  closeMenu();
  const h=location.hash||'#/';
  if(h.startsWith('#/')){
    const path=h.slice(2).replace(/\/$/,'');
    if(PAGES_HTML[path]){location.replace(PAGES_HTML[path]);return;}
    if(path===''){showPage('home');window.scrollTo({top:0,behavior:'smooth'});}
    else{
      const label=T.soon[path]||{fr:path,en:path};
      document.getElementById('soonTitle').textContent=t(label);
      document.getElementById('soonCrumb').textContent=t(label);
      showPage('soon');window.scrollTo({top:0,behavior:'smooth'});
    }
  }else{ /* ancre dans l'accueil : #contact, #offres, #presence… */
    const wasHome=pages.home.classList.contains('act');
    showPage('home');
    setTimeout(()=>scrollToId(h.slice(1)),wasHome?0:60);
  }
  revealCheck();
}
window.addEventListener('hashchange',route);


/* =====================================================================
   4. HÉRO : vidéo de secours
   ===================================================================== */
const heroVideo=document.getElementById('heroVideo');
heroVideo.addEventListener('error',()=>{heroVideo.style.display='none';},true);
heroVideo.play && heroVideo.play().catch(()=>{});


/* =====================================================================
   5. CHIFFRES CLÉS : compteur animé
   ===================================================================== */
function countUp(el){
  const to=+el.dataset.to, noFmt=el.dataset.noformat, from=noFmt?Math.max(0,to-40):0, dur=1400, t0=performance.now();
  const step=now=>{const p=Math.min(1,(now-t0)/dur), e=1-Math.pow(1-p,3);const v=Math.round(from+(to-from)*e);el.textContent=noFmt?v:v.toLocaleString(LANG==='fr'?'fr-FR':'en-US');if(p<1)requestAnimationFrame(step);};
  requestAnimationFrame(step);
}
let counted=false;
const kpiObs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!counted){counted=true;document.querySelectorAll('.count').forEach(countUp);}});},{threshold:.4});
kpiObs.observe(document.querySelector('.kpi-band'));


/* =====================================================================
   7. CARTE INTERACTIVE
   ===================================================================== */
/* projection Mercator identique à celle qui a généré le SVG (viewBox 1000×470) */
const MAP={W:1000,H:470,scale:1848.250952034914,tx:580.6451612903226,ty:560.9563259388881};
function lonLatToPct(lon,lat){
  const x=MAP.scale*(lon*Math.PI/180)+MAP.tx;
  const y=MAP.scale*-Math.log(Math.tan(Math.PI/4+(lat*Math.PI/180)/2))+MAP.ty;
  return {x:x/MAP.W*100,y:y/MAP.H*100};
}
function pctToLonLat(px,py){
  const x=px/100*MAP.W, y=py/100*MAP.H;
  const lon=((x-MAP.tx)/MAP.scale)*180/Math.PI;
  const lat=(2*Math.atan(Math.exp(-(y-MAP.ty)/MAP.scale))-Math.PI/2)*180/Math.PI;
  return {lon,lat};
}
const mapBox=document.getElementById('mapBox'), mapPins=document.getElementById('mapPins'), mapTabs=document.getElementById('mapTabs'), mapPanel=document.getElementById('mapPanel');
let curPays=PAYS[0].id, mapTimer=null, mapUserStopped=false;
document.getElementById('mapCount').textContent=PAYS.length;

function buildMap(){
  mapPins.innerHTML=''; mapTabs.innerHTML='';
  PAYS.forEach(p=>{
    const pos=(p.x!=null&&p.y!=null)?{x:p.x,y:p.y}:lonLatToPct(p.lon,p.lat);
    const pin=document.createElement('div'); pin.className='mpin'; pin.dataset.id=p.id;
    pin.style.left=pos.x+'%'; pin.style.top=pos.y+'%';
    pin.innerHTML=`<button type="button" aria-label="${t(p.nom)}"><span class="ring"></span><span class="core"></span></button><span class="tag">${p.flag} ${t(p.nom)}</span>`;
    pin.querySelector('button').addEventListener('click',()=>{stopMapAuto(true);selectPays(p.id);});
    pin.querySelector('button').addEventListener('mouseenter',()=>{stopMapAuto(true);selectPays(p.id);});
    mapPins.appendChild(pin);
    const tab=document.createElement('button'); tab.type='button'; tab.dataset.id=p.id; tab.setAttribute('role','tab');
    tab.innerHTML=`<span class="flag">${p.flag}</span> ${t(p.nom)}`;
    tab.addEventListener('click',()=>{stopMapAuto(true);selectPays(p.id);});
    mapTabs.appendChild(tab);
  });
  selectPays(curPays,true);
}
function renderPanel(p){
  mapPanel.classList.remove('swap'); void mapPanel.offsetWidth; mapPanel.classList.add('swap');
  mapPanel.innerHTML=`
    <div class="mp-media">
      <div class="ph">${ICON.img}<span>${t(T.photo)}</span><code>${p.photo}</code></div>
      <img src="${p.photo}" alt="${t(p.nom)} — ${p.ville}" loading="lazy" onerror="imgTry(this)">
      <span class="flagbig">${p.flag}</span>
      ${p.hq?`<span class="hq">${t(T.siege)}</span>`:''}
    </div>
    <div class="mp-body">
      <span class="eyebrow">${p.hq?t(T.siege):t(T.agence)} · ${p.ville}</span>
      <h3>${t(p.nom)}</h3>
      <p>${t(p.desc)}</p>
      <ul class="mp-list">
        ${p.tel.map((n,i)=>`<li><span class="ic">${ICON.support}</span><a href="tel:${p.telIntl[i]||''}"><b>${n}</b></a></li>`).join('')}
        <li><span class="ic">${ICON.mail}</span><a href="mailto:${p.email}">${p.email}</a></li>
        <li><span class="ic">${ICON.pin}</span><span>${p.adresse}</span></li>
      </ul>
      <div class="mp-foot"><a class="btn btn-red btn-sm" href="#contact" data-nav>${t(T.contacter)} <span class="arr">→</span></a></div>
    </div>`;
}
function selectPays(id,silent){
  curPays=id; const p=PAYS.find(x=>x.id===id);
  mapPins.querySelectorAll('.mpin').forEach(el=>el.classList.toggle('act',el.dataset.id===id));
  mapTabs.querySelectorAll('button').forEach(b=>{const on=b.dataset.id===id;b.classList.toggle('act',on);b.setAttribute('aria-selected',on);});
  mapBox.querySelectorAll('.cty.on').forEach(c=>c.classList.toggle('cur',c.dataset.c===p.code));
  renderPanel(p);
}
function startMapAuto(){
  if(mapUserStopped||matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  stopMapAuto(false);
  mapTimer=setInterval(()=>{const i=PAYS.findIndex(p=>p.id===curPays);selectPays(PAYS[(i+1)%PAYS.length].id);},4500);
}
function stopMapAuto(byUser){if(mapTimer){clearInterval(mapTimer);mapTimer=null;}if(byUser)mapUserStopped=true;}
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)startMapAuto();else stopMapAuto(false);}),{threshold:.3}).observe(mapBox);

/* mode réglage : index.html?reglage#/  → affiche x %, y % et lon/lat sous la souris */
if(/reglage/.test(location.search)){
  mapBox.classList.add('reglage');
  const ro=document.getElementById('mapReadout');
  mapBox.addEventListener('mousemove',e=>{
    const r=mapBox.getBoundingClientRect();
    const px=(e.clientX-r.left)/r.width*100, py=(e.clientY-r.top)/r.height*100;
    const ll=pctToLonLat(px,py);
    ro.textContent=`x ${px.toFixed(1)} % · y ${py.toFixed(1)} %  |  lon ${ll.lon.toFixed(2)} · lat ${ll.lat.toFixed(2)}`;
  });
  mapBox.addEventListener('click',e=>{const r=mapBox.getBoundingClientRect();console.log('PAYS x:',((e.clientX-r.left)/r.width*100).toFixed(1),'y:',((e.clientY-r.top)/r.height*100).toFixed(1));});
}


/* =====================================================================
   8. OFFRES : onglets + carrousel
   ===================================================================== */
const otabBar=document.getElementById('otabBar'), otabPanels=document.getElementById('otabPanels');
let curOffre=OFFRES[0].id, slideTimer=null;
function buildOffres(){
  otabBar.innerHTML=OFFRES.map(o=>`<button type="button" role="tab" data-id="${o.id}" aria-selected="${o.id===curOffre}" class="${o.id===curOffre?'act':''}">${t(o.tab)}${o.star?ICON.star:''}</button>`).join('');
  otabPanels.innerHTML=OFFRES.map(o=>`
    <div class="otab-panel ${o.id===curOffre?'act':''}" data-id="${o.id}">
      <div class="otab-media">
        <div class="otab-track">${o.imgs.map(s=>`<div class="otab-sl"><img src="${s}" alt="${t(o.title)}" loading="lazy"></div>`).join('')}</div>
        <span class="otab-num">${o.num} / 0${OFFRES.length}</span>
        <div class="otab-dots">${o.imgs.map((_,i)=>`<i class="${i===0?'act':''}"></i>`).join('')}</div>
      </div>
      <div class="otab-body">
        <span class="eyebrow">${t(o.eyebrow)}</span>
        <h3>${t(o.title)}</h3>
        <p>${t(o.text)}</p>
        <ul class="otab-feat">${o.feats.map(([ic,l])=>`<li><span class="ic">${ICON[ic]}</span>${t(l)}</li>`).join('')}</ul>
        <a class="btn btn-red" href="#contact" data-nav>${t(T.devis)} ${t(o.tab)} <span class="arr">→</span></a>
      </div>
    </div>`).join('');
  otabBar.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>selectOffre(b.dataset.id)));
  startSlides();
}
function selectOffre(id){
  curOffre=id;
  otabBar.querySelectorAll('button').forEach(b=>{const on=b.dataset.id===id;b.classList.toggle('act',on);b.setAttribute('aria-selected',on);});
  otabPanels.querySelectorAll('.otab-panel').forEach(p=>p.classList.toggle('act',p.dataset.id===id));
  startSlides();
}
function startSlides(){
  if(slideTimer)clearInterval(slideTimer);
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const panel=otabPanels.querySelector('.otab-panel.act'); if(!panel) return;
  const track=panel.querySelector('.otab-track'), dots=panel.querySelectorAll('.otab-dots i'); let i=0;
  track.style.transform='translateX(0)'; dots.forEach((d,k)=>d.classList.toggle('act',k===0));
  slideTimer=setInterval(()=>{i=(i+1)%dots.length;track.style.transform=`translateX(-${i*100}%)`;dots.forEach((d,k)=>d.classList.toggle('act',k===i));},3800);
}


/* ---- rendu propre à la page (appelé par applyLang dans common.js) ---- */
window.renderPage=function(){buildMap();buildOffres();};
document.addEventListener('DOMContentLoaded',()=>{route();});
