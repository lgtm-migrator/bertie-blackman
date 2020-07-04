import React from 'react'
import classnames from 'classnames'

export interface FormTextInputProps {
  label: string
  width?: 'full' | 'half'
  className?: string
  required?: boolean
}

const FormTextInput = React.forwardRef<HTMLInputElement, FormTextInputProps>(
  ({ label, width = 'full', className, required = false }, ref) => (
    <div className={classnames('w-full px-3', width === 'full' ? 'w-full' : 'md:w-1/2', className)}>
      <input
        className="appearance-none w-full py-4 px-4 border-2 border-accent text-accent placeholder-accent leading-tight focus:outline-none text-lg"
        id={label}
        name={label}
        type="text"
        placeholder={label}
        aria-label={label}
        required={required}
        ref={ref}
      />
    </div>
  ),
)

FormTextInput.displayName = 'FormTextInput'

export default FormTextInput
