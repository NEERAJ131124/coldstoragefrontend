import { IoMdArrowDropright } from "react-icons/io";
import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";
import cx from "classnames";
import { ArrowIconProps, CheckBoxIconProps } from "../../../../Types/BonusUi.type";

export function ArrowIcon ({ isOpen, className }: ArrowIconProps) {
    const baseClass = "arrow";
    const classes = cx(
        baseClass,
        { [`${baseClass}--closed`]: !isOpen },
        { [`${baseClass}--open`]: isOpen },
        className
    );
    return <IoMdArrowDropright className={classes} />;
};

export function CheckBoxIcon ({ variant, onClick, ...rest }: CheckBoxIconProps) {
    switch (variant) {
        case "all":
            return (
                <span onClick={onClick}>
                    <FaCheckSquare {...rest} />
                </span>);
        case "none":
            return (
                <span onClick={onClick}>
                    <FaSquare {...rest} />
                </span>);
        case "some":
            return (
                <span onClick={onClick}>
                    <FaMinusSquare {...rest} />
                </span>);
        default:
            return null;
    }
};