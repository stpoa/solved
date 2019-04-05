import React, { createContext, FC, useContext, useReducer } from 'react'
import { Action, initialState, Reducer, State } from './'

const initialContext: [State, React.Dispatch<Action>] = [
  initialState,
  action => action,
]
const createTaskContext = createContext(initialContext)

export const CreateTaskProvider: FC<ProviderProps> = ({
  children,
  reducer,
}) => {
  const stateObject = useReducer(reducer, initialState)
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
