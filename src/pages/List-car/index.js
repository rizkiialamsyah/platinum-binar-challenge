import React, { useEffect,useState } from "react"
import { Services } from "../../config/api-middleware"
import { Button, Card, Col, Row } from "reactstrap"
import { useNavigate } from "react-router-dom";
// import Segment from "../../component/segment";


const Carlist = () => {
  
  const navigate = useNavigate()
  const [carData, setCarData] = useState([]);
 
    useEffect(() => {
      Services().get('https://bootcamp-rent-cars.herokuapp.com/admin/v2/car', {
          headers: {
              access_token: `${localStorage.getItem("ACCESS_TOKEN")}`
          }
      }).then(result=>{
          console.log(result);
  //     })
  // }, [])
  setCarData(result.data.cars);
})
.catch((error) => {
  console.error("Error fetching car data:", error);
});
}, []);
const formatNumber = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
  
  
    return(
        <div>
        {/* <div className="d-flex justify-content-between p-5">
        <h5>List Car</h5>
        <Button style={{backgroundColor:"#0D28A6"}}>+ Add New Car</Button>
        </div>
          <Row>
  
          </Row>
            
           */}
           <div className="d-flex justify-content-between p-5">
      <h5>List Car</h5>
      <Button style={{ backgroundColor: "#0D28A6" }} onClick={()=> navigate('/addnewcar')}>+ Add New Car</Button>
    </div>
    <Row className="px-5">
      {carData.map((item, index) =>(
       <Col key={index} md={4} className="ms-0 mx-0 py-3">
        <Card>
        <div className="card-image-car">
         <img className="img-contain" src={item.image} alt="pict-car" />
         </div>
         <div className="card-content-desc">
          <div className="px-4">
         <p>{item.name}</p>
         <h6 className="p-1">{formatNumber(item.price)}/Hari</h6>
         <div className="d-flex">
         <i className='fa fa-users p-1 me-2'></i>
         <p>{item.category}</p>
         </div>
         <div className="d-flex">
         <i className="fa fa-clock-o p-1 me-2"></i>
         <p>{item.updatedAt}</p>
         </div>
         </div>
         <div className="d-flex gap-3 justify-content-center pb-4">
          <Button className="card-button" color="danger" outline>Delete</Button>
          <Button  className="card-button" onClick={()=>navigate('/editcar')} color="success">Edit</Button>
         </div>
         </div>
        </Card>
    
        </Col>
      ))}
    </Row>

        </div> 
        
                    
    )
}

export default Carlist


  
