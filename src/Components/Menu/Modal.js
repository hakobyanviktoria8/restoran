import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./Modal.css";
import del from "./delete.png";

const ModalComp = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [myCart, setMyCart] = React.useState([...props.cart]);

    React.useEffect(() => {
        setMyCart(props.cart);
    }, [props.cart]);

    const removeFromCart = (item) => {
        setMyCart(myCart.filter(x=>x!==item))
    };

    return (
        <div>
            <Button  onClick={toggle} className={"modalBtn"}>
                My Cart ({myCart.length})
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>101 CookBooks Menu My Cart</ModalHeader>
                <ModalBody>
                    <table>
                        <thead>
                            <tr>
                                <th style={{width:"20%"}}>Image</th>
                                <th style={{width:"50%"}}>Title</th>
                                <th style={{width:"20%"}}>Publisher</th>
                                <th style={{width:"10%"}}>Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myCart.map((item,idx)=>
                                <tr key={idx}>
                                    <td className={"tdImg"}><img src={item.image_url} alt=""/></td>
                                    <td >{item.title}</td>
                                    <td>{item.publisher}</td>
                                    <td>
                                        <button onClick = {() => removeFromCart(item)}>
                                            <img src={del} alt=""/>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalComp;