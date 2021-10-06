import * as React from 'react';
import './index.scss';
import ContactSection from './contact';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
const Contact: React.FC<any> = () => {
  return (
    <div>
      <div id="contact">
        <div className="wrap">
          <div className="contactpage">
            <h2>Frequently asked questions</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <p>I never received a report email </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    If you can't locate an email in your inbox following a
                    report purchase, it is either:
                  </p>
                  <div className="topul">
                    <div className="listp">
                      <p>
                        1) In your Spam folder. This is the case most of the
                        time.
                      </p>
                      <p>
                        2) In another Inbox. You may have used a different
                        email.
                      </p>
                      <p>
                        3) If neither of the above, then it's most likely a typo
                        in the email address you used at checkout.
                      </p>
                    </div>
                    <p>
                      We can look it up with just a little bit of information,
                      and get that fixed for you.
                    </p>
                  </div>
                  <div className="secondul">
                    <p>
                      If the charge was on your card, you should email
                      <a href="mailto: support@landcheck.co.nz">
                        {' '}
                        support@landcheck.co.nz{' '}
                      </a>{' '}
                      and tell us:
                    </p>

                    <ul>
                      <li>The address of the report </li>
                      <li>The last 4 digits of the card </li>
                      <li>The expiration date </li>
                      <li>
                        The card type (e.g. MasterCard/Visa/American Express,
                        etc.)
                      </li>
                      <li>The charge amount </li>
                    </ul>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <p> My report was blank/missing information </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We can look it up with just a little bit of information, and
                    get that fixed for you. If the charge was on your card, you
                    should email <a href="mailto: support@landcheck.co.nz">
                      {' '}
                      support@landcheck.co.nz{' '}
                    </a>{' '} and tell us:
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <p> How long does a report take to create?</p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We can look it up with just a little bit of information, and
                    get that fixed for you. If the charge was on your card, you
                    should email  <a href="mailto: support@landcheck.co.nz">
                      {' '}
                      support@landcheck.co.nz{' '}
                    </a>{' '} and tell us:
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Contact;
