import React,{ useState,useMemo,useContext } from 'react'




/**
 * Our custom React hook to manage state
 */

 const AppContext = React.createContext({})



const useAppState = () => {
  const initialState = {
    provider: null,
    netId: null,
    profile: null,
    self: null,
    user: null,
    coinbase: null,
  }

  // Manage the state using React.useState()
  const [state, setState] = useState(initialState)

  // Build our actions. We'll use useMemo() as an optimization,
  // so this will only ever be called once.
  const actions = useMemo(() => getActions(setState), [setState])

  return { state, actions }
}

// Define your actions as functions that call setState().
// It's a bit like Redux's dispatch(), but as individual
// functions.
const getActions = (setState) => ({
  setProvider: (provider) => {
    setState((state) => ({ ...state, provider: provider }))
  },
  setNetId: (netId) => {
    setState((state) => ({ ...state, netId: netId }))
  },
  setCoinbase: (coinbase) => {
    setState((state) => ({ ...state, coinbase: coinbase }))
  },
  setSelf: (self) => {
    setState((state) => ({ ...state, self: self }))
  },
  setProfile: (profile) => {
    setState((state) => ({ ...state, profile: profile }))
  },
  setUser: (user) => {
    setState((state) => ({ ...state, user: user }))
  },
  setClient: (client) => {
    setState((state) => ({ ...state, client: client }))
  }
})


const useAppContext = () => {
  return useContext(AppContext)
}

export { AppContext, useAppState, useAppContext }
