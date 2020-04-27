import React, { Component } from 'react';

import '../assets/css/style.css';
import axios from 'axios';
class Cardinfo extends Component {
  constructor(props)
  {
    super(props);   
    this.state={
      tabdata:this.props.tabdata
    }
  }
 
  render() {
  
    return (
      <div className="">
      <div className="cardcontainer">
        <div className="row">
          <div className="col-12 topheader">
           <img onClick={this.props.closecard} src={require('../assets/images/cardinfo/cancel.svg')} alt=""/>
          <img  src={require('../assets/images/cardinfo/edit.svg')} alt=""/>
          <img  src={require('../assets/images/cardinfo/delete.svg')} alt=""/>
          </div>
          <div className="col-12">
            <div className="row margin_top7">
             <div className="col-6 lefttxtalign">
                <p className="name">{this.props.details.name}</p>
                <p className="details"><span>32year</span><span className="marginleft-5">043245465</span></p>
              </div>
              <div className="col-6">
                <div className="row imgcontainer">
                  <div className="col-2 p-0">
                      <img  src={require('../assets/images/cardinfo/user.svg')} alt=""/>
                  </div>
                  <div className="col-2 p-0">
                      <img  src={require('../assets/images/cardinfo/payment.svg')} alt=""/>
                  </div>
                  <div className="col-2 p-0">
                      <img  src={require('../assets/images/cardinfo/task.svg')} alt=""/>
                  </div>
                  <div className="col-2 p-0">
                      <img  src={require('../assets/images/cardinfo/mail.svg')} alt=""/>
                  </div>
                </div>
              </div>
              </div>
          </div>

          <div className="col-12">
          <div className="row tabs">
              <div className="col-4"><span className={this.props.tabtype=="Appointment" ? 'active m-0':'m-0'}  onClick={(e)=>this.props.changetab_eventhander(e,"Appointment",this.props.details.id)}>Appointment</span></div>
              <div className="col-4"><span className= {this.props.tabtype=="Consultation" ? 'active m-0':'m-0'}  onClick={(e)=>this.props.changetab_eventhander(e,"Consultation",this.props.details.id)}>Consultation</span></div>
              <div className="col-4"><span className= {this.props.tabtype=="Invoice" ? 'active m-0':'m-0'} onClick={(e)=>this.props.changetab_eventhander(e,"Invoice",this.props.details.id)}>Invoice</span></div>
         
          </div>  
            {this.props.tabdata.map((item, index) => {
                  return (

                      item.map((subitem, i) => {
                        return (
                          <div key={index+i} className="row tab-details">
      
                          <div className="col-2">
                              {<img  src={require('../assets/images/cardinfo/'+subitem.icon)} alt=""/> }
                          </div>
                          <div className="col-10 padding-left0">
                              <p className="p1 m-0">{subitem.text}</p>                  
                          </div>
                  
                        </div>
                          
                        )
                      })
                  )
                }

              ) }
          
          <div className="row btncontainerrow">
            <div className="col-4 paddingleft5 paddingright5"> 
              <div className=" p-1 btncontainer btnactive">
                <img src={require('../assets/images/cardinfo/buttons/next-date.svg')}/>
                <p className="m-0"> Confirm</p>
              </div>
            </div>
            <div className="col-4 paddingleft5 paddingright5">
            <div className=" p-1 btncontainer btninactive">
                <img src={require('../assets/images/cardinfo/buttons/success.svg')}/>
                <p className="m-0"> Checkin</p>
              </div>
            </div>
            <div className="col-4 paddingleft5 paddingright5">
            <div className=" p-1 btncontainer btninactive">
                <img src={require('../assets/images/cardinfo/buttons/doctor.svg')}/>
                <p className="m-0"> SendtoDoc</p>
              </div>
            </div>
          </div>

          </div>

        </div>
       

      </div>
      </div>
    );
  }
}

export default Cardinfo;
