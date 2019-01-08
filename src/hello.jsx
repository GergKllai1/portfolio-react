import React from "react"
import { Parallax, Background } from 'react-parallax';


const Hello = () => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../src/images/main.jpeg')}
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '200px' }} />
    </Parallax>
    )
}

export default Hello