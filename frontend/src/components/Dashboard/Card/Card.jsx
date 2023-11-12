
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts'
import './Card.css'
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  

  const springProps = useSpring({
    height: expanded ? '300px' : '150px',
  });

  return (
    <animated.div className="Card" style={springProps} onClick={handleExpand}>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={()=>setExpanded(false)} />
      ) : (
        <CompactCard param={props}  setExpanded={()=>
            setExpanded(!expanded)
        }/>
      )}
    </animated.div>
  );
};

// Compact card
const CompactCard = ({ param,setExpanded }) => {
  const png = param.png;
  return (
    <div
     className="CompactCard"
    style={{backgroundColor:param.color. background,
    boxShadow:param.color.boxShadow,
}}
onClick={setExpanded}
    >
      <div className="radialBar">
        < CircularProgressbar
        value ={param.barvalue}
        text = {`${param.barvalue}%`}
        />
        <span>{param.title}</span>
        </div>
      <div className="details">
       <img src={param.png} alt="" style={{height:'2rem', marginTop:"1rem", 
    borderRadius:"3rem "}} />
        <span>${param.value}</span>
        <span>Last One days</span>
      </div>
    </div>
  );
};



const data={
    options:{

charts:{
    type:"area",
height:"auto",

},



toolbar: {
    tools: {
      download: true, // this enables the download option
      selection: false,
      zoom: false,
      zoomin: false,
      zoomout: false,
      pan: false,
      reset: false,
      customIcons: [],
    },
    autoSelected: 'download',
  },


dropShadow:{
    enabled:false,
    enabledOnSeries:undefined,
    top:0,
    left:0,
    blur:3,
    color:"red",
    opacity:0.35,
},
fill:{
    colors:["#fff"],
    type:"gradient",
},
dataLables:{
    enabled:false,
},
stroke:{
curve:"smooth",
colors:["white"],
},
tooltip:{
    x:{
        format:"dd/MM/yy HH:mm",
    },

},
grid:{
show:true,
},
xaxis:{
    type:"datetime",
    categories:[
"2018-09-19T00:00:00.000Z",
"2018-09-19T01:30:00.000Z",
"2018-09-19T02:30:00.000Z",
"2018-09-19T03:30:00.000Z",
"2018-09-19T04:30:00.000Z",
"2018-09-19T05:30:00.000Z",
"2018-09-19T06:30:00.000Z",

    ],
},



    },
};

function ExpandedCard ({param,setExpanded}){
    return(
        <div className="ExpandedCard"
        style={{backgroundColor:param.color. background,
            boxShadow:param.color.boxShadow,
        }}
        >
<div>
  <img src="https://p7.hiclipart.com/preview/278/860/927/check-mark-cross-red-tick-cross.jpg" alt=""  style={{height:"1.5rem",borderRadius:"2rem"}} onClick={setExpanded}/>
</div>
<span>{param.title}</span>
<div className="chartcontainer">
   <Chart series ={param.series} type='area' options={data.options}/>
</div>
   <span>Last one days</span>

        </div>
    )
}

export default Card;

