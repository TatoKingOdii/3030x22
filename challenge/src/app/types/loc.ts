export interface Loc {
  id: string,
  name: string,
  climate: string,
  cost: string,
  attractions: string
}

export const DEFAULT_LOCATION: Loc =  {
  id: '',
  name: '',
  climate: '',
  cost: '',
  attractions: ''
} as const;
