import { OnshapeDocument } from '../document/document.type';
import { OnshapeMetadataProperty } from '../metadata/metadata.type';
import { OnshapeHref, OnshapeId } from '../onshape.types';

export interface OnshapeElement extends OnshapeDocument {
  linkDocumentId?: OnshapeId
  elementId: OnshapeId
  configuration?: string
  partId?: string
}

export interface OnshapeExtendedElement extends OnshapeElement {
  quantity: number
  properties: OnshapeMetadataProperty[]
}

export interface OnshapeDocumentElementInfo {
  accelerationUnits: string
  angleUnits: string
  angularVelocityUnits: string
  applicationTarget: {
    baseHref: string
    clientId: string
    supportsCollaboration: boolean
    tabIconHref: string
  }
  areaUnits: string
  dataType: string
  deleted: boolean
  elementType: string
  energyUnits: string
  filename: string
  forceUnits: string
  foreignDataId: string
  id: OnshapeId
  lengthUnits: string
  massUnits: string
  microversionId: OnshapeId
  momentUnits: string
  name: string
  pressureUnits: string
  prettyType: string
  safeToShow: boolean
  specifiedUnit: string
  thumbnailInfo: {
    href: OnshapeHref
    id: string
    secondarySizes: [
      [
        {
          href: OnshapeHref
          mediaType: string
          renderMode: string
          sheetName: string
          size: string
          uniqueId: string
          viewOrientation: string
        }
      ]
    ]
    sizes: [
      {
        href: OnshapeHref
        mediaType: string
        renderMode: string
        sheetName: string
        size: string
        uniqueId: string
        viewOrientation: string
      }
    ]
  }
  thumbnails: string
  timeUnits: string
  type: string
  unupdatable: boolean
  volumeUnits: string
  zip: {
    files: [
      string
    ]
  }
}