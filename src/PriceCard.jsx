import React from 'react';

const PriceCard = (props) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <div className="card-head">
          <span>{props.title}</span>
          <h1>{props.pack}</h1>
        </div>
        <div className="card-body">
          <ul>
            <li><span>{props.freecheck}{props.pluscheck}{props.procheck}</span>{props.user}</li>
            <li><span>{props.freecheck}{props.pluscheck}{props.procheck}</span>{props.storage}</li>
            <li><span>{props.freecheck}{props.pluscheck}{props.procheck}</span>{props.public}</li>
            <li><span>{props.freecheck}{props.pluscheck}{props.procheck}</span>{props.access}</li>
            <li className={props.free}><span>{props.freewrong}{props.pluscheck}{props.procheck}</span>{props.private}</li>
            <li className={props.free}><span>{props.freewrong}{props.pluscheck}{props.procheck}</span>{props.support}</li>
            <li className={props.free}><span>{props.freewrong}{props.pluscheck}{props.procheck}</span>{props.subdomain}</li>
            <li className={`${props.plus} ${props.free}`}><span>{props.freewrong}{props.pluswrong}{props.procheck}</span>{props.reports}</li>
          </ul>
          <div className="button">
            <button>BUTTON</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
