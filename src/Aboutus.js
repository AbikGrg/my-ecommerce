import Img3 from "./image/004.jpg"
const heading={
    color:"tomato",
    align :"center"
    
}
const Aboutus =()=>{

    return<>
    <img src= {Img3} width ="100%" height="300" alt="" />
    
    <h3 style={heading}> Aboutus</h3>
   
   <p>
    Welcome to my site, your number one source for all things . We're dedicated to giving you the very best of [product], with a focus on [three characteristics, ie: dependability, customer service and uniqueness.]
Founded in 2 has come a long way from its beginnings in a [starting location, ie: home office,jawalakhel.]. When [store founder] first started out, his/her passion for [passion of founder, ie: helping other parents be more eco-friendly, providing the best equipment for his fellow musicians] drove him to [action, ie: do intense research, quit her day job], and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over [place, ie: the US, the world, the Austin area], and are thrilled to be a part of the [adjective, ie: quirky, eco-friendly, fair trade] wing of the [industry type, ie: fashion, baked goods, watches] industry.

We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us        </p>
</>
}

export default Aboutus;