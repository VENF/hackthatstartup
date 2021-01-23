const links = document.getElementById("links");
const allLinks = links.getElementsByClassName("link");

for (const link of allLinks) {
  link.addEventListener("click", () => {
    const ant = document.getElementsByClassName("active");
    if(ant.length !== 0) {
        ant[0].classList.remove("active");
        link.classList.add("active");
    } else {
        link.classList.add("active");
    }
  });
}
