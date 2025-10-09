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

export class Links<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Deletes a link for the given ID.
   *
   * @tags Links
   * @name DeleteLink
   * @summary Delete link
   * @request DELETE:/links/{linkId}
   * @secure
   */
  deleteLink = (linkId: number, params: RequestParams = {}) =>
    this.request<void, Error>({
      path: `/links/${linkId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
