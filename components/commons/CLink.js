import { withRouter } from 'next/router';
import { Link } from '../../server/routes';
import React, { Children } from 'react';

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);  
  let className = child.props.className || '';
  if (router.asPath === children.props.href && 'active') {
    className = `${className !== null ? className : ''} ${'active'}`.trim();
  }

  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);
