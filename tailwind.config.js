/** @type {import('tailwindcss').Config} */

/*
 * ---------------------------------------------------------------------------
 * TOKENS DE MARCA — SOLICAR OFICINA
 * ---------------------------------------------------------------------------
 * Todos los colores de la sección de Mobiliario de Oficina están centralizados
 * aquí. Cuando llegue la guía de marca definitiva de Solicar Didácticos S.L.
 * basta con cambiar los valores de este archivo: ningún componente hardcodea
 * un color hexadecimal.
 *
 *   primary   → azul corporativo Solicar (CTAs, enlaces activos, acentos)
 *               VALOR PROVISIONAL: #1B4F72
 *   graphite  → gris grafito, color de los bloques "oscuros" del patrón zebra,
 *               exclusivo de la sección Oficina (sustituye al verde bosque de
 *               la referencia de diseño).
 *               VALOR PROVISIONAL: #2B2F33
 *   sand      → gris muy claro de fondos alternos. #F4F4F2
 *
 * TODO: sustituir por los hex definitivos del manual de identidad de Solicar.
 * ---------------------------------------------------------------------------
 */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Azul corporativo Solicar
        primary: {
          DEFAULT: '#1B4F72',
          50: '#EEF4F9',
          100: '#D6E4EF',
          200: '#ACC8DE',
          300: '#7FA9CB',
          400: '#4A81AC',
          500: '#2A6392',
          600: '#1B4F72', // ← color base de marca
          700: '#173F5B',
          800: '#122F44',
          900: '#0C202E',
          950: '#07141D',
        },
        // Gris grafito — bloques oscuros de la sección Oficina
        graphite: {
          DEFAULT: '#2B2F33',
          50: '#F4F5F6',
          100: '#E4E6E8',
          200: '#C6CACE',
          300: '#9EA5AB',
          400: '#6E777E',
          500: '#4A5157',
          600: '#2B2F33', // ← color base de bloques oscuros
          700: '#232629',
          800: '#1A1D1F',
          900: '#121415',
        },
        // Fondo claro alterno
        sand: {
          DEFAULT: '#F4F4F2',
          dark: '#E8E8E4',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      letterSpacing: {
        wider: '.06em',
        widest: '.18em',
      },
      maxWidth: {
        content: '1360px',
      },
      transitionDuration: {
        250: '250ms',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp .45s ease-out both',
      },
    },
  },
  plugins: [],
};
