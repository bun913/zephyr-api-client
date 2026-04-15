/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ## AND THEN MANUALLY MODIFIED TO USE FETCH INSTEAD OF AXIOS  ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type QueryParamsType = Record<string | number, any>;

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: Record<string, any>;
}

export interface RequestConfig {
  method?: string;
  url?: string;
  headers?: Record<string, any>;
  params?: Record<string, any>;
  data?: any;
  baseURL?: string;
  responseType?: string;
  [key: string]: any;
}

export interface FetchInstance {
  defaults: {
    headers: Record<string, Record<string, string>>;
    baseURL?: string;
    [key: string]: any;
  };
  request: <T = any>(config: RequestConfig) => Promise<ApiResponse<T>>;
}

export interface FullRequestParams
  extends Omit<RequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: string;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<RequestConfig, "data"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestConfig | void> | RequestConfig | void;
  secure?: boolean;
  format?: string;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

function buildQueryString(params: QueryParamsType): string {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) {
      continue;
    }
    if (Array.isArray(value)) {
      for (const v of value) {
        searchParams.append(key, String(v));
      }
    } else {
      searchParams.append(key, String(value));
    }
  }
  return searchParams.toString();
}

function createFetchInstance(config: RequestConfig = {}): FetchInstance {
  const defaults: FetchInstance["defaults"] = {
    headers: {
      common: {},
      get: {},
      post: {},
      put: {},
      patch: {},
      delete: {},
    },
    baseURL: config.baseURL,
  };

  const instance: FetchInstance = {
    defaults,
    request: async <T = any>(
      requestConfig: RequestConfig,
    ): Promise<ApiResponse<T>> => {
      const baseURL = requestConfig.baseURL || defaults.baseURL || "";
      const url = requestConfig.url || "";
      let fullUrl = url.startsWith("http") ? url : `${baseURL}${url}`;

      if (requestConfig.params) {
        const qs = buildQueryString(requestConfig.params);
        if (qs) {
          fullUrl += (fullUrl.includes("?") ? "&" : "?") + qs;
        }
      }

      const fetchOptions: globalThis.RequestInit = {
        method: (requestConfig.method || "GET").toUpperCase(),
        headers: requestConfig.headers as Record<string, string>,
      };

      if (requestConfig.data !== undefined && requestConfig.data !== null) {
        if (requestConfig.data instanceof FormData) {
          fetchOptions.body = requestConfig.data;
        } else if (typeof requestConfig.data === "string") {
          fetchOptions.body = requestConfig.data;
        } else {
          fetchOptions.body = JSON.stringify(requestConfig.data);
        }
      }

      const response = await fetch(fullUrl, fetchOptions);

      let data: T;
      const responseType = requestConfig.responseType;
      if (responseType === "blob" || responseType === "arraybuffer") {
        data = (await response.blob()) as T;
      } else if (responseType === "text") {
        data = (await response.text()) as T;
      } else {
        const text = await response.text();
        try {
          data = text ? JSON.parse(text) : ({} as T);
        } catch {
          data = text as T;
        }
      }

      const headers: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });

      const apiResponse: ApiResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers,
        config: requestConfig,
      };

      if (!response.ok) {
        const error: any = new Error(
          `Request failed with status code ${response.status}`,
        );
        error.response = apiResponse;
        error.config = requestConfig;
        error.status = response.status;
        throw error;
      }

      return apiResponse;
    },
  };

  return instance;
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: FetchInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: string;

  constructor({
    securityWorker,
    secure,
    format,
    ...restConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = createFetchInstance({
      ...restConfig,
      baseURL:
        restConfig.baseURL || "https://api.zephyrscale.smartbear.com/v2",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: RequestConfig,
    params2?: RequestConfig,
  ): RequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase()]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<ApiResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}
