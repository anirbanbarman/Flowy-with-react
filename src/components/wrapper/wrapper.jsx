import React, { useEffect } from 'react';
import NavBar from '../nav-bar/navbar';
import LeftCard from '../left-card/leftcard';
import './wrapper.css';
import RightCard from '../right-prop-card/rightcard';
import { useSelector, useDispatch } from 'react-redux';
import { flowDataLoad } from './../../store/actions/flowy-action';

const Wrapper = () => {
    const jsonData = useSelector(state => state.jsonData);
    const dispatch = useDispatch();
    dispatch(flowDataLoad())
    useEffect(() => {
        var rightcard = false;
        var tempblock;
        var tempblock2;
        window.flowy(document.getElementById("canvas"), drag, release, snapping);
        function addEventListenerMulti(type, listener, capture, selector) {
            var nodes = document.querySelectorAll(selector);
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].addEventListener(type, listener, capture);
            }
        }
        function snapping(drag, first) {
            var grab = drag.querySelector(".grabme");
            grab.parentNode.removeChild(grab);
            var blockin = drag.querySelector(".blockin");
            blockin.parentNode.removeChild(blockin);

            let data = [];

            jsonData.map(obj => {
                return data = [...data, ...obj.blockText]
            })

            for (let index = 1; index < data.length + 1; index++) {
                if (drag.querySelector(".blockelemtype").value === (data[index - 1].blockId).toString()) {

                    let blockDetails = data[index - 1].dropBlockDetails;
                    drag.innerHTML += `<div class='blockyleft'><img src='assets/${blockDetails.dropImg}.svg'>
                <p class='blockyname'>${blockDetails.blockyname}</p></div><div class='blockyright'>
                <img src='assets/${blockDetails.blockyright}.svg'></div><div class='blockydiv'></div>
                <div class='blockyinfo'>${blockDetails.blockyinfo}
                </div>`;

                }

            }

            return true;
        }
        function drag(block) {
            block.classList.add("blockdisabled");
            tempblock2 = block;
        }
        function release() {
            if (tempblock2) {
                tempblock2.classList.remove("blockdisabled");
            }
            // As an object
            console.log(window.flowy.output());
        }

        document.getElementById("close").addEventListener("click", function () {
            if (rightcard) {
                rightcard = false;
                tempblock.classList.remove("selectedblock");
            }
        });


        var aclick = false;
        var noinfo = false;
        var beginTouch = function (event) {
            aclick = true;
            noinfo = false;
            if (event.target.closest(".create-flowy")) {
                noinfo = true;
            }
        }
        var checkTouch = function (event) {
            aclick = false;
        }
        var doneTouch = function (event) {
            if (event.type === "mouseup" && aclick && !noinfo) {
                if (!rightcard && event.target.closest(".block") && !event.target.closest(".block").classList.contains("dragging")) {
                    tempblock = event.target.closest(".block");
                    rightcard = true;
                    document.getElementById("properties").classList.add("expanded");
                    document.getElementById("propwrap").classList.add("itson");
                    tempblock.classList.add("selectedblock");
                }
            }
        }
        window.addEventListener("mousedown", beginTouch, false);
        window.addEventListener("mousemove", checkTouch, false);
        window.addEventListener("mouseup", doneTouch, false);
        addEventListenerMulti("touchstart", beginTouch, false, ".block");


    }, [jsonData]);



    return (<div>
        <NavBar />
        <LeftCard />
        <RightCard />


        <div id="canvas">
        </div>

    </div>
    )
}

export default Wrapper;