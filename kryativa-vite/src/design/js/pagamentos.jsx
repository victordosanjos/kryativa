import { styled } from "../../configs/stitches.config";

export const Div = styled('div', {

    variants: {
        Color: {
            darkGrey: {
                backgroud: '$darkGrey'
            },

            White: {
                backgroundColor: '$White'
            },
        },

        Space: {
            tittle: {
                paddingTop: "15%",
                paddingLeft: "5%"
            },
            PaymentBox: {
                paddingTop: "10%",
            }
        },

        Radii: {
            contactFormRadius: {
                borderRadius: '$2'
            },
        },

        Fonts: {
            tittle: {
                fontFamily: '$2',
            }
        },

        FontSizes: {
            tittle: {
                fontSize: '$6',
            },
        },

        FontWeights: {
            tittle: {
                lineHeight: '200%',
            },
        }
    }
});

export const H2 = styled('h2', {
    variants: {
        Color: {
            White: {
                color: '$White',
                    },
                    
            Kryativa: {
                color: '$ciano',
            },

            BlackText: {
                color: '$Black',
            },
         },

         FontSizes: {
            tittle: {
                fontSize: '80px',
            },
        },

         FontWeights: {
            tittle: {
                lineHeight: '200%',
            },
        },
    
    }
});