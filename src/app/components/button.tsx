interface ButtonProps {
  nameButton: string;
}

export default function Button({nameButton}: ButtonProps) {
  return (
    <>
      <button 
        className="mt-10 mb-1 text-[#FFF] bg-pink-900 rounded-[18px] w-[282px] h-[59px]"
      >
        {nameButton}
      </button>
    </>
  )
}