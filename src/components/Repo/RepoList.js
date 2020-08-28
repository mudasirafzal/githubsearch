import React from 'react';
import { useSelector } from 'react-redux';
import RepoCard from './RepoCard';

const RepoList = () => {

  const repos = useSelector((state) => state.data.data);

  let content =  repos.map((repo, index) => (
    <RepoCard key={index} repo={repo} />
  ));
    return content;
}

export default RepoList;