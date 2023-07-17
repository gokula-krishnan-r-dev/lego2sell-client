import React, { useEffect, useState } from "react"
import Adminorder from "../componet/Adminorder"

const Admin = () => {
  const [data, setData] = useState()
  const fetchInfo = () => {
    return fetch("https://long-tan-chicken-hem.cyclic.app/GetOrder")
      .then((res) => res.json())
      .then((d) => setData(d.data))
  }
  console.log(data)
  useEffect(() => {
    fetchInfo()
  }, [])
  return (
    <div className="">
      <div className="px-44 py-4 my-6">
        {data?.map((value) => (
          <Adminorder data={value.Mydetails} items={value} />
        ))}
      </div>
    </div>
  )
}

export default Admin
