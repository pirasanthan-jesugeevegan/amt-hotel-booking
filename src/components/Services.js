import React, { Component } from 'react';
// import { AirportShuttleSharpIcon } from "@material-ui/icons/AirportShuttleSharp";
// import LocalBarIcon from "@material-ui/icons/LocalBar";
// import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
// import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import Title from './Title';
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span data-testid="service-icon">{item.icon}</span>
                <h6 data-testid="service-title">{item.title}</h6>
                <p data-testid="service-info">{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
