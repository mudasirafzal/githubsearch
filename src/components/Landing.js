import React from 'react';

import { useSelector } from 'react-redux';
import styled from "styled-components";
import { css } from "emotion";
import SearchForm from './SearchForm';
import RepoList from './Repo/RepoList';
import UserList from './User/UserList';

const ResultList = styled.div(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between"
}));

const Landing = () => {
  	
    const selectedType = useSelector((state)=> state.data.dataType);
    const data = useSelector((state)=> state.data.data);
  	const text = useSelector((state)=> state.data.text);

    if(text.length >2 && !data.length)
    {
      return(
        <div className="container">
          <SearchForm />
          <ResultList>
            <h4>NO DATA FOUND</h4>
          </ResultList>
        </div>
      )
    }

    return (
      <div className="container">
        <SearchForm />
        <ResultList>
        	{ selectedType === 'users' ? <UserList /> : <RepoList /> }
        </ResultList>
      </div>
    );  
}

export default Landing;

