(function(){
var ICONS={
tv:'<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
film:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
ball:'<circle cx="12" cy="12" r="9"/><path d="M12 7l4 3-1.5 5h-5L8 10z"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.600-7 10-7 10z"/>',
resume:'<circle cx="12" cy="12" r="9"/><path d="M10 8.500l5 3.500-5 3.500z"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.500 3 14.500 0 18M12 3c-3 3.500-3 14.500 0 18"/>',
bell:'<path d="M6 9a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7zM10 20a2 2 0 0 0 4 0"/>'};
var DEVICES=[
 {n:{ar:'هواتف وتابلت أندرويد',en:'Android phones and tablets',de:'Android-Handys und Tablets'},i:'phone',now:true},
 {n:{ar:'Android TV',en:'Android TV',de:'Android TV'},i:'tv',now:false},
 {n:{ar:'Google TV',en:'Google TV',de:'Google TV'},i:'tv',now:false},
 {n:{ar:'Samsung (Tizen)',en:'Samsung (Tizen)',de:'Samsung (Tizen)'},i:'tv',now:false},
 {n:{ar:'LG (webOS)',en:'LG (webOS)',de:'LG (webOS)'},i:'tv',now:false},
 {n:{ar:'Fire TV Stick',en:'Fire TV Stick',de:'Fire TV Stick'},i:'stick',now:false},
 {n:{ar:'Windows',en:'Windows',de:'Windows'},i:'pc',now:false}];
var DI={phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',tv:'<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',stick:'<rect x="2" y="9" width="16" height="6" rx="2"/><path d="M18 12h3"/>',pc:'<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M2 20h20M9 16v4M15 16v4"/>'};
var lang='ar';
try{lang=localStorage.getItem('bp_lang')||'ar'}catch(e){}
var qm=location.search.match(/lang=(ar|en|de)/);if(qm)lang=qm[1];
if(!I18N[lang])lang='ar';
function t(k){return I18N[lang][k]}
function render(){
  var d=I18N[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(function(el){var v=d[el.getAttribute('data-i18n')];if(v!=null)el.textContent=v});
  document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.lang===lang)});
  document.getElementById('featGrid').innerHTML=d.feats.map(function(f){return '<div class="card reveal in"><div class="ico"><svg viewBox="0 0 24 24">'+ICONS[f[0]]+'</svg></div><h3>'+f[1]+'</h3><p>'+f[2]+'</p></div>'}).join('');
  document.getElementById('faqList').innerHTML=d.faqs.map(function(q){return '<details><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>'}).join('');
  var row=DEVICES.map(function(x){return '<div class="dev'+(x.now?' now':'')+'"><svg viewBox="0 0 24 24">'+DI[x.i]+'</svg><b>'+x.n[lang]+'</b><em>'+(x.now?d.dev_now:d.dev_soon)+'</em></div>'}).join('');
  document.getElementById('devTrack').innerHTML=row+row+row+row;
  bindCards();
}
function bindCards(){
  document.querySelectorAll('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})});
}
document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){lang=b.dataset.lang;try{localStorage.setItem('bp_lang',lang)}catch(e){}render()})});
render();

/* reveal on scroll */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});

/* legal route */
function route(){
  var legal=location.hash==='#legal';
  document.getElementById('legal').hidden=!legal;
  document.getElementById('home').style.display=legal?'none':'';
  if(legal)window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);route();

/* phone tilt */
var ph=document.getElementById('phone'),stage=document.querySelector('.stage');
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* animated background: drifting glow orbs + particles */
var cv=document.getElementById('bg'),cx=cv.getContext('2d'),W,H,P=[],O=[];
function size(){var r=Math.min(devicePixelRatio||1,1.5);W=cv.width=innerWidth*r;H=cv.height=innerHeight*r;cv.style.width=innerWidth+'px';cv.style.height=innerHeight+'px';
  var n=innerWidth<700?28:60;P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:(Math.random()*1.8+.4)*r,v:(Math.random()*.25+.05)*r,g:Math.random()<.45,a:Math.random()*.6+.2});
  O=[{x:.2,y:.15,c:'45,212,191',s:.55,p:0},{x:.85,y:.4,c:'245,197,24',s:.4,p:2},{x:.4,y:.9,c:'91,79,199',s:.5,p:4}]}
size();addEventListener('resize',size);
var t0=0;
function frame(ts){
  cx.clearRect(0,0,W,H);cx.fillStyle='#060A13';cx.fillRect(0,0,W,H);
  var tt=ts/1000;
  O.forEach(function(o){var x=(o.x+Math.sin(tt*.15+o.p)*.08)*W,y=(o.y+Math.cos(tt*.12+o.p)*.07)*H,R=o.s*Math.max(W,H)*.6;
    var g=cx.createRadialGradient(x,y,0,x,y,R);g.addColorStop(0,'rgba('+o.c+',.17)');g.addColorStop(1,'rgba('+o.c+',0)');cx.fillStyle=g;cx.fillRect(0,0,W,H)});
  P.forEach(function(p){p.y-=p.v;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}
    cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.283);cx.fillStyle=(p.g?'rgba(245,197,24,':'rgba(45,212,191,')+p.a*.7+')';cx.fill()});
  if(!reduce)requestAnimationFrame(frame)
}
requestAnimationFrame(frame);
})();
