import { tags } from '~data'
import { ExtendedFile } from '~pages/CreateTask/components/TaskPhotoEdit'

export const initialStore = {
  step: 1,
  files: [] as ExtendedFile[],
  description: '',
  tags: tags.map(name => ({ name, visible: true, selected: false })),
  tagsQuery: '',
}

export enum ActionTypes {
  updateStep = 'UPDATE_STEP',
  updateFiles = 'UPDATE_FILES',
  updateDescription = 'UPDATE_DESCRIPTION',
  updateTags = 'UPDATE_TAGS',
  updateTagsQuery = 'UPDATE_TAGS_QUERY',
}

export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.updateStep:
      return { ...state, step: action.payload }
    case ActionTypes.updateFiles:
      return { ...state, files: action.payload }
    case ActionTypes.updateDescription:
      return { ...state, description: action.payload }
    case ActionTypes.updateTags:
      return { ...state, tags: action.payload }
    case ActionTypes.updateTagsQuery:
      return { ...state, tagsQuery: action.payload }
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
