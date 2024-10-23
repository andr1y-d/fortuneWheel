const drumItems = [
    { id: 1, value: "iPhone" },
    { id: 2, value: "iPhone" },
    { id: 3, value: "iPhone" },
    { id: 4, value: "iPhone" },
    { id: 5, value: "iPhone" },
    { id: 6, value: "iPhone" },
    { id: 7, value: "iPhone" },
    { id: 8, value: "iPhone" },
  ];
  
  function createWheel(items) {
    const wheel = document.getElementById("wheel");
    
    items.forEach((item, index) => {
      const segment = document.createElement("div");
      segment.classList.add("segment");
      segment.innerHTML = `<span>${item.value}</span>`;
      wheel.appendChild(segment);
    });
  }
  
  function spinWheel() {
    const wheel = document.getElementById("wheel");
    const randomDegree = Math.floor(Math.random() * 360) + 2800;
    wheel.style.transition = "transform 5s ease-out";
    wheel.style.transform = `rotate(${randomDegree}deg)`;
  
    setTimeout(() => {
      const finalDegree = randomDegree % 360;
      const selectedSegment = Math.floor((360 - finalDegree) / (360 / drumItems.length));
      alert(`You won: ${drumItems[selectedSegment].value}`);
    }, 5000);
  }
  
  createWheel(drumItems);
  
  document.getElementById("spin-btn").addEventListener("click", spinWheel);
  