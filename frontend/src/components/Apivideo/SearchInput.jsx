import React,{useState}from 'react'
import {useSetRecoilState} from 'recoil'
import {qyAtom, LvideosAtom} from '../../store/atoms.js'
function SearchInput() {
    //global components
    const setQy = useSetRecoilState(qyAtom);
    const setLvideos = useSetRecoilState(LvideosAtom);
    //local components
    const [Localqy,setLQy] = useState("");
    const [LocalLvideos,setLLvideos] = useState("");
    
    const handleChange = (e)=>{
      e.preventDefault();
        if(e.target.name == "qy"){
            setLQy(e.target.value);
        }
        if(e.target.name == "Lvideos"){
            setLLvideos(e.target.value);
        }
    }

    const handleSearch = (e)=>{
      e.preventDefault();
        setQy(Localqy);
        setLvideos(LocalLvideos-1);
    }

  return (<>
    <div className='w-full flex gap-2 border-2 rounded-sm justify-center items-center' >
      <input name="qy" type="text" value={Localqy} onChange={(e)=>{handleChange(e)}} className="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder='taxes, Budget ...'/>
      <input name="Lvideos" type="number" value={LocalLvideos} onChange={(e)=>{handleChange(e)}} className="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    <button type="button" onClick={handleSearch} className="text-gray-900 cursor-pointer bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Seacrh</button>
    </div>

</>
  )
}

export default SearchInput
