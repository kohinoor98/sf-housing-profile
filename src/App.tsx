import './styles/global.css'
import './App.css'

const BASE = import.meta.env.BASE_URL

export default function App() {
  return (
    <main className="page">
      <h1 className="title">Kohinoor Chatterjee — Rental Application</h1>

      <figure className="photo">
        <img
          src={BASE + 'assets/irongrid-team.png'}
          alt="Kohinoor (center) with the IronGrid team at 611 Florida St, San Francisco"
        />
      </figure>

      <section className="section">
        <h2>Background</h2>
        <p>
          I've been living in San Francisco since early 2026 and am looking for
          a long-term apartment in the Mission, ideally near 2823 18th Street.
          I work in person at 611 Florida St, which is a short walk away — this
          is the neighborhood I want to be in.
        </p>
        <p>
          I'm a quiet tenant. I don't have kids or pets, I don't smoke, and I
          don't throw parties. In my free time I enjoy solving Rubik's cubes,
          reading, cooking, going on hikes, and writing open-source code. I'm
          happy to provide landlord references, proof of income, or any other
          information you need.
        </p>
      </section>

      <section className="section">
        <h2>Work</h2>
        <figure className="headshot">
          <img
            src={BASE + 'assets/profile-photo.jpg'}
            alt="Kohinoor Chatterjee"
          />
        </figure>
        <p className="resume-link">
          Resume (<a href="https://www.linkedin.com/in/kohinoor-chatterjee/" target="_blank" rel="noopener noreferrer">LinkedIn</a>)
        </p>
        <ul>
          <li>
            Founding Engineer at{' '}
            <a href="https://www.getirongrid.com/" target="_blank" rel="noopener noreferrer">IronGrid</a>{' '}
            (Y Combinator S25), a well-funded startup doing insurance for frontier
            hardware companies. First hire — working on AI, full-stack, and data
            engineering.
          </li>
          <li>
            Previously: Senior Software Engineer at Ford Motor Company (1.5 years,
            Advanced EV / Skunk Works), plus roles at Neuralink, Intel, and
            Amazon Web Services.
          </li>
        </ul>
        <p className="sub-heading">Education</p>
        <ul>
          <li>University of Southern California — M.S. in Computer Science</li>
          <li>Vishwakarma Institute of Technology — B.E. in Computer Engineering</li>
        </ul>
      </section>
    </main>
  )
}
