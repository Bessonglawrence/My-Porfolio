import React from 'react';
import styled from 'styled-components';
import blogs from '../../res/Data/blogs';
import Title from '../../components/Title';
import {MainLayout, InnerLayout } from '../../styles/Layout';

function Blog() {
  return (
      <MainLayout>
        <BlogStyled>
          <Title title={'Blogs'} span={'Blogs'} />
          <InnerLayout>
            {
              blogs.map((blog) =>{
                return<div key={blog.id} className='blog'>
                  <div className='image'>
                      <img src={blog.image} alt='' />
                  </div>
                  <div className='title'>
                      <h4>{blog.title}</h4>
                  </div>
                </div>
              })
            }
          </InnerLayout>
        </BlogStyled>
      </MainLayout>
  );
}

const BlogStyled = styled.div`
  .blog{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .image{
      width: 100%;
      height: 70%;
      img{
        width: 100%;
        height: 95%;
        object-fit: cover;
      }
    }
  }
`;

export default Blog;
