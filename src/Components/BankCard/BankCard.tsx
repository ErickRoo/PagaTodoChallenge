import Link from "next/link"
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { SimpleBank } from "@/interfaces/bank";
import styles from './BankCard.module.css'
import { useAppDispatch } from "@/store";
import { deleteBank } from "@/store/bank/bankSlice";

interface Props {
  bank: SimpleBank;
}

export const BankCard = ({ bank }: Props) => {
  const {age, bankName, description, url} = bank;
  const dispatch = useAppDispatch()

  return (
    <div className={styles.rootCard}>
      <div className={styles.contentCard}>
        <div className={styles.infoCard}>
          <Image 
            src={url}
            width={100}
            height={100}
            alt={ bankName }
            priority={ false }
          />
          <p className={styles.bankName}>{ bankName }</p>
          <p className={styles.bankAge}>{age} años contigo</p>
          <div className={styles.bankDescription}>
            {description}
          </div>
        </div>

        <button onClick={() => dispatch(deleteBank(bank))} className={styles.bankButton}>DELETE</button>
    </div>
  </div>
  )
}
