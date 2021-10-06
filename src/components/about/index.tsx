import * as React from 'react';
import './index.scss';

const About: React.FC<any> = () => {
  return (
    <div>
      <div id="About">
        <div className="wrap">
          <div className="termspage">
            <h2>About</h2>
            <div className="termpera">
              <p>Do not use this as final copy.</p>
              <p>
                Landcheck is powered by Tonkin + Taylor. Tonkin + Taylor (T+T)
                is a global leader in engineering and eviromental related risk
                management services. We are based in Australia and New Zealand.
                T+T’s data is relied upon by buyers, sellers, construction
                professionals and corporate and government bodies.
              </p>
            </div>
            <div className="termpera">
              <p>
                The T+T database which underpins Landcheck’s services covers 99%
                of the New Zealand property market and has more than 500 million
                property decision points to ensure confident decision-making.
                This data comes from diverse public information, improved and
                added to over 30+ years to provide comprehensive, current and
                timely data and analytics.
              </p>
            </div>
            <div className="termpera">
              <p>
                Landcheck builds on the commercial work done previously,
                extending to help Kiwis buy safe resilient property.
              </p>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
