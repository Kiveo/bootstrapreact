import React, { Component } from 'react';
import Navbar from './Navbar';

class Home extends Component {
  render() {
    return(
      <div>
        <Navbar />
      
        <div className="container">
          <h2>Welcome</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus volutpat lectus eget dolor posuere facilisis. 
            Sed aliquam lacinia mauris non sollicitudin. Sed ultrices sed lorem eu sollicitudin. 
            Curabitur egestas massa quis venenatis tincidunt. Nullam mollis nisi nec hendrerit posuere. 
            Aenean lorem velit, feugiat in feugiat sed, feugiat nec mi. Nulla at finibus justo.</p>

          <p>Aenean vitae ante non diam auctor malesuada sed sit amet nunc. 
            Donec eleifend nibh eu finibus vulputate. Aliquam tempus tempor dui. 
            Integer hendrerit, ante at sagittis posuere, justo velit posuere odio, 
            sed dignissim turpis lectus vel diam. Fusce et facilisis arcu. 
            Aliquam sollicitudin neque vitae augue euismod pretium. 
            Nulla tincidunt ultricies elit, at pulvinar enim cursus eget. 
            Curabitur nunc libero, ultrices eget suscipit non, vulputate at odio. 
            Cras convallis nisl nisi, at laoreet nisl accumsan nec. 
            Pellentesque commodo lorem in ante iaculis dictum. 
            Duis metus tortor, varius posuere efficitur non, tincidunt in sapien. 
            Curabitur sed nisi erat. Nam nec pretium nibh, sed ultrices dui. 
            Etiam facilisis tempor justo vel aliquet. 
            Quisque ligula metus, mollis vitae euismod eu, molestie elementum metus.</p>
        </div>
      </div>
    )
  }
}

export default Home;