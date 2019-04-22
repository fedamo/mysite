import ppcImg from '../images/ppc_dashboard.PNG';
import chaosImg from '../images/chaos.png.png';
import barImg from '../images/BarChart.png';
import resumeImg from '../images/resumeSample.PNG';
import algoImg from '../images/algoImg.png';
import dashgif from '../images/dashboardgif.gif';

export default {
  cardData: [
    {
      title: 'Marketing KPI Dashboard',
      img: dashgif,
      imgUrl: "url(" + dashgif + ")",
      summary: "Tools: Python / React / HTML / CSS / JS / Plotly / JSON" ,
      desc: 'A simgple dashboard with interactive tools to explore Google AdWords campaign results',
      gitLink:'https://github.com/fedamo/kpi-dashboard',
      demoLink: 'http://fedamo.github.io/kpi-dashboard',
      avatarLabel:'Recipe',
      avatarLetter:'V',
      avatarColor: '#3d72b4',
      databartext1: 'DATA',
      databartext2: 'Marketing',
      databartext3: 'PRODUCT',
      databartext4: 'Dashboard',
    },{
      title: 'Analysis of Product Sales',
      img: barImg,
      imgUrl: "url(" + barImg + ")",
      summary: 'Tools: Python',
      desc: 'A simgple dashboard with interactive tools to explore Google AdWords campaign results',
      gitLink:'http://www.github.com/fedamo',
      demoLink: 'http://www.github.com',
      avatarLabel:'Recipe',
      avatarLetter:'R',
      avatarColor: '#db2e56',
      databartext1: 'DATA',
      databartext2: 'Business',
      databartext3: 'Product',
      databartext4: 'Analysis',
    },
    {
      title: 'Algorithm Testing',
      img: algoImg,
      imgUrl: "url(" + algoImg + ")",
      summary: 'Python / React / HTML / JS',
      desc: 'A simgple dashboard with interactive tools to explore Google AdWords campaign results',
      gitLink:'http://www.github.com/fedamo',
      demoLink: 'http://www.github.com',
      avatarLabel:'Recipe',
      avatarLetter:'S',
      avatarColor: '#52b230',
      databartext1: 'DATA',
      databartext2: 'Marketing',
      databartext3: 'Product',
      databartext4: 'Report',
    },
    {
      title: 'My Website',
      img: resumeImg,
      imgUrl: "url(" + chaosImg + ")",
      summary: 'Python / React / HTML / JS',
      desc: 'An online portfolio created using React',
      gitLink:'http://www.github.com/fedamo',
      demoLink: 'http://www.github.com',
      avatarLabel:'Recipe',
      avatarLetter:'V',
      avatarColor: 'red',
      databartext1: 'DATA',
      databartext2: 'Personal',
      databartext3: 'Product',
      databartext4: 'Portfolio',
    },
  ],
};
