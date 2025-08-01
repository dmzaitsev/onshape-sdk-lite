import {
  OnshapeDate,
  OnshapeHref,
  OnshapeId,
  OnshapeWVMType,
} from '../onshape.types';

export interface OnshapeDocument {
  documentId: OnshapeId;
  wvm: OnshapeWVMType;
  wvmId: OnshapeId;
}

export interface OnshapeDocumentInfo {
  canMove: boolean;
  createdAt: OnshapeDate;
  createdBy: {
    href: OnshapeHref;
    id: OnshapeId;
    name: string;
    viewRef: string;
    image: string;
    isOnshapeSupport: boolean;
    state: number;
    jsonType: string;
  };
  description: string;
  href: OnshapeHref;
  id: OnshapeId;
  isContainer: boolean;
  isEnterpriseOwned: boolean;
  isMutable: boolean;
  jsonType: string;
  modifiedAt: OnshapeDate;
  modifiedBy: {
    href: OnshapeHref;
    id: OnshapeId;
    name: string;
    viewRef: string;
    image: string;
    isOnshapeSupport: boolean;
    state: number;
    jsonType: string;
  };
  name: string;
  owner: {
    href: OnshapeHref;
    id: OnshapeId;
    image: string;
    isEnterpriseOwnedResource: boolean;
    name: string;
    type: number;
    viewRef: string;
  };
  projectId: string;
  resourceType: string;
  treeHref: string;
  unparentHref: string;
  viewRef: string;
  anonymousAccessAllowed: boolean;
  anonymousAllowsExport: boolean;
  canUnshare: boolean;
  createdWithEducationPlan: boolean;
  defaultElementId: string;
  defaultVersionGraphMode: string;
  defaultVersionGraphShowAutoVersions: boolean;
  defaultVersionGraphShowMerges: boolean;
  defaultWorkspace: {
    canDelete: boolean;
    createdAt: OnshapeDate;
    creator: {
      href: OnshapeHref;
      id: OnshapeId;
      name: string;
      viewRef: string;
      image: string;
      isOnshapeSupport: boolean;
      state: number;
      jsonType: string;
    };
    description: string;
    documentId: string;
    href: OnshapeHref;
    id: OnshapeId;
    isReadOnly: boolean;
    lastModifier: {
      href: OnshapeHref;
      id: OnshapeId;
      name: string;
      viewRef: string;
      image: string;
      isOnshapeSupport: boolean;
      state: number;
      jsonType: string;
    };
    microversion: string;
    modifiedAt: OnshapeDate;
    name: string;
    overrideDate: OnshapeDate;
    parent: string;
    parents: {
      createdAt: OnshapeDate;
      creator: {
        href: OnshapeHref;
        id: OnshapeId;
        name: string;
        viewRef: string;
        image: string;
        isOnshapeSupport: boolean;
        state: number;
        jsonType: string;
      };
      description: string;
      documentId: string;
      href: OnshapeHref;
      id: OnshapeId;
      lastModifier: {
        href: OnshapeHref;
        id: OnshapeId;
        name: string;
        viewRef: string;
        image: string;
        isOnshapeSupport: boolean;
        state: number;
        jsonType: string;
      };
      metadataWorkspaceId: string;
      microversion: string;
      modifiedAt: OnshapeDate;
      name: string;
      overrideDate: OnshapeDate;
      parent: string;
      purpose: number;
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
      type: string;
      viewRef: string;
    }[];
    protectionRule: string;
    state: string;
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
    type: string;
    viewRef: string;
  };
  documentLabels: {
    canMove: boolean;
    createdAt: OnshapeDate;
    createdBy: {
      href: OnshapeHref;
      id: OnshapeId;
      name: string;
      viewRef: string;
      image: string;
      isOnshapeSupport: boolean;
      state: number;
      jsonType: string;
    };
    description: string;
    href: OnshapeHref;
    id: OnshapeId;
    isContainer: boolean;
    isEnterpriseOwned: boolean;
    isMutable: boolean;
    jsonType: string;
    modifiedAt: OnshapeDate;
    modifiedBy: {
      href: OnshapeHref;
      id: OnshapeId;
      name: string;
      viewRef: string;
      image: string;
      isOnshapeSupport: boolean;
      state: number;
      jsonType: string;
    };
    name: string;
    owner: {
      href: OnshapeHref;
      id: OnshapeId;
      image: string;
      isEnterpriseOwnedResource: boolean;
      name: string;
      type: number;
      viewRef: string;
    };
    projectId: string;
    resourceType: string;
    treeHref: string;
    unparentHref: OnshapeHref;
    viewRef: string;
    parentLabelId: string;
    path: string;
  }[];
  documentType: number;
  forceExportRules: boolean;
  hasReleaseRevisionableObjects: boolean;
  hasRelevantInsertables: boolean;
  isOrphaned: boolean;
  isUsingManagedWorkflow: boolean;
  likedByCurrentUser: boolean;
  likes: number;
  notRevisionManaged: boolean;
  notes: string;
  numberOfTimesCopied: number;
  numberOfTimesReferenced: number;
  parentId: string;
  permission: string;
  permissionSet: string[];
  public: boolean;
  publishedVersionId: string;
  recentVersion: {
    href: OnshapeHref;
    id: OnshapeId;
    name: string;
    viewRef: string;
  };
  sequence: string;
  supportTeamUserAndShared: boolean;
  tags: string[];
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
  totalWorkspacesScheduledForUpdate: number;
  totalWorkspacesUpdating: number;
  trash: boolean;
  trashedAt: OnshapeDate;
  userAccountLimitsBreached: boolean;
  documentThumbnailElementId: string;
  duplicateNameViolationError: string;
  isUpgradedToLatestVersion: boolean;
  tracingEnabled: boolean;
}

export interface OnshapeDocumentVersion {
  createdAt: OnshapeDate;
  creator: {
    href: OnshapeHref;
    id: OnshapeId;
    name: string;
    viewRef: OnshapeHref;
    image: string;
    isOnshapeSupport: boolean;
    state: number;
    jsonType: string;
  };
  description: string;
  documentId: OnshapeId;
  href: OnshapeHref;
  id: OnshapeId;
  lastModifier: {
    href: OnshapeHref;
    id: OnshapeId;
    name: string;
    viewRef: OnshapeHref;
    image: string;
    isOnshapeSupport: boolean;
    state: number;
    jsonType: string;
  };
  metadataWorkspaceId: OnshapeId;
  microversion: OnshapeId;
  modifiedAt: OnshapeDate;
  name: string;
  overrideDate: OnshapeDate;
  parent: string;
  purpose: number;
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
  type: string;
  viewRef: OnshapeHref;
}

export interface OnshapeDocumentTab {
  accelerationUnits: string;
  angleUnits: string;
  angularVelocityUnits: string;
  applicationTarget: {
    baseHref: string;
    clientId: string;
    supportsCollaboration: boolean;
    tabIconHref: string;
  };
  areaUnits: string;
  dataType: string;
  deleted: boolean;
  elementType: string;
  energyUnits: string;
  filename: string;
  forceUnits: string;
  foreignDataId: string;
  id: OnshapeId;
  lengthUnits: string;
  massUnits: string;
  microversionId: OnshapeId;
  momentUnits: string;
  name: string;
  pressureUnits: string;
  prettyType: string;
  safeToShow: boolean;
  specifiedUnit: string;
  thumbnailInfo: {
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
  thumbnails: string;
  timeUnits: string;
  type: string;
  unupdatable: boolean;
  volumeUnits: string;
  zip: {
    files: string[];
  };
}
