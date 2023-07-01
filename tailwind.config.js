module.exports = {
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/shared/**/*.{js,jsx,ts,tsx}',
        './src/processes/**/*.{js,jsx,ts,tsx}',
        './src/widgets/**/*.{js,jsx,ts,tsx}',
        './src/features/**/*.{js,jsx,ts,tsx}',
        './src/entities/**/*.{js,jsx,ts,tsx}'
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
            dark: '#000000'
        },
        fontSize: {
            base: ['20px'],
            sm: ['14px'],
            md: ['16px'],
            lg: ['18px'],
            xl: ['20px'],
            heading1: ['64px'],
            heading2: ['24px'],
            heading3: ['20px']
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '95px'
            }
        },
        extend: {
            fontFamily: {
                plusJakartaSans: 'Plus Jakarta Sans'
            },
            height: {
                header: '86px'
            },
            boxShadow: {
                header: '4px 6px 13px 0px rgba(215, 215, 215, 0.25)'
            }
        }
    },
    plugins: [require('tailwindcss'), require('autoprefixer')]
}
