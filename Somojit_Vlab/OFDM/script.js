// Define the simulation parameters
const simulationParams = {
    numSubcarriers: 16, // Number of subcarriers
    subcarrierSpacing: 10, // Spacing between subcarriers in pixels
    subcarrierWidth: 40, // Width of each subcarrier in pixels
    animationSpeed: 50, // Speed of the animation in milliseconds
  };
  
  // Get a reference to the simulation container element
  const simulationContainer = document.getElementById("simulation");
  
  // Create an array to hold the subcarrier elements
  let subcarriers = [];
  
  // Function to start the simulation
  function startSimulation() {
    // Clear any existing subcarriers
    subcarriers.forEach(subcarrier => simulationContainer.removeChild(subcarrier));
  
    // Create the subcarriers
    for (let i = 0; i < simulationParams.numSubcarriers; i++) {
      const subcarrier = document.createElement("div");
      subcarrier.classList.add("subcarrier");
      subcarrier.style.left = `${i * simulationParams.subcarrierSpacing}px`;
      subcarrier.style.width = `${simulationParams.subcarrierWidth}px`;
      simulationContainer.appendChild(subcarrier);
      subcarriers.push(subcarrier);
    }
  
    // Start the animation
    animateSubcarriers();
  }
  
  // Function to stop the simulation
  function stopSimulation() {
    // Stop the animation
    clearInterval(animationInterval);
  
    // Clear any existing subcarriers
    subcarriers.forEach(subcarrier => simulationContainer.removeChild(subcarrier));
    subcarriers = [];
  }
  
  // Function to animate the subcarriers
  function animateSubcarriers() {
    let currentPhase = 0;
  
    // Define the animation function
    const animate = () => {
      // Update the phase of the subcarriers
      currentPhase += 0.1;
      const subcarrierPhases = [];
      for (let i = 0; i < simulationParams.numSubcarriers; i++) {
        const phase = 2 * Math.PI * i * currentPhase / simulationParams.numSubcarriers;
        subcarrierPhases.push(phase);
      }
  
      // Update the position of the subcarriers based on their phases
     
      subcarriers.forEach((subcarrier, i) => {
        const phase = subcarrierPhases[i];
        const offset = Math.sin(phase) * 50;
        subcarrier.style.height = `${100 + offset}%`;
      });
    };

    // Start the animation loop
    const animationInterval = setInterval(animate, simulationParams.animationSpeed);
    }        