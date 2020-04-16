import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Symbol = styled.div``;

const DetailExchanges = ({ name, fiats }) => (
  <Container>
    <Name>{name}</Name>
    <Symbol>Pay On {fiats && fiats.map(f => `${f.symbol} `)}</Symbol>
  </Container>
);

DetailExchanges.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fiats: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default DetailExchanges;
