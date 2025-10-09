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

import {
  CreatedResource,
  Error,
  Folder,
  FolderInput,
  FolderList,
  FolderType,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Folders<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all folder.
   *
   * @tags Folders
   * @name ListFolders
   * @summary Get folders
   * @request GET:/folders
   * @secure
   */
  listFolders = (
    query?: {
      /**
       * Specifies the maximum number of results to return in a single call. The default value is 10, and the maximum value that can be requested is 1000.
       *
       * Note that the server may enforce a lower limit than requested, depending on resource availability or other internal constraints. If this happens, the result set may be truncated. Always check the maxResults value in the response to confirm how many results were actually returned.
       * @format int64
       * @min 1
       * @default 10
       */
      maxResults?: number;
      /**
       * Zero-indexed starting position. Should be a multiple of maxResults.
       * @format int64
       * @min 0
       * @max 1000000
       * @default 0
       */
      startAt?: number;
      /**
       * Jira project key filter
       * @pattern ([A-Z][A-Z_0-9]+)
       */
      projectKey?: string;
      /** Folder type filter. Either `"TEST_CASE"`, `"TEST_PLAN"` or `"TEST_CYCLE"` */
      folderType?: FolderType;
    },
    params: RequestParams = {},
  ) =>
    this.request<FolderList, Error>({
      path: `/folders`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a folder.
   *
   * @tags Folders
   * @name CreateFolder
   * @summary Create folder
   * @request POST:/folders
   * @secure
   */
  createFolder = (data: FolderInput, params: RequestParams = {}) =>
    this.request<CreatedResource, Error>({
      path: `/folders`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a folder for the given ID.
   *
   * @tags Folders
   * @name GetFolder
   * @summary Get folder
   * @request GET:/folders/{folderId}
   * @secure
   */
  getFolder = (folderId: number, params: RequestParams = {}) =>
    this.request<Folder, Error>({
      path: `/folders/${folderId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
