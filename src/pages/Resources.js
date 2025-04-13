import React from 'react';

const resources = [
  {
    name: "AJ Lightfoot Adult Day Care Center",
    type: "Adult Day Care",
    description: "Provides therapeutic day services for adults 55+ with cognitive impairments"
  },
  {
    name: "988 Suicide and Crisis Lifeline",
    type: "Counseling/Mental Health",
    description: "24/7 support line for mental health crises and suicide prevention"
  },
  {
    name: "Food Gatherers",
    type: "Emergency Services",
    description: "Food assistance program with multiple distribution sites"
  },
  {
    name: "Silver Club Memory Programs",
    type: "Health Services - Memory Care",
    description: "Therapeutic day care for older adults with memory loss"
  },
  {
    name: "Washtenaw Community College Emeritus Scholarship",
    type: "Education",
    description: "Tuition coverage for county residents 65+"
  }
];

function ResourcePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Community Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {resource.name}
            </h2>
            <p className="text-sm font-semibold text-blue-600 mb-2">
              {resource.type}
            </p>
            <p className="text-gray-600 text-base">
              {resource.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
