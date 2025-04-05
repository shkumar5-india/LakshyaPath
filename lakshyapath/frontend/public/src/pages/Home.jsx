import React, { useState } from 'react';
import RecommendationCard from '../components/RecommendationCard';

function Home() {
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('http://localhost:8000/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interests: 'technology',
          education: '12th pass',
        }),
      });

      const data = await res.json();
      setCareer(data);
    } catch (error) {
      console.error("Error fetching recommendation:", error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        LakshyaPath Career Recommender
      </h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Get Career Recommendation
        </button>
      </form>

      {loading && <p className="text-gray-600">Loading recommendation...</p>}

      <RecommendationCard career={career} />
    </div>
  );
}

export default Home;
