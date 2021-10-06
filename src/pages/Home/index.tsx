import * as React from 'react';
import BannerHome from '../../components/home/banner/index';
import RiskHome from '../../components/home/risk';
import TrustedHome from '../../components/home/trusted-report-info';
import HazardReport from '../../components/home/hazard-report';
import SearchProperty from '../../components/home/search-property';
import PreviewProperty from '../../components/home/preview-property';
import MindRest from '../../components/home/mind-rest';
import MapAreaHome from '../../components/home/map-area';
import StressProperty from '../../components/home/save-stress';
import TestimonialsProperty from '../../components/home/testimonials';
import UnsurePoints from '../../components/home/unsure-points';
const Home: React.FC<any> = () => {
  return (
    <>
      <div>
        <BannerHome />
        <RiskHome />
        <TrustedHome />
        <MapAreaHome />
        <HazardReport />
        <SearchProperty />
        <PreviewProperty />
        <MindRest />
        <StressProperty />
        <TestimonialsProperty />
        <UnsurePoints />
      </div>
    </>
  );
};

export default Home;
