import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './EmailRow.css'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMail } from '../../../features/mailSlice'

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const openMail = () => {
    dispatch(selectMail({ id, title, subject, description, time }))
    history.push('/mail')
  }
  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__option">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h4 className="emailRow__title">{title} </h4>
      <div className="emailRow__msg">
        <h4>
          {subject} -
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <div className="emailRow__time">{time}</div>
    </div>
  )
}

export default EmailRow
