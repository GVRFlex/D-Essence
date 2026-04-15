import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_47Q9Bw13.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CeYihTkF.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seo = {
    title: "SkinPen Microneedling | D-Essence Wellness",
    description: "FDA-cleared SkinPen microneedling stimulates collagen and elastin to improve fine lines, acne scars, and overall texture\u2014safe for all skin types.",
    canonical: "https://www.d-essencewellness.com/services/skinpen-microneedling/",
    type: "website",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        name: "SkinPen Microneedling",
        alternateName: "Collagen Induction Therapy",
        procedureType: "Non-surgical aesthetic treatment",
        howPerformed: "Controlled microneedling with an FDA-cleared device to stimulate collagen and elastin.",
        bodyLocation: "Face, neck, and other indicated areas",
        preparation: "Arrive with clean skin; avoid strong actives such as AHAs/BHAs and retinoids 3\u20135 days prior.",
        followup: "Series recommended (typically 3\u20136 sessions). Post-care includes hydration and strict SPF.",
        areaServed: "Hudson Valley, NY",
        image: "https://www.d-essencewellness.com/LOGO_W.webp",
        priceRange: "$$",
        availableService: {
          "@type": "Service",
          serviceType: "Microneedling (SkinPen)",
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
          }
        },
        url: "https://www.d-essencewellness.com/services/skinpen-microneedling/"
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
            name: "SkinPen Microneedling",
            item: "https://www.d-essencewellness.com/services/skinpen-microneedling/"
          }
        ]
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <link rel="preload" as="image" href="/IMG_0800.webp" imagesrcset="/IMG_0800.webp 1x, /IMG_0800.webp 2x" imagesizes="(min-width: 1024px) 480px, 64vw">  ', `<section class="bg-neutral-950 text-white"> <div class="container pt-28 pb-12"> <div class="max-w-3xl mx-auto text-center"> <div class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/70"> <span>Advanced Skin Care</span> <span class="opacity-60">\u2022</span> <span>New Windsor, NY</span> </div> <h1 class="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight">SkinPen\xAE Microneedling</h1> <div class="mt-4 h-px w-28 mx-auto bg-gradient-to-r from-transparent via-white to-transparent"></div> </div> </div> </section>  <section class="relative bg-white text-neutral-900"> <div class="container py-14 sm:py-[4.5rem]"> <div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center"> <!-- Image (placeholder; replace later) --> <figure class="relative"> <div class="pointer-events-none absolute -left-6 inset-y-6 w-16 rounded-full bg-gradient-to-r from-neutral-200 to-transparent blur-lg"></div> <div class="pointer-events-none absolute -right-6 inset-y-6 w-16 rounded-full bg-gradient-to-l from-neutral-200 to-transparent blur-lg"></div> <picture> <!-- <source srcset="/Skin_Pen.avif" type="image/avif" /> --> <source srcset="/Skin_Pen.webp" type="image/webp"> <img id="ba-open" src="/Skin_Pen.webp" alt="SkinPen microneedling treatment" fetchpriority="high" decoding="async" sizes="(min-width: 1024px) 480px, (min-width: 640px) 60vw, 92vw" class="cursor-zoom-in mx-auto w-full max-w-[12rem] sm:max-w-[16rem] md:max-w-[22rem] lg:max-w-[26rem] h-auto rounded-2xl ring-1 ring-neutral-200 shadow-2xl bg-neutral-100" width="960" height="1280" onerror="this.onerror=null; this.src='/placeholder-service.jpg';"> </picture> </figure> <!-- Copy + CTAs --> <div> <p class="text-neutral-700/90">
The first FDA-cleared microneedling device designed to safely rejuvenate all skin types. SkinPen\xAE stimulates
            collagen and elastin to improve fine lines, acne scars, and overall texture\u2014revealing smoother, healthier,
            more radiant skin.
</p> <div class="mt-8 flex items-center gap-4"> <a href="https://na02.patientnow.com/a/dessencewellness/OnlineBooking.aspx" target="_blank" rel="noopener" class="inline-flex items-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 active:bg-neutral-900/90 focus:outline-none focus:ring-2 focus:ring-neutral-300" aria-label="Book a SkinPen Microneedling appointment">
Book Now
</a> </div> </div> </div> </div> <!-- Lightbox / Zoom --> <div id="ba-lightbox" class="fixed inset-0 z-50 hidden opacity-0 transition-opacity duration-150" role="dialog" aria-modal="true" aria-labelledby="lb-title" aria-describedby="lb-desc"> <div class="absolute inset-0 bg-black/80"></div> <div class="relative h-full w-full flex items-center justify-center p-4"> <h2 id="lb-title" class="sr-only">Zoomed image</h2> <p id="lb-desc" class="sr-only">Press Escape or the close button to exit.</p> <picture> <!-- <source srcset="/IMG_0800.avif" type="image/avif" /> --> <source srcset="/IMG_0800.webp" type="image/webp"> <img src="/IMG_0800.webp" alt="Zoomed SkinPen microneedling illustrative image" class="max-h-[90vh] max-w-[92vw] rounded-2xl ring-1 ring-white/20 shadow-2xl"> </picture> <button id="ba-close" class="absolute top-4 right-4 inline-flex items-center justify-center rounded-full bg-white/90 text-neutral-900 h-10 w-10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/50" aria-label="Close image" title="Close">
\u2715
</button> </div> </div> </section>  <script>
    (() => {
      const openEl = document.getElementById('ba-open');
      const lightbox = document.getElementById('ba-lightbox');
      const closeEl = document.getElementById('ba-close');

      if (!openEl || !lightbox || !closeEl) return;

      let lastFocused = null;

      function show() {
        lastFocused = document.activeElement;
        lightbox.classList.remove('hidden');
        requestAnimationFrame(() => {
          lightbox.classList.remove('opacity-0');
          lightbox.classList.add('opacity-100');
        });

        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKey);
        setTimeout(() => closeEl.focus(), 0);
      }

      function hide() {
        lightbox.classList.add('opacity-0');
        lightbox.classList.remove('opacity-100');
        setTimeout(() => {
          lightbox.classList.add('hidden');
        }, 150);

        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKey);
        if (lastFocused && typeof lastFocused.focus === 'function') {
          lastFocused.focus();
        }
      }

      function onKey(e) {
        if (e.key === 'Escape') hide();
        if (e.key === 'Tab') {
          e.preventDefault();
          closeEl.focus();
        }
      }

      openEl.addEventListener('click', show);
      closeEl.addEventListener('click', hide);
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) hide();
      });
    })();
  <\/script> `])), maybeRenderHead()) })}`;
}, "C:/Users/georg/OneDrive/Desktop/GVR/D-Essence/src/pages/services/skinpen-microneedling/index.astro", void 0);

const $$file = "C:/Users/georg/OneDrive/Desktop/GVR/D-Essence/src/pages/services/skinpen-microneedling/index.astro";
const $$url = "/services/skinpen-microneedling/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
