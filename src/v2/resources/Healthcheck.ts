/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { Error } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Healthcheck<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Healthcheck
   * @name Healthcheck
   * @summary Check the health of this API
   * @request GET:/healthcheck
   * @secure
   */
  healthcheck = (params: RequestParams = {}) =>
    this.request<void, Error>({
      path: `/healthcheck`,
      method: "GET",
      secure: true,
      ...params,
    });
}
