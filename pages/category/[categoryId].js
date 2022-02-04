function CategoryDetails({categoryData}){
return(
    <>
    
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={categoryData.image2} alt="image not availbel"/>
                </div>
                <div className="col-lg-6">
                    <h4>{categoryData.h4tag}</h4> 
                </div>
            </div>
        </div>
    
    </>

)
}
export default CategoryDetails
export async function getStaticPaths(){
    return {
        paths : [{ params : {categoryId : "1"}},
        { params : {categoryId : "2"}}
    ],
        fallback : true,
    }
}
export async function getStaticProps(context){
    const {params} = context
    const res = await fetch(`http://localhost:5006/Category/${params.categoryId}`)
    const data= await res.json()
    return {
        props : {
            categoryData : data
        }
    }

}