// components/ErrorDisplay.jsx
import React from 'react';

const ErrorDisplay = ({ message, onRetry }) => {
  // Different error icons based on error type
  const getErrorIcon = () => {
    if (message.includes("network") || message.includes("fetch")) {
      return "🌐";
    } else if (message.includes("not found")) {
      return "🔍";
    } else if (message.includes("rate limit") || message.includes("too many")) {
      return "⏳";
    } else if (message.includes("Invalid") || message.includes("special characters")) {
      return "❌";
    } else {
      return "⚠️";
    }
  };

  return (
    <div className="bg-red-500/10 backdrop-blur-md border border-red-500/20 rounded-2xl p-8 text-center">
      <div className="text-5xl mb-4 animate-bounce">
        {getErrorIcon()}
      </div>
      <h3 className="text-xl font-bold text-red-400 mb-2">
        {message.includes("not found") ? "City Not Found" : "Oops! Something went wrong"}
      </h3>
      <p className="text-gray-300 mb-6">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-full transition-all border border-red-500/30"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorDisplay;