// src/App.tsx
import React from "react";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 shadow bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-indigo-600">Optivio</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#use-cases" className="hover:text-indigo-600">Use Cases</a>
          <a href="#integrations" className="hover:text-indigo-600">Integrations</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
          AI That Works Alongside Your Team
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Optivio joins your meetings, answers questions, and takes action—whether it’s updating Jira, Salesforce, or sending follow-ups.
        </p>
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 text-lg">
          Request a Demo
        </button>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Real-time Responses", desc: "Pull live updates from Jira, Salesforce, and internal systems during meetings." },
            { title: "Follow-ups Automated", desc: "Share notes, assign tasks, and update records after meetings automatically." },
            { title: "Extensible Platform", desc: "Easily adapt Optivio for recruitment, project management, sales, and more." },
          ].map((feature) => (
            <div key={feature.title} className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Project Management", desc: "Update tasks, boards, and workflows directly in Jira or Asana." },
            { title: "Sales Enablement", desc: "Sync meeting insights into Salesforce or HubSpot effortlessly." },
            { title: "Recruitment", desc: "Update hiring scorecards and recruitment pipelines automatically." },
          ].map((useCase) => (
            <div key={useCase.title} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Integrations</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {["Jira", "Salesforce", "Slack", "Asana", "HubSpot", "Notion"].map((tool) => (
            <div key={tool} className="px-6 py-3 bg-gray-50 rounded-lg shadow hover:shadow-md">
              {tool}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
            Request an Integration
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Meetings?</h2>
        <p className="text-gray-600 mb-8">Get in touch to schedule a demo and see Optivio in action.</p>
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 text-lg">
          Book a Demo
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-white text-center text-gray-500 border-t">
        © {new Date().getFullYear()} Optivio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
