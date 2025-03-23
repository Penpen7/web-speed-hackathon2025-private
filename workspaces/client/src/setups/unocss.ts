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
            bi: () => {
              return {
                icons: {
                  'house-fill': {
                    body: '<g fill="currentColor"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/><path d="m8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/></g>',
                  },
                },
                info: {
                  author: {
                    name: 'The Bootstrap Authors',
                    url: 'https://github.com/twbs/icons',
                  },
                  category: 'UI 16px / 32px',
                  height: 16,
                  license: {
                    spdx: 'MIT',
                    title: 'MIT',
                    url: 'https://github.com/twbs/icons/blob/main/LICENSE.md',
                  },
                  name: 'Bootstrap Icons',
                  palette: false,
                  samples: ['graph-up', 'card-image', 'code-slash', 'egg-fill', 'brilliance', 'toggle-on'],
                  tags: ['Precise Shapes'],
                  total: 2050,
                  version: '1.11.3',
                },
                lastModified: 1704439122,
                prefix: 'bi',
              };
            },
            bx: () => import('@iconify-json/bx/icons.json').then((m) => m.default),
            'fa-regular': () => import('@iconify-json/fa-regular/icons.json').then((m) => m.default),
            'fa-solid': () => import('@iconify-json/fa-solid/icons.json').then((m) => m.default),
            fluent: () => {
              return {
                icons: {
                  'live-24-filled': {
                    body: '<path fill="currentColor" d="M6.343 4.938a1 1 0 0 1 0 1.415a8.003 8.003 0 0 0 0 11.317a1 1 0 1 1-1.414 1.414c-3.907-3.906-3.907-10.24 0-14.146a1 1 0 0 1 1.414 0m12.732 0c3.906 3.907 3.906 10.24 0 14.146a1 1 0 0 1-1.415-1.414a8.003 8.003 0 0 0 0-11.317a1 1 0 0 1 1.415-1.415M9.31 7.812a1 1 0 0 1 0 1.414a3.92 3.92 0 0 0 0 5.544a1 1 0 1 1-1.415 1.414a5.92 5.92 0 0 1 0-8.372a1 1 0 0 1 1.415 0m6.958 0a5.92 5.92 0 0 1 0 8.372a1 1 0 0 1-1.414-1.414a3.92 3.92 0 0 0 0-5.544a1 1 0 0 1 1.414-1.414m-4.186 2.77a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/>',
                    height: 24,
                    width: 24,
                  },
                },
                info: {
                  author: {
                    name: 'Microsoft Corporation',
                    url: 'https://github.com/microsoft/fluentui-system-icons',
                  },
                  category: 'UI Other / Mixed Grid',
                  license: {
                    spdx: 'MIT',
                    title: 'MIT',
                    url: 'https://github.com/microsoft/fluentui-system-icons/blob/main/LICENSE',
                  },
                  name: 'Fluent UI System Icons',
                  palette: false,
                  samples: [
                    'zoom-out-24-filled',
                    'drink-coffee-24-regular',
                    'photo-filter-24-regular',
                    'checkmark-24-filled',
                    'oval-24-filled',
                    'cloud-24-filled',
                  ],
                  tags: ['Precise Shapes', 'Has Padding'],
                  total: 1,
                  version: '1.1.291',
                },
                lastModified: 1742281107,
                prefix: 'fluent',
              };
            },
            'line-md': () => import('@iconify-json/line-md/icons.json').then((m) => m.default),
            'material-symbols': () => {
              return {
                icons: {
                  'error-outline': {
                    body: '<path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/>',
                  },
                  'pause-rounded': {
                    body: '<path fill="currentColor" d="M16 19q-.825 0-1.412-.587T14 17V7q0-.825.588-1.412T16 5t1.413.588T18 7v10q0 .825-.587 1.413T16 19m-8 0q-.825 0-1.412-.587T6 17V7q0-.825.588-1.412T8 5t1.413.588T10 7v10q0 .825-.587 1.413T8 19"/>',
                  },
                  'play-arrow-rounded': {
                    body: '<path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"/>',
                  },
                  'volume-off-rounded': {
                    body: '<path fill="currentColor" d="M16.775 19.575q-.275.175-.55.325t-.575.275q-.375.175-.762 0t-.538-.575q-.15-.375.038-.737t.562-.538q.1-.05.188-.1t.187-.1L12 14.8v2.775q0 .675-.612.938T10.3 18.3L7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h2.2L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275zm2.225-7.6q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.05T21 11.975q0 .825-.15 1.638t-.425 1.562q-.2.55-.612.688t-.763.012t-.562-.45t-.013-.75q.275-.65.4-1.312T19 11.975m-4.225-3.55Q15.6 8.95 16.05 10t.45 2v.25q0 .125-.025.25q-.05.325-.35.425t-.55-.15L14.3 11.5q-.15-.15-.225-.337T14 10.775V8.85q0-.3.263-.437t.512.012M9.75 6.95Q9.6 6.8 9.6 6.6t.15-.35l.55-.55q.475-.475 1.087-.213t.613.938V8q0 .35-.3.475t-.55-.125z"/>',
                  },
                  'volume-up-rounded': {
                    body: '<path fill="currentColor" d="M19 11.975q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.063T21 11.974t-1.45 4.913t-3.875 3.287q-.4.175-.788 0t-.537-.575q-.125-.375.05-.737t.55-.538q1.85-.85 2.95-2.562t1.1-3.788M7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.513.013T14 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2"/>',
                  },
                  'warning-outline-rounded': {
                    body: '<path fill="currentColor" d="M2.725 21q-.275 0-.5-.137t-.35-.363t-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3t.488.125t.387.375l9.25 16q.15.25.138.513t-.138.487t-.35.363t-.5.137zm1.725-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11v3q0 .425.288.713T12 15m0-2.5"/>',
                  },
                },
                info: {
                  author: {
                    name: 'Google',
                    url: 'https://github.com/google/material-design-icons',
                  },
                  category: 'Material',
                  height: 24,
                  license: {
                    spdx: 'Apache-2.0',
                    title: 'Apache 2.0',
                    url: 'https://github.com/google/material-design-icons/blob/master/LICENSE',
                  },
                  name: 'Material Symbols',
                  palette: false,
                  samples: [
                    'downloading',
                    'privacy-tip',
                    'filter-drama-outline',
                    'assignment-ind',
                    'monitoring',
                    'desktop-access-disabled-outline-sharp',
                  ],
                  tags: ['Has Padding'],
                  total: 14025,
                },
                lastModified: 1742538575,
                prefix: 'material-symbols',
              };
            },
          },
        }),
      ],
    }),
  });
}

init().catch((err: unknown) => {
  throw err;
});
