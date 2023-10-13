import React, {ButtonHTMLAttributes} from "react";

export interface CubeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    children: any;
}

const Button: React.FC<CubeButtonProps> = ({loading = false, children, className, ...props}) => {
    return (
        <button
            {...props}
            className={`flex border-[1px] border-transparent overflow-hidden relative group rounded-md ${className}`}
        >
            {loading ? 'Loading...' : children}

        </button>
    );
};

export default Button;
