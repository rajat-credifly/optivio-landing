import React, { useState } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Use environment variable for API URL, fallback to localhost for development
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
  
  // Check if we're in GitHub Pages environment (no backend available)
  const isGitHubPages = window.location.hostname.includes('github.io');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      if (isGitHubPages) {
        // GitHub Pages demo mode - simulate success
        console.log('Demo mode: Email would be sent to rajat@credifly.co:', email);
        setIsSubmitted(true);
        setEmail('');
        // Auto-close modal after 3 seconds
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
        }, 3000);
        return;
      }

      // Send email to rajat@credifly.co
      const response = await fetch(`${API_URL}/api/submit-demo-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        // Auto-close modal after 3 seconds
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit request');
      }
    } catch (err) {
      setError('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        {!isSubmitted ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Request a Demo</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">
              Enter your email address and we'll get back to you shortly to schedule a demo of Optivio.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600">
              {isGitHubPages 
                ? "This is a demo. In production, your email would be sent to our team."
                : "We've received your demo request and will get back to you shortly."
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
