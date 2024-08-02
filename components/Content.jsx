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

    <h1 className="my-4 text-center" data-testid="content-title">
      Bill-To-Only
    </h1>
    
    {/* {user && (
    <> */}
      <div className='mt-5'>
        <h2>Please use this form to submit a Bill-To-Only order</h2>

        <form>

          <h3><span className='warn'>*</span> Rep ADP #</h3>
          <input type="text" name="name" placeholder="Enter ADP # of rep" />

          <br/><br/>

          <h3><span className='warn'>*</span> Account # to bill</h3>
          <input type="text" name="name" placeholder="Enter account # of the customer to bill" />

          <br/><br/>

          <h3><span className='warn'>*</span> Account # to credit</h3>
          <input type="text" name="name" placeholder="Enter account # of the account to credit" />

          <br/><br/>

          <h3><span className='warn'>*</span> Model</h3>
          <input type="text" name="name" placeholder="Enter frame model" />

          <br/><br/>

          <h3><span className='warn'>*</span> Color</h3>
          <input type="text" name="name" placeholder="Enter frame color" />

          <br/><br/>

          <h3><span className='warn'>*</span> Eye</h3>
          <input type="text" name="name" placeholder="Enter frame eye size" />

          <br/><br/>

          <h3><span className='warn'>*</span> Replace sample?</h3>
          {/* Yes/No checkbox */}
            <input type="radio" id="html" name="fav_language" value="Yes" />
            <label for="yes">Yes</label><br />
            <input type="radio" id="css" name="fav_language" value="No" />
            <label for="no">No</label><br />

          <br/><br/>

          <h3><span className='warn'>*</span> Send cases?</h3>
          {/* Yes/No checkbox */}
          <input type="radio" id="html" name="fav_language" value="Yes" />
          <label for="yes">Yes</label><br />
          <input type="radio" id="css" name="fav_language" value="No" />
          <label for="no">No</label><br />

          <br/><br/>

          <h3><span className='warn'>*</span> Use courtesy?</h3>
          {/* Yes/No checkbox */}
          <input type="radio" id="html" name="fav_language" value="Yes" />
          <label for="yes">Yes</label><br />
          <input type="radio" id="css" name="fav_language" value="No" />
          <label for="no">No</label><br />

          <br/><br/>

          <h3>Comments</h3>
          {/* Comment box */}
          <textarea name="comment" form="usrform"></textarea>
          <h4>Please note that entering comments may delay this Bill-To-Only order due to manual processing.</h4>

          <br/><br/>

          <button type="button">Reset</button>
          <button type="button">Submit</button>

        </form>


        <h4><span className='warn'>*</span> - required fields</h4>
      </div>
    {/* </>
    )} */}

  </div>
  )
};

export default Content;
