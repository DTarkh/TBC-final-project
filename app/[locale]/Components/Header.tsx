import { ReactNode } from "react"



interface Props{
    children: ReactNode
}

const Header = ({children}: Props) => {
  return (
    <div className="w-full px-[10%] max-lg:px-[2%] py-5">
        <h1 className="text-3xl font-semibold text-[#14213D] dark:text-[#E5E5E5] tracking-wide">{children}</h1>
    </div>
  )
}

export default Header