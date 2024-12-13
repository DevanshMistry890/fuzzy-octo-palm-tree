const services = [
  {
    id: "service1",
    header: "Architectural VR",
    body: "Step into the future of design with immersive walkthroughs, allowing architects and clients to explore projects before a single brick is laid.",
    image: {
      src: "./img/arch.png",
      srcset:
        "./img/arch-400w.avif 400w, ./img/arch-600w.avif 600w, ./img/arch-800w.avif 800w, ./img/arch-1000w.avif 1000w, ./img/arch-1200w.avif 1200w, ./img/arch-1600w.avif 1600w, ./img/arch-2000w.avif 2000w",
      sizes:
        "(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px",
    },
  },
  {
    id: "service2",
    header: "Biological Research VR",
    body: "Visualize the microscopic world in stunning 3D environments, aiding researchers in groundbreaking discoveries.",
    image: {
      src: "./img/biology.png",
      srcset:
        "./img/biology-400w.avif 400w, ./img/biology-600w.avif 600w, ./img/biology-800w.avif 800w, ./img/biology-1000w.avif 1000w, ./img/biology-1200w.avif 1200w, ./img/biology-1600w.avif 1600w, ./img/biology-2000w.avif 2000w",
      sizes:
        "(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px",
    },
  },
  {
    id: "service3",
    header: "Custom VR Spaces",
    body: "Tailored VR solutions for unique challenges, enabling industries to rethink workflows and enhance productivity.",
    image: {
      src: "./img/custom.png",
      srcset:
        "./img/custom-400w.avif 400w, ./img/custom-600w.avif 600w, ./img/custom-800w.avif 800w, ./img/custom-1000w.avif 1000w, ./img/custom-1200w.avif 1200w, ./img/custom-1600w.avif 1600w, ./img/custom-2000w.avif 2000w",
      sizes:
        "(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px",
    },
  },
];

services.forEach((service) => {
  const el = document.getElementById(service.id);
  if (el) {
    el.style.display = "none";
    const img = el.querySelector("img");
    img.src = service.image.src;
    img.srcset = service.image.srcset;
    img.sizes = service.image.sizes;
    el.querySelector("h1").innerHTML = service.header;
    el.querySelector("p").innerHTML = service.body;
  }
});

function selectID(selectedID) {
  services.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = id === selectedID ? "block" : "none";
    }
  });
}

selectID(services[0].id);

const triggers = document.querySelectorAll(".service-item");

triggers.forEach((el, index) => {
  el.onclick = () => selectID("service" + (index + 1));
  el.querySelector("h6").innerHTML = services[index].header;
});
