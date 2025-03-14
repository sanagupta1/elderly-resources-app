export default function Resources() {
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

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Community Resources</h1>
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div 
            key={index}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-600">{resource.name}</h2>
            <p className="text-gray-500 mb-2">{resource.type}</p>
            <p className="text-gray-700">{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
