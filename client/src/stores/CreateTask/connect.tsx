import React, { createContext, FC, useContext, useReducer } from 'react'
import { Action, initialStore, Reducer, Store } from './'

const initialContext: [Store, React.Dispatch<Action>] = [
  initialStore,
  action => action,
]
const createTaskContext = createContext(initialContext)

export const CreateTaskProvider: FC<ProviderProps> = ({
  children,
  reducer,
}) => {
  const stateObject = useReducer(reducer, initialStore)
  return (
    <createTaskContext.Provider value={stateObject}>
      {children}
    </createTaskContext.Provider>
  )
}

export const useCreateTaskStore = () => useContext(createTaskContext)

export interface ProviderProps {
  reducer: Reducer
}
