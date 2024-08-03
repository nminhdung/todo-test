import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [tab, setTab] = useState('all')
  const [show, setShow] = useState(false)
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent]);
  const reveal = () => setShow(!show);

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm" ref={parent}>
        <h1 className="text-center text-4xl font-extrabold text-gray-900 cursor-pointer" onClick={reveal}>
          Todo App
        </h1>
        {show && <>
          <div className='flex items-center gap-2 mt-10'>
            <button className={`py-3 px-6  border-[1px]
            ${tab === 'all' ? 'bg-[#334155]  text-white' : "bg-white text-black"} text-[14px] leading-[20px] font-bold rounded-full capitalize`}
              onClick={() => {
                setTab('all')
              }}
            >
              All
            </button>
            <button className={`py-3 px-6  border-[1px]
            ${tab === 'pending' ? 'bg-[#334155]  text-white' : "bg-white text-black"} text-[14px] leading-[20px] font-bold rounded-full capitalize`}
              onClick={() => {
                setTab('pending')
              }}
            >
              Pending
            </button>
            <button className={`py-3 px-6  border-[1px]
            ${tab === 'completed' ? 'bg-[#334155]  text-white' : "bg-white text-black"} text-[14px] leading-[20px] font-bold rounded-full capitalize`}
              onClick={() => {
                setTab('completed')
              }}
            >
              Completed
            </button>
          </div>
          <div className="pt-10">
            <TodoList  tabFilter={tab}/>
          </div>
          <div className="pt-10">
            <CreateTodoForm />
          </div>
        </>}

      </div>
    </main>
  )
}

export default Index
