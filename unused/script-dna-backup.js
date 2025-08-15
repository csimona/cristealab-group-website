// BACKUP - Original DNA Animation Code
// Create a more sophisticated DNA animation
function createDNAAnimation() {
    const dnaContainer = document.querySelector('.dna-animation');
    if (!dnaContainer) return;

    // Create DNA helix using CSS
    const dnaHelix = document.createElement('div');
    dnaHelix.className = 'dna-helix';
    
    for (let i = 0; i < 20; i++) {
        const pair = document.createElement('div');
        pair.className = 'dna-pair';
        pair.style.animationDelay = `${i * 0.1}s`;
        dnaHelix.appendChild(pair);
    }
    
    dnaContainer.appendChild(dnaHelix);
}

createDNAAnimation();

// Add DNA animation styles
const dnaStyles = document.createElement('style');
dnaStyles.textContent = `
    .dna-helix {
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        animation: rotate 20s linear infinite;
    }
    
    .dna-pair {
        position: absolute;
        width: 60%;
        height: 4px;
        background: linear-gradient(to right, 
            var(--primary-color) 0%, 
            var(--primary-color) 45%, 
            transparent 45%, 
            transparent 55%, 
            var(--primary-color) 55%, 
            var(--primary-color) 100%);
        left: 20%;
        top: 50%;
        transform-origin: center;
        animation: wave 2s ease-in-out infinite;
    }
    
    @keyframes rotate {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(360deg); }
    }
    
    @keyframes wave {
        0%, 100% { transform: rotateZ(0deg) scaleX(1); }
        50% { transform: rotateZ(180deg) scaleX(0.8); }
    }
`;
document.head.appendChild(dnaStyles);