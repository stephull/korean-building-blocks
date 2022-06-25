import React from 'react';
import "../main.css";
import HelperBoard from "./HelperBoard";

const DESCRPTIONS = new Map([
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
  ['ㅜ', ['u'], "Stew", "Cool", "Moon"],
  ['ㅠ', ['yu'], "You"],
  ['ㅡ', ['eu'], "Stood, Could, Would"],
  ['ㅣ', ['ee'], "Cheese, Peel, Steal"]
]);

export default function Helper(props) {
  const { children } = props;
  const descAttributes = DESCRPTIONS.get(children);
  return (
    <div
      className={props.className}
    >
      <div className="flex">
        <div>
          <HelperBoard className="board sideBoard">
            {children}
          </HelperBoard>
        </div>
        <div className="assistant-text">
          <b>{descAttributes[0]}</b>
          <p>{descAttributes[1]}</p>
        </div>
      </div>
    </div>
  );
}