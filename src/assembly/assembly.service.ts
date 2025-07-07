import { OnshapeApiService } from '../api.service';
import { OnshapeDocument } from '../document/document.type';
import { OnshapeElement, OnshapeExtendedElement } from '../element/element.type';
import { OnshapeProperty } from '../metadata/metadata.type';
import { DeepPartial, OnshapeEmptyAPIResponse, OnshapeId } from '../onshape.types';
import { OnshapeTranslation } from '../translations/translation.type';
import {
  OnshapeAssemblyBoundingBox,
  OnshapeAssemblyDefinition,
  OnshapeAssemblyFeature,
  OnshapeAssemblyInfo,
  OnshapeAssemblyMateValues,
  OnshapeAssemblyNamedViews,
  OnshapeAssemblyUpdate,
  OnshapeAsyncExport,
  OnshapeBOM,
  OnshapeBOMInfo,
  OnshapeBOMRow,
  OnshapeExportAssembly,
  OnshapeExportAssemblySolidworks,
  OnshapeExportAssemblyStep,
  OnshapeFeatureBase,
  OnshapeInsertInstance,
  OnshapeInsertInstanceResponse,
  OnshapeTransformGroups,
  OnshapeTransformOccurrences
} from './assembly.type';

export class OnshapeAssemblyService {

  private readonly GET_DEFINITION = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}';
  private readonly EXPORT_GLTF = '/assemblies/d/{did}/{wv}/{wvid}/e/{eid}/export/gltf';
  private readonly EXPORT_OBJ = '/assemblies/d/{did}/{wv}/{wvid}/e/{eid}/export/obj';
  private readonly EXPORT_SOLIDWORKS = '/assemblies/d/{did}/{wv}/{wvid}/e/{eid}/export/solidworks';
  private readonly EXPORT_STEP = '/assemblies/d/{did}/{wv}/{wvid}/e/{eid}/export/step';
  private readonly GET_MATE_VALUES = '/assemblies/d/{did}/{wv}/{wvid}/e/{eid}/matevalues';
  private readonly EXPORT_ASYNC = '/assemblies/d/{did}/{wv}/{wvid}/e/{eid}/translations';
  private readonly GET_BOM = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/bom';
  private readonly GET_BOUNDING_BOXES = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/boundingboxes';
  private readonly GET_NAMED_POSITIONS = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/namedpositions';
  private readonly GET_SHADED_VIEWS = '/assemblies/d/{did}/{wvm}/{wvmid}/e/{eid}/shadedviews';
  private readonly GET_NAMED_VIEWS = '/assemblies/d/{did}/e/{eid}/namedViews';
  private readonly CREATE_ASSEMBLY = '/assemblies/d/{did}/w/{wid}';
  private readonly GET_BOM_ELEMENT = '/assemblies/d/{did}/w/{wid}/e/{eid}/bomelement';
  private readonly ACCESS_FEATURE = '/assemblies/d/{did}/w/{wid}/e/{eid}/features/featureid/{fid}';
  private readonly DELETE_INSTANCE = '/assemblies/d/{did}/w/{wid}/e/{eid}/instance/nodeid/{nid}';
  private readonly INSERT_INSTANCE = '/assemblies/d/{did}/w/{wid}/e/{eid}/instances';
  private readonly UPDATE_MATE_VALES = '/assemblies/d/{did}/w/{wid}/e/{eid}/matevalues';
  private readonly UPDATE_ASSEMBLY = '/assemblies/d/{did}/w/{wid}/e/{eid}/modify';
  private readonly TRANSFORM_OCCURRENCES = '/assemblies/d/{did}/w/{wid}/e/{eid}/occurrencetransforms';
  private readonly INSERT_TRANSFORM_INSTANCES = '/assemblies/d/{did}/w/{wid}/e/{eid}/transformedinstances';


  constructor(private readonly apiService: OnshapeApiService) {}

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/createAssemblyExportGltf
  */
  public async createAssemblyExportGltf(
    assembly: OnshapeElement,
    requestBody: DeepPartial<OnshapeExportAssembly>
  ): Promise<OnshapeTranslation> {
    const uri = this.apiService.fillURI(this.EXPORT_GLTF, assembly);
    const response = await this.apiService.post<OnshapeTranslation>(uri, requestBody);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/createAssemblyExportObj
  */
  public async createAssemblyExportObj(
    assembly: OnshapeElement,
    requestBody: DeepPartial<OnshapeExportAssembly>
  ): Promise<OnshapeTranslation> {
    const uri = this.apiService.fillURI(this.EXPORT_OBJ, assembly);
    const response = await this.apiService.post<OnshapeTranslation>(uri, requestBody);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/createAssemblyExportSolidworks
  */
  public async createAssemblyExportSolidworks(
    assembly: OnshapeElement,
    requestBody: DeepPartial<OnshapeExportAssemblySolidworks>
  ): Promise<OnshapeTranslation> {
    const uri = this.apiService.fillURI(this.EXPORT_SOLIDWORKS, assembly);
    const response = await this.apiService.post<OnshapeTranslation>(uri, requestBody);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/createAssemblyExportStep
  */
  public async createAssemblyExportStep(
    assembly: OnshapeElement,
    requestBody: DeepPartial<OnshapeExportAssemblyStep>
  ): Promise<OnshapeTranslation> {
    const uri = this.apiService.fillURI(this.EXPORT_STEP, assembly);
    const response = await this.apiService.post<OnshapeTranslation>(uri, requestBody);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/getMateValues
  */
  public async getMateValues(assembly: OnshapeElement): Promise<OnshapeAssemblyMateValues> {
    const uri = this.apiService.fillURI(this.GET_MATE_VALUES, assembly);
    const response = await this.apiService.get<OnshapeAssemblyMateValues>(uri);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/translateFormat
  */
  public async createAssemblyExportAsync(
    assembly: OnshapeElement,
    requestBody: DeepPartial<OnshapeAsyncExport>
  ): Promise<OnshapeTranslation> {
    const uri = this.apiService.fillURI(this.EXPORT_ASYNC, assembly);
    const response = await this.apiService.post<OnshapeTranslation>(uri, requestBody);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/getAssemblyDefinition
  */
  public async getAssemblyDefinition(
    assembly: OnshapeElement,
    params: {
      explodedViewId?: string,
      includeMateFeatures?: boolean,
      includeNonSolids?: boolean,
      includeMateConnectors?: boolean,
      excludeSuppressed?: boolean
    } = {}
  ): Promise<OnshapeAssemblyDefinition> {
    const uri = this.apiService.fillURI(this.GET_DEFINITION, assembly, params);
    const response = await this.apiService.get<OnshapeAssemblyDefinition>(uri);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/getBillOfMaterials
  */
  public async getBillOfMaterials(
    assembly: OnshapeElement,
    params: {
      bomColumnIds?: OnshapeId[],
      indented?: boolean,
      multiLevel?: boolean,
      generateIfAbsent?: boolean,
      templateId?: string,
      includeExcluded?: boolean,
      onlyVisibleColumns?: boolean,
      ignoreSubassemblyBomBehavior?: boolean,
      includeItemMicroversions?: boolean,
      includeTopLevelAssemblyRow?: boolean,
      thumbnail?: boolean,
    } = {}
  ): Promise<OnshapeBOM> {
    const uri = this.apiService.fillURI(this.GET_BOM, assembly, params);
    const response = await this.apiService.get<OnshapeBOM>(uri);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/getAssemblyBoundingBoxes
  */
  public async getAssemblyBoundingBoxes(
    assembly: OnshapeElement,
    params: {
      explodedViewId?: string,
      includeHidden?: boolean,
      displayStateId?: string,
      namedPositionId?: string,
      includeSketches?: boolean
    } = {}
  ): Promise<OnshapeAssemblyBoundingBox> {
    const uri = this.apiService.fillURI(this.GET_BOUNDING_BOXES, assembly, params);
    const response = await this.apiService.get<OnshapeAssemblyBoundingBox>(uri);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/getNamedPositions
  */
  public async getNamedPositions(
    assembly: OnshapeElement,
    params: {
      explodedViewId?: string
    } = {}
  ): Promise<Array<{ id: string, name: string }>> {
    const uri = this.apiService.fillURI(this.GET_NAMED_POSITIONS, assembly, params);
    const response = await this.apiService.get<Array<{ id: string, name: string }>>(uri);

    return response.data;
  }

  /**
   * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/getAssemblyShadedViews
   */
  public async getAssemblyShadedViews(
    assembly: OnshapeElement,
    params: {
      explodedViewId?: string,
      viewMatrix?: string,
      outputHeight?: number,
      outputWidth?: number,
      pixelSize?: number,
      edges?: string,
      showAllParts?: boolean,
      includeSurfaces?: boolean,
      useAntiAliasing?: boolean,
      includeWires?: boolean,
      displayStateId?: string,
      namedPositionId?: string,
    } = {}
  ): Promise<{ images: string[] }> {
    const uri = this.apiService.fillURI(this.GET_SHADED_VIEWS, assembly, params);
    const response = await this.apiService.get<{ images: string[] }>(uri);

    return response.data;
  }

  /**
   * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/getNamedViews
   */
  public async getNamedViews(
    assembly: OnshapeElement,
    params: {
      skipPerspective?: boolean,
      includeSectionCutViews?: boolean,
    } = {}
  ): Promise<OnshapeAssemblyNamedViews> {
    const uri = this.apiService.fillURI(this.GET_NAMED_VIEWS, assembly, params);
    const response = await this.apiService.get<OnshapeAssemblyNamedViews>(uri);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/createAssembly
  */
  public async createAssembly(
    document: OnshapeDocument,
    assemblyName: string
  ): Promise<OnshapeAssemblyInfo> {
    const uri = this.apiService.fillURI(this.CREATE_ASSEMBLY, document);
    const response = await this.apiService.post<OnshapeAssemblyInfo>(uri, { name: assemblyName });

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/getOrCreateBillOfMaterialsElement
  */
  public async getOrCreateBillOfMaterialsElement(assembly: OnshapeElement): Promise<OnshapeBOMInfo> {
    const uri = this.apiService.fillURI(this.GET_BOM_ELEMENT, assembly);
    const response = await this.apiService.post<OnshapeBOMInfo>(uri, {});

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/updateFeature
  */
  public async updateFeature(
    assembly: OnshapeElement,
    requestBody: DeepPartial<OnshapeAssemblyFeature>,
  ): Promise<OnshapeBOMInfo> {
    if (!requestBody?.feature?.featureId) {
      throw new Error('Feature must have ID');
    }
    const uri = this.apiService.fillURI(this.ACCESS_FEATURE, assembly).replace('{fid}', requestBody.feature.featureId);
    const response = await this.apiService.post<OnshapeBOMInfo>(uri, {});

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/deleteFeature
  */
  public async deleteFeature(
    assembly: OnshapeElement,
    featureId: OnshapeId
  ): Promise<OnshapeFeatureBase> {
    const uri = this.apiService.fillURI(this.ACCESS_FEATURE, assembly).replace('{fid}', featureId);
    const response = await this.apiService.delete<OnshapeFeatureBase>(uri);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/deleteInstance
  */
  public async deleteInstance(
    assembly: OnshapeElement,
    nodeId: string
  ): Promise<OnshapeEmptyAPIResponse> {
    const uri = this.apiService.fillURI(this.DELETE_INSTANCE, assembly).replace('{nid}', nodeId);
    const response = await this.apiService.delete<OnshapeEmptyAPIResponse>(uri);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/createInstance
  */
  public async insertInstance(
    assembly: OnshapeElement,
    requestBody: DeepPartial<OnshapeInsertInstance>
  ): Promise<OnshapeEmptyAPIResponse> {
    const uri = this.apiService.fillURI(this.INSERT_INSTANCE, assembly);
    const response = await this.apiService.post<OnshapeEmptyAPIResponse>(uri, requestBody);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/updateMateValues
  */
  public async updateMateValues(
    assembly: OnshapeElement,
    requestBody: DeepPartial<OnshapeAssemblyMateValues>
  ): Promise<OnshapeAssemblyMateValues> {
    const uri = this.apiService.fillURI(this.UPDATE_MATE_VALES, assembly);
    const response = await this.apiService.post<OnshapeAssemblyMateValues>(uri, requestBody);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/modify
  */
  public async modifyAssembly(
    assembly: OnshapeElement,
    requestBody: DeepPartial<OnshapeAssemblyUpdate>
  ): Promise<OnshapeEmptyAPIResponse> {
    const uri = this.apiService.fillURI(this.UPDATE_ASSEMBLY, assembly);
    const response = await this.apiService.post<OnshapeEmptyAPIResponse>(uri, requestBody);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/transformOccurrences
  */
  public async transformOccurrences(
    assembly: OnshapeElement,
    requestBody: DeepPartial<OnshapeTransformOccurrences>
  ): Promise<OnshapeEmptyAPIResponse> {
    const uri = this.apiService.fillURI(this.TRANSFORM_OCCURRENCES, assembly);
    const response = await this.apiService.post<OnshapeEmptyAPIResponse>(uri, requestBody);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Assembly/insertTransformedInstances
  */
  public async insertTransformedInstances(
    assembly: OnshapeElement,
    requestBody: DeepPartial<OnshapeTransformGroups>
  ): Promise<OnshapeInsertInstanceResponse> {
    const uri = this.apiService.fillURI(this.INSERT_TRANSFORM_INSTANCES, assembly);
    const response = await this.apiService.post<OnshapeInsertInstanceResponse>(uri, requestBody);

    return response.data;
  }




  public static getExtendedElementsFromBOM(onshapeBOM: OnshapeBOM): OnshapeExtendedElement[] {
    const elements = [
      this.fromBOMRow(onshapeBOM.topLevelAssemblyRow, onshapeBOM),
    ];

    onshapeBOM.rows.forEach(row => {
      elements.push(this.fromBOMRow(row, onshapeBOM));
    });

    return elements;
  }

  private static fromBOMRow(bomRow: OnshapeBOMRow, onshapeBOM: OnshapeBOM): OnshapeExtendedElement {
    const element: OnshapeExtendedElement = {
      documentId: bomRow.itemSource.documentId,
      linkDocumentId: onshapeBOM.bomSource.document.id,
      wvmId: bomRow.itemSource.wvmId,
      wvm: bomRow.itemSource.wvmType,
      elementId: bomRow.itemSource.elementId,
      partId: bomRow.itemSource.partId,
      configuration: bomRow.itemSource.configuration,
      quantity: bomRow.headerIdToValue[OnshapeProperty.Quantity.id] as number,
      properties: [],
    };

    for (const headerId in bomRow.headerIdToValue) {
      const header = onshapeBOM.headers.find(header => header.id === headerId);
      if (header) {
        element.properties.push({
          id: headerId,
          name: header.name,
          value: bomRow.headerIdToValue[headerId],
        });
      } else {
        for (const key in OnshapeProperty) {
          const property = OnshapeProperty[key as keyof typeof OnshapeProperty];
          if (property.id === headerId) {
            element.properties.push({
              id: headerId,
              name: property.name,
              value: bomRow.headerIdToValue[headerId],
            });
          }
        }
      }
    }

    return element;
  }
}