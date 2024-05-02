
import { Link } from "react-router-dom";

import './assets/css/LOG.css'




function Log() {


  

  return (
    
<div className='log'>

    

<div className="container register" id="Login">
    <div className="row">
        <div className="col-md-3 register-left">
            <img src="./assets/logo.png" alt=""/>
            <h3>Welcome</h3>
        </div>


        <div className="col-md-9 register-right">
            <ul className="nav nav-tabs1 nav-justified" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="true">Sign Up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="false">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="forget-tab" data-toggle="tab" href="#forget" role="tab" aria-controls="forget" aria-selected="false">Forget</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">


                <div className="tab-pane fade show active" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="jobseeker-tab" data-toggle="tab" href="#jobseeker" role="tab" aria-controls="jobseeker" aria-selected="true">Job seeker</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="Businessman-tab" data-toggle="tab" href="#Businessman" role="tab" aria-controls="Businessman" aria-selected="false">Businessman</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="HR-tab" data-toggle="tab" href="#HR" role="tab" aria-controls="HR" aria-selected="false">HR</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
        
        
                        <div className="tab-pane fade show active" id="jobseeker" role="tabpanel" aria-labelledby="jobseeker-tab">
                            <h3 className="register-heading">Apply as a Job seeker</h3>
                            <div className="row register-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control"  placeholder="Confirm Password *"  />
                                    </div>
                                    <div className="form-group">
                                        <div className="maxl">
                                            <label className="radio inline"> 
                                                <input type="radio" name="gender" value="male"/>
                                                <span> Male </span> 
                                            </label>
                                            <label className="radio inline"> 
                                                <input type="radio" name="gender" value="female"/>
                                                <span>Female </span> 
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" className="form-control" placeholder="Your Phone *"  />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option className="hidden"  selected disabled>Why you choose our website?</option>
                                            <option>find job</option>
                                            <option>learning</option>
                                            <option>interaction with chatbot</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Your Answer "  />
                                    </div>
                                    <Link to="/home" className="btnRegister">Sign up Now</Link>
                                </div>
                            </div>
                        </div>

                




        
        
        
                        <div className="tab-pane fade show" id="Businessman" role="tabpanel" aria-labelledby="Businessman-tab">
                            <h3  className="register-heading">Apply as a Businessman</h3>
                            <div className="row register-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Phone *"  />
                                    </div>
        
        
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Confirm Password *"  />
                                    </div>
                                    <input type="submit" className="btnRegister"  value="Sign Up"/>
                                </div>
                            </div>
                        </div>  
                        
                        
        
        
                        <div className="tab-pane fade show" id="HR" role="tabpanel" aria-labelledby="HR-tab">
                            <h3  className="register-heading">Apply as a HR</h3>
                            <div className="row register-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Phone *"  />
                                    </div>
                    
                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Confirm Password *"  />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="company name *"  />
                                    </div>
                                    <input type="submit" className="btnRegister"  value="Sign Up"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>










                <div className="tab-pane fade show" id="login" role="tabpanel" aria-labelledby="login-tab">
                    <h3  className="register-heading">Login page</h3>
                    <div className="row register-form">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email *"  />
                            </div>
    
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password *"  />
                            </div>


                            <div className="form-group">
                                <div className="maxl">
                                    <label className="radio inline"> 
                                        <input type="radio" name="gender" value="Job seeker"/>
                                        <span> Job seeker </span> 
                                    </label>
                                    <label className="radio inline"> 
                                        <input type="radio" name="gender" value="Businessman"/>
                                        <span> Businessman </span> 
                                    </label>
                                    <label className="radio inline"> 
                                        <input type="radio" name="gender" value="HR"/>
                                        <span> HR </span> 
                                    </label>
                                </div>
                            </div>


                            <input type="submit" className="btnRegister"  value="Login"/>
                        </div>
                    </div>
                </div>  















                    
                
                



                <div className="tab-pane fade show" id="forget" role="tabpanel" aria-labelledby="forget-tab">
                    <h3  className="register-heading">Forget page</h3>
                    <div className="row register-form">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email *"  />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Last password *"  />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="New password *"  />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Confirm new password *"  />
                            </div>
                            <input type="submit" className="btnRegister"  value="change password"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

</div>	
</div>
  );
}

export default Log;
