// // src/components/footer.jsx
// import React from 'react';
// import { Typography, Box, Link } from '@mui/material';

// const Footer = () => {
//     return (
//         <footer style={{backgroundColor: '#f0f0f0', padding: '10px 0', textAlign: 'center', marginTop: '20px', position: 'fixed', left: '0', bottom: '0', width: '100%'}}>
//             <Box sx={{ marginTop: 'auto', backgroundColor: '#0034A9', color: '#FFFFFF', textAlign: 'center', padding: 2 }}>
//         <Typography>
//           Contact <Link href="mailto:jhayes14@gsu.edu" color="inherit">Jamie Hayes</Link> or <Link href="mailto:fhawamdeh1@gsu.edu" color="inherit">Dr. Faris Hawamdeh</Link> for questions.
//         </Typography>
//         <p>© 2024 My Website. All rights reserved.</p>
//       </Box>
            
//         </footer>
//     );
// }

// export default Footer;

import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ 
            marginTop: '20px', 
            backgroundColor: '#0034A9', 
            color: '#FFFFFF', 
            textAlign: 'center', 
            padding: '10px 0', 
            position: 'fixed', 
            left: 0, 
            bottom: 0, 
            width: '100%' 
        }}>
            <Typography sx={{marginBottom: '2px'}}>
                Contact <Link href="mailto:jhayes14@gsu.edu" color="inherit">Jamie Hayes</Link> or <Link href="mailto:fhawamdeh1@gsu.edu" color="inherit">Dr. Faris Hawamdeh</Link> for questions.
            </Typography>
            <Typography component="p" sx={{ margin: 0 }}>© 2024 My Website. All rights reserved.</Typography>
        </Box>
    );
}

export default Footer;
