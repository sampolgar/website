import Link from 'next/link';

export const Card = ({
  children,
  title,
  icon,
  image,
  arrow,
  href,
  ...props
}) => {
  return (
    <Link href={href} {...props}>
      {children}
      <span>{icon}</span>
      <span>{title}</span>
    </Link>
  );
};

export const Cards = ({ children, num, ...props }) => {
  return <div {...props}>{children}</div>;
};
