import React, { useState } from 'react';
import './pdp.css';
import Description from "../components/description/description";
import {Constants} from "../constants";

const PDP = ({ match }) => {
  const [pdpInfo, setPdpInfo] = useState(Constants.pdpInfo);

  return (
    <div className={'pdp'}>
      PDP page
      {match.params.id}
      {pdpInfo && <Description info={pdpInfo} />}
    </div>
  );
};

export default PDP;
