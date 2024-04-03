import React, { useEffect, useState } from 'react'
import data from '../Books'

export default function useFetch() {
  const [books, setbooks] = useState([])

  useEffect(() => {
    setbooks(data)
  }, [])

  return { books }
}
