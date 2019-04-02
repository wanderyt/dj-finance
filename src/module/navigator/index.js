import React from 'react';
import {Link} from 'react-router-dom';

import './index.scss';

const navigationItems = [{
  name: '查看所有活动',
  link: '/activities'
}, {
  name: '查看单次活动',
  link: '/activity'
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
