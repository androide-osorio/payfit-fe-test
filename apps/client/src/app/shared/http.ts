import { api } from '@template/sdk'

export async function createCompany(body: { name: string; description: string; banner: string; sectorIds: string[] }) {
  return await api('/api/v1/companies/create', {
    method: 'post',
    body,
  })
}

export async function getCompanies(query: { name?: string; sector?: string; skip?: number; take?: number } = {}) {
  return await api('/api/v1/companies', {
    method: 'get',
    query,
  })
}

export async function getSectors() {
  return await api('/api/v1/sectors', {
    method: 'get',
  })
}
