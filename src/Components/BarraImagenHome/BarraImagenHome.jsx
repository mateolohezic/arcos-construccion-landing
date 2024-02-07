import React, { useEffect, useState } from 'react'
import './barraImagenHome.css'
import NosotrosHome from '../NosotrosHome/NosotrosHome'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

function BarraImagenHome() {

    const [isIphone, setIsIphone] = useState(false)

    useEffect(() => {
        if (navigator.platform === 'iPhone' || navigator.platform === 'iPod' || navigator.platform === 'iPad' || navigator.platform === 'iPhone Simulator' || navigator.platform === 'iPod Simulator' || navigator.platform === 'iPad Simulator' || navigator.platform === 'Macintosh' || navigator.platform === 'MacIntel' || navigator.platform === 'MacAppleSilicon' || navigator.platform === 'MacPPC' || navigator.platform === 'Mac68K' || navigator.platform === 'Pike v7.6 release 92' || navigator.platform === 'Pike v7.8 release 517') {
            setIsIphone(true)
        }
    }, [])

    return (
    <LazyLoadComponent>
        <div className={ isIphone ? 'barraImagenIphoneHome' : 'barraImagenHome' }>
            <NosotrosHome />
        </div>
    </LazyLoadComponent>
    )
}

export default BarraImagenHome