const tokens = require("./theme/tokens.json");

function mapColors(colors) {
  const out = {};
  for (const k in colors) {
    out[k.replace(/\s+/g, "-")] = colors[k];
  }
  return out;
}

module.exports = {
  content: ["./**/*.{js,jsx,ts,tsx,mdx}", "./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: mapColors(tokens.colors),
      spacing: Object.fromEntries(
        Object.entries(tokens.spacing).map(([k, v]) => [k, v]),
      ),
      borderRadius: Object.fromEntries(
        Object.entries(tokens.rounded).map(([k, v]) => [k, v]),
      ),
      fontFamily: { inter: tokens.typography.fontFamily.inter },
      fontSize: tokens.typography.fontSize,
    },
  },
  plugins: [require("nativewind/tailwind")],
};
