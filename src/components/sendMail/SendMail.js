import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'

import { useDispatch } from 'react-redux'
import { closeSendMsg } from '../../features/mailSlice'
import { db } from '../../firebase'
import firebase from 'firebase'
const SendMail = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    wathch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    db.collection('emails').add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    dispatch(closeSendMsg())
  }
  return (
    <div className="sendMail">
      <div className="senMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMsg())}
        />
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register('to', { required: true })}
        />
        {errors.to && <p className="sendMail__error"> To is Required </p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error"> Subject is Required </p>
        )}
        <input
          name="message"
          placeholder="Message"
          type="text"
          className="sendMail__msg"
          {...register('message', { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error"> Message is Required </p>
        )}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
