/**
 * @fileoverview Main entry point for Exercise 1 - LED Blink
 */

import { initLEDSimulation } from './js/exercise1-led.js';
import { initModal } from '../js/components/modal.js';

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLEDSimulation();
    initModal();
});