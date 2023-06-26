module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#FFFFFE',
            lightGreyFirst: '#EFF0F3',
            lightGreySecond: '#E4E5E9',
            grey: '#C0C0C0',
            darkGrey: '#9A9494',
            black: '#2B2C34',
            blue: '#6246EA',
        },
        fontSize: {
            base: ['20px'],
            sm: ['14px'],
            md: ['16px'],
            lg: ['18px'],
            xl: ['20px'],
            heading1: ['64px'],
            heading2: ['24px'],
            heading3: ['20px'],
        },
        container: {
            maxWidth: '1250px'
        },
        extend: {
            fontFamily: {
                'plusJakartaSans': 'Plus Jakarta Sans',
            }
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}