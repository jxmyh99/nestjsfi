/**
 *
 *  定位的ts的请求返回接口的interfae
 * @export
 * @interface IResponse
 */
export interface IResponse {
  code: number; //0 请求成功 1请求失败 2 接口请求失败
  msg: any;
}
