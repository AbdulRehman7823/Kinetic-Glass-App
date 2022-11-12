/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          base:'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          invert: 'var(--color-text-inverted)',
        },
      },
      backgroundColor:{
        skin:{
          fill:'var(--color-fill)',
           'button-accent':'var(--color-button-accent)',
           'button-accent-hover':'var(--color-button-accent-hover)',
           'button-muted':'var(--color-button-muted)',

        }
      },
      gradientColorStops:{
        skin:{
          hue:'var(--color-fill)'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]

}
