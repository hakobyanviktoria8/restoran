import React, { useState, useEffect } from "react";
import "./Menu.css";
import { Container, Row, Col } from 'reactstrap';
import Button from '@material-ui/core/Button';
import basket from "./basket.png";
import ModalComp from "./Modal";
import LikeButton from "./Like/Like";

export function Menu(props) {
    const [rowData, setRowData] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, {...item}]);   //3 remove onli 1 item
    };

    useEffect(()=>{
        const fetchData  = async() => {
            let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=chicken");
            if(response.ok){
                let dataArr = await response.json();
                setRowData(dataArr.recipes);
            } else{
                alert("Error")
            }
        };
        fetchData();
    },[]);

    return(
        <Container>
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <h1 className={"text-center my-3"}>MENU</h1>
                    <ModalComp cart={cart}/>
                </Col>
            </Row>
            <Row>
            {
                rowData.map(item=>
                    <Col xs="12" sm="10" md="6" lg="4" xl="4" className={"col"} key={item.recipe_id}>
                        <div className={"card"}>
                            <h3 className={"titleMenu"}>{item.title}</h3>
                            <h6 className={"publisher"}>{item.publisher}</h6>
                            <img className={"imgMenu"} src={item.image_url} alt=""/>
                            <Row className={"my-3"}>
                                <Col xs="2" sm="2" md="2" lg="2" xl="2">
                                    <LikeButton itemId = {item.recipe_id} />
                                </Col>
                                <Col xs="7" sm="7" md="7" lg="7" xl="7" className={"text-center"}>
                                    <Button className={"buttonMenu"} variant="contained">
                                        <a href={item.source_url}>See More</a>
                                    </Button>
                                </Col>
                                <Col xs="3" sm="3" md="3" lg="3" xl="3">
                                    <button onClick={() => addToCart(item)}>
                                        <img className={"basket"} src={basket} alt=""/>
                                    </button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                )
            }
            </Row>
        </Container>
    )
}