const astronomy = {
  moon: { kicker: 'Night Sky / Earth’s companion', title: 'The Moon', description: 'Our natural satellite is a rocky world whose changing phases are caused by the angle between the Sun, Earth, and Moon.', fact: 'The Moon is slowly moving away from Earth — about 3.8 centimetres each year.', visual: 'moon-visual' },
  sirius: { kicker: 'Night Sky / Bright star', title: 'Sirius', description: 'Sirius is the brightest star in Earth’s night sky. It belongs to the constellation Canis Major, the “greater dog”.', fact: 'Sirius is actually a binary system: a bright star and a faint white dwarf orbit one another.', visual: 'star-visual' },
  polaris: { kicker: 'Night Sky / A steady guide', title: 'Polaris', description: 'Polaris is the North Star, positioned very close to the north celestial pole. It appears nearly fixed while the sky seems to turn around it.', fact: 'Polaris is a pulsating supergiant star and is much larger and brighter than our Sun.', visual: 'star-visual' },
  sun: { kicker: 'Solar System / Our star', title: 'The Sun', description: 'The Sun is a star made mostly of hydrogen and helium. Its light and heat power almost every familiar process on Earth.', fact: 'More than one million Earths could fit inside the Sun by volume.', visual: 'system-visual' },
  mercury: { kicker: 'Solar System / Terrestrial planet', title: 'Mercury', description: 'The smallest planet and the closest to the Sun, Mercury is a cratered world of extreme temperatures.', fact: 'A day on Mercury lasts 176 Earth days — longer than its 88-day year.', visual: 'planet-visual', color: '#a39b90' },
  venus: { kicker: 'Solar System / Terrestrial planet', title: 'Venus', description: 'Venus is wrapped in thick clouds and has the hottest surface of any planet in our solar system.', fact: 'Venus rotates backward compared with most planets, so the Sun would rise in the west.', visual: 'planet-visual', color: '#d1a069' },
  earth: { kicker: 'Solar System / Terrestrial planet', title: 'Earth', description: 'Our ocean-rich planet is the only world known to host life, with a protective atmosphere and liquid water on its surface.', fact: 'Earth’s atmosphere is mostly nitrogen; oxygen makes up about one fifth.', visual: 'planet-visual', color: '#346b91' },
  mars: { kicker: 'Solar System / Terrestrial planet', title: 'Mars', description: 'Mars is a cold desert world marked by iron-rich dust, ancient valleys, and the largest volcano in the solar system.', fact: 'Olympus Mons rises nearly 22 kilometres above the Martian surface.', visual: 'planet-visual', color: '#b75f49' },
  jupiter: { kicker: 'Solar System / Gas giant', title: 'Jupiter', description: 'The largest planet is a turbulent ball of gas, famous for striped clouds and a long-lived storm called the Great Red Spot.', fact: 'Jupiter has at least 95 known moons, including the volcanic Io and ocean world Europa.', visual: 'planet-visual', color: '#c08b68' },
  saturn: { kicker: 'Solar System / Gas giant', title: 'Saturn', description: 'The sixth planet from the Sun is surrounded by a vast, bright system of icy rings.', fact: 'Saturn’s average density is lower than water — it would float in a bathtub large enough to hold it.', visual: 'saturn-visual', color: '#b9976b' },
  uranus: { kicker: 'Solar System / Ice giant', title: 'Uranus', description: 'Uranus is a pale blue ice giant with a faint ring system and an unusual sideways rotation.', fact: 'Its axis is tilted about 98 degrees, likely because of a collision long ago.', visual: 'planet-visual', color: '#8db9bd' },
  neptune: { kicker: 'Solar System / Ice giant', title: 'Neptune', description: 'The distant blue ice giant is a world of deep atmosphere and the fastest winds measured on any planet.', fact: 'Neptune takes about 165 Earth years to complete one orbit around the Sun.', visual: 'planet-visual', color: '#3d6c9b' },
  galaxy: { kicker: 'Milky Way / Our place in the galaxy', title: 'Our place in the galaxy', description: 'The Solar System is part of the Milky Way, about 26,000 light-years from its centre in a quieter region of a spiral arm.', fact: 'The Milky Way contains hundreds of billions of stars, and its disk is roughly 100,000 light-years across.', visual: 'galaxy-visual' }
};

const panel = document.querySelector('#info-panel');
const openPanel = (key) => {
  const data = astronomy[key];
  if (!data) return;
  document.querySelector('#panel-kicker').textContent = data.kicker;
  document.querySelector('#panel-title').textContent = data.title;
  document.querySelector('#panel-description').textContent = data.description;
  document.querySelector('#panel-fact').textContent = data.fact;
  document.querySelector('#sirius-second-fact').hidden = key !== 'sirius';
  const visual = document.querySelector('#panel-visual');
  visual.className = `panel-visual ${data.visual}`;
  const planetImages = {
    mercury: 'assets/mercury.jpg',
    venus: 'assets/venus.jpg',
    earth: 'assets/earth.jpg',
    mars: 'assets/mars.jpg',
    jupiter: 'assets/jupiter.jpg',
    saturn: 'assets/saturn-transparent.png',
    uranus: 'assets/uranus.jpg',
    neptune: 'assets/neptune.jpg',
    sun: 'assets/sun.jpg',
    moon: 'assets/moon.jpg'
  };
  if (planetImages[key]) visual.style.setProperty('--planet-image', `url("${planetImages[key]}")`);
  else visual.style.removeProperty('--planet-image');
  if (data.color) visual.style.setProperty('--planet', data.color);
  panel.showModal();
};

document.querySelectorAll('[data-panel]').forEach((item) => item.addEventListener('click', () => openPanel(item.dataset.panel)));
document.querySelector('.panel-close').addEventListener('click', () => panel.close());
panel.addEventListener('click', (event) => { if (event.target === panel) panel.close(); });

const constellations = {
  orion: {
    region: 'The hunter', title: 'Orion', description: 'Look for three evenly spaced stars in a short line: Orion’s Belt. From there, the bright red shoulder and blue-white foot make the shape easy to recognize.', fact: 'In Greek myth, Orion was a giant hunter. The myth is a cultural story, not an explanation for the stars’ physical relationship.',
    points: [[195,55],[125,105],[265,115],[175,195],[210,205],[245,195],[145,290],[285,280]], lines: [[0,1],[0,2],[1,3],[2,5],[3,4],[4,5],[3,6],[5,7],[6,7]]
  },
  cassiopeia: {
    region: 'The queen', title: 'Cassiopeia', description: 'Search for five bright stars making a distinctive W or M shape, depending on how the constellation is turned in the season.', fact: 'Cassiopeia is named for a queen in Greek mythology, while the stars themselves are at very different distances from Earth.',
    points: [[70,175],[145,95],[220,175],[300,88],[380,165]], lines: [[0,1],[1,2],[2,3],[3,4]]
  },
  ursa: {
    region: 'The great bear', title: 'Ursa Major', description: 'Its most famous part is the Big Dipper: a bowl with a curved handle. Follow the two outer bowl stars to find Polaris.', fact: 'The Big Dipper is an asterism — a recognizable pattern, not a constellation by itself.',
    points: [[95,130],[175,120],[225,155],[310,150],[355,220],[275,235],[200,205],[145,170]], lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[2,6]]
  }
};
const svg = document.querySelector('#constellation-svg');
const drawConstellation = (key) => {
  const data = constellations[key];
  document.querySelector('#constellation-region').textContent = data.region;
  document.querySelector('#constellation-name').textContent = data.title;
  document.querySelector('#constellation-description').textContent = data.description;
  document.querySelector('#constellation-fact').textContent = data.fact;
  const lines = data.lines.map(([a, b]) => `<line x1="${data.points[a][0]}" y1="${data.points[a][1]}" x2="${data.points[b][0]}" y2="${data.points[b][1]}"></line>`).join('');
  const stars = data.points.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i === 0 ? 5.5 : (i % 3 === 0 ? 4.5 : i % 2 === 0 ? 3.5 : 2.8)}"></circle>`).join('');
  svg.querySelector('.constellation-lines').innerHTML = lines;
  svg.querySelector('.constellation-stars').innerHTML = stars;
};
document.querySelectorAll('[data-constellation]').forEach((tab) => tab.addEventListener('click', () => {
  document.querySelectorAll('[data-constellation]').forEach((button) => button.setAttribute('aria-selected', String(button === tab)));
  svg.setAttribute('aria-label', `${tab.textContent} constellation diagram`);
  drawConstellation(tab.dataset.constellation);
}));
drawConstellation('orion');

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-header nav');
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('open', !open); });
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a');
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`)); }), { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => observer.observe(section));
