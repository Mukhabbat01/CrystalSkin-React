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
    description: '피지-염증-색소침착의 악순환이 반복되고 검은 점이 더 오래 남아 있는 피부입니다',
    image: OSTP
  },
  OSPW: {
    // title: 'OSPW ',
    description: '다양한 피부트러블과 함께 색소침착, 노화까지 겪고있는 총체적 난국의 피부입니다.',
    image: OSPW
  },


  ORPT: {
    // title: 'ORPT ',
    description: '자외선으로 주근깨와 검은 반점이 쉽게 생겨 고민이지만 장점이 훨씬 많은 피부입니다.',
    image: ORPT
  },
  DSPW: {
    // title: 'DSPW ',
    description: '피부가 매우 민감하고 얇아 쉽게 반응을 보이며, 모든 종류의 문제를 보일 수 있는 피부입니다.',
    image: DSPW
  },
  DSNT: {
    // title: 'DSNT ',
    description: '사막에 있는 것처럼 심한 건조함과 화끈거림을 느끼며 각질과 붉은 기를 보이는 피부입니다.',
    image: DSNT
  },
  DRPW: {
    // title: 'DRPW ',
    description: '과거 피부에 문제가 없어 방치하였으나, 지금은 검은 반점과 주름을 가진 피부입니다.',
    image: DRPW
  },

OSNW: {
    // title: 'OSNW ',
    description: '잘 익은 바닷가재처럼 햇빛에 쉽게 붉어지고 번들거리며 종종 여드름이 보이는 피부입니다.',
    image: OSNW
  },
  
  ORPW: {
    // title: 'ORPW ',
    description: '민감성 피부의 흔적으로 매일 아침마다 넓은 모공과 주름, 반점을 마주하는 피부입니다.',
    image: ORPW
  },


  MBTI:{
    title: '바우만의 피부 타입 테스트란?',
    description: '바우만의 피부 타입 테스트는 피부의 수화의 정도에 따라 지성(Oily)과 건성(Dry), \n 민감성의 정도에 따라 민감성(Sensitive)과 저항성 (Resistant), \n 색소침착의 정도에 따라 색소성(Pigmented)과 비색소성(Non-Pign ented), \n 주름의 정도에 따라 주름진 피부(Wrinkled)와 탱탱한 피부(Tight)로 \n 나누어 각각의 이니셜을 조합하여 피부 타입을 총 16가지로 분류한다.',
    image:mbti

  },
  DSPT: {
    // title: 'DSPT ',
    description: '수많은 민감 증상으로 매순간 고통을 받으며, 특히 습진, 각질, 색소침착 등을 겪는 피부입니다.',
    image: DSPT
  },

  DRPT: {
    // title: 'DRPT ',
    description: '자외선으로 기미, 검은 반점이 나타나기 쉽지만 아름답게 관리할 수 있는 피부입니다.',
    image: DRPT
  },

  OSNT: {
    // title: 'OSNT ',
    description: '감정 변화나 다양한 자극으로 쉽게 얼굴이 붉어지고 곳곳에 여드름이 보이는 피부입니다.',
    image: OSNT
  },
  ORNT: {
    // title: 'ORNT ',
    description: '번들거림은 있으나, 어느 것 하나 흠 잡을 곳 없이 광채가 나는 피부입니다.',
    image: ORNT
  },
  ORNW: {
    // title: 'ORNW ',
    description: '피부 트러블이 없어 피부에 관심이 적으나, 주름과 노화가 눈에 띄는 피부입니다.',
    image: ORNW
  },
 

 
  
  DSNW: {
    // title: 'DSNW - 건성, 민감성, 무색소 침착, 주름',
    description: '하루마다 피부 상태가 급변하고 가려움, 따가움, 홍조 등과 함께 주름이 보이는 피부입니다.',
    image: DSNW
  },
  DRNT: {
    // title: 'DRNT - 건성, 내성성, 무색소 침착, 주름',
    description: '피부 복권에 당첨된 것처럼 피부 결이 좋고 깨끗한 피부입니다.',
    image: DRNT
  },
  DRNW: {
    // title: 'DRNW - 건성, 내성성, 무색소 침착, 주름 없음',
    description: '젊었을 때 좋은 피부를 유지하지만, 건조함과 함께 빠른 노화를 겪는 피부입니다.',
    image: DRNW
  },

};

export default skinTypesData;

  