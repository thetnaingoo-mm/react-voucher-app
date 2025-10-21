import React from 'react'
import Container from '../components/Container'
import ModuleBtn from '../components/ModuleBtn'
import { HiCircleStack, HiComputerDesktop, HiDocumentDuplicate,  } from "react-icons/hi2";

const DashboardPage = () => {
  return (
    <section>
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className=" col-span-1">
              <ModuleBtn name={"Product Module"} url={'/products'} icon={<HiCircleStack className=' size-10' />}/>
          </div>
           <div className=" col-span-1">
              <ModuleBtn name={"Sale Module"} url={'/sale'} icon={<HiComputerDesktop className=' size-10' />}/>
          </div>
           <div className=" col-span-1">
              <ModuleBtn name={"Voucher Module"} url={'/voucher'} icon={<HiDocumentDuplicate className=' size-10' />}/>
          </div>
        </div>
      </Container>
    </section>
)}

export default DashboardPage