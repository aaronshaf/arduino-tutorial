/**
 * @fileoverview Interactive LED blink simulation for Exercise 1
 */

/**
 * Initialize the LED blink simulation
 */
function initLEDSimulation() {
    const led = document.getElementById('interactive-led');
    const delaySlider = document.getElementById('delay-slider');
    const delayValue = document.getElementById('delay-value');
    
    let blinkInterval = null;
    let isOn = false;
    
    /**
     * Toggle LED state
     */
    function toggleLED() {
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
        const delay = parseInt(delaySlider.value);
        delayValue.textContent = delay + 'ms';
        startBlinking(delay);
    }
    
    // Set up event listener
    delaySlider.addEventListener('input', handleDelayChange);
    
    // Start initial blinking
    startBlinking(1000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initLEDSimulation);