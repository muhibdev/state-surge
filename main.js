



const mainCamponent = (defaulltName = 'Muhib') => {
  const [num, setNum] = useState(1)
  console.log('Rerendring');
  console.log(num);
  document.body.onclick = () => setNum(`${Math.random()}`)
}

mainCamponent('Muhib')


function useState(initialState) {
  let state =  initialState;
  const callerFun = useState.caller

  const setState = (newstate) => {
    state = newstate
    callerFun(state)
    return state
  }

  return[state , setState]
}