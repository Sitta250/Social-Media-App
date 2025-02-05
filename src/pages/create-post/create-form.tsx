import{useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {addDoc,collection} from 'firebase/firestore'
import {auth, db} from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'



interface CreateFormData {
  title:string
  description:string
}

export const CreatForm =()=>{

  const [user]= useAuthState(auth)
  const schema = yup.object().shape({
    title: yup.string().required('Title is required!'),
    description: yup.string().required('Description is required!'),


  })

  const {register, handleSubmit, reset, formState:{errors}} = useForm<CreateFormData>({
    resolver: yupResolver(schema)
  })

  const postsRef = collection(db, 'posts')

  const onCreatePost= async(data:CreateFormData)=>{
    try{
    await addDoc(postsRef,{
      ...data,
      username: user?.displayName,
      userId:user?.uid,
    })
    reset()
    alert('NEW POST CREATED')
  } catch(err){
    console.error('error: ', err)
  }
  }
  return(
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder='title...'{...register('title')}/>
      <p style={{color:'red'}}>{errors.title?.message}</p>
      <textarea placeholder='description...'{...register('description')}/>
      <p  style={{color:'red'}}>{errors.description?.message}</p>
      <input type='submit'/>
    </form>
  )
}