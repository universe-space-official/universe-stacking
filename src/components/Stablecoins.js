import { useState,useMemo } from 'react';

import {
  Box,
  Select
} from 'grommet';
import { ethers } from "ethers";

import abis from "../contracts/abis";

export default function Stablecoins(props) {

  const [value,setValue] = useState(props.stablecoins[0].name);
  const [balance,setBalance] = useState();


  return (

      <Box align="center" pad="medium">
      {
        props.stablecoins &&
        <Select
          options={props.stablecoins.map(item => item.name)}
          value={value}
          onChange={({ option }) => {
            setValue(option)
            const items = props.stablecoins.filter(item => {
              return item.name === option
            });
            const newBusd = new ethers.Contract(items[0].id,abis.srg,props.provider);
            props.setBusd(newBusd);
          }}
        />
      }
      </Box>

  )
}
