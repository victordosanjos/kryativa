// stitches.config.ts
import { createStitches } from '@stitches/react';

export const {styled, css} = createStitches({
    theme: {
        colors: {
          //Kryativa Main Color
            ciano: "#42D3AC",

          // Azul
            defaultLightBlue: "#0ecaff",
            defaultDarkBlue: "#04C4C",

              // Gradiente Azul
              gradientBlueDarkLight: "-webkit-linear-gradient(left, #0072ff, #00c6ff);",
              
              gradientPinkDarkLight:"-webkit-linear-gradient(122deg, rgba(247,148,214,1) 48%, rgba(251,115,148,1) 88%):",

            // Cinza
            darkGrey: "#303030",
            lightGrey:"#EAEAEA",


            // Rosa 
            lightPink: "rgb(247,148,214)",

            // Branco

            White: "white",

            // Preto

            Black: "black",

            // Verde
            dLimeGreen: "#63ff78",
        },

        sizes: {
          hf:'100vh',
        },

        radii: {
          1:'30px',
          2:'2%',
        },
        
        space: {
          // padding
          // em %
          pc1: '3%',
          pc2: '5%',
          pc3: '8%',
          pc4: '10%',

          // px
          px1: '18px',
          px2: '30px',
          px3: '50px',
          px4: '120px',
          px5: '150px',

        },

        fonts: {
            1: 'Mochiy Pop P One, sans-serif',
            2: 'Josefin Sans',
            3: 'Nexa',

        },
        fontSizes: {
            1: '12px',
            2: '13px',
            3: '15px',
            4: '17px',
            5: '20px',
            6: '25px',
            20: '60px'
        },

        fontWeights:{
            
            1:'300',
            2:'400',
            3:'620',
            4:'700',
            b: 'bold',
            
        },
        shadows:{
            1:'6px 1px 10px black',
        },

        media: {
          bp1: '(min-width: 640px)',
          bp2: '(min-width: 768px)',
          bp3: '(min-width: 1024px)',
        },
      

    },


    utils: {
        // Abbreviated margin properties
        m: (value) => ({
          margin: value,
        }),
        mt: (value) => ({
          marginTop: value,
        }),
        mr: (value) => ({
          marginRight: value,
        }),
        mb: (value) => ({
          marginBottom: value,
        }),
        ml: (value) => ({
          marginLeft: value,
        }),
        mx: (value) => ({
          marginLeft: value,
          marginRight: value,
        }),
        my: (value) => ({
          marginTop: value,
          marginBottom: value,
        }),

        // Abreviated min and max Width/Height

        minw: (value) => ({
          minWidth: value,
        }),

        maxw: (value) => ({
          maxWidth: value,
        }),

        minh: (value) => ({
          minHeight: value,
        }),

        maxh: (value) => ({
          minHeight: value,
        }),
    
        // A property for applying width/height together
        size: (value) => ({
          width: value,
          height: value,
        }),
    
        // A property to apply linear gradient
        linearGradient: (value) => ({
          backgroundImage: `linear-gradient(${value})`,
        }),
    
        // An abbreviated property for border-radius
        br: (value) => ({
          borderRadius: value,
        }),
      },
    });

