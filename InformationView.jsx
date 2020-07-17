import React, { useState } from 'react';
import Block from './block';
import learnMoreConfig from './learnMoreConfig'; 


const InformationView = () => {

    return (
        <div className="information-view">
            <Block style={'Baroque'} link={'https://srcnaut.com/cdn-cgi/image/f=auto,fit=crop,g=0.5x0.5,w=2000,h=1125,q=90,d=1/upload/09/1e/33/640px-1710-15-de-matteis-triumph-of-the-immaculate-anagoria.jpg'} description={'The Baroque is a style of architecture, music, dance, painting, sculpture and other arts that flourished in Europe from the early 17th century until the 1740s.'}/>
            <Block style={'Byzantine'} description={'this is the description of Byzantine'}/>
  
            


        </div>
    )
}

export default InformationView;
