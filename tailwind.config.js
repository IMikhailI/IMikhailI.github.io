/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.vue"],
    theme: {
        fontFamily: {
            "theme-heading": ["'Exo 2'", "sans-serif"],
            "theme-content": ["Alegreya Sans", "sans-serif"],
        },
        extend: {
            colors: {
                "theme-primary": "rgb(9, 92, 96)",
                "theme-secondary": "rgb(9, 92, 96)",
                "theme-grayish-blue": "rgb(0, 0, 0)",
                "theme-dark-blue": "rgb(1, 45, 47)",
                "theme-dark-blue-tp": "rgba(255, 7, 205, 0.9)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
