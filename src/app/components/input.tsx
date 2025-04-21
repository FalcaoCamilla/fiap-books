interface InputProps {
  label: string;
  placeholder?: string;
}

export default function Button(inputProps: InputProps) {
  return (
    <>
      <p 
        className="mt-1 mb-1 text-[#FFF] font-sans text-base font-bold"
      >
        {inputProps.label}
      </p>
      <input 
        className="mt-1 mb-1 w-[50%] border border-pink-900 bg-black-800 rounded-[25px] h-[65px] text-[#FFF] p-2" 
        type="text"
        placeholder={inputProps.placeholder}
      />
    </>
  )
}