import Link from "next/link"

function CategoryData({categorys}){
    return(
        <>
          
                  <div className="container">
                    <div className="row">
                    
                    {
           categorys.map(category => {
             return(
                            
                    <div className="col-lg-4 mt-4" key={category.id}> 
                    <div className="categoryCards">
                     <Link  href= {`/category/${category.id}`} passHref>
                        <img src={category.image2} alt="images not display"/></Link>
                      <div>
                          <p>{category.ptag}</p>
                          <h4>{category.h4tag}</h4>
                          <button>{category.button}</button>
                      </div>
                    </div>

                </div> 
                
                   )
                  })
              } 
                 
           </div>
       </div>
       
        </>
    )

}
export default CategoryData
