import React from 'react'
import { Tag } from "./style";

function TagRepo({repo,onclick}) {
  return (
    <Tag>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} id='btnVerMais' target={'_blank'}>Ver repositório</a>
        <button onClick={onclick} id='btnRemover'>X</button>
        <hr />

    </Tag>
  )
}

export default TagRepo  