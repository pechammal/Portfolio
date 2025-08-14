import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Pechammal Vetrivel</h1>
        <p className="text-lg text-gray-600 mt-2">
          Full Stack Developer | AI Integrator 
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 text-base">
          I’m a results-driven cloud software engineer with years of experience in building
          scalable full-stack applications using MERN stack, Python, and Generative AI. I'm currently
          in the USA on an H-1B visa and available for immediate transfer.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Featured Project: AI Call Automation (Asiri.ai)
        </h2>
        <div className="bg-white p-4 shadow rounded-lg">
          <p className="text-gray-800 mb-2">
            Built a call-based assistant that integrates Twilio for outbound/inbound calls,
            OpenAI GPT for conversational logic, Whisper for speech-to-text transcription, and
            AWS S3 for audio file storage. Implemented with a Python Flask backend and React frontend.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Twilio, Whisper, OpenAI GPT integration</li>
            <li>Flask + Node backend, React + Next.js frontend</li>
            <li>Grafana dashboard for call metrics</li>
            <li>Secure S3 integration using Boto3</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>Python / Flask</span>
          <span>OpenAI / Whisper</span>
          <span>AWS S3 / Lambda</span>
          <span>MySQL / MongoDB</span>
          <span>Salesforce Apex</span>
          <span>REST APIs</span>
        </div>
      </section>

      <section>
  <h2 className="text-2xl font-semibold mb-4">Contact</h2>
  <p className="text-gray-700 text-base mb-2">
    📧 Email: pechammal@gmail.com
  </p>
  <p className="text-gray-700 text-base mb-4">
    📞 Phone: +1 508 834 3355
  </p>
  <a
    href="mailto:pechammal@gmail.com"
    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  >
    📩 Send Email
  </a>
  <a
    href="/resume.pdf"
    download
    className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mt-2 ml-2"
  >
    📄 Download Resume
  </a>
</section>
<div className="mt-6 flex gap-4">
  <a
    href="https://github.com/pechammal"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-black"
  >
    🔗 GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/pechammal"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
  >
    🔗 LinkedIn
  </a>
</div>
    </div>
  );
}
