import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  allRegion : [],
  allMonth : [],
  allType : [],
  selectedRegion : '',
  selectedMonth : '',
  selectedType : '',
  selectedRegionData: null,
  countriesDetails : []
}

export const filterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setAllRegion : (state , action)=>{
      state.allRegion = action.payload
    },
    setCountriesDetails : (state , action)=>{
      state.countriesDetails = action.payload
    },
    filterChartData: (state, action) => {
      const selectedCountry = action.payload;
      state.selectedRegion = selectedCountry;
      state.selectedRegionData = state.allRegion.find(item => item.country === selectedCountry);
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , setAllRegion , filterChartData , setCountriesDetails} = filterSlice.actions

export default filterSlice.reducer