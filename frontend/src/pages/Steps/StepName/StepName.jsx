import React from "react"
import styles from "./StepName.module.css"
import Card from "../../../components/shared/Card/Card"
import Button from "../../../components/shared/Button/Button"
import TextInput from "../../../components/shared/TextInput/TextInput"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setName, setname } from "../../../Store/activateSlice"

const StepName = ({ onNext }) => {
  const { name } = useSelector((state) => state.activate)
  const dispatch = useDispatch()
  const [fullname, setFullname] = useState(name)

  function nextStep() {
    if (!fullname) {
      return
    }
    dispatch(setName(fullname))
    onNext()
  }
  return (
    <>
      <Card title="What's your full name ? " icon="goggle-emoji">
        <TextInput
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <p className={styles.paragraph}>
          People use real names at Podhouse :)!
        </p>
        <div>
          <Button onClick={nextStep} text="Next" />
        </div>
      </Card>
    </>
  )
}

export default StepName
