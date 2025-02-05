import React from 'react'
import { Input }  from './ui/input'
import { FormControl } from './ui/form'
import { FormLabel } from './ui/form'
import { FormField } from './ui/form'
import { FormMessage } from './ui/form'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import { AuthFormSchema } from '@/lib/utils'

const formSchema = AuthFormSchema('sign-up');

interface CustomInputProps {
    form: UseFormReturn<z.infer<typeof formSchema>>,
    name: keyof z.infer<typeof formSchema>,
    label: string,
    placeholder: string


}




const CustomInput = ({form, name, label, placeholder}: CustomInputProps) => {
  return (
    <div>

      <FormField


            control={form.control}
            name={name}
            render={({ field }) => (
                <div className='form-item' >
                    <FormLabel className='form-label' >
                        {label}
                    </FormLabel>
                    <div className='flex w-full flex-col' >

                        <FormControl>
                            <Input placeholder={placeholder}
                            className='input-class'
                            type={name === 'password' ? 'password' : 'text'}
                            {...field}
                            />

                        </FormControl>
                        <FormMessage className='form-message mt-2 ' />
                    </div>
                </div>
            )}

            />
    </div>
  )
}

export default CustomInput
