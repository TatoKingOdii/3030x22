export enum Endpoint {
  USERS,
  LOCATIONS
}

export const ENDPOINT_BASE: string = 'https://json-server-vercel-vert.vercel.app/';

export const EndpointPaths = new Map<Endpoint, String>(
  [
    [Endpoint.USERS, 'users'],
    [Endpoint.LOCATIONS, 'locations'],
  ]
)
