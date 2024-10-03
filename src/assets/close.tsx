export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="#5e5555"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19"
    >
      <animate
        fill="freeze"
        attributeName="d"
        dur="0.4s"
        values="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19;M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"
      />
    </path>
  </svg>
);
