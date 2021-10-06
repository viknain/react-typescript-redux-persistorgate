import * as React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../shared/ui/components/input';
import Button from '../../../shared/ui/components/button/index';

const Contact: React.FC<any> = () => {
const [searchValue, setSearchValue] = React.useState('');
  return (
    <div>
      <div id="contactinput">
        <div className="wrap">
          <div className="contactpage">
            <h2>Contact us</h2>
            <p>
              If you haven’t been able to solve your issues contact us at
              <Link to="support@landcheck.co.nz">
                {' '}
                support@landcheck.co.nz
              </Link>{' '}
              Or using the form below.
            </p>
            <div className="contactform">
              <label>Name</label>
              <Input
                className="inpit-search"
                placeholder=""
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <label>Email</label>
              <Input
                className="inpit-search"
                placeholder=""
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <label>Message</label>
              <div>
                <textarea placeholder="Please include address of your report if relevant."></textarea>
              </div>
              <Button className="button-primary">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
