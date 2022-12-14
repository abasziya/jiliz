import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
 import Link from 'next/link';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {  
    const[isActive,setIsActive] = useState(false)
    const[isnav,setisnav]=useState(false)
  const [value, setValue] = React.useState(0);
 const handletabs=(e)=>{
 setisnav(true)
 if(isnav==true){
setisnav(true);
 }
 
}
 
  const handleChange = (event, newValue) => {
   

    setValue(newValue);

  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#F8F8F8', display: 'flex', height: 424 , flexdirection:"row" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        onClick={handletabs}
        aria-label=" tabs example"
        scrollButtons="auto"
        sx={{  borderRadius:3  }}
      >
        <Tab role="tabpanel" label="بازرگانی" {...a11yProps(0)}   />
        <Tab label="مهندسی" {...a11yProps(1)} />
        <Tab label="پزشکی وسلامت " {...a11yProps(2)} />
        <Tab label="پوشاک و زیورالات " {...a11yProps(3)} />
        <Tab label="خانه,ساختمان , توضیحات " {...a11yProps(4)} />
        <Tab label="خدمات عمومی و دولتی " {...a11yProps(5)} />
        <Tab label="رستوران و غذا  " {...a11yProps(6)} />
      </Tabs>
      <div   role="TabPanel" id="vertical-tabpanel-0"     className={ isnav ?' d-none'   :'col-md-12 fillterdiv'}  value={value}  index={0} >

     
<div className={ isnav ?' d-none':" col-md-4 fillterdivbutton"}>

      <button className='filterbutton' >
            خدمات مالی و اقتصادی 
     </button>
     <br></br>
     <button className={ isActive?"filterbuttonactive":  "filterbutton"} onClick={()=>{
        setIsActive(true)
     }}>
متفرقه 
</button>


</div>

<div className='col-md-8 filteritemdiv'>


<div className={ isActive ? "     filteredliblock " : "filteredli" }>
  <div className='container '>


<div className='col-4 listed-filtered-item right-filtered '>
<ul><li>شرکت بیمه </li></ul>
<ul><li>نمایندگی بیمه </li></ul>
<ul><li>   گمرک  </li></ul>
<ul><li> مشاوره مدیریت </li></ul>


</div>
      
<div className='col-8 listed-filtered-item left-filtered'>
<ul><li>حسابداری ,حسابرسی</li></ul>
<ul><li>پلمپ </li></ul>
<ul><li>سیستم مالی </li></ul>
<ul><li>فروش گاوصندوغ</li></ul>
<ul><li>طراحی و اجرای مدیریت  مالی </li></ul>
</div>
</div>


  
</div>
</div>







 
      </div>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}