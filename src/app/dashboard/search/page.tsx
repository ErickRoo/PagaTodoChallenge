'use client'

import { useAppSelector } from "@/store";
import { useMemo, useState } from "react";

const SearchPage = () => {
  const [search, setSearch] = useState('')
  const { banks } = useAppSelector((state) => state.banks);
  const filteredBank = useMemo(() => (
    banks.filter( bank => bank.bankName.startsWith(search))
  ), [banks, search])

  const handleSearchName = (e: any) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleSearchName}/>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchPage;