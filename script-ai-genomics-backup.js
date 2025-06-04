// BACKUP - AI/ML Genomics Animation Code
function createAIGenomicsAnimation() {
    const container = document.querySelector('.ai-genomics-animation');
    if (!container) return;

    // Create neural network nodes
    const nodePositions = [
        { x: 50, y: 100, size: 'large', delay: 0 },
        { x: 150, y: 50, size: 'normal', delay: 0.5 },
        { x: 250, y: 80, size: 'small', delay: 1 },
        { x: 350, y: 120, size: 'large', delay: 1.5 },
        { x: 200, y: 150, size: 'normal', delay: 2 },
        { x: 100, y: 200, size: 'small', delay: 2.5 },
        { x: 300, y: 200, size: 'normal', delay: 3 },
        { x: 180, y: 250, size: 'large', delay: 3.5 },
        { x: 80, y: 300, size: 'small', delay: 4 },
        { x: 320, y: 280, size: 'normal', delay: 4.5 }
    ];

    nodePositions.forEach(pos => {
        const node = document.createElement('div');
        node.className = `ai-node ${pos.size}`;
        node.style.left = `${pos.x}px`;
        node.style.top = `${pos.y}px`;
        node.style.animationDelay = `${pos.delay}s`;
        container.appendChild(node);
    });

    // Create connection lines between nodes
    const connections = [
        { from: nodePositions[0], to: nodePositions[1] },
        { from: nodePositions[1], to: nodePositions[2] },
        { from: nodePositions[2], to: nodePositions[3] },
        { from: nodePositions[4], to: nodePositions[5] },
        { from: nodePositions[5], to: nodePositions[6] },
        { from: nodePositions[7], to: nodePositions[8] },
        { from: nodePositions[8], to: nodePositions[9] }
    ];

    connections.forEach((conn, index) => {
        const line = document.createElement('div');
        line.className = 'ai-connection';
        
        const deltaX = conn.to.x - conn.from.x;
        const deltaY = conn.to.y - conn.from.y;
        const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
        
        line.style.width = `${length}px`;
        line.style.left = `${conn.from.x}px`;
        line.style.top = `${conn.from.y}px`;
        line.style.transformOrigin = '0 0';
        line.style.transform = `rotate(${angle}deg)`;
        line.style.animationDelay = `${index * 0.3}s`;
        
        container.appendChild(line);
    });

    // Create genetic sequence flowing through
    for (let i = 0; i < 3; i++) {
        const sequence = document.createElement('div');
        sequence.className = 'gene-sequence';
        sequence.style.top = `${150 + i * 60}px`;
        sequence.style.left = '125px';
        sequence.style.animationDelay = `${i * 1}s`;
        container.appendChild(sequence);
    }

    // Add floating genetic elements (A, T, G, C)
    const geneticBases = ['A', 'T', 'G', 'C'];
    for (let i = 0; i < 8; i++) {
        const base = document.createElement('div');
        base.textContent = geneticBases[i % 4];
        base.style.position = 'absolute';
        base.style.color = 'var(--primary-color)';
        base.style.fontSize = '14px';
        base.style.fontWeight = 'bold';
        base.style.left = `${Math.random() * 350 + 50}px`;
        base.style.top = `${Math.random() * 350 + 50}px`;
        base.style.opacity = '0.6';
        base.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite`;
        base.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(base);
    }
}