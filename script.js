// Interactive Typewriter effect to display actual coding logic inside the Hero component
const jsonCode = `{
  "agent": "GoTech_AI_Consultant",
  "status": "active",
  "capabilities": [
    "RAG_Knowledge_Retrieval",
    "Workflow_Automation",
    "Predictive_Intelligence"
  ],
  "operations": {
    "analyze_business_need": true,
    "deploy_custom_software": "optimized"
  }
}`;

let index = 0;
function typeCode() {
    if (index < jsonCode.length) {
        document.getElementById("typewriter-code").textContent += jsonCode.charAt(index);
        index++;
        setTimeout(typeCode, 30);
    }
}

// Start typing script when the window parses completely
window.onload = typeCode;

// Magnetic Interaction Physics for the Call To Action Button
const primaryBtn = document.querySelector('.magnetic-btn');

if(window.innerWidth > 768) { // Only run tracking for desktop/mouse cursors
    document.addEventListener('mousemove', (e) => {
        const bound = primaryBtn.getBoundingClientRect();
        const btnX = bound.left + bound.width / 2;
        const btnY = bound.top + bound.height / 2;
        
        // Calculate the vector delta from cursor positions
        const distanceX = e.clientX - btnX;
        const distanceY = e.clientY - btnY;
        const distance = Math.hypot(distanceX, distanceY);
        
        if (distance < 80) {
            // Magnetic pull calculation
            primaryBtn.style.transform = `translate(${distanceX * 0.3}px, ${distanceY * 0.3}px)`;
            primaryBtn.style.boxShadow = `0 10px 30px rgba(59, 130, 246, 0.5)`;
        } else {
            // Snap gently back to identity matrix positions
            primaryBtn.style.transform = `translate(0px, 0px)`;
            primaryBtn.style.boxShadow = `0 4px 20px rgba(59, 130, 246, 0.3)`;
        }
    });
}

// Interactive Dynamic Background Border Spotlight Tracking for Bento Grid Cards
const bentoCards = document.querySelectorAll('.bento-card');

bentoCards.forEach(card => {
    const glow = card.querySelector('.card-glow');
    
    card.addEventListener('mousemove', (e) => {
        // Find local container dimensions relative to the scrolling viewport viewport boundaries
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Dynamically translate the radial glow mask background positioning context matching cursor
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
    });
});


