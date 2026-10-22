const farms = [
  {
    name: 'Galigudde',
    meaning: '“Windy hills”',
    text: 'Where most of our coffee comes from. About an hour from Chikmagalur, bordering the Bhadra Wildlife Sanctuary.',
  },
  {
    name: 'Kalavese',
    meaning: '“Village of boulders”',
    text: 'Mostly Robusta, with a small block of Arabica, about 6 km from Galigudde.',
  },
  {
    name: 'Dinnekere',
    meaning: 'The first farm',
    text: 'A fully organic coffee farm, closer to the city. The first farm the family started.',
  },
]

export default function Home() {
  return (
    <>
      <section className="intro">
        <h1>Hippla Estate</h1>
        <p className="lede">
          A family coffee estate at the foothills of the Chandradrona range, near the
          Bhadra River in Chikmagalur, Karnataka.
        </p>
        <p>
          Established in 1916 by Huliyappa Gowda, Hippla has stayed in the family for
          five generations. It is run today by Nesara HD and Raghi Hippla. We grow
          coffee, areca nut and pepper.
        </p>
      </section>

      <section>
        <h2>Our farms</h2>
        <ul className="farms">
          {farms.map((f) => (
            <li key={f.name}>
              <h3>{f.name}</h3>
              <span className="meaning">{f.meaning}</span>
              <p>{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>The village</h2>
        <p>
          Hippla is also the name of our village, deep in the valley under Chandradrona
          Parvatha. Families lived and farmed there for generations: paddy in
          the low fields, coffee and pepper under the forest, and a school whose foundation
          stone reads 1916.
        </p>
        <p>
          The valley is now part of the Bhadra Tiger Reserve. In the early 2000s the 79
          families of Hippla left their homes and were resettled at M.C. Halli and at
          Kelagur, near Handi, carrying the bricks and timber of their houses out of the
          forest. A stream in the reserve, the Hiplahalla, still carries the village’s name.
        </p>
      </section>
    </>
  )
}
