import { ExtendedFile } from '~pages/CreateTask/components/TaskPhotoEdit'
import { Store } from '~stores/CreateTask'
import { Step } from './containers/CreateTask'

export const validateTagsPage = (
  tags: Array<{ name: string; visible: boolean; selected: boolean }>,
) => tags.find(({ selected }) => selected)

export const validateDescriptionPage = (description: string) => !!description

export const validatePhotoPage = (files: ExtendedFile[]) => files.length

export const invalidatePrice = (balance: number, price: number) =>
  balance && balance < price ? 'Nie masz wystarczających środków na koncie' : ''

export const invalidateDateWithActualTime = (timeStamp: number) =>
  timeStamp && new Date(timeStamp).getTime() < Date.now()
    ? 'Data nie moze być wcześniejsza niż aktualny czas'
    : ''

export const invalidateStartDateWithFinishDate = (
  startDateTimeStamp: number,
  finishDateTimeStamp: number,
) =>
  startDateTimeStamp &&
  finishDateTimeStamp &&
  new Date(startDateTimeStamp).getTime() >
    new Date(finishDateTimeStamp).getTime()
    ? 'Data rozwiązania zadania nie może byc wcześniejsza niż data dodania treści'
    : ''

export const validatePriceAndTermPage = (
  startDate: number,
  finishDate: number,
  price: number,
  balance: number,
) =>
  startDate &&
  finishDate &&
  price &&
  balance &&
  !invalidateDateWithActualTime(startDate) &&
  !invalidateDateWithActualTime(finishDate) &&
  !invalidateStartDateWithFinishDate(startDate, finishDate) &&
  !invalidatePrice(balance, price)

export const validateCurrentPage = (createTaskStore: Store, steps: Step[]) => {
  const actualStep = steps[createTaskStore.step - 1]
  switch (actualStep.stepName) {
    case 'tags':
      return validateTagsPage(createTaskStore.tags)
    case 'description':
      return validateDescriptionPage(createTaskStore.description)
    case 'photo':
      return validatePhotoPage(createTaskStore.files)
    case 'priceAndTerm': {
      const { startDate, finishDate, price, balance } = createTaskStore
      return validatePriceAndTermPage(startDate, finishDate, price, balance)
    }
    default:
      return false
  }
}
