import { OnshapeHref, OnshapeId } from '../onshape.types';

export interface OnshapePartInfo {
  appearance: {
    color: {
      blue: number;
      green: number;
      red: number;
    };
    isGenerated: boolean;
    opacity: number;
  };
  bodyType: string;
  configurationId: string;
  customProperties: Record<string, string>;
  defaultColorHash: string;
  description: string;
  elementId: OnshapeId;
  href: OnshapeHref;
  id: string;
  isFlattenedBody: boolean;
  isHidden: boolean;
  isMesh: boolean;
  material: {
    displayName: string;
    id: string;
    libraryName: string;
    libraryReference: {
      documentId: OnshapeId;
      elementId: OnshapeId;
      elementMicroversionId: OnshapeId;
      versionId: OnshapeId;
    };
    properties: {
      category: string;
      description: string;
      displayName: string;
      name: string;
      type: string;
      units: string;
      value: string;
    }[];
  };
  meshState: string;
  metadataMicroversion: string;
  microversionId: OnshapeId;
  name: string;
  ordinal: number;
  partId: string;
  partIdentity: string;
  partNumber: string;
  partQuery: string;
  productLine: string;
  project: string;
  propertySourceTypes: Record<string, string>;
  referencingConfiguredPartNodeIds: string[];
  revision: string;
  state: string;
  thumbnailConfigurationId: string;
  thumbnailInfo: {
    href: OnshapeHref;
    id: string;
    secondarySizes: {
      href: OnshapeHref;
      mediaType: string;
      renderMode: string;
      sheetName: string;
      size: string;
      uniqueId: string;
      viewOrientation: string;
    }[];
    sizes: {
      href: OnshapeHref;
      mediaType: string;
      renderMode: string;
      sheetName: string;
      size: string;
      uniqueId: string;
      viewOrientation: string;
    }[];
  };
  title1: string;
  title2: string;
  title3: string;
  unflattenedPartId: string;
  vendor: string;
}
