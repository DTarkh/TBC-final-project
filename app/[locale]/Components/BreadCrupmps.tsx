import { IoHomeOutline } from "react-icons/io5";

const BreadCrupmps = () => {
  return (
    <div className="breadcrumbs text-sm px-[10%] max-lg:px-[2%] w-full">
  <ul>
    <li><a><IoHomeOutline /></a></li>
    <li><a>Documents</a></li>
    <li>Add Document</li>
  </ul>
</div>
  )
}

export default BreadCrupmps