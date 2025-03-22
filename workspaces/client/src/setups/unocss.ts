import presetIcons from '@unocss/preset-icons/browser';
import presetWind3 from '@unocss/preset-wind3';
import initUnocssRuntime, { defineConfig } from '@unocss/runtime';

async function init() {
  await initUnocssRuntime({
    defaults: defineConfig({
      layers: {
        default: 1,
        icons: 0,
        preflights: 0,
        reset: -1,
      },
      preflights: [
        {
          getCSS: () => import('@unocss/reset/tailwind-compat.css?raw').then(({ default: css }) => css),
          layer: 'reset',
        },
        {
          getCSS: () => /* css */ `
          @view-transition {
            navigation: auto;
          } html,
          :host {
            font-family: 'Noto Sans JP', sans-serif !important;
          }
          video {
            max-height: 100%;
            max-width: 100%;
          }
        `,
        },
        {
          getCSS: () => /* css */ `
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `,
        },
      ],
      presets: [
        presetWind3(),
        presetIcons({
          collections: {
            bi: () => import('@iconify-json/bi/icons.json').then((m) => m.default),
            bx: () => import('@iconify-json/bx/icons.json').then((m) => m.default),
            'fa-regular': () => import('@iconify-json/fa-regular/icons.json').then((m) => m.default),
            'fa-solid': () => import('@iconify-json/fa-solid/icons.json').then((m) => m.default),
            fluent: () => import('@iconify-json/fluent/icons.json').then((m) => m.default),
            'line-md': () => import('@iconify-json/line-md/icons.json').then((m) => m.default),
            'material-symbols': () => import('@iconify-json/material-symbols/icons.json').then((m) => m.default),
          },
        }),
      ],
    }),
  });
}

init().catch((err: unknown) => {
  throw err;
});
