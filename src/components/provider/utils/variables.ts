export const colors = {
  white: '#ffffff',
  black: '#000000',
  main: '#40B983',
  secondary: '#96EDC6',
  blue: '#519BF7',
  redNotification: '#F5222D',
  text: '#000000A6',
  red: '#B94040',
  placeholder: '#00000040',
  inputColor: '#525b64',
  inputBorderDefault: '#d9d9d9a6',
  gray: '#D9D9D9',
  grayBox: '#E9E9E9',
  bgMenu: '#F6FAFE',
  gray10: '#F2F2F2',
  greenSecondary: '#3dbb7f',
  disabled: 'rgb(194, 199, 200)',
  tagsDefault: '#00B2F7',
  greenSecondary2: '#49ce92',
};

export const systemFonts = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

export const fonts = {
  system: systemFonts,
  sansSerif: `'Museo Sans Rounded', ${systemFonts}`,
  monospace: "'SF Mono', Inconsolata, Menlo, Monaco, Consolas, 'Courier New', Courier, monospace;",
  montserratRegular: 'Montserrat-Regular',
  montserratBold: 'Montserrat-Bold',
  montserratMedium: 'Montserrat-Medium',
};

/**
 * Legacy spacer units (in px units).
 */
// eslint-disable-next-line
export const spaceLegacy: any = {
  /** Equivalent to 8px */
  space1: 8,
  /** Equivalent to 16px */
  space2: 16,
  /** Equivalent to 24px */
  space3: 24,
  /** Equivalent to 32px */
  space4: 32,
  /** Equivalent to 40px */
  space5: 40,
  /** Equivalent to 48px */
  space6: 48,
  /** Equivalent to 56px */
  space7: 56,
  /** Equivalent to 64px */
  space8: 64,
  /** Equivalent to 72px */
  space9: 72,
  /** Equivalent to 80px */
  space10: 80,
};

/** Space values (in px) mapped by size designators */

export const space = {
  ...spaceLegacy,
  /** Equivalent to 2px */
  xxxs: 2,
  /** Equivalent to 4px */
  xxs: 4,
  /** Equivalent to 8px */
  xs: 8,
  /** Equivalent to 12px */
  sm: 12,
  /** Equivalent to 16px */
  md: 16,
  /** Equivalent to 24px */
  lg: 24,
  /** Equivalent to 32px */
  xl: 32,
  /** Equivalent to 48px */
  xxl: 48,
};

/** Breakpoints in px units */
export const breakpoints = {
  /** 1024px (enable to 1279px) */
  sm: 1024,
  /** 1280px (enable to 1439px) */
  md: 1280,
  /** 1440px (enable to 1599px) */
  lg: 1440,
  /** 1600px (and more) */
  xl: 1600,
};

/** Border radiuses */
export const radii = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10,
  xxl: 12,
  xxxl: 14,
  xxxxl: 16,
};

/** Legacy box-shadow values. */
export const shadowsLegacy = {
  layer100: '0 1px 1px 0 rgba(0, 0, 0, 0.25)',
  layer200: '0 2px 4px 1px rgba(0, 0, 0, 0.15)',
  layer300: '0 4px 6px 2px rgba(0, 0, 0, 0.15)',
  layer400: '0 6px 10px 2px rgba(0, 0, 0, 0.15)',
};

/** Default box/text shadow separated by layers */
export const shadows = {
  ...shadowsLegacy,
};

/** Custom elevation variant for the Card component. */
export const elevation = {
  layer100: {
    boxShadow: 'layer100',
  },
  layer200: {
    boxShadow: 'layer200',
  },
  layer300: {
    boxShadow: 'layer300',
  },
  layer400: {
    boxShadow: 'layer400',
  },
};

/** Typography scale values (in pixels) mapped by style tokens. */
export const typeScale = {
  heading1: {
    fontSize: 28,
    lineHeight: 32,
  },
  heading2: {
    fontSize: 24,
    lineHeight: 30,
  },
  heading3: {
    fontSize: 20,
    lineHeight: 24,
  },
  heading4: {
    fontSize: 18,
    lineHeight: 22,
  },
  heading5: {
    fontSize: 16,
    lineHeight: 24,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
  },
  large: {
    fontSize: 16,
    lineHeight: 24,
  },
  body: {
    fontSize: 13,
    lineHeight: 20,
  },
  label: {
    fontSize: 12,
    lineHeight: 16,
  },
  small: {
    fontSize: 11,
    lineHeight: 16,
  },
};
