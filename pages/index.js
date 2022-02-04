import axios from "axios"
import { useState } from "react"
import TableData from "../components/TableData"
import AddForm from "../components/AddForm"
import Category from "./category"


function Home({homedata, tables, categorys}){
    
    return(
        <>
          {
              homedata.map(datalist =>{
                  const {image1, image2, image3, image4, image5, image6, h1tag} = datalist
                  return(
                      <>
                          <div style={{backgroundImage:`url(${image1})`}} className="banner-section">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 mt-4">
                             <p>{h1tag}</p>
                       </div>
                   </div>
               </div>
           </div> 
           <div className="category-section">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-12">
                         <div className="categorylist">
                             <h2>Category</h2>
                             <p>With great offers</p>
                         </div>
                     </div>
                 </div>
                 {/* <div className="row">
                     <div className="col-lg-4 mt-4">
                         <div className="categoryCards">
                           <img src={image2} alt="images not display"/>
                           <div>
                               <p>All Natural Non Toxic</p>
                               <h4>Best of Beauty</h4>
                               <button>Shop Now</button>
                           </div>
                         </div>
                     </div>
                     <div className="col-lg-4 mt-4">
                         <div className="categoryCards">
                           <img src={image4} alt="images not display"/>
                           <div>
                               <p>All Natural Non Toxic</p>
                               <h4>Best of Beauty</h4>
                               <button>Shop Now</button>
                           </div>
                         </div>
                     </div>
                     <div className="col-lg-4 mt-4">
                         <div className="categoryCards">
                           <img src={image5} alt="images not display"/>
                           <div>
                               <p>All Natural Non Toxic</p>
                               <h4>Best of Beauty</h4>
                               <button>Shop Now</button>
                           </div>
                         </div>
                     </div>
                 </div> */}
                 <Category categorys={categorys}/>
             </div>
           </div>
           <div className="emply-info">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-4">
                           <div className="emply">
                               <h2>Employee</h2>
                               <p>Information</p>
                               <img src={image6} alt="image not display"/>
                           </div>
                       </div>
                       <div className="col-lg-8 col-md-8 col-sm-12 col-12 mt-4">
                       <div className="info-form">
                            <AddForm />
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="emply-details">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-1 mt-4"></div>
                       <div className="col-lg-10 mt-4">
                           <h2>Employee Details</h2>
                            {/* <tableData tables={tables}/> */}
                            <TableData tables={tables}/>
                       </div>
                       <div className="col-lg-1 mt-4"></div>
                   </div>
               </div>
           </div>
                      </>
                  )
              })
          }
        </>
    )
}
export default Home

export async function getStaticProps(){
    const res = await axios.get('http://localhost:5006/homeDetails');
    // const data = await res.json();
    const tableRes = await axios.get("http://localhost:5006/tableData");
    // const tableData = tableRes.json();
    const response = await axios.get("http://localhost:5006/Category");
    // const data = await response.json()
    console.log(res)
    console.log(tableRes)
    return{
        props:{
            homedata:res.data,
            tables:tableRes.data,
            categorys : response.data
        }
    }
}