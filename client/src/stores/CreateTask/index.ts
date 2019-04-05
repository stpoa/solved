import { tags } from '~data'
import { ExtendedFile } from '~pages/CreateTask/components/TaskPhotoEdit'

export const initialStore = {
  step: 1,
  files: [] as ExtendedFile[],
  balance: 0,
  description: '',
  tags: tags.map((name): Tag => ({ name, visible: true, selected: false })),
  tagsQuery: '',
  startDate: 0,
  finishDate: 0,
  price: 0,
  pageValid: false,
}

export enum ActionTypes {
  updateStep = 'UPDATE_STEP',
  updateFiles = 'UPDATE_FILES',
  updateBalance = 'UPDATE_BALANCE',
  updateDescription = 'UPDATE_DESCRIPTION',
  updateTags = 'UPDATE_TAGS',
  updateTagsQuery = 'UPDATE_TAGS_QUERY',
  updateStartDate = 'UPDATE_START_DATE',
  updateFinishDate = 'UPDATE_FINISH_DATE',
  updatePrice = 'UPDATE_PRICE',
  updatePageValidation = 'UPDATE_PAGE_VALIDATION',
}

export const reducer: Reducer = (state, action): Store => {
  switch (action.type) {
    case ActionTypes.updateStep:
      return { ...state, step: action.step }
    case ActionTypes.updateFiles:
      return { ...state, files: action.files }
    case ActionTypes.updateBalance:
      return { ...state, balance: action.balance }
    case ActionTypes.updateDescription:
      return { ...state, description: action.description }
    case ActionTypes.updateTags:
      return { ...state, tags: action.tags }
    case ActionTypes.updateTagsQuery:
      return { ...state, tagsQuery: action.tagsQuery }
    case ActionTypes.updateStartDate:
      return { ...state, startDate: action.startDate }
    case ActionTypes.updateFinishDate:
      return { ...state, finishDate: action.finishDate }
    case ActionTypes.updatePrice:
      return { ...state, price: action.price }
    case ActionTypes.updatePageValidation:
      return { ...state, pageValid: action.pageValid }
    default:
      return state
  }
}

export interface Tag {
  name: string
  visible: boolean
  selected: boolean
}

export interface ActionUpdateStep {
  type: ActionTypes.updateStep
  step: number
}

export interface ActionUpdateFiles {
  type: ActionTypes.updateFiles
  files: ExtendedFile[]
}

export interface ActionUpdateBalance {
  type: ActionTypes.updateBalance
  balance: number;
}

export interface ActionUpdateDescription {
  type: ActionTypes.updateDescription
  description: string
}

export interface ActionUpdateTags {
  type: ActionTypes.updateTags
  tags: Tag[]
}

export interface ActionUpdateTagsQuery {
  type: ActionTypes.updateTagsQuery
  tagsQuery: string
}

export interface ActionUpdateStartDate {
  type: ActionTypes.updateStartDate
  startDate: number
}

export interface ActionUpdateFinishDate {
  type: ActionTypes.updateFinishDate
  finishDate: number
}
export interface ActionUpdatePrice {
  type: ActionTypes.updatePrice
  price: number
}

export interface ActionUpdatePageValidation {
  type: ActionTypes.updatePageValidation
  pageValid: boolean
}

export type Action =
  | ActionUpdateStep
  | ActionUpdateFiles
  | ActionUpdateBalance
  | ActionUpdateDescription
  | ActionUpdateTags
  | ActionUpdateTagsQuery
  | ActionUpdateStartDate
  | ActionUpdateFinishDate
  | ActionUpdatePrice
  | ActionUpdatePageValidation 

export type Store = typeof initialStore
export type Reducer = (state: Store, action: Action) => Store
