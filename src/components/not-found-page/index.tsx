import * as React from 'react';
import './index.scss';
import NotfoundImage from '../../assets/images/notfoundmap.png';
import Notsearch from './search';
import Input from '../../shared/ui/components/input';
import Button from '../../shared/ui/components/button/index';
const MindRest: React.FC<any> = () => {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <>
      <div className="Notfound">
        <Notsearch />
        <div id="Not_foundpage">
          <div className="wrap">
            <div className="row">
              <div className="half-width">
                <h2>Sorry, we don’t cover this region yet.</h2>
                <p className="stepcontant">
                  We’re working hard to roll out coverage to all regions in New
                  Zealand.
                </p>

                <div className="notfoundUl">
                  <p>We currently cover:</p>
                  <ul>
                    <li>Auckland</li>
                    <li>Waikato</li>
                    <li>Bay of Plenty</li>
                    <li>Wellington</li>
                    <li>Canterbury</li>
                  </ul>
                </div>

                <div className="notfoundsearch">
                  <p>Want an update when we add this region?</p>

                  <label>Email</label>
                  <div className="search-home">
                    <Input
                      className="inpit-search"
                      placeholder="Enter your email"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <Button className="button-primary">Search</Button>
                  </div>
                </div>
              </div>
              <div className="half-width-img">
                <img src={NotfoundImage} alt="Not found image" />
                <p>Areas we cover in green</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MindRest;
