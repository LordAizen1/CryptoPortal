import React from 'react';

export default function About() {
  return (
    <div className="bg-[#13151a] text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold gradient-text mb-6">About CryptoPortal</h1>
        <p className="text-lg text-[rgb(224,204,250)] leading-relaxed mb-6">
          Welcome to <span className="font-semibold">CryptoPortal</span>, a one-stop platform for all your cryptography learning needs.
          Our mission is to provide students at IIIT Delhi and beyond with access to resources, tools, and a community dedicated to the study of cryptography.
        </p>
        <p className="text-lg text-[rgb(224,204,250)] leading-relaxed mb-6">
          Cryptography is the backbone of secure communication in the modern world. At CryptoPortal, we strive to make this field 
          accessible by curating the best resources and fostering an engaging learning environment. From beginner-friendly materials 
          to advanced research insights, we have something for everyone.
        </p>
        <h2 className="text-2xl font-semibold gradient-text mb-4">Our Goals</h2>
        <ul className="list-disc list-inside text-[rgb(224,204,250)] mb-6">
          <li>Provide high-quality learning resources on cryptography.</li>
          <li>Foster a community of like-minded learners and experts.</li>
          <li>Host events, workshops, and discussions to deepen understanding.</li>
        </ul>
        <h2 className="text-2xl font-semibold gradient-text mb-4">Why Choose CryptoPortal?</h2>
        <p className="text-lg text-[rgb(224,204,250)] leading-relaxed mb-12">
          CryptoPortal is built with students in mind. We understand the challenges of learning complex topics like cryptography,
          so we've created an intuitive and supportive platform to help you succeed. Whether you're a beginner or an advanced 
          learner, CryptoPortal has the resources you need to excel.
        </p>

        {/* A Word from Faculty */}
        <div className="bg-[#23262d] p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
          {/* Left Section */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold gradient-text">A Word from Faculty</h3>
          </div>
          {/* Right Section */}
          <div className="md:w-2/3 text-[rgb(224,204,250)]">
            <p className="italic mb-2">
              "Cryptography is not just a subject—it's a way of thinking that secures our digital world. At IIIT Delhi, we emphasize not only the 
              theoretical foundations but also their practical applications. Dive deep, stay curious, and always keep learning!"
            </p>
            <p className="font-semibold text-white">- Prof. Ravi Anand</p>
          </div>
        </div>
      </div>
    </div>
  );
}
