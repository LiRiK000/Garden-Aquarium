import { extendTheme } from "@chakra-ui/react";
import buttonStyles from "./ComponentsUI/Button/Buttons";

const theme = extendTheme({
    config: {
        cssVarPrefix: "GA",
        initialColorMode: 'system',
    },
    styles: {
        global: {
            '*':{
                margin:'0',
                padding:'0',
            },
            'html, body': {
                background: 'var(--GA-colors-darkBlue-500)',
                color: 'var(--GA-colors-white-500)',
                margin: '0',
                padding: '0',
                scrollBehavior: 'smooth',
                userDrag: 'none',
                webkitUserDrag: 'none',
                overflowX: 'hidden',
            },
            'img': {
                mozUserSelect: 'none',
                webkitUserSelect: 'none',
                msUserSelect: 'none',
                userSelect: 'none',
                pointerEvents: 'none',
            }
        }
    },
    colors: {
        white: {
            500: '#F9F9F9'
        },
        black: {
            500: '#131313'
        },
        blue: {
            500: '#A7A5C5'
        },
        darkBlue: {
            500: '#1A1B30'
        },
        accent: {
            500: "#22C6EA",
        },
        secondary: {
            500: "#22233E",
        },
    },
    fonts: {
        heading: "System-UI, sans-serif",
        body: "Ubuntu, sans-serif",
    },
    fontWeight: {
        heading: 700,
        body: 400,
    },
    space: {
        2: "8px",
        4: "16px",
    },
    components: {
        Button: buttonStyles
    },
    breakpoints: {
        base: "1px",
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: '1300px',
    },
});

export default theme;
