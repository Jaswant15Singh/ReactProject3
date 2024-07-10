import React, { useEffect, useState } from "react";
import "./style.css";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CardDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);


  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id === id;
    });
    setData(compareData);
    console.log(data);
  };
  useEffect(() => {
  
    compare();
  }, []);
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items details page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails ">
            {data.map((e) => {
              return (
                <>
                  <div className="items_img">
                    <img src={e.imgdata} alt="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <b>Restaurant</b>:{e.rname}
                          </p>

                          <p>
                            <b>Price</b>:{e.price}
                          </p>

                          <p>
                            <b>Dishes</b>:Masala Theory
                          </p>

                          <p>
                            <b>Totak</b>:300
                          </p>
                        </td>
                        <td>
                          <p>
                            <b>Rating:</b>
                            <span
                              style={{
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              3.5 &#9733;
                            </span>
                          </p>
                          <p>
                            <b>Order Review:</b>
                            <span>1150+ orders placed</span>
                          </p>
                          <p>
                            <b>Remove:</b>
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: "20px",
                                  cursor: "pointer",
                                }}
                              ></i>{" "}
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
