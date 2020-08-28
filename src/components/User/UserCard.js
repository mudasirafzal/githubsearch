import React from 'react';

import styled from "styled-components";
import { css } from "emotion";

const Card = styled.div(() => ({
  border : "1px solid #efefef",
}));

const CardImg = styled.div(() => ({
  padding: "5%",
  "& img": {
    width:"100%"
  }
}));
const CardBody = styled.div(() => ({
  padding:   "15px",
  textAlign : "left!important"
}));

const Title = styled.h5((props) => ({
  textAlign: "center",
  "& a": {
    color: "#2f2f2f",
    textTransform: "uppercase"
  }
}));


const UserCard = (props) => {
  const { user } = props;

  console.log(user, 'user log');

    return (
      <Card className="main-card">
        <CardImg>
          <img src={user?.avatar_url} alt=""/>
        </CardImg>
        <CardBody>
          <Title>
            <a target="_blank" href={user?.html_url} rel="noopener noreferrer">{user?.login}</a> 
          </Title>        
        </CardBody>
      </Card>
    );
}


export default UserCard;