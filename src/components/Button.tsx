type ButtonProps = {
    value: string;
    className?: string;
    href?: string; // optional link
    onClick?: () => void; // optional click handler
}

export default function Button({ value, href = "#", onClick, className = "" }: ButtonProps) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`
        mt-5
        inline-block
        border-2 border-primary border-solid
        py-2 px-6
        w-fit
        text-white
        font-medium
        rounded-lg
        transition-all duration-300
        hover:bg-primary hover:text-black
        hover:shadow-lg
        ${className}
      `}
        >
            {value}
        </a>
    )
}
