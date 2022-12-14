
import {
  Box,
  Button,
  Paragraph,
  Heading,
  Image,
  Text,
  Anchor
} from 'grommet';

import { useAppContext } from '../hooks/useAppState';


export default function Banner(props) {
  const { state } = useAppContext();

  return (
    <>
      <Box pad="medium" width="xxlarge" height="small" align="center">
        <Heading color="black" size="small" style={{
          font: "normal normal bold 50px/54px Poppins",
          letterSspacing: "0px",
          textTransform: "none"
        }}>
          Buy UnivToken
        </Heading>
        <Paragraph size="small" style={{
          font: "normal normal 600 14px/7px Poppins"
        }}>
          Some text here
        </Paragraph>
      </Box>
      <Box align="center">
        {
          !state.coinbase ?
            <Button primary size="medium" label="Connect" onClick={state.loadWeb3Modal} /> :
            <>
              <Text size="small">Connected</Text>
              <Text size="xsmall">{state.coinbase}</Text>
            </>
        }
        {
          state.srg &&
          state.netId === 80001 ?
          <Text size="xsmall">Univ Address: <Anchor href={`https://mumbai.polygonscan.com/address/${state.srg.address}`} target="_blank">{state.srg.address}</Anchor></Text> :
          state.netId === 97 ?
          <Text size="xsmall">Univ Address: <Anchor href={`https://testnet.bscscan.com/address/${state.srg.address}`} target="_blank">{state.srg.address}</Anchor></Text> :
          state.netId === 5 &&
          <Text size="xsmall">Univ Address: <Anchor href={`https://goerli.etherscan.io/address/${state.srg.address}`} target="_blank">{state.srg.address}</Anchor></Text>

        }
      </Box>
    </>
  )
}
