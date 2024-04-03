import { postcss } from "tailwindcss"

//craco config.js
module.exports={
    style:{
        postcss:{
            plugins:[
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}