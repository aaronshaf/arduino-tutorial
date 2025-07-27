/**
 * @fileoverview LED blink simulation functionality
 */

let blinkInterval = null;
let isOn = false;

/**
 * Toggle LED state
 */
function toggleLED() {
    const led = document.getElementById('interactive-led');
    isOn = !isOn;
    led.classList.toggle('on', isOn);
}

/**
 * Start blinking with specified delay
 * @param {number} delay - Delay in milliseconds
 */
function startBlinking(delay) {
    // Clear existing interval
    if (blinkInterval) {
        clearInterval(blinkInterval);
    }
    
    // Start new interval
    blinkInterval = setInterval(toggleLED, delay);
}

/**
 * Handle delay slider change
 */
function handleDelayChange() {
    const delaySlider = document.getElementById('delay-slider');
    const delayValue = document.getElementById('delay-value');
    const delay = parseInt(delaySlider.value);
    
    delayValue.textContent = delay + 'ms';
    startBlinking(delay);
}

/**
 * Initialize the LED blink simulation
 */
export function initLEDSimulation() {
    const delaySlider = document.getElementById('delay-slider');
    
    if (!delaySlider) return; // Exit if elements not found
    
    // Set up event listener
    delaySlider.addEventListener('input', handleDelayChange);
    
    // Start initial blinking
    startBlinking(1000);
}