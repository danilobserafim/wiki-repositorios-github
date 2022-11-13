import githubImg from "../public/github.png";
import Image from "next/image";
import styled, { createGlobalStyle } from "styled-components";
import Input  from "../components/Input";
import TagRepo from "../components/TagRepo";
import { useState } from "react";
import { api } from '../services/api'
import { ButtonSearch } from "../components/Button";



const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;
  font-family: sans-serif;
  img{
    height: 72px;
    width: 72px;
  }
  `
const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body{
    background-color: #222235;
    color: white;

  }
`


export default function Home() {
  const [repoBusca, setRepoBusca] = useState('')
  const [repos, setRepos] = useState([])

  const handleRepos = async ()=>{
    try {
      const {data} = await api.get(`/repos/${repoBusca}`)
  
      if (data.id && !repos.find(repo => repo.id === data.id)) {
        setRepos(prev => [...prev, data])
        setRepoBusca('')
        return
      } 
      alert("item já adicionado")
  
    } catch (error) {
      alert("Nada encontrado")
    }
    
  }
  function removeItem(id) {
    const result = repos.filter(repo => repo.id !== id)
    setRepos(result)
    
  }


  return (
    <Container>
      <GlobalStyles />
      <Image src={githubImg} />
      <Input value={repoBusca} onchange={(e) => setRepoBusca(e.target.value)}/>
      <ButtonSearch onClick={handleRepos} >Buscar</ButtonSearch>
      {repos.map((repo)=> <TagRepo repo={repo} onclick={() => removeItem(repo.id)} /> )}
    </Container>
  )
}
