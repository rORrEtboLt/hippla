export default function Contact() {
  return (
    <>
      <section className="intro">
        <h1>Contact</h1>
        <dl className="contact">
          <dt>Email</dt>
          <dd>
            <a href="mailto:nesara@hippla.in">nesara@hippla.in</a>
          </dd>
          <dt>Instagram</dt>
          <dd>
            <a href="https://www.instagram.com/hipplafarms/" target="_blank" rel="noreferrer">
              @hipplafarms
            </a>
          </dd>
          <dt>Where</dt>
          <dd>Chikmagalur, Karnataka, India</dd>
        </dl>
      </section>

      <section>
        <h2>From the farm</h2>
        <iframe
          className="instagram"
          src="https://www.instagram.com/hipplafarms/embed/"
          title="Hippla on Instagram"
          loading="lazy"
        />
      </section>
    </>
  )
}
