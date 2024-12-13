const services = [
  {
    id: "service1",
    header: "Architectural VR",
    body: "Step into the future of design with immersive walkthroughs, allowing architects and clients to explore projects before a single brick is laid.",
  },
  {
    id: "service2",
    header: "Biological Research VR",
    body: "Visualize the microscopic world in stunning 3D environments, aiding researchers in groundbreaking discoveries.",
  },
  {
    id: "service3",
    header: "Custom VR Spaces",
    body: "Tailored VR solutions for unique challenges, enabling industries to rethink workflows and enhance productivity.",
  },
];

services.forEach((service) => {
  const el = document.getElementById(service.id);
  let imagePath = "";
  if (el) {
    if (service.id === "service1") imagePath = "./img/arch.png";
    if (service.id === "service2") imagePath = "./img/biology.png";
    if (service.id === "service3") imagePath = "./img/custom.png";
    el.style.display = "none";
    el.querySelector("img").src = imagePath;
    el.querySelector("h1").innerHTML = service.header;
    el.querySelector("p").innerHTML = service.body;
  }
});

function selectID(selectedID) {
  for (const { id } of services) {
    const el = document.getElementById(id);
    if (el) {
      if (id == selectedID) el.style.display = "block";
      else el.style.display = "none";
    }
  }
}

selectID(services[0].id);

const triggers = document.querySelectorAll(".service-item");

triggers.forEach((el, index) => {
  el.onclick = () => selectID("service" + (index + 1));
  el.querySelector("h6").innerHTML = services[index].header;
});
