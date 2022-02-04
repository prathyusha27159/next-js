function TableData({tables}){

    return(
        <>
<table className="table table-white table-striped mt-4">
                                <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Education</th>
                                    <th>Address</th>
                                    <th>Languages Known</th>
                                    <th>Contact Number</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                   {
                                       tables.map(listTable =>{
                                           const {id, fullname, education, address, phone,female, male } = listTable
                                        //    const {female, male} = gender
                                        //    const {telugu} = lang
                                           return(
                                               <tr key={id}>
                                                  <td>{id}</td>
                                                  <td>{fullname}</td>
                                                   <td>{female}{male}</td> 
                                                  {/* <td></td> */}
                                                  <td>{education}</td>
                                                  <td>{address}</td>
                                                  <td></td>
                                                  {/* <td>{telugu}</td> */}
                                                  <td>{phone}</td>
                                                  <td>
                                                      <button>Edit</button>
                                                  </td>
                                               </tr>
                                           )
                                       })
                                   }
                                </tbody>
                            </table>
        </>
    )
}
export default TableData