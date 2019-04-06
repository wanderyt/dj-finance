import React from 'react';
import {Link} from 'react-router-dom';

import './index.scss';

const navigationItems = [{
  name: '查看所有记录',
  link: '/activities'
}, {
  name: '查看图表',
  link: '/charts'
}];

const Navigator = (props) => {
  return (
    <div className="Navigator">
      <div className="Navigator__Items">
        {
          navigationItems.map(item => (
            <div className="Navigator__Item">
              <Link
                to={item.link}
                style={{textDecoration: 'none'}}>
                <span className="Navigator__Item__Title">{item.name}</span>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Navigator;
