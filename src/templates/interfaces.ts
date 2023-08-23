export interface IPropsDrowDown {
  label?: string
  open: boolean
  handleToggleOpen: () => void
}
export interface IPropsDrowDownFilter {
  label: string
  open?: boolean
  handleToggleOpen: (event: any) => void
}
export interface IPropsDrowDownMenu {
  open: boolean
  handleToggleOpen: () => void
  menuList: { label: string; type: string }[]
  onClickMenuItem: (type: string) => void
}
