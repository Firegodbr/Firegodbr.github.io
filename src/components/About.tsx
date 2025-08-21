export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
      
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
          <li><strong>Front-end:</strong> HTML5, CSS3, JavaScript, TypeScript, ReactJS</li>
          <li><strong>Back-end:</strong> Node.js (Express.js, NextJS), Python (Django, Flask, FastAPI), PHP (Laravel)</li>
          <li><strong>Databases:</strong> Microsoft SQL Server, MySQL, PostgreSQL, Oracle</li>
          <li><strong>DevOps & Tools:</strong> Git, Docker, CI/CD, TDD, Microsoft Server, Apache, Jira</li>
          <li><strong>Testing:</strong> Jest, PHPUnit</li>
          <li><strong>Cloud Platforms:</strong> AWS, Google Cloud, Azure</li>
          <li><strong>Other:</strong> AI Integration (Langchain, LlamaIndex), Browser Extensions, UML Diagrams, DevSecOps Concepts</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Education & Certifications</h3>
        <ul className="text-gray-700 space-y-1">
          <li><strong>AEC in Technical Computer Management</strong>, Institut Teccart — 2018–2019</li>
          <li><strong>Web Development (Full Stack)</strong>, Udemy — 2018</li>
          <li><strong>Network Systems</strong>, AVG IT — 2017</li>
          <li className="italic mt-4">Currently Pursuing:</li>
          <li>AWS Certified Cloud Practitioner – Amazon Web Services (2025)</li>
          <li>IBM Applied DevOps Engineering Professional Certificate in Coursera (2025)</li>
        </ul>
      </div>
    </section>
  );
}
