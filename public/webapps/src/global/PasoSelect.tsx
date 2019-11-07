import { PureComponent, SyntheticEvent, createContext } from 'react'
import cx from 'classnames'

declare var app: any

type HojaTrabajoTreeItem = {
  id: string
  descripcion: string
  type: string
  code?: string
  items?: HojaTrabajoTreeItem[]
}

type PasoSelectContextType = {
  selectedIds: string[]
  updateSelectedIds: (selectedIds: string[]) => void
}

const PasoSelectContext = createContext<PasoSelectContextType>({ selectedIds: [], updateSelectedIds: () => {} })

type PasoSelectProps = {
  selectedIds?: string[]
  onChange?: (selectedIds: string[]) => void
}

type PasoSelectState = {
  tree: HojaTrabajoTreeItem[]
  selectedIds: string[]
}

export class PasoSelect extends PureComponent<PasoSelectProps, PasoSelectState> {
  static MasterDataTree: HojaTrabajoTreeItem[] = null

  state: PasoSelectState = {
    tree: null,
    selectedIds: []
  }

  componentDidMount() {
    if (PasoSelect.MasterDataTree == null && app.vars.masterdatatree) {
      PasoSelect.MasterDataTree = parseTreeToItems(app.vars.masterdatatree)
    }

    if (PasoSelect.MasterDataTree == null) {
      $.getJSON(url_for(`proyecto/${app.vars.idproyecto}/master_data_tree`), {
        export_options: { type: 'pasolink' }
      }).done((res) => {
        PasoSelect.MasterDataTree = app.vars.masterdatatree = parseTreeToItems(res.response)
        this.setState({ tree: PasoSelect.MasterDataTree })
      })
    } else {
      this.setState({ tree: PasoSelect.MasterDataTree })
    }

    if (this.props.selectedIds) {
      this.setState({ selectedIds: this.props.selectedIds })
    }
  }

  updateSelectedIds = (selectedIds: string[]) => {
    this.setState({ selectedIds })

    if ($.isFunction(this.props.onChange)) {
      this.props.onChange(selectedIds)
    }
  }

  render() {
    if (this.state.tree === null) {
      return (
        <div className='ui segment' style={{ minHeight: 120 }}>
          <div className='ui active transition inverted dimmer'>
            <div className='content'>
              <div className='ui active inverted text loader'>Cargando pasos...</div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className=''>
        <PasoSelectContext.Provider
          value={{ selectedIds: this.state.selectedIds, updateSelectedIds: this.updateSelectedIds }}
        >
          <ul className='methodology checkbox-list methodology-all unstyled nav nav-stacked'>
            {_.map(this.state.tree, (fase) => {
              return <TreeItemFase key={fase.id} item={fase} />
            })}
          </ul>
        </PasoSelectContext.Provider>
      </div>
    )
  }
}

class TreeItemFase extends PureComponent<{ item: HojaTrabajoTreeItem }, { collapsed: boolean }> {
  state = {
    collapsed: true
  }

  onClick = (ev: SyntheticEvent) => {
    ev.preventDefault()
    this.setState((prevState) => {
      return { collapsed: !prevState.collapsed }
    })
  }

  render() {
    const { item } = this.props
    const { collapsed } = this.state

    return (
      <li className={cx('methodology-item', item.type)}>
        <div className='methodology-item-head'>
          <a href='#' onClick={this.onClick}>
            <span className='item-name'>{item.descripcion}</span>
          </a>
        </div>
        <ul className={cx('methodology unstyled collapse', collapsed ? 'hide' : 'in')}>
          {_.map(item.items as any[], (subitem: HojaTrabajoTreeItem) => {
            return subitem.type == 'paso' ? (
              <TreeItemPaso key={subitem.id} item={subitem} />
            ) : (
              <TreeItemFase item={subitem} key={subitem.id} />
            )
          })}
        </ul>
      </li>
    )
  }
}

class TreeItemPaso extends PureComponent<{ item: HojaTrabajoTreeItem }, { collapsed: boolean }> {
  static contextType = PasoSelectContext

  onChangeCheckbox = (ev: SyntheticEvent) => {
    const { item } = this.props
    let { selectedIds, updateSelectedIds } = this.context

    if (selectedIds.includes(item.id)) {
      selectedIds = _.difference(selectedIds, [ item.id ])
    } else {
      selectedIds = _.union(selectedIds, [ item.id ])
    }
    updateSelectedIds(selectedIds)
  }

  render() {
    const { item } = this.props
    const { selectedIds } = this.context

    return (
      <li key={item.id} className='methodology-item paso'>
        <div className='methodology-item-head'>
          <label htmlFor={`paso-select-tree-paso-${item.id}`}>
            <input
              type='checkbox'
              className='checkbox pull-right'
              id={`paso-select-tree-paso-${item.id}`}
              checked={selectedIds.includes(item.id)}
              onChange={this.onChangeCheckbox}
            />
            <span className='item-name'>{item.descripcion}</span>
          </label>
        </div>
      </li>
    )
  }
}

const parseTreeToItems = (tree: any[]) => {
  const retval = _.map(tree, (fase): HojaTrabajoTreeItem => {
    return {
      id: fase.id,
      descripcion: fase.descripcion,
      type: 'phase',
      items: _.map(fase.Subfases, (subfase: any): HojaTrabajoTreeItem => {
        return {
          id: subfase.id,
          descripcion: subfase.descripcion,
          type: 'subphase',
          items: _.map(subfase.Pasos, (paso: any): HojaTrabajoTreeItem => {
            return {
              id: paso.id,
              descripcion: paso.descripcion,
              code: paso.code,
              type: 'paso'
            }
          })
        }
      })
    }
  })

  return retval
}
