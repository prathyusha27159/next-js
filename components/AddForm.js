import {useState} from 'react'
function AddForm(){
    const [user, setAddData] = useState({
        fullname:"",
        phone:"",
        education:"",
        address:"",
        male:"",
        female:""
      
    })
    const {fullname, phone, education, address,male,female} = user
    const handleChange = (e) =>{
        setAddData({...user,[e.target.name]:e.target.value})
    }
    const onSubmitForm = async e =>{
        e.preventDefault();
        await axios.post('http://localhost:5006/tableData',user);
        // navigate('/')
    }
    return(
        <>
          <form onSubmit={(e) =>onSubmitForm(e)}>
                               <div className="row">
                                   <div className="col-lg-6">
                                      <div className="mt-2">
                                        <label htmlFor="comment" style={{color:'#fff'}}>Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name" name="fullname" value={fullname} onChange={(e) =>handleChange(e)} />
                                      </div>
                                      <div className="mt-2">
                                        <label htmlFor="gender" style={{color:'#fff'}}>Gender</label>
                                        <div className="form-check">
                                        <input type="radio" className="form-check-input" id="male" name="male" value={male}  onChange={(e) =>handleChange(e)} />
                                        <label className="form-check-label" style={{color:'#fff'}} htmlFor="radio1">Male</label>
                                        </div>
                                        <div className="form-check">
                                        <input type="radio" className="form-check-input" id="female" name="female" value={female} onChange={(e) =>handleChange(e)} />
                                        <label className="form-check-label" style={{color:'#fff'}} htmlFor="radio2">Female</label>
                                        </div>
                                      </div>
                                      <div className="mt-2">
                                        <label htmlFor="mobile" style={{color:'#fff'}}>Mobile Number</label>
                                        <input type="number" className="form-control" placeholder="Enter Mobile Number" name="phone" value={phone} id="phone" onChange={(e) =>handleChange(e)} />
                                      </div>
                                      <div className="mt-2">
                                        <label htmlFor="education" style={{color:'#fff'}}>Educational Qualification</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Qualification" name="education" value={education} id="education" onChange={(e) =>handleChange(e)}/>
                                      </div>
                                      {/* <div className="mt-2">
                                        <label htmlFor="state" style={{color:'#fff'}}>State</label>
                                        <select className="form-select">
                                            <option>Select</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                      </div> */}
                                   </div>
                                   <div className="col-lg-6">
                                    <div className="mt-2">
                                        <label htmlFor="comment" style={{color:'#fff'}}>Address</label>
                                        <textarea className="form-control" rows="5" id="address" name="address" value={address} onChange={(e) =>handleChange(e)} ></textarea>
                                    </div>
                                    <div className="mt-2">
                                        <label htmlFor="comment" style={{color:'#fff'}}>Languages Known</label>
                                        <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="check1" name="english" />
                                        <label className="form-check-label" style={{color:'#fff'}} htmlFor="check1">English</label>
                                        </div>
                                        {/* <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="check2" name="option2" value="something" />
                                        <label className="form-check-label" style={{color:'#fff'}} htmlFor="check2">Tamil</label>
                                        </div> */}
                                        <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="check3" name="telugu"  />
                                        <label className="form-check-label" style={{color:'#fff'}} htmlFor="check3">Telugu</label>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        {/* <button className="reset">RESET</button> */}
                                        <button className="submit">SUBMIT</button>
                                    </div>
                                   </div>
                               </div>
                             </form>   
        </>
    )
}
export default AddForm