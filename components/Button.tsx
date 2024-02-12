import Image from 'next/image'

type ButtonProps = {
  type: 'button' | 'submit'
  title: string
  variant: 'btn_dark_green'
  icon?: string
}

const Button = ({ type, title, variant, icon }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${variant} flexCenter gap-3 rounded-full border`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className='bold-16 whitespace-nowrap'>{title}</label>
    </button>
  )
}

export default Button
