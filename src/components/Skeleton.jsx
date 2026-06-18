import React from "react";

export const CardSkeleton = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 py-8">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-navy-800/20 border border-navy-600/30 rounded-xl p-6 space-y-4 animate-pulse"
        >
          <div className="w-12 h-12 bg-navy-600/40 rounded-lg"></div>
          <div className="h-6 bg-navy-600/40 rounded w-2/3"></div>
          <div className="space-y-2">
            <div className="h-4 bg-navy-600/30 rounded w-full"></div>
            <div className="h-4 bg-navy-600/30 rounded w-5/6"></div>
          </div>
          <div className="h-6 bg-navy-600/40 rounded w-1/3 pt-2"></div>
        </div>
      ))}
    </div>
  );
};

export const TextSkeleton = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 space-y-6 animate-pulse">
      <div className="h-8 bg-navy-600/30 rounded w-1/3 mx-auto"></div>
      <div className="space-y-3">
        <div className="h-4 bg-navy-600/20 rounded w-full"></div>
        <div className="h-4 bg-navy-600/20 rounded w-5/6 mx-auto"></div>
        <div className="h-4 bg-navy-600/20 rounded w-4/5 mx-auto"></div>
      </div>
    </div>
  );
};

export const FAQSeqSkeleton = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 space-y-4 animate-pulse">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="border-b border-gray-200/50 py-4 space-y-2">
          <div className="h-5 bg-gray-200/60 rounded w-3/4"></div>
          <div className="h-4 bg-gray-100/60 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export const FormSkeleton = () => {
  return (
    <div className="w-full max-w-lg mx-auto px-4 py-8 bg-navy-800/20 border border-navy-600/30 rounded-2xl p-6 space-y-6 animate-pulse">
      <div className="h-6 bg-navy-600/40 rounded w-1/3"></div>
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-navy-600/30 rounded w-1/4"></div>
            <div className="h-10 bg-navy-600/20 rounded w-full"></div>
          </div>
        ))}
        <div className="h-12 bg-amber-500/30 rounded-full w-full pt-4"></div>
      </div>
    </div>
  );
};
