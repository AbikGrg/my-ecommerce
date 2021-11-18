import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Design() {
return (
	<div style={{ display: 'block', width: 1500, padding: 0 }}>
	
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://icms-image.slatic.net/images/ims-web/ef1cf179-ee7a-4858-b011-f021c1c4f93d.jpg"
		/>
		<Carousel.Caption>
			<h3>exclisive deals!!!</h3>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://icms-image.slatic.net/images/ims-web/a4b5a63c-3272-4a15-bac5-c5a59cb1757a.jpg"
			
		/>
		<Carousel.Caption>
			
		
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}


  export default Design ;
   