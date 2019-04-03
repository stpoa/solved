import { tags } from '~data'
import { ExtendedFile } from '~pages/CreateTask/components/TaskPhotoEdit'

export const initialStore = {
  step: 1,
  files: [] as ExtendedFile[],
  balance: 0,
  description: '',
  tags: tags.map(name => ({ name, visible: true, selected: false })),
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

export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.updateStep:
      return { ...state, step: action.payload }
    case ActionTypes.updateFiles:
      return { ...state, files: action.payload }
    case ActionTypes.updateBalance:
      return { ...state, balance: action.payload }
    case ActionTypes.updateDescription:
      return { ...state, description: action.payload }
    case ActionTypes.updateTags:
      return { ...state, tags: action.payload }
    case ActionTypes.updateTagsQuery:
      return { ...state, tagsQuery: action.payload }
    case ActionTypes.updateStartDate:
      return { ...state, startDate: action.payload }
    case ActionTypes.updateFinishDate:
      return { ...state, finishDate: action.payload }
    case ActionTypes.updatePrice:
      return { ...state, price: action.payload }
    case ActionTypes.updatePageValidation:
      return { ...state, pageValid: action.payload }
    default:
      return state
  }
}

export interface Action {
  type: ActionTypes
  payload: any
}

export type Store = typeof initialStore
export type Reducer = (state: Store, action: Action) => Store
