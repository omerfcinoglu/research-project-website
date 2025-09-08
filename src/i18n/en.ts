export const enTexts = {
  site: {
    name: "Research Project Showcase",
    description:
      "A clean, portfolio-ready website to present an academic research project.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Project", href: "/project" },
    { label: "Team", href: "/team" },
    { label: "Video Submission", href: "/videoRequest" },
    { label: "Publications", href: "/publication" },
    { label: "Gallery", href: "/gallery" },
    { label: "Gallery - 2", href: "/gallery2" },
  ],
  home: {
    project_title: "Research Project Showcase",
    project_coordinator: "Project Coordinator: Dr. Jane Doe",
    project_school: "University Research Lab",
  },
  projectPage: {
    title: "Project Details",
    sections: {
      dataCollection: {
        title: "Data Collection from Various Intersections",
        p: "We aim to collect video data from diverse urban intersections using aerial platforms where permitted. The goal is to create a high-quality dataset to support reliable models for traffic safety analysis.",
      },
      detection: {
        title: "Vehicle & Pedestrian Detection System",
        p1: "After labeling representative classes, we benchmark multiple object detection backbones and choose the best-performing model for real-time detection.",
        classesTitle: "Classes",
        classes: [
          "Pedestrian",
          "Bicycle",
          "Scooter",
          "Motorcycle",
          "Car",
          "Van",
          "Bus",
          "Truck",
          "Trailer",
          "Emergency Vehicle",
        ],
      },
      trajectories: {
        title: "Trajectory Analysis & Surrogate Safety Measures",
        p: "We extract trajectories per class, analyze conflict points and compute surrogate safety measures to estimate risk without crashes.",
      },
      filter: {
        title: "Filtering Model",
        p: "A lightweight classifier filters out low-relevance events to keep risk estimation focused and robust.",
      },
      risk: {
        title: "Risk Class Identification",
        p: "Selected events are evaluated considering geometry and speed contexts to assign a risk class per user type.",
      },
    },
  },
};
