import color from 'color-js';

const maxContentWidth = '660px';

// spacing
const spacing = {
    wee: '2.5px',
    tiny: '5px',
    small: '10px',
    medium: '20px',
    large: '30px',
    xlarge: '50px',
};

// avatars
const avatarSizes = {
    small: '24px',
    medium: '36px',
    large: '48px',
    xlarge: '64px',
};

// colors
const grey = color('#615B69');
const red = color('#D53A60');
const green = color('#198346');
const blue = color('#0079CB');
const colors = {
    grey: {
        default: grey.toString(),
        ultraLight: grey.lightenByAmount(0.59).toString(),
        light: grey.lightenByAmount(0.4).toString(),
        medium: grey.lightenByAmount(0.05).toString(),
        dark: grey.darkenByAmount(0.25).toString(),
        ultraDark: grey.darkenByAmount(0.7).toString(),
    },
    red: {
        default: red.toString(),
        ultraLight: red.lightenByAmount(0.46).toString(),
        light: red.lightenByAmount(0.25).toString(),
        dark: red.darkenByAmount(0.1).toString(),
    },
    green: {
        default: green.toString(),
        medium: green.lightenByAmount(0.26).toString(),
        ultraLight: green.lightenByAmount(0.65).toString(),
    },
    blue: {
        default: blue.toString(),
        medium: blue.darkenByAmount(0.05).toString(),
    },
    borders: {
        light: color('#E1DFE4').toString(),
        medium: color('#D0D0D0').toString(),
        dark: color('#615B69').toString(),
        default: `1px solid ${color('#E1DFE4').toString()}`,
    },
    success: color('#32D578').toString(),
    modal: {
        background: grey.setAlpha(0.5).toString(),
    },
};

const fontSizes = {
    wee: '.7rem',
    tiny: '.8rem',
    discrete: '.9rem',
    normal: '1rem',
    plus1: '1.2rem',
    plus2: '1.3rem',
    plus3: '1.5rem',
    plus4: '1.75rem',
    plus5: '2rem',
};

// fonts
const fonts = {
    default: 'Lato',
    headers: 'Lato',
    sizes: {
        default: '1rem',
        tiny: '.7rem',
        small: '.8rem',
        discrete: '.9rem',
        plus1: '1.2rem',
        plus2: '1.3rem',
        plus3: '1.5rem',
        plus4: '1.75rem',
        plus5: '2rem',
        plus6: '2.5rem',
        metadata: '.8rem',
    },
};

const borderRadius = {
    small: '3px',
    medium: '5px',
    round: '50%',
};

const navHeight = '60px';
const footerHeight = '45px';
const orderHeaderHeight = '45px';
const paginationHeight = '65px';

const breakpoints = {
    minWidth: '360px',
    slim: '660px',
    mobile: '768px',
    tablet: '769px',
    desktop: '980px',
    widescreen: '1180px',
};

//  borders
const borders = {
    colors: {
        light: grey.lightenByAmount(0.5).toString(),
        default: colors.grey.light,
        medium: colors.grey.default,
        dark: colors.grey.dark,
    },
    radius: {
        default: '3px',
        small: '3px',
        medium: '5px',
        round: '50%',
    },
    default: `1px solid ${colors.borders.light}`,
};

// shadows
const shadows = {
    default: `0 0 12px rgba(0,0,0,.15)`,
    shallow: `0 0 5px rgba(0,0,0,.20)`,
    deep: `20px 35px 45px rgba(0,0,0,.10)`,
    up: `0 -6px 12px rgba(0,0,0,.15)`,
    down: `0 6px 12px rgba(0,0,0,.15)`,
};

const theme = {
    maxContentWidth,
    spacing,
    avatarSizes,
    colors,
    fontSizes,
    fonts,
    borderRadius,
    navHeight,
    footerHeight,
    orderHeaderHeight,
    paginationHeight,
    breakpoints,
    borders,
    shadows,
    animationDuration: '0.33s',
};

export default theme;
