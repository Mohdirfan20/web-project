
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
    document.querySelector("header").classList.add("sticky");
  } else {
    scrollBtn.style.display = "none";
    document.querySelector("header").classList.remove("sticky");
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const footer = document.querySelector("footer");
const year = new Date().getFullYear();
footer.innerHTML = `© ${year} Mohamed Irfan — Internship Portfolio`;
