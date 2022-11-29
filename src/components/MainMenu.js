
import {
  Header,
  Button,
  Image,
  Menu,
  Text,
} from 'grommet';

import { useAppContext } from '../hooks/useAppState';

export default function MainMenu(props) {
  const { state } = useAppContext();

  return (
    <Header background="none" pad="small" style={{
      boxShadow: "0px 3px 6px #0000001A",
    }}>
      {/* <Image
        src={require("../assets/logo.png")}
      /> */}
      {
        !state.coinbase ?
        <Button label="Connect" primary onClick={state.loadWeb3Modal} /> :
        <Text size="medium">Connected as {state.coinbase}</Text>
      }
    </Header>
  )
}
