import React from "react";
// import clsx from 'clsx'
// import styles from './style.module.scss'
import { styled  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const MyButton = styled(Button) ({
    borderRadius: 10,
    width: 175,
    height: 42,
    fontSize: 15,
    fontWeight: 500,
    textTransform: 'none',
    borderColor: '#CED2DC',
    border: 'solid 1px',
    marginRight: 10,
    marginLeft: 10,
    color: '#212529',
    marginBottom: 10,
})

interface IButtonBase {
    active?: boolean
    disabled?: boolean
    onClick?: () => void
}
  interface IDefaultButton extends IButtonBase {
    text: string
    size?: string
}
export const ButtonNew: React.FC<IDefaultButton> = React.memo(
    ({ text, disabled, onClick }) => {
    //   const buttonBaseClass = clsx({ [styles.blue]: color === 'blue' || !color })
      return (
        <MyButton onClick={onClick} disabled={disabled}>
          {text}
        </MyButton>
      )
    }
)