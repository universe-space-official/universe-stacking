import { useState, useEffect } from 'react';

import {
    Box,
    Layer,
    Image,
    Text,
    TextInput,
    Button
} from 'grommet';
import { ethers } from "ethers";


export default function Staking(props) {


    const [totalStake, setTotalStake] = useState();
    const [totalDays, setTotalDays] = useState();





    return (
        <Layer
          align="center"
          pad="medium"
          onEsc={() => props.setShowStake(false)}
          onClickOutside={() => props.setShowStake(false)}
        >
            <Box width="medium" pad="large">
                Amount to stake
                <TextInput onChange={(e) => { setTotalStake(e.target.value) }} />

                Amount of days of staking
                <TextInput onChange={(e) => { setTotalDays(e.target.value) }} />
                <Button margin="small" primary onClick={async () => {

                    if (totalDays >= 30 && totalStake > 0) {
                        try {
                            await props.stakeTokens(totalStake, totalDays);
                        } catch (err) {
                            // console.log(err)
                            // setMsg(err.reason)
                        }
                    }
                    else {
                        console.log("wrong parameters");
                    }
                    setTimeout(() => {
                        // setMsg()
                    }, 3000)
                }} label="Stake" />
            </Box>
        </Layer>
    )
}
