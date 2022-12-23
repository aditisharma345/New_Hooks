const Footer = () =>{
    const  style={
        color:"blue"
    }
    const today=new Date();
    return(
        <footer style={{backgroundColor: 'red'}}>
            <p style={style}>rewqasdfvcxxxxxxz {today.getUTCFullYear()}</p>
        </footer>
    )
}

export default Footer