/**
 * @fileoverview Component information and descriptions for modals
 */

/**
 * Component information for each electronic part
 * @type {Object.<string, {title: string, image: string, description: string}>}
 */
export const componentInfo = {
    arduino: {
        title: "Arduino Board",
        image: `<svg width="150" height="150" viewBox="0 0 150 150">
            <rect x="20" y="35" width="110" height="80" fill="#00979D" stroke="#005C5F" stroke-width="2" rx="4"/>
            <rect x="25" y="28" width="40" height="7" fill="#C0C0C0" stroke="#808080"/>
            <circle cx="35" cy="50" r="4" fill="#000"/>
            <rect x="110" y="50" width="15" height="50" fill="#333"/>
            <rect x="30" y="100" width="80" height="7" fill="#333"/>
            <text x="75" y="75" text-anchor="middle" font-size="12" fill="white" font-weight="bold">ARDUINO</text>
        </svg>`,
        description: `
            <p><strong>What is it?</strong> The Arduino is like a tiny computer that can control lights, motors, and sensors.</p>
            <p><strong>Think of it like:</strong> A brain for your projects! You tell it what to do by writing simple code.</p>
            <p><strong>Fun fact:</strong> Arduino boards are used in robots, home automation, and even art projects!</p>
            <p><strong>In this project:</strong> It will send signals to turn your LED on and off.</p>
        `
    },
    led: {
        title: "LED (Light Emitting Diode)",
        image: `<svg width="150" height="150" viewBox="0 0 150 150">
            <ellipse cx="75" cy="60" rx="30" ry="35" fill="#FF3333" stroke="#CC0000" stroke-width="3"/>
            <path d="M 45 60 Q 75 25 105 60" fill="#FF6666" opacity="0.6"/>
            <circle cx="75" cy="45" r="5" fill="#FFAAAA"/>
            <line x1="65" y1="95" x2="65" y2="120" stroke="#666" stroke-width="4"/>
            <line x1="85" y1="95" x2="85" y2="130" stroke="#666" stroke-width="4"/>
            <text x="95" y="125" font-size="12" fill="#666">+</text>
        </svg>`,
        description: `
            <p><strong>What is it?</strong> An LED is a special light bulb that uses very little power.</p>
            <p><strong>Important:</strong> LEDs only work one way! The long leg (+) must connect to positive power.</p>
            <p><strong>Colors:</strong> LEDs come in many colors - red, green, blue, yellow, and more!</p>
            <p><strong>Warning:</strong> Always use a resistor with an LED, or it might burn out!</p>
        `
    },
    resistor: {
        title: "Resistor",
        image: `<svg width="150" height="150" viewBox="0 0 150 150">
            <line x1="75" y1="20" x2="75" y2="40" stroke="#666" stroke-width="3"/>
            <rect x="50" y="40" width="50" height="70" fill="#D2691E" stroke="#8B4513" stroke-width="3" rx="5"/>
            <rect x="50" y="50" width="50" height="8" fill="#FF0000"/>
            <rect x="50" y="62" width="50" height="8" fill="#FF0000"/>
            <rect x="50" y="74" width="50" height="8" fill="#A52A2A"/>
            <rect x="50" y="94" width="50" height="8" fill="#FFD700"/>
            <line x1="75" y1="110" x2="75" y2="130" stroke="#666" stroke-width="3"/>
            <text x="110" y="75" font-size="14" fill="#666">220Ω</text>
        </svg>`,
        description: `
            <p><strong>What is it?</strong> A resistor slows down electricity, like a speed bump for electric current.</p>
            <p><strong>Why use it?</strong> It protects your LED from getting too much power and burning out.</p>
            <p><strong>The stripes:</strong> The colored bands tell you how strong the resistor is. This one is 220 ohms.</p>
            <p><strong>Remember:</strong> No resistor = dead LED! Always use one with LEDs.</p>
        `
    },
    breadboard: {
        title: "Breadboard",
        image: `<svg width="150" height="150" viewBox="0 0 150 150">
            <rect x="25" y="45" width="100" height="60" fill="#FFFFFF" stroke="#666" stroke-width="2"/>
            <rect x="72" y="45" width="6" height="60" fill="#E0E0E0"/>
            <g fill="#666">
                <circle cx="35" cy="55" r="2"/><circle cx="50" cy="55" r="2"/><circle cx="65" cy="55" r="2"/>
                <circle cx="85" cy="55" r="2"/><circle cx="100" cy="55" r="2"/><circle cx="115" cy="55" r="2"/>
                <circle cx="35" cy="70" r="2"/><circle cx="50" cy="70" r="2"/><circle cx="65" cy="70" r="2"/>
                <circle cx="85" cy="70" r="2"/><circle cx="100" cy="70" r="2"/><circle cx="115" cy="70" r="2"/>
                <circle cx="35" cy="85" r="2"/><circle cx="50" cy="85" r="2"/><circle cx="65" cy="85" r="2"/>
                <circle cx="85" cy="85" r="2"/><circle cx="100" cy="85" r="2"/><circle cx="115" cy="85" r="2"/>
            </g>
            <text x="75" y="120" text-anchor="middle" font-size="10" fill="#666">Center gap</text>
        </svg>`,
        description: `
            <p><strong>What is it?</strong> A breadboard is like LEGO for electronics - you can connect parts without permanent connections.</p>
            <p><strong>No soldering needed!</strong> Just push components into the holes.</p>
            <p><strong>How it works:</strong> Holes in the same row are connected inside. The gap in the middle keeps the left and right sides separate.</p>
            <p><strong>Your mini breadboard:</strong> Perfect for small projects like LED circuits!</p>
        `
    },
    jumper: {
        title: "Jumper Wires",
        image: `<svg width="150" height="150" viewBox="0 0 150 150">
            <path d="M 40 100 Q 40 50 75 35 Q 110 20 110 70" 
                  stroke="#E74C3C" stroke-width="6" fill="none"/>
            <rect x="32" y="92" width="16" height="30" fill="#2C3E50" rx="2"/>
            <rect x="37" y="122" width="6" height="12" fill="#C0C0C0"/>
            <rect x="102" y="62" width="16" height="30" fill="#2C3E50" rx="2"/>
            <rect x="107" y="92" width="6" height="12" fill="#C0C0C0"/>
        </svg>`,
        description: `
            <p><strong>What is it?</strong> Jumper wires are like extension cords for your breadboard.</p>
            <p><strong>How to use:</strong> Push the metal ends into breadboard holes to connect different parts.</p>
            <p><strong>Colors:</strong> Use different colors to stay organized - like red for power and black for ground.</p>
            <p><strong>Tip:</strong> Keep them neat! Messy wires make it hard to find problems.</p>
        `
    }
};