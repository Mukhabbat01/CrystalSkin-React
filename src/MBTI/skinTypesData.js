import mbti from '../img/mbti.png'
import OSTP from '../img/OSPT.png'
import OSPW from '../img/OSPW.png'
import ORPT from '../img/ORPT.png'

import DSPW from '../img/DSPW.png'
import DSNT from '../img/DSNT.png'
import DRPW from '../img/DRPW.png'
import OSNW from '../img/OSNW.png'
import ORPW from '../img/ORPW.png'
import DSPT from '../img/DSPT.png'
import DRPT from '../img/DRPT.png'
import OSNT from '../img/OSNT.png'
import ORNT from '../img/ORNT.png'
import ORNW from '../img/ORNW.png'

import DSNW from '../img/DSNW.png'
import DRNT from '../img/DRNT.png'
import DRNW from '../img/DRNW.png'



const skinTypesData = {
  OSPT: {
    // title: 'OSPT ',
    description: 'OSPT 유형은 지성 피부이며, 민감하고 색소 침착과 주름이 없는 피부입니다.',
    image: OSTP
  },
  OSPW: {
    // title: 'OSPW ',
    description: 'OSPW 유형은 지성 피부이며, 민감하고 색소 침착이 있으나 주름이 있는 피부입니다.',
    image: OSPW
  },


  ORPT: {
    // title: 'ORPT ',
    description: 'ORPT 유형은 지성 피부이며, 내성이 강하고 색소 침착과 주름이 없는 피부입니다.',
    image: ORPT
  },
  DSPW: {
    // title: 'DSPW ',
    description: 'DSPW 유형은 건성 피부이며, 민감하고 색소 침착이 있으나 주름이 있는 피부입니다.',
    image: DSPW
  },
  DSNT: {
    // title: 'DSNT ',
    description: 'DSNT 유형은 건성 피부이며, 민감하지만 색소 침착이 없고 주름이 없는 피부입니다.',
    image: DSNT
  },
  DRPW: {
    // title: 'DRPW ',
    description: 'DRPW 유형은 건성 피부이며, 내성이 강하고 색소 침착이 있으나 주름이 있는 피부입니다.',
    image: DRPW
  },

OSNW: {
    // title: 'OSNW ',
    description: 'OSNW 유형은 지성 피부이며, 민감하지만 색소 침착과 주름이 없는 피부입니다.',
    image: OSNW
  },
  
  ORPW: {
    // title: 'ORPW ',
    description: 'ORPW 유형은 지성 피부이며, 내성이 강하고 색소 침착이 있으나 주름이 있는 피부입니다.',
    image: ORPW
  },


  MBTI:{
    title: '바우만의 피부 타입 테스트란?',
    description: '바우만의 피부 타입 테스트는 피부의 수화의 정도에 따라 지성(Oily)과 건성(Dry), \n 민감성의 정도에 따라 민감성(Sensitive)과 저항성 (Resistant), \n 색소침착의 정도에 따라 색소성(Pigmented)과 비색소성(Non-Pign ented), \n 주름의 정도에 따라 주름진 피부(Wrinkled)와 탱탱한 피부(Tight)로 \n 나누어 각각의 이니셜을 조합하여 피부 타입을 총 16가지로 분류한다.',
    image:mbti

  },
  DSPT: {
    // title: 'DSPT ',
    description: 'DSPT 유형은 건성 피부이며, 민감하고 색소 침착과 주름이 없는 피부입니다.',
    image: DSPT
  },

  DRPT: {
    // title: 'DRPT ',
    description: 'DRPT 유형은 건성 피부이며, 내성이 강하고 색소 침착과 주름이 없는 피부입니다.',
    image: DRPT
  },

  OSNT: {
    // title: 'OSNT ',
    description: 'OSNT 유형은 지성 피부이며, 민감하지만 색소 침착이 없고 주름이 없는 피부입니다.',
    image: OSNT
  },
  ORNT: {
    // title: 'ORNT ',
    description: 'ORNT 유형은 지성 피부이며, 내성이 강하고 색소 침착이 없으며 주름이 없는 피부입니다.',
    image: ORNT
  },
  ORNW: {
    // title: 'ORNW ',
    description: 'ORNW 유형은 지성 피부이며, 내성이 강하고 색소 침착과 주름이 있는 피부입니다.',
    image: ORNW
  },
 

 
  
  DSNW: {
    // title: 'DSNW - 건성, 민감성, 무색소 침착, 주름',
    description: 'DSNW 유형은 건성 피부이며, 민감하지만 색소 침착과 주름이 있는 피부입니다.',
    image: DSNW
  },
  DRNT: {
    // title: 'DRNT - 건성, 내성성, 무색소 침착, 주름',
    description: 'DRNT 유형은 건성 피부이며, 내성이 강하고 색소 침착이 없으며 주름이 없는 피부입니다.',
    image: DRNT
  },
  DRNW: {
    // title: 'DRNW - 건성, 내성성, 무색소 침착, 주름 없음',
    description: 'DRNW 유형은 건성 피부이며, 내성이 강하고 색소 침착과 주름이 있는 피부입니다.',
    image: DRNW
  },

};

export default skinTypesData;

  