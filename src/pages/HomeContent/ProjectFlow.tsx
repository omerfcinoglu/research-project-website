import React from "react";
import { Card } from "@heroui/react";
import { motion } from "framer-motion";

interface FlowStep {
  number: number;
  title: string;
  description: string;
}

const flowSteps: FlowStep[] = [
  {
    number: 1,
    title: "Video Data Collection",
    description: "Video samples are collected from different intersections using aerial or ground-level cameras."
  },
  {
    number: 2,
    title: "Object Detection Setup",
    description: "Traffic participants are labeled and basic detection models are tested for demo purposes."
  },
  {
    number: 3,
    title: "Trajectory & Safety Indicators",
    description: "User trajectories and potential conflicts are identified; surrogate indicators are estimated."
  },
  {
    number: 4,
    title: "Filtering Model",
    description: "Low-relevance events are filtered out to keep analysis focused and lightweight."
  },
  {
    number: 5,
    title: "Risk Classification",
    description: "Filtered events are grouped into simplified risk classes for presentation."
  }
];

const ProjectFlow: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="space-y-3 sm:space-y-4 lg:space-y-6"
      >
        <motion.h2
          variants={item}
          className="text-xl font-bold mb-4 text-center"
        >
          Project Workflow
        </motion.h2>

        {flowSteps.map((step, index) => (
          <motion.div key={step.number} className="relative" variants={item}>
            {/* Connector line */}
            {index < flowSteps.length - 1 && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-[100%] w-0.5 h-3 sm:h-4 bg-primary-500"
                initial={{ height: 0 }}
                animate={{ height: "1rem" }}
                transition={{ delay: 0.5 + index * 0.3, duration: 0.3 }}
              />
            )}

            {/* Step card */}
            <Card className="relative transform hover:scale-105 transition-transform duration-300 w-full">
              <div className="p-3 sm:p-4">
                <div className="flex items-start gap-3">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-primary-500 flex items-center justify-center mt-0.5">
                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Step content */}
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 text-black dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-black/80 dark:text-white/80">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectFlow;
