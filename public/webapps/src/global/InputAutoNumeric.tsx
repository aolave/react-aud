import ReactNumeric from 'react-numeric'
import AutoNumeric from 'autonumeric'

const defaultProps = {
  decimalPlaces: 2,
  decimalCharacter: ',',
  decimalCharacterAlternative: '.',
  digitGroupSeparator: '.',
  allowDecimalPadding: false,
  selectOnFocus: false
}

export default function InputAutoNumeric(props: any) {
  props = Object.assign({}, props, defaultProps)

  if (typeof props.value != 'undefined' && _.size(props.value) > 0) {
    props.value = +props.value
  }

  if (typeof props.isEditable == 'undefined' || props.isEditable) {
    return <ReactNumeric {...props} />
  } else {
    return <span className='autonumeric non-editable value'>{AutoNumeric.format(props.value, props)}</span>
  }
}
