const Content = () => {
    const handleNameChange = () => {
        const names=['jmkl','gbhn','dcfv','azsx'];
        const int=Math.floor(Math.random()*4);
        return names[int];
      }
      
    const handleclicked =()=>{
        console.log("click!!!")
    }
    
      
    const handleclicked2 =(name)=>{
        console.log(`${name} click!!!`)
    }
      
    const handleclicked3 =(e)=>{
        console.log(e)
    }
      
    const handleclicked4 =(e)=>{
        console.log(e.target.innerText)
    }
    return(
        <main>
            <ul>
                <li>azsx {handleNameChange()}</li>
                <li>adsw</li>
                <li>cdxs</li>
                <button onClick={handleclicked} >CLICK </button>
                <button onClick={()=> handleclicked2('abx')} >CLICK </button>
                <button onClick={(e)=> handleclicked3(e)} >CLICK </button>
                <button onClick={(e)=> handleclicked4(e)} >CLICK </button>
            </ul>
        </main>
    )
}

export default Content