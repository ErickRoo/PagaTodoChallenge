import { Sidebar } from "@/Components";
import styles from "./layout.module.css"

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className={styles.root}>
      <div className={styles.dashboard}>

        <Sidebar/>

        <div className={styles.content}>
          { children }
        </div>

      </div>
    </div>
  );
}