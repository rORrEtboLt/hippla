import Slider from '../Slider.jsx'
import { slides } from '../photos.js'

export default function Home() {
  return (
    <>
      <Slider slides={slides} />
      <p className="slider-note">Photos of Hippla village before it was relocated.</p>

      <section className="intro">
        <h1 className="visually-hidden">Hippla Estate</h1>
        <p className="lede">
          Coffee, areca nut and pepper from the foothills of the Chandradrona range,
          Chikmagalur.
        </p>
        <p>A family-run estate near the Bhadra River.</p>
      </section>

      <section>
        <h2>The name</h2>
        <p>
          The estate is named after Hippla village, in the valley below Chandradrona
          Parvatha. The valley is now part of the Bhadra Tiger Reserve, and its families
          were resettled in the early 2000s.
        </p>
      </section>
    </>
  )
}
