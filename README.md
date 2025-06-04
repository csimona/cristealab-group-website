# Cristea Lab Research Group Website

A modern, professional website for the Cristea Lab at Dana-Farber Cancer Institute, showcasing computational cancer research.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Dynamic navigation, smooth scrolling, and hover effects
- **Content Sections**:
  - Hero section with animated DNA visualization
  - About section with lab statistics
  - Research areas with icon cards
  - Team members showcase
  - Publications list
  - Software/tools section
  - Contact information

## Structure

```
cristealab-group-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── images/            # Image assets directory
└── README.md          # This file
```

## Setup

1. Open `index.html` in a web browser to view the website
2. To serve locally with a development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

## Customization

### Adding Content

1. **Team Members**: Add new team member divs in the team-grid section
2. **Publications**: Add new article elements in the publications-list
3. **Research Areas**: Add new research-card divs in the research-grid
4. **Software**: Add new software-card divs in the software-grid

### Updating Information

- Replace placeholder text with actual content from CV
- Add real email addresses and phone numbers
- Update social media links
- Add actual publication links and DOIs

### Images

Place the following images in the `images/` directory:
- `simona-cristea.jpg` - Principal investigator photo
- `lab-photo.jpg` - Group photo
- Team member photos

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (Inter)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add a blog/news section
- Implement a CMS for easier content updates
- Add publication filtering by year/type
- Create individual project pages
- Add a photo gallery
- Implement contact form functionality