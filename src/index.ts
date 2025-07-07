
import { OnshapeDocumentService } from './document/document.service';
import { OnshapeApiService } from './api.service';
import { OnshapeAssemblyService } from './assembly/assembly.service';
import { OnshapeConfig } from './config.service';
import { OnshapeWebhookService } from './webhook/webhook.service';

export class OnshapeSdk {
  private static config: OnshapeConfig = new OnshapeConfig();
  private static apiService: OnshapeApiService;
  private static initialized = false;

  private constructor() {}

  private static checkInitialized(): void {
    if (!OnshapeSdk.initialized) {
      throw Error('You must initialize SDK via OAuth2 or Basic auth');
    }
  }

  public static initializeOAuth2(bearerToken: string): void {
    OnshapeSdk.config.setBearerToken(bearerToken);
    OnshapeSdk.apiService = new OnshapeApiService(OnshapeSdk.config);
    OnshapeSdk.initialized = true;
  }

  public static initializeSecrets(credentials: { clientId: string; clientSecret: string }): void {
    OnshapeSdk.config.setApiKeys(credentials);
    OnshapeSdk.apiService = new OnshapeApiService(OnshapeSdk.config);
    OnshapeSdk.initialized = true;
  }

  public static createDocumentService(): OnshapeDocumentService {
    OnshapeSdk.checkInitialized();
    return new OnshapeDocumentService(OnshapeSdk.apiService);
  }

  public static createAssemblyService(): OnshapeAssemblyService {
    OnshapeSdk.checkInitialized();
    return new OnshapeAssemblyService(OnshapeSdk.apiService);
  }

  public static createWebhookService(): OnshapeWebhookService {
    OnshapeSdk.checkInitialized();
    return new OnshapeWebhookService(OnshapeSdk.apiService);
  }
}