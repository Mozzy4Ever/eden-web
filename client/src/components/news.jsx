import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Row, Col } from 'react-bootstrap';
import YellBox from './yellbox';
import NewsBox from './newsbox';

function News() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Row className="min-vh-100 flex-column flex-lg-row">
      <Col>
        <NewsBox />
      </Col>
      {!isTabletOrMobile && (
        <Col lg={4} className="mb-3 mb-lg-0">
          <YellBox />
        </Col>
      )}
    </Row>
  );
}

export default News;
