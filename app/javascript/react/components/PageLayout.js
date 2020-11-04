import React from "react"
import {Switch, Route} from "react-router-dom"

const PageLayout = (props) => {


  return (
    <div className="sticky-footer-css">
      <div className="row expanded flex-dir-column">

      <div className="columns shrink header text-center">
        <div className="top-bar">
          <h3>navbar here... with bread crumbs?</h3>
        </div> 
        <p>Header</p>
        <ul className="menu align-center">
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
          <li><a href="">Link</a></li>
        </ul>
      </div>

      <div className="columns sticky-footer-css-body text-center">
       
        <div className="leftpane">

          <h3> left </h3>
        </div>

        <div className="centerpane">
          <div>
            <h3> center </h3>
          </div>

          <p>Body Content</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          
          {/* 
          <p> 
            
            <img src="https://placeholder.pics/svg/300x300/1797FF-773BFF" alt="" />
            <img src="https://placeholder.pics/svg/300x300/1797FF-773BFF" alt="" />
            <img src="https://placeholder.pics/svg/300x300/1797FF-773BFF" alt="" /></p>
            
            
          */}
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse beatae aspernatur tempore similique enim, doloribus et ullam quam itaque sit! Molestias, perspiciatis omnis illo aliquam dignissimos laborum iste? Autem, esse?</p>
          
        </div>

        <div className="rightpane">
          <h3> right</h3> 
        </div>

      </div>

    

        <div className="columns shrink footer text-center">
          <p>Footer</p>
          <ul className="menu align-center">
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
          </ul>
        </div>

      </div>
    </div>)
      
}
  
export default PageLayout 


