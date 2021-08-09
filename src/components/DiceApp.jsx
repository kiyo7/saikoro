import React, { useState } from 'react';

//components
import { Title } from './Title';
import { Dice } from './Dice';
import { Button } from './Button';

//サイコロ画像
import dice1 from '../img/1.png';
import dice2 from '../img/2.png';
import dice3 from '../img/3.png';
import dice4 from '../img/4.png';
import dice5 from '../img/5.png';
import dice6 from '../img/6.png';

const saikoro = [dice1, dice2, dice3, dice4, dice5, dice6];

let timer;

export const DiceApp = () => {
  const [randomDice1, setRandomDice1] = useState(saikoro[0]);
  const [randomDice2, setRandomDice2] = useState(saikoro[0]);
  const [randomDice3, setRandomDice3] = useState(saikoro[0]);

  //サイコロシャッフル
  const shuffleDice = () => {
    setRandomDice1(saikoro[Math.floor(Math.random() * 6)]);
    setRandomDice2(saikoro[Math.floor(Math.random() * 6)]);
    setRandomDice3(saikoro[Math.floor(Math.random() * 6)]);
  };

  //サイコロシャッフル2秒後停止
  const gameStart = () => {
    clearInterval(timer);
    timer = setInterval(shuffleDice, 100);
    setTimeout(() => {
      clearInterval(timer);
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: 'green', height: '300px' }}>
      <Title />
      <div style={{ textAlign: 'center' }}>
        <Dice dice={randomDice1} />
        <Dice dice={randomDice2} />
        <Dice dice={randomDice3} />
      </div>
      <Button gameStart={gameStart} />
    </div>
  );
};
