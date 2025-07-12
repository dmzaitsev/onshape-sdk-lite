import axios, { AxiosResponse } from 'axios';
import { OnshapeElement } from './element/element.type';
import { OnshapeDocument } from './document/document.type';
import { OnshapeConfig } from './config.service';

export class OnshapeApiService {
  private readonly baseApiUrl = 'https://cad.onshape.com/api/v11';

  constructor(private readonly config: OnshapeConfig) {}

  public fillURI(
    apiEndpoint: string,
    element: OnshapeElement | OnshapeDocument,
    optionalParams: any = null,
  ): string {
    let url = apiEndpoint.replace('{did}', element.documentId);

    url = url.replace('{wv}', element.wvm);
    url = url.replace('{wm}', element.wvm);
    url = url.replace('{wvm}', element.wvm);

    url = url.replace('{wid}', element.wvmId);
    url = url.replace('{vid}', element.wvmId);
    url = url.replace('{wvid}', element.wvmId);
    url = url.replace('{wmid}', element.wvmId);
    url = url.replace('{wvmid}', element.wvmId);

    if ('elementId' in element) {
      url = url.replace('{eid}', element.elementId);
    }

    if ('partId' in element && element.partId) {
      url = url.replace('{iden}', 'p');
      url = url.replace('{pid}', encodeURIComponent(element.partId));
      url = url.replace('{partid}', encodeURIComponent(element.partId));
    } else {
      url = url.replace('{iden}', 'pi');
    }

    if ('configuration' in element && element.configuration) {
      url += `?configuration=${element.configuration}`;
    }

    if (optionalParams) {
      for (const paramName in optionalParams) {
        const param = `${paramName}=${optionalParams[paramName]}`;
        url += url.includes('?') ? '&' + param : '?' + param;
      }
    }

    if ('linkDocumentId' in element && element.linkDocumentId) {
      const linkDocumentParam = 'linkDocumentId=' + element.linkDocumentId;
      url += url.includes('?') ? '&' + linkDocumentParam : '?' + linkDocumentParam;
    }

    return url;
  }

  private getHeaders() {
    return {
      Authorization: this.config.getAuthHeader(),
      'Content-Type': 'application/json',
      Accept: '*/*',
    };
  }

  public get<T>(apiUri: string, customHeaders: Record<string, any> = {}): Promise<AxiosResponse<T, any>> {
    return axios.get<T>(
      this.baseApiUrl + apiUri,
      {
        headers: {
          ...customHeaders,
          ...this.getHeaders()
        }
      }
    );
  }

  public post<T>(apiUri: string, body: any, customHeaders: Record<string, any> = {}): Promise<AxiosResponse<T, any>> {
    return axios.post<T>(
      this.baseApiUrl + apiUri,
      body,
      {
        headers: {
          ...customHeaders,
          ...this.getHeaders()
        }
      }
    );
  }

  public postMultipart<T>(apiUri: string, formData: FormData): Promise<AxiosResponse<T, any>> {
    return axios.post<T>(
      this.baseApiUrl + apiUri,
      formData,
      {
        headers: {
          Authorization: this.getHeaders().Authorization,
        }
      }
    );
  }

  public delete<T>(apiUri: string): Promise<AxiosResponse<T, any>> {
    return axios.delete<T>(
      this.baseApiUrl + apiUri,
      {
        headers: this.getHeaders(),
      }
    );
  }
}
