/**
 * @fileoverview Navigation component for multi-page exercises
 */

/**
 * Exercise page configuration
 * @type {Object.<string, Array<{file: string, title: string}>>}
 */
export const exercisePages = {
    '01': [
        { file: '01-intro.html', title: 'What You Need' },
        { file: '01-breadboard.html', title: 'How a Breadboard Works' },
        { file: '01-place-led.html', title: 'Place the LED' },
        { file: '01-connect-power.html', title: 'Connect the Power' },
        { file: '01-add-resistor.html', title: 'Add the Resistor' },
        { file: '01-complete-circuit.html', title: 'Complete the Circuit' },
        { file: '01-write-code.html', title: 'Write the Code' },
        { file: '01-upload.html', title: 'Upload and Test' },
        { file: '01-interactive.html', title: 'Try It Yourself' },
        { file: '01-how-it-works.html', title: 'How It Works' }
    ]
};

/**
 * Get current page info from URL
 * @returns {{exercise: string, pageIndex: number, currentFile: string}}
 */
function getCurrentPageInfo() {
    const path = window.location.pathname;
    let filename = path.split('/').pop() || '';
    
    // Add .html extension if missing
    if (filename && !filename.includes('.html')) {
        filename = filename + '.html';
    }
    
    // Handle case where there's no filename
    if (!filename) {
        console.error('No filename found in path:', path);
        return { exercise: null, pageIndex: -1, currentFile: '' };
    }
    
    const exercise = filename.substring(0, 2); // '01', '02', etc.
    const pages = exercisePages[exercise] || [];
    const pageIndex = pages.findIndex(page => page.file === filename);
    
    console.log('Navigation debug:', { path, filename, exercise, pageIndex, pages });
    
    return { exercise, pageIndex, currentFile: filename };
}

/**
 * Create navigation HTML
 * @param {string} prevLink - Previous page URL or null
 * @param {string} nextLink - Next page URL or null
 * @param {number} currentStep - Current step number
 * @param {number} totalSteps - Total number of steps
 * @returns {string} Navigation HTML
 */
export function createNavigation(prevLink, nextLink, currentStep, totalSteps) {
    return `
        <div class="exercise-nav">
            ${prevLink ? 
                `<a href="${prevLink}" class="nav-button">← Previous</a>` : 
                `<a href="../index.html" class="nav-button">← Back to Menu</a>`
            }
            
            <div class="progress-indicator">
                <span class="step-count">Step ${currentStep} of ${totalSteps}</span>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(currentStep / totalSteps) * 100}%"></div>
                </div>
            </div>
            
            ${nextLink ? 
                `<a href="${nextLink}" class="nav-button">Next →</a>` : 
                `<a href="../index.html" class="nav-button">Complete! Back to Menu →</a>`
            }
        </div>
    `;
}

/**
 * Initialize navigation for current page
 */
export function initializeNavigation() {
    const { exercise, pageIndex, currentFile } = getCurrentPageInfo();
    const pages = exercisePages[exercise] || [];
    
    if (pageIndex === -1) {
        console.error('Current page not found in navigation configuration');
        return;
    }
    
    const prevLink = pageIndex > 0 ? pages[pageIndex - 1].file : null;
    const nextLink = pageIndex < pages.length - 1 ? pages[pageIndex + 1].file : null;
    const currentStep = pageIndex + 1;
    const totalSteps = pages.length;
    
    // Insert navigation at the bottom of the page
    const navContainer = document.querySelector('.navigation');
    if (navContainer) {
        navContainer.innerHTML = createNavigation(prevLink, nextLink, currentStep, totalSteps);
    }
    
    // Update page title with step info
    const pageTitle = document.querySelector('h1');
    if (pageTitle && !pageTitle.textContent.includes('Step')) {
        pageTitle.textContent = `Step ${currentStep}: ${pageTitle.textContent}`;
    }
}