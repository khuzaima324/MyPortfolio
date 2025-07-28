import React, { useState, useEffect } from 'react';

function WelcomeModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowModal(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        style={{
            opacity: ''
        }}
    >
      <div className="bg-gray-400 text-black p-6 rounded-lg max-w-sm text-center shadow-xl">
        <h2 className="text-xl font-bold mb-2">Welcome!</h2>
        <p className="mb-4">
          This is my personal portfolio where I share my projects in web
          development and video editing.
          <br />
          There are still alot of errors and bugs you could find in this portfolio
          <br />
          Any Suggestion About This Portfolio will be really appriciated
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

export default WelcomeModal;
