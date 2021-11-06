import {createMuiTheme, createTheme, Theme} from "@material-ui/core/styles";
import "@material-ui/core/styles/createPalette";
import React from "react";
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
} from 'react-router-dom';
import {LinkProps, PaletteColorOptions} from "@material-ui/core";

declare module "@material-ui/core/styles/createPalette" {
    interface TypeText {
        muted: string;
    }

    interface CustomPalette{
        light: PaletteColorOptions;
    }

    interface Palette extends CustomPalette{}
    interface PaletteOptions extends CustomPalette{}
}

declare module "@material-ui/core/Button/Button" {
    interface ButtonPropsColorOverrides{
        light: true;
    }
}

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>
    ((props, ref) => {
        const { href, ...other } = props;
        // Map href (MUI) -> to (react-router)
        return (
            <RouterLink ref={ref} to={href} {...other} />
        );
    });

const headlineFontFamily = [ "Cormorant Garamond", "serif" ].join(', ');

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    boxShadow: "none"
                }
            },
            variants: [
                {
                    props: {color: 'primary', variant: 'contained'},
                    style: {
                        padding: "12px 30px",
                        color: "#fff"
                    }
                },
                {
                    props: {color: 'secondary', variant: 'contained'},
                    style: {
                        padding: "12px 30px",
                        color: "#8299ac",
                        border: "solid 1px #8299ac",
                        background: "#fff",
                        "&:hover": {
                            color: "#fff",
                            background: "#8299ac"
                        }
                    }
                },
                {
                    props: {color: 'light'},
                    style: {
                        padding: "12px 30px",
                    }
                },
            ],
        },
        MuiLink: {
            styleOverrides: {
                underlineNone: true
            },
            defaultProps: {
                component: LinkBehavior,
            } as LinkProps,
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
        MuiStepIcon: {
            styleOverrides: {
                text: {
                    fontSize: 12,
                    fill: "#fff"
                },
                root: {
                    color: "#8299ac"
                }
            },
        }
    },
    palette: {
        text: {
            primary: "#3c5e79",
            muted: "#8299ac"
        },
        primary: {
            main: "#c9ad82"
        },
        light: createTheme().palette.augmentColor({ color: { main: "#fff" } })
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif'
        ].join(', '),
        h1: {
            fontSize: "4em",
            fontFamily: headlineFontFamily
        },
        h2: {
            fontSize: "3em",
            fontFamily: headlineFontFamily
        },
        h3: {
            fontSize: "2em",
            fontFamily: headlineFontFamily
        },
        h4: {
            fontSize: "1.5em",
            fontFamily: headlineFontFamily
        },
        h5: {
            fontSize: "1.1em",
            color: "#C9AD82",
            fontWeight: 600,
        },
        caption: {
            fontSize: "1.1em"
        },
        body1: {
            fontSize: "1.1rem",
            color: "#3c5e79"
        },
        body2: {
            fontSize: "1.1rem",
            color: "#8299ac"
        },
    }
});
