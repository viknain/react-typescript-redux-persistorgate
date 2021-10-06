import React, { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';

const Desktop: React.FC = (props) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? (props.children as ReactElement<any>) : null;
};
const Tablet: React.FC = (props) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? (props.children as ReactElement<any>) : null;
};

const Mobile: React.FC = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? (props.children as ReactElement<any>) : null;
};

const Default: React.FC = (props) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? (props.children as ReactElement<any>) : null;
};

export default {
  Desktop,
  Tablet,
  Mobile,
  Default,
};
