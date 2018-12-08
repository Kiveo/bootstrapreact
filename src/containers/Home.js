import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from './Jumbotron';

class Home extends Component {
  render() {
    return(
      <div className="page">
        <Jumbotron title="Prop Heading" subtitle="Subtitle Prop" />
        <div className="container">

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>Heading 1</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                <p><Link className="btn btn-secondary" to="/heading1">View details »</Link></p>
              </div>
              <div className="col-md-4">
                <h2>Heading 2</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                <p><Link className="btn btn-secondary" to="/heading2">View details »</Link></p>
              </div>
              <div className="col-md-4">
                <h2>Heading</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><Link className="btn btn-secondary" to="/heading3">View details »</Link></p>
              </div>
            </div>

            <hr />
          </div>
          
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