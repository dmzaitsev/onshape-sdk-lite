import { OnshapeDocumentElementInfo } from '../element/element.type'
import { OnshapeDate, OnshapeHref, OnshapeId, OnshapeWVMType } from '../onshape.types'

export interface OnshapeAssemblyDefinition {
  partStudioFeatures: [
    {
      configuration: string
      documentId: OnshapeId
      documentMicroversion: OnshapeId
      documentVersion: OnshapeId
      elementId: OnshapeId
      featureId: string
      featureType: string
      fullConfiguration: string
      partNumber: string
      revision: string
    }
  ]
  parts: [
    {
      bodyType: string
      configuration: string
      documentId: OnshapeId
      documentMicroversion: OnshapeId
      documentVersion: OnshapeId
      elementId: OnshapeId
      fullConfiguration: string
      isStandardContent: boolean
      mateConnectors: [
        {
          featureId: string
          mateConnectorCS: {
            getxAxis: number[]
            getyAxis: number[]
            getzAxis: number[]
            origin: number[]
          }
        }
      ]
      partId: string
      partNumber: string
      revision: string
    }
  ]
  rootAssembly: {
    configuration: string
    documentId: OnshapeId
    documentMicroversion: OnshapeId
    documentVersion: OnshapeId
    elementId: OnshapeId
    features: [
      {
        featureData: {
          name: string
        }
        featureType: string
        id: string
        suppressed: true
      }
    ]
    fullConfiguration: string
    instances: [
      {
        configuration: string
        documentId: OnshapeId
        documentMicroversion: OnshapeId
        documentVersion: OnshapeId
        elementId: OnshapeId
        featureId: string
        fullConfiguration: string
        id: OnshapeId
        isStandardContent: boolean
        name: string
        partId: string
        partNumber: string
        revision: string
        status: string
        suppressed: boolean
        type: string
      }
    ]
    occurrences: [
      {
        fixed: boolean
        hidden: boolean
        path: string[]
        transform: number[]
      }
    ]
    partNumber: string
    patterns: [
      {
        id: string
        name: string
        seedToPatternInstances: Record<string, string[]>
        suppressed: boolean
        type: string
      }
    ]
    revision: string
  }
  subAssemblies: [
    {
      configuration: string
      documentId: OnshapeId
      documentMicroversion: OnshapeId
      documentVersion: OnshapeId
      elementId: OnshapeId
      features: [
        {
          featureData: {
            name: string
          }
          featureType: string
          id: string
          suppressed: boolean
        }
      ]
      fullConfiguration: string
      instances: [
        {
          configuration: string
          documentId: OnshapeId
          documentMicroversion: OnshapeId
          documentVersion: OnshapeId
          elementId: OnshapeId
          featureId: string
          fullConfiguration: string
          id: string
          isStandardContent: boolean
          name: string
          partId: string
          partNumber: string
          revision: string
          status: string
          suppressed: boolean
          type: string
        }
      ]
      partNumber: string
      patterns: [
        {
          id: string
          name: string
          seedToPatternInstances: Record<string, string[]>
          suppressed: boolean
          type: string
        }
      ]
      revision: string
    }
  ]
}

export interface OnshapeBOM {
  bomSource: {
    document: {
      headerIdToValue: Record<string, unknown>
      href: OnshapeHref
      id: OnshapeId
      name: string
      viewRef: OnshapeHref
    }
    documentMicroversion: {
      headerIdToValue: Record<string, unknown>
      href: OnshapeHref
      id: OnshapeId
      name: string
      viewRef: OnshapeHref
    }
    element: {
      configuration: string
      headerIdToValue: Record<string, unknown>
      href: OnshapeHref
      id: OnshapeId
      name: string
      viewRef: OnshapeHref
    }
    href: OnshapeHref
    thumbnailInfo: {
      href: OnshapeHref
      id: OnshapeId
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
    version: {
      headerIdToValue: Record<string, unknown>
      href: OnshapeHref
      id: OnshapeId
      name: string
      viewRef: OnshapeHref
    }
    viewHref: OnshapeHref
    workspace: {
      headerIdToValue: Record<string, unknown>
      href: OnshapeHref
      id: OnshapeId
      name: string
      viewRef: OnshapeHref
    }
  }
  createdAt: OnshapeDate
  formatVersion: string
  headers: [
    {
      href: OnshapeHref
      id: OnshapeId
      name: string
      propertyName: string
      valueType: string
      viewRef: OnshapeHref
      visible: boolean
    }
  ]
  href: OnshapeHref
  id: OnshapeId
  name: string
  rows: OnshapeBOMRow[]
  templateId: string
  topLevelAssemblyRow: OnshapeBOMRow
  type: string
  viewRef: OnshapeHref
}

export interface OnshapeBOMRow {
  headerIdToValue: Record<string, unknown>
  href: OnshapeHref
  id: OnshapeId
  indentLevel: number
  itemSource: {
    configuration: string
    documentId: OnshapeId
    elementId: OnshapeId
    fullConfiguration: string
    href: OnshapeHref
    isStandardContent: boolean
    nonGeometricItemId: string
    partId: string
    sourceElementMicroversionId: OnshapeId
    thumbnailInfo: {
      href: OnshapeHref
      id: OnshapeId
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
    versionMetadataWorkspaceMicroversionId: string
    viewHref: string
    wvmId: OnshapeId
    wvmType: OnshapeWVMType
  }
  name: string
  relatedOccurrences: string[]
  rowId: string
  viewRef: OnshapeHref
}

export type OnshapeExportAssembly = {
  advancedParams: {
    assemblyExportParams: {
      occurrencesToExport: string
    }
    configuration: string
    elementIds: OnshapeId[]
    evaluateExportRule: boolean
    ignoreExportRulesForContents: boolean
    linkDocumentId: OnshapeId
    linkDocumentWorkspaceId: OnshapeId
    partIds: string
    partsExportFilter: {
      btType: string
      skipAllMesh: boolean
      skipCurves: boolean
      skipPartialMesh: true
    }
  }
  cloudStorageOptions: {
    cloudObjectId: string
    cloudStorageAccountId: string
  }
  destinationName: string
  emailExportOptions: {
    emailLink: boolean
    emailMessage: string
    emailSubject: string
    emailTo: string[]
    fromUserId: OnshapeId
    password: string
    passwordRequired: boolean
    sendCopyToMe: boolean
    validForDays: number
  }
  excludeHiddenEntities: boolean
  grouping: boolean
  includeExportIds: boolean
  isYAxisUp: boolean
  meshParams: {
    angularTolerance: number
    distanceTolerance: number
    maximumChordLength: number
    resolution: string
    unit: string
  }
  notifyUser: boolean
  storeInDocument: boolean
  triggerAutoDownload: false
}

export type OnshapeExportAssemblySolidworks = Omit<OnshapeExportAssembly, 'meshParams'>;

export type OnshapeExportAssemblyStep =
  OnshapeExportAssemblySolidworks &
  {
    stepParasolidPreprocessingOption: string
    stepUnit: string
    stepVersionString: string
  };

export interface OnshapeAssemblyMateValues {
  mateValues: [
    {
      featureId: string
      jsonType: string
      mateName: string
    }
  ]
}

export type OnshapeAsyncExport = {
  allowFaultyParts: boolean
  angularTolerance: number
  blobElementId: OnshapeId
  blobMicroversionId: OnshapeId
  cloudObjectId: string
  cloudStorageAccountId: string
  colorMethod: string
  configuration: string
  connectionId: string
  createComposite: boolean
  currentSheetOnly: boolean
  destinationName: string
  distanceTolerance: number
  elementId: OnshapeId
  elementIds: OnshapeId[]
  emailLink: boolean
  emailMessage: string
  emailSubject: string
  emailTo: string[]
  evaluateExportRule: boolean
  excludeHiddenEntities: boolean
  excludeOffSheetContent: boolean
  extractAssemblyHierarchy: boolean
  flatten: boolean
  flattenAssemblies: boolean
  foreignId: string
  formatName: string
  fromUserId: string
  getyAxisIsUp: boolean
  grouping: boolean
  hideInspectionItems: boolean
  ignoreExportRulesForContents: boolean
  imageHeight: number
  imageWidth: number
  importAppearances: boolean
  importInBackground: boolean
  importMaterialDensity: boolean
  importWithinDocument: boolean
  includeExportIds: boolean
  joinAdjacentSurfaces: boolean
  level: string
  linkDocumentId: string
  linkDocumentWorkspaceId: string
  maximumChordLength: number
  notifyUser: boolean
  occurrencesToExport: string
  onePartPerDoc: boolean
  originalForeignId: string
  parasolidMode: string
  parentId: string
  partIds: string
  partsExportFilter: {
    btType: string
    skipAllMesh: boolean
    skipCurves: boolean
    skipPartialMesh: true
  }
  password: string
  passwordRequired: boolean
  pdfVersion: string
  processedForeignId: string
  projectId: string
  proxyDocumentId: string
  proxyElementId: string
  proxyWorkspaceVersion: string
  proxyWorkspaceVersionId: string
  resolution: string
  rhinoVersion: string
  selectablePdfText: boolean
  sendCopyToMe: boolean
  sheetIndices: number[]
  showOverriddenDimensions: boolean
  skipBodyshop: boolean
  sourceName: string
  specifyMaterialData: boolean
  specifyUnits: boolean
  splinesAsPolylines: boolean
  splitAssembliesIntoMultipleDocuments: boolean
  stepParasolidPreprocessingOption: string
  stepVersionString: string
  stlMode: string
  storeInDocument: boolean
  textAsGeometry: boolean
  textOption: string
  triggerAutoDownload: boolean
  unit: string
  uploadId: string
  useFileNameToSetSinglePartName: boolean
  useGltfCompression: boolean
  useIGESImportPostProcessing: boolean
  useIgesCompatibilityMode: boolean
  validForDays: number
  versionString: string
}

export interface OnshapeAssemblyBoundingBox {
  highX: number
  highY: number
  highZ: number
  lowX: number
  lowY: number
  lowZ: number
}

export interface OnshapeAssemblyNamedView {
  angle: number
  cameraViewport: number[]
  perspective: boolean
  sectionPlanes: [
    {
      center: number[]
      normal: number[]
      tangent: number[]
    }
  ]
  sectionViewData: {
    btType: string
    elementId: string
    isExcluding: boolean
    sectionPlanes: [
      {
        btType: string
        center: {
          btType: string
          x: number
          y: number
          z: number
        }
        normal: {
          btType: string
          x: number
          y: number
          z: number
        }
        tangent: {
          btType: string
          x: number
          y: number
          z: number
        }
      }
    ]
    selectionsToExclude: [
      {
        btType: string
        deterministicIdList: string[]
        id: string
        occurrence: {
          fullPathAsString: string
          headInstanceId: string
          internalOccurrence: boolean
          occurrenceWithoutHead: string
          occurrenceWithoutTail: string
          parent: string
          path: string[]
          rootOccurrence: boolean
          tailInstanceId: string
        }
        tableRowId: string
        type: string
      }
    ]
    selectionsToInclude: [
      {
        btType: string
        deterministicIdList: string[]
        id: string
        occurrence: {
          fullPathAsString: string
          headInstanceId: string
          internalOccurrence: boolean
          occurrenceWithoutHead: string
          occurrenceWithoutTail: string
          parent: string
          path: string[]
          rootOccurrence: boolean
          tailInstanceId: string
        }
        tableRowId: string
        type: string
      }
    ]
  }
  viewMatrix: number[]
}

export interface OnshapeAssemblyNamedViews {
  namedViews: Record<string, OnshapeAssemblyNamedView>
}

export interface OnshapeAssemblyInfo extends OnshapeDocumentElementInfo {}

export interface OnshapeBOMInfo extends OnshapeDocumentElementInfo {}

export type OnshapeAssemblyFeature = {
  btType: string
  feature: {
    featureId: string
    featureType: string
    importMicroversion: OnshapeId
    mateConnectorFeature: boolean
    name: string
    namespace: string
    nodeId: string
    parameters: [
      {
        importMicroversion: string
        nodeId: string
        parameterId: string
      }
    ],
    returnAfterSubfeatures: boolean
    subFeatures: string[]
    suppressed: boolean
    suppressionConfigured: boolean
    suppressionState: {
      btType: string
      importMicroversion: string
      nodeId: string
    },
    variableStudioReference: boolean
  },
  libraryVersion: number
  microversionSkew: boolean
  rejectMicroversionSkew: boolean
  serializationVersion: string
  sourceMicroversion: string
}

export interface OnshapeFeatureBase {
  libraryVersion: number
  microversionSkew: boolean
  rejectMicroversionSkew: boolean
  serializationVersion: string
  sourceMicroversion: string
}

export type OnshapeInsertInstance = {
  configuration: string
  documentId: OnshapeId
  elementId: OnshapeId
  featureId: OnshapeId
  includePartTypes: string[]
  isAssembly: boolean
  isHidden: boolean
  isSuppressed: boolean
  isWholePartStudio: boolean
  microversionId: OnshapeId
  partId: string
  partNumber: string
  revision: string
  versionId: OnshapeId
}

export interface OnshapeAssemblyMateValues {
  mateValues: [
    {
      featureId: string
      jsonType: string
      mateName: string
    }
  ]
}

export type OnshapeAssemblyUpdate = {
  deleteInstances: string[]
  editDescription: string
  suppressInstances: string[]
  transformDefinitions: [
    {
      isRelative: boolean
      occurrences: [
        {
          fullPathAsString: string
          headInstanceId: string
          internalOccurrence: boolean
          occurrenceWithoutHead: string
          occurrenceWithoutTail: string
          parent: string
          path: string[]
          rootOccurrence: boolean
          tailInstanceId: string
        }
      ],
      transform: number[]
    }
  ],
  unsuppressInstances: string[]
}

export type OnshapeTransformOccurrences = {
  isRelative: boolean
  occurrences: [
    {
      fullPathAsString: string
      headInstanceId: string
      internalOccurrence: boolean
      occurrenceWithoutHead: string
      occurrenceWithoutTail: string
      parent: string
      path: string[]
      rootOccurrence: boolean
      tailInstanceId: string
    }
  ],
  transform: number[]
}

export type OnshapeTransformGroups = {
  transformGroups: [
    {
      instances: [
        {
          configuration: string
          documentId: OnshapeId
          elementId: OnshapeId
          featureId: OnshapeId
          includePartTypes: string[]
          isAssembly: boolean
          isHidden: boolean
          isSuppressed: boolean
          isWholePartStudio: boolean
          microversionId: OnshapeId
          partId: string
          partNumber: string
          revision: string
          versionId: OnshapeId
        }
      ],
      transform: number[]
    }
  ]
}

export interface OnshapeInsertInstanceResponse {
  insertInstanceResponses: [
    {
      occurrences: [
        {
          fixed: boolean
          hidden: boolean
          path: string[]
          transform: number[]
        }
      ]
    }
  ],
  insertResponses: [
    {
      fixed: boolean
      hidden: boolean
      path: string[]
      transform: number[]
    }
  ]
}