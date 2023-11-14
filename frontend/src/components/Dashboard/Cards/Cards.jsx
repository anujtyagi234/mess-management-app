import React from 'react';
import './Cards.css';
import Card from '../Card/Card'
import abc from './img.png'

function Cards() {
  const CardsData = [
    {
      title: 'Menu',
      color:{
        background: 'aqua',
        boxShadow: '10px 10px 20px 0px #cf7d87',
      },
      barvalue: 75,
     value: 1234,
     png :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmj8SbIkf15HKJQ47D2pFPHf_47u3DGLRNhw&usqp=CAU",
      series: [
        {
          name: 'Sales',
          data: [32, 45, 56, 73, 100, 109],
        },
      ],
    },


    {
      title: 'Menu',
      color:{
        background: 'rgb(12, 224, 136)',
        boxShadow: '10px 10px 20px 0px #cf7d87',
      },
      barvalue: 75,
     value: 1234,
     png :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmj8SbIkf15HKJQ47D2pFPHf_47u3DGLRNhw&usqp=CAU",
      series: [
        {
          name: 'Sales',
          data: [32, 45, 56, 73, 100, 109],
        },
      ],
    },





    {
      title: 'Profit',
      color: {
        background: 'red',
        boxShadow: '10px 10px 20px 0px #cf7d87',
      },
      barvalue: 70,
      value: 7,
     png :abc,
      series: [
        {
          name: 'middle',
          data: [32, 45, 56, 73, 100, 109],
        },
      ],
    },
    {
 title: 'Profit',
      color: {
        background: 'green',
        boxShadow: '10px 10px 20px 0px #cf7d87',
      },
      barvalue: 80,
     value: 125,
     png :abc,
      series: [
        {
          name: 'cdf',
          data: [32, 45, 56, 73, 100, 109],
        },
      ],
    },
    {
      title: 'Profit',
           color: {
             background: 'grey',
             boxShadow: '10px 10px 20px 0px #cf7d87',
           },
           barvalue: 80,
          value: 125,
          png :abc,
           series: [
             {
               name: 'cdf',
               data: [32, 45, 56, 73, 100, 109],
             },
           ],
         },



         {
          title: 'Profit',
               color: {
                 background: 'yellow',
                 boxShadow: '10px 10px 20px 0px #cf7d87',
                 border: '2px solid #000',  // Border added
                 borderWidth: '0.2rem', 

               },
               barvalue: 80,
              value: 125,
              png :abc,
               series: [
                 {
                   name: 'cdf',
                   data: [32, 45, 56, 73, 100, 109],
                 },
               ],
             },
  ];

  return (
    // <div className='Cards'>
    <div class="grid-container">
      {CardsData.map((card, id) => {
        return (
          <div key={id} className='parentcontainer'>
            <Card
              title={card.title}
              color={card.color}
              barvalue={card.barvalue}
              png={card.png}
              series={card.series}
              value = {card.value}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;

