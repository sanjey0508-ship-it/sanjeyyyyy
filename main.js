/* ===== EDIT YOUR CONTENT HERE ===== */
const CONTACT_EMAIL = "sanjey0508@gmail.com"; // enquiries are delivered to this inbox
/* Social + chat. WHATSAPP = country code + number, digits only (e.g. "919876543210"). Leave "" to hide. */
/* Paste your Apps Script Web App URL here (see apps-script.gs). Leave "" to keep using FormSubmit. */
const SHEET_URL="";
const WHATSAPP = "919361381605";
const INSTAGRAM = "https://instagram.com/Sanjuu_CreovX"; // full link, e.g. "https://instagram.com/yourname"
const LINKEDIN = "";  // full link
const SERVICES = [
 {i:"📣",t:"Digital Marketing",d:"Helping brands improve their online presence through social media, content strategy, SEO, paid advertising, and digital growth activities.",l:["Social Media Marketing","Content Strategy","Social Media Management","SEO Basics","Meta Ads","Google Ads Basics","Content Planning","Marketing Analytics"],c:"Explore Digital Marketing",f:"Marketing"},
 {i:"🎬",t:"Video Editing",d:"Creating engaging short-form and social media videos designed to capture attention and communicate clearly.",l:["Instagram Reels","YouTube Shorts","Promotional Videos","Social Media Videos","Basic Motion Graphics","Captions & Subtitles","Transitions","Color Correction","Audio Enhancement"],c:"View Video Work",f:"Video"},
 {i:"🎨",t:"Graphic Design",d:"Creating clean and engaging visual content that helps brands communicate their ideas effectively.",l:["Social Media Posts","Posters","Flyers","Banners","Thumbnails","Brand Creatives","Event Designs","Presentation Designs","Basic Brand Identity"],c:"View Design Work",f:"Design"},
 {i:"💻",t:"Web Development",d:"Building clean, fast and responsive websites for businesses, creators and entrepreneurs.",l:["Business Websites","Portfolio Websites","Landing Pages","Responsive Design","Website Redesign","Basic SEO Setup","Contact Forms & Integrations","Website Optimization","Hosting & Deployment"],c:"View Web Work",f:"Web"}];
const SKILLS = {Marketing:["Social Media Marketing","SEO","Meta Ads","Content Strategy","Analytics"],Video:["Short-form Editing","Reels","YouTube Shorts","Captions","Basic Motion Graphics"],Design:["Graphic Design","Social Media Design","Posters","Thumbnails","Branding Basics"],Web:["HTML & CSS","JavaScript","Responsive Design","Landing Pages","Basic SEO"]};
const TOOLS = [["Canva",1],["CapCut",1],["Photoshop",1],["Premiere Pro",1],["Meta Ads Manager",1],["Google Analytics",1],["HTML / CSS / JS",1],["GitHub & Vercel",1],["Figma",1],["ChatGPT / AI tools",1]]; // set 0 to hide a tool
/* Projects, testimonials and in-progress cards now live in content.json (edit via Pages CMS) */
let PROJECTS=[],TESTIMONIALS=[],WIP=[];
const STEPS = [["Discover","Understand the client's business, audience, goals, and requirements."],["Plan","Develop the creative direction, strategy, and project plan."],["Create","Design, edit, develop, or execute the required solution."],["Refine","Review the work and make improvements based on feedback."],["Deliver","Deliver the final project in the required format."]];
const WHY = [["Creative + Technical","Combining design, marketing, editing, and development skills."],["Client-Focused","Understanding the objective before creating the solution."],["Continuous Learning","Constantly improving skills and exploring new digital tools."],["Flexible","Able to work across different digital requirements."]];
const WHO = ["Small Businesses","Startups","Personal Brands","Content Creators","E-commerce Businesses","Local Businesses","Student Entrepreneurs","Online Brands"];
/* ================================== */
const $=s=>document.querySelector(s);
const tabs=(el,items,fn,first)=>{el.innerHTML=items.map(x=>`<button class="tab${x===first?" on":""}" data-k="${x}">${x}</button>`).join("");el.onclick=e=>{const b=e.target.closest(".tab");if(!b)return;el.querySelectorAll(".tab").forEach(t=>t.classList.toggle("on",t===b));fn(b.dataset.k)}};
if($("#svc"))$("#svc").innerHTML=SERVICES.map(s=>`<article class="card"><div class="ico">${s.i}</div><h3>${s.t}</h3><p>${s.d}</p><ul>${s.l.map(x=>`<li>${x.replace(/&/g,"&amp;")}</li>`).join("")}</ul><a class="more" href="portfolio.html?f=${s.f}" data-f="${s.f}">${s.c} →</a></article>`).join("");
const showSk=k=>$("#sk").innerHTML=`<div class="card"><h3>${k}</h3><div class="chips">${SKILLS[k].map(x=>`<span>${x}</span>`).join("")}</div></div>`;
if($("#stabs")){tabs($("#stabs"),Object.keys(SKILLS),showSk,"Marketing");showSk("Marketing")}
if($("#tools"))$("#tools").innerHTML=TOOLS.filter(t=>t[1]).map(t=>`<span>${t[0]}</span>`).join("");
function renderContent(){
if($("#proj"))$("#proj").innerHTML=PROJECTS.concat(WIP.map(w=>({...w,wip:1}))).map(p=>p.wip?`<article class="card proj wip" data-c="${p.cat}"><div class="th">⏳ In Progress</div><small>${p.cat}</small><h3 style="font-size:19px;margin:6px 0">${p.t}</h3><p>${p.d}</p></article>`:`<article class="card proj${p.wip?" wip":""}" data-c="${p.cat}">${p.img?`<div class="th img"><img src="${p.img}" alt="${p.t}" loading="lazy"></div>`:`<div class="th" style="background:linear-gradient(135deg,${p.g})">${p.cat}</div>`}<small>${p.cat}</small>${p.sample?'<span class="badge">Sample</span>':""}<h3 style="font-size:19px;margin:6px 0">${p.t}</h3><p>${p.d}</p><div class="chips" style="margin:0 0 14px">${p.tools.map(x=>`<span>${x}</span>`).join("")}</div>${p.link?`<a class="more" href="${p.link}" target="_blank" rel="noopener">View Project →</a>`:`<span class="more" style="opacity:.6">${p.note||"Case study coming soon"}</span>`}</article>`).join("");
const filt=k=>document.querySelectorAll(".proj").forEach(c=>c.classList.toggle("hide",k!=="All"&&c.dataset.c!==k));
if($("#ftabs")){tabs($("#ftabs"),["All","Marketing","Video","Design","Web"],filt,"All");const qf=new URLSearchParams(location.search).get("f");if(qf){const qb=[...document.querySelectorAll("#ftabs .tab")].find(t=>t.dataset.k===qf);qb&&qb.click()}}
document.querySelectorAll("[data-f]").forEach(a=>a.addEventListener("click",()=>{const b=[...document.querySelectorAll("#ftabs .tab")].find(t=>t.dataset.k===a.dataset.f);b&&b.click()}));
if($("#testi")){const T=TESTIMONIALS.filter(x=>x.q.trim());if(T.length){$("#testimonials").style.display="";$("#testi").innerHTML=T.map(x=>`<figure class="card tq"><blockquote>“${x.q}”</blockquote><figcaption>${x.img?`<img src="${x.img}" alt="${x.n} logo">`:""}<span><b>${x.n}</b><small>${x.r}</small></span></figcaption></figure>`).join("")}}
}
if($("#proj")||$("#testi"))fetch("content.json",{cache:"no-cache"}).then(r=>r.json()).then(c=>{PROJECTS=c.projects||[];WIP=c.wip||[];TESTIMONIALS=c.testimonials||[];renderContent()}).catch(()=>{/* keep prerendered HTML */});
if($("#steps"))$("#steps").innerHTML=STEPS.map(s=>`<div class="card step"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("");
if($("#why"))$("#why").innerHTML=WHY.map(w=>`<div class="card"><h3 style="font-size:19px">${w[0]}</h3><p>${w[1]}</p></div>`).join("");
if($("#who"))$("#who").innerHTML=WHO.map(w=>`<span>${w}</span>`).join("");
const wa=WHATSAPP.replace(/\D/g,""),waUrl=wa?`https://wa.me/${wa}?text=${encodeURIComponent("Hi Sanjey, I'd like to discuss a project.")}`:"";
const soc=[["WhatsApp",waUrl],["Instagram",INSTAGRAM],["LinkedIn",LINKEDIN],["Email","mailto:"+CONTACT_EMAIL]].filter(x=>x[1]);
const ft=document.querySelector("footer .wrap");if(ft)ft.insertAdjacentHTML("beforeend",`<div class="fl soc" style="flex-basis:100%">${soc.map(x=>`<a href="${x[1]}"${x[1].startsWith("http")?' target="_blank" rel="noopener"':""}>${x[0]}</a>`).join("")}</div>`);
if(waUrl)document.body.insertAdjacentHTML("beforeend",`<a class="wa" href="${waUrl}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">💬 Chat on WhatsApp</a>`);
if($("#chat"))$("#chat").innerHTML=`<h3>Prefer to talk directly?</h3><p class="sub" style="margin:8px 0 16px">Skip the form and message me.</p><div class="ctas" style="margin:0">${waUrl?`<a class="btn p" href="${waUrl}" target="_blank" rel="noopener">WhatsApp Me</a>`:""}<a class="btn" href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>${INSTAGRAM?`<a class="btn" href="${INSTAGRAM}" target="_blank" rel="noopener">Instagram</a>`:""}${LINKEDIN?`<a class="btn" href="${LINKEDIN}" target="_blank" rel="noopener">LinkedIn</a>`:""}</div>`;
const setMenu=o=>{$("#links").classList.toggle("open",o);document.body.classList.toggle("menu-open",o);$("#burger").textContent=o?"✕":"☰";$("#burger").setAttribute("aria-expanded",o)};
$("#burger").setAttribute("aria-controls","links");setMenu(false);
$("#burger").onclick=()=>setMenu(!$("#links").classList.contains("open"));
$("#links").onclick=e=>{if(e.target.tagName==="A")setMenu(false)};
document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
matchMedia("(min-width:961px)").addEventListener("change",e=>{if(e.matches)setMenu(false)});
$("#theme").onclick=()=>{const d=document.documentElement;d.dataset.theme=d.dataset.theme==="dark"?"":"dark";try{localStorage.setItem("theme",d.dataset.theme)}catch(e){}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
/* Contact: validates, then sends the enquiry straight to CONTACT_EMAIL via FormSubmit (falls back to the mail app if sending fails) */
if($("#form"))$("#form").onsubmit=async e=>{e.preventDefault();const f=e.target,v=n=>f[n].value.trim(),ok=$("#ok"),btn=f.querySelector("button[type=submit]");
 if(v("website"))return;
 ok.style.display="block";
 if(!v("name")||!/^\S+@\S+\.\S+$/.test(v("email"))||!v("desc")){ok.textContent="Please add your name, a valid email and a project description.";return}
 const data={name:v("name"),email:v("email"),brand:v("brand"),service:v("service"),budget:v("budget"),deadline:v("deadline"),message:v("desc"),_subject:"New project enquiry: "+v("service"),_replyto:v("email"),_template:"table",_captcha:"false"};
 btn.disabled=true;ok.textContent="Sending...";
 try{
  const r=await fetch(SHEET_URL||"https://formsubmit.co/ajax/"+CONTACT_EMAIL,SHEET_URL?{method:"POST",body:JSON.stringify(data)}:{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(data)});
  const j=await r.json();
  if(!r.ok||j.ok===false||j.success==="false"||j.success===false)throw new Error(j.message||"failed");
  f.reset();ok.textContent="Thanks! Your enquiry has been sent. I'll get back to you soon."
 }catch(err){
  const body=`Name: ${data.name}\nEmail: ${data.email}\nBrand: ${data.brand}\nService: ${data.service}\nBudget: ${data.budget}\nDeadline: ${data.deadline}\n\n${data.message}`;
  ok.textContent="Couldn't send directly, so your email app will open with the enquiry ready to send.";
  location.href=`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Project enquiry: "+data.service)}&body=${encodeURIComponent(body)}`
 }finally{btn.disabled=false}
};
