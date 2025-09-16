# Nocny Portier Cocktail Bar Website

A modern, sophisticated website for the Nocny Portier cocktail bar featuring glassmorphism, neumorphism, and liquid glass gradient effects.

## Features

- **Glassmorphism Design**: Translucent elements with backdrop blur effects
- **Neumorphism Text**: Soft, embossed text effects with subtle shadows
- **Liquid Glass Gradient**: Animated background gradients that flow like liquid
- **Image Carousel**: Cinematic background image slideshow
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Interactive hover effects and transitions
- **Modern Typography**: Playfair Display and Inter font combination

## Design Elements

### Glassmorphism
- Semi-transparent backgrounds with blur effects
- Subtle borders and shadows
- Layered depth with backdrop filters

### Neumorphism
- Soft, embossed text effects
- Inset and outset shadow combinations
- Tactile, button-like appearance

### Liquid Glass Gradient
- Animated background gradients
- Flowing color transitions
- Floating glass elements

## File Structure

```
website-project/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # Image assets (placeholder)
└── README.md               # This file
```

## How to Use

1. Open `index.html` in a modern web browser
2. The website will automatically start with the image carousel
3. Navigate using the top navigation menu
4. Hover over elements to see interactive effects

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Customization

### Adding Your Own Images
Replace the Unsplash URLs in `index.html` with your own image paths:

```html
<div class="carousel-slide active" style="background-image: url('path/to/your/image.jpg')"></div>
```

### Modifying Colors
Update the CSS variables in `style.css` to change the color scheme:

```css
:root {
    --primary-color: #ffffff;
    --secondary-color: rgba(255, 255, 255, 0.1);
    --accent-color: rgba(0, 255, 255, 0.1);
}
```

### Adjusting Animation Speed
Modify the carousel timing in `script.js`:

```javascript
this.slideInterval = setInterval(() => {
    this.nextSlide();
}, 5000); // Change to desired milliseconds
```

## Performance Notes

- Images are loaded from Unsplash CDN for optimal performance
- CSS animations use GPU acceleration
- JavaScript is optimized for smooth 60fps animations
- Lazy loading implemented for better performance

## Credits

- Images: Unsplash (https://unsplash.com)
- Fonts: Google Fonts (Playfair Display, Inter)
- Icons: Custom CSS effects

## License

This project is open source and available under the MIT License.
