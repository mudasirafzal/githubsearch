import React from 'react';
import styled from "styled-components";
import { css } from "emotion";

const Card = styled.div(() => ({
  border: "1px solid #efefef",
  overflowWrap: "break-word"
}));

const Title = styled.h5((props) => ({
  textAlign: "center",
  "& a": {
    color: "#2f2f2f",
    textTransform: "uppercase"
  }
}));
const RepoCard = (props) => {
  return (
      <Card className="main-card">
          <Title>
            <a target="_blank" href={props.repo.html_url} rel="noopener noreferrer">{props.repo.full_name}</a> 
          </Title>        
          <p><b>Owner : </b> <a target="_blank" href={props.repo.owner.html_url} rel="noopener noreferrer">{props.repo.owner.login}</a></p>
          <p><b>Forks : </b> {props.repo.forks_count}</p>
          <p><b>Watchers : </b> {props.repo.watchers_count}</p>
          <p title={props.repo.description}><b>Description : </b> {(props.repo.description!= null && props.repo.description.length > 30) ? props.repo.description.substring(0, 30) + '...' : props.repo.description}</p>
        
      </Card>
    );
}
export default RepoCard;