import React from 'react';
import styled,{css} from 'styled-components';
import {NavLink} from 'react-router-dom'

const categories = [
  {name : 'all',
  text:'전체보기'},
  {name : 'business',
    text:'비지니스'},
  {name : 'entertainment',
    text:'엔터테인먼트'},
  {name : 'health',
    text:'건강'},
  {name : 'science',
    text:'과학'},
  {name : 'sports',
    text:'스포츠'},
  {name : 'tech',
    text:'기술'},
]

const CategoriesBlock = styled.div`
  display:flex;
  padding: 1rem;
  width:768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
  width: 100%;
  overflow-x: auto;
  }
  `;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor:pointer;
  white-space: pre;
  text-decoration: none;
  color:inherit;
  padding-bottom: 0.25rem;
  
  &:hover {
  color: #495057;
  }
  
    &.active{
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover{
    color: #3bc9db;
    }
    }
  
  & + & {
  margin-left: 1rem;
  }
  `;

const Categories = () => {
  return (
    <CategoriesBlock >
      {categories.map( c => (
        <Category key={c.name}
         activeClassName="active"
         exact={c.name === 'all'}//true로해야해 다른 카테괼가 선택되었을때도 전체보기 링크에 active스타일이 적용될수 있기 때문에.
          to={c.name === 'all'? '/' : `/${c.name}`} //카테고리 이름, 전체보기만 예외적으로 /all 대신 /lrj
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  )
}

export default Categories;
