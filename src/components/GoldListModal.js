import { useState,useEffect } from 'react';

import {
  Box,
  Layer,
  Image,
  Text,
  TextInput,
  Button
} from 'grommet';
import { ethers } from "ethers";


export default function GoldListModal(props) {


  const [total, setTotal] = useState();

  const [srgExpect,setSrgExpect] = useState();
  const [msg,setMsg] = useState();

  useEffect(() => {
    if(total > 0 && props.value==="Native"){
      try{
        props.getExpectedSrg(total).then(amount => {
          console.log(amount)
          setSrgExpect(amount)
        })
      }catch(err){
        console.log(err)
      }
    }
    if(total > 0  &&  props.value==="Stablecoin"){
      setSrgExpect(Number(total)/0.12);
    }
  },[total,props]);


  return (

      <Box align="center" pad="medium">
      {
        props.provider && props.coinbase &&
        <>
        <Text>
          Amount of {' '}
          {
            props.value === "Native" ?
              props.netId === 5 ?
              "Goerli ETH" :
              props.netId === 97 ?
              "BNB" :
              "Matic" :
            "USD"
          }
        </Text>
        <Box width="small">
          <input
            placeholder="Amount"
            onChange={(e) => {

              if(e.target.value < 0 || (e.target.value > 0 && e.target.value <= 0.0001)){
                e.target.value = 0.0001
              }
              setTotal(e.target.value)
            }}
            type="number"
            step="0.0001"
            min={0.0001}
            value={total}
         />
        </Box>
        {
          srgExpect && total &&
          <Text size="small">{srgExpect} SRG</Text>
        }
        {
          total > 0 &&
          <Button primary onClick={async () => {
            try{
              await props.buyTokens(total);
            } catch(err){
              console.log(err)
              setMsg(err.reason)
            }
            setTimeout(() => {
              setMsg()
            },3000)
          }} label="Buy" />
        }
        {
          msg &&
          <Text size="small">{msg}</Text>
        }
        </>

      }
      </Box>

  )
}
