const projectsData = {
  1: {
    title: "Project-Title",
    short_description: "A webpage design for a project",
    image: "image",
    team: "1 Developer (YouKwhan Kim)",
    role: "Prototyping, Designer, Reasearcher, coder",
    timeframe: "7 Weeks, Fall 2021",
    tools: "Figma, JavaScript",
    background: "01 BACKGROUND",
    outcome: "02 OUTCOME",
    reflection: "03 REFLECTION",
    overview: "",
    contribution: "",
    features: "",
    approach: "",
    learned:"",
  },
  2: {},
  3: {},
  4: {},
};

export const getProjectData = (projectId) => {
  return projectsData[projectId] || {};
};
