import React, { Component } from 'react';
import './leftcard.css';
import jsonData from '../../finalData.json';
import {connect} from 'react-redux';



class LeftCard extends Component {

  
    constructor(props) {
        super(props);
        this.state = {};
        this.inputRefs = [];
        this.setRef = (ref) => {
            this.inputRefs.push(ref);
        };
        this.elementpossition = 0;
        console.log(this.props)
        this.initialBlock = (this.props.jsonData[this.elementpossition].blockText)


    }

    blockChange = (key, data) => {
        console.log(this.inputRefs[key])
        document.querySelector(".navactive").classList.add("navdisabled");
        document.querySelector(".navactive").classList.remove("navactive");
        this.inputRefs[key].classList.add("navactive");
        this.inputRefs[key].classList.remove("navdisabled");
        console.log(data);
        this.htmlBlockMaking(data.blockText)


    }
    handleChange=() => {
    
    }

    htmlBlockMaking(dataAray) {
        let htmlMakerForBlock = '';
        for (let index = 0; index < dataAray.length; index++) {
            const element = dataAray[index];
            htmlMakerForBlock += `<div class="blockelem create-flowy noselect">
                    <input type="hidden" name="blockelemtype" class="blockelemtype" value="${element.blockId}">
                        <div class="grabme">
                            <img src="assets/grabme.svg">
                            </div>
                            <div class="blockin">
                            <div class="blockico"><span></span><img alt=${element.imgSrc} src="assets/${element.imgSrc}.svg">
                            </div>
                            <div class="blocktext"><p class="blocktitle">${element.blockTitle}</p>
                            <p class="blockdesc">${element.blockDesc}</p>  
                        </div>
                         </div>
            </div>`

        }
       

        document.getElementById("blocklist").innerHTML = htmlMakerForBlock.trim();

    }

    render() {
        return (
            <div id="leftcard">
                <div id="closecard">
                    <img alt="closeleft" src='assets/closeleft.svg' />
                </div>
                <p id="header">Blocks</p>
                <div id="search">
                    <img alt="search" src='assets/search.svg' />
                    <input onChange={()=>this.handleChange()} type="text" placeholder="Search blocks" />
                </div>
                <div id="subnav">
                    {jsonData.map((a, key) => <div ref={this.setRef} key={a.id} id={a.id} onClick={() => this.blockChange(key, a)} className={key === this.elementpossition ? "navactive side" : "navdisabled side"}>{a.blocks}</div>)}

                </div>
                <div id="blocklist">{
                    this.initialBlock.map((element, index) => {
                        let imgpath = `assets/${element.imgSrc}.svg`;
                        return (<div key={index} className="blockelem create-flowy noselect">
                            <input type="hidden" name="blockelemtype" className="blockelemtype" value={element.blockId} />
                            <div className="grabme">
                                <img src="assets/grabme.svg" alt="grabme" />
                            </div>
                            <div className="blockin">
                                <div className="blockico"><span></span><img alt={element.imgSrc} src={imgpath} />
                                </div>
                                <div className="blocktext"><p className="blocktitle">{element.blockTitle}</p>
                                    <p className="blockdesc">{element.blockDesc}</p>
                                </div>
                            </div>
                        </div>)

                    })
                }

                </div> 
                </div>

        );
    }
}
const mapStateToProps = state => ({
    jsonData: state.jsonData
  });

export default connect(
    mapStateToProps
  )(LeftCard)

