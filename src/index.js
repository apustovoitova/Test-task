import "normalize.css";
import "./styles/main.scss";

const scrollToTopButton = document.getElementById("button-top");
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
