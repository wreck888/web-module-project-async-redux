import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getActivity } from "../actions";

const StyledDiv = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #f3f3f3;
    color: red;
    
`

const boredomActivity = ({ activity, dispatch }) => {


    const handleClick = () => {
        dispatch(getActivity());
        
    }

    return (
        <div>
        <button onClick={handleClick}>The Button</button>
        <StyledDiv>
            <h3>Try Doing This: {activity.activity}</h3><br/>
            <h2>Price: ${activity.price}</h2><br/>
        </StyledDiv>
        </div>

    );
};

const mapToStateToProps = state => {
    return {
        activity: state.activity,
        price: state.price
    }
}

export default connect(mapToStateToProps)(boredomActivity);