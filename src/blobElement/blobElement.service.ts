import { AxiosResponse } from "axios";
import { DeepPartial } from "../onshape.types";
import { OnshapeApiService } from "../api.service";
import { OnshapeBlobExport, OnshapeBlobTab } from "./blobElement.type";
import { OnshapeDocument } from "../document/document.type";
import { OnshapeElement } from "../element/element.type";
import { OnshapeTranslation } from "../translations/translation.type";

export class OnshapeBlobService {

  private readonly EXPORT_BLOB = '/blobelements/d/{did}/{wv}/{wvid}/e/{eid}/translations';
  private readonly CREATE_BLOB = '/blobelements/d/{did}/w/{wid}';
  private readonly ACCESS_BLOB = '/blobelements/d/{did}/w/{wid}/e/{eid}';
  private readonly CHANGE_UNITS = '/blobelements/d/{did}/w/{wid}/e/{eid}/units';

  constructor(private readonly apiService: OnshapeApiService) {}

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/BlobElement/createBlobTranslation
  */
  public async createBlobTranslation(
    element: OnshapeElement,
    requestBody: DeepPartial<OnshapeBlobExport>
  ): Promise<OnshapeTranslation> {
    const uri = this.apiService.fillURI(this.EXPORT_BLOB, element);
    const response = await this.apiService.post<OnshapeTranslation>(uri, requestBody);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/BlobElement/uploadFileCreateElement
  */
  public async createBlobFromFile(
    document: OnshapeDocument,
    formData: FormData
  ): Promise<OnshapeBlobTab> {
    const uri = this.apiService.fillURI(this.CREATE_BLOB, document);
    const response = await this.apiService.postMultipart<OnshapeBlobTab>(uri, formData);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/BlobElement/downloadFileWorkspace
  */
  public async downloadBlob(
    blob: OnshapeElement,
    params: {
      contentDisposition?: string,
    },
    ifNoneMatch?: string
  ): Promise<AxiosResponse> {
    const uri = this.apiService.fillURI(this.ACCESS_BLOB, blob, params);
    const response = await this.apiService.get<string>(uri, { ifNoneMatch });

    return response;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/BlobElement/uploadFileUpdateElement
  */
  public async updateBlobFromFile(
    blob: OnshapeElement,
    params: {
      parentChangeId?: string
    },
    formData: FormData
  ): Promise<OnshapeBlobTab> {
    const uri = this.apiService.fillURI(this.CHANGE_UNITS, blob, params);
    const response = await this.apiService.postMultipart<OnshapeBlobTab>(uri, formData);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/BlobElement/updateUnits
  */
  public async updateUnits(
    blob: OnshapeElement,
    requestBody: Record<string, string>
  ): Promise<OnshapeBlobTab> {
    const uri = this.apiService.fillURI(this.CHANGE_UNITS, blob);
    const response = await this.apiService.post<OnshapeBlobTab>(uri, requestBody);

    return response.data;
  }
}
