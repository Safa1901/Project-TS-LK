import React, { useReducer } from 'react'
//styles
import styles from './UpdateResponsibleDialog.module.scss'
import { Dialog, DialogContent } from '@material-ui/core'
import { CloseIcon } from '@Files/icons'
import { NativeInputPhone } from 'templates/Forms/InputPhone'
import { InputText } from 'templates/Forms/InputText'
import { NativeSelect } from 'templates/Select/Select'
import { ButtonBase } from 'templates/Buttons/Buttons'
//types
type TState = {
  phone: string
  fio: string
  priority: string
}
type IAction = { type: 'ON_CHANGE'; name: string; value: any }
interface IUpdateResponsibleDialog {
  open: boolean
  handleClose: () => void
}
export const UpdateResponsibleDialog: React.FC<IUpdateResponsibleDialog> = React.memo(
  ({ open, handleClose }) => {
    const initialState = { phone: '', fio: '', priority: '' }
    const reducer = (state: TState, action: IAction): TState => {
      switch (action.type) {
        case 'ON_CHANGE':
          return {
            ...state,
            [action.name]: action.value,
          }
      }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleChange = (name: string, value: any) =>
      dispatch({ type: 'ON_CHANGE', name, value })
    //utils
    const beforeMaskedValueChange = (
      newState: any,
      oldState: any,
      userInput: any
    ) => {
      let { value } = newState
      let selection = newState.selection
      let cursorPosition = selection ? selection.start : null
      if (
        (value.endsWith('-') &&
          userInput !== '-' &&
          !state.phone.endsWith('-')) ||
        (value.endsWith(' ') && userInput !== ' ' && !state.phone.endsWith(' '))
      ) {
        if (cursorPosition === value.length) {
          cursorPosition--
          selection = { start: cursorPosition, end: cursorPosition }
        }
        value = value.slice(0, -1)
      }
      return {
        value,
        selection,
      }
    }
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        className={styles.root}
        PaperProps={{ style: { borderRadius: 10 } }}
      >
        <DialogContent className={styles.root__dialog_content}>
          <div className={styles.root__dialog_content__close}>
            <button onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
          <div className={styles.root__dialog_content__title}>
            Редактировать ответственное лицо
          </div>
          <div className={styles.root__dialog_content__inputs}>
            <div className={styles.root__dialog_content__inputs__input}>
              <InputText
                type="text"
                title="Фамилия Имя Отчество"
                placeholder=""
                name="fio"
                value={state.fio}
                onChange={(event) =>
                  handleChange(event.target.name, event.target.value)
                }
              />
            </div>
            <div className={styles.root__dialog_content__inputs__input}>
              <NativeInputPhone
                title="Телефон"
                placeholder=""
                name="phone"
                value={state.phone}
                onChange={(event: any) =>
                  handleChange('phone', event.target.value)
                }
                beforeMaskedValueChange={beforeMaskedValueChange}
              />
            </div>
          </div>
          <div className={styles.root__dialog_content__inputs__input}>
            <div className={styles.root__dialog_content__inputs__input__label}>
              Приоритет
            </div>
            <NativeSelect
              name="priority"
              value={state.priority}
              data={[
                { id: 0, name: '1' },
                { id: 1, name: '2' },
              ]}
              placeholder=""
              onChange={(event) => handleChange(`priority`, event.target.value)}
            />
          </div>
          <div className={styles.root__dialog_content__action}>
            <div>
              <ButtonBase text="Сохранить" onClick={handleClose} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
)
