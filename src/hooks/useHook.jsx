import { useState } from "react"

const useHook = () => {
  const [provinces] = useState([{
    id: 1,
    province: "DKI Jakarta",
    cities: ["Jakarta Pusat", "Jakarta Selatan", "Jakarta Utara", "Jakarta Timur", "Jakarta Barat"]
    }, {
      id: 2,
      province: "Jawa Barat",
      cities: ["Bandung", "Bekasi", "Cirebon", "Sukabumi", "Bogor"]
    }

    ])

  return provinces
}

export default useHook