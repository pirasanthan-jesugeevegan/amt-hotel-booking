/**
 * Construct request header for API
 * @return {header} - return a object of headers
 */
import getCookie from './getCookie';

function setHeader (referer) {
  const ref = referer === null || referer === undefined ? '' : referer;

  const header = {
    authority: Cypress.config().url,
    'content-type': 'application/json',
    accept: '*/*',
    origin: Cypress.config().baseUrl,
    referer: `${Cypress.config().baseUrl}${ref}`,
    'x-csrf-token': getCookie('csrf'),
    cookie: `__tesu=${getCookie('__tesu')}; csrf=${getCookie(
      'csrf'
    )}; siteCountry=${getCookie('siteCountry')}; siteInternational=${getCookie(
      'siteInternational'
    )}; `,
  };
  return header;
}
export default setHeader;
