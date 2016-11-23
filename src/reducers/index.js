import { PROCESS_DATA_REQUEST, CHANGE_MAPPING, CHANGE_SELECTED_DIMENSIONVALUE } from '../constants/ActionTypes'
import { DATA_SOURCE_1 } from '../constants/DataSources'

const initialState = {
  defaultDataSource: DATA_SOURCE_1,
  mapping: {},
  csvData: '',
  badRequest: false,
  selectedDimensionValue: '',
}

const dimensionMetricsViewerApp = (state = initialState, action) => {
  switch (action.type) {
    case PROCESS_DATA_REQUEST: {
      const { csvData, badRequest } = action
      return {
        ...state,
        csvData,
        badRequest,
      }
    }
    case CHANGE_MAPPING: {
      const { mapping } = action
      return {
        ...state,
        mapping,
      }
    }
    case CHANGE_SELECTED_DIMENSIONVALUE: {
      const { selectedDimensionValue } = action
      return {
        ...state,
        selectedDimensionValue,
      }
    }
    default:
      return state
  }
}

export default dimensionMetricsViewerApp