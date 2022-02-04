function Page({pageimages}) {

    return(
        <>
        { pageimages.map(pageimage => {
            return(
                <div key={pageimage.id}>
                   <div className="container">
                      <div className="row mt-4">
                         <div className="col-lg-5">   
                         <img src={pageimage.pageimage1} alt="images not display"/>
                         </div>
                         <div className="col-lg-7">
                           <h3 className="project-head">AI Pest Detection</h3>
                           <p className="ptag1407">One of the biggest challenges in Agriculture is the handling of pests. 
                               Early detection of pests on plants helps the farmer in conserving his or her resources,
                                both in terms of time and money.</p>
                                <div className="button">
                                <button type="button" class="btn btn-warning">Read More</button>
                                </div>
                         </div>
                     </div>
                     <div className="row mt-4">
                         <div className="col-lg-5">
                         <img src={pageimage.pageimage2} alt="images not display"/>
                         </div>
                         <div className="col-lg-7">
                           <h3 className="project-head">AI for Healthy Diet</h3>
                           <p className="ptag1407">One of the biggest challenges in Agriculture is the handling of pests. 
                               Early detection of pests on plants helps the farmer in conserving his or her resources,
                                both in terms of time and money.</p>
                                <div className="button">
                                <button type="button" class="btn btn-warning">Read More</button>
                                </div>                       
                            </div>      
                     </div>
                     <div className="row mt-4">
                         <div className="col-lg-5">
                         <img src={pageimage.pageimage3} alt="images not display"/>
                         </div>
                         <div className="col-lg-7">
                           <h3 className="project-head">AI for Workforce Management</h3>
                           <p className="ptag1407">One of the biggest challenges in Agriculture is the handling of pests. 
                               Early detection of pests on plants helps the farmer in conserving his or her resources,
                                both in terms of time and money.</p>
                                <div className="button">
                                <button type="button" class="btn btn-warning">Read More</button>
                                </div>
                         </div>
                     </div>
                     <div className="row mt-4">
                         <div className="col-lg-5">
                         <img src={pageimage.pageimage4} alt="images not display"/>
                         </div>
                         <div className="col-lg-7">
                           <h3 className="project-head">AI for Hiring</h3>
                           <p className="ptag1407">One of the biggest challenges in Agriculture is the handling of pests. 
                               Early detection of pests on plants helps the farmer in conserving his or her resources,
                                both in terms of time and money.</p>
                                <div className="button">
                                <button type="button" class="btn btn-warning">Read More</button>
                                </div>
                         </div>
                     </div>
                     <div className="row mt-4">
                         <div className="col-lg-5">
                         <img src={pageimage.pageimage5} alt="images not display"/>
                         </div>
                         <div className="col-lg-7">
                           <h3 className="project-head">AI Receptionist</h3>
                           <p className="ptag1407">One of the biggest challenges in Agriculture is the handling of pests. 
                               Early detection of pests on plants helps the farmer in conserving his or her resources,
                                both in terms of time and money.</p>
                                <div className="button">
                                <button type="button" class="btn btn-warning">Read More</button>
                                </div>
                         </div>
                     </div>
                  </div>  
              </div>
            )

        })}
       
        </>
    )
}
export default Page
export async function getStaticProps(){
    const response = await fetch("http://localhost:5006/pageimages")
    const data = await response.json()
    return {
        props: {
            pageimages : data,
        }
    }
}