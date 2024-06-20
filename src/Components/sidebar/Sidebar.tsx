import { IoLogoReact, IoSearch } from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem'
import { CiBank } from 'react-icons/ci'
import { FaSort } from 'react-icons/fa'
import styles from "./Sidebar.module.css"

const menuItems = [
  {
    path: '/dashboard/banks',
    icon: <CiBank size={40}/>,
    title: "Banks",
    subtitle: "List of banks",
  },
  {
    path: '/dashboard/search',
    icon: <IoSearch size={40}/>,
    title: "Search",
    subtitle: "Search by name",
  },
]

export const Sidebar = () => {
  return (
    <div id="menu" className={styles.sidebarContainer}>
      
      <div id="logo" className={styles.logo}>
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          <span>PagaTodo</span>
          <span className={"text-blue-500"}> Challenge</span></h1>
        <p className="text-slate-500 text-sm">Handle banks app</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Created by </p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span className="text-sm md:text-base font-bold">
            Erick Rodriguez
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">

        {
          menuItems.map((menuItem) => <SidebarMenuItem key={menuItem.path} {...menuItem}/>)
        }

      </div>
    </div>
  )
}
