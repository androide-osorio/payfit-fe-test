/**
 * Utility to remove the need for undefined key value from options
 * https://github.com/microsoft/TypeScript/issues/12400
 */
export type IfDefinedOnly<Object> = Pick<
  Object,
  NonNullable<
    {
      [Key in keyof Object]: Object[Key] extends undefined ? undefined : Key
    }[keyof Object]
  >
>

export type EndpointParams<
  Endpoint,
  ParamsType extends string
> = Endpoint extends {
  parameters: Record<ParamsType, object>
}
  ? Endpoint["parameters"][ParamsType]
  : undefined

export type RequestBody<
  Endpoint,
  BodyType extends string = "application/json"
> = Endpoint extends {
  requestBody: { content: Record<BodyType, object> }
}
  ? Endpoint["requestBody"]["content"][BodyType]
  : undefined

export type ResponseWithStatus<Status extends number> = {
  responses: Record<Status, { content: { "application/json": unknown } }>
}
export type SuccessResponse<Endpoint> = Endpoint extends ResponseWithStatus<200>
  ? Endpoint["responses"][200]["content"]["application/json"]
  : Endpoint extends ResponseWithStatus<201>
  ? Endpoint["responses"][201]["content"]["application/json"]
  : null

export type Options<Method, Endpoint> = Omit<RequestInit, "body"> & {
  method: Method
  headers?: Record<string, string>
} & IfDefinedOnly<{
    query: EndpointParams<Endpoint, "query">
    params: EndpointParams<Endpoint, "path">
    body: RequestBody<Endpoint>
  }>
