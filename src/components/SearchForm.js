import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import { css } from "emotion";
import { clearData } from '../actions/searchActions';
import { fetchUsers } from '../actions/userActions';
import { fetchRepos } from '../actions/repoActions';

import logo from '../assets/img/git.svg';

const Wrapper = styled.div((props) => ({
  maxWidth: "600px",
  margin: "20px auto",
  marginTop: "15%"
}));
const Logo = styled.h3((props) => ({
  display: "flex",
  alignItems: "baseline"
}));
const Heading = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
}));
const Tagline = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
}));

const SearchForm = () => {

  const [listValue, setlistValue] = useState('users');
  const [text, setText] = useState('');
  const [top, setTop] = useState("false");
  const [plc, setPlc] = useState('Start typing to search users ..');
  const dataList = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  const changeText = (event) => {
    setText(event.target.value)
  }

  const changeListView = (event) => {
    setTop("false");
    setText('')
    setlistValue(event.target.value)
    setPlc(event.target.value === 'users' ? 'Start typing to search users ..' : 'Start typing to search repos ..')
    dispatch(clearData())
  }

  const updateData = () => {
    if (text.length > 2) {
      setTop("true");
      listValue === "users" ? dispatch(fetchUsers(text)) : dispatch(fetchRepos(text));
    }  
    else if(dataList.length) {
      dispatch(clearData())
      setTop("false");
    }
  };

  useEffect(()=>{
    updateData();
  },[text])
  
  
  
  return (
    <React.Fragment>
      {console.log(top)}
      <Wrapper className = {
        top === "true" ? 'moveTop' : 'moveDown'
      } >
        <Heading>
          <Logo>
            <img
              src={logo}
              alt="Logo"
              width="40px"
              style={{ marginTop: "5px" }}
            />
            <Tagline>
            <font>GitHub Searcher</font>
              <p className={css`
                font-size: 15px;
                color: #8a8a8a;
                margin-top:0px;
                font-weight:normal;
              `}>
                Search users or repositories below</p>
            </Tagline>
          </Logo>
        </Heading>
        <form
          className={css`
            display: flex;
          `}
        >
          <input
            type="text"
            name="text"
            placeholder={plc}
            onChange={changeText}
            value={text}
            className={css`
              flex-grow: 1;
              border: 1px solid #d8d8d8;
              padding: 5px 10px;
              height:40px;
              font-size:16px;
            `}
          />
          <select
            name="listValue"
            value={listValue}
            onChange={changeListView}
            className={css`
              padding : 10px;
              border: 1px solid #d8d8d8;
              color: #aaa;
              margin-left: 15px;
            `}
          >
            <option value="users"> Users </option>
            <option value="repos"> Repos </option>
          </select>
        </form>
      </Wrapper>
    </React.Fragment>
  );  
}


export default SearchForm;