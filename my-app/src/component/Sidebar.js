import React, { Component } from 'react';

import '../assets/css/style.css';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,DatePicker } from '@material-ui/pickers';
import axios from 'axios';
class Sidebar extends Component {
  constructor(props)
  {
    super(props); 
    console.log(props);  
    this.state={
      
    }
  }


render()
{
    return(
        <div className="child-sidebar">
                      <div className="row p-1 marginbtm15">
                        <div className="col-12 ">
                        <img  onClick={this.props.sidebareventhandler}src={require('../assets/images/sidebar/arrow-left.svg')} alt=""/>
                          <h3 className="dateheading">Date Filter</h3>  
                          <MuiPickersUtilsProvider utils={DateFnsUtils} >
                          <DatePicker value={this.props.selecteddate} onChange={(e)=>this.props.changedatevalue(e)}/>
                          </MuiPickersUtilsProvider>
                                              
                        </div>
                      </div>

                      <div className="row p-1 marginbtm15">
                        <div className="col-12 ">
                          <h3 className="dateheading">Location &amp; Provider Filters</h3>  
                          <div className="Search-Box-sidebar">
                             <img  src={require('../assets/images/sidebar/search.svg')} alt=""/>
                              <input type="text"  placeholder="Search Location or Provider Filters"/>
                          </div>
                        </div>

                        <div className="locationcontainer">
                                  <div className="col-12">
                                    <h5>Locations</h5>

                                    <div className="row">
                                          <div className="col-12 d-flex marginbtm-5">
                                            <div className="ctmflex">
                                            <input type="checkbox" value="Sydney"  onClick={(e)=>this.props.location_handler(e)}></input>
                                            <p>Sydney</p>
                                            </div>
                                            <img className="ml-auto"  src={require('../assets/images/sidebar/arrow.svg')}  alt=""/>
                                          </div>
                                          <div className="col-12 d-flex marginbtm-5">
                                            <div className="ctmflex">
                                            <input type="checkbox" value="NewYork" onClick={(e)=>this.props.location_handler(e)}></input>
                                            <p>NewYork</p>
                                            </div>
                                            <img className="ml-auto" src={require('../assets/images/sidebar/arrow.svg')}  alt=""/>
                                          </div>
                                          <div className="col-12 d-flex marginbtm-5">
                                            <div className="ctmflex">
                                            <input type="checkbox" value="India" onClick={(e)=>this.props.location_handler(e)}></input>
                                            <p>India</p>
                                            </div>
                                            <img className="ml-auto" src={require('../assets/images/sidebar/arrow.svg')} alt=""/>
                                          </div>
                                    </div>
                                  </div>
                              
                        </div>


                        <div className="locationcontainer">
                                  <div className="col-12">
                                    <h5>Providers</h5>

                                    <div className="row">
                                          <div className="col-12 d-flex marginbtm-5">
                                            <div className="ctmflex">
                                            <input type="checkbox" value="Ashely" ></input>
                                            <p>Dr.Ashely</p>
                                            </div>
                                            <img className="ml-auto" src={require('../assets/images/sidebar/arrow.svg')} alt=""/>
                                          </div>
                                          <div className="col-12 d-flex marginbtm-5">
                                            <div className="ctmflex">
                                            <input type="checkbox" value="Lenord"></input>
                                            <p>Dr.Lenord</p>
                                            </div>
                                            <img className="ml-auto" src={require('../assets/images/sidebar/arrow.svg')} alt=""/>
                                          </div>
                                          <div className="col-12 d-flex marginbtm-5">
                                            <div className="ctmflex">
                                            <input type="checkbox" value="Johan"></input>
                                            <p>Dr.Johan</p>
                                            </div>
                                            <img className="ml-auto" src={require('../assets/images/sidebar/arrow.svg')} alt=""/>
                                          </div>
                                    </div>
                                  </div>
                              
                        </div>

                      </div>

                      


                    </div>
              
    )
}
}

export default Sidebar