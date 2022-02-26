import Nav from '../../fixtures/mapping/nav.json';
import Service from '../../fixtures/mapping/service.json';
import FeatureRoom from '../../fixtures/mapping/feature-room.json';
import Banner from '../../fixtures/mapping/banner.json';
import Search from '../../fixtures/mapping/search.json';

const selectors = Object.assign(Nav, Service, FeatureRoom, Banner, Search);

module.exports = selectors;
