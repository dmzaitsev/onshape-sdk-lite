import { OnshapeApiService } from '../api.service';
import { OnshapeId } from '../onshape.types';
import { OnshapeDocument, OnshapeDocumentInfo, OnshapeDocumentTab } from './document.type';

export class OnshapeDocumentService {

  private readonly GET_DOCUMENT = '/documents/{did}';
  private readonly GET_TABS = '/documents/d/{did}/{wvm}/{wvmid}/elements';

  constructor(private readonly apiService: OnshapeApiService) {}

  public async getDocument(documentId: OnshapeId): Promise<OnshapeDocumentInfo> {
    const response = await this.apiService.get<OnshapeDocumentInfo>(this.GET_DOCUMENT.replace('{did}', documentId));

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Document/getElementsInDocument
  */
  public async getTabsInDocument(
    document: OnshapeDocument,
    params: {
      elementType?: string,
      elementId?: string,
      withThumbnails?: boolean,
      withZipContents?: boolean
    } = {}
  ): Promise<OnshapeDocumentTab[]> {
    const uri = this.apiService.fillURI(this.GET_TABS, document, params);
    const response = await this.apiService.get<OnshapeDocumentTab[]>(uri);

    return response.data;
  }
}
