# The Midnight Observatory

A build-free, single-page astronomy experience for GitHub Pages. Open `index.html` directly in a browser, or use VS Code Live Server.

## Files

- `index.html` — semantic page structure, observatory scene, four exploration sections, and reusable information dialog.
- `style.css` — responsive visual system, CSS/SVG celestial illustrations, animation, and reduced-motion styles.
- `script.js` — information-panel data, planet and night-sky interactions, constellation SVG rendering, navigation menu, and active-section state.

The site uses no frameworks, backend, remote images, or external dependencies. The illustrations are intentionally local CSS/SVG artwork, so the page works offline and on GitHub Pages.

## Planet imagery

Realistic local planetary texture maps are stored in `assets/`. The set includes Earth, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune. Planet maps are sourced from public NASA/Wikimedia and Solar System Scope texture collections and are used only as locally hosted static illustrations.

The observatory and Night Sky views use local photographic assets. The Sun, Moon, and Milky Way also use local texture or image assets. All imagery is kept inside `assets/` so the site remains static and suitable for GitHub Pages.

## Image sources

- Planet, Moon, Sun, and Milky Way textures are NASA/Solar System Scope/Wikimedia astronomy assets stored locally for static use.
- The Milky Way section identifies the displayed galaxy as an artist's impression.

## Milky Way artwork

`assets/barred-spiral-galaxy.png` is NASA's "Barred Spiral Galaxy (Front View, Blue)" illustration (December 19, 2022). It is used as an artistic NASA visualization, not a photograph of the Milky Way.

## Interactions

- Choose a destination from the observatory scene or header navigation.
- Select the Moon, stars, planets, Sun, or Milky Way marker to open an accessible information panel.
- Select Orion, Cassiopeia, or Ursa Major to redraw its star diagram and explanation.
- Close a panel with its close button, by clicking the backdrop, or with Escape.
- Use the menu button on narrow screens.

Astronomical descriptions and facts are concise educational content. The homepage and planetarium are artistic arrangements rather than live sky maps or scale models.
