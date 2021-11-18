import Img2 from "./image/002.jpg"

const heading={
    color:"tomato"
}
const info ={
    color : "red",
    fontSize :"20px"
}
const Contact =()=>{
    return<>
    <img src= {Img2} width ="110%" height="350" alt="" />
    
    <div class="heading-title text-center">
    <h2> Contact:</h2>
    <p style ={info}>contact info are listed below:</p>
    <h3 style={heading}>Email: sirajkc21@gmail.com
    </h3>
    <h3 style={heading}>phone:9818664623</h3>
    <h3 style={heading}>location:</h3>
    </div>
</>

}

export default Contact;