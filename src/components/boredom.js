import React from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

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

const Boredom = () => {

    return (
        <StyledDiv>
            <h2>Are You Bored?</h2>
            <h3>You must be if you came here, click The Button!</h3>
        </StyledDiv>
 
    );
};

export default Boredom;