import React, { useState } from 'react';
import "../main.css";
import CustomButton from "./CustomButton";
import CustomControls from "./CustomControls";
import Slider from "./Slider";
import HelperBoard from "./HelperBoard";
import PropertyModal from "./PropertyModal";

// import all images
// CREDIT: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack 
function importAllImages(r) {
    let images = {};
    r.keys().map((item) => (
        images[item.replace('./', '')] = r(item)
    ));
    return images;
}
const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));

// full library of consonants and vowels
const FIRSTS = [
    { id: "fc-g", char: 'ㄱ', pic: images['fc_g.png'] },
    { id: "fc-n", char: 'ㄴ', pic: images['fc_n.png'] },
    { id: "fc-d", char: 'ㄷ', pic: images['fc_d.png'] },
    { id: "fc-l", char: 'ㄹ', pic: images['fc_l.png'] },
    { id: "fc-m", char: 'ㅁ', pic: images['fc_m.png'] },
    { id: "fc-b", char: 'ㅂ', pic: images['fc_b.png'] },
    { id: "fc-s", char: 'ㅅ', pic: images['fc_s.png'] },
    { id: "fc-x", char: 'ㅇ', pic: images['fc_x.png'] },
    { id: "fc-j", char: 'ㅈ', pic: images['fc_j.png'] },
    { id: "fc-ch", char: 'ㅊ', pic: images['fc_ch.png'] },
    { id: "fc-k", char: 'ㅋ', pic: images['fc_k.png'] },
    { id: "fc-t", char: 'ㅌ', pic: images['fc_t.png'] },
    { id: "fc-p", char: 'ㅍ', pic: images['fc_p.png'] },
    { id: "fc-h", char: 'ㅎ', pic: images['fc_h.png'] },
], FIRST_EXTRAS = [
    { id: "fxc-g", char: 'ㄱ', pic: images['fxc_g.png'] },
    { id: "fxc-d", char: 'ㄷ', pic: images['fxc_d.png'] },
    { id: "fxc-b", char: 'ㅂ', pic: images['fxc_b.png'] },
    { id: "fxc-s", char: 'ㅅ', pic: images['fxc_s.png'] },
    { id: "fxc-j", char: 'ㅈ', pic: images['fxc_j.png'] },
], VOWELS = [
    { id: "v-ah", char: 'ㅏ', pic: images['v_ah.png'] },
    { id: "v-ae", char: 'ㅐ', pic: images['v_ae.png'] },
    { id: "v-yah", char: 'ㅑ', pic: images['v_yah.png'] },
    { id: "v-yae", char: 'ㅒ', pic: images['v_yae.png'] },
    { id: "v-uh", char: 'ㅓ', pic: images['v_uh.png'] },
    { id: "v-eh", char: 'ㅔ', pic: images['v_eh.png'] },
    { id: "v-yuh", char: 'ㅕ', pic: images['v_yuh.png'] },
    { id: "v-yeh", char: 'ㅖ', pic: images['v_yeh.png'] },
    { id: "v-o", char: 'ㅗ', pic: images['v_o.png'] },
    { id: "v-yo", char: 'ㅛ', pic: images['v_yo.png'] },
    { id: "v-u", char: 'ㅜ', pic: images['v_u.png'] },
    { id: "v-yu", char: 'ㅠ', pic: images['v_yu.png'] },
    { id: "v-eu", char: 'ㅡ', pic: images['v_eu.png'] },
    { id: "v-ee", char: 'ㅣ', pic: images['v_ee.png'] },
], VOWEL_EXTRAS = [
    { id: "vx-ah", char: 'ㅏ', pic: images['vx_ah.png'] },
    { id: "vx-ae", char: 'ㅐ', pic: images['vx_ae.png'] },
    { id: "vx-uh", char: 'ㅓ', pic: images['vx_uh.png'] },
    { id: "vx-eh", char: 'ㅔ', pic: images['vx_eh.png'] },
    { id: "vx-ee", char: 'ㅣ', pic: images['vx_ee.png'] },
], LASTS = [
    { id: "lc-g", char: 'ㄱ', pic: images['lc_g.png'] },
    { id: "lc-n", char: 'ㄴ', pic: images['lc_n.png'] },
    { id: "lc-d", char: 'ㄷ', pic: images['lc_d.png'] },
    { id: "lc-l", char: 'ㄹ', pic: images['lc_l.png'] },
    { id: "lc-m", char: 'ㅁ', pic: images['lc_m.png'] },
    { id: "lc-b", char: 'ㅂ', pic: images['lc_b.png'] },
    { id: "lc-s", char: 'ㅅ', pic: images['lc_s.png'] },
    { id: "lc-ng", char: 'ㅇ', pic: images['lc_ng.png'] },
    { id: "lc-j", char: 'ㅈ', pic: images['lc_j.png'] },
    { id: "lc-ch", char: 'ㅊ', pic: images['lc_ch.png'] },
    { id: "lc-k", char: 'ㅋ', pic: images['lc_k.png'] },
    { id: "lc-t", char: 'ㅌ', pic: images['lc_t.png'] },
    { id: "lc-p", char: 'ㅍ', pic: images['lc_p.png'] },
    { id: "lc-h", char: 'ㅎ', pic: images['lc_h.png'] },
], LAST_EXTRAS = [
    { id: "lxc-g", char: 'ㄱ', pic: images['lxc_g.png'] },
    { id: "lxc-s", char: 'ㅅ', pic: images['lxc_s.png'] },
    { id: "lxc-j", char: 'ㅈ', pic: images['lxc_j.png'] },
    { id: "lxc-h", char: 'ㅎ', pic: images['lxc_h.png'] },
    { id: "lxc-m", char: 'ㅁ', pic: images['lxc_m.png'] },
    { id: "lxc-b", char: 'ㅂ', pic: images['lxc_b.png'] },
    { id: "lxc-t", char: 'ㅌ', pic: images['lxc_t.png'] },
    { id: "lxc-p", char: 'ㅍ', pic: images['lxc_p.png'] },
];

const DESCRIPTIONS = new Map([
    ['ㄱ', ['-g-', "Good, Great"]],
    ['ㄴ', ['-n-', "Nice, Fun"]],
    ['ㄷ', ['-d-', "Dog, Dark"]],
    ['ㄹ', ['-l-', "Live, Mall"]],
    ['ㅁ', ['-m-', "Marry, Program"]],
    ['ㅂ', ['-b-', "Brake, Body"]],
    ['ㅅ', ['-s-', "Snake, Sauce"]],
    ['ㅇ', ['No sound (placed on top), -ng (placed on bottom)', "Long"]],
    ['ㅈ', ['-j-', "Jelly, Jittery"]],
    ['ㅊ', ['-ch-', "Chocolate, Chill"]],
    ['ㅋ', ['-k-', "King, Kong"]],
    ['ㅌ', ['-t-', "Tooth, Tall"]],
    ['ㅍ', ['-p-', "Pillow, Present"]],
    ['ㅏ', ['ah', "???"]],
    ['ㅐ', ['ae', "Jam, Stamp, Dance (mostly pronounced as -eh)"]],
    ['ㅑ', ['yah', "???"]],
    ['ㅒ', ['yae', "???"]],
    ['ㅓ', ['uh', "Done, Run, Sun"]],
    ['ㅔ', ['eh', "Bed, Sled, Head"]],
    ['ㅕ', ['yuh', "Young"]],
    ['ㅖ', ['yeh', "Yes"]],
    ['ㅗ', ['o', "Gold, Sold, Foretold"]],
    ['ㅛ', ['yo', "Yo-yo"]],
    ['ㅜ', ['u', "Stew", "Cool", "Moon"]],
    ['ㅠ', ['yu', "You"]],
    ['ㅡ', ['eu', "Stood, Could, Would"]],
    ['ㅣ', ['ee', "Cheese, Peel, Steal"]]
]);

function PropertyPanel() {
    // get letter from letter component's hover state, and
    // show it on the helper component
    const [dataFromChild, setDataFromChild] = useState("");
    
    // display slider when a certain vowel or consonant is chosen
    // ... after the letter is dropped onto the board
    const [slider, setSlider] = useState(false);
    const showSlider = (() => setSlider((state) => !state));
    const [next, setNext] = useState(0);
    const toggleNext = (() => setNext(next + 1));
    const togglePrev = (() => setNext(next - 1));

    // all images, separated by main or extra letters
    const [step, setStep] = useState(0);
    const upgradeToNextLetters = (() => setStep((step + 1) % 4));

    // get all images by its designated step
    function getImages(step) {
        let lib, exr;
        switch (step) {
            case 0:
                lib = FIRSTS; exr = FIRST_EXTRAS; break;
            case 1:
                lib = VOWELS; exr = VOWEL_EXTRAS; break;
            case 2:
                lib = LASTS; exr = LAST_EXTRAS; break;
            default: return [];
        }
        let present = [], slider = [];
        lib.forEach(({ id, char, pic }) => {
            present.push(
                <Letter className="letter mainLetter" 
                    id={id} char={char} pic={pic} />
            )
        });
        exr.forEach(({ id, char, pic }, i) => {
            slider.push(
                <Letter className="letter extraLetter"
                    count={i} id={id} char={char} pic={pic}
                    toggleState={() => setDataFromChild(char)} />
            )
        });
        return [present, slider];
    }

    function updateHelperTool(data) {
        const descAttrs = (data) ? 
            DESCRIPTIONS.get(data) : [null, null];
        return (
            <div className="assist helper">
                <div className="flex">
                    <div>
                        <HelperBoard className="board sideBoard">
                            {descAttrs[0]}
                        </HelperBoard>
                    </div>
                    <div className="assistant-text">
                        <b>{descAttrs[0]}</b>
                        <p>{descAttrs[1]}</p>
                    </div>
                </div>
            </div>
        );
    }

    // array of pictures and descriptions for data
    const [mainImages, extraImages] = getImages(step);
    const helpData = updateHelperTool(dataFromChild);

    // panelProperty is for letters 
    // interact-panel is for board, controls, and help components.
    return (
        <>
            <div className="panelProperty">
                <span className="explain-before">
                    Click on a letter to insert to the canvas
                </span>
                <div className="main-letter-box">
                    {(step < 3) ? mainImages : <b>You've finished!</b>}
                </div>
                <div className="extra-letter-box flex">
                    {
                        slider &&
                        <>
                            <button className="slider-button" onClick={togglePrev}
                                style={{ fontWeight: 'bold' }}>{"<"}</button>
                            <Slider className="slider flex">
                                {extraImages}
                            </Slider>
                            <button className="slider-button" onClick={toggleNext}
                                style={{ fontWeight: 'bold' }}>{">"}</button>
                        </>
                    }
                </div>
                <CustomButton
                    className="customButton panelButton" onClick={upgradeToNextLetters}
                >
                    {(step === 3) ? "START OVER" : (step > 1) ? "FINISH" : "NEXT"}
                </CustomButton>
                <div>
                    {helpData || dataFromChild}
                </div>
                <span>
                    TEST: {dataFromChild}
                </span>
            </div>

            <div className="stack interact-panel">
                <div>
                    <p className="explain-before board-show">CANVAS</p>
                    <Board className="board mainBoard">A</Board>
                </div>
                <div className="iconDiv flex">
                    <PropertyModal className="modalProperty" id="dictionary" icon={
                        <i className="large material-icons">book</i>
                    } />
                    <PropertyModal className="modalProperty" id="sound" icon={
                        <i className="large material-icons">volume_up</i>
                    } />
                </div>
                <CustomControls className="assist controlpanel" />
            </div>
        </>
    );
}

// for Letter
function Letter(props) {
    const {
        id, char, pic, className,
        recvDataFromChild, count = null
    } = props;

    // for handling hover states on Letters AND add styles
    const [opacity, setOpacity] = useState("1.0");
    const [showData, setShow] = useState(false);
    const styles = {
        width: 'fit-content',
        height: 'fit-content',
        userSelect: 'none',
        opacity: opacity
    }

    // ... to return letter data to parent component after hover state
    const handleHover = (() => {
        setOpacity('0.8');
        setShow(true);
        recvDataFromChild("high");
    }), exitHover = (() => {
        setOpacity('1.0');
        setShow(false);
        recvDataFromChild("low");
    });

    // for 'show', connect to the helper component to show data there
    return (
        <div className={className} style={styles}
            onMouseOver={handleHover} onMouseLeave={exitHover}
        >
            <img count={count} id={id} src={pic}
                alt={"Representation of " + char} />
            {
                showData &&
                <b>Showing: {char}</b>
            }
        </div>
    );
}

function Board(props) {
    const { className, children } = props;
    const localStyles = {
        textAlign: 'center',
        fontSize: (className === "board sideBoard") ?
            '48px' : (className === "board mainBoard") ?
            '200px' : '16px'
    };

    return (
        <div className={className}>
            <div className="board-text"
                style={localStyles}
            >
                {children}
            </div>
        </div>
    );
}

export default PropertyPanel;