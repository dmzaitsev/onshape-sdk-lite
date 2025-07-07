import { Buffer } from 'buffer';

export class OnshapeConfig {
  private authorizationHeader: string | null = null;

  public getAuthHeader(): string {
    if (!this.authorizationHeader) {
      throw Error('You must authorize via OAuth2 or Basic auth');
    }
    return this.authorizationHeader;
  }

  public setBearerToken(bearerToken: string): void {
    this.authorizationHeader = 'Bearer ' + bearerToken;
  }

  public setApiKeys(credentials: { clientId: string; clientSecret: string }): void {
    const base64 = Buffer.from(credentials.clientId + ':' + credentials.clientSecret).toString(
      'base64',
    );
    this.authorizationHeader = 'Basic ' + base64;
  }
}