import { tags } from '~data'
import { ExtendedFile } from '~pages/CreateTask/components/TaskPhotoEdit'
import { extendTags } from '~utils/tags'

export const initialState = {
  step: 1,
  files: [] as ExtendedFile[],
  balance: 0,
  description: '',
  tags: extendTags(tags),
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

export const reducer: Reducer = (state, action): State => ({
  ...state,
  ...action.payload,
})

export interface TagValue {
  name: string
  visible: boolean
  selected: boolean
}

export interface ActionUpdateStep {
  type: ActionTypes.updateStep
  payload: { step: number }
}

export interface ActionUpdateFiles {
  type: ActionTypes.updateFiles
  payload: { files: ExtendedFile[] }
}

export interface ActionUpdateBalance {
  type: ActionTypes.updateBalance
  payload: { balance: number }
}

export interface ActionUpdateDescription {
  type: ActionTypes.updateDescription
  payload: { description: string }
}

export interface ActionUpdateTags {
  type: ActionTypes.updateTags
  payload: { tags: TagValue[] }
}

export interface ActionUpdateTagsQuery {
  type: ActionTypes.updateTagsQuery
  payload: { tagsQuery: string }
}

export interface ActionUpdateStartDate {
  type: ActionTypes.updateStartDate
  payload: { startDate: number }
}

export interface ActionUpdateFinishDate {
  type: ActionTypes.updateFinishDate
  payload: { finishDate: number }
}
export interface ActionUpdatePrice {
  type: ActionTypes.updatePrice
  payload: { price: number }
}

export interface ActionUpdatePageValidation {
  type: ActionTypes.updatePageValidation
  payload: { pageValid: boolean }
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

export type State = typeof initialState
export type Reducer = (state: State, action: Action) => State
