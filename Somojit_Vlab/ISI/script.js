// function transmit() {
//     const input = document.getElementById("input").value;
//     let output = "";
    
//     // Add some delay to simulate inter-symbol interference
//     let delay = 0;
//     for (let i = 0; i < input.length; i++) {
//       setTimeout(() => {
//         output += input[i];
//         document.getElementById("output").innerText = output;
//       }, delay);
//       delay += 1000; // Increase the delay for each symbol
//     }
//   }
  
function transmit() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    //let out = "";//changed
    
    // Remove any existing symbols
    output.innerHTML = "";
    
    // Calculate the symbol width and spacing
    const symbolWidth = 30;
    const spacing = 10;
    
    // Calculate the total animation duration
    const duration = input.length * 1000;
    
    // Add each symbol to the output container
    let delay = 0;


    for (let i = 0; i < input.length; i++) {
      //out += input[i];//changed
      //document.getElementById("output").innerText = out;//changed
      const symbol = document.createElement("span");
      symbol.classList.add("symbol");
      symbol.innerText = input[i];
      symbol.style.left = (i * (symbolWidth + spacing)) + "px";
      output.appendChild(symbol);
      
      // Add a random amount of noise to simulate interference
      const noise = Math.floor(Math.random() * 10) - 5;
      
      // Animate the symbol with a delay to simulate inter-symbol interference
      setTimeout(() => {
        symbol.style.opacity = 1;
        symbol.style.top = noise + "px";
      }, delay);
      
      delay += 1000; // Increase the delay for each symbol
    }
    
    // Clear the output after the animation has finished
    setTimeout(() => {
      output.innerHTML = "";
    }, duration);


  }
  