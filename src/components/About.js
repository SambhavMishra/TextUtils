import React from 'react';

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark'? 'white':'black',
        backgroundColor: props.mode === 'dark'?'#042743':'white'
    }

    return (
        <div className="accordion mx-2" id="accordionExample" style={myStyle}>
            <h3 className='my-3'>About us</h3>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze your text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        This application helps you analyze your text and change them according to your wishes. You can convert your text to upper case, lower case, etc. This is especially useful for NLP because there you are in need of all uppertext or all lower text.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                       This application is free of cost and anyone can use it.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        This application works full well on all browesers and can also be used as an android applications.
                    </div>
                </div>
            </div>
        </div>
    );
}
