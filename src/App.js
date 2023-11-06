import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceCard from './PriceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="row justify-content-center align-items-center my-3">
        <PriceCard
          title="FREE"
          pack="$0/month"
          user="Single User"
          storage="50GB Storage"
          public="Unlimited Public Projects"
          access="Community Access"
          private="Unlimited Private Projects"
          support="Dedicated Phone Support"
          subdomain="Free Subdomain"
          reports="Monthly Status Reports"
          free="wrong "
          freecheck={<FontAwesomeIcon icon={faCheck} />}
          freewrong={<FontAwesomeIcon icon={faXmark} />}
        />
        <PriceCard
          title="PLUS"
          pack="$9/month"
          user="5 Users"
          storage="50GB Storage"
          public="Unlimited Public Projects"
          access="Community Access"
          private="Unlimited Private Projects"
          support="Dedicated Phone Support"
          subdomain="Free Subdomain"
          reports="Monthly Status Reports"
          plus="wrong"
          pluscheck={<FontAwesomeIcon icon={faCheck} />}
          pluswrong={<FontAwesomeIcon icon={faXmark} />}
        />
        <PriceCard
          title="PRO"
          pack="$49/month"
          user="Unlimited Users"
          storage="50GB Storage"
          public="Unlimited Public Projects"
          access="Community Access"
          private="Unlimited Private Projects"
          support="Dedicated Phone Support"
          subdomain="Free Subdomain"
          reports="Monthly Status Reports"
          procheck={<FontAwesomeIcon icon={faCheck} />}
        />
      </div>

    </div>
  );
}

export default App;
