'use client';

import React, { useActionState } from 'react';
import Form from 'next/form';
import { Loader2 } from 'lucide-react';

const initialState = {
    message: '',
};

type SignInProps = {
    action: (prevState: any, formData: FormData) => Promise<{ message: string } | undefined>;
};

const SignIn = ({ action }: SignInProps) => {
    const [state, formAction, isPending] = useActionState(action, initialState);

    return (
        <Form action={formAction} className='max-w-md mx-auto my-16 p-8 bg-white rounded-lg shadow-md'>
            <h1 className='text-2xl font-bold text-center mb-2'>Қош келдіңіз!</h1>
            <p className='text-center text-sm text-rose-600 font-semibold mb-2'>🔥 ТІРКЕУЛІ МҮШЕЛЕРГЕ АРНАЛҒАН 🔥</p>
            <p className='text-center text-sm text-gray-600 mb-6'>Тіркеліп, арнайы мүшелік ұсыныстарды алыңыз.</p>

            <div className='space-y-6'>
                {/* Email */}
                <div className='space-y-2'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                    Электрондық почта
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        autoComplete='email'
                        required
                        className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors'
                        placeholder='Электрондық поштаңызды енгізіңіз'
                    />
                </div>

                {/* Password */}
                <div className=''>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                    Құпиясөз
                    </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        autoComplete='new-password'
                        required
                        className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors'
                        placeholder='Create a password'
                    />
                </div>

                {/* Copywriting */}
                <div className='text-center'>
                    <p className='text-xs text-gray-500 mb-2'>⚡️ Мүшелер барлық тапсырыстардан қосымша 15% үнемдейді!</p>
                    <p className='text-xs text-gray-500 mb-4'>🛍️ Плагин 5000 тенгеден асатын тапсырыстар үшін тегін жеткізуді алады</p>
                </div>

                {/* Submit Button */}
                <button
                    type='submit'
                    disabled={isPending}
                    className={`w-full bg-rose-600 text-white py-3 rounded-md hover:bg-rose-700 transition-colors font-medium flex items-center justify-center gap-2 ${isPending ? 'cursor-not-allowed' : ''}`}
                >
                    {isPending ? (
                        <React.Fragment>
                            <Loader2 className='h-4 w-4 animate-spin' />
                            Кіру...
                        </React.Fragment>
                    ) : (
                        'Кіру'
                    )}
                </button>

                {state?.message && state.message.length > 0 && (
                    <p className='text-center text-sm text-red-600'>
                        {state.message}
                    </p>
                )}
            </div>
        </Form>
    );
};

export default SignIn;
