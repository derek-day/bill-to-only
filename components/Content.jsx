"use client";

import React, {useEffect, useState} from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';
import { useUser } from '@auth0/nextjs-auth0/client';

const Content = () => {
  const { user, isLoading } = useUser();

  useEffect(() => {
    document.title = 'Tura | Bill-To-Only';
  }, []);

  function eraseText() {
    document.getElementById("comment").value = "";
  }

  function sendMail() {
    document.getElementById("comment").value = "";
  }

  return (

  <div className="next-steps my-3" data-testid="content">

{user && (
    <>
      <h3 className="mb-5 text-center" data-testid="content-title">
        Welcome, {user.first}
      </h3>
</>
)}

    <h1 className="my-4 text-center" data-testid="content-title">Bill-To-Only</h1>

    <div className='mt-5 mb-5 p-5 form-background'>
      <h4 className='text-center mb-0' style={{color:"#5f5f5f"}}>Please login to submit a Bill-To-Only order</h4>
    </div>
    
    {/* {user && (
    <> */}
      <div className='mt-5 mb-5 p-5 form-background'>

        <h4 className="mb-4" style={{color:"#5f5f5f"}}>Please use this form to submit a Bill-To-Only order</h4>
        <h5><span className='warn'>*</span> - required fields</h5>
        <br></br><br></br>

        <form>

          <h5><span className='warn'>*</span> Rep ADP #</h5>
          <input className='mb-3' type="text" name="name" placeholder="Enter ADP # of rep" size="70" />

          <br/><br/>

          <h5><span className='warn'>*</span> Account # to bill</h5>
          <input className='mb-3' type="text" name="name" placeholder="Enter account # of the customer to bill" size="70" />

          <br/><br/>

          <h5><span className='warn'>*</span> Account # to credit</h5>
          <input className='mb-3' type="text" name="name" placeholder="Enter account # of the account to credit" size="70" />

          <br/><br/>

          <h5><span className='warn'>*</span> Model</h5>
          <input className='mb-3' type="text" name="name" placeholder="Enter frame model" size="70" />

          <br/><br/>

          <h5><span className='warn'>*</span> Color</h5>
          <input className='mb-3' type="text" name="name" placeholder="Enter frame color" size="70" />

          <br/><br/>

          <h5><span className='warn'>*</span> Eye</h5>
          <input className='mb-5' type="text" name="name" placeholder="Enter frame eye size" size="70" />


          <div className="mb-4">
            <h5><span className='warn'>*</span> Replace sample?</h5>
            {/* Yes/No checkbox */}
            <input type="radio" id="html" name="fav_language" value="Yes" />
            <label for="yes" style={{paddingLeft:"0.25rem"}}>Yes</label><br />
            <input type="radio" id="css" name="fav_language" value="No" />
            <label for="no" style={{paddingLeft:"0.25rem"}}>No</label><br />
          </div>

          <div className="mb-4">
            <h5><span className='warn'>*</span> Send cases?</h5>
            {/* Yes/No checkbox */}
            <input type="radio" id="html" name="fav_language" value="Yes" />
            <label for="yes" style={{paddingLeft:"0.25rem"}}>Yes</label><br />
            <input type="radio" id="css" name="fav_language" value="No" />
            <label for="no" style={{paddingLeft:"0.25rem"}}>No</label><br />
          </div>

          <div className="mb-5">
            <h5><span className='warn'>*</span> Use courtesy?</h5>
            {/* Yes/No checkbox */}
            <input type="radio" id="html" name="fav_language" value="Yes" />
            <label for="yes" style={{paddingLeft:"0.25rem"}}>Yes</label><br />
            <input type="radio" id="css" name="fav_language" value="No" />
            <label for="no" style={{paddingLeft:"0.25rem"}}>No</label><br />
          </div>

          <div className="mb-5">
            <h5>Comments</h5>
            {/* Comment box */}
            <textarea id="comment" name="comment" form="usrform" rows="4" cols="70"></textarea>
            <p style={{color:"#5f5f5f"}}>Note that entering comments may delay this Bill-To-Only order due to manual processing.</p>
          </div>

          <button className='btobutton' type="button" style={{marginRight:"1rem"}} onClick={sendMail}>Submit</button>
          <input className='btobutton' type="reset" value="Reset" onClick={eraseText} />

        </form>

      </div>
    {/* </>
    )} */}

  </div>
  )
};

export default Content;
