const $ = (s)=>document.querySelector(s);
const app = $("#app");

const state = {
  page: localStorage.getItem("mr_page") || "home",
  lang: localStorage.getItem("mr_lang") || "ar",
  dark: localStorage.getItem("mr_dark")==="1",
  hazard: localStorage.getItem("mr_hazard") || "rain",
  city: localStorage.getItem("mr_city") || "Tabuk",
  package: localStorage.getItem("mr_package") || "basic",
  logged: localStorage.getItem("mr_logged")==="1",
  policy: localStorage.getItem("mr_policy")==="1",
  notifications: JSON.parse(localStorage.getItem("mr_notifications") || "[]")
};

const T = {
  ar:{
    app:"مرصد رسكاورا", sub:"Mirsad Riskora",
    login:"تسجيل الدخول", username:"اسم المستخدم", password:"كلمة المرور", demo:"حساب تجريبي: demo / 123456",
    enter:"دخول آمن", welcome:"مرحبًا بك في مرصد رسكاورا", hello:"أهلًا بك",
    dashboard:"الرئيسية", coverage:"تغطياتي", claims:"التعويضات", support:"الدعم", account:"حسابي",
    start:"ابدأ الآن", startDesc:"حلّل مستوى الخطر واحصل على تغطية مقترحة خلال خطوات بسيطة.",
    active:"وثيقة نشطة", noPolicy:"لا توجد وثيقة مفعلة", risk:"مستوى الخطر", medium:"متوسط",
    weather:"مؤشر الطقس", rainfall:"الأمطار المتوقعة", mm:"ملم",
    quick:"الوصول السريع", analysis:"تحليل الخطر", monitor:"مراقبة الخطر", notifications:"الإشعارات",
    selectHazard:"اختر نوع الخطر", selectCity:"اختر المنطقة", selectPackage:"اختر باقة التغطية",
    next:"متابعة", analyze:"ابدأ التحليل", back:"رجوع",
    rain:"أمطار غزيرة وسيول", rainDesc:"هطول الأمطار ومؤشرات السيول",
    wind:"رياح شديدة وعواصف", windDesc:"سرعة الرياح وشدة العاصفة",
    heat:"حرارة شديدة", heatDesc:"درجات الحرارة وفترة استمرارها",
    dust:"عواصف رملية وغبار", dustDesc:"سرعة الرياح والرؤية",
    drought:"الجفاف", droughtDesc:"عجز الأمطار والأيام الجافة",
    earthquake:"الزلازل", earthquakeDesc:"قوة الزلزال وشدة الاهتزاز",
    tabuk:"تبوك", riyadh:"الرياض", jeddah:"جدة", asir:"عسير", jawf:"الجوف",
    basic:"الباقة الأساسية", advanced:"الباقة المتقدمة", comprehensive:"الباقة الشاملة",
    basicD:"حماية مناسبة للمخاطر الأساسية", advD:"تغطية أعلى وحد حماية أكبر", compD:"حماية موسعة للمخاطر المرتفعة",
    sar:"ريال", coverageAmount:"حد التغطية", annual:"سنويًا",
    riskAnalysis:"تحليل مستوى الخطر", probability:"احتمال تفعيل المؤشر", avgDamage:"متوسط الضرر التجريبي",
    expected:"الخسارة السنوية المتوقعة", trigger:"نقطة التعويض المقترحة", balance:"مؤشر التوازن",
    recommended:"الباقة المقترحة لك", technical:"التفاصيل الرياضية", formula:"المعادلة التعليمية",
    quote:"عرض التأمين", premium:"القسط التقديري", duration:"مدة الوثيقة", oneYear:"سنة واحدة",
    payout:"شرط التعويض", triggerText:"عند وصول المؤشر إلى نقطة التعويض المحددة",
    policyDetails:"تفاصيل الوثيقة", activate:"تفعيل الوثيقة", payment:"الدفع التجريبي",
    card:"بطاقة بنكية", apple:"Apple Pay", pay:"دفع وتفعيل الوثيقة", demoPay:"هذه عملية دفع تجريبية وليست بوابة دفع حقيقية.",
    activated:"تم تفعيل الوثيقة بنجاح", policyNo:"رقم الوثيقة", viewCoverage:"عرض تغطيتي",
    monitoring:"مراقبة الخطر", current:"المؤشر الحالي", safe:"ضمن النطاق الآمن", threshold:"حد التعويض",
    compensation:"التعويضات", noClaims:"لا توجد تعويضات مسجلة", claimInfo:"في التأمين البارامتري يعتمد التعويض على تحقق المؤشر المحدد.",
    supportTitle:"مساعد رسكاورا", supportIntro:"مرحبًا! كيف أقدر أساعدك في وثيقتك أو تحليل الخطر؟",
    send:"إرسال", faq:"الأسئلة الشائعة", accountTitle:"الحساب", settings:"الإعدادات", language:"اللغة",
    dark:"الوضع الداكن", light:"الوضع الفاتح", about:"عن مرصد رسكاورا", logout:"تسجيل الخروج", menu:"القائمة",
    readAll:"تحديد الكل كمقروء", noNotifications:"لا توجد إشعارات جديدة", welcomeNote:"تم تسجيل دخولك بنجاح.",
    invalid:"بيانات الدخول غير صحيحة", saved:"تم الحفظ", english:"English", arabic:"العربية",
    dataNote:"بيانات تجريبية تعليمية", scientific:"النموذج يعتمد على بيانات تجريبية ويحتاج بيانات رسمية قبل أي استخدام فعلي.",
    years:"سنوات", damageYears:"سنوات حدث فيها ضرر", property:"قيمة الممتلكات",
    menuHome:"الرئيسية", menuCoverage:"تغطياتي", menuClaims:"التعويضات", menuSupport:"الدعم", menuAccount:"حسابي"
  },
  en:{
    app:"Mirsad Riskora", sub:"Parametric Insurance",
    login:"Sign in", username:"Username", password:"Password", demo:"Demo account: demo / 123456",
    enter:"Secure sign in", welcome:"Welcome to Mirsad Riskora", hello:"Welcome",
    dashboard:"Home", coverage:"My Coverage", claims:"Compensation", support:"Support", account:"Account",
    start:"Start now", startDesc:"Analyze your risk level and get a suggested coverage in a few steps.",
    active:"Active policy", noPolicy:"No active policy", risk:"Risk level", medium:"Medium",
    weather:"Weather index", rainfall:"Expected rainfall", mm:"mm",
    quick:"Quick access", analysis:"Risk analysis", monitor:"Risk monitoring", notifications:"Notifications",
    selectHazard:"Choose hazard", selectCity:"Choose location", selectPackage:"Choose coverage package",
    next:"Continue", analyze:"Run analysis", back:"Back",
    rain:"Heavy rain & floods", rainDesc:"Rainfall and flood indicators",
    wind:"Severe wind & storms", windDesc:"Wind speed and storm intensity",
    heat:"Extreme heat", heatDesc:"Temperature and duration",
    dust:"Dust & sandstorms", dustDesc:"Wind speed and visibility",
    drought:"Drought", droughtDesc:"Rainfall deficit and dry days",
    earthquake:"Earthquakes", earthquakeDesc:"Magnitude and ground shaking",
    tabuk:"Tabuk", riyadh:"Riyadh", jeddah:"Jeddah", asir:"Asir", jawf:"Al Jawf",
    basic:"Basic", advanced:"Advanced", comprehensive:"Comprehensive",
    basicD:"Suitable for essential risks", advD:"Higher coverage limit", compD:"Extended protection for higher risks",
    sar:"SAR", coverageAmount:"Coverage limit", annual:"per year",
    riskAnalysis:"Risk analysis", probability:"Trigger probability", avgDamage:"Experimental average loss",
    expected:"Expected annual loss", trigger:"Recommended trigger", balance:"Balance score",
    recommended:"Recommended package", technical:"Technical details", formula:"Educational formula",
    quote:"Insurance quote", premium:"Estimated premium", duration:"Policy duration", oneYear:"1 year",
    payout:"Payout condition", triggerText:"When the selected measurable index reaches the trigger",
    policyDetails:"Policy details", activate:"Activate policy", payment:"Demo payment",
    card:"Bank card", apple:"Apple Pay", pay:"Pay & activate", demoPay:"This is a demo payment, not a real gateway.",
    activated:"Policy activated successfully", policyNo:"Policy number", viewCoverage:"View coverage",
    monitoring:"Risk monitoring", current:"Current index", safe:"Within safe range", threshold:"Trigger threshold",
    compensation:"Compensation", noClaims:"No compensation records", claimInfo:"Parametric payout is based on the selected measurable trigger.",
    supportTitle:"Riskora Assistant", supportIntro:"Hi! How can I help with your policy or risk analysis?",
    send:"Send", faq:"FAQ", accountTitle:"Account", settings:"Settings", language:"Language",
    dark:"Dark mode", light:"Light mode", about:"About Mirsad Riskora", logout:"Log out", menu:"Menu",
    readAll:"Mark all as read", noNotifications:"No new notifications", welcomeNote:"You signed in successfully.",
    invalid:"Incorrect login details", saved:"Saved", english:"English", arabic:"العربية",
    dataNote:"Educational demo data", scientific:"This prototype uses experimental data and needs official data before real-world use.",
    years:"Years", damageYears:"Loss years", property:"Property value",
    menuHome:"Home", menuCoverage:"My Coverage", menuClaims:"Compensation", menuSupport:"Support", menuAccount:"Account"
  }
};
const t = k => T[state.lang][k] || k;

const packages = {
  basic:{name:"basic", amount:5000, premium:300},
  advanced:{name:"advanced", amount:10000, premium:560},
  comprehensive:{name:"comprehensive", amount:20000, premium:990}
};
const hazards = [
  ["rain","🌧️","rain","rainDesc"],["wind","💨","wind","windDesc"],["heat","☀️","heat","heatDesc"],
  ["dust","🌪️","dust","dustDesc"],["drought","🏜️","drought","droughtDesc"],["earthquake","〽️","earthquake","earthquakeDesc"]
];
const cities = ["tabuk","riyadh","jeddah","asir","jawf"];

function save(){
  localStorage.setItem("mr_page",state.page);
  localStorage.setItem("mr_lang",state.lang);
  localStorage.setItem("mr_dark",state.dark?"1":"0");
  localStorage.setItem("mr_hazard",state.hazard);
  localStorage.setItem("mr_city",state.city);
  localStorage.setItem("mr_package",state.package);
  localStorage.setItem("mr_logged",state.logged?"1":"0");
  localStorage.setItem("mr_policy",state.policy?"1":"0");
}
function nav(page){state.page=page;save();render()}
function money(n){return new Intl.NumberFormat(state.lang==="ar"?"ar-SA":"en-US").format(n)}
function setTheme(){document.body.classList.toggle("dark",state.dark);document.body.classList.toggle("en",state.lang==="en");}
function toast(msg){const el=document.createElement("div");el.className="toast";el.textContent=msg;document.body.appendChild(el);requestAnimationFrame(()=>el.classList.add("show"));setTimeout(()=>{el.classList.remove("show");setTimeout(()=>el.remove(),300)},2200)}
function iconFor(page){return ({home:"⌂",coverage:"▣",claims:"◈",support:"◌",account:"◉"})[page]||"•"}

function auth(){
  app.innerHTML = `<div class="auth-wrap">
    <div class="auth-card">
      <div class="brand"><div class="logo">ر</div><h1>${t("app")}</h1><p>${t("sub")}</p></div>
      <div class="field"><label>${t("username")}</label><input id="user" class="input" autocomplete="username" placeholder="${t("username")}"></div>
      <div class="field"><label>${t("password")}</label><input id="pass" class="input" type="password" autocomplete="current-password" placeholder="${t("password")}"></div>
      <button id="loginBtn" class="btn btn-primary full">${t("enter")}</button>
      <div class="demo-note">${t("demo")}</div>
      <div style="display:flex;justify-content:center;margin-top:15px">
        <button class="btn btn-ghost" onclick="toggleLang()">${state.lang==="ar"?t("english"):t("arabic")}</button>
      </div>
    </div></div>`;
  $("#loginBtn").onclick=()=>{
    if($("#user").value==="demo" && $("#pass").value==="123456"){
      state.logged=true; state.page="home"; save(); toast(t("welcomeNote")); render();
    } else toast(t("invalid"));
  };
}
function topbar(){
  return `<header class="topbar">
    <div style="display:flex;align-items:center;gap:10px"><div class="logo" style="width:42px;height:42px;border-radius:14px;font-size:17px">ر</div><div><strong style="font-size:14px">${t("app")}</strong><div style="font-size:9px;color:var(--muted)">${t("sub")}</div></div></div>
    <div class="top-actions">
      <button class="icon-btn" onclick="nav('notifications')" aria-label="${t("notifications")}">♢<i class="badge-dot"></i></button>
      <button class="icon-btn" onclick="openDrawer()" aria-label="${t("menu")}">☰</button>
    </div>
  </header>`;
}
function bottomNav(){
  const items=[["home","dashboard"],["coverage","coverage"],["claims","claims"],["support","support"],["account","account"]];
  return `<nav class="bottom-nav"><div class="nav-inner">${items.map(([p,k])=>`<button class="nav-item ${state.page===p?'active':''}" onclick="nav('${p}')"><b>${iconFor(p)}</b>${t(k)}</button>`).join("")}</div></nav>`;
}
function shell(content){app.innerHTML=`<div class="app-shell">${topbar()}<main class="page">${content}</main>${bottomNav()}</div>`}

function home(){
  shell(`<div class="greeting"><div><h2>${t("hello")} 👋</h2><p>${t("startDesc")}</p></div></div>
  <section class="hero"><h2>${t("start")}</h2><p>${t("startDesc")}</p><button class="btn" onclick="nav('hazard')">${t("start")} ←</button></section>
  <div class="section-title"><h3>${t("quick")}</h3></div>
  <div class="grid grid-3">
    <div class="card stat"><div class="stat-icon">🛡️</div><div><strong>${state.policy?1:0}</strong><span>${t("active")}</span></div></div>
    <div class="card stat"><div class="stat-icon">📊</div><div><strong>${state.policy?"24":"—"}</strong><span>${t("risk")}</span></div></div>
    <div class="card stat"><div class="stat-icon">💳</div><div><strong>${state.policy?money(packages[state.package].premium):"—"}</strong><span>${t("premium")}</span></div></div>
  </div>
  <div class="section-title"><h3>${t("weather")}</h3><button onclick="nav('monitoring')">${t("monitor")}</button></div>
  <div class="grid grid-2">
    <div class="card weather"><div class="weather-icon">🌦️</div><div><small>${t("rainfall")}</small><strong>75 ${t("mm")}</strong><small>${t("cityName")||t("tabuk")}</small></div></div>
    <div class="card risk-card"><div><small style="color:var(--muted)">${t("risk")}</small><h3 style="margin:4px 0">${t("medium")}</h3><div class="progress"><span></span></div></div><span class="risk-pill">${t("dataNote")}</span></div>
  </div>
  <div class="section-title"><h3>${t("analysis")}</h3></div>
  <div class="card"><div style="display:flex;justify-content:space-between;gap:15px;align-items:center"><div><strong>${t("recommended")}</strong><p style="font-size:11px;color:var(--muted);line-height:1.8;margin:5px 0">${t("scientific")}</p></div><button class="btn btn-secondary" onclick="nav('hazard')">${t("start")}</button></div></div>`);
}

function pageHead(title,subtitle){return `<div class="page-head"><button class="back" onclick="nav('home')">→</button><div class="page-title"><h2>${title}</h2><p>${subtitle||""}</p></div></div>`}
function hazardPage(){
  shell(`${pageHead(t("selectHazard"),t("startDesc"))}
    <div class="choice-grid">${hazards.map(([id,e,name,desc])=>`<button class="choice ${state.hazard===id?'selected':''}" onclick="selectHazard('${id}')"><span class="check">✓</span><div class="emoji">${e}</div><strong>${t(name)}</strong><small>${t(desc)}</small></button>`).join("")}</div>
    <div class="section-title"><h3>${t("selectCity")}</h3></div>
    <div class="choice-grid">${cities.map(id=>`<button class="choice ${state.city===id?'selected':''}" onclick="selectCity('${id}')"><span class="check">✓</span><div class="emoji">📍</div><strong>${t(id)}</strong><small>${t("riskAnalysis")}</small></button>`).join("")}</div>
    <div class="sticky-actions"><button class="btn btn-primary full" onclick="nav('packages')">${t("next")} ←</button></div>`);
}
function packagesPage(){
  shell(`${pageHead(t("selectPackage"),t("coverageAmount"))}
    <div class="grid">${Object.entries(packages).map(([id,p])=>`<button class="choice ${state.package===id?'selected':''}" onclick="selectPackage('${id}')" style="text-align:right"><span class="check">✓</span><div style="display:flex;justify-content:space-between;gap:10px;align-items:start"><div><div class="emoji">🛡️</div><strong>${t(id)}</strong><small>${t(id+"D")}</small></div><div><span class="tag">${t("annual")}</span><div class="amount">${money(p.amount)} <small>${t("sar")}</small></div><div class="price" style="font-size:17px">${money(p.premium)} <small>${t("sar")}</small></div></div></div></button>`).join("")}</div>
    <div class="card" style="margin-top:14px;background:var(--soft);box-shadow:none"><strong>${t("dataNote")}</strong><p style="font-size:11px;color:var(--muted);line-height:1.8;margin:5px 0">${t("scientific")}</p></div>
    <div class="sticky-actions"><button class="btn btn-primary full" onclick="nav('analysis')">${t("analyze")} ←</button></div>`);
}
function analysisPage(){
  const p=packages[state.package];
  shell(`${pageHead(t("riskAnalysis"),`${t(state.hazard)} · ${t(state.city)}`)}
    <div class="metric-grid">
      <div class="metric"><span>${t("probability")}</span><strong>55.6%</strong></div>
      <div class="metric"><span>${t("avgDamage")}</span><strong>25,400</strong></div>
      <div class="metric"><span>${t("expected")}</span><strong>14,111</strong></div>
      <div class="metric"><span>${t("balance")}</span><strong>82/100</strong></div>
    </div>
    <div class="grid grid-2" style="margin-top:14px">
      <div class="card"><div class="section-title" style="margin-top:0"><h3>${t("trigger")} <span class="tag">75 ${t("mm")}</span></h3></div><div class="chart">
        ${[60,65,70,75,80,85,90,95,100].map((x,i)=>`<div class="bar-wrap"><div class="bar" style="height:${35+i*7}px"></div><small>${x}</small></div>`).join("")}
      </div><div style="font-size:10px;color:var(--muted);margin-top:9px">${t("dataNote")}</div></div>
      <div class="card recommended"><div style="display:flex;justify-content:space-between;align-items:center;gap:15px"><div><span class="tag">${t("recommended")}</span><h3 style="margin:10px 0 4px">${t(state.package)}</h3><div class="price">${money(p.premium)} <small>${t("sar")} / ${t("annual")}</small></div></div><div class="score">82</div></div>
      <ul class="policy-list" style="margin-top:12px"><li><span>${t("coverageAmount")}</span><b>${money(p.amount)} ${t("sar")}</b></li><li><span>${t("trigger")}</span><b>75 ${t("mm")}</b></li><li><span>${t("risk")}</span><b>${t("medium")}</b></li></ul></div>
    </div>
    <div class="card" style="margin-top:14px"><details><summary>${t("technical")}</summary><p style="font-size:11px;color:var(--muted);line-height:2">${t("formula")}: Expected Compensation = Number of Customers × Trigger Probability × Coverage Amount. Premium concept = Expected Loss + Expenses + Risk Margin.</p></details></div>
    <div class="sticky-actions"><button class="btn btn-primary full" onclick="nav('quote')">${t("next")} ←</button></div>`);
}
function quotePage(){
  const p=packages[state.package];
  shell(`${pageHead(t("quote"),t("recommended"))}
    <div class="card recommended"><div class="package"><div><span class="tag">${t("recommended")}</span><h2 style="margin:8px 0">${t(state.package)}</h2><p style="font-size:11px;color:var(--muted)">${t(state.hazard)} · ${t(state.city)}</p></div><div class="price">${money(p.premium)} <small>${t("sar")} / ${t("annual")}</small></div></div>
    <ul class="policy-list" style="margin-top:14px"><li><span>${t("coverageAmount")}</span><b>${money(p.amount)} ${t("sar")}</b></li><li><span>${t("trigger")}</span><b>75 ${t("mm")}</b></li><li><span>${t("duration")}</span><b>${t("oneYear")}</b></li><li><span>${t("payout")}</span><b>${t("triggerText")}</b></li></ul></div>
    <div class="sticky-actions"><button class="btn btn-primary full" onclick="nav('payment')">${t("activate")} ←</button></div>`);
}
function paymentPage(){
  shell(`${pageHead(t("payment"),t("demoPay"))}
    <div class="grid grid-2"><button class="choice selected" style="text-align:right"><span class="check">✓</span><div class="emoji">💳</div><strong>${t("card")}</strong><small>•••• 4242</small></button><button class="choice" style="text-align:right"><div class="emoji"></div><strong>${t("apple")}</strong><small>${t("demoPay")}</small></button></div>
    <div class="card" style="margin-top:14px"><div style="display:flex;justify-content:space-between"><span style="color:var(--muted)">${t("premium")}</span><strong class="price" style="font-size:22px">${money(packages[state.package].premium)} ${t("sar")}</strong></div><p style="font-size:10px;color:var(--muted);margin-bottom:0">${t("demoPay")}</p></div>
    <div class="sticky-actions"><button class="btn btn-primary full" onclick="activatePolicy()">${t("pay")} ✓</button></div>`);
}
function activationPage(){
  const no="MR-"+new Date().getFullYear()+"-"+Math.floor(100000+Math.random()*899999);
  localStorage.setItem("mr_policy_no",no);
  shell(`<div class="card" style="text-align:center;padding:38px 20px"><div class="logo" style="margin:auto">✓</div><h2 style="margin:18px 0 6px">${t("activated")}</h2><p style="color:var(--muted);font-size:12px">${t("welcomeNote")}</p><div class="card" style="margin-top:20px;text-align:right;background:var(--bg);box-shadow:none"><ul class="policy-list"><li><span>${t("policyNo")}</span><b>${no}</b></li><li><span>${t("coverageAmount")}</span><b>${money(packages[state.package].amount)} ${t("sar")}</b></li><li><span>${t("trigger")}</span><b>75 ${t("mm")}</b></li></ul></div><button class="btn btn-primary full" style="margin-top:15px" onclick="nav('coverage')">${t("viewCoverage")}</button></div>`);
}
function coveragePage(){
  if(!state.policy){shell(`${pageHead(t("coverage"),t("noPolicy"))}<div class="card" style="text-align:center;padding:38px"><div style="font-size:42px">🛡️</div><h3>${t("noPolicy")}</h3><p style="color:var(--muted);font-size:12px">${t("startDesc")}</p><button class="btn btn-primary" onclick="nav('hazard')">${t("start")}</button></div>`);return}
  const p=packages[state.package];
  shell(`${pageHead(t("coverage"),t("active"))}<div class="card recommended"><div style="display:flex;justify-content:space-between;gap:10px"><div><span class="tag">${t("active")}</span><h2 style="margin:9px 0">${t(state.package)}</h2><p style="font-size:11px;color:var(--muted)">${t(state.hazard)} · ${t(state.city)}</p></div><div class="price">${money(p.amount)}<small> ${t("sar")}</small></div></div><ul class="policy-list" style="margin-top:16px"><li><span>${t("policyNo")}</span><b>${localStorage.getItem("mr_policy_no")||"MR-2026-000001"}</b></li><li><span>${t("trigger")}</span><b>75 ${t("mm")}</b></li><li><span>${t("premium")}</span><b>${money(p.premium)} ${t("sar")}</b></li><li><span>${t("duration")}</span><b>${t("oneYear")}</b></li></ul></div>
  <div class="section-title"><h3>${t("monitoring")}</h3><button onclick="nav('monitoring')">${t("monitor")}</button></div><div class="card risk-card"><div><small style="color:var(--muted)">${t("current")}</small><h2 style="margin:3px 0">52 ${t("mm")}</h2><span class="risk-pill">${t("safe")}</span></div><div style="text-align:center"><div class="score" style="width:70px;height:70px;font-size:18px">52</div><small style="color:var(--muted)">${t("threshold")} 75</small></div></div>`);
}
function monitoringPage(){
  shell(`${pageHead(t("monitoring"),t("dataNote"))}<div class="grid grid-2"><div class="card"><small style="color:var(--muted)">${t("current")}</small><h2 style="font-size:35px;margin:4px 0">52 ${t("mm")}</h2><span class="risk-pill">${t("safe")}</span><div class="progress"><span style="width:69%"></span></div><p style="font-size:10px;color:var(--muted)">${t("threshold")}: 75 ${t("mm")}</p></div><div class="card"><small style="color:var(--muted)">${t("city")||t("selectCity")}</small><h3>${t(state.city)}</h3><p style="font-size:11px;color:var(--muted);line-height:1.8">${t("scientific")}</p></div></div><div class="card" style="margin-top:14px"><div class="section-title" style="margin-top:0"><h3>${t("riskAnalysis")}</h3></div><div class="chart">${[42,68,91,90,53,110,82,125,61].map((x,i)=>`<div class="bar-wrap"><div class="bar" style="height:${Math.max(20,x/1.1)}px"></div><small>${2017+i}</small></div>`).join("")}</div></div>`);
}
function claimsPage(){
  shell(`${pageHead(t("claims"),t("claimInfo"))}<div class="card" style="text-align:center;padding:30px"><div style="font-size:42px">📄</div><h3>${t("noClaims")}</h3><p style="font-size:11px;color:var(--muted);line-height:1.8">${t("claimInfo")}</p></div>`);
}
function notificationsPage(){
  shell(`${pageHead(t("notifications"),t("readAll"))}<div class="list"><div class="list-row"><div class="li-icon">🛡️</div><div><h4>${t("activated")}</h4><p>${t("welcomeNote")}</p></div><time>اليوم</time></div><div class="list-row"><div class="li-icon">🌧️</div><div><h4>${t("monitoring")}</h4><p>52 ${t("mm")} — ${t("safe")}</p></div><time>الآن</time></div></div>`);
}
function supportPage(){
  shell(`${pageHead(t("supportTitle"),t("supportIntro"))}<div class="card chat"><div class="messages" id="messages"><div class="bubble bot">${t("supportIntro")}</div><div class="bubble bot">${t("claimInfo")}</div></div><div class="chat-input"><input id="chatInput" class="input" placeholder="${t("support")}..."><button class="btn btn-primary" onclick="sendChat()">${t("send")}</button></div></div><div class="section-title"><h3>${t("faq")}</h3></div><div class="list"><div class="list-row"><div class="li-icon">?</div><div><h4>${t("trigger")}</h4><p>${t("triggerText")}</p></div></div><div class="list-row"><div class="li-icon">!</div><div><h4>${t("scientific")}</h4><p>${t("dataNote")}</p></div></div></div>`);
}
function accountPage(){
  shell(`${pageHead(t("accountTitle"),t("settings"))}<div class="card"><div style="display:flex;align-items:center;gap:13px"><div class="avatar">ر</div><div><strong>${t("app")}</strong><p style="margin:3px 0;color:var(--muted);font-size:11px">demo</p></div></div></div><div class="section-title"><h3>${t("settings")}</h3></div><div class="list"><button class="list-row" onclick="toggleLang()" style="text-align:right"><div class="li-icon">🌐</div><div><h4>${t("language")}</h4><p>${state.lang==="ar"?t("arabic"):t("english")}</p></div></button><button class="list-row" onclick="toggleDark()" style="text-align:right"><div class="li-icon">◐</div><div><h4>${state.dark?t("light"):t("dark")}</h4><p>${t("settings")}</p></div></button><button class="list-row" onclick="nav('faq')" style="text-align:right"><div class="li-icon">?</div><div><h4>${t("faq")}</h4><p>${t("supportTitle")}</p></div></button></div>`);
}
function faqPage(){
  shell(`${pageHead(t("faq"),t("supportTitle"))}<div class="list"><div class="card"><strong>${t("trigger")}</strong><p style="font-size:12px;color:var(--muted);line-height:1.9">${t("triggerText")}</p></div><div class="card"><strong>${t("compensation")}</strong><p style="font-size:12px;color:var(--muted);line-height:1.9">${t("claimInfo")}</p></div><div class="card"><strong>${t("dataNote")}</strong><p style="font-size:12px;color:var(--muted);line-height:1.9">${t("scientific")}</p></div></div>`);
}
function aboutPage(){
  shell(`${pageHead(t("about"),t("sub"))}<div class="card"><div style="display:flex;gap:14px;align-items:center"><div class="logo" style="margin:0">ر</div><div><h2 style="margin:0">${t("app")}</h2><p style="margin:4px 0;color:var(--muted);font-size:11px">${t("sub")}</p></div></div><p style="font-size:12px;line-height:2;color:var(--muted);margin-top:20px">${t("startDesc")}</p><div class="card" style="background:var(--soft);box-shadow:none"><strong>${t("dataNote")}</strong><p style="font-size:11px;line-height:1.8;color:var(--muted)">${t("scientific")}</p></div></div>`);
}
function openDrawer(){
  const el=document.createElement("div");el.innerHTML=`<div class="overlay" id="drawerOverlay"></div><aside class="drawer"><div class="drawer-head"><div class="drawer-user"><div class="avatar">ر</div><div><strong>${t("app")}</strong><div style="font-size:10px;color:var(--muted)">demo</div></div></div><button class="icon-btn" onclick="closeDrawer()">×</button></div><div class="menu-list">
  <button class="menu-item" onclick="closeDrawer();nav('home')"><span class="mi">⌂</span><span>${t("menuHome")}</span></button>
  <button class="menu-item" onclick="closeDrawer();nav('coverage')"><span class="mi">▣</span><span>${t("menuCoverage")}</span></button>
  <button class="menu-item" onclick="closeDrawer();nav('notifications')"><span class="mi">♢</span><span>${t("notifications")}</span></button>
  <button class="menu-item" onclick="closeDrawer();nav('support')"><span class="mi">◌</span><span>${t("support")}</span></button>
  <button class="menu-item" onclick="closeDrawer();nav('faq')"><span class="mi">?</span><span>${t("faq")}</span></button>
  <button class="menu-item" onclick="closeDrawer();nav('about')"><span class="mi">ⓘ</span><span>${t("about")}</span></button>
  <button class="menu-item" onclick="closeDrawer();nav('account')"><span class="mi">◉</span><span>${t("settings")}</span></button>
  <button class="menu-item" onclick="logout()"><span class="mi">↪</span><span>${t("logout")}</span></button>
  </div><div class="lang-switch"><button class="${state.lang==="ar"?"active":""}" onclick="toggleLang()">${t("arabic")}</button><button class="${state.lang==="en"?"active":""}" onclick="toggleLang()">${t("english")}</button></div></aside>`;document.body.appendChild(el);
}
function closeDrawer(){document.querySelector(".overlay")?.parentElement.remove()}
function logout(){state.logged=false;state.policy=false;save();closeDrawer();render()}
function toggleLang(){state.lang=state.lang==="ar"?"en":"ar";save();render()}
function toggleDark(){state.dark=!state.dark;save();render()}
function selectHazard(x){state.hazard=x;save();render()}
function selectCity(x){state.city=x;save();render()}
function selectPackage(x){state.package=x;save();render()}
function activatePolicy(){state.policy=true;save();state.page="activation";render()}
function sendChat(){const inp=$("#chatInput");if(!inp||!inp.value.trim())return;const msg=inp.value.trim();const box=$("#messages");box.innerHTML+=`<div class="bubble user">${msg}</div>`;inp.value="";setTimeout(()=>{box.innerHTML+=`<div class="bubble bot">${t("claimInfo")}</div>`;box.scrollTop=box.scrollHeight},450)}

function render(){
  setTheme();
  if(!state.logged){auth();return}
  const pages={home,hazard:hazardPage,packages:packagesPage,analysis:analysisPage,quote:quotePage,payment:paymentPage,activation:activationPage,coverage:coveragePage,monitoring:monitoringPage,claims:claimsPage,notifications:notificationsPage,support:supportPage,account:accountPage,faq:faqPage,about:aboutPage};
  (pages[state.page]||home)();
}
render();
