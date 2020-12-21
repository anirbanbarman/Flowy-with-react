import React from 'react';
import './navbar.css';

const NavBar = () => {
    const showPipeLine=()=>{
 try {
   alert(JSON.stringify((window.flowy.output().blocks)));
 } catch (error) {
     alert("complete you Path")
     
 }
    }
    return ( 
        <div id="navigation">
            <div id="leftside">
                <div id="details">
                    <div id="back"><img alt="arrow" src='assets/arrow.svg' /></div>
                    <div id="names">
                        <p id="title">Your automation pipeline</p>
                        <p id="subtitle">Marketing automation</p>
                    </div>
                </div>
            </div>
            <div id="centerswitch">
                <div id="leftswitch">Diagram view</div>
                <div id="rightswitch">Code editor</div>
            </div>
            <div id="buttonsright">
                <div id="discard" >Discard</div>
                <div id="publish"  onClick={()=>showPipeLine()}>Show pipeline path </div>
            </div>
        </div>

     );
}
 
export default NavBar;