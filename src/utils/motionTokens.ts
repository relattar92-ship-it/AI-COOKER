export const motionTokens = {
  duration: {
    ultraSlow: 2.4,
    slow: 1.4,
    normal: 0.6,
    fast: 0.25,
  },

  // ✅ FIXED — TS SAFE
  easing: {
    luxury: [0.4, 0.0, 0.2, 1],   // cinematic / premium
    soft: [0.0, 0.0, 0.2, 1],     // gentle fade
  },

  opacity: {
    hidden: 0,
    visible: 1,
  },

  scale: {
    press: 0.96,
  },

  glow: {
    breath: 2.2,
    softOpacity: 0.25,
    focusOpacity: 0.45,
  },
} as const;
