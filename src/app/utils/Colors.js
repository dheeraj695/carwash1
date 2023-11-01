
import { createTheme } from '@mui/material/styles';

const Colors = createTheme({
  palette: {
    primary: {
      main:'#002C4F', 
      
    //  backgroundj: '#CCFFCC',
     color:' #FFFFFF',
    //  color1:' #00000080',
    //  inactive:"#FF0000",
    //  pending:"#ffc804"
    },

    background: {
      default:  '#002C4F',
    //    card: ' #7797FE',
      text:'#FFFFFF',
    //   background1: '#7797FE',
    },
    color:{
    //    maincolor: '#000000',
        body:' #FFFFFF',
      HeadingText:'013C6B'

    },
    shadows:{
      boxshadow: '4px 4px 4px 0px #00000040',
    }
  
    


  },


});

export default Colors;