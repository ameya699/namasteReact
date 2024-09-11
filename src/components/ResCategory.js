import ItemList from './ItemList'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";


const ResCategory = ({data,showItems,setShowIndex}) => {

  const handleClick=()=>{
    setShowIndex()
  }
  
  return (
    <div>
            <div className='w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4'>
                <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span className='font-bold text-lg'>
                    {data.title} ({data.itemCards.length})
                </span>
                <span className='flex items-center'>{showItems? <FaAngleUp/>:<FaAngleDown/>}</span>
            </div>
       {showItems && <ItemList items={data.itemCards}/>}
            </div>
    </div>
  )
}

export default ResCategory