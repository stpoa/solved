import { ExtendedFile } from '~pages/CreateTask/components/TaskPhotoEdit'

export const validateTagsPage = (
  tags: Array<{ name: string; visible: boolean; selected: boolean }>,
) => tags.filter(({ selected }) => selected).length >= 2

export const validateDescriptionPage = (description: string) =>
  description.length >= 25

export const validatePhotoPage = (files: ExtendedFile[]) => !!files.length

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
  !!startDate &&
  !!finishDate &&
  !!price &&
  !!balance &&
  !invalidateDateWithActualTime(startDate) &&
  !invalidateDateWithActualTime(finishDate) &&
  !invalidateStartDateWithFinishDate(startDate, finishDate) &&
  !invalidatePrice(balance, price)
