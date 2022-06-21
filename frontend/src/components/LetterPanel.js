import React, { useState } from 'react';
import "../main.css";
import LetterHolder from "./LetterHolder";
import CustomButton from "./CustomButton";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// first consonant images
import fc_g from "../images/fc_g.png";
import fc_n from "../images/fc_n.png";
import fc_d from "../images/fc_d.png";
import fc_l from "../images/fc_l.png";
import fc_m from "../images/fc_m.png";
import fc_b from "../images/fc_b.png";
import fc_s from "../images/fc_s.png";
import fc_x from "../images/fc_x.png";
import fc_j from "../images/fc_j.png";
import fc_ch from "../images/fc_ch.png";
import fc_k from "../images/fc_k.png";
import fc_t from "../images/fc_t.png";
import fc_p from "../images/fc_p.png";
import fc_h from "../images/fc_h.png";

// first consonant extras
import fxc_g from "../images/fxc_g.png";
import fxc_d from "../images/fxc_d.png";
import fxc_b from "../images/fxc_b.png";
import fxc_s from "../images/fxc_s.png";
import fxc_j from "../images/fxc_j.png";

// last consonant images
import lc_g from "../images/lc_g.png";
import lc_n from "../images/lc_n.png";
import lc_d from "../images/lc_d.png";
import lc_l from "../images/lc_l.png";
import lc_m from "../images/lc_m.png";
import lc_b from "../images/lc_b.png";
import lc_s from "../images/lc_s.png";
import lc_ng from "../images/lc_ng.png";
import lc_j from "../images/lc_j.png";
import lc_ch from "../images/lc_ch.png";
import lc_k from "../images/lc_k.png";
import lc_t from "../images/lc_t.png";
import lc_p from "../images/lc_p.png";
import lc_h from "../images/lc_h.png";

// last consonant extras
import lxc_g from "../images/lxc_g.png";
import lxc_s from "../images/lxc_s.png";
import lxc_j from "../images/lxc_j.png";
import lxc_h from "../images/lxc_h.png";
import lxc_m from "../images/lxc_m.png";
import lxc_b from "../images/lxc_b.png";
import lxc_t from "../images/lxc_t.png";
import lxc_p from "../images/lxc_p.png";

// vowel images
import v_ah from "../images/v_ah.png";
import v_ae from "../images/v_ae.png";
import v_yah from "../images/v_yah.png";
import v_yae from "../images/v_yae.png";
import v_uh from "../images/v_uh.png";
import v_eh from "../images/v_eh.png";
import v_yuh from "../images/v_yuh.png";
import v_yeh from "../images/v_yeh.png";
import v_o from "../images/v_o.png";
import v_yo from "../images/v_yo.png";
import v_u from "../images/v_u.png";
import v_yu from "../images/v_yu.png";
import v_eu from "../images/v_eu.png";
import v_ee from "../images/v_ee.png";

// vowel extras
import vx_ah from "../images/vx_ah.png";
import vx_ae from "../images/vx_ae.png";
import vx_ee from "../images/vx_ee.png";
import vx_uh from "../images/vx_uh.png";
import vx_eh from "../images/vx_eh.png";

// library
// a better solution will come later
const FC_IMG = [
    fc_g, fc_n, fc_d, fc_l, fc_m, fc_b, fc_s, fc_x,
    fc_j, fc_ch, fc_k, fc_t, fc_p, fc_h
], FC_ID = [
    'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ',
    'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
], FXC_IMG = [
    fxc_g, fxc_d, fxc_b, fxc_s, fxc_j
], FXC_ID = [
    'ㄱ', 'ㄷ', 'ㅂ', 'ㅅ', 'ㅈ'
], LC_IMG = [
    lc_g, lc_n, lc_d, lc_l, lc_m, lc_b, lc_s, lc_ng,
    lc_j, lc_ch, lc_k, lc_t, lc_p, lc_h
];

const LC_ID = [].concat(FC_ID);

const LXC_IMG = [
    lxc_g, lxc_s, lxc_j, lxc_h, lxc_m,
    lxc_b, lxc_t, lxc_p
], LXC_ID = [
    'ㄱ', 'ㅅ', 'ㅈ', 'ㅎ', 'ㅁ', 'ㅂ', 'ㅌ', 'ㅍ'
], V_IMG = [
    v_ah, v_ae, v_yah, v_yae, v_uh, v_eh, v_yuh, v_yeh,
    v_o, v_yo, v_u, v_yu, v_eu, v_ee
], V_ID = [
    'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ',
    'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'
], VX_IMG = [
    vx_ah, vx_ae, vx_ee, vx_uh, vx_eh
], VX_ID = [
    'ㅏ', 'ㅐ', 'ㅣ', 'ㅓ', 'ㅔ'
];

// assertions
var assert = require("assert");
var arrEqual = FC_IMG.length !== FC_ID.length || LC_IMG.length !== LC_ID.length || V_IMG.length !== V_ID.length ||
    FXC_IMG.length !== FXC_ID.length || VX_IMG.length !== VX_ID.length || LXC_IMG.length !== LXC_ID.length;
if (arrEqual) {
    window.alert("ERROR: Images not loading, try again.");
    assert(arrEqual);
}

//other
const FORMAT_WIDTH = 3;

// now, back to the main part of the app
function getImages(step) {
    let arr = [];
    let imgArr, idArr;
    switch (step) {
        case 0:
            imgArr = FC_IMG;
            idArr = FC_ID;
            break;
        case 1:
            imgArr = V_IMG;
            idArr = V_ID;
            break;
        case 2:
            imgArr = LC_IMG;
            idArr = LC_ID;
            break;
        default:
            return arr;
    }
    imgArr.forEach((new_img, index) => {
        let new_id = idArr[index];
        arr.push(
            <>
                {(index % FORMAT_WIDTH === 0) ? <br /> : null}
                <LetterHolder id={new_id} className="letterHolder"
                    src={new_img} />
            </>
        );
    })
    return arr;
}

export default function LetterPanel() {
    const [step, setStep] = useState(0);
    const upgradeToNextLetters = () => setStep((step + 1) % 4);
    return (
        <div>
            {(step < 3) ?
                getImages(step) :
                <div><b>You've finished!</b></div>
            }<br />
            <CustomButton
                className="customButton panelButton"
                onClick={upgradeToNextLetters}
            >
                {(step === 3) ? "START OVER" : (step > 1) ? "FINISH" : "NEXT"}
            </CustomButton>
        </div>
    );
}