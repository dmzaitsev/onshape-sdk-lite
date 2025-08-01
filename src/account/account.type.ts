import { OnshapeDate, OnshapeHref, OnshapeId } from '../onshape.types';

export interface OnshapePurchaseList {
  href: OnshapeHref;
  items: OnshapePurchaseInfo[];
  next: OnshapeHref;
  previous: OnshapeHref;
}

export interface OnshapePurchaseInfo {
  accountId: string;
  actualAmountPaidCents: number;
  amountCents: number;
  application: {
    applicationOwnerType: number;
    clientId: string;
    description: string;
    href: OnshapeHref;
    id: OnshapeId;
    name: string;
    state: number;
    viewRef: OnshapeHref;
  };
  canceledAt: OnshapeDate;
  card: {
    billingAddress: {
      address: string;
      city: string;
      country: string;
      countryCode: string;
      id: OnshapeId;
      state: string;
      stateCode: string;
      zip: string;
    };
    expMonth: number;
    expYear: number;
    last4: string;
    type: string;
  };
  clientId: string;
  couponAmountOff: number;
  couponPercentOff: number;
  createdBy: string;
  currency: string;
  duration: number;
  durationMonths: number;
  group: string;
  href: string;
  id: OnshapeId;
  lastModified: OnshapeDate;
  lastModifiedBy: string;
  lightSeats: number;
  name: string;
  nextCharge: {
    amount: number;
    currentPeriodEnd: OnshapeDate;
    interval: string;
    total: number;
  };
  paymentType: number;
  pendingCancelation: boolean;
  plan: {
    amountCents: number;
    applicationId: string;
    clientId: string;
    companyPlan: boolean;
    consumableQuantity: number;
    deprecated: boolean;
    description: string;
    discountInfo: {
      accountBalance: number;
      amountOff: number;
      couponType: number;
      couponValidMonths: number;
      createdAt: OnshapeDate;
      createdBy: {
        href: OnshapeHref;
        id: OnshapeId;
        name: string;
        viewRef: OnshapeHref;
        image: string;
        isOnshapeSupport: boolean;
        state: number;
        jsonType: string;
        documentationName: string;
        email: string;
        firstName: string;
        lastName: string;
        company: {
          admin: boolean;
          description: string;
          domainPrefix: string;
          enterpriseBaseUrl: string;
          enterpriseSubtype: number;
          href: OnshapeHref;
          id: OnshapeId;
          image: string;
          name: string;
          noPublicDocuments: boolean;
          ownerId: string;
          secondaryDomainPrefixes: string[];
          state: number;
          type: number;
          viewRef: OnshapeHref;
        };
        documentationNameOverride: string;
        globalPermissions: {
          accessReports: boolean;
          adminEnterprise: boolean;
          allowAppStoreAccess: boolean;
          allowPublicDocumentsAccess: boolean;
          approveReleases: boolean;
          branchLockPermissions: boolean;
          createDocumentsInRoot: boolean;
          createProject: boolean;
          createReleases: boolean;
          createTasks: boolean;
          deletePermanently: boolean;
          importFiles: boolean;
          manageGuestUsers: boolean;
          manageNonGeometricItems: boolean;
          manageRbac: boolean;
          manageStandardContentMetadata: boolean;
          manageUsers: boolean;
          manageWorkflows: boolean;
          shareForAnonymousAccess: boolean;
          transferDocumentsFromEnterprise: boolean;
          useRevisionTools: boolean;
        };
        invitationState: number;
        isExternal: boolean;
        isGuest: boolean;
        isLight: boolean;
        lastLoginTime: OnshapeDate;
        personalMessageAllowed: boolean;
        source: number;
      };
      expiresAt: OnshapeDate;
      href: OnshapeHref;
      id: OnshapeId;
      name: string;
      ownerId: string;
      percentOff: number;
      planId: string;
      trialEndDate: string;
      usedAt: OnshapeDate;
      viewRef: OnshapeHref;
    };
    group: string;
    hidden: boolean;
    href: OnshapeHref;
    id: OnshapeId;
    interval: string;
    name: string;
    onshapePlan: boolean;
    planType: number;
    trialPeriodDays: number;
    viewRef: OnshapeHref;
  };
  planId: string;
  planName: string;
  planType: number;
  preTrialPlanId: string;
  proratedCharges: {
    amount: number;
    date: OnshapeDate;
    description: string;
  }[];

  proratedTotal: number;
  purchaseDate: OnshapeDate;
  resellerName: string;
  seats: number;
  state: number;
  subscribers: {
    email: string;
    firstName: string;
    href: OnshapeHref;
    id: OnshapeId;
    image: string;
    lastName: string;
    name: string;
    state: number;
    viewRef: string;
  }[];

  subscriptionBeginAt: OnshapeDate;
  subscriptionEndAt: OnshapeDate;
  subscriptionId: string;
  subscriptionType: number;
  taxAmountCents: number;
  trialEnd: OnshapeDate;
  trialInitiatedBy: string;
  viewRef: string;
}

export type OnshapeConsumePurchase = {
  consumedQuantity: number;
  identityId: string
  identityType: number;
  purchaseId: OnshapeId;
};
