import React, { Component } from "react";
import OneHome from "./oneHome";
class Home extends Component {
    constructor() {
        super()
        this.state = {
            info: [
                { id: 1, img: '/image/01.jpg', location: 'Aqaba', numOfRoom: 4, price: '30000$', phone: '+962786600991' },
                { id: 2, img: '/image/02.jpg', location: 'jordan', numOfRoom: 3, price: '13356$', phone: '+962786600991' },
                { id: 3, img: '/image/03.jpg', location: 'Jarash', numOfRoom: 9, price: '25460$', phone: '+962786600991' },
                { id: 4, img: '/image/04.jpg', location: 'Qouzom', numOfRoom: 6, price: '78946$', phone: '+962786600991' },
                { id: 5, img: '/image/05.jpg', location: 'Wenz', numOfRoom: 14, price: '14793$', phone: '+962786600991' },
                { id: 6, img: '/image/05.jpg', location: 'NewYork', numOfRoom: 12, price: '79286$', phone: '+962786600991' },
                { id: 7, img: '/image/06.jpg', location: 'UK', umOfRoom: 9, price: '19786$', phone: '+962786600991' },
                { id: 8, img: '/image/03.jpg', location: 'USA', numOfRoom: 7, price: '19800$', phone: '+962786600991' }
            ]


        }
    }

    mapping(y) {

        const x = y.map(singleHome =>
            < OneHome

                key={singleHome.id}
                mm={singleHome.img}
                location={singleHome.location}
                numOfRoom={singleHome.numOfRoom}
                price={singleHome.price}
                phone={singleHome.phone}

            />);
        return x

    }



    render() {

        return (
            <div className="row">
                {this.mapping(this.state.info)}

            </div>
        )
    }
}
export default Home