import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: underline;
`;

const Market = ({ exchange_name, market_url }) => (
  <Container>
    <Link href={market_url}>{exchange_name}</Link>
  </Container>
);

Market.propTypes = {
  exchange_id: PropTypes.string.isRequired,
  exchange_name: PropTypes.string.isRequired,
  market_url: PropTypes.string.isRequired
};

export default Market;
