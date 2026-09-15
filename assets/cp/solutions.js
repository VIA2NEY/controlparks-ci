/* =====================================================================
   CONTROL PARKS V2 — pages Solutions (même gabarit, deux contenus)
   Le type est lu sur <body data-solution="entreprise|particulier">.
   Pour changer un texte, un secteur, un bénéfice : modifiez SOLUTIONS ci-dessous.
   Dépend de assets/cp/common.js (chargé avant).
   ===================================================================== */

Object.assign(I18N.en,{
  'sol.tab.apercu':'Overview','sol.tab.secteurs':'Sectors','sol.tab.usages':'Use cases','sol.tab.fonctions':'Key features','sol.tab.techno':'Technology','sol.tab.integrations':'Integrations',
  'sol.benef':'Key benefits','sol.live':'Live map','sol.activity':'Activity','sol.recent':'Recent activity','sol.helped':'How we helped','sol.results':'Results','sol.example':'Illustrative example',
  'sol.cta.demo':'Request a demo','sol.cta.prix':'See pricing','sol.more':'Learn more','sol.reco':'Recommended offer','sol.photo':'Your photo here',
  'sol.sw.entreprise':'Business','sol.sw.particulier':'Individuals'
});

const SOLUTIONS = {
  /* ===================================================================
     ENTREPRISE
     =================================================================== */
  entreprise: {
    eyebrow:{fr:'Solutions · Entreprise',en:'Solutions · Business'},
    title:{fr:"Des solutions par <mark>secteur d'activité</mark>",en:'Solutions by <mark>industry</mark>'},
    lead:{fr:"Des solutions adaptées à chaque métier. <b>Conçues pour vos défis, guidées par vos résultats.</b>",en:'Tailored solutions for every trade. <b>Built for your challenges, driven by your results.</b>'},
    photo:'images/Gemini_Generated_Image_hero.png',
    caption:{fr:'Une gestion de flotte qui fait avancer votre entreprise.',en:'Fleet management that moves your business forward.'},
    gridTab:'sol.tab.secteurs',
    industries:[
      {ic:'oil',   t:{fr:'Pétrole & Gaz',en:'Oil & Gas'},                 d:{fr:"Supervisez vos citernes et convois en zones isolées. Sécurité des chargements, conformité et traçabilité.",en:'Monitor tankers and convoys in remote areas. Cargo security, compliance and traceability.'}, off:'Mix Premium'},
      {ic:'truck', t:{fr:'Transport & Logistique',en:'Transport & Logistics'}, d:{fr:"Visibilité en temps réel sur toute la flotte. Maintenance, itinéraires et ponctualité maîtrisés.",en:'Real-time visibility across the fleet. Maintenance, routing and on-time performance under control.'}, off:'Mix Vision'},
      {ic:'key',   t:{fr:'Location & Leasing',en:'Rental & Leasing'},     d:{fr:"Gérez votre parc loué à grande échelle : disponibilité, kilométrage, coupure moteur et protection de la valeur.",en:'Manage your rental fleet at scale: availability, mileage, engine cut-off and residual value protection.'}, off:'Mix Essentiel'},
      {ic:'wrench',t:{fr:'Flottes de service',en:'Service Fleets'},       d:{fr:"Optimisez les tournées et les interventions terrain. Productivité et satisfaction client en hausse.",en:'Optimise dispatch and field operations. Higher productivity and customer satisfaction.'}, off:'Mix Essentiel'},
      {ic:'building',t:{fr:'BTP & Construction',en:'Construction'},       d:{fr:"Suivez engins et véhicules mixtes. Taux d'utilisation, sécurité et responsabilité sur chantier.",en:'Track mixed fleets and equipment. Utilisation, safety and job-site accountability.'}, off:'Mix Premium'},
      {ic:'mine',  t:{fr:'Mines & Carrières',en:'Mining & Quarries'},     d:{fr:"Contrôle des accès, vitesses et fatigue des conducteurs sur pistes. Zéro accident évitable.",en:'Access control, speed and driver fatigue on haul roads. Zero avoidable accidents.'}, off:'Mix Vision'}
    ],
    benefits:[
      {t:{fr:"Améliorer l'efficacité",en:'Improve efficiency'},   d:{fr:'Automatisez les rapports et réduisez les tâches manuelles.',en:'Automate reporting and reduce manual tasks.'}},
      {t:{fr:'Réduire les coûts',en:'Reduce costs'},              d:{fr:'Optimisez carburant, maintenance et heures de conduite.',en:'Optimise fuel, maintenance and driving hours.'}},
      {t:{fr:'Augmenter la disponibilité',en:'Increase uptime'},  d:{fr:'Anticipez la maintenance et limitez les immobilisations.',en:'Plan maintenance ahead and minimise downtime.'}},
      {t:{fr:'Assurer la conformité',en:'Ensure compliance'},     d:{fr:'Respectez la réglementation et les standards de vos donneurs d\'ordre.',en:'Stay on top of regulations and client standards.'}},
      {t:{fr:'Renforcer la sécurité',en:'Enhance safety'},        d:{fr:'Surveillez le comportement de conduite et corrigez-le en temps réel.',en:'Monitor driver behaviour and correct it in real time.'}},
      {t:{fr:'Décider sur des données',en:'Data-driven insights'},d:{fr:'Des tableaux de bord clairs pour de meilleures décisions.',en:'Clear dashboards to support better decisions.'}}
    ],
    mock:{ tile:{lbl:{fr:'Consommation moyenne',en:'Average consumption'}, val:'6,2 L/100', delta:'↓ 8 %', note:{fr:'vs mois dernier',en:'vs last month'}},
           rows:[['CIT-1223','12 min'],['FRG-5678','28 min'],['BRL-9012','41 min']] },
    kase:{ who:{fr:'Un transporteur d\'Abidjan',en:'A haulier in Abidjan'},
           p:{fr:"Ce transporteur avait besoin de visibilité en temps réel et d'un meilleur contrôle sur une flotte de plus de 60 véhicules en croissance.",en:'This haulier needed real-time visibility and better control over a growing fleet of 60+ vehicles.'},
           res:[['chart',{fr:"+35 % d'efficacité de flotte",en:'+35% fleet efficiency'}],['fuel',{fr:'−20 % de coûts carburant',en:'−20% fuel costs'}],['clock',{fr:'Suivi et alertes en temps réel',en:'Real-time tracking and alerts'}]] },
    features:[
      {ic:'pin',   t:{fr:'Géolocalisation temps réel',en:'Real-time geolocation'}, d:{fr:'Position, vitesse et statut moteur de chaque véhicule, à la seconde.',en:'Position, speed and engine status of every vehicle, to the second.'}},
      {ic:'cam',   t:{fr:'Caméras IA (ADAS & DMS)',en:'AI cameras (ADAS & DMS)'}, d:{fr:'Fatigue, téléphone au volant, distances de sécurité : alerte en cabine et preuve vidéo.',en:'Fatigue, phone use, safe distance: in-cab alert and video evidence.'}},
      {ic:'lock',  t:{fr:'Coupure moteur à distance',en:'Remote engine cut-off'}, d:{fr:'Kill-switch et démarrage authentifié pour neutraliser un vol.',en:'Kill-switch and authenticated start to stop a theft.'}},
      {ic:'bell',  t:{fr:'Alertes intelligentes',en:'Smart alerts'},           d:{fr:'Excès de vitesse, géo-barrières, arrêts injustifiés, ouverture de citerne.',en:'Speeding, geofences, unjustified stops, tank opening.'}},
      {ic:'file',  t:{fr:'Rapports automatiques',en:'Automatic reports'},      d:{fr:'Trajets, carburant, conduite : rapports quotidiens et mensuels par e-mail.',en:'Trips, fuel, driving: daily and monthly reports by e-mail.'}},
      {ic:'fuel',  t:{fr:'Contrôle carburant',en:'Fuel control'},              d:{fr:'Consommation exacte via CAN bus et protection anti-siphonnage TankSafe.',en:'Exact consumption via CAN bus and TankSafe anti-siphoning protection.'}}
    ],
    tech:[
      {ic:'cpu',   t:{fr:'Boîtier télématique MiX',en:'MiX telematics unit'},  d:{fr:'Unité embarquée certifiée, installée et paramétrée par nos techniciens.',en:'Certified on-board unit, installed and configured by our technicians.'}},
      {ic:'cam',   t:{fr:'Caméras route & cabine',en:'Road & cabin cameras'},  d:{fr:'Vidéo HD, analyse IA embarquée, enregistrement sur événement.',en:'HD video, on-board AI analysis, event-triggered recording.'}},
      {ic:'plug',  t:{fr:'Capteurs & accessoires',en:'Sensors & accessories'}, d:{fr:'Sondes carburant, température, ouverture de portes, bouton SOS.',en:'Fuel probes, temperature, door opening, SOS button.'}},
      {ic:'key',   t:{fr:'Identification conducteur',en:'Driver ID'},          d:{fr:'Clé ou badge RFID : chaque trajet est rattaché à son conducteur.',en:'RFID key or badge: every trip is linked to its driver.'}},
      {ic:'cloud', t:{fr:'Plateforme cloud MiX',en:'MiX cloud platform'},      d:{fr:'Cartographie HD, historique illimité, accès web sécurisé.',en:'HD mapping, unlimited history, secure web access.'}},
      {ic:'phone', t:{fr:'Application mobile',en:'Mobile app'},               d:{fr:'Votre flotte dans la poche, iOS et Android, notifications en temps réel.',en:'Your fleet in your pocket, iOS and Android, real-time notifications.'}}
    ],
    integrations:[
      {ic:'cloud', t:{fr:'API ouverte',en:'Open API'},              d:{fr:'Connectez vos outils métier (ERP, TMS, gestion de paie).',en:'Connect your business tools (ERP, TMS, payroll).'}},
      {ic:'file',  t:{fr:'Exports Excel & PDF',en:'Excel & PDF exports'}, d:{fr:'Tous les rapports exportables en un clic.',en:'Every report exportable in one click.'}},
      {ic:'bell',  t:{fr:'Alertes e-mail & SMS',en:'E-mail & SMS alerts'}, d:{fr:'Les bonnes personnes prévenues au bon moment.',en:'The right people notified at the right time.'}},
      {ic:'chart', t:{fr:'Tableaux de bord',en:'Dashboards'},       d:{fr:'Indicateurs consolidés par site, par flotte, par conducteur.',en:'Consolidated KPIs by site, fleet and driver.'}},
      {ic:'support',t:{fr:'Centre de contrôle 24/7',en:'24/7 control centre'}, d:{fr:'Nos opérateurs surveillent et vous appellent en cas d\'incident.',en:'Our operators monitor and call you in case of incident.'}},
      {ic:'wrench',t:{fr:'Installation & formation',en:'Installation & training'}, d:{fr:'Pose sur site, formation de vos gestionnaires et conducteurs.',en:'On-site fitting, training for your managers and drivers.'}}
    ],
    cta:{t:{fr:'La bonne solution pour votre secteur',en:'The right solution for your industry'}, p:{fr:'Conçue pour vos défis. Guidée par vos résultats.',en:'Built for your challenges. Driven by your results.'}}
  },

  /* ===================================================================
     PARTICULIER
     =================================================================== */
  particulier: {
    eyebrow:{fr:'Solutions · Particulier',en:'Solutions · Individuals'},
    title:{fr:'Protégez votre véhicule, <mark>où qu\'il soit</mark>',en:'Protect your vehicle, <mark>wherever it is</mark>'},
    lead:{fr:"Anti-vol, suivi en temps réel et alertes sur votre téléphone. <b>Pensé pour les particuliers, installé en moins d'une heure.</b>",en:'Anti-theft, real-time tracking and alerts on your phone. <b>Designed for individuals, fitted in under an hour.</b>'},
    photo:'images/vtc_driver.avif',
    caption:{fr:'Votre voiture sous contrôle, même quand vous n\'êtes pas au volant.',en:'Your car under control, even when you are not driving.'},
    gridTab:'sol.tab.usages',
    industries:[
      {ic:'shield',t:{fr:'Anti-vol & récupération',en:'Anti-theft & recovery'}, d:{fr:"Alerte dès qu'un mouvement suspect est détecté, coupure moteur à distance et localisation pour la police.",en:'Alert on suspicious movement, remote engine cut-off and location for the police.'}, off:'Mix Essentiel'},
      {ic:'family',t:{fr:'Famille & jeunes conducteurs',en:'Family & young drivers'}, d:{fr:"Vitesse, zones autorisées, heures de sortie : gardez un œil bienveillant sur les trajets de vos proches.",en:'Speed, allowed zones, curfew hours: keep a caring eye on your family\'s trips.'}, off:'Mix Essentiel'},
      {ic:'car',   t:{fr:'Chauffeurs VTC indépendants',en:'Independent ride-hailing drivers'}, d:{fr:"Historique des courses, consommation et kilométrage pour piloter votre activité.",en:'Trip history, fuel and mileage to run your business.'}, off:'Mix Essentiel'},
      {ic:'moto',  t:{fr:'Motos & deux-roues',en:'Motorbikes & two-wheelers'}, d:{fr:"Un traceur compact et discret, résistant à l'eau, pour les véhicules les plus exposés au vol.",en:'A compact, discreet, water-resistant tracker for the vehicles most exposed to theft.'}, off:'Boutique'},
      {ic:'route', t:{fr:'Longs trajets & voyages',en:'Long trips & travel'}, d:{fr:"Partagez votre position avec vos proches et gardez une trace de chaque étape du voyage.",en:'Share your location with relatives and keep a record of every leg of the journey.'}, off:'Mix Essentiel'},
      {ic:'key',   t:{fr:'Véhicule prêté ou loué',en:'Lent or rented vehicle'}, d:{fr:"Vous prêtez votre voiture ? Suivez son usage, ses kilomètres et bloquez le démarrage si besoin.",en:'Lending your car? Track its use and mileage, and block the start if needed.'}, off:'Mix Essentiel'}
    ],
    benefits:[
      {t:{fr:'Localiser en un coup d\'œil',en:'Locate at a glance'}, d:{fr:'La position de votre véhicule en direct sur votre téléphone.',en:'Your vehicle\'s live position on your phone.'}},
      {t:{fr:'Couper le moteur à distance',en:'Cut the engine remotely'}, d:{fr:'En cas de vol, immobilisez le véhicule en toute sécurité.',en:'In case of theft, safely immobilise the vehicle.'}},
      {t:{fr:'Être alerté immédiatement',en:'Be alerted instantly'}, d:{fr:'Mouvement, remorquage, sortie de zone, excès de vitesse.',en:'Movement, towing, zone exit, speeding.'}},
      {t:{fr:'Revoir vos trajets',en:'Review your trips'}, d:{fr:'Historique complet des déplacements et des arrêts.',en:'Full history of trips and stops.'}},
      {t:{fr:'Maîtriser le carburant',en:'Control fuel'}, d:{fr:'Consommation et kilométrage pour dépenser moins.',en:'Consumption and mileage to spend less.'}},
      {t:{fr:'Installer sans contrainte',en:'Fit without hassle'}, d:{fr:'Pose par nos techniciens, en agence ou à domicile.',en:'Fitted by our technicians, at our branch or at home.'}}
    ],
    mock:{ tile:{lbl:{fr:'Dernier trajet',en:'Last trip'}, val:'18,4 km', delta:'✓', note:{fr:'Cocody → Plateau · 32 min',en:'Cocody → Plateau · 32 min'}},
           rows:[['Ma berline','2 min'],['Moto de Koffi','1 h'],['Voiture de maman','3 h']] },
    kase:{ who:{fr:'Un propriétaire à Cocody',en:'A car owner in Cocody'},
           p:{fr:"Sa berline a été volée de nuit devant son domicile. L'alerte de mouvement est arrivée sur son téléphone en quelques secondes.",en:'His saloon was stolen at night in front of his home. The movement alert reached his phone within seconds.'},
           res:[['clock',{fr:'Véhicule retrouvé en 40 minutes',en:'Vehicle recovered in 40 minutes'}],['lock',{fr:'Moteur coupé à distance',en:'Engine cut off remotely'}],['shield',{fr:'Aucun dommage, aucune franchise',en:'No damage, no excess'}]] },
    features:[
      {ic:'pin',   t:{fr:'Position en direct',en:'Live position'}, d:{fr:'Votre véhicule sur la carte, à tout moment, depuis l\'application.',en:'Your vehicle on the map, any time, from the app.'}},
      {ic:'lock',  t:{fr:'Blocage du démarrage',en:'Start blocking'}, d:{fr:'Coupez le moteur à distance ou exigez une clé d\'authentification.',en:'Cut the engine remotely or require an authentication key.'}},
      {ic:'bell',  t:{fr:'Alertes sur téléphone',en:'Phone alerts'}, d:{fr:'Mouvement sans contact, remorquage, vitesse, sortie de zone.',en:'Movement without ignition, towing, speed, zone exit.'}},
      {ic:'clock', t:{fr:'Historique des trajets',en:'Trip history'}, d:{fr:'Chaque déplacement enregistré : départ, arrivée, arrêts, distance.',en:'Every trip recorded: departure, arrival, stops, distance.'}},
      {ic:'route', t:{fr:'Zones autorisées',en:'Allowed zones'}, d:{fr:'Définissez un périmètre et soyez prévenu s\'il est franchi.',en:'Set a perimeter and be warned if it is crossed.'}},
      {ic:'family',t:{fr:'Partage familial',en:'Family sharing'}, d:{fr:'Plusieurs utilisateurs sur le même véhicule, chacun avec ses droits.',en:'Several users on the same vehicle, each with their own rights.'}}
    ],
    tech:[
      {ic:'cpu',   t:{fr:'Traceur GPS discret',en:'Discreet GPS tracker'}, d:{fr:'Installé hors de vue, alimenté par la batterie du véhicule.',en:'Fitted out of sight, powered by the vehicle battery.'}},
      {ic:'plug',  t:{fr:'Traceur autonome',en:'Standalone tracker'}, d:{fr:'Sur batterie, sans installation, pour motos et véhicules prêtés.',en:'Battery-powered, no installation, for motorbikes and lent vehicles.'}},
      {ic:'key',   t:{fr:'Clé d\'authentification',en:'Authentication key'}, d:{fr:'Sans la clé, le véhicule ne démarre pas.',en:'Without the key, the vehicle will not start.'}},
      {ic:'phone', t:{fr:'Application mobile',en:'Mobile app'}, d:{fr:'iOS et Android, notifications instantanées.',en:'iOS and Android, instant notifications.'}},
      {ic:'cloud', t:{fr:'Espace web sécurisé',en:'Secure web space'}, d:{fr:'Historique et rapports accessibles depuis n\'importe quel navigateur.',en:'History and reports from any browser.'}},
      {ic:'support',t:{fr:'Assistance 24 h/24',en:'24-hour assistance'}, d:{fr:'En cas de vol, notre centre de contrôle vous accompagne jusqu\'à la récupération.',en:'In case of theft, our control centre supports you until recovery.'}}
    ],
    integrations:[
      {ic:'cart',  t:{fr:'Achat en boutique',en:'Buy in the shop'}, d:{fr:'Traceurs et accessoires disponibles en ligne, pose incluse ou non.',en:'Trackers and accessories available online, with or without fitting.'}},
      {ic:'bell',  t:{fr:'SMS & notifications',en:'SMS & notifications'}, d:{fr:'Alertes par SMS même sans connexion internet.',en:'SMS alerts even without an internet connection.'}},
      {ic:'shield',t:{fr:'Assurances partenaires',en:'Partner insurers'}, d:{fr:'Un véhicule tracé peut réduire votre prime auprès de certains assureurs.',en:'A tracked vehicle can lower your premium with some insurers.'}},
      {ic:'file',  t:{fr:'Rapport mensuel',en:'Monthly report'}, d:{fr:'Kilométrage et consommation résumés chaque mois par e-mail.',en:'Mileage and consumption summarised by e-mail every month.'}},
      {ic:'family',t:{fr:'Comptes multiples',en:'Multiple accounts'}, d:{fr:'Ajoutez un proche pour qu\'il suive aussi le véhicule.',en:'Add a relative so they can follow the vehicle too.'}},
      {ic:'wrench',t:{fr:'Pose à domicile',en:'Home fitting'}, d:{fr:'Nos techniciens se déplacent à Abidjan et dans nos agences.',en:'Our technicians travel across Abidjan and to our branches.'}}
    ],
    cta:{t:{fr:'La tranquillité, à partir d\'un simple boîtier',en:'Peace of mind, from a simple box'}, p:{fr:'Choisissez votre formule, nous nous occupons de l\'installation.',en:'Pick your plan, we take care of the installation.'}}
  }
};

/* ---- rendu ------------------------------------------------------------ */
const SOL_TYPE=document.body.dataset.solution||'entreprise';
let curTab='apercu';
const TICK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>';
const MOCK_MAP=`<svg viewBox="0 0 640 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <rect width="640" height="300" fill="#F4F6F9"/>
  <g stroke="#DDE2EA" stroke-width="10" fill="none" stroke-linecap="round"><path d="M-20 80H660M-20 170H660M-20 250H660M90 -20V320M220 -20V320M360 -20V320M500 -20V320"/></g>
  <g fill="#E3E6EB"><rect x="110" y="95" width="90" height="60" rx="6"/><rect x="240" y="20" width="100" height="45" rx="6"/><rect x="380" y="185" width="100" height="50" rx="6"/><rect x="520" y="95" width="80" height="60" rx="6"/></g>
  <path d="M60 220 C 140 210, 160 120, 240 130 S 400 90, 470 60" fill="none" stroke="#C8322A" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 0"/>
  <circle cx="60" cy="220" r="7" fill="#141B2E" stroke="#fff" stroke-width="3"/>
  <g transform="translate(470 60)"><circle r="14" fill="rgba(200,50,42,.18)"><animate attributeName="r" values="10;20;10" dur="2.4s" repeatCount="indefinite"/></circle><circle r="7" fill="#C8322A" stroke="#fff" stroke-width="3"/></g>
</svg>`;

function cards(list){
  return `<div class="feat-grid">${list.map(f=>`<div class="feat-card"><span class="ic">${ICON[f.ic]||ICON.check}</span><h4>${t(f.t)}</h4><p>${t(f.d)}</p>${f.off?`<span class="tag">${I18N.en['sol.reco']&&LANG==='en'?I18N.en['sol.reco']:'Offre recommandée'} · ${f.off}</span>`:''}</div>`).join('')}</div>`;
}
window.renderPage=function(){
  const S=SOLUTIONS[SOL_TYPE];
  document.getElementById('solEyebrow').textContent=t(S.eyebrow);
  document.getElementById('solTitle').innerHTML=t(S.title);
  document.getElementById('solLead').innerHTML=t(S.lead);
  document.getElementById('solCaption').textContent=t(S.caption);
  const ph=document.getElementById('solPhoto');
  ph.querySelector('code').textContent=S.photo;
  const img=ph.querySelector('img'); if(img.getAttribute('src')!==S.photo){img.src=S.photo;}
  document.querySelectorAll('.sol-switch a').forEach(a=>a.classList.toggle('act',a.dataset.type===SOL_TYPE));

  document.getElementById('indGrid').innerHTML=S.industries.map(i=>`<div class="ind-card rv"><span class="ic">${ICON[i.ic]}</span><div><h3>${t(i.t)}</h3><p>${t(i.d)}</p><span class="off">${LANG==='en'?'Recommended offer':'Offre recommandée'} · ${i.off}</span></div></div>`).join('');

  const tabs=[['apercu','sol.tab.apercu'],['secteurs',S.gridTab],['fonctions','sol.tab.fonctions'],['techno','sol.tab.techno'],['integrations','sol.tab.integrations']];
  const lbl=k=>LANG==='en'?I18N.en[k]:({'sol.tab.apercu':'Aperçu','sol.tab.secteurs':'Secteurs','sol.tab.usages':'Usages','sol.tab.fonctions':'Fonctionnalités clés','sol.tab.techno':'Technologie','sol.tab.integrations':'Intégrations'})[k];
  document.getElementById('tabbar').innerHTML=tabs.map(([id,k])=>`<button type="button" role="tab" data-tab="${id}" class="${id===curTab?'act':''}" aria-selected="${id===curTab}">${lbl(k)}</button>`).join('');
  document.querySelectorAll('#tabbar button').forEach(b=>b.addEventListener('click',()=>{curTab=b.dataset.tab;document.querySelectorAll('#tabbar button').forEach(x=>{const on=x.dataset.tab===curTab;x.classList.toggle('act',on);x.setAttribute('aria-selected',on);});document.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('act',p.dataset.tab===curTab));}));

  const en=LANG==='en';
  const apercu=`
    <div class="ov-grid">
      <div class="benefits rv rv-l">
        <h3>${en?'Key benefits':'Bénéfices clés'}</h3>
        <ul>${S.benefits.map(b=>`<li><span class="tick">${TICK}</span><span><b>${t(b.t)}</b>${t(b.d)}</span></li>`).join('')}</ul>
      </div>
      <div class="mock rv rv-d200">
        <div class="mock-tabs"><span class="act">${en?'Live map':'Carte en direct'}</span><span>${en?'Activity':'Activité'}</span></div>
        <div class="mock-body">${MOCK_MAP}
          <div class="mock-tile"><small>${t(S.mock.tile.lbl)}</small><b>${S.mock.tile.val}<i>${S.mock.tile.delta}</i></b><em>${t(S.mock.tile.note)}</em></div>
          <div class="mock-list"><b>${en?'Recent activity':'Activité récente'}</b>${S.mock.rows.map(r=>`<div><span class="veh">${ICON.truck}${r[0]}</span><span>${r[1]}</span></div>`).join('')}</div>
        </div>
      </div>
      <div class="case rv rv-r rv-d250">
        <div class="case-head"><small>${en?'How we helped':'Comment nous avons aidé'}</small><b>${t(S.kase.who)}</b></div>
        <div class="case-body"><p>${t(S.kase.p)}</p><h4>${en?'Results':'Résultats'}</h4><ul>${S.kase.res.map(([ic,l])=>`<li><span class="ic">${ICON[ic]}</span>${t(l)}</li>`).join('')}</ul><div class="note">${en?'Illustrative example':'Exemple illustratif'}</div></div>
      </div>
    </div>`;
  document.getElementById('tabPanels').innerHTML=`
    <div class="tab-panel ${curTab==='apercu'?'act':''}" data-tab="apercu">${apercu}</div>
    <div class="tab-panel ${curTab==='secteurs'?'act':''}" data-tab="secteurs">${cards(S.industries.map(i=>({ic:i.ic,t:i.t,d:i.d,off:i.off})))}</div>
    <div class="tab-panel ${curTab==='fonctions'?'act':''}" data-tab="fonctions">${cards(S.features)}</div>
    <div class="tab-panel ${curTab==='techno'?'act':''}" data-tab="techno">${cards(S.tech)}</div>
    <div class="tab-panel ${curTab==='integrations'?'act':''}" data-tab="integrations">${cards(S.integrations)}</div>`;

  document.getElementById('ctaTitle').textContent=t(S.cta.t);
  document.getElementById('ctaText').textContent=t(S.cta.p);
  document.title=(SOL_TYPE==='entreprise'?(en?'Business solutions':'Solutions Entreprise'):(en?'Solutions for individuals':'Solutions Particulier'))+' — Control Parks';
  revealCheck();
  setTimeout(()=>document.querySelectorAll('.rv').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight)el.classList.add('in');}),60);
};
