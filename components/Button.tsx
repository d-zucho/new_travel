import Image from 'next/image'

type ButtonProps = {
  type: 'button' | 'submit'
  title: string
  variant:
    | 'btn_dark_green'
    | 'btn_green'
    | 'btn_white_text'
    | 'btn_white'
    | 'btn_dark_green_outline'
  icon?: string
  full?: boolean
}

const Button = ({ type, title, variant, icon, full }: ButtonProps) => {
  const fullClass = full ? 'w-full' : ''
  return (
    <button
      type={type}
      className={`${variant} ${fullClass} {full ? &&'w-full'} flexCenter gap-3 rounded-full border`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className='bold-16 whitespace-nowrap cursor-pointer'>
        {title}
      </label>
    </button>
  )
}

export default Button
