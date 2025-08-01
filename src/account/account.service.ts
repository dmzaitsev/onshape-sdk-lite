import {
  DeepPartial,
  OnshapeEmptyAPIResponse,
  OnshapeId,
} from '../onshape.types';
import { OnshapeApiService } from '../api.service';
import {
  OnshapeConsumePurchase,
  OnshapePurchaseInfo,
  OnshapePurchaseList,
} from './account.type';

export class OnshapeAccountService {
  private readonly CANCEL_PURCHASE = '/accounts/{aid}/purchases/{pid}';
  private readonly GET_PLAN_PURCHASE_LIST =
    '/accounts/plans/{planId}/purchases';
  private readonly GET_PURCHASE_LIST = '/accounts/purchases';

  constructor(private readonly apiService: OnshapeApiService) {}

  /**
   * @reference https://cad.onshape.com/glassworks/explorer#/Account/cancelPurchaseNew
   */
  public async cancelPurchase(
    accountId: OnshapeId,
    purchaseId: OnshapeId,
    params: {
      cancelImmediately?: boolean;
    }
  ): Promise<OnshapeEmptyAPIResponse> {
    let uri = this.CANCEL_PURCHASE.replace('{aid}', accountId).replace(
      '{pid}',
      purchaseId
    );
    if (params) {
      uri += `?cancelImmediately=${params.cancelImmediately}`;
    }
    const response = await this.apiService.delete<OnshapeEmptyAPIResponse>(uri);

    return response.data;
  }

  /**
   * @reference https://cad.onshape.com/glassworks/explorer#/Account/getPlanPurchases
   */
  public async getPlanPurchases(
    planId: string,
    params: {
      offset: number;
      limit: number;
    } = { offset: 0, limit: 20 }
  ): Promise<OnshapePurchaseList> {
    const uri = this.apiService
      .fillURI(this.GET_PLAN_PURCHASE_LIST, {} as any, params)
      .replace('{planId}', planId);

    const response = await this.apiService.get<OnshapePurchaseList>(uri);

    return response.data;
  }

  /**
   * @reference https://cad.onshape.com/glassworks/explorer#/Account/getPurchases
   */
  public async getPurchases(
    params: {
      all?: boolean;
      ownPurchaseOnly?: boolean;
    } = { all: false, ownPurchaseOnly: false }
  ): Promise<OnshapePurchaseInfo[]> {
    const uri = this.apiService.fillURI(
      this.GET_PURCHASE_LIST,
      {} as any,
      params
    );

    const response = await this.apiService.get<OnshapePurchaseInfo[]>(uri);

    return response.data;
  }

  /**
   * @reference https://cad.onshape.com/glassworks/explorer#/Account/consumePurchase
   */
  public async consumePurchase(
    purchaseId: OnshapeId,
    requestBody: DeepPartial<OnshapeConsumePurchase>
  ): Promise<OnshapePurchaseInfo> {
    const uri = this.GET_PURCHASE_LIST.replace('{pid}', purchaseId);

    const response = await this.apiService.post<OnshapePurchaseInfo>(
      uri,
      requestBody
    );

    return response.data;
  }
}
