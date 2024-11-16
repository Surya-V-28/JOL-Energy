import React from "react";

const BatteryRecyclingProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Battery Collection",
      description:
        "Implementing a robust collection network through partnerships and strategically located drop-off points.",
      icon: "🗑️", // Replace with actual image or SVG
    },
    {
      id: 2,
      title: "Pre-Processing",
      description:
        "Sorting batteries by chemistry, size, and condition to ensure safe and efficient handling.",
      icon: "♻️",
    },
    {
      id: 3,
      title: "Discharging",
      description:
        "Safely discharging remaining battery energy using our controlled processes.",
      icon: "⚡",
    },
    {
      id: 4,
      title: "Mechanical Processing",
      description:
        "Dismantling batteries to separate valuable components like electrodes, casings, and electrolytes.",
      icon: "🔧",
    },
    {
      id: 5,
      title: "Hydrometallurgical Processing",
      description:
        "Utilizing a proprietary, environmentally friendly process to recover high-purity battery metals (cobalt, lithium, nickel) from separated materials.",
      icon: "⚙️",
    },
    {
      id: 6,
      title: "Quality Control",
      description:
        "Stringent quality checks at every stage to ensure recovered materials meet industry standards.",
      icon: "✔️",
    },
  ];

  return (
    <div className="flex flex-col mt-2 items-center justify-center space-y-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex space-x-4 items-start">
          {/* Step Number and Icon */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full text-lg">
              {step.id}
            </div>
            {index < steps.length - 1 && (
              <div className="h-16 w-1 bg-gray-300"></div>
            )}
          </div>

          {/* Step Content */}
          <div>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BatteryRecyclingProcess;
