// Coffees from Hippla Estate that roasters have released, with links to their pages.
const coffees = [
  {
    roaster: 'Beachville Coffee Roasters',
    city: 'Chennai',
    name: 'Hippla',
    details: 'Arabica · Washed · Light roast',
    notes: 'Bright fruity, pulpy, raisin, caramel',
    when: 'August 2024',
    links: [
      { label: 'Tasting record', href: 'https://nerlu.nihil.codes/coffees/2024-08-beachville-hippla/' },
      { label: 'Beachville', href: 'https://beachvillecoffee.com/' },
    ],
  },
  {
    roaster: 'Blue Tokai Coffee Roasters',
    city: 'New Delhi',
    name: 'Hippla Estate, partner farm',
    details: 'Arabica & Robusta · Galigudde, Kalavese, Dinnekere',
    notes: null,
    when: null,
    links: [
      { label: 'Hippla Estate on Blue Tokai', href: 'https://bluetokaicoffee.com/pages/hippla-estate' },
    ],
  },
]

export default function Gallery() {
  return (
    <>
      <section className="intro">
        <h1>Gallery</h1>
        <p className="lede">Coffees from Hippla, roasted by others.</p>
      </section>

      <ul className="coffees">
        {coffees.map((c) => (
          <li key={c.roaster}>
            <span className="roaster">
              {c.roaster} · {c.city}
            </span>
            <h3>{c.name}</h3>
            <p>{c.details}</p>
            {c.notes && <p className="notes">{c.notes}</p>}
            {c.when && <p className="when">{c.when}</p>}
            <div className="links">
              {c.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                  {l.label} ↗
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
