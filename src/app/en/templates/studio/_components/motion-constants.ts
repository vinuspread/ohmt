export const MOTION_CONSTANTS = {
  easings: {
    // Strong ease-out for UI interactions (Default)
    easeOut: [0.23, 1, 0.32, 1],
    // Strong ease-in-out for on-screen movement
    easeInOut: [0.77, 0, 0.175, 1],
    // iOS-style easing for drawer/sheet animation
    iosDrawer: [0.32, 0.72, 0, 1],
  },
  durations: {
    ui: 0.2,           // 200ms - Standard UI transition
    max: 0.3,          // 300ms - Maximum duration for UI animations
    drawer: 0.5,       // 500ms - Drawer animation duration
    press: 0.15,       // 150ms - Button press feedback
    stagger: 0.06,     // 60ms - Stagger delay between child elements
  },
  scales: {
    press: 0.97,       // Scale buttons to 0.97 on press
    enter: 0.95,       // Minimum enter scale (never scale(0))
  },
  thresholds: {
    reveal: 100,       // 100px viewport threshold for scroll reveal
  }
} as const;
