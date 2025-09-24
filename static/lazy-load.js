// Lazy loading and performance optimization for images
class ImageLoader {
    constructor() {
        this.imageObserver = null;
        this.loadedCount = 0;
        this.totalImages = 0;
        this.init();
    }

    init() {
        // Count total images
        this.totalImages = document.querySelectorAll('img[data-src]').length;
        
        // Set up intersection observer for lazy loading
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                        this.imageObserver.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '50px 0px', // Start loading 50px before image comes into view
                threshold: 0.1
            });

            // Observe all images with data-src
            document.querySelectorAll('img[data-src]').forEach(img => {
                this.imageObserver.observe(img);
            });
        } else {
            // Fallback for older browsers - load all images immediately
            document.querySelectorAll('img[data-src]').forEach(img => {
                this.loadImage(img);
            });
        }
    }

    loadImage(img) {
        const src = img.getAttribute('data-src');
        const alt = img.getAttribute('data-alt') || '';
        
        // Show loading placeholder
        img.style.display = 'none';
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'image-loading';
        loadingDiv.textContent = 'Loading...';
        img.parentNode.insertBefore(loadingDiv, img);

        // Create new image element for preloading
        const newImg = new Image();
        
        newImg.onload = () => {
            // Image loaded successfully
            img.src = src;
            img.alt = alt;
            img.setAttribute('data-loaded', 'true');
            img.style.display = 'block';
            loadingDiv.remove();
            this.loadedCount++;
            this.updateProgress();
        };

        newImg.onerror = () => {
            // Image failed to load
            loadingDiv.textContent = 'Failed to load';
            loadingDiv.style.color = '#ff6b6b';
            this.loadedCount++;
            this.updateProgress();
        };

        // Start loading
        newImg.src = src;
    }

    updateProgress() {
        if (this.loadedCount === this.totalImages) {
            console.log('All images loaded!');
            // You could add a completion callback here if needed
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageLoader();
});

// Utility function to convert existing images to lazy loading
function convertToLazyLoading() {
    document.querySelectorAll('img[src]').forEach(img => {
        const src = img.src;
        const alt = img.alt;
        
        // Store original src in data-src
        img.setAttribute('data-src', src);
        img.setAttribute('data-alt', alt);
        img.setAttribute('data-loaded', 'false');
        
        // Remove src to prevent immediate loading
        img.removeAttribute('src');
        img.removeAttribute('alt');
    });
}
