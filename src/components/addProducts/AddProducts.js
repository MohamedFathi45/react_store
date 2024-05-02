import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import FormInput from "../../shared/FormInput";
import "../../styles/input_form.css";
import "../../styles/combobox.css";
import { useEffect, useState } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

const AddProducts = () => {
  const [products, setProducts] = useState([]);
  const [options, setOptions] = useState([]);
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const [type, setType] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer.data);
    };

    getProducts();
  }, []);

  const optionsJSX = React.createElement(() => {
    return options.map((v) => {
        return (
          <>
            <FormInput feild_name={v} placeHolder={v} id={v.toLowerCase()} />
          </>
        );
    });
  });

  const showErrors = React.createElement(() => {
    return errors.map((v) => {
      return (
        <>
          <p style={{ color: "red" }}> {v} </p>
        </>
      );
    });
  });

  function validate_all_feilds(values) {
    let object_feilds = 0;
    for (const [key, value] of Object.entries(values)) {
      if (value === "") return false;
      object_feilds++;
    }
    if (object_feilds === 3) return false;
    return true;
  }

  const getJsonObject = (values) => {
    let ret = {};
    for (const [key, value] of Object.entries(values)) {
      const k = key.toLowerCase();
      ret[k] = value;
    }
    return ret;
  };

  const handelSubmit = (event) => {
    const element = document.getElementById("product_form");
    const data = new FormData(element);
    let values = Object.fromEntries(data.entries());
    let err = [];
    if (!validate_all_feilds(values)) {
      err.push("Please, submit required data");
    }
    if (values.Price !== "" && !Number(values.Price)) {
      err.push("Please, provide the data of indicated type");
    }
    if (err.length === 0) {
      setErrors([]);
      values = getJsonObject(values);
      values["type"] = type;
      fetch(
        "https://voided-lack.000webhostapp.com/react_store/index.php/addproduct",
        {
          method: "POST",
          body: JSON.stringify(values),
        }
      ).then(() => {
        history.push("/");
      });
    } else setErrors(err);
  };

  const getProcessedProducts = () => {
    let proccessed = [];
    let temp = Object;
    proccessed.push({'value' : 'Choose Type'})
    for (const key in products) {
      temp = {
        value: key,
      };
      proccessed.push(temp);
    }
    return proccessed;
  };

  const fetchProducts = async () => {
    const res = await fetch(
      "https://voided-lack.000webhostapp.com/react_store/index.php/products"
    );
    const data = await res.json();
    return data;
  };

  const onChange = (event) => {
    const value = event.target.value;
    if(value === 'Choose Type')
      setOptions([])
    else
      setOptions(products[value]);
    setType(value)
  };

  const onCancelButtonClicked = () => {
    history.push("/");
  };

  return (
    <div>
      <Header
        headerText="Product Add"
        btn1Text="Save"
        btn2Text="Cancel"
        button1Clicked={handelSubmit}
        button2Clicked={onCancelButtonClicked}
      />

      <div className="product_frm">
        <form id="product_form" onSubmit={handelSubmit}>
          <FormInput feild_name="SKU" placeHolder="add product sku" id="sku" />
          <FormInput
            feild_name="Name"
            placeHolder="add product name"
            id="name"
          />
          <FormInput
            feild_name="Price"
            placeHolder="add product price"
            id="price"
          />

          <div className="combobox">
            <div>Type Switcher</div>
            <div>
              <select name = 'type switcher' id ='productType' onChange = {onChange}>
                {
                  getProcessedProducts().map( (element)=>{
                      return <option value = {element.value} id = {element.value} label = {element.value} key = {element.value} ></option>
                  } )
                }
              </select>
            </div>
          </div>
          <div id="product-feilds">{optionsJSX}</div>

          <div id="errors">{showErrors}</div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AddProducts;
