import React from 'react';
import './rightcard.css';

// import closex from '../../assets/close.svg';
// import dropdown from '../../assets/dropdown.svg';
// import checkon from '../../assets/checkon.svg';
// import checkoff from '../../assets/checkoff.svg';

const RightCard = () => {
    const removeBlock=()=>{
        window.flowy.deleteBlocks();
    }
    const closeRight=()=>{
        document.getElementById("properties").classList.remove("expanded");
                setTimeout(function () {
                    document.getElementById("propwrap").classList.remove("itson");
                }, 300);
    }
    return (  
        <div id="propwrap"  >
            <div id="properties" >
                <div id="close" onClick={()=>closeRight()} >
                    <img alt="close" src='assets/close.svg' />
                </div>
                <p id="header2">Properties</p>
                <div id="propswitch">
                    <div id="dataprop">Data</div>
                    <div id="alertprop">Alerts</div>
                    <div id="logsprop">Logs</div>
                </div>
                <div id="proplist">
                    <p className="inputlabel">Select database</p>
                    <div className="dropme">Database 1 <img alt="dropdown" src='assets/dropdown.svg' /></div>
                    <p className="inputlabel">Check properties</p>
                    <div className="dropme">All<img alt="dropdown" src='assets/dropdown.svg'  /></div>
                    <div className="checkus"><img alt="checkon" src='assets/checkon.svg' /><p>Log on successful performance</p></div>
                    <div className="checkus"><img alt="checkoff" src='assets/checkoff.svg' /><p>Give priority to this block</p></div>
                </div>
                <div id="divisionthing"></div>
                <div onClick={()=>removeBlock()} id="removeblock">Delete blocks</div>

            </div>
        </div>
    );
}
 
export default RightCard;