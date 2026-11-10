// ================= EDIT YOUR PERSONAL INFORMATION HERE =================
const CV_PATH = "assets/Jan-Kenneth-Cabonilas-CV.pdf";

// ================= UPDATE YOUR SOCIAL MEDIA LINKS HERE =================
const contacts = [
  { label: "Email", text: "jcabonilas9@gmail.com", href: "mailto:jcabonilas9@gmail.com", icon: "mail" },
  { label: "Phone", text: "+63 956 951 7778", href: "tel:+639569517778", icon: "phone" },
  { label: "LinkedIn", text: "Jan Kenneth Cabonilas", href: "https://www.linkedin.com/in/jan-kenneth-cabonilas-727232304/", icon: "link", ext: true },
  { label: "GitHub", text: "K4RJ07", href: "https://github.com/K4RJ07", icon: "code", ext: true },
  { label: "Facebook", text: "jann.kenneth.cabonilas", href: "https://www.facebook.com/jann.kenneth.cabonilas", icon: "users", ext: true },
  { label: "Instagram", text: "__m4d3vy.jkini7", href: "https://www.instagram.com/__m4d3vy.jkini7/", icon: "camera", ext: true }
];

// ================= SERVICES =================
const serviceValue = ["You get a site that builds trust with visitors and is easy for you to keep updated.", "You save time on routine tasks and keep your inbox and schedule organized.", "Your brand looks consistent and professional everywhere it appears.", "Your pages stay active with planned, on-brand content.", "You get original images suited to your content.", "Your photos and videos look cleaner and more polished.", "Your ideas come across clearly in meetings and pitches."];
const services = [
  ["web", "Website Design and Development", "Clean, responsive websites built with HTML, CSS and JavaScript. Your business gets a clear online presence that works on any device."],
  ["assist", "Virtual Assistance", "Email and calendar management and everyday admin support, so you can spend your time on the work that matters."],
  ["brush", "Graphic Design and Branding", "Branded graphics that look consistent across your website, posts and documents."],
  ["share", "Social Media Management", "Content planning and posting for Instagram, LinkedIn, TikTok and Facebook, so your pages stay active and on-brand."],
  ["camera", "Photography Services", "Photography for people, products and events, delivered with careful framing and editing."],
  ["film", "Photo and Video Editing", "Clean-up, color and trimming that turn raw footage and photos into polished content."],
  ["slides", "Presentation and Pitch Deck Design", "Clear, well-structured PowerPoint decks that help you present ideas with confidence."]
];

// ================= SKILLS (level: 1 = beginner, 2 = intermediate, 3 = confident) =================
const skills = {
  "Design and creativity": [["Graphic Design", 2], ["Basic UI/UX Design", 2], ["Photography", 2], ["Presentation Design (PowerPoint)", 2]],
  "Web development": [["HTML, CSS, JavaScript", 2], ["Python Programming", 2]],
  "Social media": [["Social Media Management", 2], ["Social Media Content Creation", 2]],
  "Virtual assistance": [["Virtual Assistance", 2], ["Email and Calendar Management", 2]],
  "Communication": [["Public Speaking and Communication", 2]]
};
const levelNames = ["", "Beginner", "Intermediate", "Confident"];
const tools = {
  "Design": ["Canva", "Figma"],
  "Development": ["Visual Studio Code", "Git and GitHub", "Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite"],
  "Productivity": ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Google Workspace"],
  "Social platforms": ["Instagram", "LinkedIn", "TikTok", "Meta Business Suite"]
};

// ================= ADD NEW PROJECTS HERE =================
// image: put the file in assets/projects/ and set the path. Leave "" for a placeholder.
// status: "Status to be confirmed", "In progress" or "Completed". liveUrl / githubUrl: "" hides the button.
const projects = [
  { name: "Divers Superclub-Uptown", type: "Website development", status: "Status to be confirmed",
    overview: "Developing a website for Divers Superclub-Uptown, including its website interface and functionality.",
    role: "Website development (interface and functionality).", tech: [], image: "", liveUrl: "", githubUrl: "",
    details: [] },
  { name: "BaoGo Ride Booking Platform", type: "Software development", status: "In progress",
    overview: "Developing BaoGo, a ride-booking platform for bao-bao transportation in Pagadian City, with passenger, driver and admin features.",
    role: "Software development.", tech: [], image: "", liveUrl: "", githubUrl: "",
    details: ["Designed for bao-bao transportation in Pagadian City", "Passenger booking interface", "Driver portal", "Admin dashboard", "Automatic driver matching with admin override", "Cash payment support in the initial phase", "Responsive website designed with future mobile-app integration in mind"] },
  { name: "CDO Jeepney Route Finder", type: "Programming and problem solving", status: "In progress",
    overview: "Developing Jeepney Route Finder using the Dijkstra algorithm.",
    role: "Programming and algorithm design.", tech: [], image: "", liveUrl: "", githubUrl: "",
    details: ["Uses Dijkstra's algorithm, which finds the shortest path between points in a network, as the core idea for finding routes."] },
  { name: "Photography Portfolio", type: "Photography", status: "Photos coming soon",
    overview: "A gallery of my photography work. Photos will be added here once uploaded.",
    role: "Photographer.", tech: [], image: "", liveUrl: "", githubUrl: "", details: [] }
];

// ================= ADD YOUR CERTIFICATES HERE =================
const certificate = { issuer: "Google", date: "", file: "", url: "" }; // e.g. file: "assets/certificates/google-data-analysis-python.pdf"

// ---------------- rendering ----------------
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const P = {
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>', phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  link: '<path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1"/>', code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M18 14a6 6 0 0 1 3 6"/>', camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>', assist: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 11h16m-11 4 2 2 4-4"/>',
  brush: '<path d="M4 20c4 0 5-2 5-4l-2-2c-2 0-3 2-3 6zM9 14 20 4l-1 1-1 1-9 9"/>', share: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 11 7.6-3.8M8.2 13l7.6 3.8"/>',
  film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4v16M16 4v16M3 9h5M3 15h5M16 9h5M16 15h5"/>', slides: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8M7 12l3-3 2 2 4-4"/>'
};
const svg = n => `<svg viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>`;

$("#servicesGrid").innerHTML = services.map(([i, t, d], k) => `<button type="button" class="card svc reveal" aria-expanded="false" aria-controls="sv${k}"><div class="ico">${svg(i)}</div><h3>${t}</h3><p>${d}</p><div class="more" id="sv${k}"><div><p><strong>How it helps you:</strong> ${serviceValue[k]}</p></div></div><span class="hint">How it helps you</span></button>`).join("");
$("#servicesGrid").addEventListener("click", e => { const b = e.target.closest(".svc"); if (b) b.setAttribute("aria-expanded", b.getAttribute("aria-expanded") !== "true"); });

// Skills tabs
const tabs = $("#skillTabs"), panel = $("#skillPanel"), cats = Object.keys(skills);
function showSkills(c) {
  tabs.querySelectorAll("button").forEach(b => b.setAttribute("aria-selected", b.dataset.c === c));
  panel.innerHTML = `<ul>${skills[c].map(([n, l]) => `<li><span>${n}</span><span class="lvl" aria-label="${levelNames[l]} level">${[1, 2, 3].map(k => `<i class="${k <= l ? "on" : ""}"></i>`).join("")}&nbsp;${levelNames[l]}</span></li>`).join("")}</ul>`;
}
tabs.innerHTML = cats.map(c => `<button type="button" role="tab" data-c="${c}" aria-selected="false">${c}</button>`).join("");
tabs.addEventListener("keydown", e => { const bs = [...tabs.querySelectorAll("button")], i = bs.indexOf(document.activeElement); if (i < 0 || !["ArrowRight", "ArrowLeft"].includes(e.key)) return; const n = bs[(i + (e.key === "ArrowRight" ? 1 : bs.length - 1)) % bs.length]; n.focus(); showSkills(n.dataset.c); });
tabs.addEventListener("click", e => { const b = e.target.closest("button"); if (b) showSkills(b.dataset.c); });
showSkills(cats[0]);
$("#toolsGrid").innerHTML = Object.entries(tools).map(([g, l]) => `<div class="card tool"><h4>${g}</h4><ul>${l.map(x => `<li class="tag">${x}</li>`).join("")}</ul></div>`).join("");

// Projects
$("#projectsGrid").innerHTML = projects.map((p, i) => `<article class="card pc reveal" data-type="${esc(p.type)}">
  ${p.image ? `<div class="shot"><img src="${esc(p.image)}" alt="${esc(p.name)} screenshot" loading="lazy"></div>` : ""}
  <div class="top"><span class="tag">${esc(p.type)}</span><span class="status-tag">${esc(p.status)}</span></div>
  <h3>${esc(p.name)}</h3><p>${esc(p.overview)}</p>
  <p><strong>My role:</strong> ${esc(p.role)}</p>
  <div class="tags">${p.tech.length ? p.tech.map(t => `<span class="tag">${esc(t)}</span>`).join("") : (p.type === "Photography" ? "" : `<span class="tag">Technologies to be confirmed</span>`)}</div>
  <button class="btn" type="button" data-i="${i}">View details</button></article>`).join("");

const modal = $("#modal");
$("#projectsGrid").addEventListener("click", e => {
  const b = e.target.closest("[data-i]"); if (!b) return; const p = projects[b.dataset.i];
  const links = [p.liveUrl && `<a class="btn primary" href="${esc(p.liveUrl)}" target="_blank" rel="noopener noreferrer">Live site</a>`, p.githubUrl && `<a class="btn" href="${esc(p.githubUrl)}" target="_blank" rel="noopener noreferrer">GitHub repository</a>`].filter(Boolean).join(" ");
  $("#mBody").innerHTML = `<h3 id="mTitle">${esc(p.name)}</h3><span class="status-tag">${esc(p.status)}</span><p>${esc(p.overview)}</p><h4>My role</h4><p>${esc(p.role)}</p>
  ${p.details.length ? `<h4>Project context</h4><ul>${p.details.map(d => `<li>${esc(d)}</li>`).join("")}</ul>` : `<p>More details will be added soon.</p>`}
  <p>${links || "Live link and repository will be added when available."}</p>`;
  modal.showModal();
});
$("#mClose").onclick = () => modal.close();
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

const fbar = $("#projectFilters"), ptypes = ["All", ...new Set(projects.map(p => p.type))];
fbar.innerHTML = ptypes.map((t, i) => `<button type="button" data-t="${esc(t)}" aria-pressed="${i === 0}">${esc(t)}</button>`).join("");
fbar.addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return;
  fbar.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
  document.querySelectorAll(".pc").forEach(c => { const show = b.dataset.t === "All" || c.dataset.type === b.dataset.t; c.hidden = !show; if (show) { c.classList.remove("pop"); void c.offsetWidth; c.classList.add("pop", "in"); } }); });

// Certificate
$("#certMeta").innerHTML = `<div>Issued by ${esc(certificate.issuer)}</div><div>Date issued: ${certificate.date ? esc(certificate.date) : "to be added"}</div>` +
  (certificate.file ? `<div><a href="${esc(certificate.file)}" target="_blank" rel="noopener noreferrer">View certificate</a></div>` : "") +
  (certificate.url ? `<div><a href="${esc(certificate.url)}" target="_blank" rel="noopener noreferrer">Verify credential</a></div>` : "");

// Contact + footer
$("#contactList").innerHTML = contacts.map(c => `<li><a href="${c.href}" ${c.ext ? 'target="_blank" rel="noopener noreferrer"' : ""} aria-label="${c.label}: ${c.text}">${svg(c.icon)}<span><small>${c.label}</small>${c.text}</span></a>${c.label === "Email" || c.label === "Phone" ? `<button type="button" class="copy-btn" data-copy="${c.text}" aria-label="Copy ${c.label.toLowerCase()}">Copy</button>` : ""}</li>`).join("");
$("#footSocial").innerHTML = contacts.filter(c => c.ext).map(c => `<li><a href="${c.href}" target="_blank" rel="noopener noreferrer">${c.label}</a></li>`).join("");
$("#year").textContent = new Date().getFullYear();

// CV: only download if the file exists
$("#cvBtn").addEventListener("click", async e => {
  e.preventDefault();
  try {
    const r = await fetch(CV_PATH, { method: "HEAD" });
    const ok = r.ok && (r.headers.get("content-type") || "").includes("pdf");
    if (ok) { const a = document.createElement("a"); a.href = CV_PATH; a.download = ""; a.click(); return; }
  } catch (_) {}
  $("#cvNote").hidden = false;
});

// Theme
const root = document.documentElement, tb = $("#themeBtn");
const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
const syncTheme = () => tb.setAttribute("aria-label", isDark() ? "Switch to light mode" : "Switch to dark mode");
tb.onclick = () => { const t = isDark() ? "light" : "dark"; root.dataset.theme = t; try { localStorage.setItem("theme", t); } catch (_) {} syncTheme(); };
syncTheme();

// Mobile menu
const menu = $("#menu"), mb = $("#menuBtn");
const setMenu = o => { menu.classList.toggle("open", o); mb.setAttribute("aria-expanded", o); mb.setAttribute("aria-label", o ? "Close menu" : "Open menu"); };
mb.onclick = () => setMenu(!menu.classList.contains("open"));
menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

// Active link + reveal
const links = [...menu.querySelectorAll("a")];
const spy = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.hash === "#" + en.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));
document.documentElement.classList.add("js");
const rv = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); rv.unobserve(en.target); } }), { threshold: .1 });
document.querySelectorAll(".reveal").forEach(el => rv.observe(el));

// ---- extra interactivity ----
const toast = $("#toast"); let tt;
const say = m => { toast.textContent = m; toast.classList.add("show"); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove("show"), 2000); };
$("#contactList").addEventListener("click", async e => { const b = e.target.closest("[data-copy]"); if (!b) return; try { await navigator.clipboard.writeText(b.dataset.copy); say("Copied: " + b.dataset.copy); } catch (_) { say("Copy isn't available. Select the text instead."); } });

const bar = $("#progress"), toTopBtn = $("#toTop");
let tick = false;
addEventListener("scroll", () => { if (tick) return; tick = true; requestAnimationFrame(() => { const h = document.documentElement.scrollHeight - innerHeight; bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`; toTopBtn.hidden = scrollY < 600; tick = false; }); }, { passive: true });
toTopBtn.onclick = () => scrollTo({ top: 0 });

const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
document.addEventListener("pointermove", e => { const c = e.target.closest && e.target.closest(".card"); if (c) { const r = c.getBoundingClientRect(); c.style.setProperty("--mx", e.clientX - r.left + "px"); c.style.setProperty("--my", e.clientY - r.top + "px"); } });
const hero = $(".hero"), ph = $(".photo img");
if (!still && matchMedia("(hover:hover)").matches) hero.addEventListener("pointermove", e => { const r = hero.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; hero.style.setProperty("--gx", (x + .5) * 100 + "%"); hero.style.setProperty("--gy", (y + .5) * 100 + "%"); ph.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`; });
hero.addEventListener("pointerleave", () => { ph.style.transform = ""; });
