import * as React from 'react'
//styles
import styles from './style.module.scss'
//components
import { ObjectStatus } from 'templates/Object/ObjectStatus'
import { ObjectsTable } from 'templates/Object/ObjectsTable'
import { DropDownFilter } from 'templates/DropDown'
import clsx from 'clsx'
import { data as defaultData } from './data'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { styled  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';

interface IFilteres {
  [key: string]: boolean
  guarded: boolean
  list: boolean
  disarm: boolean
  inactive: boolean
  block: boolean
}
const MyButton = styled(Button) ({
  borderRadius: 10,
  width: 150,
  height: 40,
  fontSize: 15,
  fontWeight: 500,
  textTransform: 'none',
  borderColor: '#CED2DC',
  border: 'solid 1px',
  marginRight: 10,
})


export const MainPageContainer = React.memo(({}) => {
  const [data, setData] = React.useState<any[]>([])

  const [filters, setFilters] = React.useState<IFilteres>({
    guarded: false,
    list: false,
    disarm: false,
    inactive: false,
    block: true,
  })

  const [protectionFilter, setProtectionFilter] = React.useState<null | HTMLElement>(null);
  const [protectionFilters, setProtectionFilters] = React.useState<null | HTMLElement>(null);
  const open = Boolean(protectionFilter);
  const opens = Boolean(protectionFilters);

  const handleClicks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProtectionFilters(event.currentTarget);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProtectionFilter(event.currentTarget);
  };
  const handleCloses = () => {
    setProtectionFilters(null);
  };
  const handleClose = () => {
    setProtectionFilter(null);
  };

  const handleChange = (name: string) => (event: any) => {
    const _filters = { ...filters }
    let result: { [key: string]: boolean } = {}
    for (const key in _filters) {
      if (key === name) {
        result[key] = !_filters[key]
      } else {
        result[key] = _filters[key]
      }
    }
    //@ts-ignore
    setFilters(result)
  }
  //currentObject
  const [currentObject, setCurrentObject] = React.useState(null)
  //effects
  React.useEffect(() => {
    setData(defaultData) // defaultData where from props / redux / any state
  }, [])
  React.useEffect(() => {
    if (filters.disarm) {
      const filtered = defaultData.filter((d) => d.status.id === 3)
      setData(filtered)
    } else setData(defaultData)
  }, [filters.disarm])
  React.useEffect(() => {
    if (filters.guarded) {
      const filtered = defaultData.filter((d) => d.status.id === 2)
      setData(filtered)
    } else setData(defaultData)
  }, [filters.guarded])
  React.useEffect(() => {
    if (filters.inactive) {
      const filtered = defaultData.filter((d) => d.status.id === 4)
      setData(filtered)
    } else setData(defaultData)
  }, [filters.inactive])


  return (
    <section className={styles.root}>
      <div className={styles.root__header_container}>
        <div className={styles.root__header_container__wrapper}>
          <div className={styles.root__header_container__wrapper__name}>
            Добро пожаловать, Иван Иванов
          </div>
          <div className={styles.root__header_container__wrapper__context}>
            Здесь вы можете управлять своей учетной записью и охраняемыми
            объектами
          </div>
        </div>
      </div>
      <div className={styles.create_object_wrapper}>
        <Typography  className={styles.create_object_wrapper__add_btn} color="textSecondary">
          У вас N объект (-ов)
        </Typography>
        <div className={styles.create_object_wrapper__filters}>
          <div>
            <MyButton className={styles.menuList} aria-controls="basic-menu" aria-haspopup="true" onClick={handleClick}>
              Все объекты
            </MyButton>
            <Menu
              id="basic-menu"
              anchorEl={protectionFilter}
              open={open}
              onClose={handleClose}
              variant='selectedMenu'
              MenuListProps={{
              'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}> 
                <DropDownFilter

                  label={'Под охраной'}
                  open={filters.guarded}
                  handleToggleOpen={handleChange('guarded')}
                />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <DropDownFilter
                  label={'Снят с охраны'}
                  open={filters.disarm}
                  handleToggleOpen={handleChange('disarm')}
                />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <DropDownFilter
                  label={'Неактивен'}
                  open={filters.inactive}
                  handleToggleOpen={handleChange('inactive')}
                />
              </MenuItem>
            </Menu>

          </div>
          <div>
            <MyButton className={styles.menuList_obj} aria-controls="basic-obj" aria-haspopup="true" onClick={handleClicks}>
              Показать
            </MyButton>
            <Menu
              id="basic-obj"
              anchorEl={protectionFilters}
              open={opens}
              onClose={handleCloses}
              variant='selectedMenu'
              MenuListProps={{
              'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleCloses}> 
                <DropDownFilter
                  label={'Списком'}
                  open={filters.list}
                  handleToggleOpen={handleChange('list')}
                />
              </MenuItem>
              <MenuItem onClick={handleCloses}>
                <DropDownFilter
                  label={'Блоками'}
                  open={filters.block}
                  handleToggleOpen={handleChange('block')}
                />
              </MenuItem>
            </Menu>

          </div>
        </div>
      </div>
      <section className={clsx(styles.Rtable)}>
        {filters.block &&
          data &&
          Array.isArray(data) &&
          data.map((d, index) => {
            return (
              <div key={index}>
                <ObjectStatus currentObject={d} />
              </div>
            )
          })}
      </section>

      {filters.list && (
        <ObjectsTable
          data={data}
          setCurrentObject={(data) => setCurrentObject(data)}
        />
      )}
      <div className={styles.root__active_objects}>Нет активных объектов</div>
    </section>
  )
})
