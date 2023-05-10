import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'
import { createCompaniesType } from "../validationSchema/createCompanies"

export const createCompanies = createAsyncThunk("companies/create", async (data: createCompaniesType, thunkApi) => {

  try {
    const res = await fetch("/api/hubspot/create", {
      method: "POST",
      mode: "no-cors",
      // @ts-ignore
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if(res.status !== 201){
      throw("failed")
    }
    return res
  } catch (error) {
    return error
  }
})

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  newsletter: true,
  website: "",
  company: "",
  role: "",
  haveNewsletter: true,
  subscribers: null,
  audience: "",
  ableToInvest: true,
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  meeting: {
    date: new Date(),
    hour: "03:00"
  },
  active: 0,
  error: "",
  loading: false,
}

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    nextStep: (state) => {state.active++},
    handleField: (state: any, { payload }) => {
      return({ ...state, ...payload })
    }
  },
  extraReducers: (builder) =>{
    builder
      .addCase(createCompanies.pending, (state) => {
          state.loading = true
          state.error = ""
      })
      .addCase(createCompanies.fulfilled, (state, action) => {
          state.loading = false
          // @ts-ignore
          action.payload.ok && state.active++
      })
      .addCase(createCompanies.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message!
      })
  }
})

// Action creators are generated for each case reducer function
export const { nextStep, handleField } = companiesSlice.actions

export default companiesSlice.reducer

// global state
export const selectState = (state: RootState) => state
