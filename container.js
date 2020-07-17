import React, { Component } from 'react';

import View from './View';
import FunctionalView from './FunctionalView';
import InformationView from './InformationView'; 

class App extends Component {
    render() {
        return (
            <div className="app">
                <View type={'functional'} title={'Which artist paints your favourite artwork?'} renderedView={<FunctionalView />} />
                <View type={'information'} title={'Learn More...'} renderedView={<InformationView />} />
            </div>
        );
    }
}

export default (App);

// Components to make
/**
 * Container Components
 * View
 * 
 * 
 */
