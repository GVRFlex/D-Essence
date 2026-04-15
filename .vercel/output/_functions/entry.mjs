import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DBnOodPu.mjs';
import { manifest } from './manifest_BfNytR0b.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about-us.astro.mjs');
const _page3 = () => import('./pages/booking-policy.astro.mjs');
const _page4 = () => import('./pages/contact-us.astro.mjs');
const _page5 = () => import('./pages/hipaa.astro.mjs');
const _page6 = () => import('./pages/meet-the-provider.astro.mjs');
const _page7 = () => import('./pages/privacy-policy.astro.mjs');
const _page8 = () => import('./pages/services/acne-programs.astro.mjs');
const _page9 = () => import('./pages/services/aerolase.astro.mjs');
const _page10 = () => import('./pages/services/biorepeel.astro.mjs');
const _page11 = () => import('./pages/services/botox-for-hyperhidrosis.astro.mjs');
const _page12 = () => import('./pages/services/chemical-peels.astro.mjs');
const _page13 = () => import('./pages/services/dermal-fillers.astro.mjs');
const _page14 = () => import('./pages/services/facial-waxing.astro.mjs');
const _page15 = () => import('./pages/services/iv-therapy.astro.mjs');
const _page16 = () => import('./pages/services/laser.astro.mjs');
const _page17 = () => import('./pages/services/lip-filler.astro.mjs');
const _page18 = () => import('./pages/services/neurotoxins.astro.mjs');
const _page19 = () => import('./pages/services/platelet-rich-plasma.astro.mjs');
const _page20 = () => import('./pages/services/signature-facials.astro.mjs');
const _page21 = () => import('./pages/services/skinpen-microneedling.astro.mjs');
const _page22 = () => import('./pages/services/smooth-threads.astro.mjs');
const _page23 = () => import('./pages/services/sugaring.astro.mjs');
const _page24 = () => import('./pages/services/teeth-whitening.astro.mjs');
const _page25 = () => import('./pages/services/the-perfect-derma-peel.astro.mjs');
const _page26 = () => import('./pages/services/therapeutic-massage.astro.mjs');
const _page27 = () => import('./pages/services/vitamin-injections.astro.mjs');
const _page28 = () => import('./pages/services/wellness-iv.astro.mjs');
const _page29 = () => import('./pages/services.astro.mjs');
const _page30 = () => import('./pages/terms-and-conditions.astro.mjs');
const _page31 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about-us.astro", _page2],
    ["src/pages/booking-policy.astro", _page3],
    ["src/pages/contact-us.astro", _page4],
    ["src/pages/hipaa.astro", _page5],
    ["src/pages/meet-the-provider.astro", _page6],
    ["src/pages/privacy-policy.astro", _page7],
    ["src/pages/services/acne-programs/index.astro", _page8],
    ["src/pages/services/aerolase/index.astro", _page9],
    ["src/pages/services/biorepeel/index.astro", _page10],
    ["src/pages/services/botox-for-hyperhidrosis/index.astro", _page11],
    ["src/pages/services/chemical-peels/index.astro", _page12],
    ["src/pages/services/dermal-fillers/index.astro", _page13],
    ["src/pages/services/facial-waxing/index.astro", _page14],
    ["src/pages/services/iv-therapy/index.astro", _page15],
    ["src/pages/services/laser/index.astro", _page16],
    ["src/pages/services/lip-filler/index.astro", _page17],
    ["src/pages/services/neurotoxins/index.astro", _page18],
    ["src/pages/services/platelet-rich-plasma/index.astro", _page19],
    ["src/pages/services/signature-facials/index.astro", _page20],
    ["src/pages/services/skinpen-microneedling/index.astro", _page21],
    ["src/pages/services/smooth-threads/index.astro", _page22],
    ["src/pages/services/sugaring/index.astro", _page23],
    ["src/pages/services/teeth-whitening/index.astro", _page24],
    ["src/pages/services/the-perfect-derma-peel/index.astro", _page25],
    ["src/pages/services/therapeutic-massage/index.astro", _page26],
    ["src/pages/services/vitamin-injections/index.astro", _page27],
    ["src/pages/services/wellness-iv/index.astro", _page28],
    ["src/pages/services/index.astro", _page29],
    ["src/pages/terms-and-conditions.astro", _page30],
    ["src/pages/index.astro", _page31]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "4935abc9-47da-4711-8611-264b787e1c04",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
