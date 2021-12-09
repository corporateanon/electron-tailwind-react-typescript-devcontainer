const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

console.log({ tailwindcss, autoprefixer });

module.exports = {
    plugins: [tailwindcss, autoprefixer],
};
