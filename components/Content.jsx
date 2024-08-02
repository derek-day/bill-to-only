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
    
    {user && (
    <>
      <div className='mt-5 text-center' data-testid="pdf-items" style={{textAlign:'center'}}>
        <h4 className="my-4">
          <a href="/comdue">Comdue</a>
        </h4>
        <h4 className="my-4">
          <a href="/daily">Daily</a>
        </h4>
        <h4 className="my-4">
          <a href="/rcp">Rep Commissions</a>
        </h4>
        <h4 className="my-4">
          <a href="/sample">Sample Bag</a>
        </h4>
        <h4 className="my-4">
          <a href="/territory">Territory Listings</a>
        </h4>
        <h4 className="my-4">
          <a href="/ytd">YTD Critical</a>
        </h4>
      </div>
    </>
    )}

  </div>
  )
};

export default Content;
