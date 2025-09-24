// Script to convert all images to lazy loading format
const fs = require('fs');
const path = require('path');

function convertImagesToLazy(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Convert img src to data-src for lazy loading
        content = content.replace(
            /<img\s+src="([^"]+)"\s+alt="([^"]+)"\s+style="([^"]+)"/g,
            '<div class="image-container">\n                    <img data-src="$1" data-alt="$2" style="$3"'
        );
        
        // Close the div tag
        content = content.replace(
            /<img data-src="([^"]+)" data-alt="([^"]+)" style="([^"]+)"/g,
            '<img data-src="$1" data-alt="$2" style="$3"'
        );
        
        // Add closing div after each img tag
        content = content.replace(
            /(<img data-src="[^"]+" data-alt="[^"]+" style="[^"]+"[^>]*>)/g,
            '$1\n                </div>'
        );
        
        fs.writeFileSync(filePath, content);
        console.log(`Converted ${filePath}`);
    } catch (error) {
        console.error(`Error converting ${filePath}:`, error.message);
    }
}

// Convert specific files
const filesToConvert = [
    'kenn.html',
    'otherimages.html',
    'group1.html'
];

filesToConvert.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        convertImagesToLazy(filePath);
    }
});

console.log('Conversion complete!');
