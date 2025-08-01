import { OnshapeDate, OnshapeHref, OnshapeId } from '../onshape.types';

export interface OnshapeMetadata {
  href: OnshapeHref;
  jsonType: string;
  properties: {
    aggregationSkippedFilteredOutValues: boolean;
    computedAssemblyProperty: boolean;
    computedProperty: boolean;
    computedPropertyError: string;
    computedPropertyEvalInfo: string;
    dateFormat: string;
    defaultValue: unknown;
    dirty: boolean;
    editable: boolean;
    editableInUi: boolean;
    enumValues: {
      name: string;
      state: number;
      value: string;
    }[];

    initialValue: unknown;
    multivalued: boolean;
    name: string;
    propertyId: OnshapeId;
    propertyOverrideStatus: number;
    propertySource: number;
    required: boolean;
    schemaId: string;
    uiHints: {
      multiline: boolean;
    };
    validator: {
      max: number;
      maxCount: number;
      maxDate: OnshapeDate;
      maxLength: number;
      min: number;
      minCount: number;
      minDate: OnshapeDate;
      minLength: number;
      pattern: string;
      quantityType: number;
    };
    value: unknown;
    valueType: string;
  }[];
  thumbnail: {
    href: OnshapeHref;
    id: OnshapeId;
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
}

export interface OnshapeMetadataProperty {
  value: unknown;
  id: OnshapeId;
  name: string;
}

export const OnshapeProperty = {
  Appearance: { id: '57f3fb8efa3416c06701d60c', name: 'Appearance' },
  ApprovedDate: { id: '57f3fb8efa3416c06701d61c', name: 'Date approved' },
  Approver: { id: '57f3fb8efa3416c06701d61a', name: 'Approver' },
  Category: { id: '57f3fb8efa3416c06701d625', name: 'Category' },
  CenterOfMass: { id: '57f3fb8efa3416c06701d627', name: 'Center of mass' },
  Classification: { id: '57f3fb8efa3416c06701d624', name: 'Classification' },
  Description: { id: '57f3fb8efa3416c06701d60e', name: 'Description' },
  DrawnBy: { id: '57f3fb8efa3416c06701d619', name: 'Drawn By' },
  ExcludeFromBOM: { id: '57f3fb8efa3416c06701d61e', name: 'Exclude From BOM' },
  Faces: { id: '5ace84d3c046ad611c65a0de', name: 'Faces' },
  Inertia: { id: '57f3fb8efa3416c06701d628', name: 'Inertia' },
  Mass: { id: '57f3fb8efa3416c06701d626', name: 'Mass' },
  Material: { id: '57f3fb8efa3416c06701d615', name: 'Material' },
  Name: { id: '57f3fb8efa3416c06701d60d', name: 'Name' },
  NotRevisionManaged: {
    id: '57f3fb8efa3416c06701d61d',
    name: 'Not revision managed',
  },
  PartNumber: { id: '57f3fb8efa3416c06701d60f', name: 'Part number' },
  ProductLine: { id: '57f3fb8efa3416c06701d614', name: 'Product line' },
  Project: { id: '57f3fb8efa3416c06701d613', name: 'Project' },
  Quantity: { id: '5ace84d3c046ad611c65a0dd', name: 'Quantity' },
  Revision: { id: '57f3fb8efa3416c06701d610', name: 'Revision' },
  State: { id: '57f3fb8efa3416c06701d611', name: 'State' },
  SubassemblyBOMBehavior: {
    id: '57f3fb8efa3416c06701d633',
    name: 'Subassembly BOM behavior',
  },
  Title1: { id: '57f3fb8efa3416c06701d616', name: 'Title 1' },
  Title2: { id: '57f3fb8efa3416c06701d617', name: 'Title 2' },
  Title3: { id: '57f3fb8efa3416c06701d618', name: 'Title 3' },
  Vendor: { id: '57f3fb8efa3416c06701d612', name: 'Vendor' },
} as const;
