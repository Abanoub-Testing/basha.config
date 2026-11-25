(function(){
var T={
en:{nav_features:"Features",nav_pricing:"Pricing",nav_faq:"FAQ",nav_activate:"Activate device",
demo:"Design prototype: demo data only, no real login or payment.",
l_h:"Activate your device",l_p:"Sign in with the MAC address and device key shown in the app.",l_mac:"Device MAC",l_key:"Device key",l_btn:"Continue",
l_help:"Where do I find these?",l_help_p:"Open Basha Player on your device. The MAC address and the 6-character device key are shown on the first screen and in Settings.",
l_demo:"Demo: enter any valid MAC (AA:BB:CC:DD:EE:FF) and any 6-character key.",
e_mac:"Enter a valid MAC address, like AA:BB:CC:DD:EE:FF.",e_key:"The device key has 6 letters or numbers.",
s_device:"Device",s_account:"Account details",s_activate:"Activate device",s_key:"Device key",s_playlists:"Manage playlists",s_pin:"Parent PIN",s_switch:"Switch MAC",s_logout:"Log out",soon:"Soon",
a_h:"Account details",a_days:"days left",a_mac:"MAC address",a_status:"Status",a_start:"Trial started",a_exp:"Expires",a_plan:"Plan",a_plan_v:"Free trial",
st_trial:"Free trial",st_active:"Active",st_life:"Lifetime",
a_note:"Your free trial is running. Activate to keep using the app after it ends.",a_cta:"Activate now",
p_h:"Activate device",p_p:"Choose a plan and a payment method. Your device unlocks right after payment.",plan1:"1 year",plan2:"Lifetime",per_year:"/ year",once:"one time",best:"Best value",p_year_d:"Renew yearly",p_life_d:"Pay once, never renew",
p_method:"Payment method",m_card:"Card",m_card_d:"Visa, Mastercard",m_pp_d:"Pay with your PayPal account",m_code:"Activation code",m_code_d:"From an authorised reseller",
c_l:"Activation code",
p_ck:"I have my own playlist. I understand the app includes no channels or content.",p_note:"Basha Player is a media player only. Please read the Legal terms before paying.",
p_total:"Total",p_pay:"Pay and activate",p_help:"Problem with a payment?",p_wa:"Contact support on WhatsApp",
k_h:"Device key",k_p:"Set a new key for your device. It protects your account and playlists.",k_new:"New device key (6 characters)",k_note:"If you forget your key you can always read it in the app on your device.",k_save:"Save key",k_ok:"Key updated (demo).",
soon_h:"Coming in the next step",soon_p:"Playlists, Parent PIN and device switching come with the full customer panel.",
d_h:"Device activated",d_p:"Open the app. It unlocks by itself within a few seconds. (Demo only.)",d_btn:"Back to account"},
ar:{nav_features:"المميزات",nav_pricing:"الأسعار",nav_faq:"أسئلة شائعة",nav_activate:"تفعيل الجهاز",
demo:"نموذج تصميم: بيانات تجريبية فقط، مفيش دخول أو دفع حقيقي.",
l_h:"فعّل جهازك",l_p:"ادخل بعنوان الـ MAC ومفتاح الجهاز الظاهرين في التطبيق.",l_mac:"MAC الجهاز",l_key:"مفتاح الجهاز",l_btn:"متابعة",
l_help:"فين ألاقيهم؟",l_help_p:"افتح باشا بلاير على جهازك. عنوان الـ MAC ومفتاح الجهاز (٦ حروف) ظاهرين في أول شاشة وفي الإعدادات.",
l_demo:"تجربة: اكتب أي MAC صحيح (AA:BB:CC:DD:EE:FF) وأي مفتاح من ٦ حروف.",
e_mac:"اكتب MAC صحيح، زي AA:BB:CC:DD:EE:FF.",e_key:"مفتاح الجهاز ٦ حروف أو أرقام.",
s_device:"الجهاز",s_account:"بيانات الحساب",s_activate:"تفعيل الجهاز",s_key:"مفتاح الجهاز",s_playlists:"إدارة القوائم",s_pin:"رمز الرقابة الأبوية",s_switch:"نقل الجهاز",s_logout:"تسجيل الخروج",soon:"قريباً",
a_h:"بيانات الحساب",a_days:"يوم متبقي",a_mac:"عنوان MAC",a_status:"الحالة",a_start:"بداية التجربة",a_exp:"ينتهي في",a_plan:"الخطة",a_plan_v:"تجربة مجانية",
st_trial:"تجربة مجانية",st_active:"مفعّل",st_life:"مدى الحياة",
a_note:"تجربتك المجانية شغالة. فعّل عشان تكمل استخدام التطبيق بعد ما تخلص.",a_cta:"فعّل دلوقتي",
p_h:"تفعيل الجهاز",p_p:"اختار الخطة وطريقة الدفع. جهازك بيتفتح بعد الدفع على طول.",plan1:"سنة",plan2:"مدى الحياة",per_year:"/ سنة",once:"مرة واحدة",best:"الأوفر",p_year_d:"تجديد كل سنة",p_life_d:"ادفع مرة وبس",
p_method:"طريقة الدفع",m_card:"كارت",m_card_d:"فيزا، ماستركارد",m_pp_d:"ادفع بحساب PayPal",m_code:"كود تفعيل",m_code_d:"من موزع معتمد",
c_l:"كود التفعيل",
p_ck:"عندي قائمة تشغيل خاصة بيا. وفاهم إن التطبيق مفيهوش قنوات أو محتوى.",p_note:"باشا بلاير مشغّل وسائط فقط. اقرأ الشروط القانونية قبل الدفع.",
p_total:"الإجمالي",p_pay:"ادفع وفعّل",p_help:"مشكلة في الدفع؟",p_wa:"كلمنا على واتساب",
k_h:"مفتاح الجهاز",k_p:"حدد مفتاح جديد لجهازك. بيحمي حسابك وقوائمك.",k_new:"مفتاح جديد (٦ حروف)",k_note:"لو نسيت المفتاح تقدر دايماً تشوفه في التطبيق على جهازك.",k_save:"احفظ المفتاح",k_ok:"اتغيّر المفتاح (تجربة).",
soon_h:"جاي في الخطوة الجاية",soon_p:"القوائم والرقابة الأبوية ونقل الجهاز هتيجي مع لوحة العميل الكاملة.",
d_h:"الجهاز اتفعّل",d_p:"افتح التطبيق. هيتفتح لوحده في ثواني. (تجربة فقط.)",d_btn:"رجوع للحساب"},
de:{nav_features:"Funktionen",nav_pricing:"Preise",nav_faq:"FAQ",nav_activate:"Gerät aktivieren",
demo:"Design-Prototyp: nur Demodaten, keine echte Anmeldung oder Zahlung.",
l_h:"Gerät aktivieren",l_p:"Melde dich mit der MAC-Adresse und dem Geräteschlüssel aus der App an.",l_mac:"Geräte-MAC",l_key:"Geräteschlüssel",l_btn:"Weiter",
l_help:"Wo finde ich diese Angaben?",l_help_p:"Öffne Basha Player auf deinem Gerät. MAC-Adresse und der 6-stellige Geräteschlüssel stehen auf dem ersten Bildschirm und in den Einstellungen.",
l_demo:"Demo: gib eine beliebige gültige MAC (AA:BB:CC:DD:EE:FF) und einen beliebigen 6-stelligen Schlüssel ein.",
e_mac:"Gib eine gültige MAC-Adresse ein, z. B. AA:BB:CC:DD:EE:FF.",e_key:"Der Geräteschlüssel hat 6 Buchstaben oder Ziffern.",
s_device:"Gerät",s_account:"Kontodetails",s_activate:"Gerät aktivieren",s_key:"Geräteschlüssel",s_playlists:"Playlists verwalten",s_pin:"Kindersicherungs-PIN",s_switch:"MAC wechseln",s_logout:"Abmelden",soon:"Bald",
a_h:"Kontodetails",a_days:"Tage übrig",a_mac:"MAC-Adresse",a_status:"Status",a_start:"Test gestartet",a_exp:"Läuft ab",a_plan:"Tarif",a_plan_v:"Kostenloser Test",
st_trial:"Kostenloser Test",st_active:"Aktiv",st_life:"Lebenslang",
a_note:"Dein kostenloser Test läuft. Aktiviere, um die App danach weiter zu nutzen.",a_cta:"Jetzt aktivieren",
p_h:"Gerät aktivieren",p_p:"Wähle Tarif und Zahlungsart. Dein Gerät wird direkt nach der Zahlung freigeschaltet.",plan1:"1 Jahr",plan2:"Lebenslang",per_year:"/ Jahr",once:"einmalig",best:"Bestes Angebot",p_year_d:"Jährlich verlängern",p_life_d:"Einmal zahlen, nie verlängern",
p_method:"Zahlungsart",m_card:"Karte",m_card_d:"Visa, Mastercard",m_pp_d:"Mit deinem PayPal-Konto zahlen",m_code:"Aktivierungscode",m_code_d:"Von einem autorisierten Reseller",
c_l:"Aktivierungscode",
p_ck:"Ich habe eine eigene Playlist. Mir ist klar, dass die App keine Kanäle oder Inhalte enthält.",p_note:"Basha Player ist nur ein Mediaplayer. Bitte lies vor der Zahlung die Rechtlichen Hinweise.",
p_total:"Gesamt",p_pay:"Bezahlen und aktivieren",p_help:"Problem mit der Zahlung?",p_wa:"Support per WhatsApp",
k_h:"Geräteschlüssel",k_p:"Lege einen neuen Schlüssel für dein Gerät fest. Er schützt dein Konto und deine Playlists.",k_new:"Neuer Geräteschlüssel (6 Zeichen)",k_note:"Wenn du den Schlüssel vergisst, kannst du ihn immer in der App auf deinem Gerät ablesen.",k_save:"Schlüssel speichern",k_ok:"Schlüssel geändert (Demo).",
soon_h:"Kommt im nächsten Schritt",soon_p:"Playlists, Kindersicherung und Gerätewechsel kommen mit dem vollständigen Kundenbereich.",
d_h:"Gerät aktiviert",d_p:"Öffne die App. Sie entsperrt sich in wenigen Sekunden von selbst. (Nur Demo.)",d_btn:"Zurück zum Konto"}};
var IC={user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3"/>',list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',swap:'<path d="M7 7h13l-3-3M17 17H4l3 3"/>',out:'<path d="M9 21H5V3h4M16 17l5-5-5-5M21 12H9"/>'};
var lang='en';try{lang=localStorage.getItem('bp_lang')||'en'}catch(e){}
var qm=location.search.match(/lang=(ar|en|de)/);if(qm)lang=qm[1];if(!T[lang])lang='en';
var $=function(s){return document.querySelector(s)},$$=function(s){return document.querySelectorAll(s)};
var st={mac:'',plan:'life',method:'card',active:false,lifetime:false};
function fmt(d){return d.toLocaleDateString(lang==='ar'?'ar-EG':lang==='de'?'de-DE':'en-GB',{day:'numeric',month:'short',year:'numeric'})}
function render(){
  var d=T[lang];document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  $$('[data-t]').forEach(function(e){var v=d[e.getAttribute('data-t')];if(v!=null)e.textContent=v});
  $$('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.lang===lang)});
  $$('.ic').forEach(function(e){e.innerHTML='<svg viewBox="0 0 24 24">'+IC[e.dataset.ic]+'</svg>'});
  refresh();
}
function refresh(){
  var d=T[lang],now=new Date(),start=new Date(now-2*864e5),exp=new Date(+start+7*864e5);
  $('#fStart').textContent=fmt(start);
  var left=5;
  if(st.active){
    var e2=st.lifetime?null:new Date(+now+365*864e5);
    $('#fExp').textContent=st.lifetime?'∞':fmt(e2);
    $('#fStatus').textContent=st.lifetime?d.st_life:d.st_active;
    $('#statusBadge').textContent=st.lifetime?d.st_life:d.st_active;$('#statusBadge').className='status active';
    $('#days').textContent='∞';$('#rf').style.strokeDashoffset=0;$('#rf').style.stroke='#2DD4BF';
    $('.callout').style.display='none';$('.facts div:last-child dd').textContent=st.lifetime?d.plan2:d.plan1;
  }else{
    $('#fExp').textContent=fmt(exp);$('#days').textContent=left;$('#rf').style.strokeDashoffset=327*(1-left/7);
  }
}
function view(n){$$('.view').forEach(function(v){v.hidden=v.id!=='v-'+n});$$('.si[data-view]').forEach(function(b){b.classList.toggle('on',b.dataset.view===n)});
  if(n==='account'){var r=$('#rf');if(!st.active){r.style.strokeDashoffset=327;setTimeout(function(){r.style.strokeDashoffset=327*(1-5/7)},50)}}}
$$('.lang button').forEach(function(b){b.addEventListener('click',function(){lang=b.dataset.lang;try{localStorage.setItem('bp_lang',lang)}catch(e){}render()})});
$$('.si[data-view]').forEach(function(b){b.addEventListener('click',function(){view(b.dataset.view)})});
$$('[data-go]').forEach(function(b){b.addEventListener('click',function(){view(b.dataset.go)})});
$('#mac').addEventListener('input',function(e){var v=e.target.value.replace(/[^0-9a-fA-F]/g,'').toUpperCase().slice(0,12);e.target.value=v.match(/.{1,2}/g)?v.match(/.{1,2}/g).join(':'):''});
$('#loginForm').addEventListener('submit',function(e){e.preventDefault();var d=T[lang],m=$('#mac').value,k=$('#key').value;
  if(!/^([0-9A-F]{2}:){5}[0-9A-F]{2}$/.test(m)){$('#err').textContent=d.e_mac;return}
  if(!/^[A-Za-z0-9]{6}$/.test(k)){$('#err').textContent=d.e_key;return}
  $('#err').textContent='';st.mac=m;$('#macShow').textContent=m;$('#fMac').textContent=m;$('#avatar').textContent=m.slice(0,1)==='A'?'B':m[0];
  $('#login').hidden=true;$('#portal').hidden=false;view('account');window.scrollTo(0,0);refresh()});
$('#logout').addEventListener('click',function(){$('#portal').hidden=true;$('#login').hidden=false;$('#key').value=''});
$$('.plan2').forEach(function(b){b.addEventListener('click',function(){st.plan=b.dataset.plan;$$('.plan2').forEach(function(x){x.classList.toggle('on',x===b)});$('#total').textContent=st.plan==='year'?'€5':'€10'})});
$$('.meth').forEach(function(b){b.addEventListener('click',function(){st.method=b.dataset.m;$$('.meth').forEach(function(x){x.classList.toggle('on',x===b)});$('#codeBox').hidden=st.method!=='code'})});
$('#payBtn').addEventListener('click',function(){
  if(!$('#ck').checked){$('.ck').animate([{transform:'translateX(0)'},{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(0)'}],{duration:300});$('.ck').style.color='#F5C518';return}
  st.active=true;st.lifetime=st.plan==='life';$('#done').hidden=false;refresh()});
$('#doneBtn').addEventListener('click',function(){$('#done').hidden=true;view('account')});
$('#keySave').addEventListener('click',function(){var v=$('#newKey').value;if(/^[A-Za-z0-9]{6}$/.test(v)){$('#keyOk').hidden=false}});
render();
var dm=location.search.match(/demo=(\w+)/);
if(dm){$('#mac').value='AA:BB:CC:DD:EE:FF';$('#key').value='K7M2QX';$('#loginForm').dispatchEvent(new Event('submit',{cancelable:true}));if(dm[1]!=='account'&&dm[1]!=='login')view(dm[1]);if(dm[1]==='activate'){$('#ck').checked=true}}
/* background */
var cv=$('#bg'),cx=cv.getContext('2d'),W,H,P=[],O=[{x:.2,y:.15,c:'45,212,191',s:.55,p:0},{x:.85,y:.4,c:'245,197,24',s:.4,p:2},{x:.4,y:.9,c:'91,79,199',s:.5,p:4}];
function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=[];for(var i=0;i<(innerWidth<700?24:48);i++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.6+.4,v:Math.random()*.25+.05,g:Math.random()<.45,a:Math.random()*.6+.2})}
size();addEventListener('resize',size);var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function frame(ts){cx.fillStyle='#060A13';cx.fillRect(0,0,W,H);var t=ts/1000;
  O.forEach(function(o){var x=(o.x+Math.sin(t*.15+o.p)*.08)*W,y=(o.y+Math.cos(t*.12+o.p)*.07)*H,R=o.s*Math.max(W,H)*.6,g=cx.createRadialGradient(x,y,0,x,y,R);g.addColorStop(0,'rgba('+o.c+',.17)');g.addColorStop(1,'rgba('+o.c+',0)');cx.fillStyle=g;cx.fillRect(0,0,W,H)});
  P.forEach(function(p){p.y-=p.v;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.283);cx.fillStyle=(p.g?'rgba(245,197,24,':'rgba(45,212,191,')+p.a*.7+')';cx.fill()});
  if(!reduce)requestAnimationFrame(frame)}
requestAnimationFrame(frame);
})();
