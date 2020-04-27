import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import axios from 'axios';
import Cardinfo from './component/Cardinfo';

import Sidebar from './component/Sidebar';
class App extends Component {
  constructor()
  {
    super();
    this.state=
    {
      "list":[],
      "time":[],
      "dates":[],
      "showdetail":true,
      "selectedid":'',
      "tabdata":[],
      "tabtype":"Appointment",
      "shownav":false,
      "selecteddate":new Date(),
      "location":[],
      "provider":[]
    }
  }

  async componentDidMount() {

    const [timeresponse, dateresponse,listresponse] = await Promise.all([
      axios.get(`./json/time.json`),
      axios.get(`./json/dates.json`),
      axios.get(`./json/list.json`),
    ]);  
    
    
    // Update state once with all 3 responses
    this.setState({
      time: timeresponse.data,      
      dates: dateresponse.data,
      list: listresponse.data,
    });
  
  }

  closecard=()=>
  {
    this.setState({showdetail:!this.state.showdetail})
  }
  showdetail=(data)=>
 {
   let id=data.id;
   console.log(id)
  
   this.setState({showdetail:!this.state.showdetail,selectedid:id},()=>this.getcardlistingdata("Appointment",id) );
 }
 changetab_eventhander=(e,tabtype,id)=>
 {
 
  e.stopPropagation();
  this.getcardlistingdata(tabtype,id);
 }

  getcardlistingdata(tabtype,id)
 {
   

   axios.get(`./json/list-details.json`)
   .then(res => {
     const response = res.data;
    
   let newarray=[];
 for( let i=0;i < response.length;i++)
 {
 if(response[i].id==id && response[i].type==tabtype)
 {
   newarray.push(response[i].values)
 }
 }  
 
 console.log(newarray);
   this.setState({
     tabdata: newarray ,tabtype: tabtype 
     
   }); 
   })

 }
shownav=()=>
{
  this.setState({
    shownav: !this.state.shownav  
    
  });
}

changedatevalue=(e)=>
{
  console.log(e)
  this.setState({
    selecteddate:e 
    
  });
}

location_handler=(e)=>
{
  let locationarr=this.state.location;
  let value=e.target.value;
  if (locationarr.includes(value))
  { /* remove elemnt from array */
    const index = locationarr.indexOf(value);
    if (index > -1) {
      locationarr.splice(index, 1);
    }
  }
  else
  {
    locationarr.push(value)
  }
  console.log(locationarr )
  this.setState({
    location:locationarr
    
  },()=>this.applyfilter());
}

applyfilter()
{
console.log(this.state.list)
let liststate=this.state.list;
let locationstate=this.state.location;
let newarray=[];
for( let i=0; i < liststate.length;i++)
{
 
  for( let j=0;j < liststate[i].details.length;j++)
  {
   
    for( let k=0;k < liststate[i].details[j].list.length;k++)
      {
       
        for( let l=0;l < locationstate.length;l++ )
        {
          if(liststate[i].details[j].list[k].location==locationstate.l)
          {
            newarray.push(liststate[i].details[j].list[k]);
          }
          
        }
      
      }
  }
   
}
console.log(newarray)
}
  render() {
    const list=this.state.list;
    const time=this.state.time;
    const dates=this.state.dates;
   const tabdata=this.state.tabdata;
   const tabtype=this.state.tabtype;

    return (
      <div className="container-fluid">
        
         <div className="row ">
            <div className="col-12 topnav ">
              <div className="logo">
                  <span>SC</span>
              </div>

              <div className="Company-Name">
                <span> Sydney Clinic</span>
                <img src={require('./assets/images/arrow.svg')}  alt=""/>
              </div>

              <div className="Search-Box">
                  <input type="text"  placeholder="5 tabs active"/>
                  <img  src={require('./assets/images/arrow.svg')} alt=""/>
              </div>

              <div className="Add">
                  <img src={require('./assets/images/add.svg')} alt=""/>
              </div>

              <div className="Search">
                    <img src={require('./assets/images/search.svg')} alt=""/>
                </div>

            </div>
        </div>

        <div className="row">
           <div className="wrapper">
              <div className="sidebar-container">
                 <nav  id="sidebar">
                    <ul className="list-unstyled components">
                      
                        <li>                        
                            <a href="#" > <img src={require('./assets/images/dashboard.svg')} alt=""/></a>
                        </li>
                        <li>                        
                            <a href="#" onClick={this.shownav}> <img  src={require('./assets/images/calender.svg')} alt=""/></a>
                        </li>
                        <li>                        
                            <a href="#"  > <img  src={require('./assets/images/people.svg')} alt=""/></a>
                        </li>
                        <li>                        
                            <a href="#" > <img src={require('./assets/images/reports.svg')} alt=""/></a>
                        </li>
                        <li>                        
                                <a href="#" > <img src={require('./assets/images/mail.svg')} alt=""/></a>
                        </li>
                        <li>                        
                                <a href="#" > <img src={require('./assets/images/settings.svg')} alt=""/></a>
                        </li>    
                    
                    </ul>

                  </nav>
                  {
                    this.state.shownav &&
                    <Sidebar sidebareventhandler={this.shownav} selecteddate={this.state.selecteddate} changedatevalue={(e)=>this.changedatevalue(e)} location_handler={(e)=>this.location_handler(e)} location={this.state.location}/>
                  }
                    
              </div>
       
              <div className="content">
                <div className="row topheader row-padding">
                    <div className="col-6 content-item-container padding-right0" >
                            <div className="content-nav new content-border">
                                <img src={require('./assets/images/add_small.svg')} alt=""/>
                                <span>New</span>
                            </div>
                        
                                <div className="content-nav content-border">
                                    <img  src={require('./assets/images/task.svg')} alt=""/>
                                    <span>Waitlist</span>
                                </div>
                        
                                    <div className="content-nav content-border">
                                        <img  src={require('./assets/images/filters.svg')}  alt=""/>
                                        <span>Filters</span>
                                    </div>
                                
                                        <div className="content-nav content-border ">
                                            <img  src={require('./assets/images/next-date.svg')} alt=""/>
                                            <span>Today</span>
                                        </div>
                                  
                                            <div className="content-nav  content-border">
                                                    <img  src={require('./assets/images/calender_small.svg')}  alt=""/> 
                                                <span>8 March 2020</span>
                                            </div>
                    </div>  
                      <div className="col-3 content-item-container content-nav content-border"></div>
                      <div className="col-3 content-item-container padding-left0">
                            <div className="content-nav content-border" >
                                <img  src={require('./assets/images/task.svg')} alt=""/>
                                <span>Lists</span>
                            </div>
                            <div className="content-nav last-content">
                                <img  src={require('./assets/images/settings.svg')} alt=""/>
                                <span>More Options</span>
                              </div>

                       </div>            
                  </div>
            
                 <div className="row row-padding">
                    <div className="col-12 padding-left0">
                        <div className="header">
                                <p className="p-0 m-0">Dr Sherry White</p>
                                 <div className="toggle">
                                     <div className="active"><span>Week</span></div>
                                     <div className="inactive"> <span> Month</span></div>
                                 </div>
                        </div>
                        
                    </div>
                    <div className="width-100 padding-right0" >
                        
                            <table className="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th></th>
                                        {dates &&
                                          dates.map((datelist)=>
                                            <th key ={datelist.date}><span className="date">{datelist.date}</span><span className="day">{datelist.day}</span></th>
                                          )
                                        }                                       
                                      </tr>
                                    </thead>
                                    <tbody> 
                  {list.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td><span>{item.time}</span></td>
                          {
                            item.details.map((subitem, i) => {
                              return (
                                <td key={i} >
                               {  subitem.list.map((subitem2,i2)=>{
                                         
                                     return(
                                     
                                     <div key={i2} className="detailconatiner leftborder" onClick={(e)=>this.showdetail(subitem2)}>
                                       <div> 
                                       <img  src={require('./assets/images/'+subitem2.icon)} alt=""/>
                                       </div>
                                   
                                       <div className="info">
                                         <p className="name">{subitem2.name}</p>
                                         <p className="profile">{subitem2.pofile}</p>
                                       </div>
                                       {this.state.showdetail  && this.state.selectedid == subitem2.id &&
                                         
                                         <Cardinfo details={subitem2} changetab_eventhander={this.changetab_eventhander} tabdata={tabdata}  tabtype={tabtype} closecard={this.closecard}/>
                                         }
                                       </div>
                                      

                                       
                                       )
                                        
                                 })
                                  }
                                  
                               </td>
                                
                              )
                            })
                          }
                          </tr>
                        )
                      }

                   ) }
                                     
                                    </tbody>
                            </table>
                           
                    </div>
                    
                </div>

       </div> 
    
           </div>
</div>


</div>

    );
  }
}

export default App;
