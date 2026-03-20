import './styles/global.css'
import './App.css'

const BASE = import.meta.env.BASE_URL

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <figure className="headshot">
          <img
            src={BASE + 'assets/profile-photo.jpg'}
            alt="Kohinoor Chatterjee"
          />
        </figure>
        <div className="hero-text">
          <h1 className="name">Kohinoor <span className="nickname">(KC)</span> Chatterjee</h1>
          <p className="subtitle">Housing Profile</p>
        </div>
      </header>

      <section className="about">
        <h2>About</h2>
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

      <section className="work">
        <h2>Work</h2>
        <div className="work-content">
          <div className="work-text">
            <ul>
              <li>
                Founding Engineer at{' '}
                <a href="https://www.getirongrid.com/" target="_blank" rel="noopener noreferrer">IronGrid</a>{' '}
                (Y Combinator S25), a well-funded startup doing insurance for
                frontier hardware companies. First hire — working on AI,
                full-stack, and data engineering.
              </li>
              <li>
                Previously: Senior Software Engineer at Ford Motor Company
                (1.5 years, Advanced EV / Skunk Works), plus roles at
                Neuralink, Intel, and Amazon Web Services.
              </li>
            </ul>
          </div>
          <figure className="team-photo">
            <img
              src={BASE + 'assets/irongrid-team.png'}
              alt="Kohinoor (center) with the IronGrid team at 611 Florida St, San Francisco"
            />
            <figcaption>With the IronGrid team at 611 Florida St</figcaption>
          </figure>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>University of Southern California — M.S. in Computer Science</li>
          <li>Vishwakarma Institute of Technology — B.E. in Computer Engineering</li>
        </ul>
        <p className="resume-link">
          Full resume on{' '}
          <a href="https://www.linkedin.com/in/kohinoor-chatterjee/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </section>

      <footer className="closing">
        <p>
          Thank you for taking the time to review my profile. I'd love to find
          a great home in the Mission — please don't hesitate to reach out with
          any questions.
        </p>
      </footer>
    </main>
  )
}
