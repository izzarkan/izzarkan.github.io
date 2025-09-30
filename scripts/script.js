
const btn = document.getElementById('read-more-button');
const moreText = document.getElementById('more-text');

btn.addEventListener('click', () => {
moreText.classList.toggle('show');
btn.textContent = moreText.classList.contains('show') ? 'Read Less' : 'Read More';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();

        // Adjust this value to match your navbar height
        const navbarHeight = document.querySelector("nav").offsetHeight;

        // Scroll to element with offset
        window.scrollTo({
          top: target.offsetTop - navbarHeight,
          behavior: "smooth"
        });
      };
})});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - window.innerHeight / 2) {
      current = section.getAttribute("id");
    }
  });

  // Update the title based on current section
  switch (current) {
    case "about-me":
      document.title = "Izz - About Me";
      break;
    case "projects":
      document.title = "Izz - Projects";
      break;
    case "todo":
      document.title = "Izz - Todo List";
      break;
    case "contact":
      document.title = "Contact - My Site";
      break;
    default:
      document.title = "Izz - Home";
  }
});