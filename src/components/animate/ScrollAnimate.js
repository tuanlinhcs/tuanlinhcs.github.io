export function ScrollAnimate(my_element_id, animate_name) {
  const handleScroll = () => {
    const element = document.getElementById(my_element_id);
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > elementPosition) {
      element.classList.add(animate_name);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}
