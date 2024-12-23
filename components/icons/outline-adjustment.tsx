const OutlineAdjustment: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M18 12H20M18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12M6 6C6 7.10457 6.89543 8 8 8C9.10457 8 10 7.10457 10 6M6 6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6M6 6H4M10 6L20 6M14 12L4 12M6 18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18M6 18C6 16.8954 6.89543 16 8 16C9.10457 16 10 16.8954 10 18M6 18L4 18M10 18H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default OutlineAdjustment;
