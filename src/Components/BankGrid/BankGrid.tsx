"use client";
import { SimpleBank } from "@/interfaces/bank";
import { BankCard } from "../BankCard/BankCard";
import styles from "./BankGrid.module.css";
import { useAppDispatch, useAppSelector } from "@/store";
import { initBanksState, sortBanks } from "@/store/bank/bankSlice";

interface Props {
  getBanks: SimpleBank[];
}

export const BankGrid = ({ getBanks }: Props) => {
  const dispatch = useAppDispatch();
  const { banks } = useAppSelector((state) => state.banks);

  const handleGetBanks = () => {
    dispatch(initBanksState(getBanks));
  };

  const handleSortBanks = () => {
    dispatch(sortBanks())
  }
  
  return (
    <>
      <div className={styles.buttonsGridBank}>
        {banks && (
          <button className={styles.getBankButton} onClick={handleGetBanks}>
            GET Banks
          </button>
        )}

        <button className={styles.sortBankButton} onClick={handleSortBanks}>
          SORT by Name
        </button>
      </div>
      <div className={styles.bankGrid}>
        {banks && banks.map((bank) => (
          <BankCard key={bank.bankName} bank={bank} />
        ))}
      </div>
    </>
  );
};
