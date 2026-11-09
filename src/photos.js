// Photos of Hippla village, from video shot in the valley around 2002.
// Files live in src/assets/story/.
const files = import.meta.glob('./assets/story/*.jpg', { eager: true, import: 'default' })
const src = (n) => files[`./assets/story/hippla-${n}.jpg`]

export const slides = [
  { src: src('045'), alt: 'The peak of Chandradrona above the valley' },
  { src: src('013'), alt: 'Paddy fields in the valley, with hills behind' },
  { src: src('001'), alt: 'A tiled-roof house in Hippla' },
  { src: src('009'), alt: 'Cattle grazing in a harvested field by the forest' },
  { src: src('015'), alt: 'An areca garden below the forested hills' },
  { src: src('044'), alt: 'A fenced field under a clouded sky' },
  { src: src('024'), alt: 'Coffee cherries drying in the sun' },
  { src: src('033'), alt: 'Pepper vines climbing a shade tree' },
  { src: src('065'), alt: 'A stream running over rocks' },
  { src: src('035'), alt: 'Forest and hills under clouds' },
  { src: src('055'), alt: 'Fields and forest at the foot of the hills' },
]
