/**
 * default appear fadein
 */
export const fadeIn = {
  startValue: { opacity: 0.2 },
  endValue: { opacity: 1 }
};

/**
 * variable fadein
 */
export const fadeInCustom = initialFade => ({
  startValue: { opacity: initialFade },
  endValue: { opacity: 1 }
});
