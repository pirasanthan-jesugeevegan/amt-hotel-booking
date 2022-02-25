import moment from 'moment';

/**
 * Generate Payload for subscription level
 * @param {object} data - job details
 * @param {object} response - entitlement from employer api
 * @param {date} startDate - start date
 * @param {date} endDate - end date
 * @param {object} bookingAgentModifier - information of the booking agent
 * @param {object} bookingAgentCreator - information of the booking agent
 * @param {number} advertId - advert Id
 * @param {number} version - version of modified job to be published
 * @param {number} wsChannel - id to be used to publish the advert
 * @param {number} selfServiceId - another form of advert Id
 * @param {date} createdOn - exact moment when ad was created advertLevel
 * @param {array} arrayAdLevel - array of all package and ad level
 * @param {array} AdLevel - advert level param from step def
 * @return {payload} - return an job payload
 */
export default function adLevelPayload(
  data,
  response,
  startDate,
  endDate,
  bookingAgentModifier,
  bookingAgentCreator,
  advertId,
  version,
  wsChannel,
  selfServiceId,
  createdOn,
  arrayAdLevel,
  AdLevel
) {
  let level = arrayAdLevel.filter((level) => level['productName'] === AdLevel);
  let upgrades = [];
  let entitlements = [];
  let entitlement = response?.body?.entitlements[0]?.components;
  let productOptions = level[0]?.productOptions;
  let randomId = Math.floor(Math.random() * 10000000 + 1);

  // generate boosters / upgrades
  for (let i = 0; i < productOptions?.length; i++) {
    upgrades.push({
      duration: {
        startDate: startDate,
        endDate: moment().add(7, 'days').format(),
      },
      productCode: productOptions[i]?.productCode,
      initialDuration: '1_weeks',
      customDuration: '1_weeks',
      productName: productOptions[i]?.productName,
      productId: productOptions[i]?.productId,
      bundled: productOptions[i]?.bundled,
      version: productOptions[i]?.version,
      productFamily: productOptions[i]?.productFamily,
      parentProductId: productOptions[i]?.parentProductId,
      productJobLevel: productOptions[i]?.productJobLevel,
      searchableCategories:
        productOptions[i]?.productName === 'Sponsored Job'
          ? [
              {
                id: '10804',
                description: 'Teacher',
                categoryType: 'positions',
              },
            ]
          : [],
    });
  }

  // generate entitlements
  for (let i = 0; i < entitlement?.length; i++) {
    entitlements.push({
      subscriptionId: entitlement[i]?.subscriptionId,
      productId: entitlement[i]?.productId,
      productCode: entitlement[i]?.productCode,
      productName: entitlement[i]?.productName,
      productFamily: entitlement[i]?.productFamily,
      productSubfamily: entitlement[i]?.productSubfamily,
      productType: entitlement[i]?.productType,
      productJobLevel: entitlement[i]?.productJobLevel,
      priceBookId: entitlement[i]?.priceBookId,
      contractId: entitlement[i]?.contractId,
      employerOnlineId: entitlement[i]?.employerOnlineId,
      startDate: entitlement[i]?.startDate,
      endDate: entitlement[i]?.endDate,
      status: entitlement[i]?.status,
      reviewTerms: entitlement[i]?.reviewTerms,
      accountId: entitlement[i]?.accountId,
      version: entitlement[i]?.version,
      components: entitlement[i]?.components,
      initialDuration: '1_weeks',
      duration: {
        startDate: startDate,
        endDate: moment().add(7, 'days').format(),
      },
      customDuration: '1_weeks',
    });
  }

  const payload = {
    payload: {
      print: { inserts: [], dimensions: null, functionalType: null },
      boosters: {
        additional: [],
        entitlements: AdLevel === undefined ? entitlements : [],
        upgrades: AdLevel === undefined ? [] : upgrades,
      },
      online: {
        isPromotional: false,
        isFree: false,
        destinations: ['tes-job-search'],
        hideMapAndLocation: false,
        endDate: endDate,
        startDate: startDate,
        application: {
          formType: 'cvUpload',
          url: null,
          email: data?.advertDetails.contactDetails.email,
          closeDate: endDate,
        },
        attachments: [],
        map: { latitude: 51.5287718, longitude: -0.2416804 },
        experiences: [{ id: 'na', description: 'Not applicable' }],
        contractTypes: [{ id: '10494', description: 'Full Time' }],
        contractTerm: [{ id: '70059', description: 'Fixed Term' }],
        workplaces: [
          {
            id: '110510',
            itemOrder: 1,
            description: 'Secondary',
            orderProductId: '6b8a9073-cc04-41b2-92ac-b56a39f3e513',
          },
        ],
        subjects: [
          {
            id: '30030',
            description: 'Animal Studies',
            orderProductId: '7302abe5-90ff-407b-864e-0b0a8222d264',
          },
        ],
        positions: [
          {
            id: '10804',
            parentId: '2',
            itemOrder: 21,
            description: 'Teacher',
            orderProductId: 'd5655440-0193-4b87-93ca-63c6d71a8754',
          },
        ],
        locations: [response?.body?.location],
        salary: { currency: null },
        displayLocation: 'London, City of',
        summary: data?.advertDetails.applicationDetails.summary,
        description: data?.advertDetails.applicationDetails.description,
        title: `${data?.advertDetails.applicationDetails.title} ${randomId}`,
        jobLevel:
          level[0]?.productJobLevel ||
          response?.body?.recruitmentSubscription?.productJobLevel,
        status: 'draft',
        selfServiceId: selfServiceId,
        publication: { name: 'TES Online' },
      },
      orderSource: 'backoffice',
      timeFields: {
        timezone: 'Europe/London',
        startDate: {
          time: { label: 'ASAP', value: 'asap' },
          date: startDate,
        },
        applicationCloseDate: {
          time: { label: '23:59', value: '23:59' },
          date: endDate,
          hours: { label: '23', value: '23' },
          minutes: { label: '59', value: '59' },
        },
        endDate: {
          time: { label: '23:59', value: 'endOfDay' },
          date: endDate,
        },
      },
      reviewTasks: null,
      needsReview: response?.body?.isRecruitmentPayg === true ? true : false,
      portalInstructions: null,
      discount: null,
      bookingAgentPublisher: null,
      bookingAgentModifier: bookingAgentModifier,
      createdOn: createdOn,
      bookingAgentCreator: bookingAgentCreator,
      order: null,
      customer: {
        name: response?.body?.name,
        location: response?.body?.location,
        postcode: '',
        accountType:
          response?.body?.isRecruitmentPayg === true ? 'payg' : 'subscription',
        reviewTerms: response?.body?.isRecruitmentPayg === true ? true : false,
        subscriptionId: response?.body?.recruitmentSubscription?.subscriptionId,
        employerOnlineId: response?.body?.onlineId,
        subsidiaryPoRequired: response?.body?.subsidiaryPoRequired,
      },
      entitlementPackage:
        response?.body?.isRecruitmentPayg === true
          ? null
          : {
              status: response?.body?.recruitmentSubscription?.status,
              endDate: response?.body?.recruitmentSubscription?.endDate,
              version: response?.body?.recruitmentSubscription?.version,
              accountId: response?.body?.recruitmentSubscription?.accountId,
              productId: response?.body?.recruitmentSubscription?.productId,
              startDate: response?.body?.recruitmentSubscription?.startDate,
              components: [],
              contractId: response?.body?.recruitmentSubscription?.contractId,
              priceBookId: response?.body?.recruitmentSubscription?.priceBookId,
              productCode: response?.body?.recruitmentSubscription?.productCode,
              productName: response?.body?.recruitmentSubscription?.productName,
              productType: response?.body?.recruitmentSubscription?.productType,
              reviewTerms: response?.body?.recruitmentSubscription?.reviewTerms,
              productFamily:
                response?.body?.recruitmentSubscription?.productFamily,
              subscriptionId:
                response?.body?.recruitmentSubscription?.subscriptionId,
              productJobLevel:
                response.body.recruitmentSubscription?.productJobLevel,
              employerOnlineId: response.body.onlineId,
              productSubfamily:
                response?.body?.recruitmentSubscription?.productSubfamily,
              entitlementProductId:
                response?.body?.recruitmentSubscription?.entitlementProductId,
              entitlementProductCode:
                response?.body?.recruitmentSubscription?.entitlementProductCode,
            },
      productPackage:
        level[0] === undefined || level[0].length == 0
          ? null
          : {
              version: level[0]?.version,
              isActive: level[0]?.isActive,
              productId: level[0]?.productId,
              productCode: level[0]?.productCode,
              productName: level[0]?.productName,
              productType: level[0]?.productType,
              productFamily: level[0]?.productFamily,
              productOptions: level[0]?.productOptions,
              productJobLevel: level[0]?.productJobLevel,
              productSubfamily: level[0]?.productSubfamily,
              productVisibility: level[0]?.productVisibility,
            },
      contactDetails: data?.advertDetails?.contactDetails,
      agency: null,
      careerType: { id: '2', description: 'Teaching and Lecturing' },
      billTo: response?.body?.onlineId,
      lastModifiedOn: moment().format(),
      externalIds: [],
      sfQuoteId: null,
      sfCaseSafeId: null,
      advertId: advertId,
    },
    version: version,
    metadata: { wsChannel: wsChannel },
  };

  return payload;
}
