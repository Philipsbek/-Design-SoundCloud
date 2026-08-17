// ------------------------------------------------------------
// Generated content + stock imagery for the SoundCloud-style
// Discover web app. Images use picsum.photos (real stock photos)
// with fixed seeds so every build is deterministic.
// ------------------------------------------------------------

const img = (seed, w, h = w) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
export const art = (seed, size = 300) => img(seed, size, size);

// Genre tiles — "Trending by genre"
export const genres = [
  { name: 'House',       seed: 'g-house',   tint: '#5b3fd6' },
  { name: 'Hip-hop',     seed: 'g-hiphop',  tint: '#d64f2a' },
  { name: 'Techno',      seed: 'g-techno',  tint: '#2a7dd6' },
  { name: 'Pop',         seed: 'g-pop',     tint: '#d62a8f' },
  { name: 'R&B & Soul',  seed: 'g-rnb',     tint: '#8f2ad6' },
  { name: 'Ambient',     seed: 'g-ambient', tint: '#2ad6a1' },
  { name: 'Indie',       seed: 'g-indie',   tint: '#d6a12a' },
  { name: 'Electronic',  seed: 'g-elec',    tint: '#2ad6d6' },
];

// Chart / track shelves
export const charts = [
  { title: 'Neon Rainfall',    artist: 'Aurora Vale',   plays: '1.2M', seed: 't-neon' },
  { title: 'Concrete Bloom',   artist: 'The Low Ends',  plays: '2.4M', seed: 't-concrete' },
  { title: 'Paper Lanterns',   artist: 'Kaia Sol',      plays: '842K', seed: 't-paper' },
  { title: 'Midnight Signal',  artist: 'Nova Reyes',    plays: '968K', seed: 't-midnight' },
  { title: 'Velvet Static',    artist: 'Odessa Kane',   plays: '2.0M', seed: 't-velvet' },
  { title: 'Slow Tide',        artist: 'Marisol',       plays: '1.9M', seed: 't-tide' },
  { title: 'Glass Cities',     artist: 'Emil Fyre',     plays: '511K', seed: 't-glass' },
  { title: 'Amber Hours',      artist: 'Juno Park',     plays: '1.1M', seed: 't-amber' },
];

export const newHot = [
  { title: 'Static Gardens',   artist: 'Vesper Lane',   plays: '327K', seed: 'n-static' },
  { title: 'Northbound',       artist: 'The Palewaves', plays: '760K', seed: 'n-north' },
  { title: 'Ceiling Lights',   artist: 'Sable & Co.',   plays: '445K', seed: 'n-ceiling' },
  { title: 'Coastal Signal',   artist: 'Wren Adler',    plays: '1.3M', seed: 'n-coastal' },
  { title: 'Dust & Gold',      artist: 'Lior Vance',    plays: '289K', seed: 'n-dust' },
  { title: 'Half Light',       artist: 'Mika Brenner',  plays: '612K', seed: 'n-half' },
  { title: 'Riverrun',         artist: 'Cassian',       plays: '904K', seed: 'n-river' },
  { title: 'Low Orbit',        artist: 'Selah Moon',    plays: '1.5M', seed: 'n-orbit' },
];

// Artists to watch — circular avatars
export const artists = [
  { name: 'Aurora Vale',   followers: '312K', seed: 'a-aurora' },
  { name: 'The Low Ends',  followers: '1.1M', seed: 'a-lowends' },
  { name: 'Kaia Sol',      followers: '208K', seed: 'a-kaia' },
  { name: 'Nova Reyes',    followers: '540K', seed: 'a-nova' },
  { name: 'Odessa Kane',   followers: '876K', seed: 'a-odessa' },
  { name: 'Juno Park',     followers: '431K', seed: 'a-juno' },
  { name: 'Vesper Lane',   followers: '190K', seed: 'a-vesper' },
  { name: 'Wren Adler',    followers: '655K', seed: 'a-wren' },
];

// Curated playlists
export const playlists = [
  { title: 'Deep Focus Flow',   by: 'SoundCloud',        tracks: '58', seed: 'p-focus' },
  { title: 'After Hours',       by: 'Nightshift Radio',  tracks: '40', seed: 'p-after' },
  { title: 'Sunrise Sessions',  by: 'Marisol',           tracks: '72', seed: 'p-sunrise' },
  { title: 'Warehouse Weekly',  by: 'The Low Ends',      tracks: '33', seed: 'p-warehouse' },
  { title: 'Golden Hour',       by: 'Juno Park',         tracks: '61', seed: 'p-golden' },
  { title: 'Static & Signal',   by: 'Vesper Lane',       tracks: '27', seed: 'p-signal' },
];

// The track the play bar boots up with
export const nowPlaying = charts[0];
