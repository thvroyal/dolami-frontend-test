import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OutlineGlobeAlt } from "@/components/icons";

export default function Language() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <OutlineGlobeAlt />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_5487)">
              <rect
                y="0.0078125"
                width="16.8"
                height="12"
                rx="3"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0.0078125H7.2V5.60781H0V0.0078125Z"
                fill="#1A47B8"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.2 0.0078125V0.807813H16.8V0.0078125H7.2ZM7.2 1.60781V2.40781H16.8V1.60781H7.2ZM7.2 3.20781V4.00781H16.8V3.20781H7.2ZM7.2 4.80781V5.60781H16.8V4.80781H7.2ZM0 6.40781V7.20781H16.8V6.40781H0ZM0 8.00781V8.80781H16.8V8.00781H0ZM0 9.60781V10.4078H16.8V9.60781H0ZM0 11.2078V12.0078H16.8V11.2078H0Z"
                fill="#F93939"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.799805 0.807861V1.60786H1.5998V0.807861H0.799805ZM2.3998 0.807861V1.60786H3.1998V0.807861H2.3998ZM3.9998 0.807861V1.60786H4.7998V0.807861H3.9998ZM5.5998 0.807861V1.60786H6.3998V0.807861H5.5998ZM4.7998 1.60786V2.40786H5.5998V1.60786H4.7998ZM3.1998 1.60786V2.40786H3.9998V1.60786H3.1998ZM1.5998 1.60786V2.40786H2.3998V1.60786H1.5998ZM0.799805 2.40786V3.20786H1.5998V2.40786H0.799805ZM2.3998 2.40786V3.20786H3.1998V2.40786H2.3998ZM3.9998 2.40786V3.20786H4.7998V2.40786H3.9998ZM5.5998 2.40786V3.20786H6.3998V2.40786H5.5998ZM0.799805 4.00786V4.80786H1.5998V4.00786H0.799805ZM2.3998 4.00786V4.80786H3.1998V4.00786H2.3998ZM3.9998 4.00786V4.80786H4.7998V4.00786H3.9998ZM5.5998 4.00786V4.80786H6.3998V4.00786H5.5998ZM4.7998 3.20786V4.00786H5.5998V3.20786H4.7998ZM3.1998 3.20786V4.00786H3.9998V3.20786H3.1998ZM1.5998 3.20786V4.00786H2.3998V3.20786H1.5998Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_5487">
                <rect
                  y="0.0078125"
                  width="16.8"
                  height="12"
                  rx="3"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
          <span>English(US)</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.0078125" width="16.8" height="12" rx="3" fill="white" />
            <path
              d="M8.4001 8.80776C9.9465 8.80776 11.2001 7.55416 11.2001 6.00776C11.2001 4.46137 9.9465 3.20776 8.4001 3.20776C6.8537 3.20776 5.6001 4.46137 5.6001 6.00776C5.6001 7.55416 6.8537 8.80776 8.4001 8.80776Z"
              fill="#F93939"
            />
          </svg>
          <span>Japanese</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
