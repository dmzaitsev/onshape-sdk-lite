import { OnshapeApiService } from '../api.service';
import { DeepPartial, OnshapeEmptyAPIResponse, OnshapeId } from '../onshape.types';
import { OnshapeExtendedWebhook, OnshapeExtendedWebhookList, OnshapeWebhook } from './webhook.type';

export class OnshapeWebhookService {
  private readonly WEBHOOKS = '/webhooks';
  private readonly SINGLE_WEBHOOK = '/webhooks/{webhookid}';

  constructor(private readonly apiService: OnshapeApiService) {}

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Webhook/getWebhooks
  */
  public async getWebhooks(
    params: {
      company?: string,
      user?: string,
      offset: number,
      limit: number
    } = { offset: 0, limit: 20 }
  ): Promise<OnshapeExtendedWebhookList> {
    const uri = this.apiService.fillURI(this.WEBHOOKS, {} as any, params);
    const response = await this.apiService.get<OnshapeExtendedWebhookList>(uri);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Webhook/createWebhook
  */
  public async createWebhook(requestBody: DeepPartial<OnshapeWebhook>): Promise<OnshapeExtendedWebhook> {
    const response = await this.apiService.post<OnshapeExtendedWebhook>(this.WEBHOOKS, requestBody);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Webhook/getWebhook
  */
  public async getWebhook(webhookId: OnshapeId): Promise<OnshapeExtendedWebhook> {
    const uri = this.SINGLE_WEBHOOK.replace('{webhookid}', webhookId);
    const response = await this.apiService.get<OnshapeExtendedWebhook>(uri);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Webhook/updateWebhook
  */
  public async updateWebhook(webhookId: OnshapeId, requestBody: DeepPartial<OnshapeWebhook>): Promise<OnshapeExtendedWebhook> {
    const uri = this.SINGLE_WEBHOOK.replace('{webhookid}', webhookId);
    const response = await this.apiService.post<OnshapeExtendedWebhook>(uri, requestBody);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Webhook/unregisterWebhook
  */
  public async deleteWebhook(webhookId: OnshapeId, blockNotification: boolean = false): Promise<OnshapeEmptyAPIResponse> {
    const uri = this.SINGLE_WEBHOOK.replace('{webhookid}', webhookId) + `?blockNotification=${blockNotification}`;
    const response = await this.apiService.delete<OnshapeEmptyAPIResponse>(uri);

    return response.data;
  }

  /**
  * @reference https://cad.onshape.com/glassworks/explorer#/Webhook/pingWebhook
  */
  public async pingWebhook(webhookId: OnshapeId): Promise<OnshapeEmptyAPIResponse> {
    const uri = this.SINGLE_WEBHOOK.replace('{webhookid}', webhookId);
    const response = await this.apiService.get<OnshapeEmptyAPIResponse>(uri);

    return response.data;
  }
}