import { OnshapeDate, OnshapeHref, OnshapeId } from '../onshape.types'

export interface OnshapeWebhook {
  clientId: OnshapeId
  companyId: OnshapeId
  data: string
  description: string
  documentId: OnshapeId
  elementId: OnshapeId
  events: OnshapeWebhookType[]
  externalSessionId: string
  filter: string
  folderId: string
  id: OnshapeId
  isTransient: boolean
  linkDocumentId: OnshapeId
  options: {
    collapseEvents: boolean
  },
  partId: string
  projectId: string
  url: string
  userId: OnshapeId
  versionId: OnshapeId
  workspaceId: OnshapeId
}

export interface OnshapeExtendedWebhook extends OnshapeWebhook {
  createdBy: {
    href: OnshapeHref
    id: OnshapeId
    name: string
    viewRef: OnshapeHref
    image: string
    isOnshapeSupport: boolean
    state: number
    jsonType: string
    documentationName: string
    email: string
    firstName: string
    lastName: string
    company: {
      admin: boolean
      description: string
      domainPrefix: string
      enterpriseBaseUrl: string
      enterpriseSubtype: number
      href: OnshapeHref
      id: string
      image: string
      name: string
      noPublicDocuments: boolean
      ownerId: string
      secondaryDomainPrefixes: string[]
      state: number
      type: number
      viewRef: OnshapeHref
    },
    documentationNameOverride: string
    globalPermissions: {
      accessReports: boolean
      adminEnterprise: boolean
      allowAppStoreAccess: boolean
      allowPublicDocumentsAccess: boolean
      approveReleases: boolean
      branchLockPermissions: boolean
      createDocumentsInRoot: boolean
      createProject: boolean
      createReleases: boolean
      createTasks: boolean
      deletePermanently: boolean
      importFiles: boolean
      manageGuestUsers: boolean
      manageNonGeometricItems: boolean
      manageRbac: boolean
      manageStandardContentMetadata: boolean
      manageUsers: boolean
      manageWorkflows: boolean
      shareForAnonymousAccess: boolean
      transferDocumentsFromEnterprise: boolean
      useRevisionTools: boolean
    },
    invitationState: number
    isExternal: boolean
    isGuest: boolean
    isLight: boolean
    lastLoginTime: OnshapeDate
    personalMessageAllowed: boolean
    source: number
  },
  droppedEventCount: number
  href: OnshapeHref
  name: string
  viewRef: OnshapeHref
}

export interface OnshapeExtendedWebhookList {
  href: OnshapeHref
  items: OnshapeExtendedWebhook[]
  next: string
  previous: string
}

// Properties in every Onshape Webhook notification
export interface OnshapeWebhookBasicNotification {
  jsonType: string
  data: string
  event: OnshapeWebhookType
  messageId: OnshapeId
  timestamp: OnshapeDate
  webhookId: OnshapeId
}

export interface OnshapeWebhookVersionCreatedNotification extends OnshapeWebhookBasicNotification {
  documentId: OnshapeId
  documentType: number
  versionId: OnshapeId
}

export enum OnshapeWebhookType {
  MODEL_CHANGED = 'onshape.model.lifecycle.changed', // Occurs when a change to a model is made
  STATE_CHANGED = 'onshape.document.lifecycle.statechange', // Occurs when a document changes state
  EXTERNAL_REF_CHANGED = 'onshape.model.lifecycle.changed.externalreferences', // Occurs when an external reference changes
  METADATA_MODIFIED = 'onshape.model.lifecycle.metadata', // Occurs when Part or element metadata is modified

  TRANSLATION_COMPLETE = 'onshape.model.translation.complete', // Occurs when a translation request is complete

  DOCUMENT_CREATED = 'onshape.document.lifecycle.created', // Occurs when a document is created
  DOCUMENT_SHARED = 'onshape.document.lifecycle.shared', // Occurs when a document share is created, modified, or removed (via the Share dialog only)
  VERSION_CREATED = 'onshape.model.lifecycle.createversion', // Occurs when a new version of a document is created
  WORKSPACE_CREATED = 'onshape.model.lifecycle.createworkspace', // Occurs when a new workspace is created
  REVISION_CREATED = 'onshape.revision.created', // Occurs when a revision is created

  WORKFLOW_ACTION = 'onshape.workflow.transition', // Occurs when a revision or release package transitions through workflow states

  ELEMENT_CREATED = 'onshape.model.lifecycle.createelement', // Occurs when a new element is created
  ELEMENT_DELETED = 'onshape.model.lifecycle.deleteelement', // Occurs when an element is deleted

  COMMENT_CREATED = 'onshape.comment.create', // Occurs when a comment is created in a document
  COMMENT_UPDATED = 'onshape.comment.update', // Occurs when a comment is updated in a document
  COMMENT_DELETED = 'onshape.comment.delete', // Occurs when a comment is deleted in a document

  APP_SETTINGS_MODIFIED = 'onshape.user.lifecycle.updateappsettings', // Occurs when user application settings are modified

  // Monitor webhook changes. You do not need to register for these events - they are sent automatically
  WEBHOOK_REGISTERED = 'webhook.register', // Occurs in response to a notification registration API call
  WEBHOOK_UNREGISTERED = 'webhook.unregister', // Occurs in response to a notification deregistration API call
  WEBHOOK_PING = 'webhook.ping', // In response to a request by an application. Or as a post-registration validation initiated by Onshape
}