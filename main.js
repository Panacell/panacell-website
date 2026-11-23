const EMAIL = "info@panacellbio.com";
const KO = {
  ct_lead:"기술이전, 공동 연구개발, 투자, 언론 문의 등 어떤 내용이든 남겨주시면 담당 팀이 이메일로 답변드립니다.",
  f_type:"문의 유형", f_rd:"공동 연구개발", f_other:"기타",
  f_name:"이름", f_co:"회사명", f_phone:"전화번호", f_msg:"문의 내용",
  f_agree:"개인정보 수집·이용에 동의합니다 (필수)",
  f_c1:"수집 항목: 이름, 이메일, 문의 내용(필수) / 회사명, 전화번호(선택)",
  f_c2:"이용 목적: 문의 확인 및 답변",
  f_c3:"보유 기간: 문의 처리 완료 후 지체 없이 파기 (관계 법령에 따른 보존 의무가 있는 경우 해당 기간 보관)",
  f_c4:"동의를 거부할 수 있으나, 거부 시 문의에 답변드릴 수 없습니다.",
  pp:"개인정보처리방침", pp_eff:"시행일",
  f_err:"필수 항목을 입력하고 개인정보 수집·이용에 동의해 주세요.",
  f_send:"문의 보내기",
  f_note:"보내기를 누르면 작성한 내용이 담긴 이메일 앱이 열립니다. 그대로 info@panacellbio.com으로 보내주세요.",
  nr_lead:"공지, 파트너십, 연구 관련 보도를 전합니다.",
  nf_all:"전체", nr_items:"건",
  nr1:"양사는 엑소좀 원료를 활용한 제품 기획과 연구개발을 함께 추진하고, 국내외 시장 진출을 위한 브랜드·사업 전략을 공동으로 수립합니다.",
  nr2:"2024년 8월 7일 등록된 이 특허는 NK·NKT·T세포 공동배양 배양액에서 여과 방식으로 mL당 최대 4×10¹¹개의 엑소좀 입자를 분리하는 기술입니다.",
  nr3:"롱코비드 증상에 대한 세포 기반 접근법을 연구하는 프로그램이 소개되었습니다.",
  nr_empty:"이 분류에는 아직 소식이 없습니다.",
  mb_h:"언론 문의", mb_p:"인터뷰, 이미지, 회사 정보가 필요하시면 연락 주세요.",
  view_all:"전체 보기",
  tp_title:"연구기술",
  tp_lead:"세포를 안정적으로 키우고, 세포가 만들어내는 물질을 활용하는 하나의 역량에서 출발한 네 가지 플랫폼입니다.",
  tp1_p1:"중간엽 줄기세포(MSC)는 여러 종류의 세포로 분화할 수 있고, 자라는 배양액 속으로 다양한 신호물질을 분비합니다. 파나셀바이오텍은 인체 제대의 와튼젤리에서 유래한 중간엽 줄기세포를 배양하고, 지방유래 줄기세포(ADSC)를 연구합니다.",
  tp1_p2:"자체 연구진이 개발한 배양액 추출물은 국제화장품성분(INCI)에 공식 등록되어, 국제적으로 통용되는 화장품 성분명을 갖고 있습니다.",
  kv_src:"세포 출처", tp1_src:"인체 제대 와튼젤리 · 지방조직",
  kv_out:"결과물", tp1_out:"INCI 등록 줄기세포 배양액 추출물",
  kv_use:"활용 분야", tp1_use:"화장품 원료 · 재생의료 연구",
  tp2_p1:"엑소좀은 세포가 분비하는 약 30–150nm 크기의 소포체로, 단백질·지질·RNA를 다른 세포로 전달합니다. 활용 가치는 얼마나 많이, 얼마나 깨끗하게 회수하느냐에 달려 있습니다.",
  tp2_p2:"파나셀바이오텍의 특허 공정은 NK·NKT·T세포를 함께 배양할 때 나오는 배양액을 모아, 여과 방식으로 mL당 최대 4×10¹¹개의 엑소좀 입자를 분리합니다. 이 특허는 2024년 8월 7일 등록되었습니다.",
  tp2_fig:"mL당 엑소좀 입자 수",
  kv_pat:"특허", tp2_pat:"엑소좀 제조방법, 2024년 8월 등록",
  kv_app:"특허 출원", tp2_app:"자체 공정 엑소좀 함유 화장료 조성물 3건",
  kv_part:"파트너십", tp2_part:"파나셀라와 엑소좀 제품 공동개발 업무협약 (2026)",
  tp3_p1:"자연살해(NK)세포는 사전 감작 없이 비정상 세포를 스스로 인식하고 제거하는 선천 면역세포입니다. NK세포를 대량 배양하고, 수지상세포·NK세포·T세포를 함께 키우는 DC-NK-T 복합 면역세포를 배양합니다.",
  tp3_p2:"이 공동배양에서 나온 배양액은 엑소좀 공정의 원료가 되어, 두 플랫폼이 하나의 공급원을 공유합니다.",
  kv_cells:"세포 종류", tp3_cells:"NK · NKT · T세포 · 수지상세포",
  kv_res:"연구", tp3_res:"롱코비드 대상 NK세포·엑소좀·지방유래 줄기세포 연구 추진 (2022)",
  tp4_p1:"세포 배양과 처리는 2021년부터 식품의약품안전처 허가를 받은 세포처리시설에서 이루어집니다. 이 허가는 국내에서 첨단재생의료용 세포를 공급하기 위해 필요합니다.",
  tp4_p2:"2024년 첨단재생의료 실시기관으로 지정된 협력 의료기관과 함께, 세포 보관에서 배양, 활용까지의 과정을 함께합니다.",
  fl1:"보관", fl2:"배양", fl4:"활용",
  kv_lic:"허가", tp4_lic:"식약처 세포처리시설 (2021)",
  kv_iso:"인증", tp4_iso:"ISO 9001 · ISO 14001 (2022년 7월)",
  tp_cta:"기술 협력에 관심이 있으신가요?",
  a_title:"회사소개",
  a_lead:"세포 보관부터 배양, 활용까지. 파나셀바이오텍은 자체 개발한 기술로 전 과정을 한곳에서 제공합니다.",
  sn_over:"개요", sn_prof:"회사 현황", sn_cert:"인증", sn_hist:"연혁", sn_ci:"CI", sn_loc:"오시는 길",
  ov_h:"연구를 중심에 둔 재생의료·바이오메디컬 기업입니다.",
  ov_p1:"파나셀바이오텍은 세포 보관에서 배양, 활용까지 이어지는 원스톱 서비스를 제공합니다. 면역세포 활성화, 줄기세포 배양, 그리고 두피·피부 관리를 위한 세포 유래 소재 개발까지 연구하고 있습니다.",
  ov_p2:"연구개발을 가장 앞에 둡니다. 바이오 분야 전문가와 협력 의료기관이 함께하여, 실험실에서 얻은 성과가 환자와 고객에게 안전하게 닿도록 합니다.",
  pf_h:"한눈에 보기",
  pf1_k:"설립", pf1:"연구소 설립",
  pf2_k:"자본금", pf2_v:"50<span class=\"u\">억 원</span>", pf2:"자본금 50억 원",
  pf3_k:"품질·환경", pf3:"ISO 9001·14001 인증 (2022년 7월)",
  pf4_k:"규제", pf4:"2021년 식약처 세포처리시설 허가",
  ce_h:"허가와 인증",
  ce_p:"식품의약품안전처의 관리 아래 운영되는 세포면역치료 연구 전문 기업입니다.",
  ce1_h:"세포처리시설 허가", ce1_p:"식품의약품안전처",
  ce2_p:"품질경영시스템", ce3_p:"환경경영시스템",
  ce4_h:"국제화장품성분 등록", ce4_p:"와튼젤리 줄기세포 배양액 추출물",
  hi_h:"연혁",
  hi26:"파나셀라와 엑소좀 제품 공동개발 업무협약 체결",
  hi24a:"엑소좀 제조방법 특허 등록",
  hi24b:"협력 의료기관, 첨단재생의료 실시기관 지정",
  hi23:"기업부설연구소 인정",
  hi22a:"ISO 9001·ISO 14001 인증",
  hi22b:"성형외과 병원 세포연구부 설립",
  hi21:"식품의약품안전처 세포처리시설 허가",
  hi13:"파나셀바이오텍 출범",
  hi02:"연구소 설립",
  ci_h:"이름의 의미",
  ci_p1:"‘파나(Pana)’는 모든 병을 고치는 만병통치약, 파나시아(panacea)에서 왔습니다. 여러 방향으로 분화할 수 있는 줄기세포의 특성을 뜻합니다.",
  ci_p2:"심볼은 파나셀바이오텍의 머리글자 P와 B를 겹쳐 표현하고, 줄기세포의 분자 구조를 포인트로 담았습니다.",
  lo_h:"찾아오시는 길", lo_a:"주소", lo_e:"이메일", lo_m:"구글 지도에서 보기",
  n_company:"회사소개", n_tech:"연구기술", n_news:"뉴스룸", n_partner:"파트너십", contact:"문의하기",
  m_company:"인천에 위치한 세포 배양 전문 기업으로, 재생의료와 바이오 소재 분야를 연구합니다.",
  m_tech:"세포를 안정적으로 키우고, 세포가 만드는 물질을 활용하는 하나의 역량에서 출발한 네 가지 플랫폼.",
  m_news:"공지, 파트너십, 연구 관련 보도를 전합니다.",
  m_partner:"기술이전·공동개발·투자 문의는 담당 팀이 직접 답변드립니다.",
  l_about:"파나셀바이오텍 소개", l_why:"핵심 역량", l_facility:"세포처리시설", l_location:"오시는 길",
  l_latest:"최신 뉴스", l_press:"보도자료", l_lic:"기술이전 문의", l_ir:"투자 문의", l_about2:"회사소개",
  t1:"줄기세포", t2:"엑소좀", t3:"면역세포", t4:"세포처리",
  h_lbl:"파나셀바이오텍 · 인천", h_sub:"줄기세포와 면역세포를 배양하고, 세포가 만들어내는 물질을 응용 바이오 기술로 연결합니다.",
  h_foot:"줄기세포 · 엑소좀 · 면역세포 · 세포처리",
  p_lbl:"플랫폼", p_h:"세포 배양에서 응용 바이오까지",
  p_p:"파나셀바이오텍은 연구 윤리와 안전성을 원칙으로 재생의료와 바이오 소재를 연구하는 세포 배양 전문 기업입니다.",
  c1:"인체 제대 와튼젤리 유래 중간엽 줄기세포 배양.", c2:"세포 배양액에서 고농도 엑소좀을 여과 방식으로 분리.",
  c3:"NK세포 대량 배양과 DC-NK-T 복합 면역세포 배양.", c4:"식약처 허가 세포처리시설에서 세포를 배양·관리.",
  lm:"자세히 보기",
  s_lbl:"핵심 역량", s_h:"숫자로 보는 기술력",
  s1_k:"엑소좀 수율", s1:"특허 공정으로 여과 분리한 mL당 엑소좀 입자 수",
  s2_k:"특허 출원", s2:"자체 공정으로 생산한 엑소좀 함유 조성물 특허 출원",
  s3_k:"특허 등록", s3:"엑소좀 제조방법 특허, 원천기술로 등록",
  s4_k:"원료 등록", s4:"줄기세포 배양액 추출물 국제화장품성분(INCI) 공식 등록",
  tc_h:"하나의 역량, 네 개의 플랫폼",
  d1_h:"와튼젤리 줄기세포 플랫폼", d1_p:"인체 제대의 와튼젤리에서 유래한 중간엽 줄기세포를 배양합니다. 자체 연구진이 개발한 배양액 추출물은 국제화장품성분(INCI)에 공식 등록되어 있습니다.",
  d1_a:"와튼젤리 유래 중간엽 줄기세포", d1_b:"INCI 등록 줄기세포 배양액 추출물", d1_c:"지방유래 줄기세포(ADSC) 연구",
  d2_h:"특허 기반 엑소좀 분리", d2_p:"엑소좀은 세포가 분비하는 나노 크기의 소포체로, 단백질·지질·RNA를 다른 세포로 전달합니다. NK·NKT·T세포를 함께 배양하며 얻은 배양액에서 mL당 최대 4×10¹¹개의 엑소좀 입자를 여과 방식으로 분리하는 공정을 특허로 보유하고 있습니다.",
  d2_a:"제조방법 특허 등록 (2024년 8월)", d2_b:"여과 기반 고농도 분리 공정", d2_c:"화장품용 엑소좀 원료",
  d3_h:"NK · DC-NK-T 면역세포", d3_p:"비정상 세포를 스스로 인식하고 제거하는 선천 면역세포인 자연살해(NK)세포를 대량 배양하고, 수지상세포·NK세포·T세포를 함께 키우는 DC-NK-T 복합 면역세포를 배양합니다.",
  d3_a:"NK세포 대량 배양", d3_b:"DC-NK-T 복합 면역세포 배양", d3_c:"NK · NKT · T세포 공동배양 배양액",
  d4_h:"허가받은 세포처리시설", d4_p:"세포 배양과 처리는 식품의약품안전처 허가를 받은 세포처리시설에서 이루어집니다. 2024년 첨단재생의료 실시기관으로 지정된 협력 의료기관과 함께하고 있습니다.",
  d4_a:"식약처 허가 세포처리시설", d4_b:"첨단재생의료 실시기관 지정 협력 의료기관", d4_c:"연구 윤리와 안전성 우선",
  nw_h:"최신 소식", tag_p:"파트너십", tag_r:"보도자료", tag_m:"언론보도",
  nw1:"파나셀바이오텍, 파나셀라와 엑소좀 제품 공동개발 업무협약 체결",
  nw2:"파나셀바이오텍 엑소좀 제조방법 특허, 원천기술로 등록",
  nw3:"파나셀바이오텍, 롱코비드 대상 NK세포·엑소좀·지방유래 줄기세포 연구 추진",
  b_h:"파나셀바이오텍과 함께하세요", b_p:"기술이전, 공동 연구개발, 투자 문의를 담당 팀에 직접 보내주세요.",
  addr:"인천광역시 중구 공항문화로 127, 인스파이어 엔터테인먼트 리조트 선타워 3층"
};
const EN = {};
document.querySelectorAll("[data-i18n]").forEach(el => { EN[el.dataset.i18n] ??= el.innerHTML; });
function setLang(l){
  const d = l === "ko" ? KO : EN;
  document.querySelectorAll("[data-i18n]").forEach(el => { const v = d[el.dataset.i18n]; if (v) el.innerHTML = v; });
  document.documentElement.lang = l;
  document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("on", b.dataset.lang === l));
  try { localStorage.setItem("lang", l); } catch(e){}
}
document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
try { if (localStorage.getItem("lang") === "ko") setLang("ko"); } catch(e){}

document.querySelectorAll("[data-mail]").forEach(a => { a.href = "contact.html?type=" + a.dataset.mail; });

// tabs
const tabs = [...document.querySelectorAll(".tab")], panels = [...document.querySelectorAll(".panel")];
function showTab(i){
  tabs.forEach((t,j) => t.setAttribute("aria-selected", i === j));
  panels.forEach((p,j) => p.classList.toggle("on", i === j));
}
tabs.forEach((t,i) => t.addEventListener("click", () => showTab(i)));
document.querySelectorAll("[data-tab]").forEach(el => el.addEventListener("click", e => {
  showTab(+el.dataset.tab);
  document.body.classList.remove("nav-open");
}));

// mobile nav
document.querySelector(".burger").addEventListener("click", () => document.body.classList.toggle("nav-open"));
document.querySelectorAll(".mnav a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("nav-open")));

// header shadow
const hd = document.getElementById("hd");
addEventListener("scroll", () => hd.classList.toggle("scrolled", scrollY > 40), {passive:true});

// reveal + count-up
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in"); io.unobserve(e.target);
  e.target.querySelectorAll("[data-count]").forEach(n => {
    const to = +n.dataset.count, from = to > 100 ? to - 12 : 0, t0 = performance.now();
    const step = t => { const k = Math.min(1,(t-t0)/1400), ease = 1 - Math.pow(1-k,3); n.textContent = Math.round(from + (to-from)*ease); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  });
}), {threshold:.15});
document.querySelectorAll(".rv").forEach(el => io.observe(el));
document.querySelectorAll(".cards .card").forEach((c,i) => c.style.transitionDelay = i*0.09 + "s");

document.getElementById("yr").textContent = new Date().getFullYear();

const sn = [...document.querySelectorAll(".subnav a")];
if (sn.length) {
  const secs = sn.map(a => document.querySelector(a.getAttribute("href")));
  addEventListener("scroll", () => {
    let i = 0; secs.forEach((s,j) => { if (s.getBoundingClientRect().top < 160) i = j; });
    sn.forEach((a,j) => a.classList.toggle("on", i === j));
  }, {passive:true});
}

// whole card opens its technology page
document.querySelectorAll(".card").forEach(c => c.addEventListener("click", e => { if (!e.target.closest("a")) location.href = c.querySelector(".more").href; }));

// newsroom filter
const fbtn = [...document.querySelectorAll(".filters button")];
if (fbtn.length) {
  const items = [...document.querySelectorAll(".nlist li")], empty = document.querySelector(".empty"), n = document.getElementById("nr-n");
  const apply = f => {
    let c = 0;
    items.forEach(li => { const show = f === "all" || li.dataset.cat === f; li.hidden = !show; if (show) c++; });
    fbtn.forEach(b => b.classList.toggle("on", b.dataset.f === f));
    n.textContent = c; empty.hidden = c > 0;
  };
  fbtn.forEach(b => b.addEventListener("click", () => { apply(b.dataset.f); history.replaceState(null, "", b.dataset.f === "all" ? location.pathname : "#" + b.dataset.f); }));
  const h = location.hash.slice(1); if (["press","partner","media"].includes(h)) apply(h);
}
// Korean-language article links when KOR is selected
function swapHrefs(){ const ko = document.documentElement.lang === "ko";
  document.querySelectorAll("[data-ko-href]").forEach(a => { a.dataset.enHref ??= a.getAttribute("href"); a.href = ko ? a.dataset.koHref : a.dataset.enHref; }); }
document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", swapHrefs)); swapHrefs();

// contact form -> opens the visitor's email app
const cf = document.getElementById("cform");
if (cf) {
  const t = new URLSearchParams(location.search).get("type");
  const r = t && cf.querySelector(`input[name=type][value="${t}"]`); if (r) r.checked = true;
  cf.addEventListener("submit", e => {
    e.preventDefault();
    let ok = true;
    cf.querySelectorAll("[required]").forEach(f => {
      const good = f.type === "checkbox" ? f.checked : f.value.trim() && (f.type !== "email" || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value.trim()));
      (f.type === "checkbox" ? cf.querySelector(".consent") : f.closest(".fld")).classList.toggle("bad", !good);
      if (!good) ok = false;
    });
    document.getElementById("ferr").hidden = ok;
    if (!ok) return;
    const d = new FormData(cf), typeLabel = cf.querySelector("input[name=type]:checked + span").textContent;
    const body = [typeLabel, "", d.get("message"), "", "—", d.get("name"), d.get("company"), d.get("email"), d.get("phone")].filter(v => v !== null && v !== undefined).join("\n");
    location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("[Website] " + typeLabel + " — " + d.get("name")) + "&body=" + encodeURIComponent(body);
  });
  cf.querySelectorAll("input,textarea").forEach(f => f.addEventListener("input", () => { const p = f.closest(".fld"); if (p) p.classList.remove("bad"); }));
}
