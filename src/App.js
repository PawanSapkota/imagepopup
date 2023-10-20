import React from 'react'
import gallery1 from "./assests/gallery1.jpeg"
import gallery2 from "./assests/gallery2.jpeg"
import gallery3 from "./assests/gallery3.jpeg"
import gallery4 from "./assests/gallery4.jpeg"
import gallery5 from "./assests/gallery5.jpeg"
import gallery6 from "./assests/gallery6.png"
import Slider from './components/Slider/Slider'

const App = () => {
    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
    ]

    return (
        <div>
            <Slider images={images} />
        </div>
    )
}

export default App