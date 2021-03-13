import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/reusable'


const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-muted">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-muted">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

const Colors = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Temos spalvos
          <DocsLink href="https://coreui.io/docs/utilities/colors/" />
        </CCardHeader>
        <CCardBody>
          <CRow>
            <ThemeColor className="bg-primary">
              <h6>Prekės ženklo spalva "Primary"</h6>
            </ThemeColor>
            <ThemeColor className="bg-secondary">
              <h6>Prekės ženklo spalva "Secondary"</h6>
            </ThemeColor>
            <ThemeColor className="bg-success">
              <h6>Prekės ženklo spalva "Success"</h6>
            </ThemeColor>
            <ThemeColor className="bg-danger">
              <h6>Prekės ženklo spalva "Danger"</h6>
            </ThemeColor>
            <ThemeColor className="bg-warning">
              <h6>Prekės ženklo spalva "Warning"</h6>
            </ThemeColor>
            <ThemeColor className="bg-info">
              <h6>Prekės ženklo spalva "Info"</h6>
            </ThemeColor>
            <ThemeColor className="bg-light">
              <h6>Prekės ženklo spalva "Light"</h6>
            </ThemeColor>
            <ThemeColor className="bg-dark">
              <h6>Prekės ženklo spalva "Dark"</h6>
            </ThemeColor>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Pilkos
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
            <ThemeColor className="bg-gray-100">
              <h6>Pilka 100 Spalva</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-200">
              <h6>Pilka 200 Spalva</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-300">
              <h6>Pilka 300 Spalva</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-400">
              <h6>Pilka 400 Spalva</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-500">
              <h6>Pilka 500 Spalva</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-600">
              <h6>Pilka 600 Spalva</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-700">
              <h6>Pilka 700 Spalva</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-800">
              <h6>Pilka 800 Spalva</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-900">
              <h6>Pilka 900 Spalva</h6>
            </ThemeColor>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Colors
