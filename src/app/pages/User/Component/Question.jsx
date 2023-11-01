import { Box, Typography } from '@mui/material';
import React from 'react';
import Colors from '../../../utils/Colors';

const Question = () => {
  return (
   <>
    <Box marginLeft={"3%"} marginTop={"3%"}>

        <Box >
        <Typography variant="h4" sx={{color:Colors.palette.background.default}}>

           <b>
           Frequently Asked Question(FAQs)
           </b> 
        </Typography><br/>
        </Box>

        <Typography>

        <b>Ques.</b>
        Lorem ipsum dolor sit amet. At laboriosam maiores in illum nihil aut voluptatum dignissimos. Eum laudantium porro. <br/>
        <b>Ans</b>
        Lorem ipsum dolor sit amet. At laboriosam maiores in illum nihil aut voluptatum dignissimos.
        </Typography> <br/> <br/>

        <Typography>

<b>Ques.</b>
Lorem ipsum dolor sit amet. At laboriosam maiores in illum nihil aut voluptatum dignissimos. Eum laudantium porro. <br/>
<b>Ans</b>
Lorem ipsum dolor sit amet. At laboriosam maiores in illum nihil aut voluptatum dignissimos.
</Typography><br/> <br/>
 <Typography>

<b>Ques.</b>
Lorem ipsum dolor sit amet. At laboriosam maiores in illum nihil aut voluptatum dignissimos. Eum laudantium porro. <br/>
<b>Ans</b>
Lorem ipsum dolor sit amet. At laboriosam maiores in illum nihil aut voluptatum dignissimos.
</Typography>



    </Box>
   </>
  )
}

export default Question