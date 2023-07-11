import { paths } from '../generated/types'
import { Options, SuccessResponse } from './types'
import { generateUrl, hasObjectBody } from './utils'

export async function api<Path extends keyof paths, Method extends keyof paths[Path]>(
  path: Path,
  optionsParams: Options<Method, paths[Path][Method]>
): Promise<SuccessResponse<paths[Path][Method]>> {
  const url = generateUrl(path, optionsParams)

  let options: RequestInit & { headers: Record<string, string> } = {
    headers: {
      Accept: 'application/json',
    },
    ...optionsParams,
  }

  if (hasObjectBody(optionsParams)) {
    options.body = JSON.stringify(optionsParams.body)
    options.headers['Content-Type'] = 'application/json'
  }

  const res = await fetch(url, {
    credentials: 'include',
    ...options,
  })

  if (!res.ok) {
    throw res
  }

  return res.json()
}
