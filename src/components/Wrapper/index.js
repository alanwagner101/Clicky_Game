import React from "react";
import "./style.css";
import Title from "../Title";
import Pics from "../Pictures";
import pictures from "../../pictures.json";

class Wrapper extends React.Component {

    picArr = [0,1,2,3,4,5,6,7,8,9,10,11];

    state = {
        count: 0,
        high: 0
    };

    increaseCounter = event => {

        let state = event.target;

        console.log(state.selected)

        console.log(parseInt(state.id))

        let changeState = this.picArr[state.id];
        


        if(state.selected) {
            for(let k = 0; k < pictures.length; k++) {
                pictures[k].clicked = false;
                this.setState({ count: 0 });
            }
        } else {
            this.setState({ count: this.state.count + 1 });
            pictures[changeState].clicked = true;
            if(this.state.count = this.state.high + 1) {
                this.setState({high: this.state.count});
            }
        }

        for(let i = 0; i < this.picArr.length; i++) {
            let j = Math.floor(Math.random() * 12);
            let temp = this.picArr[i];
            let newSpot = this.picArr[j];
            this.picArr[i] = newSpot;
            this.picArr[j] = temp;
        }



    };

    render() {
        return <div className="wrapper">
            <Title
                count={this.state.count}
                high={this.state.high}
            />
            <Pics
                img={pictures[this.picArr[0]].img}
                clicked={pictures[this.picArr[0]].clicked}
                increaseCounter={this.increaseCounter}
                id="0"
            />
            <Pics
                img={pictures[this.picArr[1]].img}
                clicked={pictures[this.picArr[1]].clicked}
                increaseCounter={this.increaseCounter}
                id="1"
            />
            <Pics
                img={pictures[this.picArr[2]].img}
                clicked={pictures[this.picArr[2]].clicked}
                increaseCounter={this.increaseCounter}
                id="2"
            />
            <Pics
                img={pictures[this.picArr[3]].img}
                clicked={pictures[this.picArr[3]].clicked}
                increaseCounter={this.increaseCounter}
                id="3"
            />
            <Pics
                img={pictures[this.picArr[4]].img}
                clicked={pictures[this.picArr[4]].clicked}
                increaseCounter={this.increaseCounter}
                id="4"
            />
            <Pics
                img={pictures[this.picArr[5]].img}
                clicked={pictures[this.picArr[5]].clicked}
                increaseCounter={this.increaseCounter}
                id="5"
            />
            <Pics
                img={pictures[this.picArr[6]].img}
                clicked={pictures[this.picArr[6]].clicked}
                increaseCounter={this.increaseCounter}
                id="6"
            />
            <Pics
                img={pictures[this.picArr[7]].img}
                clicked={pictures[this.picArr[7]].clicked}
                increaseCounter={this.increaseCounter}
                id="7"
            />
            <Pics
                img={pictures[this.picArr[8]].img}
                clicked={pictures[this.picArr[8]].clicked}
                increaseCounter={this.increaseCounter}
                id="8"
            />
            <Pics
                img={pictures[this.picArr[9]].img}
                clicked={pictures[this.picArr[9]].clicked}
                increaseCounter={this.increaseCounter}
                id="9"
            />

            <Pics
                img={pictures[this.picArr[10]].img}
                clicked={pictures[this.picArr[10]].clicked}
                increaseCounter={this.increaseCounter}
                id="10"
            />

            <Pics
                img={pictures[this.picArr[11]].img}
                clicked={pictures[this.picArr[11]].clicked}
                increaseCounter={this.increaseCounter}
                id="11"
            />
        </div>;
    }
}

export default Wrapper;