import React from 'react';
import LetterHolder from "./LetterHolder";
import "../main.css";

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

// last consonant images
// TBA

// vowel images
// TBA

// a default image, just in case
//import def from "../images/def.png";

// now, back to the main part of the app
var assert = require('assert');
const FC_IMG = [
    fc_g, fc_n, fc_d, fc_l, fc_m, fc_b, fc_s, fc_x,
    fc_j, fc_ch, fc_k, fc_t, fc_p, fc_h
];
const FC_ID = [
    'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ',
    'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];
const LC_IMG = [];
const LC_ID = [];
const V_IMG = [];
const V_ID = [];

// assertions, make sure image URL's corresponds to ID of a vowel or consonant.
if (
    FC_IMG.length !== FC_ID.length ||
    LC_IMG.length !== LC_ID.length ||
    V_IMG.length !== V_ID.length
) {
    window.alert("ERROR: Images not loading, try again.");
    assert(
        FC_IMG.length !== FC_ID.length ||
        LC_IMG.length !== LC_ID.length ||
        V_IMG.length !== V_ID.length,
        "ERROR: Images not loading, try again."
    );
}

function getImages(imgArr, idArr) {
    let arr = [];
    imgArr.forEach((new_img, index) => {
        let new_id = idArr[index];
        arr.push(
            <>
                <LetterHolder id={new_id} className="letterHolder"
                src={new_img}/><br/>
            </>
        );
    })
    return arr;
}

export default function LetterPanel() {
    return (
        <div>
            {getImages(FC_IMG, FC_ID)}
        </div>
    );
}