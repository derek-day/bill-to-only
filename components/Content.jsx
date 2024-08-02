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
    
    {/* {user && (
    <> */}
      <div className='mt-5 mb-5 p-5 form-background'>

        <h4 className="mb-4" style={{color:"#737373"}}>Please use this form to submit a Bill-To-Only order</h4>

        <form>

          <h5><span className='warn'>*</span> Rep ADP #</h5>
          <input type="text" name="name" placeholder="Enter ADP # of rep" />

          <br/><br/>

          <h5><span className='warn'>*</span> Account # to bill</h5>
          <input type="text" name="name" placeholder="Enter account # of the customer to bill" />

          <br/><br/>

          <h5><span className='warn'>*</span> Account # to credit</h5>
          <input type="text" name="name" placeholder="Enter account # of the account to credit" />

          <br/><br/>

          <h5><span className='warn'>*</span> Model</h5>
          <input type="text" name="name" placeholder="Enter frame model" />

          <br/><br/>

          <h5><span className='warn'>*</span> Color</h5>
          <input type="text" name="name" placeholder="Enter frame color" />

          <br/><br/>

          <h5><span className='warn'>*</span> Eye</h5>
          <input type="text" name="name" placeholder="Enter frame eye size" />

          <br/><br/>

          <h5><span className='warn'>*</span> Replace sample?</h5>
          {/* Yes/No checkbox */}
            <input type="radio" id="html" name="fav_language" value="Yes" />
            <label for="yes">Yes</label><br />
            <input type="radio" id="css" name="fav_language" value="No" />
            <label for="no">No</label><br />

          <br/><br/>

          <h5><span className='warn'>*</span> Send cases?</h5>
          {/* Yes/No checkbox */}
          <input type="radio" id="html" name="fav_language" value="Yes" />
          <label for="yes">Yes</label><br />
          <input type="radio" id="css" name="fav_language" value="No" />
          <label for="no">No</label><br />

          <br/><br/>

          <h5><span className='warn'>*</span> Use courtesy?</h5>
          {/* Yes/No checkbox */}
          <input type="radio" id="html" name="fav_language" value="Yes" />
          <label for="yes">Yes</label><br />
          <input type="radio" id="css" name="fav_language" value="No" />
          <label for="no">No</label><br />

          <br/><br/>

          <h5>Comments</h5>
          {/* Comment box */}
          <textarea name="comment" form="usrform"></textarea>
          <p style={{color:"#737373"}}>Please note that entering comments may delay this Bill-To-Only order due to manual processing.</p>

          <br/><br/>

          <button type="button">Reset</button>
          <button type="button">Submit</button>

        </form>

        <h6><span className='warn'>*</span> - required fields</h6>
      </div>
    {/* </>
    )} */}

  </div>
  )
};

export default Content;
