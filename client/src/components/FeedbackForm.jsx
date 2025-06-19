// client/src/components/FeedbackForm.jsx
import React, { useState } from 'react';
import { ScaleLoader } from 'react-spinners';

function FeedbackForm({ onSubmit, loading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput(''); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 text-lg text-gray-700 placeholder-gray-400 resize-y min-h-[150px]"
        placeholder="Ask for feedback or enter your response here..."
        rows={5}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md enabled:hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed text-lg flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <>
            <ScaleLoader color={"#fff"} height={20} width={3} radius={2} margin={2} />
            <span className="ml-3">Generating...</span>
          </>
        ) : (
          'Send'
        )}
      </button>
    </form>
  );
}

export default FeedbackForm;