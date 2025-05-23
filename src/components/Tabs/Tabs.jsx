import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SongTabs({data,value,handleChange}) {
  

//  console.log("value",value)

  return (
    <Box sx={{ width: '100%',}}>
      
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='white' TabIndicatorProps={{
    style: {
      backgroundColor: "#34c94b",
      
    }
  }}
  
  >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Rock" {...a11yProps(1)} />
          <Tab label="Pop" {...a11yProps(2)} />
          <Tab label="Jazz" {...a11yProps(3)} />
          <Tab label="Blues" {...a11yProps(4)} />
        </Tabs>
      
      <CustomTabPanel value={value} index={0} sx={{padding:"24px 0px" }}>
      <Carousel data={data} renderComponent={(data)=><Card data={data} type="songs" key={data.id}/>}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Carousel data={data} renderComponent={(data)=><Card data={data} type="songs" key={data.id}/>}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Carousel data={data} renderComponent={(data)=><Card data={data} type="songs" key={data.id}/>}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Carousel data={data} renderComponent={(data)=><Card data={data} type="songs" key={data.id}/>}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <Carousel data={data} renderComponent={(data)=><Card data={data} type="songs" key={data.id}/>}/>
      </CustomTabPanel>
    </Box>
  );
}