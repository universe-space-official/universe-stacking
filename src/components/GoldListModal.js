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
import { useAppContext } from '../hooks/useAppState';


export default function GoldListModal(props) {

  const { state } = useAppContext();

  const [total, setTotal] = useState();

  const [srgExpect,setSrgExpect] = useState();
  const [msg,setMsg] = useState();
  const [tx,setTx] = useState();

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
        state.provider && state.coinbase &&
        <>
        <Text>
          Amount of {' '}
          {
            props.value === "Native" ?
              state.netId === 5 ?
              "Goerli ETH" :
              state.netId === 97 ?
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
          <Button primary disabled={tx} onClick={async () => {
            try{
              setTx(true)
              await props.buyTokens(total);
              setTx(false)
            } catch(err){
              console.log(err)
              setTx(false)
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
