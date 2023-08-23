import React from 'react'
//styles
import styles from '../styles/newAppealsToSupportContainer.module.scss'
import { ButtonBefore, ButtonBase } from 'templates/Buttons/Buttons'
import { Link } from 'react-router-dom'
import { NativeSelect } from 'templates/Select/Select'
import { InputTextArea } from 'templates/Forms/InputTextArea'

export const NewAppealsToSupportContainer = React.memo(({}) => {
  const [files, setFiles] = React.useState<File[]>([])
  const [question, setQuestion] = React.useState<string>('')
  const [selectedThemeAppeal, setSelectedThemeAppeal] = React.useState<string>(
    ''
  )
  const [selectAppealsData] = React.useState([
    { id: 0, name: 'Финансовые вопросы ' },
    { id: 1, name: 'Бухгалтерия: закрывающие документы и акты' },
    { id: 2, name: 'Настройка объекта' },
    { id: 3, name: 'Другой вопрос' },
  ])
  const onChangeMultipleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles([])
    const files: FileList | null = e.target.files
    if (files && files?.length <= 5) {
      Object.keys(files).forEach((i) => {
        //@ts-ignore
        const file: File = files[i]
        if (file.size <= 5242880) {
          const reader = new FileReader()
          //@ts-ignore
          reader.onload = (e) => setFiles([...files, reader.result])
          reader.readAsDataURL(file)
        }
      })
    }
  }
  return (
    <section className={styles.root}>
      <div className={styles.root__header}>Обращения в службу поддержки</div>
      <div className={styles.root__before_link}>
        <Link to="/support">
          <ButtonBefore text="Назад" />
        </Link>
      </div>
      <div className={styles.root__form_appeal}>
        <div className={styles.root__form_appeal__select_wrapper}>
          <div className={styles.root__form_appeal__select_wrapper__header}>
            Выберите тему обращения
          </div>
          <div className={styles.root__form_appeal__select_wrapper__input}>
            <NativeSelect
              name="appealTheme"
              data={selectAppealsData}
              placeholder="Тема обращения"
              value={selectedThemeAppeal}
              onChange={(event) => setSelectedThemeAppeal(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.root__form_appeal__textarea_wrapper}>
          <div className={styles.root__form_appeal__textarea_wrapper__header}>
            Ваш вопрос
          </div>
          <div className={styles.root__form_appeal__textarea_wrapper__input}>
            <InputTextArea
              placeholder="Пожалуйста, уточните вопрос. Чем больше мы знаем о ситуации, тем быстрее решим её"
              name="question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.root__form_file_appeal}>
        <label className={styles.root__form_file_appeal__label}>
          <div className={styles.root__form_file_appeal__label__load_text}>
            Загрузить файл
          </div>
          <input type="file" multiple={true} onChange={onChangeMultipleFiles} />
          <div className={styles.root__form_file_appeal__label__helper_text}>
            До 5 файлов размером до 5,0 МБ каждый
          </div>
        </label>
      </div>
      <div className={styles.root__submit_form}>
        <ButtonBase disabled={false} text="Отправить" />
      </div>
    </section>
  )
})
