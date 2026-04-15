import { f as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_47Q9Bw13.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CeYihTkF.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seo = {
    title: "Wellness & IV | D-Essence Wellness",
    description: "Targeted vitamin injections (B12, MICC, Lipo Plus, L-Carnitine, Amino Blend, Glutathione, Tri-Immune) and IV infusions for Energy, Immunity, Hydration, and Wellness.",
    canonical: "https://www.d-essencewellness.com/services/wellness-iv/",
    type: "website",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Wellness & IV Treatments",
        serviceType: "IV Therapy & Vitamin Injections",
        description: "IV infusions and targeted vitamin injections designed for hydration, immunity, energy, and overall wellness.",
        areaServed: "Hudson Valley, NY",
        image: "https://www.d-essencewellness.com/LOGO_W.webp",
        priceRange: "$$",
        provider: {
          "@type": "HealthAndBeautyBusiness",
          name: "D-Essence Wellness",
          url: "https://www.d-essencewellness.com",
          telephone: "+1-716-303-8963",
          image: "https://www.d-essencewellness.com/LOGO_W.webp",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "871 Blooming Grove Turnpike Suite 102",
            addressLocality: "New Windsor",
            addressRegion: "NY",
            postalCode: "12553",
            addressCountry: "US"
          }
        },
        url: "https://www.d-essencewellness.com/services/wellness-iv/",
        makesOffer: [
          { "@type": "Service", name: "IV Infusion \u2014 Energy" },
          { "@type": "Service", name: "IV Infusion \u2014 Immunity" },
          { "@type": "Service", name: "IV Infusion \u2014 Hydration" },
          { "@type": "Service", name: "IV Infusion \u2014 Wellness" },
          { "@type": "Service", name: "Vitamin Injection \u2014 B12 (Methylcobalamin)" },
          { "@type": "Service", name: "Vitamin Injection \u2014 MICC" },
          { "@type": "Service", name: "Vitamin Injection \u2014 Lipo Plus" },
          { "@type": "Service", name: "Vitamin Injection \u2014 L-Carnitine" },
          { "@type": "Service", name: "Vitamin Injection \u2014 Amino Blend" },
          { "@type": "Service", name: "Vitamin Injection \u2014 Glutathione" },
          { "@type": "Service", name: "Vitamin Injection \u2014 Tri-Immune Boost" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Services",
            item: "https://www.d-essencewellness.com/services/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Wellness & IV",
            item: "https://www.d-essencewellness.com/services/wellness-iv/"
          }
        ]
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<section class="bg-neutral-950 text-white"> <div class="container pt-28 pb-14 sm:pb-16"> <div class="max-w-3xl"> <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/60"> <span>Services</span><span class="opacity-40">\u2022</span><span>Wellness &amp; IV</span> </div> <h1 class="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">Wellness &amp; IV Therapy</h1> <p class="mt-4 text-white/80">\nTargeted vitamin injections and IV infusions designed to support energy, immunity, hydration,\n          recovery and overall wellness\u2014delivered with nurse-led protocols.\n</p> <!-- Quick-nav --> <nav aria-label="Category quick-nav" class="mt-6 flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]"> ', ' </nav> </div> </div> </section>  <div class="bg-white text-neutral-900"> <!-- IV INFUSIONS --> <section id="iv-infusions" class="scroll-mt-28 py-12 sm:py-14"> <div class="container"> <div class="grid md:grid-cols-12 gap-8 items-start"> <div class="md:col-span-5"> <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">IV Infusions</h2> <p class="mt-3 text-neutral-700">\nBalanced fluids, electrolytes and vitamins delivered intravenously for rapid uptake.\n              We tailor add-ons and cadence to your goals and health history.\n</p> <ul class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-700"> ', ' </ul> </div> <div class="md:col-span-7"> <div class="grid sm:grid-cols-2 gap-4"> ', ' </div> </div> </div> </div> </section> <div class="container"><div class="h-px bg-neutral-200"></div></div> <!-- VITAMIN INJECTIONS --> <section id="vitamin-injections" class="scroll-mt-28 py-12 sm:py-14"> <div class="container"> <div class="grid md:grid-cols-12 gap-8 items-start"> <div class="md:col-span-5"> <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">Vitamin Injections</h2> <p class="mt-3 text-neutral-700">\nSingle-dose intramuscular shots for targeted benefits. We\u2019ll help select the right option\n              and outline a reasonable cadence.\n</p> <ul class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-700"> ', ' </ul> </div> <div class="md:col-span-7"> <div class="grid sm:grid-cols-2 gap-4"> ', ` </div> </div> </div> </div> </section> <!-- FAQ --> <section class="py-12 sm:py-14 border-t border-neutral-200"> <div class="container"> <h2 class="text-xl sm:text-2xl font-semibold tracking-tight">FAQ</h2> <div class="mt-6 grid gap-4"> <details class="group rounded-xl bg-white ring-1 ring-neutral-200 p-5"> <summary class="list-none cursor-pointer flex items-center justify-between"> <span class="font-medium text-neutral-900">How often can I get B12 or MICC injections?</span> <svg class="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path d="M5.8 7.3a1 1 0 011.4 0L10 10.1l2.8-2.8a1 1 0 111.4 1.4l-3.5 3.5a1 1 0 01-1.4 0L5.8 8.7a1 1 0 010-1.4z"></path></svg> </summary> <p class="mt-3 text-neutral-700 text-sm">
Cadence depends on your baseline and goals. Many clients start weekly or bi-weekly, then
              taper to maintenance. We\u2019ll review your history to recommend a safe interval.
</p> </details> <details class="group rounded-xl bg-white ring-1 ring-neutral-200 p-5"> <summary class="list-none cursor-pointer flex items-center justify-between"> <span class="font-medium text-neutral-900">Can I combine an IV with a vitamin shot the same day?</span> <svg class="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path d="M5.8 7.3a1 1 0 011.4 0L10 10.1l2.8-2.8a1 1 0 111.4 1.4l-3.5 3.5a1 1 0 01-1.4 0L5.8 8.7a1 1 0 010-1.4z"></path></svg> </summary> <p class="mt-3 text-neutral-700 text-sm">
Often yes, when appropriate. We\u2019ll screen for interactions and adjust dosing so the plan
              stays conservative and comfortable.
</p> </details> <details class="group rounded-xl bg-white ring-1 ring-neutral-200 p-5"> <summary class="list-none cursor-pointer flex items-center justify-between"> <span class="font-medium text-neutral-900">Do I need lab work beforehand?</span> <svg class="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path d="M5.8 7.3a1 1 0 011.4 0L10 10.1l2.8-2.8a1 1 0 111.4 1.4l-3.5 3.5a1 1 0 01-1.4 0L5.8 8.7a1 1 0 010-1.4z"></path></svg> </summary> <p class="mt-3 text-neutral-700 text-sm">
Not always. We\u2019ll review medications, conditions and recent labs (if available) and advise
              if additional testing makes sense for you.
</p> </details> <p class="text-xs text-neutral-500">
Wellness services are complementary and not a substitute for diagnosis or treatment. Always consult
            your medical provider with specific questions.
</p> </div> </div> </section> </div>  <script>
    (function () {
      var OFFSET = 24;
      var DURATION = 750;
      function easeInOutCubic(t){ return t<0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2; }
      document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          var id = a.getAttribute('href').slice(1);
          var el = document.getElementById(id);
          if (!el) return;
          e.preventDefault();
          var start = window.scrollY || window.pageYOffset;
          var target = el.getBoundingClientRect().top + start - OFFSET;
          var startTime = null;
          function step(ts) {
            if (startTime === null) startTime = ts;
            var elapsed = ts - startTime;
            var p = Math.min(elapsed / DURATION, 1);
            var eased = easeInOutCubic(p);
            window.scrollTo(0, start + (target - start) * eased);
            if (elapsed < DURATION) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      });
    })();
  <\/script> `])), maybeRenderHead(), [
    { id: "iv-infusions", label: "IV Infusions" },
    { id: "vitamin-injections", label: "Vitamin Injections" }
  ].map((link) => renderTemplate`<a${addAttribute(`#${link.id}`, "href")} class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"> ${link.label} </a>`), [
    "Energy \u2022 performance support",
    "Immunity \u2022 travel prep",
    "Hydration \u2022 recovery",
    "General wellness & glow",
    "Nurse-led sterile technique",
    "Brief visit, minimal downtime"
  ].map((item) => renderTemplate`<li class="inline-flex items-center gap-2"> <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg> <span>${item}</span> </li>`), [
    { title: "Energy", desc: "B-vitamins and support for fatigue & busy weeks." },
    { title: "Immunity", desc: "Vitamin C + zinc\u2013focused defense support." },
    { title: "Hydration", desc: "Fluids & electrolytes for rehydration." },
    { title: "Wellness", desc: "Balanced cocktail for overall vitality." }
  ].map((card) => renderTemplate`<a href="/contact-us/" class="group rounded-2xl bg-white ring-1 ring-neutral-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition"> <div class="flex items-center gap-3"> <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200"> <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none"><path d="M7 3h10l1 3H6l1-3zM7 21h10M6 14h12" stroke="currentColor" stroke-width="1.5"></path></svg> </span> <div> <h3 class="font-medium text-neutral-900">${card.title}</h3> <p class="mt-1 text-sm text-neutral-600">${card.desc}</p> </div> </div> <div class="mt-3 text-sm underline underline-offset-4 decoration-neutral-300 text-neutral-800 group-hover:decoration-neutral-700">Request consult →</div> </a>`), [
    "B12 (methylcobalamin) \u2014 energy",
    "MICC / Lipo Plus \u2014 metabolism support",
    "L-Carnitine \u2014 fat-utilization aid",
    "Amino Blend \u2014 recovery support",
    "Glutathione \u2014 antioxidant/brightening",
    "Tri-Immune \u2014 C + zinc + glutathione"
  ].map((item) => renderTemplate`<li class="inline-flex items-center gap-2"> <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg> <span>${item}</span> </li>`), [
    { title: "B12 (Methylcobalamin)", url: "/contact-us/", sub: "Energy & focus support" },
    { title: "MICC / Lipo Plus", url: "/contact-us/", sub: "Metabolism & liver support" },
    { title: "L-Carnitine", url: "/contact-us/", sub: "Fat-utilization & endurance" },
    { title: "Amino Blend", url: "/contact-us/", sub: "Recovery & performance" },
    { title: "Glutathione", url: "/contact-us/", sub: "Antioxidant / skin brightening" },
    { title: "Tri-Immune Boost", url: "/contact-us/", sub: "Glutathione + Vitamin C + Zinc" }
  ].map((card) => renderTemplate`<a${addAttribute(card.url, "href")} class="group rounded-2xl bg-white ring-1 ring-neutral-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition"> <div class="flex items-center gap-3"> <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200"> <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none"><path d="M12 2v6m0 8v6M2 12h6m8 0h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> </span> <div> <h3 class="font-medium text-neutral-900">${card.title}</h3> <p class="mt-1 text-sm text-neutral-600">${card.sub}</p> </div> </div> <div class="mt-3 text-sm underline underline-offset-4 decoration-neutral-300 text-neutral-800 group-hover:decoration-neutral-700">Learn more →</div> </a>`)) })}`;
}, "C:/Users/georg/OneDrive/Desktop/GVR/D-Essence/src/pages/services/wellness-iv/index.astro", void 0);

const $$file = "C:/Users/georg/OneDrive/Desktop/GVR/D-Essence/src/pages/services/wellness-iv/index.astro";
const $$url = "/services/wellness-iv/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
