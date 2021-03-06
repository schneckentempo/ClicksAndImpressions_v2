import React from 'react'
import HeaderText from './HeaderText'
import DimensionValueSelect from './DimensionValueSelect'
import DimensionValueChooser from './DimensionValueChooser'

export default function SumNumbersForDimensionValue({
  header,
  value,
  dimensionValues,
  onChange,
}) {
  return (
    <div>
      <HeaderText text={header} />
      <DimensionValueSelect value={value} options={dimensionValues} onChange={onChange} />
      <DimensionValueChooser value={value} options={dimensionValues} onChange={onChange} />
    </div>
  )
}

SumNumbersForDimensionValue.propTypes = {
  header: React.PropTypes.string,
  value: React.PropTypes.string,
  dimensionValues: React.PropTypes.arrayOf(React.PropTypes.object),
  onChange: React.PropTypes.func,
}
