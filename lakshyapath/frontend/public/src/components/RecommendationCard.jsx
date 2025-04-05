import React from 'react';

const RecommendationCard = ({ career }) => {
  if (!career) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-4 border border-gray-200">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Suggested Career: {career.career_path}
      </h2>
      <div className="mb-2">
        <span className="font-semibold">Skills:</span>
        <ul className="list-disc list-inside text-gray-700">
          {career.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-semibold">Recommended Courses:</span>
        <ul className="list-disc list-inside text-gray-700">
          {career.courses.map((course, idx) => (
            <li key={idx}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecommendationCard;
