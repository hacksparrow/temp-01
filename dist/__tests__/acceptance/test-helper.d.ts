import { Lb3Lb4Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Lb3Lb4Application;
    client: Client;
}
