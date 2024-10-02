// BACKGROUND IMAGES
import bgWater from '../Assets/Images/water.jpg'
import bgGas from '../Assets/Images/gas.jpg'
import bgFire from '../Assets/Images/fire.jpg'
import bgPlant from '../Assets/Images/plant.jpg'
import bgCable from '../Assets/Images/cable.jpg'
import bgCivil from '../Assets/Images/civil.jpg'

// LINK IMAGES
import waterSmall from '../Assets/Images/waterSmall.jpg'
import gasSmall from '../Assets/Images/gasSmall.jpeg'
import fireSmall from '../Assets/Images/fireSmall.jpg'
import plantSmall from '../Assets/Images/plantSmall.jpg'
import cableSmall from '../Assets/Images/cableSmall.jpg'
import civilSmall from '../Assets/Images/civilSmall.jpg'

// ICONS
import waterIcon from '../Assets/Images/waterIcon.png'
import gasIcon from '../Assets/Images/gasIcon.png'
import fireIcon from '../Assets/Images/fireIcon.png'
import plantIcon from '../Assets/Images/plantIcon.png'
import cableIcon from '../Assets/Images/cableIcon.png'
import civilIcon from '../Assets/Images/civilIcon.png'



let para = <>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Quae, similique ipsam provident quos illum praesentium culpa, 
    rem delectus cum aliquid veritatis? 
    <br />
    <br />
    Nobis ratione ipsum iusto expedita nostrum, dicta rem! Nam.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Quae, similique ipsam provident quos illum praesentium culpa, 
    rem delectus cum aliquid veritatis? 
    <br />
    <br />
    Nobis ratione ipsum iusto expedita nostrum, dicta rem! Nam.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Quae, similique ipsam provident quos illum praesentium culpa, 
    rem delectus cum aliquid veritatis? 
    Nobis ratione ipsum iusto expedita nostrum, dicta rem! Nam.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    <br />
    <br />
    Quae, similique ipsam provident quos illum praesentium culpa, 
    rem delectus cum aliquid veritatis? 
    Nobis ratione ipsum iusto expedita nostrum, dicta rem! Nam.
    Lorem ipsum dolor sit. 
</>

const ServicesData =  [ 

    { // service-01 
        id        :  "service-01", 
        image     :  waterSmall, 
        icon      :  waterIcon,
        txt       :  "Water pipelines", 
        pagePath  :  "/ServicesPage",   
        serviceData: {
            bgImg: bgWater,
            icon :  waterIcon,
            title  : "Water pipelines", 
            subTitle  : "Lorem ipsum dolor sit amet. Harum nulla non corrupti id itaque aliquam illum cum quibusdam labore cumque.",  
            paragraph  : para, 
            points: {
                point_1: "Dolor sit amet consectetur",
                point_2: "Lorem ipsum, dolor sit amet",
                point_3: "Similique ipsam provident quos",
                point_4: "Consectetur adipisicing elit",
                point_5: "Dolor sit amet consectetur",
                point_6: "Lorem ipsum, dolor sit amet",
                point_7: "Similique ipsam provident quos",
                point_8: "Consectetur adipisicing elit",
                point_9: "Dolor sit amet consectetur",
                point_10: "Lorem ipsum, dolor sit amet",
                point_11: "Similique ipsam provident quos",
                point_12: "Consectetur adipisicing elit",
            },
        },
    },


    { // service-02 
        id        :  "service-02", 
        image     :  gasSmall , 
        icon      :  gasIcon,
        txt       :  "Gas pipelines", 
        pagePath  :  "/ServicesPage",
        serviceData: {
            bgImg: bgGas,
            icon :  gasIcon,
            title  : "Gas pipelines", 
            subTitle  : "Lorem ipsum dolor sit amet. Harum nulla non corrupti id itaque aliquam illum cum quibusdam labore cumque.",  
            paragraph  : para, 
            points: {
                point_1: "Dolor sit amet consectetur",
                point_2: "Lorem ipsum, dolor sit amet",
                point_3: "Similique ipsam provident quos",
                point_4: "Consectetur adipisicing elit",
                point_5: "Dolor sit amet consectetur",
                point_6: "Lorem ipsum, dolor sit amet",
                point_7: "Similique ipsam provident quos",
                point_8: "Consectetur adipisicing elit",
                point_9: "Dolor sit amet consectetur",
                point_10: "Lorem ipsum, dolor sit amet",
                point_11: "Similique ipsam provident quos",
                point_12: "Consectetur adipisicing elit",
            },
        },
    },


    { // service-03 
        id        :  "service-03", 
        image     :  fireSmall , 
        icon      :  fireIcon,
        txt       :  "Warmth pipelines", 
        pagePath  :  "/ServicesPage",
        serviceData: {
            bgImg: bgFire,
            icon :  fireIcon,
            title  : "Warmth pipelines", 
            subTitle  : "Lorem ipsum dolor sit amet. Harum nulla non corrupti id itaque aliquam illum cum quibusdam labore cumque.",  
            paragraph  : para, 
            points: {
                point_1: "Dolor sit amet consectetur",
                point_2: "Lorem ipsum, dolor sit amet",
                point_3: "Similique ipsam provident quos",
                point_4: "Consectetur adipisicing elit",
                point_5: "Dolor sit amet consectetur",
                point_6: "Lorem ipsum, dolor sit amet",
                point_7: "Similique ipsam provident quos",
                point_8: "Consectetur adipisicing elit",
                point_9: "Dolor sit amet consectetur",
                point_10: "Lorem ipsum, dolor sit amet",
                point_11: "Similique ipsam provident quos",
                point_12: "Consectetur adipisicing elit",
            },
        },
    },


    { // service-04 
        id        :  "service-04", 
        image     :  plantSmall , 
        icon      :  plantIcon,
        txt       :  "Plant construction", 
        pagePath  :  "/ServicesPage",
        serviceData: {
            bgImg: bgPlant,
            icon :  plantIcon,
            title  : "Plant construction", 
            subTitle  : "Lorem ipsum dolor sit amet. Harum nulla non corrupti id itaque aliquam illum cum quibusdam labore cumque.",  
            paragraph  : para, 
            points: {
                point_1: "Dolor sit amet consectetur",
                point_2: "Lorem ipsum, dolor sit amet",
                point_3: "Similique ipsam provident quos",
                point_4: "Consectetur adipisicing elit",
                point_5: "Dolor sit amet consectetur",
                point_6: "Lorem ipsum, dolor sit amet",
                point_7: "Similique ipsam provident quos",
                point_8: "Consectetur adipisicing elit",
                point_9: "Dolor sit amet consectetur",
                point_10: "Lorem ipsum, dolor sit amet",
                point_11: "Similique ipsam provident quos",
                point_12: "Consectetur adipisicing elit",
            },
        },
    },


    { // service-05
        id        :  "service-05", 
        image     :  cableSmall , 
        icon      :  cableIcon,
        txt       :  "Cable constructions", 
        pagePath  :  "/ServicesPage",
        serviceData: {
            bgImg: bgCable,
            icon :  cableIcon,
            title  : "Cable constructions", 
            subTitle  : "Lorem ipsum dolor sit amet. Harum nulla non corrupti id itaque aliquam illum cum quibusdam labore cumque.",  
            paragraph  : para, 
            points: {
                point_1: "Dolor sit amet consectetur",
                point_2: "Lorem ipsum, dolor sit amet",
                point_3: "Similique ipsam provident quos",
                point_4: "Consectetur adipisicing elit",
                point_5: "Dolor sit amet consectetur",
                point_6: "Lorem ipsum, dolor sit amet",
                point_7: "Similique ipsam provident quos",
                point_8: "Consectetur adipisicing elit",
                point_9: "Dolor sit amet consectetur",
                point_10: "Lorem ipsum, dolor sit amet",
                point_11: "Similique ipsam provident quos",
                point_12: "Consectetur adipisicing elit",
            },
        },
    },


    { // service-06
        id        :  "service-06", 
        image     :  civilSmall , 
        icon      :  civilIcon,
        txt       :  "Civil engineering / Special processes", 
        pagePath  :  "/ServicesPage",
        serviceData: {
            bgImg: bgCivil,
            icon :  civilIcon,
            title  : "Civil engineering / Special processes", 
            subTitle  : "Lorem ipsum dolor sit amet. Harum nulla non corrupti id itaque aliquam illum cum quibusdam labore cumque.",  
            paragraph  : para, 
            points: {
                point_1: "Dolor sit amet consectetur",
                point_2: "Lorem ipsum, dolor sit amet",
                point_3: "Similique ipsam provident quos",
                point_4: "Consectetur adipisicing elit",
                point_5: "Dolor sit amet consectetur",
                point_6: "Lorem ipsum, dolor sit amet",
                point_7: "Similique ipsam provident quos",
                point_8: "Consectetur adipisicing elit",
                point_9: "Dolor sit amet consectetur",
                point_10: "Lorem ipsum, dolor sit amet",
                point_11: "Similique ipsam provident quos",
                point_12: "Consectetur adipisicing elit",
            },
        },
    },

    
    { // service-07
        id        :  "service-07", 
        image     :  civilSmall , 
        icon      :  civilIcon,
        txt       :  "Training engineering / Special processes", 
        pagePath  :  "/ServicesPage",
        serviceData: {
            bgImg: bgCivil,
            icon :  civilIcon,
            title  : "Civil engineering / Special processes", 
            subTitle  : "Lorem ipsum dolor sit amet. Harum nulla non corrupti id itaque aliquam illum cum quibusdam labore cumque.",  
            paragraph  : para, 
            points: {
                point_1: "Dolor sit amet consectetur",
                point_2: "Lorem ipsum, dolor sit amet",
                point_3: "Similique ipsam provident quos",
                point_4: "Consectetur adipisicing elit",
                point_5: "Dolor sit amet consectetur",
                point_6: "Lorem ipsum, dolor sit amet",
                point_7: "Similique ipsam provident quos",
                point_8: "Consectetur adipisicing elit",
                point_9: "Dolor sit amet consectetur",
                point_10: "Lorem ipsum, dolor sit amet",
                point_11: "Similique ipsam provident quos",
                point_12: "Consectetur adipisicing elit",
            },
        },
    },
    
]

export default ServicesData
