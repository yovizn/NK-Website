export const riseWithFade = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7,
    },
  },
};

export const scaleUpAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

export const wordAnimations = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: (idx) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
      delay: 0.07 * idx,
    },
  }),
};

export const fadeInCard = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (idx) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * idx,
    },
  }),
};

export const iconAnimation = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: (idx) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
      delay: 0.09 * idx,
    },
  }),
};

export const wordRising = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: (idx) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.75, delay: idx * 0.1, ease: [0.33, 1, 0.68, 1] },
  }),
};
