// Theme toggle
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Load projects dynamically
const projects = [
  {
    title: "Responsive Website",
    description: "Built using HTML, CSS, and JavaScript."
  },
  {
    title: "Portfolio Design",
    description: "A clean and minimal personal site."
  },
  {
    title: "Task App",
    description: "Simple task tracker built with vanilla JS."
  }
];

const container = document.getElementById('projectsContainer');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
  container.appendChild(card);
});
