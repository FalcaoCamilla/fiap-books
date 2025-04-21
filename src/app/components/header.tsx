import { AccountCircle, Menu } from "@mui/icons-material";

export default function Header() {
  return (
    <div className="flex justify-between items-center absolute top-0 w-[100vw] bg-black-900 border-b-pink-900 border-b min-h-24">
      <Menu className="ml-[10px] text-pink-900" style={{ fontSize: 48 }}/>
      <AccountCircle className="mr-[10px] text-pink-900" style={{ fontSize: 48 }}/>
    </div>
  )
}