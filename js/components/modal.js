/**
 * @fileoverview Modal functionality for component information popups
 */

import { componentInfo } from './component-data.js';

let lastFocusedElement = null;

/**
 * Show component modal
 * @param {string} component - Component key
 */
export function showModal(component) {
    const modal = document.getElementById('componentModal');
    const modalContent = modal.querySelector('.modal-content');
    const info = componentInfo[component];
    
    // Store last focused element
    lastFocusedElement = document.activeElement;
    
    // Update modal content
    document.getElementById('modalTitle').textContent = info.title;
    document.getElementById('modalImage').innerHTML = info.image;
    document.getElementById('modalDescription').innerHTML = info.description;
    
    // Show modal
    modal.style.display = 'block';
    modal.classList.add('show');
    
    // Focus modal content
    modalContent.focus();
    
    // Add focus trap
    modal.addEventListener('keydown', handleModalKeydown);
}

/**
 * Close modal
 */
export function closeModal() {
    const modal = document.getElementById('componentModal');
    
    // Hide modal
    modal.style.display = 'none';
    modal.classList.remove('show');
    
    // Remove focus trap
    modal.removeEventListener('keydown', handleModalKeydown);
    
    // Return focus to last element
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

/**
 * Handle keyboard navigation in modal
 * @param {KeyboardEvent} e - Keyboard event
 */
function handleModalKeydown(e) {
    const modal = document.getElementById('componentModal');
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    // Close on Escape
    if (e.key === 'Escape') {
        closeModal();
        return;
    }
    
    // Trap Tab focus
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            // Shift+Tab
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    }
}

/**
 * Initialize modal event listeners
 */
export function initModal() {
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('componentModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Make showModal and closeModal available globally for onclick handlers
    window.showModal = showModal;
    window.closeModal = closeModal;
}