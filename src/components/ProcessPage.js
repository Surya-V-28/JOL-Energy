import React from "react";

const BatteryRecyclingProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Battery Collection",
      description:
        "Implementing a robust collection network through partnerships and strategically located drop-off points.",
      icon: "🗑️",
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
    <div className="flex flex-col mt-8 items-center py-12 justify-center space-y-8" id="process">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Heading with underline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black uppercase">Our Process</h1>
          <div className="flex justify-center mt-1">
            <div className="w-32 border-b-4 border-[#fdcb0a]"></div>
          </div>
        </div>
      </div>

      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center space-x-6">
          {/* Step Number and Icon */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-[#fdcb0a] text-white rounded-full text-3xl">
              {step.icon}
            </div>
            {index < steps.length - 1 && (
              <div className="h-10 w-1 bg-gray-300"></div>
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
