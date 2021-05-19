import React, {Component} from 'react';
import classNames from 'classnames';

class Preloader extends Component {
  render() {
    return (
        <div className={classNames('preloader-wrapper', this.props.className)}>
          <div className='sk-wave'>
            {[1, 2, 3, 4, 5].map((elem, i) => (
                <div key={i} className={`sk-rect sk-rect-${i + 1}`} />
            ))}
          </div>
        </div>
    );
  }
}

export default Preloader;