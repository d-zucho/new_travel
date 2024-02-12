import Image from 'next/image'

type ButtonProps = {
  type: 'button' | 'submit'
  title: string
  variant: 'btn_dark_green' | 'btn_green' | 'btn_white_text'
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
