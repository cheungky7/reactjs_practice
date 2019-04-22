import React from 'react';
import './FlexLayout.css'

class FlexLayout extends React.Component {

    render() {
        return (
            <div className="flex-container">
                <div className="flex-container-row">
                    <div className="item1" align="center">1</div>
                    <div className="item2" align="center">2</div>
                    <div className="item1" align="center">1</div>
               </div>
               <div className="flex-container-row">
                    <div className="item2" align="center">2</div>
                    <div className="item1" align="center">1</div>
                    <div className="item2" align="center">2</div>
               </div>
            </div>
        );
    }
}

export default FlexLayout;