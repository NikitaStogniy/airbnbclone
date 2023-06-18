'use client';

import axios from 'axios';
import { signIn } from 'next-auth/react'
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react';
import {
	FieldValues,
	SubmitHandler,
	useForm
} from 'react-hook-form'

import useLoginModal from '@/app/hooks/useLoginModal';
import Modal from './Modal';
import Heading from './Heading';
import Input from '../Inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button/Button';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
	const router = useRouter()
	const loginModal = useLoginModal()
	const RegisterModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false)

	const{
		register,
		handleSubmit,
		formState: {
			errors,
		}
	} = useForm<FieldValues>({
		defaultValues:{
			email: '',
			password:''
		}
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) =>{
		setIsLoading(true);

		signIn('credentials', {
			...data,
			redirect: false
		})
		.then((callback)=>{
			setIsLoading(false);

			if(callback?.ok){
				toast.success('Logged in')
				router.refresh();
				loginModal.onClose();
			}

			if(callback?.error){
				toast.error(callback.error);
			}
		})
	}

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading title='Welcome back' subtitle='Login to your accont'/>
			<Input
			id='email'
			label='Email'
			disabled={isLoading}
			register={register}
			errors={errors}
			required
			/>
			<Input
			id='password'
			label='Password'
			disabled={isLoading}
			register={register}
			errors={errors}
			required
			/>
		</div>
	)

	const footerContent = (
		<div className='flex flex-col gap-4 mt-3'>
			<hr/>
			<Button outline label="Continue with Google" icon={FcGoogle} onClick={()=>{}}/>
			<Button outline label="Continue with Github" icon={AiFillGithub} onClick={()=>signIn('github')}/>
			<div className='text-neutral-500 text-center mt-4 font-light'>
				<div className='flex flex-row justify-center items-center gap-2'>
					<div>
						Already have an account?
					</div>
					<div onClick={loginModal.onClose} className='text-neutral-800 cursor-pointer hover:underline'>
						Log in
					</div>
				</div>
			</div>
		</div>
	)

	return ( <Modal footer={footerContent} disabled={isLoading} body={bodyContent} isOpen={loginModal.isOpen} title='Login' actionLabel='Continue' onClose={loginModal.onClose} onSubmit={handleSubmit(onSubmit)}/> );
}
 
export default LoginModal;