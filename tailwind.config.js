/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryred": '#8F040B;',
        "primarygreen": '#43D200;',
        "primarypurple": '#C200D2;',
        "white": '#ffffff;',
        "dark": '#212121;',
      },
    }
  }
}

