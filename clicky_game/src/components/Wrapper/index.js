import React from "react";
import "./style.css";
import Title from "../Title";
import Pics from "../Pictures";
import pictures from "../../pictures.json";

class Wrapper extends React.Component {

    picArr = [0,1,2,3,4,5,6,7,8,9,10,11];

    state = {
        count: 0
    };

    increaseCounter = () => {

        let btnInfo = document.getElementsByClassName("btn");

        console.log(this)

        for(let i = 0; i < this.picArr.length; i++) {
            let j = Math.floor(Math.random() * 12);
            let temp = this.picArr[i];
            let newSpot = this.picArr[j];
            this.picArr[i] = newSpot;
            this.picArr[j] = temp;
        }

        console.log(this.picArr);

        this.setState({ count: this.state.count + 1 })

    };

    render() {
        return <div className="wrapper">
            <Title
                count={this.state.count}
            />
            <Pics
                img={pictures[this.picArr[0]].img}
                clicked={pictures[this.picArr[0]].clicked}
                increaseCounter={this.increaseCounter}
            />
            <Pics
                img={pictures[this.picArr[1]].img}
                clicked={pictures[this.picArr[1]].clicked}
                increaseCounter={this.increaseCounter}
            />
            <Pics
                img={pictures[this.picArr[2]].img}
                clicked={pictures[this.picArr[2]].clicked}
                increaseCounter={this.increaseCounter}
            />
            <Pics
                img={pictures[this.picArr[3]].img}
                clicked={pictures[this.picArr[3]].clicked}
                increaseCounter={this.increaseCounter}
            />
            <Pics
                img={pictures[this.picArr[4]].img}
                clicked={pictures[this.picArr[4]].clicked}
                increaseCounter={this.increaseCounter}
            />
            <Pics
                img={pictures[this.picArr[5]].img}
                clicked={pictures[this.picArr[5]].clicked}
                increaseCounter={this.increaseCounter}
            />
            <Pics
                img={pictures[this.picArr[6]].img}
                clicked={pictures[this.picArr[6]].clicked}
                increaseCounter={this.increaseCounter}
            />
            <Pics
                img={pictures[this.picArr[7]].img}
                clicked={pictures[this.picArr[7]].clicked}
                increaseCounter={this.increaseCounter}
            />
            <Pics
                img={pictures[this.picArr[8]].img}
                clicked={pictures[this.picArr[8]].clicked}
                increaseCounter={this.increaseCounter}
            />
            <Pics
                img={pictures[this.picArr[9]].img}
                clicked={pictures[this.picArr[9]].clicked}
                increaseCounter={this.increaseCounter}
            />

            <Pics
                img={pictures[this.picArr[10]].img}
                clicked={pictures[this.picArr[10]].clicked}
                increaseCounter={this.increaseCounter}
            />

            <Pics
                img={pictures[this.picArr[11]].img}
                clicked={pictures[this.picArr[11]].clicked}
                increaseCounter={this.increaseCounter}
            />
        </div>;
    }
}

export default Wrapper;