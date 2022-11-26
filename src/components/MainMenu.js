
import {
  Header,
  Button,
  Image,
  Menu,
} from 'grommet';


export default function MainMenu(props) {

  return (
    <Header background="none" pad="small" style={{
      boxShadow: "0px 3px 6px #0000001A",
    }}>
      {/* <Image
        src={require("../assets/logo.png")}
      /> */}
      {
        !props.coinbase ?
          <Button label="Connect" onClick={props.loadWeb3Modal} /> :
          <Button label="Stake" onClick={() => {
            props.setShowStake(!props.showStake)
          }} />
      }
    </Header>
  )
}
