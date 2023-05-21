import React, { useState } from "react";
import { Button, Col, Form, Row } from "reactstrap";
import Input from "../../component/input";
import { Services } from "../../config/api-middleware";
import { FileUploader } from "react-drag-drop-files";
import { useNavigate } from "react-router-dom";

const Addnewcar = () => {
  const fileTypes = ["JPEG", "PNG", "GIF"];
  const Navigate = useNavigate();

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const [state, setState] = useState({
    name: "",
    category: "",
    price: 0,
    status: false,
    start_rent_at: null,
    finish_rent_at: null,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Services()
      .post(
        "https://bootcamp-rent-cars.herokuapp.com/admin/car",
        {
          name: state.name,
          category: state.category,
          price: state.price,
          status: state.status,
          start_rent_at: state.start_rent_at,
          finish_rent_at: state.finish_rent_at,
          image: state.image
            
        },
        {
          headers: {
            access_token: `${localStorage.getItem("ACCESS_TOKEN")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <h5 className="p-5">Add New Car</h5>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Col md={5} className="d-flex flex-column gap-4">
            <label className="form-label">
              Nama/Tipe Mobil
              <Input
                className="form-control-sm"
                style={{ height: "36px", width: "339px" }}
                onChange={handleInputChange}
                name="name"
                placeholder="Input Nama/Tipe Mobil"
              />
            </label>
            <label className="form-label">
              Harga
              <Input
                className="form-control-sm"
                style={{ height: "36px", width: "339px" }}
                onChange={handleInputChange}
                name="price"
                placeholder="Input Harga Mobil"
              />
            </label>
            <div className="uploader">
              <label className="form-label">
                Foto
                <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                />
              </label>
              <p style={{paddingLeft:"15rem"}}>{file ? `File name: ${file[0].name}` : "File Size Max 2MB"}</p>
            </div>
            <label className="form-label">
              Kategori
              <Input
                className="form-control-sm"
                style={{ height: "36px", width: "339px" }}
                onChange={handleInputChange}
                name="Category"
                placeholder="Kategori"
              />
            </label>
          </Col>
          <div className="d-flex gap-3 pt-5 ps-5">
            <Button onClick={() => Navigate("/ListCar")}>Cancel</Button>
            <Button type="submit" style={{ backgroundColor: "#0D28A6" }}>
              Save
            </Button>
          </div>
        </Form>
      </Row>
    </div>
  );
};

export default Addnewcar;
