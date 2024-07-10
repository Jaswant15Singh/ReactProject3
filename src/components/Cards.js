import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import { useDispatch } from "react-redux";
import {ADD} from "../redux/actions/Action"
const Cards = () => {
  const [data, setData] = useState(Cardsdata);;

  const dispatch=useDispatch();
  console.log(data);

  const Send=(e)=>{
    dispatch(ADD(e));
  }
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>
      <div className="row d-flex align-items-center justify-content-center">
        {data.map((e, id) => {
          return (
            <Card
              style={{ width: "22rem", border: "none" }}
              key={id}
              className="mx-2 mt-4 card_style"
            >
              <Card.Img
                variant="top"
                src={e.imgdata}
                style={{ height: "250px", objectFit: "cover" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{e.rname}</Card.Title>
                <Card.Text>price:{e.price}</Card.Text>
                <div className="button_div d-flex justify-content-center">
                  <Button onClick={()=>{Send(e)}} variant="primary" className="col-lg-12">
                    Add To Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
