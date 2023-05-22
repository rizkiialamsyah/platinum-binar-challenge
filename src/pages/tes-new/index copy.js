import React from "react";
import { useState } from "react";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { Services } from "../../config/api-middleware";

const Tes = () => {
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setState((previousState) => ({
      ...previousState,
      image: file || null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState((previousState) => ({
      ...previousState,
      submitted: true,
      submittedImage: previousState.image ? false : true,
    }));
    if (!state.name || !state.category || state.price <= 0 || state.image == null ||
      state.image.size > 2097152 || !/\.(jpg|jpeg|png|webp)$/i.test(state.image.name)  ) {
      console.log('Data Tidak Boleh Kosong');
      return;
    }  
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
          image: state.image,
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
    <div>
      <div className="ps-5">
        <h1 className="p-5">Add New Car</h1>
        <Form className="ps-5" onSubmit={handleSubmit}>
          <FormGroup row>
            <Label for="exampleEmail" md={2}>
              Nama/Tipe Mobil<sup>*</sup>
            </Label>
            <Col md={10}>
              <Input
                name="name"
                placeholder="Input Nama/Tipe Mobil"
                type="name"
                style={{ height: "36px", width: "339px" }}
                onChange={handleInputChange}
                valid={state.name !== ""}
                invalid={!state.name && state.submitted} 
              />
              <FormFeedback type="invalid">
                Data Tidak Boleh Kosong!
              </FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label md={2}>Harga</Label>
            <Col md={10}>
              <Input
                name="price"
                placeholder="Harga"
                type="price"
                style={{ height: "36px", width: "339px" }}
                onChange={handleInputChange}
                valid={(state.price > 0 && !state.submitted) || state.submitted}
                invalid={state.price <= 0 && state.submitted}

              />
              <FormFeedback type="invalid">
                Data Tidak Boleh Kosong!
              </FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              File
            </Label>
            <Col md={10}>
              <Input
                name="image"
                type="file"
                style={{ height: "36px", width: "339px" }}
                onChange={handleImageUpload}
                valid={state.image !== null}
                invalid={!state.image && state.submitted}
              />
               <FormFeedback type="invalid">
                Data Tidak Boleh Kosong!
              </FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" md={2}>
              Select
            </Label>
            <Col md={10}>
              <Input
                name="category"
                type="select"
                style={{ height: "36px", width: "339px" }}
                placeholder="Pilih Kategori Mobil"
                onChange={handleInputChange}
                  valid={state.category !== ""} 
                invalid={!state.category && state.submitted} 
              >
                <option value="" disabled selected hidden>
                 Pilih Kategori Mobil</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </Input>
              <FormFeedback type="invalid">
                Data Tidak Boleh Kosong!
              </FormFeedback>
            </Col>
          </FormGroup>
        
          <div className="ps-5 pt-4">
            <div className="d-flex gap-3 p-5">
              <Button style={{ borderColor: "#0D28A6" }} outline>
                Cancel
              </Button>
              <Button type="submit" style={{ backgroundColor: "#0D28A6" }}>
                Save
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Tes;