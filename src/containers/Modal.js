import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return(
      <div>
        <hr />
        {/* Button triggers modal */}
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
          Launch Modal: Long Doc
        </button>

        {/* Modal */}
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Document Modal</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis massa. Egestas sed sed risus pretium. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Massa id neque aliquam vestibulum morbi. Lectus mauris ultrices eros in cursus. Posuere urna nec tincidunt praesent semper. Vitae proin sagittis nisl rhoncus mattis rhoncus. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Vel pharetra vel turpis nunc eget lorem dolor. Ac placerat vestibulum lectus mauris ultrices eros. Pharetra sit amet aliquam id. Ac turpis egestas integer eget aliquet.</p>
                <p>Ut aliquam purus sit amet. Urna condimentum mattis pellentesque id nibh tortor. Et ultrices neque ornare aenean euismod elementum. Id aliquet risus feugiat in ante metus dictum. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Orci nulla pellentesque dignissim enim. Ullamcorper malesuada proin libero nunc. Neque viverra justo nec ultrices dui sapien eget mi. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Quis blandit turpis cursus in hac habitasse platea dictumst. Sem fringilla ut morbi tincidunt augue. Rutrum quisque non tellus orci ac auctor. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Fringilla ut morbi tincidunt augue interdum velit euismod in.</p>
                <p>At augue eget arcu dictum varius duis at. Ultrices tincidunt arcu non sodales neque sodales. Elit eget gravida cum sociis natoque. Mattis enim ut tellus elementum sagittis vitae et. Urna et pharetra pharetra massa massa ultricies. Libero nunc consequat interdum varius sit amet mattis vulputate. Posuere urna nec tincidunt praesent semper feugiat nibh. Platea dictumst quisque sagittis purus sit amet. Orci nulla pellentesque dignissim enim. Mi ipsum faucibus vitae aliquet nec. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Turpis cursus in hac habitasse platea dictumst quisque. Blandit massa enim nec dui nunc mattis enim ut tellus. Id nibh tortor id aliquet lectus. Tempus quam pellentesque nec nam. Feugiat nisl pretium fusce id velit ut tortor.</p>
                <p>Etiam erat velit scelerisque in dictum non consectetur a erat. Ac turpis egestas integer eget aliquet nibh praesent tristique. Augue neque gravida in fermentum et sollicitudin ac. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Ut eu sem integer vitae justo. Posuere sollicitudin aliquam ultrices sagittis. Rutrum quisque non tellus orci ac auctor augue. Proin sed libero enim sed faucibus turpis. Morbi tincidunt ornare massa eget egestas purus. Magna ac placerat vestibulum lectus mauris ultrices eros. Viverra maecenas accumsan lacus vel facilisis volutpat. Tellus orci ac auctor augue mauris. Est ullamcorper eget nulla facilisi. Egestas diam in arcu cursus euismod quis. Mauris nunc congue nisi vitae suscipit tellus. Cras sed felis eget velit aliquet. Leo in vitae turpis massa sed elementum. Id volutpat lacus laoreet non. Sit amet tellus cras adipiscing enim eu turpis.</p>
                <p>Massa tempor nec feugiat nisl pretium fusce id velit ut. Suspendisse faucibus interdum posuere lorem ipsum dolor. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Arcu dui vivamus arcu felis bibendum ut. Libero enim sed faucibus turpis in eu mi bibendum neque. Sit amet purus gravida quis blandit. Fermentum posuere urna nec tincidunt. Aenean et tortor at risus viverra adipiscing at in tellus. Eget est lorem ipsum dolor sit. Et egestas quis ipsum suspendisse ultrices gravida dictum. Ac felis donec et odio pellentesque diam. Sit amet mauris commodo quis imperdiet massa tincidunt. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Sit amet volutpat consequat mauris nunc. Nisl nunc mi ipsum faucibus vitae aliquet. Odio facilisis mauris sit amet. Sed id semper risus in hendrerit gravida.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal">Accept/Save Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;