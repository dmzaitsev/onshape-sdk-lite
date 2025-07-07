import { OnshapeHref, OnshapeId } from '../onshape.types'

export interface OnshapeTranslation {
  documentId: OnshapeId
  exportRuleFileName: string
  failureReason: string
  href: OnshapeHref
  id: OnshapeId
  name: string
  requestElementId: OnshapeId
  requestState: OnshapeTranslationStatus
  resultDocumentId: OnshapeId
  resultElementIds: OnshapeId[]
  resultExternalDataIds: OnshapeId[]
  resultWorkspaceId: OnshapeId
  versionId: OnshapeId
  viewRef: OnshapeHref
  workspaceId: OnshapeId
}

export enum OnshapeTranslationStatus {
  ACTIVE = 'ACTIVE',
  DONE = 'DONE',
  FAILED = 'FAILED'
}