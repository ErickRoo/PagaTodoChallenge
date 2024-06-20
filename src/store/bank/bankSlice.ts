import { SimpleBank } from '@/interfaces/bank';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface BanksState {
  banks: SimpleBank[];
}

const getInitialState = ():BanksState => {
  if (typeof localStorage === "undefined") return {banks: []};
  const bankState = JSON.parse(localStorage.getItem('bank-list') ?? '{}')

  return bankState
}

const initialState: BanksState = {
  ...getInitialState(),
}

const bankSlice = createSlice({
  name: 'banks',
  initialState,
  reducers: {
    initBanksState(state, action: PayloadAction<SimpleBank[]>) {
      state.banks = action.payload
    },
    deleteBank(state, action: PayloadAction<SimpleBank>) {
      const {_id} = action.payload

      state.banks = state.banks.filter((bank) => {
        if(bank._id != _id) return true
      })

      localStorage.setItem(
        "bank-list",
        JSON.stringify(state)
      )
    },
    sortBanks(state) {

      state.banks = state.banks.sort((a, b) => {
        const nameA = a.bankName.toUpperCase();
        const nameB = b.bankName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      })
    }
  }
});

export const {initBanksState, deleteBank, sortBanks} = bankSlice.actions

export default bankSlice.reducer