(function(){
var T={
en:{nav_features:"Features",nav_pricing:"Pricing",nav_faq:"FAQ",nav_activate:"Activate device",
demo:"Design prototype: demo data only, no real login or payment.",
l_h:"Activate your device",l_p:"Sign in with the MAC address and device key shown in the app.",l_mac:"Device MAC",l_key:"Device key",l_btn:"Continue",
l_help:"Where do I find these?",l_help_p:"Open Basha Player on your device. The MAC address and the 6-character device key are shown on the first screen and in Settings.",
l_demo:"Demo: enter any valid MAC (AA:BB:CC:DD:EE:FF) and any 6-character key.",
e_mac:"Enter a valid MAC address, like AA:BB:CC:DD:EE:FF.",e_key:"The device key has 6 letters or numbers.",
s_device:"Device",s_account:"Account details",s_activate:"Activate device",s_key:"Device key",s_playlists:"Manage playlists",s_pin:"Parent PIN",s_logout:"Log out",soon:"Soon",
a_h:"Account details",a_days:"days left",a_mac:"MAC address",a_status:"Status",a_start:"Trial started",a_exp:"Expires",a_plan:"Plan",a_plan_v:"Free trial",
st_trial:"Free trial",st_active:"Active",st_life:"Lifetime",
a_note:"Your free trial is running. Activate to keep using the app after it ends.",a_cta:"Activate now",
p_h:"Activate device",p_p:"Choose a plan and a payment method. Your device unlocks right after payment.",plan1:"1 year",plan2:"Lifetime",per_year:"/ year",once:"one time",best:"Best value",p_year_d:"Renew yearly",p_life_d:"Pay once, never renew",
p_method:"Payment method",m_card:"Card",m_card_d:"Visa, Mastercard",m_pp_d:"Pay with your PayPal account",m_code:"Activation code",m_code_d:"From an authorised reseller",
c_l:"Activation code",
p_ck:"I have my own playlist. I understand the app includes no channels or content.",p_note:"Basha Player is a media player only. Please read the Legal terms before paying.",
p_total:"Total",p_pay:"Pay and activate",p_help:"Problem with a payment?",p_wa:"Contact support on WhatsApp",
k_h:"Device key",k_p:"Set a new key for your device. It protects your account and playlists.",k_new:"New device key (6 characters)",k_note:"If you forget your key you can always read it in the app on your device.",k_save:"Save key",k_ok:"Key updated (demo).",
k_cur:"Current key",k_show:"Show",k_hide:"Hide",k_rand:"Generate",
pl_h:"Manage playlists",pl_p:"Add the playlists you own. They are saved to your account and load in the app on this device.",pl_add:"Add playlist",pl_edit:"Edit playlist",pl_t_link:"Playlist link",pl_t_login:"Server login",pl_name:"Playlist name",pl_url:"Playlist link (M3U)",pl_host:"Server address",pl_user:"Username",pl_pass:"Password",pl_note:"Basha Player does not provide any playlists or content. Only add playlists you have the right to use.",pl_save:"Save playlist",pl_cancel:"Cancel",pl_empty:"No playlists yet. Add your first one below.",pl_edit_b:"Edit",pl_del_b:"Delete",pl_e_name:"Give the playlist a name.",pl_e_url:"Enter a valid link starting with http:// or https://",pl_e_login:"Fill in the server address, username and password.",pl_max:"You can add up to 5 playlists. Delete one to add another.",pl_link_l:"Link",pl_login_l:"Login",
pin_h:"Parent PIN",pin_p:"Protect settings and playlists on this device with a 4-digit PIN.",pin_on:"Parent PIN",pin_on_d:"Ask for the PIN before opening protected areas.",pin_new:"New PIN",pin_conf:"Confirm PIN",pin_c1:"Protect playlists",pin_c2:"Protect settings",pin_save:"Save PIN",pin_ok:"Parent PIN saved. The app asks for it on this device.",pin_e1:"The PIN has exactly 4 digits.",pin_e2:"The two PINs do not match.",

soon_h:"Coming in the next step",soon_p:"Playlists and Parent PIN come with the full customer panel.",
d_h:"Device activated",d_p:"Open the app. It unlocks by itself within a few seconds. (Demo only.)",d_btn:"Back to account"},
ar:{nav_features:"المميزات",nav_pricing:"الأسعار",nav_faq:"أسئلة شائعة",nav_activate:"تفعيل الجهاز",
demo:"نموذج تصميم: بيانات تجريبية فقط، مفيش دخول أو دفع حقيقي.",
l_h:"فعّل جهازك",l_p:"ادخل بعنوان الـ MAC ومفتاح الجهاز الظاهرين في التطبيق.",l_mac:"MAC الجهاز",l_key:"مفتاح الجهاز",l_btn:"متابعة",
l_help:"فين ألاقيهم؟",l_help_p:"افتح باشا بلاير على جهازك. عنوان الـ MAC ومفتاح الجهاز (٦ حروف) ظاهرين في أول شاشة وفي الإعدادات.",
l_demo:"تجربة: اكتب أي MAC صحيح (AA:BB:CC:DD:EE:FF) وأي مفتاح من ٦ حروف.",
e_mac:"اكتب MAC صحيح، زي AA:BB:CC:DD:EE:FF.",e_key:"مفتاح الجهاز ٦ حروف أو أرقام.",
s_device:"الجهاز",s_account:"بيانات الحساب",s_activate:"تفعيل الجهاز",s_key:"مفتاح الجهاز",s_playlists:"إدارة القوائم",s_pin:"رمز الرقابة الأبوية",s_logout:"تسجيل الخروج",soon:"قريباً",
a_h:"بيانات الحساب",a_days:"يوم متبقي",a_mac:"عنوان MAC",a_status:"الحالة",a_start:"بداية التجربة",a_exp:"ينتهي في",a_plan:"الخطة",a_plan_v:"تجربة مجانية",
st_trial:"تجربة مجانية",st_active:"مفعّل",st_life:"مدى الحياة",
a_note:"تجربتك المجانية شغالة. فعّل عشان تكمل استخدام التطبيق بعد ما تخلص.",a_cta:"فعّل دلوقتي",
p_h:"تفعيل الجهاز",p_p:"اختار الخطة وطريقة الدفع. جهازك بيتفتح بعد الدفع على طول.",plan1:"سنة",plan2:"مدى الحياة",per_year:"/ سنة",once:"مرة واحدة",best:"الأوفر",p_year_d:"تجديد كل سنة",p_life_d:"ادفع مرة وبس",
p_method:"طريقة الدفع",m_card:"كارت",m_card_d:"فيزا، ماستركارد",m_pp_d:"ادفع بحساب PayPal",m_code:"كود تفعيل",m_code_d:"من موزع معتمد",
c_l:"كود التفعيل",
p_ck:"عندي قائمة تشغيل خاصة بيا. وفاهم إن التطبيق مفيهوش قنوات أو محتوى.",p_note:"باشا بلاير مشغّل وسائط فقط. اقرأ الشروط القانونية قبل الدفع.",
p_total:"الإجمالي",p_pay:"ادفع وفعّل",p_help:"مشكلة في الدفع؟",p_wa:"كلمنا على واتساب",
k_h:"مفتاح الجهاز",k_p:"حدد مفتاح جديد لجهازك. بيحمي حسابك وقوائمك.",k_new:"مفتاح جديد (٦ حروف)",k_note:"لو نسيت المفتاح تقدر دايماً تشوفه في التطبيق على جهازك.",k_save:"احفظ المفتاح",k_ok:"اتغيّر المفتاح (تجربة).",
k_cur:"المفتاح الحالي",k_show:"إظهار",k_hide:"إخفاء",k_rand:"مفتاح عشوائي",
pl_h:"إدارة القوائم",pl_p:"ضيف القوائم اللي بتملكها. بتتحفظ على حسابك وبتظهر في التطبيق على الجهاز ده.",pl_add:"إضافة قائمة",pl_edit:"تعديل القائمة",pl_t_link:"رابط قائمة",pl_t_login:"بيانات سيرفر",pl_name:"اسم القائمة",pl_url:"رابط القائمة (M3U)",pl_host:"عنوان السيرفر",pl_user:"اسم المستخدم",pl_pass:"كلمة السر",pl_note:"Basha Player مبيقدمش أي قوائم أو محتوى. ضيف بس القوائم اللي ليك حق استخدامها.",pl_save:"حفظ القائمة",pl_cancel:"إلغاء",pl_empty:"لسه مفيش قوائم. ضيف أول قائمة من تحت.",pl_edit_b:"تعديل",pl_del_b:"حذف",pl_e_name:"اكتب اسم للقائمة.",pl_e_url:"اكتب رابط صحيح بيبدأ بـ http:// أو https://",pl_e_login:"املأ عنوان السيرفر واسم المستخدم وكلمة السر.",pl_max:"تقدر تضيف لحد 5 قوائم. امسح واحدة عشان تضيف غيرها.",pl_link_l:"رابط",pl_login_l:"بيانات دخول",
pin_h:"الرقابة الأبوية",pin_p:"احمي الإعدادات والقوائم على الجهاز ده برمز من 4 أرقام.",pin_on:"رمز الرقابة الأبوية",pin_on_d:"اطلب الرمز قبل فتح الأجزاء المحمية.",pin_new:"الرمز الجديد",pin_conf:"تأكيد الرمز",pin_c1:"حماية القوائم",pin_c2:"حماية الإعدادات",pin_save:"حفظ الرمز",pin_ok:"الرمز اتحفظ. التطبيق هيطلبه على الجهاز ده.",pin_e1:"الرمز لازم يكون 4 أرقام بالظبط.",pin_e2:"الرمزين مش زي بعض.",

soon_h:"جاي في الخطوة الجاية",soon_p:"القوائم والرقابة الأبوية ونقل الجهاز هتيجي مع لوحة العميل الكاملة.",
d_h:"الجهاز اتفعّل",d_p:"افتح التطبيق. هيتفتح لوحده في ثواني. (تجربة فقط.)",d_btn:"رجوع للحساب"},
de:{nav_features:"Funktionen",nav_pricing:"Preise",nav_faq:"FAQ",nav_activate:"Gerät aktivieren",
demo:"Design-Prototyp: nur Demodaten, keine echte Anmeldung oder Zahlung.",
l_h:"Gerät aktivieren",l_p:"Melde dich mit der MAC-Adresse und dem Geräteschlüssel aus der App an.",l_mac:"Geräte-MAC",l_key:"Geräteschlüssel",l_btn:"Weiter",
l_help:"Wo finde ich diese Angaben?",l_help_p:"Öffne Basha Player auf deinem Gerät. MAC-Adresse und der 6-stellige Geräteschlüssel stehen auf dem ersten Bildschirm und in den Einstellungen.",
l_demo:"Demo: gib eine beliebige gültige MAC (AA:BB:CC:DD:EE:FF) und einen beliebigen 6-stelligen Schlüssel ein.",
e_mac:"Gib eine gültige MAC-Adresse ein, z. B. AA:BB:CC:DD:EE:FF.",e_key:"Der Geräteschlüssel hat 6 Buchstaben oder Ziffern.",
s_device:"Gerät",s_account:"Kontodetails",s_activate:"Gerät aktivieren",s_key:"Geräteschlüssel",s_playlists:"Playlists verwalten",s_pin:"Kindersicherungs-PIN",s_logout:"Abmelden",soon:"Bald",
a_h:"Kontodetails",a_days:"Tage übrig",a_mac:"MAC-Adresse",a_status:"Status",a_start:"Test gestartet",a_exp:"Läuft ab",a_plan:"Tarif",a_plan_v:"Kostenloser Test",
st_trial:"Kostenloser Test",st_active:"Aktiv",st_life:"Lebenslang",
a_note:"Dein kostenloser Test läuft. Aktiviere, um die App danach weiter zu nutzen.",a_cta:"Jetzt aktivieren",
p_h:"Gerät aktivieren",p_p:"Wähle Tarif und Zahlungsart. Dein Gerät wird direkt nach der Zahlung freigeschaltet.",plan1:"1 Jahr",plan2:"Lebenslang",per_year:"/ Jahr",once:"einmalig",best:"Bestes Angebot",p_year_d:"Jährlich verlängern",p_life_d:"Einmal zahlen, nie verlängern",
p_method:"Zahlungsart",m_card:"Karte",m_card_d:"Visa, Mastercard",m_pp_d:"Mit deinem PayPal-Konto zahlen",m_code:"Aktivierungscode",m_code_d:"Von einem autorisierten Reseller",
c_l:"Aktivierungscode",
p_ck:"Ich habe eine eigene Playlist. Mir ist klar, dass die App keine Kanäle oder Inhalte enthält.",p_note:"Basha Player ist nur ein Mediaplayer. Bitte lies vor der Zahlung die Rechtlichen Hinweise.",
p_total:"Gesamt",p_pay:"Bezahlen und aktivieren",p_help:"Problem mit der Zahlung?",p_wa:"Support per WhatsApp",
k_h:"Geräteschlüssel",k_p:"Lege einen neuen Schlüssel für dein Gerät fest. Er schützt dein Konto und deine Playlists.",k_new:"Neuer Geräteschlüssel (6 Zeichen)",k_note:"Wenn du den Schlüssel vergisst, kannst du ihn immer in der App auf deinem Gerät ablesen.",k_save:"Schlüssel speichern",k_ok:"Schlüssel geändert (Demo).",
k_cur:"Aktueller Schlüssel",k_show:"Anzeigen",k_hide:"Verbergen",k_rand:"Erzeugen",
pl_h:"Playlists verwalten",pl_p:"Füge deine eigenen Playlists hinzu. Sie werden in deinem Konto gespeichert und in der App auf diesem Gerät geladen.",pl_add:"Playlist hinzufügen",pl_edit:"Playlist bearbeiten",pl_t_link:"Playlist-Link",pl_t_login:"Server-Login",pl_name:"Name der Playlist",pl_url:"Playlist-Link (M3U)",pl_host:"Serveradresse",pl_user:"Benutzername",pl_pass:"Passwort",pl_note:"Basha Player stellt keine Playlists oder Inhalte bereit. Füge nur Playlists hinzu, die du nutzen darfst.",pl_save:"Playlist speichern",pl_cancel:"Abbrechen",pl_empty:"Noch keine Playlists. Füge unten deine erste hinzu.",pl_edit_b:"Bearbeiten",pl_del_b:"Löschen",pl_e_name:"Gib der Playlist einen Namen.",pl_e_url:"Gib einen gültigen Link mit http:// oder https:// ein.",pl_e_login:"Serveradresse, Benutzername und Passwort ausfüllen.",pl_max:"Du kannst bis zu 5 Playlists hinzufügen. Lösche eine, um eine neue anzulegen.",pl_link_l:"Link",pl_login_l:"Login",
pin_h:"Kindersicherung",pin_p:"Schütze Einstellungen und Playlists auf diesem Gerät mit einer 4-stelligen PIN.",pin_on:"Kindersicherung",pin_on_d:"Vor geschützten Bereichen nach der PIN fragen.",pin_new:"Neue PIN",pin_conf:"PIN bestätigen",pin_c1:"Playlists schützen",pin_c2:"Einstellungen schützen",pin_save:"PIN speichern",pin_ok:"PIN gespeichert. Die App fragt sie auf diesem Gerät ab.",pin_e1:"Die PIN hat genau 4 Ziffern.",pin_e2:"Die beiden PINs stimmen nicht überein.",

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
/* ---- playlists / pin / switch / key (demo) ---- */
var PL=[{n:'Living room',t:'link',u:'https://example.com/lists/home.m3u'},{n:'Weekend',t:'login',u:'http://demo.example:8080'}],plEdit=-1,plT='link';
function plRender(){var d=T[lang],box=$('#plList');box.innerHTML='';
  if(!PL.length){box.innerHTML='<p class="empty">'+d.pl_empty+'</p>'}
  PL.forEach(function(p,i){var e=document.createElement('div');e.className='pl-item';
    e.innerHTML='<span class="pl-ic"><svg viewBox="0 0 24 24">'+IC.list+'</svg></span><div class="pl-meta"><b></b><small dir="ltr"></small></div><span class="pl-tag"></span><button type="button" class="mini" data-e="'+i+'">'+d.pl_edit_b+'</button><button type="button" class="mini del" data-d="'+i+'">'+d.pl_del_b+'</button>';
    e.querySelector('b').textContent=p.n;e.querySelector('small').textContent=p.u.replace(/^(https?:\/\/[^\/]{0,22}).*/,'$1')+(p.u.length>26?'…':'');e.querySelector('.pl-tag').textContent=p.t==='link'?d.pl_link_l:d.pl_login_l;box.appendChild(e)});
  $$('[data-e]').forEach(function(b){b.onclick=function(){var p=PL[+b.dataset.e];plEdit=+b.dataset.e;plSetType(p.t);$('#plName').value=p.n;if(p.t==='link')$('#plUrl').value=p.u;else{$('#plHost').value=p.u;$('#plUser').value='demo';$('#plPass').value='secret'}
    $('#plFormT').textContent=d.pl_edit;$('#plCancel').hidden=false;$('#plForm').scrollIntoView({behavior:'smooth',block:'center'})}});
  $$('[data-d]').forEach(function(b){b.onclick=function(){PL.splice(+b.dataset.d,1);plReset();plRender()}});
  $('#plFormT').textContent=plEdit>-1?d.pl_edit:d.pl_add}
function plSetType(t){plT=t;$$('#plType button').forEach(function(b){b.classList.toggle('on',b.dataset.pt===t)});$('#plUrlW').hidden=t!=='link';$('#plLoginW').hidden=t!=='login'}
function plReset(){plEdit=-1;['plName','plUrl','plHost','plUser','plPass'].forEach(function(i){$('#'+i).value=''});$('#plCancel').hidden=true;$('#plErr').textContent='';plSetType('link')}
$$('#plType button').forEach(function(b){b.onclick=function(){plSetType(b.dataset.pt)}});
$('#plCancel').onclick=function(){plReset();plRender()};
$('#plSave').onclick=function(){var d=T[lang],n=$('#plName').value.trim(),u;
  if(!n){$('#plErr').textContent=d.pl_e_name;return}
  if(plT==='link'){u=$('#plUrl').value.trim();if(!/^https?:\/\/\S+\.\S+/.test(u)){$('#plErr').textContent=d.pl_e_url;return}}
  else{u=$('#plHost').value.trim();if(!u||!$('#plUser').value||!$('#plPass').value){$('#plErr').textContent=d.pl_e_login;return}}
  if(plEdit<0&&PL.length>=5){$('#plErr').textContent=d.pl_max;return}
  var o={n:n,t:plT,u:u};if(plEdit>-1)PL[plEdit]=o;else PL.push(o);plReset();plRender()};
$('#pinTgl').onclick=function(){var on=$('#pinTgl').getAttribute('aria-pressed')!=='true';$('#pinTgl').setAttribute('aria-pressed',on);$('#pinTgl').classList.toggle('on',on);$('#pinFields').hidden=!on;$('#pinOk').hidden=true};
$$('#pin1,#pin2').forEach(function(i){i.addEventListener('input',function(){i.value=i.value.replace(/\D/g,'')})});
$('#pinSave').onclick=function(){var d=T[lang];$('#pinOk').hidden=true;
  if(!/^\d{4}$/.test($('#pin1').value)){$('#pinErr').textContent=d.pin_e1;return}
  if($('#pin1').value!==$('#pin2').value){$('#pinErr').textContent=d.pin_e2;return}
  $('#pinErr').textContent='';$('#pinOk').hidden=false};
var keyShown=false,curKey='K7M2QX';
function keyPaint(){$('#curKey').textContent=keyShown?curKey:'••••••';$('#keyShow').textContent=T[lang][keyShown?'k_hide':'k_show']}
$('#keyShow').onclick=function(){keyShown=!keyShown;keyPaint()};
$('#keyRand').onclick=function(){var c='ABCDEFGHJKMNPQRSTUVWXYZ23456789',s='';for(var i=0;i<6;i++)s+=c[Math.floor(Math.random()*c.length)];$('#newKey').value=s};
$('#keySave').addEventListener('click',function(){if(/^[A-Za-z0-9]{6}$/.test($('#newKey').value)){curKey=$('#newKey').value.toUpperCase();keyPaint()}});
var _render=render;render=function(){_render();plRender();keyPaint()};
render();if(/pinon/.test(location.search))$('#pinTgl').click();
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
