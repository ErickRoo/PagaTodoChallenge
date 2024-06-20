import { SimpleBank } from "@/interfaces/bank";
import { BankResponse } from "@/interfaces/bank-response";
import { BankCard } from '../../../Components/BankCard/BankCard';
import styles from './BanksPage.module.css'
import { BankGrid } from "@/Components/BankGrid/BankGrid";

export const metadata = {
 title: 'List of banks',
 description: 'Play with the Bank Cards',
};

const getBanks = async (): Promise<SimpleBank[]> => {
  const data: BankResponse = await fetch("https://dev.obtenmas.com/catom/api/challenge/banks")
    .then(res => res.json());
  
  const banks = data.map((bank, idx) => ({
    ...bank,
    _id: `${idx+1}`,
  }))
  
  return banks
}


export default async function BanksPage() {
  const banks = await getBanks()

  return (
    <div className={styles.rootBankPage}>
      <span className={styles.titleBankPage}>Bank List <strong>DYNAMIC</strong></span>

      <BankGrid getBanks={banks}/>
    </div>
  );
}