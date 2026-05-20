// Unistay landing — root app
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#e11d2e",
  "palette": "warm-red",
  "heroLayout": "split",
  "headlineStyle": "italic-serif",
  "density": "normal",
  "showBrandwave": true
}/*EDITMODE-END*/;

const PALETTES = {
  "warm-red": { brand: "#b21323", deep: "#7c0a14", soft: "#d22a3a", tint: "#fbecee", tint2: "#f6dade" },
  "deep-burgundy": { brand: "#9b1c2e", deep: "#6e1322", soft: "#c33b4d", tint: "#f6ebed", tint2: "#ecd5d9" },
  "sunset": { brand: "#e85d2f", deep: "#b8431c", soft: "#f48557", tint: "#fdf1eb", tint2: "#fbe1d3" },
  "forest": { brand: "#1f7a4c", deep: "#155a36", soft: "#3a9b6c", tint: "#ecf5f0", tint2: "#d8ebe1" },
  "midnight": { brand: "#3056c7", deep: "#1f3a96", soft: "#5a7ce0", tint: "#eaf0fb", tint2: "#d5dff5" },
};

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply palette + density to root
  React.useEffect(() => {
    const p = PALETTES[tweaks.palette] || PALETTES["warm-red"];
    const root = document.documentElement;
    root.style.setProperty("--brand", p.brand);
    root.style.setProperty("--brand-deep", p.deep);
    root.style.setProperty("--brand-soft", p.soft);
    root.style.setProperty("--brand-tint", p.tint);
    root.style.setProperty("--brand-tint-2", p.tint2);
    document.body.className =
      tweaks.density === "relaxed"
        ? "density-relaxed"
        : tweaks.density === "tight"
        ? "density-tight"
        : "";
  }, [tweaks.palette, tweaks.density]);

  return (
    <>
      <Hero />
      <Why />
      <DesignSection />
      <Rooms />
      <Facilities />
      <Peace />
      <Provides />
      <FAQ />
      <Contact />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Brand palette" />
        <TweakSelect
          label="Palette"
          value={tweaks.palette}
          options={["warm-red", "deep-burgundy", "sunset", "forest", "midnight"]}
          onChange={(v) => setTweak("palette", v)}
        />
        <TweakSection label="Layout density" />
        <TweakRadio
          label="Density"
          value={tweaks.density}
          options={["tight", "normal", "relaxed"]}
          onChange={(v) => setTweak("density", v)}
        />
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
