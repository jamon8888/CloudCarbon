export const PieChart = `<svg
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M14.7497 1.01468C14.4741 0.998446 14.25 1.22384 14.25 1.49998V9.49998L22.25 9.49998C22.5261 9.49998 22.7515 9.27593 22.7353 9.00027C22.6796 8.0549 22.4663 7.12426 22.103 6.24717C21.6758 5.21591 21.0497 4.27887 20.2604 3.48957C19.4711 2.70027 18.5341 2.07417 17.5028 1.647C16.6257 1.2837 15.6951 1.07035 14.7497 1.01468Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.5 4.49998C12.5 3.82296 11.9419 3.22085 11.2035 3.26706C9.66504 3.36333 8.17579 3.86466 6.88876 4.72462C5.44983 5.68608 4.32832 7.05264 3.66606 8.6515C3.00379 10.2504 2.83051 12.0097 3.16813 13.707C3.50575 15.4044 4.33911 16.9635 5.56282 18.1872C6.78653 19.4109 8.34563 20.2442 10.043 20.5819C11.7403 20.9195 13.4996 20.7462 15.0985 20.0839C16.6973 19.4217 18.0639 18.3001 19.0254 16.8612C19.8853 15.5742 20.3867 14.0849 20.4829 12.5465C20.5291 11.8081 19.927 11.25 19.25 11.25H12.5V4.49998ZM7.72212 5.97182C8.64349 5.35618 9.68996 4.96237 10.7797 4.8152C10.8973 4.79932 11 4.89211 11 5.01075V12.75H18.7392C18.8579 12.75 18.9507 12.8527 18.9348 12.9703C18.7876 14.06 18.3938 15.1065 17.7782 16.0279C16.9815 17.2201 15.8492 18.1494 14.5245 18.6981C13.1997 19.2468 11.742 19.3904 10.3356 19.1107C8.92924 18.8309 7.63741 18.1404 6.62348 17.1265C5.60955 16.1126 4.91905 14.8207 4.63931 13.4144C4.35957 12.008 4.50314 10.5503 5.05188 9.22552C5.60061 7.90076 6.52986 6.76846 7.72212 5.97182Z"
    fill="currentColor"
  /></svg
>`;
export const MeasureArrow = (isAscending) => `<svg
  width="12px"
  height="12px"
  viewBox="0 0 24 24"
  fill="currentColor"
  transform="${isAscending ? "scale(1 -1)" : "scale(1 1)"}"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18.3672 13.7775C18.8016 13.7775 19.0294 14.2935 18.7366 14.6145L12.3694 21.595C12.1711 21.8124 11.8289 21.8124 11.6306 21.595L5.26341 14.6145C4.97063 14.2935 5.19836 13.7775 5.63282 13.7775H10.4023L10.4023 2.5C10.4023 2.22386 10.6262 2 10.9023 2L13.4379 2C13.714 2 13.9379 2.22386 13.9379 2.5L13.9379 13.7775L18.3672 13.7775Z"
    fill="currentColor"
  />
</svg>`;

export const SelectedCheckmark = (className) => `<svg
  height="16px"
  width="16px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.4977 18.1532L18.5873 8.89285L16.8928 7.4126L10.3986 14.8467L7.01172 11.409L5.40894 12.9881L10.4977 18.1532Z"
    class="${className}"
    fill="currentColor"
  />
</svg>`;

export const ExcludeIcon = `<svg
  height="18px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.61339 5.90083C7.7354 5.77882 7.93322 5.77882 8.05523 5.90083L11.7791 9.62468C11.9011 9.74669 12.0989 9.74669 12.2209 9.62468L15.9448 5.90083C16.0668 5.77882 16.2646 5.77882 16.3866 5.90083L17.9085 7.42272C18.0305 7.54473 18.0305 7.74255 17.9085 7.86456L14.1846 11.5884C14.0626 11.7104 14.0626 11.9082 14.1846 12.0302L17.9085 15.7541C18.0305 15.8761 18.0305 16.0739 17.9085 16.1959L16.3866 17.7178C16.2646 17.8398 16.0668 17.8398 15.9448 17.7178L12.2209 13.994C12.0989 13.872 11.9011 13.872 11.7791 13.994L8.05523 17.7178C7.93322 17.8398 7.7354 17.8398 7.61339 17.7178L6.09151 16.1959C5.9695 16.0739 5.9695 15.8761 6.09151 15.7541L9.81536 12.0302C9.93737 11.9082 9.93737 11.7104 9.81536 11.5884L6.09151 7.86456C5.9695 7.74255 5.9695 7.54473 6.09151 7.42272L7.61339 5.90083Z"
  />
</svg>`;

const PinIcon = (
  fill
) => `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.91651 8.45768C10.2387 8.45768 10.5072 8.19127 10.4148 7.88264C10.2707 7.40123 9.94726 6.95593 9.47472 6.60153C8.81834 6.10924 7.92811 5.83268 6.99985 5.83268C6.07159 5.83268 5.18135 6.10924 4.52497 6.60153C4.05244 6.95593 3.72898 7.40123 3.58485 7.88264C3.49245 8.19127 3.76102 8.45768 4.08318 8.45768L9.91651 8.45768Z" fill="${fill}"/>
<path d="M9.91651 8.45768C10.2387 8.45768 10.5072 8.19127 10.4148 7.88264C10.2707 7.40123 9.94726 6.95593 9.47472 6.60153C8.81834 6.10924 7.92811 5.83268 6.99985 5.83268C6.07159 5.83268 5.18135 6.10924 4.52497 6.60153C4.05244 6.95593 3.72898 7.40123 3.58485 7.88264C3.49245 8.19127 3.76102 8.45768 4.08318 8.45768L9.91651 8.45768Z" fill="${fill}"/>
<path d="M4.37485 1.16602C4.21377 1.16602 4.08091 1.29738 4.10586 1.45652C4.18611 1.96825 4.47677 2.44738 4.93745 2.81593C5.48443 3.25352 6.2263 3.49935 6.99985 3.49935C7.7734 3.49935 8.51526 3.25352 9.06224 2.81593C9.52293 2.44739 9.81359 1.96825 9.89383 1.45652C9.91879 1.29738 9.78593 1.16602 9.62485 1.16602L4.37485 1.16602Z" fill="${fill}"/>
<path d="M5.24985 1.74935H8.74985V7.58268H5.24985V1.74935Z" fill="${fill}"/>
<path d="M6.70818 5.83268H7.29151V11.9739C7.29151 12.1551 7.24935 12.3337 7.16835 12.4957L7.06507 12.7022C7.0382 12.756 6.9615 12.756 6.93463 12.7022L6.83135 12.4957C6.75035 12.3337 6.70818 12.1551 6.70818 11.9739V5.83268Z" fill="${fill}"/>
</svg>`;

export const PinSetIcon = PinIcon("#374151");
export const PinSetHoverIcon = PinIcon("#9CA3AF");

export const PinUnsetIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.77442 9.71443C9.05342 9.87551 9.41922 9.77908 9.49351 9.46559C9.6094 8.97662 9.55192 8.42925 9.31989 7.88606C8.9976 7.13154 8.36491 6.44691 7.56101 5.98278C6.75712 5.51865 5.84787 5.31304 5.03329 5.41118C4.44686 5.48184 3.94408 5.70575 3.57856 6.0506C3.34422 6.27168 3.4436 6.63668 3.72261 6.79776L8.77442 9.71443Z" fill="#9CA3AF"/>
<path d="M8.77442 9.71443C9.05342 9.87551 9.41922 9.77908 9.49351 9.46559C9.6094 8.97662 9.55192 8.42925 9.31989 7.88606C8.9976 7.13154 8.36491 6.44691 7.56101 5.98278C6.75712 5.51865 5.84787 5.31304 5.03329 5.41118C4.44686 5.48184 3.94408 5.70575 3.57856 6.0506C3.34422 6.27168 3.4436 6.63668 3.72261 6.79776L8.77442 9.71443Z" fill="#9CA3AF"/>
<path d="M7.62103 0.628831C7.48153 0.548289 7.30079 0.595622 7.24283 0.745918C7.05646 1.22921 7.06861 1.78949 7.2833 2.339C7.53821 2.99145 8.05777 3.57528 8.72768 3.96206C9.39759 4.34883 10.163 4.50687 10.8555 4.4014C11.4387 4.31257 11.93 4.04295 12.2554 3.6399C12.3565 3.51456 12.3072 3.33437 12.1677 3.25383L7.62103 0.628831Z" fill="#9CA3AF"/>
<path d="M8.08714 1.57151L11.1182 3.32151L8.20156 8.37333L5.17047 6.62333L8.08714 1.57151Z" fill="#9CA3AF"/>
<path d="M7.30842 5.83695L7.8136 6.12862L4.74298 11.4471C4.65242 11.604 4.52658 11.7376 4.37544 11.8374L4.18271 11.9646C4.13257 11.9977 4.06615 11.9594 4.06975 11.8994L4.08359 11.6689C4.09444 11.4881 4.14724 11.3123 4.2378 11.1554L7.30842 5.83695Z" fill="#9CA3AF"/>
</svg>`;

export const PinHoverUnsetIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.03968 1.45652C4.01473 1.29738 4.14758 1.16602 4.30867 1.16602H9.55867C9.71975 1.16602 9.85261 1.29738 9.82765 1.45652C9.7474 1.96825 9.45674 2.44739 8.99606 2.81593C8.89789 2.89447 8.79345 2.96682 8.68367 3.03269V6.18436C8.94633 6.29809 9.19036 6.43789 9.40854 6.60153C9.88107 6.95593 10.2045 7.40123 10.3487 7.88264C10.4411 8.19127 10.1083 8.4282 10.0327 8.4282L5.18367 4.66602V3.03269C5.07389 2.96682 4.96944 2.89447 4.87127 2.81593C4.41059 2.44738 4.11993 1.96825 4.03968 1.45652Z" fill="#9CA3AF"/>
<path d="M4.92939 6.31102C4.71267 6.40733 4.68048 6.43204 4.55412 6.52903C4.52742 6.54951 4.49652 6.57323 4.45879 6.60153C3.98626 6.95593 3.66279 7.40123 3.51867 7.88264C3.42627 8.19127 3.69483 8.45768 4.017 8.45768H6.642V11.9739C6.642 12.1551 6.68417 12.3337 6.76517 12.4957L6.86845 12.7022C6.89532 12.756 6.97201 12.756 6.99888 12.7022L7.10216 12.4957C7.18316 12.3337 7.22533 12.1551 7.22533 11.9739V8.45768H7.68856L4.92939 6.31102Z" fill="#9CA3AF"/>
<path d="M1.90372 2.48111C1.77657 2.38222 1.59332 2.40513 1.49442 2.53228L1.31536 2.7625C1.21646 2.88966 1.23937 3.0729 1.36652 3.1718L12.0967 11.5175C12.1126 11.5299 12.1294 11.5404 12.1468 11.5489C12.2684 11.6091 12.4195 11.5776 12.506 11.4664L12.6851 11.2361C12.784 11.109 12.7611 10.9257 12.6339 10.8268L1.90372 2.48111Z" fill="#9CA3AF"/>
</svg>`;