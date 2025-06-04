# Animation Backup and Restore Instructions

## Current Animation: Evolutionary AI and Computational Biology

The main page now features a sophisticated evolutionary AI and computational biology animation that includes:
- **Phylogenetic tree structure** showing algorithm evolution
- **Evolution nodes** representing different AI algorithms (ScGPT, TiMEx, pathTiMEx, ModulOmics)
- **Computational particles** flowing through the system (data and algorithms)
- **Mutation indicators** showing evolutionary changes
- **Binary code streams** representing computational processes
- **Fitness landscape curves** showing optimization paths
- **Algorithm labels** (CNN, LSTM, GPT, BERT, VAE) floating around

## Backup Files Created

1. **script-dna-backup.js** - Contains the original DNA helix animation JavaScript code
2. **script-ai-genomics-backup.js** - Contains the neural network/genomics animation JavaScript code
3. **styles-dna-backup.css** - Contains the original DNA animation CSS styles

## How to Revert to Original DNA Animation

If you want to go back to the original DNA helix animation, follow these steps:

### Step 1: Update HTML
In `index.html`, change line 48:
```html
<!-- Current -->
<div class="ai-genomics-animation"></div>

<!-- Change back to -->
<div class="dna-animation"></div>
```

### Step 2: Update CSS
In `styles.css`, replace the AI Genomics Animation section (lines ~195-314) with:
```css
/* DNA Animation */
.dna-animation {
    width: 400px;
    height: 400px;
    position: relative;
}

.dna-animation::before,
.dna-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid var(--primary-color);
    border-radius: 50%;
    opacity: 0.3;
    animation: pulse 3s infinite;
}

.dna-animation::after {
    animation-delay: 1.5s;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0.3;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.1;
    }
    100% {
        transform: scale(1);
        opacity: 0.3;
    }
}
```

### Step 3: Update JavaScript
In `script.js`, replace the AI/ML Genomics Animation function with the content from `script-dna-backup.js`.

### Step 4: Update Responsive CSS
In the responsive section of `styles.css`, change:
```css
/* Current */
.ai-genomics-animation {
    width: 350px;
    height: 350px;
}

/* Change back to */
.dna-animation {
    width: 300px;
    height: 300px;
}
```

## Animation Features Comparison

### Original DNA Animation
- Simple DNA double helix visualization
- Rotating helical structure
- Blue color scheme
- Minimalist design

### AI/ML Genomics Animation (Previous)
- Neural network nodes with connections
- Genetic sequence flow visualization
- Floating DNA bases (A, T, G, C)
- Multiple animation layers
- Represents AI/ML analysis of genomic data

### Current Evolutionary AI Animation
- **Phylogenetic tree** showing algorithm evolution and relationships
- **Evolution nodes** representing your lab's actual algorithms (ScGPT, TiMEx, pathTiMEx, ModulOmics)
- **Computational particles** representing data and algorithm processing
- **Mutation indicators** showing evolutionary/optimization changes
- **Binary code streams** representing computational processes
- **Fitness landscapes** showing optimization paths
- **Modern AI labels** (CNN, LSTM, GPT, BERT, VAE)
- Most sophisticated and directly relevant to computational evolution research

## How to Switch Between Animations

### To Use AI/ML Genomics Animation:
1. Change HTML: `<div class="ai-genomics-animation"></div>`
2. Use CSS from the AI/ML Genomics backup
3. Use JavaScript from `script-ai-genomics-backup.js`

### To Use Current Evolutionary AI Animation:
- Already active - this is the current setup

### To Use Original DNA Animation:
- Follow the DNA restoration steps above

Choose the animation that best represents your lab's research focus!