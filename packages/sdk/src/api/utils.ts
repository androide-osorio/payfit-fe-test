import { API_URL } from '../constants'
import { paths } from '../generated/types'
import { Options } from './types'

const PARAMS_REGEX = /\{(.*?)\}/gi
const PARAMS_VALUE_REGEX = /\{(.*)\}/

/**
 * Transform a HTTP URL containing bracket containing variables, like http://localhost:4000/api/v1/companies/{id}
 * into an HTTP URL containing the values given in params object like http://localhost:4000/api/v1/companies/1
 */
function parsePath(rawPath: string, options: { params: Record<string, string> }): string {
  /**
   * Include the containing brackets in the regex match to allow the match Fn
   * to remove them as well as inserting the correct values in the string
   */
  return rawPath.replaceAll(PARAMS_REGEX, (match) => {
    // This regex doesn't include the containing brackets and only extract the value
    const [_, value] = new RegExp(PARAMS_VALUE_REGEX).exec(match) as RegExpExecArray
    return options.params[value]
  })
}

export function hasParams(rawPath: string, options: any): options is { params: Record<string, string> } {
  const matches = rawPath.match(PARAMS_REGEX)
  return matches !== null && matches.length > 0
}
function hasQuery(options: any): options is { query: Record<string, string> } {
  return typeof options.query !== 'undefined' && Object.keys(options.query).length > 0
}

export function hasObjectBody(options: any): options is {
  body: Record<string | number | symbol, number | string | Blob>
} {
  return typeof options.body !== 'undefined' && Object.keys(options.body).length > 0
}

export function generateUrl<Path extends keyof paths, Method extends keyof paths[Path]>(
  rawPath: Path,
  options: Options<Method, paths[Path][Method]>
) {
  const path: string = hasParams(rawPath, options) ? parsePath(rawPath, options) : rawPath

  const url = new URL(path, API_URL)

  if (hasQuery(options)) {
    url.search = new URLSearchParams((options as any).query as Record<string, string>).toString()
  }

  return url
}
