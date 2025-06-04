// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section, .research-card, .team-member, .publication, .software-card').forEach(el => {
    observer.observe(el);
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    .section, .research-card, .team-member, .publication, .software-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .research-card, .team-member {
        transition-delay: 0.1s;
    }
    
    .research-card:nth-child(2), .team-member:nth-child(2) {
        transition-delay: 0.2s;
    }
    
    .research-card:nth-child(3), .team-member:nth-child(3) {
        transition-delay: 0.3s;
    }
    
    .research-card:nth-child(4), .team-member:nth-child(4) {
        transition-delay: 0.4s;
    }
`;
document.head.appendChild(style);

// Typing Animation for Hero Title
const heroTitle = document.querySelector('.hero-title');
const text = heroTitle.textContent;
heroTitle.textContent = '';
let index = 0;

function typeWriter() {
    if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Publication Filter (if you add filters later)
function filterPublications(category) {
    const publications = document.querySelectorAll('.publication');
    publications.forEach(pub => {
        if (category === 'all' || pub.dataset.category === category) {
            pub.style.display = 'block';
        } else {
            pub.style.display = 'none';
        }
    });
}

// Dynamic Year in Footer
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Create DNA-AI-Tumor Evolution Animation
function createDNAtoAItoTumorEvolution() {
    const container = document.querySelector('.evolutionary-ai-animation');
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Phase 1: DNA Double Helix (Left side - Foundation)
    createDNAHelix(container);
    
    // Phase 2: Neural Network Transformer (Center - AI Processing)
    createNeuralTransformer(container);
    
    // Phase 3: Tumor Evolution Tree (Right side - Cancer Progression)
    createTumorEvolutionTree(container);
    
    // Phase 4: Data Flow connecting all phases
    createEvolutionaryDataFlow(container);
    
    // Phase 5: Gene/Cell labels and annotations
    createBioAnnotations(container);
}

function createDNAHelix(container) {
    // Double helix structure
    for (let i = 0; i < 2; i++) {
        const helix = document.createElement('div');
        helix.className = `dna-helix helix-${i}`;
        helix.style.animationDelay = `${i * 0.5}s`;
        container.appendChild(helix);
    }
    
    // DNA base pairs
    for (let i = 0; i < 8; i++) {
        const basePair = document.createElement('div');
        basePair.className = 'dna-base-pair';
        basePair.style.top = `${20 + i * 8}%`;
        basePair.style.left = '15%';
        basePair.style.animationDelay = `${i * 0.2}s`;
        container.appendChild(basePair);
    }
    
    // Genetic mutation points
    const mutations = [
        { x: '12%', y: '25%', type: 'oncogene' },
        { x: '18%', y: '45%', type: 'tumor-suppressor' },
        { x: '14%', y: '65%', type: 'dna-repair' }
    ];
    
    mutations.forEach((mut, index) => {
        const mutation = document.createElement('div');
        mutation.className = `genetic-mutation ${mut.type}`;
        mutation.style.left = mut.x;
        mutation.style.top = mut.y;
        mutation.style.animationDelay = `${2 + index * 0.5}s`;
        container.appendChild(mutation);
    });
}

function createNeuralTransformer(container) {
    // Central transformer architecture
    const transformer = document.createElement('div');
    transformer.className = 'transformer-core';
    container.appendChild(transformer);
    
    // Attention heads (multi-head attention)
    for (let i = 0; i < 6; i++) {
        const head = document.createElement('div');
        head.className = `attention-head head-${i}`;
        head.style.animationDelay = `${1 + i * 0.3}s`;
        container.appendChild(head);
    }
    
    // Neural network layers
    const layers = [
        { neurons: 4, y: '20%', type: 'input' },
        { neurons: 6, y: '35%', type: 'hidden' },
        { neurons: 8, y: '50%', type: 'attention' },
        { neurons: 6, y: '65%', type: 'hidden' },
        { neurons: 3, y: '80%', type: 'output' }
    ];
    
    layers.forEach((layer, layerIndex) => {
        for (let i = 0; i < layer.neurons; i++) {
            const neuron = document.createElement('div');
            neuron.className = `neural-node ${layer.type}`;
            neuron.style.left = `${45 + i * 2}%`;
            neuron.style.top = layer.y;
            neuron.style.animationDelay = `${layerIndex * 0.2 + i * 0.1}s`;
            container.appendChild(neuron);
        }
    });
    
    // Data embeddings flowing through
    for (let i = 0; i < 12; i++) {
        const embedding = document.createElement('div');
        embedding.className = 'data-embedding';
        embedding.style.left = `${40 + Math.random() * 20}%`;
        embedding.style.top = `${15 + Math.random() * 70}%`;
        embedding.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(embedding);
    }
}

function createTumorEvolutionTree(container) {
    // Tumor phylogenetic tree structure
    const treeStructure = [
        // Trunk (normal cell)
        { x: '82%', y: '85%', width: '2px', height: '15%', type: 'trunk' },
        
        // Primary branches (initial mutations)
        { x: '82%', y: '70%', width: '8%', height: '2px', type: 'primary' },
        { x: '74%', y: '70%', width: '8%', height: '2px', type: 'primary' },
        
        // Secondary branches (subclones)
        { x: '75%', y: '55%', width: '2px', height: '15%', type: 'secondary' },
        { x: '85%', y: '55%', width: '2px', height: '15%', type: 'secondary' },
        { x: '89%', y: '55%', width: '2px', height: '15%', type: 'secondary' },
        
        // Tertiary branches (metastases)
        { x: '75%', y: '40%', width: '6%', height: '2px', type: 'metastasis' },
        { x: '84%', y: '40%', width: '6%', height: '2px', type: 'metastasis' },
        { x: '87%', y: '25%', width: '6%', height: '2px', type: 'metastasis' }
    ];
    
    treeStructure.forEach((branch, index) => {
        const element = document.createElement('div');
        element.className = `tumor-branch ${branch.type}`;
        element.style.left = branch.x;
        element.style.top = branch.y;
        element.style.width = branch.width;
        element.style.height = branch.height;
        element.style.animationDelay = `${3 + index * 0.2}s`;
        container.appendChild(element);
    });
    
    // Tumor cell populations
    const tumorCells = [
        { x: '82%', y: '85%', type: 'normal', label: 'Normal' },
        { x: '75%', y: '55%', type: 'primary', label: 'Primary' },
        { x: '85%', y: '55%', type: 'resistant', label: 'Resistant' },
        { x: '89%', y: '55%', type: 'metastatic', label: 'Metastatic' },
        { x: '78%', y: '25%', type: 'evolved', label: 'Evolved' },
        { x: '90%', y: '25%', type: 'aggressive', label: 'Aggressive' }
    ];
    
    tumorCells.forEach((cell, index) => {
        const cellNode = document.createElement('div');
        cellNode.className = `tumor-cell ${cell.type}`;
        cellNode.style.left = cell.x;
        cellNode.style.top = cell.y;
        cellNode.style.animationDelay = `${4 + index * 0.3}s`;
        cellNode.title = cell.label;
        container.appendChild(cellNode);
    });
}

function createEvolutionaryDataFlow(container) {
    // Data flow arrows connecting DNA -> AI -> Tumor
    const flowPaths = [
        { from: { x: '25%', y: '50%' }, to: { x: '40%', y: '50%' }, type: 'dna-to-ai' },
        { from: { x: '60%', y: '50%' }, to: { x: '75%', y: '55%' }, type: 'ai-to-tumor' }
    ];
    
    flowPaths.forEach((path, index) => {
        const arrow = document.createElement('div');
        arrow.className = `evolution-arrow ${path.type}`;
        arrow.style.left = path.from.x;
        arrow.style.top = path.from.y;
        arrow.style.animationDelay = `${5 + index * 0.5}s`;
        container.appendChild(arrow);
    });
    
    // Information particles flowing through the system
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'info-particle';
        particle.style.left = `${10 + Math.random() * 80}%`;
        particle.style.top = `${20 + Math.random() * 60}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        container.appendChild(particle);
    }
}

function createBioAnnotations(container) {
    // Scientific labels and annotations
    const annotations = [
        { text: 'DNA', x: '8%', y: '15%', type: 'phase-label' },
        { text: 'Transformer AI', x: '42%', y: '15%', type: 'phase-label' },
        { text: 'Tumor Evolution', x: '75%', y: '15%', type: 'phase-label' },
        
        { text: 'KRAS', x: '12%', y: '28%', type: 'gene-label' },
        { text: 'TP53', x: '16%', y: '48%', type: 'gene-label' },
        { text: 'BRCA1', x: '14%', y: '68%', type: 'gene-label' },
        
        { text: 'Attention', x: '47%', y: '35%', type: 'ai-label' },
        { text: 'Embedding', x: '45%', y: '55%', type: 'ai-label' },
        
        { text: 'Resistance', x: '87%', y: '48%', type: 'tumor-label' },
        { text: 'Metastasis', x: '85%', y: '28%', type: 'tumor-label' }
    ];
    
    annotations.forEach((ann, index) => {
        const label = document.createElement('div');
        label.className = `bio-annotation ${ann.type}`;
        label.textContent = ann.text;
        label.style.left = ann.x;
        label.style.top = ann.y;
        label.style.animationDelay = `${6 + index * 0.2}s`;
        container.appendChild(label);
    });
    
    // Evolutionary timeline
    const timeline = document.createElement('div');
    timeline.className = 'evolution-timeline';
    timeline.innerHTML = '← Genomics &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AI Processing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cancer Evolution →';
    container.appendChild(timeline);
}

createDNAtoAItoTumorEvolution();